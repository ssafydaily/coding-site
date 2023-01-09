---
next: 
  text: default theme
  link: /config/default_theme.md

icon: code
---
---

## Vuepress 설정하기

### Routing Page

기본적으로, **Page** 의 라우트 경로는 마크다운 파일의 상대경로로 결정



### Frontmatter

마크다운 파일은 **[YAML](https://yaml.org)** `frontmatter`를 포함할 수 있다.

`frontmatter`는 파일의 시작에 위치하고, `---`(tripple-dashed line)로 감싼다.

``` markdown
---
lang: en-US
title: Title of this page
description: Description of this page
---
```
- 필드들은 설정 파일의 [사이트 설정(Site Config)](./config/)과 유사하다.
- 현재 페이지의 `언어(lang)`, `제목(title)` 등을 재정의 할 수 있다.

::: tip
- [Built-in Frontmatter FULL List](https://v2.vuepress.vuejs.org/reference/frontmatter.html)
- [디폴트 테마의 Frontmatter](https://v2.vuepress.vuejs.org/reference/default-theme/frontmatter.html)
:::




## Site Config

