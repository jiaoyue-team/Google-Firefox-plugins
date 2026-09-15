document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        'zh-TW': {
            pageTitle: "我的新首頁",
            bookmarksTitle: "我的書籤",
            weatherTooltip: "點擊查看預報",
            searchPlaceholder: "在 Google 上搜尋...",
            voiceBtnTitle: "語音輸入",
            voiceListening: "請開始說話...",
            voiceError: "語音辨識失敗，請重試",
            imageSearchBtnTitle: "以圖搜圖",
            aiBtnTitle: "AI 模式",
            settingsTitle: "設定",
            bgBtnTitle: "更換背景",
            settingsHeader: "設定",
            tabDisplay: "畫面設定",
            tabText: "文字設定",
            showAi: "顯示 AI 模式按鈕",
            aiEngine: "預設 AI 引擎",
            showVoice: "顯示語音輸入按鈕",
            showImageSearch: "顯示以圖搜圖按鈕",
            showDockText: "顯示書籤文字",
            searchPosY: "垂直位置 (Y軸)",
            searchPosX: "水平位置 (X軸)",
            searchScale: "大小縮放",
            dockMode: "Dock 欄模式",
            dockModePopup: "頂部懸浮 (預設)",
            dockModeBottom: "底部常駐 (Apple)",
            dockAutoHide: "自動隱藏 Dock 欄",
            resetBtnTitle: "重設",
            globalLanguage: "全局語言",
            fontFamily: "字體選擇",
            fontOptionSystem: "系統預設 (System UI)",
            fontOptionDefault: "預設 (無襯線)",
            fontOptionJhengHei: "微軟正黑體",
            fontOptionMingLiU: "新細明體",
            fontOptionNotoSans: "思源黑體",
            fontOptionMono: "等寬字體",
            fontOptionKaiti: "楷體",
            fontColor: "文字顏色",
            clockSize: "時鐘大小",
            closeBtn: "關閉",
            bgHeader: "選擇背景圖片",
            builtInBg: "內建圖片",
            builtInHint: "請在 newtab.js 中設定圖片檔名",
            builtInNone: "沒有設定內建圖片",
            modeLight: "淺色模式",
            modeDark: "深色模式",
            onlineBg: "網路圖片連結",
            onlinePlaceholder: "貼上圖片網址 (https://...)",
            applyBtn: "套用",
            localBg: "本地圖片",
            localUploadBtn: "📂 選擇電腦中的圖片",
            closeWindowBtn: "關閉視窗",
            lensHeader: "Google 智慧鏡頭",
            dropZoneText: "拖放圖片到這裡",
            dropZoneOr: "或是",
            dropZoneClick: "點擊上傳",
            dropZoneHint: "支援 Ctrl+V 貼上圖片",
            bookmarksHeader: "我的書籤",
            bookmarksNoPerm: "無法存取書籤 (需要權限)",
            bookmarksCreated: (folder) => `已為您建立「${folder}」資料夾。<br>請將書籤移至此資料夾，即可隱藏原生的書籤列。`,
            bookmarksEmpty: (folder) => `「${folder}」資料夾是空的<br>請將書籤移入此處`,
            weatherLocating: "定位中...",
            weatherLocFail: "定位失敗",
            weatherLoadFail: "天氣載入失敗",
            forecastTitle: "未來 8 小時預報",
            imgTooLarge: "圖片太大，無法儲存。請試著用小一點的圖片。",
            weatherCodes: {
                0: "晴朗", 1: "大致晴朗", 2: "多雲", 3: "陰天",
                45: "起霧", 48: "結霜霧", 51: "毛毛雨", 53: "小雨",
                61: "下雨", 63: "中雨", 65: "大雨", 80: "陣雨",
                95: "雷雨", 96: "雷雨夾冰雹", unknown: "未知"
            },
            speechLang: "zh-TW"
        },
        'zh-CN': {
            pageTitle: "我的新主页",
            bookmarksTitle: "我的书签",
            weatherTooltip: "点击查看预报",
            searchPlaceholder: "在 Google 上搜索...",
            voiceBtnTitle: "语音输入",
            voiceListening: "请开始说话...",
            voiceError: "语音识别失败，请重试",
            imageSearchBtnTitle: "以图搜图",
            aiBtnTitle: "AI 模式",
            settingsTitle: "设置",
            bgBtnTitle: "更换背景",
            settingsHeader: "设置",
            tabDisplay: "画面设置",
            tabText: "文字设置",
            showAi: "显示 AI 模式按钮",
            aiEngine: "默认 AI 引擎",
            showVoice: "显示语音输入按钮",
            showImageSearch: "显示以图搜图按钮",
            showDockText: "显示书签文字",
            searchPosY: "垂直位置 (Y轴)",
            searchPosX: "水平位置 (X轴)",
            searchScale: "大小缩放",
            dockMode: "Dock 栏模式",
            dockModePopup: "顶部悬浮 (默认)",
            dockModeBottom: "底部常驻 (Apple)",
            dockAutoHide: "自动隐藏 Dock 栏",
            resetBtnTitle: "重置",
            globalLanguage: "全局语言",
            fontFamily: "字体选择",
            fontOptionSystem: "系统默认 (System UI)",
            fontOptionDefault: "默认 (无衬线)",
            fontOptionJhengHei: "微软雅黑 / 微软正黑体",
            fontOptionMingLiU: "新宋体 / 新细明体",
            fontOptionNotoSans: "思源黑体",
            fontOptionMono: "等宽字体",
            fontOptionKaiti: "楷体",
            fontColor: "文字颜色",
            clockSize: "时钟大小",
            closeBtn: "关闭",
            bgHeader: "选择背景图片",
            builtInBg: "内置图片",
            builtInHint: "请在 newtab.js 中设置图片文件名",
            builtInNone: "没有设置内置图片",
            modeLight: "浅色模式",
            modeDark: "深色模式",
            onlineBg: "网络图片链接",
            onlinePlaceholder: "粘贴图片网址 (https://...)",
            applyBtn: "应用",
            localBg: "本地图片",
            localUploadBtn: "📂 选择电脑中的图片",
            closeWindowBtn: "关闭窗口",
            lensHeader: "Google 智慧镜头",
            dropZoneText: "拖放图片到这里",
            dropZoneOr: "或者",
            dropZoneClick: "点击上传",
            dropZoneHint: "支持 Ctrl+V 粘贴图片",
            bookmarksHeader: "我的书签",
            bookmarksNoPerm: "无法访问书签 (需要权限)",
            bookmarksCreated: (folder) => `已为您创建「${folder}」文件夹。<br>请将书签移至此文件夹，即可隐藏原生书签栏。`,
            bookmarksEmpty: (folder) => `「${folder}」文件夹是空的<br>请将书签移入此处`,
            weatherLocating: "定位中...",
            weatherLocFail: "定位失败",
            weatherLoadFail: "天气加载失败",
            forecastTitle: "未来 8 小时预报",
            imgTooLarge: "图片太大，无法保存。请尝试使用较小的图片。",
            weatherCodes: {
                0: "晴朗", 1: "大致晴朗", 2: "多云", 3: "阴天",
                45: "起雾", 48: "结霜雾", 51: "毛毛雨", 53: "小雨",
                61: "下雨", 63: "中雨", 65: "大雨", 80: "阵雨",
                95: "雷雨", 96: "雷雨伴有冰雹", unknown: "未知"
            },
            speechLang: "zh-CN"
        },
        'en': {
            pageTitle: "My New Tab",
            bookmarksTitle: "My Bookmarks",
            weatherTooltip: "Click to view forecast",
            searchPlaceholder: "Search on Google...",
            voiceBtnTitle: "Voice Input",
            voiceListening: "Listening...",
            voiceError: "Voice recognition failed, please retry",
            imageSearchBtnTitle: "Search by Image",
            aiBtnTitle: "AI Mode",
            settingsTitle: "Settings",
            bgBtnTitle: "Change Background",
            settingsHeader: "Settings",
            tabDisplay: "Display",
            tabText: "Text & Font",
            showAi: "Show AI Mode Button",
            aiEngine: "Default AI Engine",
            showVoice: "Show Voice Input Button",
            showImageSearch: "Show Image Search Button",
            showDockText: "Show Bookmark Labels",
            searchPosY: "Vertical Position (Y)",
            searchPosX: "Horizontal Position (X)",
            searchScale: "Size Scale",
            dockMode: "Dock Bar Mode",
            dockModePopup: "Top Floating",
            dockModeBottom: "Bottom Dock",
            dockAutoHide: "Auto-hide Dock",
            resetBtnTitle: "Reset",
            globalLanguage: "Global Language",
            fontFamily: "Font Family",
            fontOptionSystem: "System Default (System UI)",
            fontOptionDefault: "Default (Sans-serif)",
            fontOptionJhengHei: "Microsoft JhengHei",
            fontOptionMingLiU: "PMingLiU",
            fontOptionNotoSans: "Noto Sans",
            fontOptionMono: "Monospace",
            fontOptionKaiti: "KaiTi",
            fontColor: "Text Color",
            clockSize: "Clock Size",
            closeBtn: "Close",
            bgHeader: "Choose Background",
            builtInBg: "Built-in Images",
            builtInHint: "Please configure image filenames in newtab.js",
            builtInNone: "No built-in images configured",
            modeLight: "Light Mode",
            modeDark: "Dark Mode",
            onlineBg: "Image URL",
            onlinePlaceholder: "Paste image URL (https://...)",
            applyBtn: "Apply",
            localBg: "Local Image",
            localUploadBtn: "📂 Choose Image from Computer",
            closeWindowBtn: "Close Window",
            lensHeader: "Google Lens",
            dropZoneText: "Drag and drop an image here",
            dropZoneOr: "or",
            dropZoneClick: "click to upload",
            dropZoneHint: "Supports Ctrl+V to paste image",
            bookmarksHeader: "My Bookmarks",
            bookmarksNoPerm: "Cannot access bookmarks (Permission required)",
            bookmarksCreated: (folder) => `Created "${folder}" folder for you.<br>Move your bookmarks here to hide the native bar.`,
            bookmarksEmpty: (folder) => `"${folder}" folder is empty.<br>Please move bookmarks here.`,
            weatherLocating: "Locating...",
            weatherLocFail: "Location failed",
            weatherLoadFail: "Failed to load weather",
            forecastTitle: "Next 8 Hours Forecast",
            imgTooLarge: "Image too large to save. Please try a smaller image.",
            weatherCodes: {
                0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
                45: "Fog", 48: "Depositing rime fog", 51: "Light drizzle", 53: "Moderate drizzle",
                61: "Slight rain", 63: "Moderate rain", 65: "Heavy rain", 80: "Rain showers",
                95: "Thunderstorm", 96: "Thunderstorm with hail", unknown: "Unknown"
            },
            speechLang: "en-US"
        },
        'ja': {
            pageTitle: "新しいタブ",
            bookmarksTitle: "ブックマーク",
            weatherTooltip: "クリックして天気予報を表示",
            searchPlaceholder: "Google で検索...",
            voiceBtnTitle: "音声入力",
            voiceListening: "お話しください...",
            voiceError: "音声認識に失敗しました。もう一度お試しください",
            imageSearchBtnTitle: "画像で検索",
            aiBtnTitle: "AI モード",
            settingsTitle: "設定",
            bgBtnTitle: "背景を変更",
            settingsHeader: "設定",
            tabDisplay: "画面設定",
            tabText: "テキスト設定",
            showAi: "AIモードボタンを表示",
            aiEngine: "既定の AI エンジン",
            showVoice: "音声入力ボタンを表示",
            showImageSearch: "画像検索ボタンを表示",
            showDockText: "ブックマーク名を表示",
            searchPosY: "垂直位置 (Y軸)",
            searchPosX: "水平位置 (X軸)",
            searchScale: "サイズ拡大縮小",
            dockMode: "Dock モード",
            dockModePopup: "上部フロート (既定)",
            dockModeBottom: "下部固定 (Apple)",
            dockAutoHide: "Dock を自動的に非表示",
            resetBtnTitle: "リセット",
            globalLanguage: "全体の言語",
            fontFamily: "フォント選択",
            fontOptionSystem: "システム既定 (System UI)",
            fontOptionDefault: "既定 (ゴシック体)",
            fontOptionJhengHei: "Microsoft JhengHei",
            fontOptionMingLiU: "明朝体",
            fontOptionNotoSans: "Noto Sans",
            fontOptionMono: "等幅フォント",
            fontOptionKaiti: "楷書体",
            fontColor: "文字色",
            clockSize: "時計のサイズ",
            closeBtn: "閉じる",
            bgHeader: "背景画像の選択",
            builtInBg: "標準画像",
            builtInHint: "newtab.js で画像ファイル名を設定してください",
            builtInNone: "標準画像が設定されていません",
            modeLight: "ライトモード",
            modeDark: "ダークモード",
            onlineBg: "Web画像リンク",
            onlinePlaceholder: "画像URLを貼り付け (https://...)",
            applyBtn: "適用",
            localBg: "ローカル画像",
            localUploadBtn: "📂 パソコンから画像を選択",
            closeWindowBtn: "ウィンドウを閉じる",
            lensHeader: "Google レンズ",
            dropZoneText: "ここに画像をドラッグ＆ドロップ",
            dropZoneOr: "または",
            dropZoneClick: "クリックしてアップロード",
            dropZoneHint: "Ctrl+V で画像の貼り付けにも対応",
            bookmarksHeader: "ブックマーク",
            bookmarksNoPerm: "ブックマークにアクセスできません (権限が必要です)",
            bookmarksCreated: (folder) => `「${folder}」フォルダを作成しました。<br>ここにブックマークを移動してください。`,
            bookmarksEmpty: (folder) => `「${folder}」フォルダは空です<br>ここにブックマークを移動してください`,
            weatherLocating: "位置情報を取得中...",
            weatherLocFail: "位置情報の取得に失敗しました",
            weatherLoadFail: "天気の読み込みに失敗しました",
            forecastTitle: "今後8時間の天気予報",
            imgTooLarge: "画像が大きすぎるため保存できません。より小さい画像をお試しください。",
            weatherCodes: {
                0: "快晴", 1: "晴れ", 2: "一部曇り", 3: "曇り",
                45: "霧", 48: "着氷性の霧", 51: "小雨", 53: "雨",
                61: "弱い雨", 63: "雨", 65: "激しい雨", 80: "にわか雨",
                95: "雷雨", 96: "雹を伴う雷雨", unknown: "不明"
            },
            speechLang: "ja-JP"
        },
        'ko': {
            pageTitle: "새 탭",
            bookmarksTitle: "내 북마크",
            weatherTooltip: "일기 예보를 보려면 클릭하세요",
            searchPlaceholder: "Google 검색...",
            voiceBtnTitle: "음성 입력",
            voiceListening: "말씀하세요...",
            voiceError: "음성 인식에 실패했습니다. 다시 시도해주세요",
            imageSearchBtnTitle: "이미지로 검색",
            aiBtnTitle: "AI 모드",
            settingsTitle: "설정",
            bgBtnTitle: "배경 변경",
            settingsHeader: "설정",
            tabDisplay: "화면 설정",
            tabText: "텍스트 설정",
            showAi: "AI 모드 버튼 표시",
            aiEngine: "기본 AI 엔진",
            showVoice: "음성 입력 버튼 표시",
            showImageSearch: "이미지 검색 버튼 표시",
            showDockText: "북마크 이름 표시",
            searchPosY: "수직 위치 (Y축)",
            searchPosX: "수평 위치 (X축)",
            searchScale: "크기 조절",
            dockMode: "Dock 모드",
            dockModePopup: "상단 플로팅 (기본)",
            dockModeBottom: "하단 고정 (Apple)",
            dockAutoHide: "Dock 자동 숨김",
            resetBtnTitle: "초기화",
            globalLanguage: "전체 언어",
            fontFamily: "글꼴 선택",
            fontOptionSystem: "시스템 기본 (System UI)",
            fontOptionDefault: "기본 (고딕)",
            fontOptionJhengHei: "Microsoft JhengHei",
            fontOptionMingLiU: "명조체",
            fontOptionNotoSans: "Noto Sans (본고딕)",
            fontOptionMono: "고정폭 글꼴",
            fontOptionKaiti: "해서체",
            fontColor: "글자 색상",
            clockSize: "시계 크기",
            closeBtn: "닫기",
            bgHeader: "배경 이미지 선택",
            builtInBg: "내장 이미지",
            builtInHint: "newtab.js에서 이미지 파일 이름을 설정하세요",
            builtInNone: "설정된 내장 이미지가 없습니다",
            modeLight: "라이트 모드",
            modeDark: "다크 모드",
            onlineBg: "웹 이미지 링크",
            onlinePlaceholder: "이미지 URL 붙여넣기 (https://...)",
            applyBtn: "적용",
            localBg: "로컬 이미지",
            localUploadBtn: "📂 컴퓨터에서 이미지 선택",
            closeWindowBtn: "창 닫기",
            lensHeader: "Google 렌즈",
            dropZoneText: "여기에 이미지를 드래그 앤 드롭",
            dropZoneOr: "또는",
            dropZoneClick: "클릭하여 업로드",
            dropZoneHint: "Ctrl+V 로 이미지 붙여넣기 지원",
            bookmarksHeader: "내 북마크",
            bookmarksNoPerm: "북마크에 접근할 수 없습니다 (권한 필요)",
            bookmarksCreated: (folder) => `「${folder}」 폴더를 생성했습니다.<br>북마크를 이 폴더로 이동해주세요.`,
            bookmarksEmpty: (folder) => `「${folder}」 폴더가 비어 있습니다.<br>북마크를 이곳으로 이동해주세요`,
            weatherLocating: "위치 확인 중...",
            weatherLocFail: "위치 확인 실패",
            weatherLoadFail: "날씨 정보를 불러오지 못했습니다",
            forecastTitle: "향후 8시간 예보",
            imgTooLarge: "이미지가 너무 커서 저장할 수 없습니다. 더 작은 이미지를 사용해주세요.",
            weatherCodes: {
                0: "맑음", 1: "대체로 맑음", 2: "구름 조금", 3: "흐림",
                45: "안개", 48: "서리 안개", 51: "이슬비", 53: "약한 비",
                61: "비", 63: "보통 비", 65: "강한 비", 80: "소나기",
                95: "뇌우", 96: "우박을 동반한 뇌우", unknown: "알 수 없음"
            },
            speechLang: "ko-KR"
        }
    };

    let currentLanguage = localStorage.getItem('language') || 'zh-TW';
    if (!translations[currentLanguage]) currentLanguage = 'zh-TW';

    function t(key) {
        const dict = translations[currentLanguage] || translations['zh-TW'];
        return dict[key] !== undefined ? dict[key] : (translations['zh-TW'][key] || key);
    }

    let recognitionInstance = null;
    let lastWeatherData = null;

    function applyLanguage(lang) {
        if (!translations[lang]) lang = 'zh-TW';
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = t(key);
            if (typeof val === 'string') {
                el.textContent = val;
            }
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const val = t(key);
            if (typeof val === 'string') {
                el.title = val;
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const val = t(key);
            if (typeof val === 'string') {
                el.placeholder = val;
            }
        });

        const langSelect = document.getElementById('setting-language');
        if (langSelect && langSelect.value !== lang) {
            langSelect.value = lang;
        }

        if (recognitionInstance) {
            recognitionInstance.lang = translations[lang].speechLang || 'zh-TW';
        }

        const extBgList = document.getElementById('extension-bg-list');
        if (typeof renderExtensionBgList === 'function' && extBgList && extBgList.children.length > 0) {
            renderExtensionBgList();
        }

        if (lastWeatherData) {
            const current = lastWeatherData.current_weather;
            const temp = Math.round(current.temperature);
            const code = current.weathercode;
            const desc = getWeatherDescription(code);
            const weatherEl = document.getElementById('weather');
            if (weatherEl) {
                weatherEl.textContent = `${desc} ${temp}°C`;
            }
            if (lastWeatherData.hourly) {
                renderForecast(lastWeatherData.hourly);
            }
        }
    }

    const extensionBackgrounds = [
        'light',
        'dark'
    ];




    const clockElement = document.getElementById('clock');

    function updateClock() {
        if (!clockElement) return;
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}`;
    }

    if (clockElement) {
        updateClock();
        setInterval(updateClock, 1000);
    }




    const weatherElement = document.getElementById('weather');
    const forecastPopup = document.getElementById('forecast-popup');

    if (weatherElement && forecastPopup) {

        document.body.appendChild(forecastPopup);


        forecastPopup.style.position = 'fixed';
        forecastPopup.style.zIndex = '2147483647';


        weatherElement.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = forecastPopup.classList.contains('hidden');

            if (isHidden) {

                const rect = weatherElement.getBoundingClientRect();
                forecastPopup.style.top = `${rect.bottom + 10}px`;
                forecastPopup.style.left = 'auto';
                forecastPopup.style.right = `${document.documentElement.clientWidth - rect.right}px`;
                forecastPopup.style.transform = 'none';


                forecastPopup.style.display = 'flex';

                requestAnimationFrame(() => {
                    forecastPopup.classList.remove('hidden');
                });
            } else {

                forecastPopup.classList.add('hidden');

                setTimeout(() => {
                    forecastPopup.style.display = 'none';
                }, 300);
            }
        });


        document.addEventListener('click', (e) => {
            if (!forecastPopup.contains(e.target) && e.target !== weatherElement) {
                if (!forecastPopup.classList.contains('hidden')) {
                    forecastPopup.classList.add('hidden');
                    setTimeout(() => {
                        forecastPopup.style.display = 'none';
                    }, 300);
                }
            }
        });


        getWeather();
    }

    function getWeather() {
        weatherElement.textContent = t('weatherLocating');

        if (!navigator.geolocation) {
            getIpLocation();
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
                console.log("GPS 定位失敗，改用 IP 定位:", error.message || error.code || error);
                getIpLocation();
            },
            { timeout: 5000 }
        );
    }

    async function getIpLocation() {
        const providers = [
            {
                url: 'https://ipwho.is/',
                parse: d => d.success ? { lat: d.latitude, lon: d.longitude } : null
            },
            {
                url: 'https://api.bigdatacloud.net/data/reverse-geocode-client',
                parse: d => (d.latitude && d.longitude) ? { lat: d.latitude, lon: d.longitude } : null
            },
            {
                url: 'https://ipapi.co/json/',
                parse: d => (d.latitude && d.longitude) ? { lat: d.latitude, lon: d.longitude } : null
            },
            {
                url: 'https://freeipapi.com/api/json',
                parse: d => (d.latitude && d.longitude) ? { lat: d.latitude, lon: d.longitude } : null
            },
            {
                url: 'https://ipinfo.io/json',
                parse: d => {
                    if (d.loc) {
                        const [lat, lon] = d.loc.split(',');
                        return { lat: parseFloat(lat), lon: parseFloat(lon) };
                    }
                    return null;
                }
            }
        ];

        for (const p of providers) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 3000);
                const res = await fetch(p.url, { signal: controller.signal });
                clearTimeout(timeoutId);

                if (!res.ok) continue;
                const data = await res.json();
                const coords = p.parse(data);
                if (coords) {
                    fetchWeather(coords.lat, coords.lon);
                    return;
                }
            } catch (e) {
                console.warn("IP Loc provider failed:", p.url, e);
            }
        }
        weatherElement.textContent = t('weatherLocFail');
    }

    function fetchWeather(lat, lon) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weathercode&timezone=auto`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.current_weather || !data.hourly) {
                    console.error("Invalid API response");
                    return;
                }

                lastWeatherData = data;
                const current = data.current_weather;
                const temp = Math.round(current.temperature);
                const code = current.weathercode;
                const desc = getWeatherDescription(code);

                weatherElement.textContent = `${desc} ${temp}°C`;
                renderForecast(data.hourly);
            })
            .catch(err => {
                console.error("Weather error:", err);
                weatherElement.textContent = t('weatherLoadFail');
            });
    }

    function renderForecast(hourlyData) {
        const now = new Date();
        const currentHourIndex = now.getHours();

        forecastPopup.innerHTML = `<div style="margin-bottom: 5px; font-weight: 500;">${t('forecastTitle')}</div>`;

        for (let i = 1; i <= 8; i++) {
            const index = currentHourIndex + i;
            if (index >= hourlyData.time.length) break;

            const timeStr = hourlyData.time[index];
            const temp = Math.round(hourlyData.temperature_2m[index]);
            const code = hourlyData.weathercode[index];
            const desc = getWeatherDescription(code);

            const date = new Date(timeStr);
            const hourDisplay = String(date.getHours()).padStart(2, '0') + ':00';

            const item = document.createElement('div');
            item.className = 'forecast-item';
            item.innerHTML = `
                <span class="forecast-time">${hourDisplay}</span>
                <span class="forecast-desc">${desc}</span>
                <span class="forecast-temp">${temp}°C</span>
            `;
            forecastPopup.appendChild(item);
        }
    }

    function getWeatherDescription(code) {
        const codes = (translations[currentLanguage] && translations[currentLanguage].weatherCodes)
            || translations['zh-TW'].weatherCodes;
        return codes[code] || codes.unknown || "未知";
    }




    const bgBtn = document.getElementById('bg-btn');
    const bgModal = document.getElementById('bg-modal');
    const closeBgModal = document.getElementById('close-bg-modal');
    const localBgInput = document.getElementById('local-bg-input');
    const extensionBgList = document.getElementById('extension-bg-list');

    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsModal = document.getElementById('close-settings-modal');


    if (settingsModal) {
        let currentVer = '1.6';
        try {
            const manifest = (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getManifest)
                ? chrome.runtime.getManifest()
                : null;
            if (manifest && (manifest.version_name || manifest.version)) {
                const v = manifest.version_name || manifest.version;
                if (v && v !== '1.5') currentVer = v;
            }
        } catch (e) {}

        const versionEl = document.createElement('div');
        versionEl.id = 'settings-version-tag';
        versionEl.textContent = `v${currentVer}`;
        versionEl.style.marginTop = '18px';
        versionEl.style.fontSize = '0.82rem';
        versionEl.style.fontWeight = '500';
        versionEl.style.opacity = '0.65';
        versionEl.style.letterSpacing = '0.5px';
        versionEl.style.textAlign = 'center';
        settingsModal.appendChild(versionEl);
    }


    const bookmarksBtn = document.getElementById('bookmarks-btn');
    const bookmarksModal = document.getElementById('bookmarks-modal');
    const closeBookmarksModal = document.getElementById('close-bookmarks-modal');
    const bookmarksList = document.getElementById('bookmarks-list');


    if (bookmarksList) {
        bookmarksList.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                bookmarksList.scrollBy({
                    left: e.deltaY * 2,
                    behavior: 'smooth'
                });
            }
        });
    }


    loadBackground();

    function closeAllModals() {
        if (bgModal) bgModal.classList.add('hidden');
        if (settingsModal) settingsModal.classList.add('hidden');
        if (bookmarksModal) hideBookmarksModal();
        if (imageSearchModal) imageSearchModal.classList.add('hidden');
    }


    bgBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const wasHidden = bgModal.classList.contains('hidden');
        closeAllModals();
        if (wasHidden) {
            bgModal.classList.remove('hidden');
            renderExtensionBgList();
        }
    });

    closeBgModal.addEventListener('click', () => {
        bgModal.classList.add('hidden');
    });


    settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const wasHidden = settingsModal.classList.contains('hidden');
        closeAllModals();
        if (wasHidden) {
            settingsModal.classList.remove('hidden');
        }
    });

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabWrapper = document.getElementById('settings-tab-wrapper');

    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (tabWrapper) {
                tabWrapper.style.transform = `translateX(-${index * 100}%)`;
            }
        });
    });

    closeSettingsModal.addEventListener('click', () => {
        settingsModal.classList.add('hidden');
    });


    if (bookmarksBtn && bookmarksModal) {
        bookmarksBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasHidden = bookmarksModal.classList.contains('hidden');
            closeAllModals();
            if (wasHidden) {
                bookmarksModal.classList.remove('hidden');
                loadBookmarks();
            }
        });

        closeBookmarksModal.addEventListener('click', () => {
            hideBookmarksModal();
        });
    }

    function hideBookmarksModal() {
        const isBottomMode = (localStorage.getItem('dockMode') || 'popup') === 'bottom';
        if (isBottomMode) return;
        if (typeof closeFolderPopover === 'function') closeFolderPopover();
        if (bookmarksModal) {
            bookmarksModal.classList.add('hidden');
            if (clockElement) clockElement.classList.remove('hidden-fade');
            if (weatherElement) weatherElement.classList.remove('hidden-fade');
        }
    }

    function loadBookmarks() {
        if (!chrome.bookmarks) {
            bookmarksList.innerHTML = `<p class="hint">${t('bookmarksNoPerm')}</p>`;
            return;
        }

        const FOLDER_NAME = "我的主題書籤";

        chrome.bookmarks.search({ title: FOLDER_NAME }, (results) => {
            const targetFolder = results.find(node => !node.url);

            if (targetFolder) {
                fetchBookmarksFromId(targetFolder.id);
            } else {
                chrome.bookmarks.create({
                    parentId: "2",
                    title: FOLDER_NAME
                }, (newFolder) => {
                    const msg = typeof t('bookmarksCreated') === 'function'
                        ? t('bookmarksCreated')(FOLDER_NAME)
                        : `已為您建立「${FOLDER_NAME}」資料夾。<br>請將書籤移至此資料夾，即可隱藏原生的書籤列。`;
                    bookmarksList.innerHTML = `<p class="hint">${msg}</p>`;
                });
            }
        });
    }

    const folderPopover = document.getElementById('dock-folder-popover');
    const folderPopoverName = document.getElementById('folder-popover-name');
    const folderPopoverCount = document.getElementById('folder-popover-count');
    const folderPopoverItems = document.getElementById('folder-popover-items');
    const folderPopoverBack = document.getElementById('folder-popover-back');
    const closeFolderPopoverBtn = document.getElementById('close-folder-popover');

    let currentActiveFolderId = null;
    let folderNavStack = [];

    function toggleFolderPopover(folderId, folderTitle, triggerElement) {
        if (currentActiveFolderId === folderId && folderPopover && !folderPopover.classList.contains('hidden')) {
            closeFolderPopover();
            return;
        }
        openFolderPopover(folderId, folderTitle, triggerElement);
    }

    function openFolderPopover(folderId, folderTitle, triggerElement) {
        if (!folderPopover) return;
        currentActiveFolderId = folderId;
        folderNavStack = [{ id: folderId, title: folderTitle }];

        const showDockText = localStorage.getItem('showDockText') !== 'false';
        folderPopover.classList.toggle('hide-labels', !showDockText);

        positionFolderPopover(triggerElement);
        folderPopover.classList.remove('hidden');
        renderFolderPopoverContent();
    }

    function positionFolderPopover(triggerElement) {
        if (!triggerElement || !folderPopover) return;
        const rect = triggerElement.getBoundingClientRect();
        const folderCenterX = rect.left + rect.width / 2;

        const halfWidth = 160;
        const clampX = Math.max(halfWidth + 10, Math.min(window.innerWidth - halfWidth - 10, folderCenterX));
        folderPopover.style.left = `${clampX}px`;

        const isBottomMode = (localStorage.getItem('dockMode') || 'popup') === 'bottom';
        if (isBottomMode) {
            folderPopover.style.top = 'auto';
            folderPopover.style.bottom = `${window.innerHeight - rect.top + 10}px`;
        } else {
            folderPopover.style.bottom = 'auto';
            folderPopover.style.top = `${rect.bottom + 10}px`;
        }
    }

    function renderFolderPopoverContent() {
        if (!folderPopover || folderNavStack.length === 0) return;
        const current = folderNavStack[folderNavStack.length - 1];

        if (folderPopoverName) folderPopoverName.textContent = current.title;
        if (folderPopoverBack) {
            folderPopoverBack.classList.toggle('hidden', folderNavStack.length <= 1);
        }
        if (folderPopoverItems) {
            folderPopoverItems.innerHTML = '<div class="folder-empty-hint">載入中...</div>';
        }

        chrome.bookmarks.getChildren(current.id, (children) => {
            if (!folderPopoverItems) return;
            folderPopoverItems.innerHTML = '';

            if (!children || children.length === 0) {
                if (folderPopoverCount) folderPopoverCount.textContent = '0';
                folderPopoverItems.innerHTML = '<div class="folder-empty-hint">資料夾是空的</div>';
                return;
            }

            if (folderPopoverCount) folderPopoverCount.textContent = children.length;

            const currentColor = localStorage.getItem('fontColor') || "#ffffff";

            children.forEach(child => {
                if (child.url) {
                    const card = document.createElement('a');
                    card.className = 'folder-item-card';
                    card.href = child.url;
                    card.title = child.title || child.url;
                    card.setAttribute('draggable', 'false');

                    const iconWrap = document.createElement('div');
                    iconWrap.className = 'folder-item-icon-wrapper';

                    const img = document.createElement('img');
                    img.className = 'folder-item-icon';
                    img.setAttribute('draggable', 'false');
                    try {
                        const urlObj = new URL(child.url);
                        img.src = `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=64`;
                    } catch (e) {
                        img.src = '';
                    }
                    iconWrap.appendChild(img);

                    const titleSpan = document.createElement('span');
                    titleSpan.className = 'folder-item-title';
                    titleSpan.textContent = child.title || child.url;
                    titleSpan.style.color = currentColor;

                    card.appendChild(iconWrap);
                    card.appendChild(titleSpan);

                    card.addEventListener('click', () => {
                        window.getSelection()?.removeAllRanges();
                        closeFolderPopover();
                    });

                    folderPopoverItems.appendChild(card);
                } else {
                    const card = document.createElement('div');
                    card.className = 'folder-item-card';
                    card.title = `${child.title} (資料夾)`;
                    card.setAttribute('draggable', 'false');

                    const iconWrap = document.createElement('div');
                    iconWrap.className = 'folder-item-icon-wrapper folder-sub-icon';
                    iconWrap.innerHTML = `
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                    `;

                    const titleSpan = document.createElement('span');
                    titleSpan.className = 'folder-item-title';
                    titleSpan.textContent = child.title;
                    titleSpan.style.color = currentColor;

                    card.appendChild(iconWrap);
                    card.appendChild(titleSpan);

                    card.addEventListener('click', (e) => {
                        e.stopPropagation();
                        window.getSelection()?.removeAllRanges();
                        folderNavStack.push({ id: child.id, title: child.title });
                        renderFolderPopoverContent();
                    });

                    folderPopoverItems.appendChild(card);
                }
            });
        });
    }

    function closeFolderPopover() {
        if (folderPopover) {
            folderPopover.classList.add('hidden');
        }
        currentActiveFolderId = null;
        folderNavStack = [];
    }

    if (closeFolderPopoverBtn) {
        closeFolderPopoverBtn.addEventListener('click', closeFolderPopover);
    }

    if (folderPopoverBack) {
        folderPopoverBack.addEventListener('click', (e) => {
            e.stopPropagation();
            if (folderNavStack.length > 1) {
                folderNavStack.pop();
                renderFolderPopoverContent();
            }
        });
    }

    if (folderPopover) {
        folderPopover.addEventListener('mouseenter', () => {
            isMouseInDock = true;
            showDock();
        });
        folderPopover.addEventListener('mouseleave', () => {
            isMouseInDock = false;
            hideDockDelayed(350);
        });
    }

    function fetchBookmarksFromId(id) {
        chrome.bookmarks.getChildren(id, (nodes) => {
            const bookmarkCount = nodes ? nodes.length : 0;
            const shouldHide = bookmarkCount > 11;
            const isBottomMode = (localStorage.getItem('dockMode') || 'popup') === 'bottom';

            if (!isBottomMode) {
                if (clockElement) clockElement.classList.toggle('hidden-fade', shouldHide);
                if (weatherElement) weatherElement.classList.toggle('hidden-fade', shouldHide);
            } else {
                if (clockElement) clockElement.classList.remove('hidden-fade');
                if (weatherElement) weatherElement.classList.remove('hidden-fade');
            }

            bookmarksList.innerHTML = '';
            if (chrome.runtime.lastError || !nodes || nodes.length === 0) {
                const emptyMsg = typeof t('bookmarksEmpty') === 'function'
                    ? t('bookmarksEmpty')(FOLDER_NAME)
                    : `「${FOLDER_NAME}」資料夾是空的<br>請將書籤移入此處`;
                bookmarksList.innerHTML = `<p class="hint">${emptyMsg}</p>`;
                return;
            }

            const currentColor = localStorage.getItem('fontColor') || "#ffffff";

            nodes.forEach(node => {
                if (node.url) {
                    const item = document.createElement('a');
                    item.className = 'bookmark-item';
                    item.href = node.url;
                    item.title = node.title || node.url;
                    item.setAttribute('draggable', 'false');

                    const img = document.createElement('img');
                    img.className = 'bookmark-icon';
                    img.setAttribute('draggable', 'false');
                    try {
                        const urlObj = new URL(node.url);
                        img.src = `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=64`;
                    } catch (e) {
                        img.src = '';
                    }

                    const title = document.createElement('span');
                    title.className = 'bookmark-title';
                    title.textContent = node.title || node.url;
                    title.style.color = currentColor;

                    item.appendChild(img);
                    item.appendChild(title);

                    item.addEventListener('click', () => {
                        window.getSelection()?.removeAllRanges();
                    });

                    bookmarksList.appendChild(item);
                } else {
                    const item = document.createElement('div');
                    item.className = 'bookmark-item bookmark-folder';
                    item.setAttribute('data-folder-id', node.id);
                    item.title = `${node.title} (資料夾)`;
                    item.setAttribute('draggable', 'false');

                    const iconWrapper = document.createElement('div');
                    iconWrapper.className = 'bookmark-icon folder-icon';
                    iconWrapper.innerHTML = `
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                    `;

                    const title = document.createElement('span');
                    title.className = 'bookmark-title';
                    title.textContent = node.title;
                    title.style.color = currentColor;

                    item.appendChild(iconWrapper);
                    item.appendChild(title);

                    item.addEventListener('click', (e) => {
                        e.stopPropagation();
                        window.getSelection()?.removeAllRanges();
                        toggleFolderPopover(node.id, node.title, item);
                    });

                    bookmarksList.appendChild(item);
                }
            });
        });
    }


    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeFolderPopover();
            closeAllModals();

            if (forecastPopup && !forecastPopup.classList.contains('hidden')) {
                forecastPopup.classList.add('hidden');
                setTimeout(() => {
                    forecastPopup.style.display = 'none';
                }, 300);
            }
        }
    });

    document.addEventListener('click', (e) => {

        if (bgModal && !bgModal.contains(e.target) && e.target !== bgBtn) {
            bgModal.classList.add('hidden');
        }

        if (settingsModal && !settingsModal.contains(e.target) && e.target !== settingsBtn) {
            settingsModal.classList.add('hidden');
        }

        if (bookmarksModal && !bookmarksModal.contains(e.target) && e.target !== bookmarksBtn) {
            hideBookmarksModal();
        }

        if (folderPopover && !folderPopover.contains(e.target) && !e.target.closest('.bookmark-folder')) {
            closeFolderPopover();
        }
    });

    // Prevent text selection and drag highlights across dock, popover, and desktop UI
    document.addEventListener('selectstart', (e) => {
        if (e.target.closest('input, textarea, [contenteditable="true"]')) {
            return;
        }
        if (e.target.closest('#bookmarks-modal, #dock-folder-popover, .bookmark-item, .folder-item-card, .top-left-container, .clock-container, #bg-controls, .weather-container, .lens-modal, .tab-btn')) {
            e.preventDefault();
        }
    });

    document.addEventListener('dragstart', (e) => {
        if (e.target.closest('#bookmarks-modal, #dock-folder-popover, .bookmark-item, .folder-item-card, img, a')) {
            e.preventDefault();
        }
    });




    function renderExtensionBgList() {
        extensionBgList.innerHTML = '';
        const currentBgType = localStorage.getItem('bgType');
        const currentBgValue = localStorage.getItem('bgValue');

        if (extensionBackgrounds.length === 0) {
            extensionBgList.innerHTML = `<p class="hint">${t('builtInNone')}</p>`;
            return;
        }

        extensionBackgrounds.forEach(mode => {
            const btn = document.createElement('div');
            btn.className = 'bg-option';

            if (mode === 'light') btn.textContent = t('modeLight');
            else if (mode === 'dark') btn.textContent = t('modeDark');
            else btn.textContent = mode;


            if (currentBgType === 'extension' && currentBgValue === mode) {
                btn.classList.add('active');
            }

            btn.addEventListener('click', () => {
                setBackground('extension', mode);
                renderExtensionBgList();
            });

            extensionBgList.appendChild(btn);
        });
    }


    const urlBgInput = document.getElementById('url-bg-input');
    const urlBgSubmit = document.getElementById('url-bg-submit');

    if (urlBgSubmit && urlBgInput) {
        urlBgSubmit.addEventListener('click', () => {
            const url = urlBgInput.value.trim();
            if (url) {
                setBackground('url', url);
                bgModal.classList.add('hidden');
                urlBgInput.value = '';
            }
        });

        urlBgInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                urlBgSubmit.click();
            }
        });
    }

    if (bgModal) {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            bgModal.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, false);
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            bgModal.addEventListener(eventName, () => {
                bgModal.style.borderColor = '#64c8ff';
                bgModal.style.boxShadow = '0 0 20px rgba(100, 200, 255, 0.4)';
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            bgModal.addEventListener(eventName, () => {
                bgModal.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                bgModal.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
            }, false);
        });

        bgModal.addEventListener('drop', (e) => {
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                const isImage = file.type.startsWith('image/') || file.name.toLowerCase().endsWith('.webp');

                if (isImage) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        setBackground('local', event.target.result);
                        bgModal.classList.add('hidden');
                    };
                    reader.readAsDataURL(file);
                }
            }
        });
    }

    localBgInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            const dataUrl = event.target.result;
            try {
                setBackground('local', dataUrl);

                bgModal.classList.add('hidden');
            } catch (err) {
                alert(t('imgTooLarge'));
                console.error(err);
            }
        };
        reader.readAsDataURL(file);
    });


    function setBackground(type, value) {
        localStorage.setItem('bgType', type);
        localStorage.setItem('bgValue', value);
        applyBackground(type, value);
    }


    function applyBackground(type, value) {
        document.body.style.backgroundImage = '';
        document.body.style.backgroundColor = '';
        document.body.style.color = '';


        document.body.classList.remove('dark-mode', 'light-mode');


        const searchInput = document.querySelector('.search-box input');

        if (type === 'extension') {
            if (value === 'light') {
                document.body.style.backgroundColor = '#f8f9fa';
                document.body.style.color = '#000000';
                document.body.classList.add('light-mode');
                if (searchInput) searchInput.style.color = '#000000';
            } else if (value === 'dark') {
                document.body.style.backgroundColor = '#202124';
                document.body.style.color = '#e8eaed';
                document.body.classList.add('dark-mode');
                if (searchInput) searchInput.style.color = '#e8eaed';
            } else {
                document.body.style.backgroundImage = `url('images/${value}')`;
                document.body.classList.add('dark-mode');
                if (searchInput) searchInput.style.color = '#e8eaed';
            }
        } else if (type === 'local' || type === 'url') {
            document.body.style.backgroundImage = `url('${value}')`;
            document.body.classList.add('dark-mode');
            if (searchInput) searchInput.style.color = '#e8eaed';
        } else {
            document.body.style.backgroundImage = `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`;
            document.body.classList.add('dark-mode');
            if (searchInput) searchInput.style.color = '#e8eaed';
        }
    }


    function loadBackground() {
        const type = localStorage.getItem('bgType');
        const value = localStorage.getItem('bgValue');

        if (type && value) {
            applyBackground(type, value);
        }
    }




    const searchContainer = document.querySelector('.search-container');
    const posYInput = document.getElementById('search-pos-y');
    const posXInput = document.getElementById('search-pos-x');
    const scaleInput = document.getElementById('search-scale');


    const defaultSettings = {
        y: 45,
        x: 50,
        scale: 1.0
    };

    const MIN_POS_Y = 10;
    const MAX_POS_Y = 82;

    function loadSearchSettings() {
        const savedY = localStorage.getItem('searchPosY');
        const savedX = localStorage.getItem('searchPosX');
        const savedScale = localStorage.getItem('searchScale');

        let y = savedY !== null ? Number(savedY) : defaultSettings.y;
        if (isNaN(y)) y = defaultSettings.y;
        y = Math.min(Math.max(y, MIN_POS_Y), MAX_POS_Y);

        const x = savedX !== null ? savedX : defaultSettings.x;
        const scale = savedScale !== null ? savedScale : defaultSettings.scale;


        if (posYInput) posYInput.value = y;
        if (posXInput) posXInput.value = x;
        if (scaleInput) scaleInput.value = scale;

        applySearchSettings(y, x, scale);
    }

    function applySearchSettings(y, x, scale) {
        if (!searchContainer) return;
        searchContainer.style.top = `${y}%`;
        searchContainer.style.left = `${x}%`;
        searchContainer.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }


    if (posYInput && posXInput && scaleInput) {
        const handleInput = () => {
            const rawY = Number(posYInput.value);
            const y = Math.min(Math.max(isNaN(rawY) ? defaultSettings.y : rawY, MIN_POS_Y), MAX_POS_Y);
            posYInput.value = y;
            const x = posXInput.value;
            const scale = scaleInput.value;

            applySearchSettings(y, x, scale);


            localStorage.setItem('searchPosY', y);
            localStorage.setItem('searchPosX', x);
            localStorage.setItem('searchScale', scale);
        };

        posYInput.addEventListener('input', handleInput);
        posXInput.addEventListener('input', handleInput);
        scaleInput.addEventListener('input', handleInput);

        const resetPosY = document.getElementById('reset-search-pos-y');
        const resetPosX = document.getElementById('reset-search-pos-x');
        const resetScale = document.getElementById('reset-search-scale');

        const triggerResetAnim = (btn) => {
            if (!btn) return;
            btn.classList.remove('rotating');
            void btn.offsetWidth;
            btn.classList.add('rotating');
            setTimeout(() => btn.classList.remove('rotating'), 400);
        };

        if (resetPosY) {
            resetPosY.addEventListener('click', () => {
                posYInput.value = defaultSettings.y;
                posYInput.dispatchEvent(new Event('input'));
                triggerResetAnim(resetPosY);
            });
        }

        if (resetPosX) {
            resetPosX.addEventListener('click', () => {
                posXInput.value = defaultSettings.x;
                posXInput.dispatchEvent(new Event('input'));
                triggerResetAnim(resetPosX);
            });
        }

        if (resetScale) {
            resetScale.addEventListener('click', () => {
                scaleInput.value = defaultSettings.scale;
                scaleInput.dispatchEvent(new Event('input'));
                triggerResetAnim(resetScale);
            });
        }
    }




    const voiceBtn = document.getElementById('voice-btn');
    const aiBtn = document.getElementById('ai-btn');
    const settingShowVoice = document.getElementById('setting-show-voice');
    const settingShowAI = document.getElementById('setting-show-ai');
    const settingShowImageSearch = document.getElementById('setting-show-image-search');
    const settingShowDockText = document.getElementById('setting-show-dock-text');
    const settingDockAutoHide = document.getElementById('setting-dock-autohide');
    const settingDockAutoHideContainer = document.getElementById('setting-dock-autohide-container');
    const dockBottomTrigger = document.getElementById('dock-bottom-trigger');
    const settingAiEngine = document.getElementById('setting-ai-engine');
    const settingAiEngineContainer = document.getElementById('setting-ai-engine-container');
    const dockModeSegments = document.querySelectorAll('#dock-mode-segmented .segment-btn');

    let dockTransitionTimeout = null;
    let dockAutoHideTimer = null;
    let isMouseInBottomZone = false;
    let isMouseInDock = false;

    function isDockBottomMode() {
        return (localStorage.getItem('dockMode') || 'popup') === 'bottom';
    }

    function isDockAutoHideEnabled() {
        return isDockBottomMode() && localStorage.getItem('dockAutoHide') === 'true';
    }

    function showDock() {
        if (!bookmarksModal || !isDockBottomMode()) return;
        if (dockAutoHideTimer) {
            clearTimeout(dockAutoHideTimer);
            dockAutoHideTimer = null;
        }
        bookmarksModal.classList.remove('dock-hidden');
    }

    function hideDockDelayed(delay = 350) {
        if (!bookmarksModal || !isDockAutoHideEnabled()) return;
        if (isMouseInDock || isMouseInBottomZone) return;
        if (folderPopover && !folderPopover.classList.contains('hidden')) return;

        if (dockAutoHideTimer) {
            clearTimeout(dockAutoHideTimer);
        }
        dockAutoHideTimer = setTimeout(() => {
            if (!isMouseInDock && !isMouseInBottomZone && (!folderPopover || folderPopover.classList.contains('hidden')) && isDockAutoHideEnabled()) {
                bookmarksModal.classList.add('dock-hidden');
            }
        }, delay);
    }

    function applyDockAutoHide(enabled, isInitial = false) {
        const isBottom = isDockBottomMode();
        if (!isBottom) {
            if (bookmarksModal) {
                bookmarksModal.classList.remove('dock-autohide', 'dock-hidden');
            }
            if (dockBottomTrigger) {
                dockBottomTrigger.classList.remove('active');
            }
            return;
        }

        if (enabled) {
            if (bookmarksModal) {
                bookmarksModal.classList.add('dock-autohide');
                if (isInitial) {
                    showDock();
                    hideDockDelayed(1200);
                } else {
                    showDock();
                    hideDockDelayed(1000);
                }
            }
            if (dockBottomTrigger) {
                dockBottomTrigger.classList.add('active');
            }
        } else {
            if (dockAutoHideTimer) {
                clearTimeout(dockAutoHideTimer);
                dockAutoHideTimer = null;
            }
            if (bookmarksModal) {
                bookmarksModal.classList.remove('dock-autohide', 'dock-hidden');
            }
            if (dockBottomTrigger) {
                dockBottomTrigger.classList.remove('active');
            }
        }
    }

    function applyDockMode(mode, isInitial = false) {
        closeFolderPopover();
        const isBottom = mode === 'bottom';
        localStorage.setItem('dockMode', mode);

        if (dockTransitionTimeout) {
            clearTimeout(dockTransitionTimeout);
            dockTransitionTimeout = null;
        }

        const segmentedContainer = document.getElementById('dock-mode-segmented');
        if (segmentedContainer) {
            segmentedContainer.setAttribute('data-active', mode);
        }

        dockModeSegments.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-value') === mode);
        });

        if (settingDockAutoHideContainer) {
            settingDockAutoHideContainer.style.display = isBottom ? 'flex' : 'none';
        }

        const isAutoHide = localStorage.getItem('dockAutoHide') === 'true';
        if (settingDockAutoHide) {
            settingDockAutoHide.checked = isAutoHide;
        }

        if (bookmarksModal) {
            if (isBottom) {
                bookmarksModal.classList.add('dock-bottom');
                if (!isInitial) {
                    void bookmarksModal.offsetHeight; // Force reflow to ensure smooth bottom slide-up
                }
                bookmarksModal.classList.remove('hidden');
                loadBookmarks();
                if (bookmarksBtn) bookmarksBtn.classList.add('hidden-force');
                if (clockElement) clockElement.classList.remove('hidden-fade');
                if (weatherElement) weatherElement.classList.remove('hidden-fade');

                applyDockAutoHide(isAutoHide, isInitial);
            } else {
                applyDockAutoHide(false);
                if (isInitial) {
                    bookmarksModal.classList.remove('dock-bottom');
                    bookmarksModal.classList.add('hidden');
                } else {
                    bookmarksModal.classList.add('hidden');
                    dockTransitionTimeout = setTimeout(() => {
                        if ((localStorage.getItem('dockMode') || 'popup') !== 'bottom') {
                            bookmarksModal.classList.remove('dock-bottom');
                        }
                    }, 350);
                }
                if (bookmarksBtn) bookmarksBtn.classList.remove('hidden-force');
            }
        }
    }

    function loadIconSettings() {

        const showVoice = localStorage.getItem('showVoice') !== 'false';
        const showAI = localStorage.getItem('showAI') !== 'false';
        const showImageSearch = localStorage.getItem('showImageSearch') !== 'false';
        const showDockText = localStorage.getItem('showDockText') !== 'false';
        const dockAutoHide = localStorage.getItem('dockAutoHide') === 'true';
        const aiEngine = localStorage.getItem('aiEngine') || 'google';
        const dockMode = localStorage.getItem('dockMode') || 'popup';


        if (voiceBtn) voiceBtn.classList.toggle('hidden-force', !showVoice);
        if (aiBtn) aiBtn.classList.toggle('hidden-force', !showAI);
        if (imageSearchBtn) imageSearchBtn.classList.toggle('hidden-force', !showImageSearch);
        if (bookmarksList) bookmarksList.classList.toggle('hide-labels', !showDockText);
        if (folderPopover) folderPopover.classList.toggle('hide-labels', !showDockText);


        if (settingShowVoice) settingShowVoice.checked = showVoice;
        if (settingShowAI) settingShowAI.checked = showAI;
        if (settingShowImageSearch) settingShowImageSearch.checked = showImageSearch;
        if (settingShowDockText) settingShowDockText.checked = showDockText;
        if (settingDockAutoHide) settingDockAutoHide.checked = dockAutoHide;
        if (settingDockAutoHideContainer) settingDockAutoHideContainer.style.display = (dockMode === 'bottom') ? 'flex' : 'none';
        if (settingAiEngine) settingAiEngine.value = aiEngine;
        if (settingAiEngineContainer) settingAiEngineContainer.style.display = showAI ? 'flex' : 'none';

        applyDockMode(dockMode, true);
    }


    if (settingShowVoice) {
        settingShowVoice.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            localStorage.setItem('showVoice', isChecked);
            if (voiceBtn) voiceBtn.classList.toggle('hidden-force', !isChecked);
        });
    }

    if (settingShowAI) {
        settingShowAI.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            localStorage.setItem('showAI', isChecked);
            if (aiBtn) aiBtn.classList.toggle('hidden-force', !isChecked);
            if (settingAiEngineContainer) settingAiEngineContainer.style.display = isChecked ? 'flex' : 'none';
        });
    }

    if (settingShowImageSearch) {
        settingShowImageSearch.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            localStorage.setItem('showImageSearch', isChecked);
            if (imageSearchBtn) imageSearchBtn.classList.toggle('hidden-force', !isChecked);
        });
    }

    if (settingShowDockText) {
        settingShowDockText.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            localStorage.setItem('showDockText', isChecked);
            if (bookmarksList) bookmarksList.classList.toggle('hide-labels', !isChecked);
            if (folderPopover) folderPopover.classList.toggle('hide-labels', !isChecked);
        });
    }

    if (settingDockAutoHide) {
        settingDockAutoHide.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            localStorage.setItem('dockAutoHide', isChecked);
            applyDockAutoHide(isChecked, false);
        });
    }

    if (bookmarksModal) {
        bookmarksModal.addEventListener('mouseenter', () => {
            isMouseInDock = true;
            if (isDockAutoHideEnabled()) {
                showDock();
            }
        });

        bookmarksModal.addEventListener('mouseleave', (e) => {
            isMouseInDock = false;
            if (isDockAutoHideEnabled()) {
                if (e.clientY >= window.innerHeight - 25) {
                    isMouseInBottomZone = true;
                } else {
                    isMouseInBottomZone = false;
                    hideDockDelayed(350);
                }
            }
        });
    }

    if (dockBottomTrigger) {
        dockBottomTrigger.addEventListener('mouseenter', () => {
            isMouseInBottomZone = true;
            if (isDockAutoHideEnabled()) {
                showDock();
            }
        });

        dockBottomTrigger.addEventListener('mouseleave', (e) => {
            if (e.clientY < window.innerHeight - 25) {
                isMouseInBottomZone = false;
                hideDockDelayed(350);
            }
        });
    }

    document.addEventListener('mousemove', (e) => {
        if (!isDockAutoHideEnabled()) return;

        const isAtBottom = e.clientY >= (window.innerHeight - 25);

        if (isAtBottom) {
            isMouseInBottomZone = true;
            showDock();
        } else {
            if (isMouseInBottomZone && (!bookmarksModal || !bookmarksModal.contains(e.target))) {
                isMouseInBottomZone = false;
                hideDockDelayed(350);
            }
        }
    });

    dockModeSegments.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-value');
            if (val) {
                applyDockMode(val);
            }
        });
    });

    if (chrome.bookmarks && chrome.bookmarks.onCreated) {
        const refreshBookmarksIfActive = () => {
            const isBottom = (localStorage.getItem('dockMode') || 'popup') === 'bottom';
            const isVisible = bookmarksModal && !bookmarksModal.classList.contains('hidden');
            if (isBottom || isVisible) {
                loadBookmarks();
            }
        };
        chrome.bookmarks.onCreated.addListener(refreshBookmarksIfActive);
        chrome.bookmarks.onRemoved.addListener(refreshBookmarksIfActive);
        chrome.bookmarks.onChanged.addListener(refreshBookmarksIfActive);
        chrome.bookmarks.onMoved.addListener(refreshBookmarksIfActive);
    }




    if (settingAiEngine) {
        settingAiEngine.addEventListener('change', (e) => {
            localStorage.setItem('aiEngine', e.target.value);
        });
    }




    if (aiBtn) {
        aiBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const aiEngine = localStorage.getItem('aiEngine') || 'google';
            let url = 'https://www.google.com/search?sourceid=chrome&udm=50&aep=42';
            
            if (aiEngine === 'gemini') {
                const hl = currentLanguage || 'zh-TW';
                url = `https://gemini.google.com/app?hl=${hl}`;
            } else if (aiEngine === 'chatgpt') {
                url = 'https://chatgpt.com/';
            } else if (aiEngine === 'claude') {
                url = 'https://claude.ai/new';
            }
            
            window.location.href = url;
        });
    }


    if (voiceBtn) {
        const searchInput = document.querySelector('input[name="q"]');
        const searchForm = document.querySelector('.search-box form');


        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.lang = (translations[currentLanguage] && translations[currentLanguage].speechLang) || 'zh-TW';
            recognition.interimResults = false;
            recognitionInstance = recognition;
            let isListening = false;

            recognition.onstart = () => {
                isListening = true;
                voiceBtn.classList.add('listening');
                searchInput.placeholder = t('voiceListening');
            };

            recognition.onend = () => {
                isListening = false;
                voiceBtn.classList.remove('listening');
                searchInput.placeholder = t('searchPlaceholder');
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                searchInput.value = transcript;

                if (transcript.trim() !== "" && searchForm) {
                    searchForm.submit();
                }
            };

            recognition.onerror = (event) => {
                console.error("Speech recognition error", event.error);
                isListening = false;
                voiceBtn.classList.remove('listening');
                searchInput.placeholder = t('voiceError');
            };

            voiceBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (isListening) {
                    recognition.stop();
                } else {
                    recognition.lang = (translations[currentLanguage] && translations[currentLanguage].speechLang) || 'zh-TW';
                    recognition.start();
                }
            });
        } else {

            console.warn("Browser does not support Speech Recognition");
            voiceBtn.style.display = 'none';
        }
    }


    const imageSearchBtn = document.getElementById('image-search-btn');
    const imageSearchModal = document.getElementById('image-search-modal');
    const closeImageSearchModal = document.getElementById('close-image-search-modal');
    const dropZone = document.getElementById('drop-zone');
    const triggerFileSelect = document.getElementById('trigger-file-select');

    const imageSearchForm = document.getElementById('image-search-form');
    const imageSearchInput = document.getElementById('image-search-input');

    if (imageSearchBtn && imageSearchModal) {

        imageSearchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasHidden = imageSearchModal.classList.contains('hidden');
            closeAllModals();
            if (wasHidden) {
                imageSearchModal.classList.remove('hidden');
            }
        });


        if (closeImageSearchModal) {
            closeImageSearchModal.addEventListener('click', () => {
                imageSearchModal.classList.add('hidden');
            });
        }


        if (triggerFileSelect && imageSearchInput) {
            triggerFileSelect.addEventListener('click', () => {
                imageSearchInput.click();
            });
        }


        if (imageSearchInput && imageSearchForm) {
            imageSearchInput.addEventListener('change', () => {
                if (imageSearchInput.files.length > 0) {
                    imageSearchForm.submit();
                }
            });
        }


        if (dropZone && imageSearchInput && imageSearchForm) {
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropZone.addEventListener(eventName, preventDefaults, false);
            });

            function preventDefaults(e) {
                e.preventDefault();
                e.stopPropagation();
            }

            ['dragenter', 'dragover'].forEach(eventName => {
                dropZone.addEventListener(eventName, () => dropZone.classList.add('dragover'), false);
            });

            ['dragleave', 'drop'].forEach(eventName => {
                dropZone.addEventListener(eventName, () => dropZone.classList.remove('dragover'), false);
            });

            dropZone.addEventListener('drop', (e) => {
                const dt = e.dataTransfer;
                const files = dt.files;
                handleFiles(files);
            });


            window.addEventListener('paste', (e) => {

                if (imageSearchModal.classList.contains('hidden')) return;

                const items = (e.clipboardData || e.originalEvent.clipboardData).items;
                for (let index in items) {
                    const item = items[index];
                    if (item.kind === 'file' && item.type.includes('image/')) {
                        const blob = item.getAsFile();
                        const dt = new DataTransfer();
                        dt.items.add(blob);
                        handleFiles(dt.files);
                    }
                }
            });

            function handleFiles(files) {
                if (files.length > 0) {
                    imageSearchInput.files = files;
                    imageSearchForm.submit();
                }
            }
        }
    }


    let originalCloseAllModals = closeAllModals;
    closeAllModals = function () {
        if (typeof closeFolderPopover === 'function') closeFolderPopover();
        if (bgModal) bgModal.classList.add('hidden');
        if (settingsModal) settingsModal.classList.add('hidden');
        if (bookmarksModal) hideBookmarksModal();
        if (imageSearchModal) imageSearchModal.classList.add('hidden');
    };


    document.addEventListener('click', (e) => {

        if (imageSearchModal && !imageSearchModal.contains(e.target) && e.target !== imageSearchBtn) {
            imageSearchModal.classList.add('hidden');
        }
    });


    loadSearchSettings();
    loadIconSettings();
    loadTextSettings();


    function loadTextSettings() {
        const fontFamily = localStorage.getItem('fontFamily') || "'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
        const fontColor = localStorage.getItem('fontColor') || "#ffffff";
        const fontSize = localStorage.getItem('fontSize') || "6";

        applyLanguage(currentLanguage);
        applyTextSettings(fontFamily, fontColor, fontSize);

        const langInput = document.getElementById('setting-language');
        const fontInput = document.getElementById('setting-font-family');
        const colorInput = document.getElementById('setting-font-color');
        const sizeInput = document.getElementById('setting-font-size');

        if (langInput) {
            langInput.value = currentLanguage;
            langInput.addEventListener('change', (e) => {
                const val = e.target.value;
                applyLanguage(val);
            });
        }

        if (fontInput) fontInput.value = fontFamily;
        if (colorInput) colorInput.value = fontColor;
        if (sizeInput) sizeInput.value = fontSize;

        if (fontInput) {
            fontInput.addEventListener('change', (e) => {
                const val = e.target.value;
                localStorage.setItem('fontFamily', val);
                applyTextSettings(val, colorInput.value, sizeInput.value);
            });
        }

        if (colorInput) {
            colorInput.addEventListener('input', (e) => {
                const val = e.target.value;
                localStorage.setItem('fontColor', val);
                applyTextSettings(fontInput.value, val, sizeInput.value);
            });
        }

        if (sizeInput) {
            sizeInput.addEventListener('input', (e) => {
                const val = e.target.value;
                localStorage.setItem('fontSize', val);
                applyTextSettings(fontInput.value, colorInput.value, val);
            });
        }
    }

    function applyTextSettings(family, color, size) {
        document.body.style.fontFamily = family;

        if (clockElement) {
            clockElement.style.fontSize = `${size}rem`;
            clockElement.style.color = color;
        }

        if (weatherElement) {
            weatherElement.style.color = color;
        }

        const searchInput = document.querySelector('.search-box input');
        if (searchInput) {
            searchInput.style.color = color;
        }

        const bookmarkTitles = document.querySelectorAll('.bookmark-title');
        bookmarkTitles.forEach(title => {
            title.style.color = color;
        });

        if (forecastPopup) {
            forecastPopup.style.color = '#ffffff';
        }
        if (settingsModal) {
            settingsModal.style.color = '#ffffff';
        }
    }


    const liquidTargets = document.querySelectorAll('.search-box, #bg-btn, #settings-btn, #bookmarks-btn, .icon-btn, #forecast-popup, #bookmarks-modal');

    liquidTargets.forEach(target => {
        target.classList.add('liquid-effect');

        target.addEventListener('mousemove', (e) => {
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            target.style.setProperty('--mouse-x', `${x}px`);
            target.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});