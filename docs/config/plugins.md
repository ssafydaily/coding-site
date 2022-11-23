# Plugins

## vuepress-plugin-md-enhance [<Badge type="tip" text="link" vertical="middle"/>](https://vuepress-theme-hope.github.io/v2/md-enhance/)

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-plugin-md-enhance@next
```

@tab yarn

```bash
yarn add -D vuepress-plugin-md-enhance@next
```

@tab:active npm

```bash
npm i -D vuepress-plugin-md-enhance@next
```
:::


``` js
// .vuepress/config.js
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // your options
    }),
  ],
};
```


::: tip 참고
- [데모보기](https://vuepress-theme-hope.github.io/md-enhance-demo/demo/)
:::


## vuepress-plugin-iconify [<Badge type="tip" text="link" vertical="middle"/>](https://vuepress-plugin-iconify.ntnyq.com/)


::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-plugin-md-enhance@next
```

@tab yarn

```bash
yarn add -D vuepress-plugin-md-enhance@next
```

@tab:active npm

```bash
npm i -D vuepress-plugin-md-enhance@next
```
:::


```js
import { defineUserConfig } from '@vuepress/cli'
import { iconifyPlugin } from 'vuepress-plugin-iconify'

export default defineUserConfig({
  plugins: [iconifyPlugin()],
})
```

```md
<vp-icon icon="vscode-icons:file-type-vue" width="50px" />

<vp-icon icon="vscode-icons:file-type-vue" width="50px" vertical-flip />

<vp-icon icon="vscode-icons:file-type-flutter" width="50px" horizontal-flip />

<vp-icon icon="fa:github" width="50" color="#24292f" />

<vp-icon icon="fa:apple" width="50" color="#24292f" rotate="90deg" />
```


<vp-icon icon="vscode-icons:file-type-vue" width="50px" />

<vp-icon icon="vscode-icons:file-type-vue" width="50px" vertical-flip />

<vp-icon icon="vscode-icons:file-type-flutter" width="50px" horizontal-flip />

<vp-icon icon="fa:github" width="50" color="#24292f" />

<vp-icon icon="fa:apple" width="50" color="#24292f" rotate="90deg" />

::: tip 참고
- [Component props](https://docs.iconify.design/icon-components/vue/#properties)
:::