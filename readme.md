# 捲軸效果1: 捲動自動貼齊區塊頂並觸發區塊內動畫

## 主要分支
1. 使用單純的 js 計算捲動到哪個區間。
2. 使用單純的 css 控制，滑動以 .area 做為單位。
3. 使用 css 的動畫與 delay，控制滑進 .area 的動畫順序播放。

## 分支 dev2
1. 主要分支的 react 版本
2. 主分支的 css 改成了 module sass
3. 因為整頁的捲動事件要註冊在 document 或 window 中，而現在 react 的節點中沒有 document 或 window，因此在頁面載入完時用 useEffect 在 window 註冊

## 分支 dev3

## 分支 dev4

## 有使用到 next 的部份

首先，啟動開發伺服器：

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

用瀏覽器開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

你可以開始編輯 `pages/index.js`. 來修改頁面。檔案在修改後會自動更新頁面。

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) 可以透過 [http://localhost:3000/api/hello](http://localhost:3000/api/hello)存取。 你可以在`pages/api/hello.js`中編輯這個端點。

`pages/api` 目錄會對應到  `/api/*`。這個目錄下的檔案會被視為 [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)，而不是 React 頁面。

這個專案使用 [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) 自動優化並載入 [Geist](https://vercel.com/font)，Vercel 推出的新字型家族。