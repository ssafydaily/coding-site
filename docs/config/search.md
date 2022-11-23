# Content Search

## Local Search [<Badge type="tip" text="link" vertical="middle"/>](https://v2.vuepress.vuejs.org/reference/plugin/search.html)

::: tip 
- 디폴트 테마는 `pulugins` 속성으로 **search box**를 추가한다.
- **Local Search** 플로그인은 다른 테마에서는 직접 사용되지 않을 수 있다.
:::

### 모듈 설치

### `config.js` 수정


## docsearch

### 초기 설정

``` sh
npm i -D @vuepress/plugin-docsearch@next
```

``` js
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default {
  plugins: [
    docsearchPlugin({
      // options
    }),
  ],
}
```

### Search Index

- **DocSearch**를 사용하려면 먼저 [사이트의 URL 제출](https://docsearch.algolia.com/apply/)을 한다.

- DocSearch 팀에서 **apiKey** 와 **indexName** 을 이메일로 전송한다.

- 