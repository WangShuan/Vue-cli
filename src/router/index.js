import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/HelloWorld'
import Page from '@/components/pages/page'
import Card1 from '@/components/pages/card1'
import Card2 from '@/components/pages/card2'
import Card3 from '@/components/pages/card3'
import Nav from '@/components/pages/menu'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: '首頁',
            path: '/home',
            component: Home
        },
        {
            path: '/page',
            components: {
                default: Page,
                menu: Nav
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