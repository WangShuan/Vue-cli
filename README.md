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

### 3-1. `bootstrap.scss` 套件

在項目資料夾中開啟終端機 輸入指令 `npm i --save bootstrap sass-loader node-sass` 安裝 `bootstrap` 與 `sass`

  * `sass-loader` 版本需為 `7.3.1` 否則報錯: `Module build failed: TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined`

接下來我們通過在 `<style lang="scss">@import "~bootstrap/scss/bootstrap"</style>` 引入 `bootstrap` 到 `App.vue` 中

### 3-2. `vue-axios` (AJAX 套件)

直接在終端機輸入 `npm i --save axios vue-axios`

  * `vue-axios` 版本需為 `2.1.5` 否則報錯: `axios typeError: Cannot set property 'axios' of undefined`

然後開啟 `src/main.js` 在裡面引入 `axios` 與 `vue-axios`

再加上 `Vue.use(axios,vueAxios)` 這行代碼 這樣我們就能在實例或元件中通過 `this` 來使用 `axios`

在元件或實例中通過 `this.$http.get('api網址').then((這裡寫箭頭函數))` 就可以通過 AJAX 獲取資料

### 3-3. `vue-router`(路由套件)

* 安裝：

  直接在終端機輸入 `npm i --save vue-router`

  然後到 `src` 目錄中創建資料夾 `router` 在該資料夾中創建 `index.js` 文件

  打開 `index.js` 文件 輸入以下代碼：

  ```js

  import Vue from 'vue'
  import VueRouter from 'vue-router'

  Vue.use(VueRouter)

  ```

  再到 `main.js` 文件中添加 `import router from './router'` 然後在該文件的實例中加上 `router`

  最後重啟 `vue-cli` 環境 會發現網址後方多了 `/#/` 即完成路由安裝

* 基礎使用：

  路由使用方式為 在 `export default new VueRouter({})` 的物件中添加 `routes` 其值為數組 裡面放入物件 代碼如下：

  ```js

  export default new VueRouter({
      routes: [
          {
              name: '首頁', // 元件呈現的名稱
              path: '/home', // 虛擬路由 即在網址 # 後面的路徑
              component: Home // 元件 這裡通過 import 加載 helloworld.vue 為 Home
          }
      ]
  })

  ```

  接下來回到 `App.vue` 添加新的標籤 `<router-view></router-view>`

  重整環境後在網址 `#` 後方加上 `home` 就可以打開該路由畫面了

* 進階使用：

  我們先在 `index.html` 插入 `bootstrap` 樣式連結

  然後在 `components` 目錄下增加一個目錄 `pages` 在該目錄下創建一個新的元件 `page.vue` 打開該編輯畫面 我們複製一個 `bootstrap` 元件中的卡片放在其 `template` 中

  回到 `index.js` 中添加這個 `page.vue` 的路由 這裡將路由設為 `/page`

  然後打開 `App.vue` 在 `template` 最上方添加一個 `bootstrap` 元件中的導覽列 把導覽列的 `a` 標籤改成 `router-link` 把 `href` 屬性改成 `to` 屬性 如下：

  ```html
  
  <template>
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/page">Page</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <img src="./assets/logo.png" />
      <router-view></router-view>
    </div>
  </template>
  
  ```

  最後重新啟動環境 再將瀏覽器頁面重整 就能透過導覽列切換要顯示的分頁了

* 巢狀路由：

  我們先將 `page.vue` 複製三個 將它們各自改名為 `card1 card2 card3`

  然後把 `page.vue` 的卡片元件內容刪除 只保留外層的 `<div class="card"></div>`

  接下來在 `<div class="card"></div>` 裡面添加上 `router-view` 標籤 我們用路由來切換顯示內容

  現在打開剛才複製的三個 `.vue` 檔 這裡相反 把外層的 `<div class="card"></div>` 刪除 只保留卡片元件內容 然後分別將其 `card-title` 改成 `card1 card2 card3`

  最後我們打開 `index.js` 撰寫路由 這裡我們在 `page` 那個路由添加一個屬性 `children` 其值是陣列 陣列中一樣是一個物件 裡面是路由配置 `name path component` 這三個屬性 要注意的是 `children` 裡面的 `path` 不需在前面加 `/` 如下：

  ```js

  export default new VueRouter({
    routes: [
        {
            name: '首頁',
            path: '/home',
            component: Home
        },
        {
            name: '分頁',
            path: '/page',
            component: Page,
            children: [
                {
                    name: '卡片1',
                    path: '',
                    component: Card1
                },
                {
                    name: '卡片2',
                    path: 'card2',
                    component: Card2
                },
                {
                    name: '卡片3',
                    path: 'card3',
                    component: Card3
                }
            ]
        }
    ]
  })

  ```

