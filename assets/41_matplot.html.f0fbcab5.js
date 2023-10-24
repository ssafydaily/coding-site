import{_ as n,o as s,c as a,e}from"./app.2a81dd92.js";const t={},p=e(`<h1 id="matplot" tabindex="-1"><a class="header-anchor" href="#matplot" aria-hidden="true">#</a> Matplot</h1><h2 id="figure를-png-파일로-저장하기" tabindex="-1"><a class="header-anchor" href="#figure를-png-파일로-저장하기" aria-hidden="true">#</a> <strong>Figure</strong>를 <code>PNG</code> 파일로 저장하기</h2><ul><li><code>matplotlib figure</code> 를 저장하려면 다음 2가지 방법을 사용 <ul><li><code>.savefig()</code></li><li><code>.imsave()</code></li></ul></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token comment">#   fname : 파일 이름</span>
<span class="token comment">#   dpi: 이미지 해상도를 조정하기 위한 Dots per Inch</span>
<span class="token comment">#   format: 파일 포맷(예, png)</span>

savefig<span class="token punctuation">(</span>fname<span class="token punctuation">,</span> dpi<span class="token operator">=</span><span class="token string">&#39;figure&#39;</span><span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>

<span class="token comment"># ------------------------------------------------------</span>
<span class="token comment">#   fname : 파일 이름</span>
<span class="token comment">#   arr: 이미지</span>

matplotlib<span class="token punctuation">.</span>pyplot<span class="token punctuation">.</span>imsave<span class="token punctuation">(</span>fname<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
 
<span class="token comment"># Creating data</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;2010&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2002&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2004&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2006&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2008&#39;</span><span class="token punctuation">]</span>
y <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>
 
<span class="token comment"># Plotting barchart</span>
plt<span class="token punctuation">.</span>bar<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
 
<span class="token comment"># Saving the figure.</span>
plt<span class="token punctuation">.</span>savefig<span class="token punctuation">(</span><span class="token string">&quot;figure-1.jpg&quot;</span><span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token string">&#39;png&#39;</span><span class="token punctuation">)</span>
 
<span class="token comment"># Saving figure by changing parameter values</span>
plt<span class="token punctuation">.</span>savefig<span class="token punctuation">(</span><span class="token string">&quot;figure-2&quot;</span><span class="token punctuation">,</span> facecolor<span class="token operator">=</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">,</span> bbox_inches<span class="token operator">=</span><span class="token string">&quot;tight&quot;</span><span class="token punctuation">,</span>
            pad_inches<span class="token operator">=</span><span class="token number">0.3</span><span class="token punctuation">,</span> transparent<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token builtin">format</span><span class="token operator">=</span><span class="token string">&#39;png&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","41_matplot.html.vue"]]);export{r as default};
