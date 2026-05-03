# 識別證鑄造所 · ID Card Forge

小蚵人雙語營隊（小蚵人 Oyster Camp）專用識別證系統。
四個頁面組成一套完整工作流：

## 📂 檔案結構

```
deploy/
├── id-card-forge.html    主入口（總覽 + 三張範例卡 + 印製規格）
├── id-card-single.html   學生單張產生器（key 名字 → 即時預覽 → 下載 PDF/PNG）
├── id-card-batch.html    學生批量產生器（上傳 Excel → 預覽 → 一鍵打包 PDF）
├── id-card-npc.html      老師 NPC 識別證（16 張固定 · 自動烘烤 · 點擊放大）
│
├── app.css               UI 共用樣式
├── card-template.css     識別證樣式（10×15 cm 直式 + 3mm 出血）
├── card-template.jsx     React 識別證範本元件
├── npc-data.js           NPC 角色資料 + 老師名單對應表
│
└── assets/
    ├── colors_and_type.css   設計系統 tokens（顏色 + 字體 + 變數）
    └── characters/           角色立繪
        ├── teacher-*.png     5 種 NPC 老師（公會長 / 金湯匙 / 採購 / 總舖師 / 判官）
        ├── team-*.png        勇者團團徽（鮮蚵 / 竹筍）
        └── student-*.png     學生用主視覺
```

## 🚀 部署到 GitHub Pages

1. 把整個 `deploy/` 資料夾內容上傳到你的 repo（任意子路徑）
2. 啟用 GitHub Pages 指向該路徑
3. 進入點是 `id-card-forge.html`（避開 `index.html` 不蓋掉你既有的入口）

## 📐 識別證規格

- **尺寸**：100 × 150 mm 直式（含 3mm 出血 → 印刷尺寸 106 × 156 mm）
- **適用**：市售 10×15 cm 透明證件套（可掛脖）
- **A4 排版**：橫式 2-up，含裁切標記
- **QR Code**：預設指向 `https://nb41f002.github.io/oyster-camp/`（電子課表）

## 🎨 設計

- 字體：Huninn 粉圓體（中文）+ Fredoka（英文）
- 主色：墨綠 `#0a5e3e`、奶油白 `#FFFBEA`、烏木黑 `#2F1B0C`
- 風格：RPG 角色卡（學生 = 勇者 / 老師 = NPC）