* 動態路由：

我們可以通過動態路由切換頁面中 `AJAX` 的結果 手些需在項目中安裝前面提過的 `vue-axios axios` 並配置於 `main.js` 中

然後我們拿 `randomuser` 的 `API` 來做練習 

首先打開 `index.js` 把 `card3 的 path` 改成 `card3/:id` 這裏 `:id` 為動態 `id`

然後打開 `card3.vue` 在 `data` 下方新增一個 `created` 函數來獲取 `randomuser` 資料

  * 這裡在 `randomuser` 官網中有提到我們可以通過在 `API` 網址後方加上 `/?seed=xxx` 來維持當前獲取的資料 我們利用這點可以通過將動態 `id` 增加到 `API` 網址後方來完成動態路由切換頁面中 `AJAX` 的結果

  * 獲取動態 `id` 的方式為 `this.$route.params.id` 此為 `vue-router` 提供的方式 `$route.params` 為路徑參數 在路徑中使用 `:xxx` 就可以通過  `this.$route.params.xxx` 獲取 `:xxx` 中 `xxx` 的值

    * 這裡要注意 ***`$route` 與 `$router` 是不一樣的東西*** 我們這裡操作的是 `$route` 這是路由信息對象 只供讀取 不能修改

  代碼如下：

  ```js
  
  export default {
    data() {
      return {};
    },
    created() {
      var id = this.$route.params.id;
      this.$http.get(`https://randomuser.me/api/?seed=${id}`).then((res) => {
        console.log(res.data);
      });
    },
  };
  
  ```

* 命名路由：

  當要在同一個畫面上載入多個元件時可以使用命名路由 

  使用方式為在 `index.js` 文件中將要使用多個元件的路由對象的 `component` 改成 `components` 且 `components` 的值為一個對象 

  `components` 對象中放入 `{ default: 原本的元件, 自定義名稱: 另外的元件}` 

  然後在 `App.vue` 中增加新的 `router-view` 標籤並給該標籤添加 `name` 屬性 其屬性值為剛才 `components` 中的自定義名稱 即完成

  這裡我們把 `page` 元件的導覽列提出來做成新的 `menu` 元件 通過命名路由來使兩個元件同時顯示在畫面上 代碼如下：

  ```js

  export default new VueRouter({
    routes: [
      {
        path: '/page',
        components: {
          default: Page, // default 為沒有添加 name 屬性的 router-view 標籤
          menu: Nav // menu 為添加 name 屬性為 menu 的 router-view 標籤
        },
        children: [
          {
            name: '卡片1',
            path: '',
            component: Card1
          },
          {
            name: '卡片2',
            path: 'card2',
            component: Card2
          },
          {
            name: '卡片3',
            path: 'card3',
            component: Card3
          }
        ]
      }
    ]
  })

  ```

* 自定義切換路由：

我們到 `menu.vue` 文件中添加兩個導航選項 這裏使用 `a` 標籤 而不是原本的 `router-link` 標籤

然後給其添加點擊事件分別為 `updatePath 切換到指定頁面`、 `beforePath 回到上一個頁面`

再到 `menu.vue` 的 `vue` 實例中添加 `methods` 撰寫點擊事件的函數

這裏使用 `this.$router.xxx` 方法來切換路由 (詳細可參考 `vue-router` 的官方文檔)

代碼如下：

```js

export default {
  data() {
    return {};
  },
  methods: {
    updatePath() {
      this.$router.push("/page/card2"); // 切換到 card2 頁面 並保存瀏覽紀錄
      // this.$router.replace("/page/card2") // 這個方法一樣可以切換頁面 但不會保存紀錄 
      // 若使用 $router.replace() 切換 則 $router.back() 會跳過上一次 切換到上上次頁面
    },
    beforePath() {
      this.$router.back(); // 切換回上一個頁面 這個可以多次點擊 它會存取瀏覽器保留的紀錄
      // this.$router.go(-1) // 這個方法也可以切換回上一個頁面 主要是看參數 
      // $router.go() 參數1是下一個頁面 參數-1則是上一個頁面 通常與 $router.back() 一起使用
    },
  },
};

```