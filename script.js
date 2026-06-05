/* 全域設定 */
:root {
    --pastel-pink: #ffebee;
    --pastel-peach: #fff3e0;
    --soft-cream: #fffdf5;
    --text-color: #5d4037; /* 深棕色文字 */
    --hover-pink: #fce4ec;
    --btn-color: #f8bbd0;
    --btn-hover: #f48fb1;
}

body {
    font-family: 'Noto Sans TC', sans-serif;
    margin: 0;
    background: linear-gradient(135deg, var(--pastel-pink) 0%, var(--pastel-peach) 100%);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
}

/* 頂部導覽列 */
.nav-bar {
    background-color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    z-index: 100;
}

.logo-img {
    height: 40px;
    width: auto;
}

.nav-buttons button {
    background-color: var(--pastel-pink);
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    color: var(--text-color);
    margin-left: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.nav-buttons button:hover {
    background-color: var(--hover-pink);
}

/* 主要內容區 */
.main-container {
    display: flex;
    flex: 1;
    overflow: hidden;
}

/* 左側：項目選擇 */
.product-selection {
    width: 250px;
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgba(0,0,0,0.05);
    overflow-y: auto;
}

.section-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--text-color);
}

.product-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.selection-box {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.03);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 2px solid transparent;
}

.selection-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.08);
    background-color: var(--soft-cream);
}

.selection-box.active {
    border-color: var(--btn-color);
    background-color: var(--hover-pink);
}

.selection-icons, .selection-dots {
    display: flex;
    gap: 5px;
    margin-bottom: 8px;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.selection-box p {
    font-size: 10px;
    margin: 2px 0;
    color: #8d6e63;
}

/* 中央與右側：詳細資料 */
.product-details {
    flex: 1;
    display: flex;
    padding: 30px;
    overflow-y: auto;
}

/* 中央展示 */
.display-base-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.display-base {
    background-color: var(--soft-cream);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.base-img {
    max-width: 100%;
    height: auto;
}

/* 右側資料與表單 */
.info-forms-section {
    width: 350px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.product-header h1 {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    margin: 0;
}

.product-header h2 {
    font-size: 16px;
    color: #8d6e63;
    margin: 5px 0 15px;
}

.params-block {
    background-color: var(--pastel-pink);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.param-text {
    font-size: 12px;
}

/* 表單設定 */
.appointment-form, .switch-panel, .interactive-btns {
    background-color: #fff;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.form-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
}

.form-group {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.form-group label {
    width: 60px;
    font-size: 12px;
}

.form-group input, .form-group select {
    flex: 1;
    padding: 8px;
    border: 1px solid var(--pastel-peach);
    border-radius: 8px;
    font-size: 12px;
}

.submit-btn, .action-btn {
    background-color: var(--btn-color);
    border: none;
    padding: 10px;
    border-radius: 15px;
    color: var(--text-color);
    font-size: 12px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
}

.submit-btn:hover, .action-btn:hover {
    background-color: var(--btn-hover);
}

/* 按鈕群 */
.section-subtitle { font-size: 14px; margin-bottom: 10px; }
.btn-group {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
}

.cart-btn { background-color: var(--pastel-peach); }
.color-switch-btn { background-color: var(--pastel-pink); }

/* 切換效果 */
.switch-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.switch-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
}

.swatches {
    display: flex;
    gap: 5px;
}

.swatch {
    width: 15px;
    height: 15px;
    border-radius: 3px;
    cursor: pointer;
}

/* 隱眼與裝飾 */
.lens-decor {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.lens-body-img {
    width: 80px;
    height: 80px;
}

/* 色圓點 */
.brown-dot { background-color: #8d6e63; }
.peach-dot { background-color: #ffccbc; }
.hazel-dot { background-color: #d1b100; }
.gold-dot { background-color: #ffd740; }
.gray-dot { background-color: #b0bec5; }
.white-dot { background-color: #fff; }
.cool-gray-dot { background-color: #78909c; }
.black-dot { background-color: #000; }
.pure-brown-dot { background-color: #a1887f; }
.mocha-dot { background-color: #e0e0e0; }
.blue-dot { background-color: #4fc3f7; }
.clear-dot { background-color: #fff; }
.pink-dot { background-color: #f48fb1; }
.lavender-dot { background-color: #e1bee7; }

/* RWD 響應式 (手機版) */
@media screen and (max-width: 768px) {
    body {
        overflow-y: auto; /* 手機版不限制滾動 */
        height: auto;
    }

    .main-container {
        flex-direction: column;
        overflow: visible;
    }

    .product-selection {
        width: calc(100% - 40px);
        border-right: none;
        border-bottom: 1px solid rgba(0,0,0,0.05);
        height: 200px; /* 固定的高度 */
        margin-bottom: 20px;
    }

    .product-details {
        flex-direction: column;
        padding: 20px;
    }

    .display-base-section, .info-forms-section {
        flex: none;
        width: 100%;
        margin-left: 0;
    }

    .info-forms-section {
        margin-top: 20px;
        gap: 15px;
    }

    .base-img {
        max-width: 250px;
    }

    .product-header h1 { font-size: 24px; }
    .product-header h2 { font-size: 14px; }
}
