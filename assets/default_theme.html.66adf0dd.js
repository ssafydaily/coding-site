import{_ as e,r as s,o,c as i,a as n,b as l,d as a,e as p}from"./app.2a81dd92.js";const u={},r=p(`<h1 id="default-theme" tabindex="-1"><a class="header-anchor" href="#default-theme" aria-hidden="true">#</a> Default Theme</h1><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2><blockquote><p><strong>navbar</strong></p><ul><li><p>타입: <code>false | (NavbarItem | NavbarGroup | strirg)[]</code></p></li><li><p>기본값: <code>[]</code></p></li><li><p><code>false</code>: navbar 사용안함</p></li></ul></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// NavbarItem</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Foo&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/foo/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// NavbarGroup</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Group&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/group/foo.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/group/bar.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// string - page file path</span>
      <span class="token string">&#39;/bar/README.md&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2><h2 id="built-in-components" tabindex="-1"><a class="header-anchor" href="#built-in-components" aria-hidden="true">#</a> Built-in Components</h2><h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2>`,7),k={id:"style",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#style","aria-hidden":"true"},"#",-1),v={href:"https://v2.vuepress.vuejs.org/reference/default-theme/styles.html",target:"_blank",rel:"noopener noreferrer"},b=p(`<h3 id="style-file" tabindex="-1"><a class="header-anchor" href="#style-file" aria-hidden="true">#</a> Style File</h3><ul><li>스타일 파일의 경로는 <code>.vuepress/styles/index.scss</code></li></ul><details class="custom-container details"><summary>style scss varialbes</summary><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token comment">// brand colors</span>
  <span class="token property">--c-brand</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span>
  <span class="token property">--c-brand-light</span><span class="token punctuation">:</span> #4abf8a<span class="token punctuation">;</span>

  <span class="token comment">// background colors</span>
  <span class="token property">--c-bg</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">--c-bg-light</span><span class="token punctuation">:</span> #f3f4f5<span class="token punctuation">;</span>
  <span class="token property">--c-bg-lighter</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span>
  <span class="token property">--c-bg-navbar</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-bg-sidebar</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-bg-arrow</span><span class="token punctuation">:</span> #cccccc<span class="token punctuation">;</span>

  <span class="token comment">// text colors</span>
  <span class="token property">--c-text</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>
  <span class="token property">--c-text-accent</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-text-light</span><span class="token punctuation">:</span> #3a5169<span class="token punctuation">;</span>
  <span class="token property">--c-text-lighter</span><span class="token punctuation">:</span> #4e6e8e<span class="token punctuation">;</span>
  <span class="token property">--c-text-lightest</span><span class="token punctuation">:</span> #6a8bad<span class="token punctuation">;</span>
  <span class="token property">--c-text-quote</span><span class="token punctuation">:</span> #999999<span class="token punctuation">;</span>

  <span class="token comment">// border colors</span>
  <span class="token property">--c-border</span><span class="token punctuation">:</span> #eaecef<span class="token punctuation">;</span>
  <span class="token property">--c-border-dark</span><span class="token punctuation">:</span> #dfe2e5<span class="token punctuation">;</span>

  <span class="token comment">// custom container colors</span>
  <span class="token property">--c-tip</span><span class="token punctuation">:</span> #42b983<span class="token punctuation">;</span>
  <span class="token property">--c-tip-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-tip-title</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-tip-text</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-tip-text-accent</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-accent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-warning</span><span class="token punctuation">:</span> #e7c000<span class="token punctuation">;</span>
  <span class="token property">--c-warning-bg</span><span class="token punctuation">:</span> #fffae3<span class="token punctuation">;</span>
  <span class="token property">--c-warning-title</span><span class="token punctuation">:</span> #ad9000<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text</span><span class="token punctuation">:</span> #746000<span class="token punctuation">;</span>
  <span class="token property">--c-warning-text-accent</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-danger</span><span class="token punctuation">:</span> #cc0000<span class="token punctuation">;</span>
  <span class="token property">--c-danger-bg</span><span class="token punctuation">:</span> #ffe0e0<span class="token punctuation">;</span>
  <span class="token property">--c-danger-title</span><span class="token punctuation">:</span> #990000<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text</span><span class="token punctuation">:</span> #660000<span class="token punctuation">;</span>
  <span class="token property">--c-danger-text-accent</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-details-bg</span><span class="token punctuation">:</span> #eeeeee<span class="token punctuation">;</span>

  <span class="token comment">// badge component colors</span>
  <span class="token property">--c-badge-tip</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-tip<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-badge-warning</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-warning<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--c-badge-danger</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-danger<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// transition vars</span>
  <span class="token property">--t-color</span><span class="token punctuation">:</span> 0.3s ease<span class="token punctuation">;</span>
  <span class="token property">--t-transform</span><span class="token punctuation">:</span> 0.3s ease<span class="token punctuation">;</span>

  <span class="token comment">// code blocks vars</span>
  <span class="token property">--code-bg-color</span><span class="token punctuation">:</span> #282c34<span class="token punctuation">;</span>
  <span class="token property">--code-hl-bg-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--code-ln-color</span><span class="token punctuation">:</span> #9e9e9e<span class="token punctuation">;</span>
  <span class="token property">--code-ln-wrapper-width</span><span class="token punctuation">:</span> 3.5rem<span class="token punctuation">;</span>

  <span class="token comment">// font vars</span>
  <span class="token property">--font-family</span><span class="token punctuation">:</span> -apple-system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> <span class="token string">&#39;Segoe UI&#39;</span><span class="token punctuation">,</span> Roboto<span class="token punctuation">,</span> Oxygen<span class="token punctuation">,</span>
    Ubuntu<span class="token punctuation">,</span> Cantarell<span class="token punctuation">,</span> <span class="token string">&#39;Fira Sans&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Droid Sans&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Helvetica Neue&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">--font-family-code</span><span class="token punctuation">:</span> Consolas<span class="token punctuation">,</span> Monaco<span class="token punctuation">,</span> <span class="token string">&#39;Andale Mono&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ubuntu Mono&#39;</span><span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>

  <span class="token comment">// layout vars</span>
  <span class="token property">--navbar-height</span><span class="token punctuation">:</span> 3.6rem<span class="token punctuation">;</span>
  <span class="token property">--navbar-padding-v</span><span class="token punctuation">:</span> 0.7rem<span class="token punctuation">;</span>
  <span class="token property">--navbar-padding-h</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
  <span class="token property">--sidebar-width</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span>
  <span class="token property">--sidebar-width-mobile</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--sidebar-width<span class="token punctuation">)</span> <span class="token operator">*</span> 0.82<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--content-width</span><span class="token punctuation">:</span> 740px<span class="token punctuation">;</span>
  <span class="token property">--homepage-width</span><span class="token punctuation">:</span> 960px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-back-to-top</span>
