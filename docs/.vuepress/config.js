import { searchPlugin } from '@vuepress/plugin-search'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defaultTheme } from '@vuepress/theme-default'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { iconifyPlugin } from 'vuepress-plugin-iconify'
// ---------------------------------------------------------
import { navbar } from './navbar'
import { sidebar } from './sidebar'
module.exports = {
  base: '/coding-site',
  lang: 'ko-KR',
  title: 'LetsGo',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  // themeConfig: {
  //   search: true,
  //   searchMaxSuggestions: 10,      
  // },
  plugins: [
    iconifyPlugin(),
    mdEnhancePlugin({
      tabs: true,
      codetabs: true,
      // Enable Tex Support using mathjax
      mathjax: true,
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },      
    }),
  ],
  theme: defaultTheme({
    navbar,
    // sidebar: {
    //     '/python/': [
    //       {
    //         text: 'basic', 
    //         children: ['/python/01_data_type.md', '/python/02_container.md'],
    //       },
    //     ],
    //   },
  }),
  
}
