import{_ as n,o as s,c as a,e}from"./app.2a81dd92.js";const p={},t=e(`<h1 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error Handling</h1><ul><li>예외 전파</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;f()&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        g<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token string">&#39;예외 잡음&#39;</span><span class="token punctuation">)</span>
        <span class="token number">10</span><span class="token operator">/</span><span class="token number">0</span>

<span class="token keyword">def</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;g()&#39;</span><span class="token punctuation">)</span>
    h<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;h()&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">&#39;Exception&#39;</span><span class="token punctuation">)</span>
<span class="token comment">#-----------------------    </span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    f<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> ZeroDivisionError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;여기까지 와바&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;정상적으로 실행되었구나&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;무조건 여기 들렀다 가야지&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>출력</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>f<span class="token punctuation">(</span><span class="token punctuation">)</span>
g<span class="token punctuation">(</span><span class="token punctuation">)</span>
h<span class="token punctuation">(</span><span class="token punctuation">)</span>
Exception 예외 잡음
division by zero
무조건 여기 들렀다 가야지
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[t];function c(o,l){return s(),a("div",null,i)}const r=n(p,[["render",c],["__file","05_error_handling.html.vue"]]);export{r as default};
