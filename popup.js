document.addEventListener('DOMContentLoaded', () => {
  const bookmarksList = document.getElementById('bookmarks-list');
  const bookmarkCount = document.getElementById('bookmark-count');
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const sourceTabs = document.querySelectorAll('.source-tab');
  const btnNewtab = document.getElementById('btn-newtab');
  const btnBookmarksMgr = document.getElementById('btn-bookmarks-mgr');
  const footerNewtabBtn = document.getElementById('footer-newtab-btn');
  const popupBreadcrumb = document.getElementById('popup-breadcrumb');
  const btnPopupBack = document.getElementById('btn-popup-back');
  const breadcrumbTitle = document.getElementById('breadcrumb-title');

  const THEME_FOLDER_NAME = "我的主題書籤";
  let themeBookmarks = [];
  let barBookmarks = [];
  let currentSource = 'theme';
  let searchQuery = '';
  let folderNavStack = []; // Array of { id, title, nodes }

  // Initialize
  loadAllBookmarks();

  // Tab switching
  sourceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sourceTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentSource = tab.getAttribute('data-source');
      folderNavStack = [];
      renderBookmarks();
    });
  });

  // Folder back button
  if (btnPopupBack) {
    btnPopupBack.addEventListener('click', () => {
      if (folderNavStack.length > 0) {
        folderNavStack.pop();
        renderBookmarks();
      }
    });
  }

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('hidden', searchQuery.length === 0);
      }
      renderBookmarks();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      searchInput.focus();
      renderBookmarks();
    });
  }

  // Action buttons
  if (btnNewtab) {
    btnNewtab.addEventListener('click', () => {
      chrome.tabs.create({ url: 'chrome://newtab' });
      window.close();
    });
  }

  if (footerNewtabBtn) {
    footerNewtabBtn.addEventListener('click', () => {
      chrome.tabs.create({ url: 'chrome://newtab' });
      window.close();
    });
  }

  if (btnBookmarksMgr) {
    btnBookmarksMgr.addEventListener('click', () => {
      chrome.tabs.create({ url: 'chrome://bookmarks' });
      window.close();
    });
  }

  function loadAllBookmarks() {
    if (!chrome.bookmarks) {
      showError('無法存取書籤（需要權限）');
      return;
    }

    let loadedBar = false;
    let loadedTheme = false;

    function checkReady() {
      if (loadedBar && loadedTheme) {
        // If theme bookmarks are empty but bar has bookmarks, default to bar tab
        if (themeBookmarks.length === 0 && barBookmarks.length > 0) {
          currentSource = 'bar';
          sourceTabs.forEach(t => {
            t.classList.toggle('active', t.getAttribute('data-source') === 'bar');
          });
        }
        renderBookmarks();
      }
    }

    // 1. Fetch Bookmarks Bar (id "1")
    chrome.bookmarks.getChildren("1", (nodes) => {
      if (!chrome.runtime.lastError && nodes) {
        barBookmarks = nodes;
      }
      loadedBar = true;
      checkReady();
    });

    // 2. Fetch "我的主題書籤"
    chrome.bookmarks.search({ title: THEME_FOLDER_NAME }, (results) => {
      const targetFolder = results ? results.find(node => !node.url) : null;
      if (targetFolder) {
        chrome.bookmarks.getChildren(targetFolder.id, (nodes) => {
          if (!chrome.runtime.lastError && nodes) {
            themeBookmarks = nodes;
          }
          loadedTheme = true;
          checkReady();
        });
      } else {
        loadedTheme = true;
        checkReady();
      }
    });
  }

  function renderBookmarks() {
    if (!bookmarksList) return;
    bookmarksList.innerHTML = '';

    const isInsideFolder = folderNavStack.length > 0;

    // Update breadcrumb
    if (popupBreadcrumb) {
      if (isInsideFolder) {
        popupBreadcrumb.classList.remove('hidden');
        if (breadcrumbTitle) {
          const currentFolder = folderNavStack[folderNavStack.length - 1];
          breadcrumbTitle.textContent = `返回 (${currentFolder.title})`;
        }
      } else {
        popupBreadcrumb.classList.add('hidden');
      }
    }

    // Get current source list
    const sourceList = isInsideFolder
      ? folderNavStack[folderNavStack.length - 1].nodes
      : (currentSource === 'theme' ? themeBookmarks : barBookmarks);

    // Filter by search
    const filteredList = (sourceList || []).filter(item => {
      if (!searchQuery) return true;
      const titleMatch = (item.title || '').toLowerCase().includes(searchQuery);
      const urlMatch = item.url ? (item.url || '').toLowerCase().includes(searchQuery) : false;
      return titleMatch || urlMatch;
    });

    // Update count badge
    if (bookmarkCount) {
      bookmarkCount.textContent = filteredList.length;
    }

    if (filteredList.length === 0) {
      const emptyLi = document.createElement('li');
      emptyLi.className = 'empty-state';

      if (searchQuery) {
        emptyLi.innerHTML = `
          <div class="empty-icon">🔍</div>
          <div class="empty-title">找不到符合的書籤</div>
          <div class="empty-desc">試試搜尋其他關鍵字或網址</div>
        `;
      } else {
        const folderName = isInsideFolder
          ? folderNavStack[folderNavStack.length - 1].title
          : (currentSource === 'theme' ? THEME_FOLDER_NAME : '書籤列');
        emptyLi.innerHTML = `
          <div class="empty-icon">📂</div>
          <div class="empty-title">「${folderName}」目前是空的</div>
          <div class="empty-desc">將常用網頁加入此處即可快速存取</div>
        `;
      }

      bookmarksList.appendChild(emptyLi);
      return;
    }

    filteredList.forEach(item => {
      const li = document.createElement('li');

      if (item.url) {
        // Bookmark link
        const a = document.createElement('a');
        a.className = 'bookmark-item';
        a.href = item.url;
        a.title = item.title || item.url;

        let hostname = '';
        try {
          const urlObj = new URL(item.url);
          hostname = urlObj.hostname.replace(/^www\./, '');
        } catch (e) {
          hostname = item.url;
        }

        const displayTitle = item.title || hostname;

        // Icon Wrapper
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'item-icon-wrapper';

        const img = document.createElement('img');
        img.className = 'item-icon';
        img.alt = '';
        img.src = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
        img.onerror = () => {
          img.style.display = 'none';
          iconWrapper.textContent = (displayTitle || '★').charAt(0).toUpperCase();
          iconWrapper.style.fontSize = '12px';
          iconWrapper.style.fontWeight = '600';
          iconWrapper.style.color = '#64c8ff';
        };

        iconWrapper.appendChild(img);

        // Details
        const details = document.createElement('div');
        details.className = 'item-details';

        const titleEl = document.createElement('span');
        titleEl.className = 'item-title';
        titleEl.textContent = displayTitle;

        const domainEl = document.createElement('span');
        domainEl.className = 'item-domain';
        domainEl.textContent = hostname;

        details.appendChild(titleEl);
        details.appendChild(domainEl);

        // Arrow
        const arrowEl = document.createElement('span');
        arrowEl.className = 'item-arrow';
        arrowEl.textContent = '↗';

        a.appendChild(iconWrapper);
        a.appendChild(details);
        a.appendChild(arrowEl);

        a.addEventListener('click', (e) => {
          e.preventDefault();
          chrome.tabs.create({ url: item.url });
          window.close();
        });

        li.appendChild(a);
      } else {
        // Folder item!
        const div = document.createElement('div');
        div.className = 'bookmark-item folder-item';
        div.title = `${item.title} (資料夾)`;

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'item-icon-wrapper';
        iconWrapper.innerHTML = `
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
        `;

        const details = document.createElement('div');
        details.className = 'item-details';

        const titleEl = document.createElement('span');
        titleEl.className = 'item-title';
        titleEl.textContent = item.title;

        const domainEl = document.createElement('span');
        domainEl.className = 'item-domain';
        domainEl.textContent = '資料夾';

        details.appendChild(titleEl);
        details.appendChild(domainEl);

        const arrowEl = document.createElement('span');
        arrowEl.className = 'item-arrow';
        arrowEl.textContent = '›';

        div.appendChild(iconWrapper);
        div.appendChild(details);
        div.appendChild(arrowEl);

        div.addEventListener('click', () => {
          chrome.bookmarks.getChildren(item.id, (children) => {
            folderNavStack.push({
              id: item.id,
              title: item.title,
              nodes: children || []
            });
            renderBookmarks();
          });
        });

        li.appendChild(div);
      }

      bookmarksList.appendChild(li);
    });
  }

  function showError(msg) {
    if (!bookmarksList) return;
    bookmarksList.innerHTML = `
      <li class="empty-state">
        <div class="empty-icon">⚠️</div>
        <div class="empty-title">${msg}</div>
      </li>
    `;
  }
});