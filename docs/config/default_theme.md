# Default Theme

## Config

> **navbar**
>
> - 타입: `false | (NavbarItem | NavbarGroup | strirg)[]`
> - 기본값: `[]`
> 
> - `false`: navbar 사용안함


``` javascript
export default {
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // string - page file path
      '/bar/README.md',
    ],
  }),
}
```

## Frontmatter

## Built-in Components

## Markdown

## Style [<Badge type="tip" text="link" vertical="middle"/>](https://v2.vuepress.vuejs.org/reference/default-theme/styles.html)

### Style File

- 스타일 파일의 경로는 `.vuepress/styles/index.scss`

::: details style scss varialbes
@[code](./codes/default.scss)
:::

