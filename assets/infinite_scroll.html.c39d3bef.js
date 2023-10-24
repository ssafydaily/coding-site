import{_ as n,o as s,c as a,e as t}from"./app.2a81dd92.js";const e="/coding-site/assets/dimensions-client.206992b8.png",p="/coding-site/assets/scrolltop.6a3325f5.png",o="/coding-site/assets/scrollheight.1dd5d7f8.png",c={},l=t('<h1 id="infinite-scroll" tabindex="-1"><a class="header-anchor" href="#infinite-scroll" aria-hidden="true">#</a> infinite scroll</h1><h3 id="element-clientheight" tabindex="-1"><a class="header-anchor" href="#element-clientheight" aria-hidden="true">#</a> Element: clientHeight</h3><ul><li><code>clientHeight</code> = <code>CSS height</code> + <code>CSS padding</code> - <code>가로 스크롤 막대 높이(있다면)</code></li><li><code>clientHeight</code> 가 루트 요소(<code>&lt;html&gt;</code> 또는 <code>&lt;body&gt;</code>)에서 사용되면 <code>viewport</code>의 높이 반환</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><img src="'+e+'" alt="clientHeight"></p></div><h3 id="element-scrolltop" tabindex="-1"><a class="header-anchor" href="#element-scrolltop" aria-hidden="true">#</a> Element: scrollTop</h3><ul><li><code>scrollTop</code>은 요소(element)의 상단(<code>top</code>)에서 보이는 영역(visible content) 까지의 거리 값</li><li>요소가 스크롤 될 수 없다면 <code>scrollTop</code> 은 <code>0</code> 이다.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><img src="'+p+'" alt="scrollTop"></p></div><h3 id="element-scrollheight" tabindex="-1"><a class="header-anchor" href="#element-scrollheight" aria-hidden="true">#</a> Element: scrollHeight</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><img src="'+o+`" alt="scrollheight"></p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     
    <span class="token keyword">const</span> <span class="token punctuation">{</span>scrollTop<span class="token punctuation">,</span> scrollHeight<span class="token punctuation">,</span> clientHeight<span class="token punctuation">}</span> <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
    
    <span class="token comment">// if(scrollHeight - scrollTop === clientHeight){</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>scrollHeight <span class="token operator">-</span> element<span class="token punctuation">.</span>clientHeight <span class="token operator">-</span> element<span class="token punctuation">.</span>scrollTop<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tmdb-example" tabindex="-1"><a class="header-anchor" href="#tmdb-example" aria-hidden="true">#</a> TMDB Example</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Popular Movies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movie-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movie-card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movie-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>영화 제목<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>      
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.movie-card</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 5rem<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> aquamarine<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.movie-title</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> movieList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.movie-list&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> pageNo <span class="token operator">=</span> <span class="token number">1</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span>clientHeight<span class="token punctuation">,</span> scrollHeight<span class="token punctuation">,</span> scrollTop<span class="token punctuation">}</span> <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scrollHeight<span class="token punctuation">,</span> scrollTop<span class="token punctuation">,</span> clientHeight<span class="token punctuation">,</span> scrollHeight <span class="token operator">-</span> scrollTop<span class="token punctuation">)</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>scrollHeight <span class="token operator">-</span> scrollTop <span class="token operator">===</span> clientHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>      
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://api.themoviedb.org/3/movie/popular&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">api_key</span><span class="token operator">:</span> <span class="token string">&#39;api_key&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">language</span><span class="token operator">:</span> <span class="token string">&#39;ko-KR&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> pageNo<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        totalPage <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>totalPages
        <span class="token keyword">const</span> movies <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>results
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> movie <span class="token keyword">of</span> movies<span class="token punctuation">)</span><span class="token punctuation">{</span>
          movieList<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">createMovieCard</span><span class="token punctuation">(</span>movie<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        pageNo <span class="token operator">+=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">createMovieCard</span><span class="token punctuation">(</span><span class="token parameter">movie</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> card <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  card<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;movie-card&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> title <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span>
  title<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;movie-title&#39;</span><span class="token punctuation">)</span>
  title<span class="token punctuation">.</span>innerText <span class="token operator">=</span> movie<span class="token punctuation">.</span>title
  card<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span>
  <span class="token keyword">return</span> card
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="inetersection-observer" tabindex="-1"><a class="header-anchor" href="#inetersection-observer" aria-hidden="true">#</a> Inetersection Observer</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> movieList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.movie-list&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> pageNo <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">function</span> <span class="token function">createMovieCard</span><span class="token punctuation">(</span><span class="token parameter">movie</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> card <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  card<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;movie-card&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> title <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span>
  title<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;movie-title&#39;</span><span class="token punctuation">)</span>
  title<span class="token punctuation">.</span>innerText <span class="token operator">=</span> movie<span class="token punctuation">.</span>title
  card<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span>
  <span class="token keyword">return</span> card
<span class="token punctuation">}</span>
<span class="token comment">// </span>
<span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">entries</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;################&#39;</span><span class="token punctuation">)</span>
      <span class="token function">fetchMovie</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>
<span class="token keyword">const</span> setntinel <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#sentinel&#39;</span><span class="token punctuation">)</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>setntinel<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),i=[l];function u(r,d){return s(),a("div",null,i)}const v=n(c,[["render",u],["__file","infinite_scroll.html.vue"]]);export{v as default};