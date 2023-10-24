import{_ as n,o as s,c as a,e as p}from"./app.2a81dd92.js";const t={},e=p(`<h1 id="decorator" tabindex="-1"><a class="header-anchor" href="#decorator" aria-hidden="true">#</a> Decorator</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">printMsg</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> <span class="token string">&#39;호출전&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> <span class="token string">&#39;종료&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper

<span class="token keyword">def</span> <span class="token function">helloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;helloWorld 함수 실행중&#39;</span><span class="token punctuation">)</span>

printWrapper <span class="token operator">=</span> printMsg<span class="token punctuation">(</span>helloWorld<span class="token punctuation">)</span>
printWrapper<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>함수에 적용</li><li>기존 함수를 수정하지 않고 추가기능을 구현한다.</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">printMsg</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> <span class="token string">&#39;호출전&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> <span class="token string">&#39;종료&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@printMsg</span>
<span class="token keyword">def</span> <span class="token function">helloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;helloWorld 함수 실행중&#39;</span><span class="token punctuation">)</span>

helloWorld<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>인자를 전달하는 함수</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">printMsg</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> <span class="token string">&#39;호출전&#39;</span><span class="token punctuation">)</span>
        result <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> <span class="token string">&#39;종료&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> result

    <span class="token keyword">return</span> wrapper

<span class="token keyword">def</span> <span class="token function">helloWorld</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;helloWorld 함수 실행중&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b

printWrapper <span class="token operator">=</span> printMsg<span class="token punctuation">(</span>helloWorld<span class="token punctuation">)</span>
result <span class="token operator">=</span> printWrapper<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">printMsg</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>    
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> <span class="token string">&#39;호출전&#39;</span><span class="token punctuation">)</span>
        result <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> <span class="token string">&#39;종료&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> result

    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@printMsg</span>
<span class="token keyword">def</span> <span class="token function">helloWorld</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;helloWorld 함수 실행중&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b


<span class="token keyword">print</span><span class="token punctuation">(</span>helloWorld<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","11_decorator.html.vue"]]);export{r as default};
