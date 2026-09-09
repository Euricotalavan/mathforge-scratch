# MathForge Scratch

獨立、可直接由 GitHub Pages 提供的拋棄式數學練習頁。不含正式 MathForge 資料或後端。

開啟網站 → 產生 ChatGPT 出題要求或貼自己的題目 → 匯入 JSON，核對題面 → 作答、提交、逐級提示。可切換最多八題，保留本頁各題草稿與提交。想保存時下載本次作答；筆記 JSON 是閱讀用，暫不支援還原。

支援 mathforge.problem-pack.v1/v2 與 mathforge.scratch-pack.v1。本版不檢查正式時段 briefId，作為獨立練習。無提示／解答也能作答。

## 隱私與限制

無 localStorage、資料庫、分析服務、模型 API 或內容上傳。重新整理／關閉頁面會遺失紀錄；瀏覽器不一定顯示離開確認（尤其平板）。下載由使用者主動保存。GitHub 仍會接收網站的一般 HTTP 存取資訊。

提示與答案在使用者選擇的檔案中，逐級揭露是自律用介面，不是伺服器端安全隔離。數學正確性需自行檢查。簡易工具插入不保證瀏覽器原生 undo；完整 MathForge 功能未搬入。

## GitHub Pages 發布

建立專用 public repository（例如 mathforge-scratch），只上傳此資料夾檔案。Settings → Pages → Deploy from a branch → main / root → Save。所有資源用相對路徑，支援 /mathforge-scratch/ 子目錄。無需 npm、build、API key 或正式服務。不要上傳原專案、資料庫、題包或 .env。

## 本機

使用靜態 HTTP server 開啟本資料夾。

KaTeX 0.18.5 assets 與授權在 KATEX-LICENSE.txt。無外部 CDN。此頁支援常用公式，不是完整 TeX 編譯器。


