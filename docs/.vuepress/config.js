import { searchPlugin } from '@vuepress/plugin-search'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defaultTheme } from '@vuepress/theme-default'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { iconifyPlugin } from 'vuepress-plugin-iconify'

module.exports = {
  base: '/note-vuepress',
  lang: 'ko-KR',
  title: 'ssafydaily',
  // head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
  },
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
    navbar: [      
      {
        text: 'Javascript',        
        link: '/js/',
        children: [
          {
            text: 'module',
            link: '/js/module.md'
          }
        ],
      },
      {
        text: 'Vue',        
        link: '/vue/',
      },
      // NavbarGroup      
      {
        text: 'Config',
        children: [
          {
            text: '기본 설정',
            link: '/config/',
          },
          {
            text: '디폴트 테마',
            link: '/config/default_theme.md',
            // this item will be active when current route path starts with /foo/
            // regular expression is supported
            activeMatch: '^/defaut/',
          },
          {
            text: 'Search',
            link: '/config/search.md',
          },
          {
            text: 'Plugins',
            link: '/config/plugins.md',
          }
        ],
      },
    ],
  }),
  
}
