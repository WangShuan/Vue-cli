# Vue-Cli

## 1. 安裝 `vue-cli`

`vue cli` 需使用 `npm` 以及 `webpack` 且最好 `node` 版本6以上 `npm` 版本3以上

安裝方式為 打開終端機 輸入指令 `npm i -g vue-cli`

完成後通過輸入 `vue list` 指令查看它所提供的模板 這裡我們使用 `webpack` 這個模板

首先創建一個資料夾為本項目的資料夾 然後我們在終端機輸入 `vue init webpack 資料夾名稱`

  * 這裏的 `webpack` 是模板

接下來會出現以下對話：

```shell

? Project name `vuewebpack` #項目名稱
? Project description `A Vue.js project` #項目描述
? Author #作者
? Vue build `standalone` #這裡建議選 standalone ，該選項為運行時直接編譯渲染
? Install vue-router? `No` #還沒學 先不安裝
? Use ESLint to lint your code? `No` #是否使用 ES6 編寫 這裡先不要
? Set up unit tests `No` #這是測試有關的 不需要
? Setup e2e tests with Nightwatch? `No` #這是測試有關的 不需要
? Should we run `npm install` for you after the project has been created? (recommended) `no` #是否自動安裝 這裡先不要 手動安裝就好

```

完成上述對話後項目資料夾就會生成一個 `package.json` 文件

接下來我們把終端機當前目錄切到項目資料夾中 再輸入指令 `npm i` 讓它安裝 `package.json` 中的 `vue-cli` 所有依賴項

最後輸入指令 `npm run dev` 後會顯示 `I  Your application is running here: http://localhost:8080` 如果可以打開該連結 就表示 `vue-cli` 已經完全安裝完成了

## 2. 安裝及介紹 `webpack`

`webpack` 是從 `bulid` 資料夾中的 `webpack.xxxx.conf.js` 運行的

在 `node` 中的環境變量 到 `vue` 中可以通過 `config` 資料夾裡的文件修改

  * `index.js` 是用來設置開啟環境的路由

  * `dev.env.js` 是開發環境的 `webpack` 設定檔

  * `prod.env.js` 是正式環境的 `webpack` 設定檔

在 `webpack` 設定檔中分別都有其 `module.exports` 裡面所設置的就是環境變量

當我們通過 `npm run dev` 就是開啟 `dev.env.js` 設定檔 反之當我們通過 `npm run build` 就是開啟 `prod.env.js` 設定檔

我們可以在 `.vue` 檔中通過 `process.env.環境變量名稱` 獲取設定檔內的環境變量

環境變量是自行設置的 且沒有上限 這裡統一建議環境變量名稱設為全大寫 用以辨認其為環境變量 另外在設定環境變量的值時要記得使用單引號或雙引號包裹內容 否則會出錯

## 3. 使用套件

在項目資料夾中開啟終端機 輸入指令 `npm i --save bootstrap sass-loader node-sass` 安裝 `bootstrap` 與 `sass`

  * `sass-loader` 版本需為 `7.3.1` 否則報錯: `Module build failed: TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined`

接下來我們通過在 `<style lang="scss">@import "~bootstrap/scss/bootstrap"</style>` 引入 `bootstrap` 到 `App.vue` 中

以上是安裝 `bootstrap` 樣式套件 接下來安裝 `axios` AJAX 套件

直接在終端機輸入 `npm i --save axios vue-axios`

  * `vue-axios` 版本需為 `2.1.5` 否則報錯: `axios typeError: Cannot set property 'axios' of undefined`

然後開啟 `src/main.js` 在裡面引入 `axios` 與 `vue-axios`

再加上 `Vue.use(axios,vueAxios)` 這行代碼 這樣我們就能在實例或元件中通過 `this` 來使用 `axios`