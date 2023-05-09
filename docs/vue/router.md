# Router

- **Single Page Aplication** 에서 라우팅 관련 기능을 제공
- 라우트(`routes`)에 컴포넌트와 URL을 등록
  - SPA에서 **URL 변경** 을 지원

## 설치

```bash
$ vue create vue-pjt

$ cd vue-pjt

$ vue add router
```



::: tip 설치 시 주의
- `Router` 를 추가하면 기존 `App.vue` 파일을 덮어쓰는 것에 주의
- `history mode` 선택
:::

## `<router-link>`
- `<a>` 태그와 유사하게 **URL** 로 이동
- `routes`에 등록된 컴포넌트와 매핑

```vue
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>
```


## `<router-view>`

- `<router-link>` 를 클릭하면 매핑된 컴포넌트가 렌더링 되는 곳


## `router/index.js`

- 라우터 관련된 정보 및 설정을 포함하는 파일
- **URL** 과 컴포넌트의 매핑 정보 설정
```js
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]
```

## `src/Views/`

- `<router-view>`에 렌더링되는 컴포넌트 파일들의 저정 위치
- `src/components`의 컴포넌트들과 기능적으로 차이점은 없음


## URL 주소 이동하기

### 선언적 방식 네비게이션
```html
  <router-link to="/">Home</router-link> |
  <router-link :to="{name: 'about'}">About</router-link>
```
### 프로그래밍 방식 네비게이션
```js
  this.$router.push({name: 'home'})
```
### params
```vue
// /profile/:username 
<template>
  ...
  <router-link :to="{name: 'profile', params: {usrname: 'jong'}}">About</router-link>
</template>

<script>
  this.$router.push({name: 'home', params: {username: 'jong'}})
</script>
```