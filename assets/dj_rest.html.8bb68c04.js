import{_ as n,o as s,c as a,e}from"./app.2a81dd92.js";const t={},i=e(`<h1 id="dj-rest-auth" tabindex="-1"><a class="header-anchor" href="#dj-rest-auth" aria-hidden="true">#</a> dj-rest-auth</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li><code>auth.User</code> 를 사용자 정의 모델인 <code>accounts.User</code>로 변경</li><li><code>migrate</code> 하기</li></ul></div><h2 id="설치" tabindex="-1"><a class="header-anchor" href="#설치" aria-hidden="true">#</a> 설치</h2><ul><li>패키지 설치</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pip <span class="token function">install</span> dj-rest-auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>settings.py</code> 의 <code>INSTALLED_APP</code> 에 등록</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># settings.py</span>
INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment"># ...,</span>
    <span class="token string">&#39;rest_framework&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;rest_framework.authtoken&#39;</span><span class="token punctuation">,</span>
    
    <span class="token comment"># ...,</span>

    <span class="token string">&#39;dj_rest_auth&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>url</strong> 등록</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment"># ...</span>
  path<span class="token punctuation">(</span><span class="token string">&#39;accounts/&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span><span class="token string">&#39;dj_rest_auth.urls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment"># path(&#39;accounts/signup/&#39;, include(&#39;dj_rest_auth.registration.urls&#39;))</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="regstration" tabindex="-1"><a class="header-anchor" href="#regstration" aria-hidden="true">#</a> Regstration</h2><ul><li>회원 가입(registration) 기능을 사용하려면 추가로 <code>django-allauth</code> 가 필요함</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ pip <span class="token function">install</span> <span class="token string">&#39;dj-rest-auth[with_social]&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>App</strong> 등록 및 <strong>SITE_ID</strong> 설정</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment"># registration</span>
    <span class="token string">&#39;django.contrib.sites&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;allauth&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;allauth.account&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;allauth.socialaccount&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;dj_rest_auth.registration&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

SITE_ID <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment"># 회원 가입식 토큰 반환 하도록 다음 설정 추가</span>
REST_AUTH <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;SESSION_LOGIN&#39;</span><span class="token punctuation">:</span> <span class="token boolean">False</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>인증 방법 설정</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment"># Authentication</span>
    <span class="token string">&#39;DEFAULT_AUTHENTICATION_CLASSES&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;rest_framework.authentication.TokenAuthentication&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="권한-설정" tabindex="-1"><a class="header-anchor" href="#권한-설정" aria-hidden="true">#</a> 권한 설정</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment"># permission</span>
    <span class="token string">&#39;DEFAULT_PERMISSION_CLASSES&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token comment"># &#39;rest_framework.permissions.IsAuthenticated&#39;,</span>
        <span class="token string">&#39;rest_framework.permissions.AllowAny&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>decorator</code></li></ul>`,19),l=[i];function c(o,p){return s(),a("div",null,l)}const u=n(t,[["render",c],["__file","dj_rest.html.vue"]]);export{u as default};
