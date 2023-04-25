# Intersection Observer

## 생성

```js
const observer = new IntersectionObserver(callback, options)

function callback(entries, obserer) {
  console.log(entries)
}
```
- 관찰하려는 요소를 **Intersection Observer** 겍체의 `observer()` 메소드에 전달


## 예시
```js
let itemNo = 1
const getItemList = function(size){
  const lst = []
  for(let i = 0; i < size; i++){
    const div = document.createElement('div')
    div.classList.add('item')
    div.innerText = 'Item #' + itemNo++
  
    lst.push(div)
  }
  return lst
}
const sppiner = document.createElement('div')
const addItemList = function (){
  const itemContainer = document.querySelector('#container')
  const itemList = getItemList(15)
  itemList.forEach(item => {
    itemContainer.appendChild(item)
  })
  itemContainer.appendChild(sppiner)
}

// ----------------------------------------------------
const observer = new IntersectionObserver(callback)

function callback(entries, observer) {
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      addItemList()
    }

  })
}
addItemList()
observer.observe(sppiner)

```

```html
<h1>Intersection Observer</h1>
<hr>
<div id="container"></div>
<style>
  .item {
    height: 3rem;
    font-size: 1.5rem;
    border-radius: 10px;
    border: 2px solid skyblue;
    text-align: center;
    line-height: 3rem;
    background-color: beige;
    margin-top: 0.5rem;
  }
</style>
```