## 啟動專案

1.  將專案下載至本機端。
2.  在專案資料夾下執行終端機 `npm install` 指令，安裝專案所需的套件。
3.  在專案資料夾下執行終端機 `npm run dev` 指令，執行本地端伺服器。
4.  瀏覽器開啟連結 [http://localhost:3000](http://localhost:3000) 來預覽專案。

## 資料夾架構

```
src/
├── api/                         # API 相關方法
│   ├── queries/                 # React Query 使用 API 的方法
│   ├── requests/                # 請求 API 的方法
│   ├── types/                   # API response 的格式
│   ├── query-keys.ts            # React Query 的 query key 定義
│   └── query-options.ts         # React Query 的 options 定義
├── app/                         # Next.js App Router 頁面與版型
│   ├── favicon.ico              # Favicon
│   ├── globals.css              # 全域樣式
│   ├── heroes/                  # /heroes 頁面
│   │   └── [heroId]/            # /heroes/:heroId 頁面
│   ├── layout.tsx               # 首頁版型
│   └── page.tsx                 # 首頁
├── components/                  # 全站元件
│   ├── heroes/                  # heroes 相關元件
│   ├── shared/                  # 公用元件（ex: Header）
│   └── ui/                      # Shadcn UI 元件
├── constants/                   # 全站使用的常數（ex: pathnames、endpoint）
├── lib/                         # 工具函式
└── providers/                   # Context providers
```

## Application 邏輯架構

- api/ 負責 API 資料相關處理
- app/ 負責路由與頁面組裝
- components/ 負責頁面元件、全站共用元件
- providers/ 負責全域資料
- constants / 提出全站使用的常數
- lib/ 提出全站共用的工具方法

以 App Router 作為頁面架構，React Query 作為資料管理核心，components 作為 UI 呈現面，再透過 providers、constants、lib 做全域提供與基礎的抽象方法。

## 設計理念

這個架構是以「分層架構 + 關注點分離」為核心，將 routing、data fetching、UI rendering 與全域設定拆開，並透過 React Query 作為資料中介層，讓整個應用具備良好的可維護性、可擴展性。

## 第三方 library

- react-query：使用 React Query 作為 API 管理層
- axios：API 請求方法
- dayjs：提供時間格式工具方法
- lucide-react：提供 icon 元件
- next-theme：設定 light mode/dark mode
- shadcn：提供全站共用元件
- sonner：shadcn UI 的 toast 元件

## 註解原則

- API 請求的格式說明
- 較複雜的業務邏輯（ex: 能力值需符合特定條件才能儲存）

## 問題處理

問題：
:::warning
在使用 React Query 與 Shadcn UI 時，發現版本與之前差異較大，所以過去的使用方法有些已被棄用。
:::
處理：
:::success
翻閱官方文件也透過 Codex 直接進行比較與修正。
:::
問題：
:::warning
編輯並儲存能力值之後，發現點擊其他英雄再點擊回剛剛儲存過的英雄時，該英雄顯示的能力值並不是儲存當下的樣貌，而是一開始取得的狀態。
:::
處理：
:::success
確認 API 確實成功儲存資料之後，發現是 React Query 對於 GET 過的 `/heroes/:heroId` 有快取，所以必須在儲存成功之後主動清除該快取，以方便拿到最新的資料。
:::

## 加分項目

### UI friendly 相關

- 新增首頁內容，方便連結至 `/heroes` 頁面。
- 新增 `/heroes/:heroId` 不存在頁面的提示。
- 新增全站 header，其中包含首頁連結、麵包屑、light/dark mode 切換。
- 新增 Hero List 的 skeleton。
- 新增儲存能力值時成功與失敗的 toast 提示。
- 新增能力值一鍵重新配置功能。
- 能力值加減按鈕，新增 disable 的邏輯。

### 提升程式碼品質

- 透過資料、頁面、元件分層後，在可讀性與可維護性都可以提升。
- 使用 React Query 作為 API 請求的管理，在有 cacahe 的情況下不需要再次請求 API，以提升效能。

### AI 輔助開發

- 透過 Codex 比較套件版本使用上的差異，進行開發上的輔助。