<span class="token selector">.back-to-top </span><span class="token punctuation">{</span>
  <span class="token property">--back-to-top-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--back-to-top-color-hover</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-docsearch</span>
<span class="token selector">.DocSearch </span><span class="token punctuation">{</span>
  <span class="token property">--docsearch-primary-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-highlight-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-muted-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-quote<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-container-background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>9<span class="token punctuation">,</span> 10<span class="token punctuation">,</span> 17<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-lighter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-focus-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-shadow</span><span class="token punctuation">:</span> inset 0 0 0 2px <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-active-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-shadow</span><span class="token punctuation">:</span> 0 1px 3px 0 <span class="token function">var</span><span class="token punctuation">(</span>--c-border-dark<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-footer-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-external-link-icon</span>
<span class="token selector">.external-link-icon </span><span class="token punctuation">{</span>
  <span class="token property">--external-link-icon-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-quote<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-medium-zoom</span>
<span class="token selector">.medium-zoom-overlay </span><span class="token punctuation">{</span>
  <span class="token property">--medium-zoom-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-nprogress</span>
<span class="token selector">#nprogress </span><span class="token punctuation">{</span>
  <span class="token property">--nprogress-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-pwa-popup</span>
<span class="token selector">.pwa-popup </span><span class="token punctuation">{</span>
  <span class="token property">--pwa-popup-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--pwa-popup-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--pwa-popup-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--pwa-popup-shadow</span><span class="token punctuation">:</span> 0 4px 16px <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--pwa-popup-btn-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--pwa-popup-btn-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--pwa-popup-btn-hover-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// plugin-search</span>
<span class="token selector">.search-box </span><span class="token punctuation">{</span>
  <span class="token property">--search-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--search-accent-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--search-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--search-border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-border<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--search-item-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-text-lighter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--search-item-focus-bg-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-bg-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,3);function m(h,g){const t=s("Badge"),c=s("ExternalLinkIcon");return o(),i("div",null,[r,n("h2",k,[d,l(" Style "),n("a",v,[a(t,{type:"tip",text:"link",vertical:"middle"}),a(c)])]),b])}const f=e(u,[["render",m],["__file","default_theme.html.vue"]]);export{f as default};
