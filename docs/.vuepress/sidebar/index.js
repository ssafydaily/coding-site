
// export const sidebar = {
//   '/python/': [
//     {
//       text: 'Python',      
//       children: ['./algo/README.md', './algo/arraay/1d_array.md'],
//     },
//   ],
// }
export const sidebar = [
  {
    text: 'Javascript',
    collapsible: true,
    children: [
      '/js/',
      '/js/async_await.md',
      '/js/data_attribute.md',
      '/js/intersection_observer.md',
      '/js/module.md', 
      '/js/promise.md', 
      '/js/set_time_interval.md',
      '/js/sorting.md',
      '/js/this.md',
    ]
  },
  {
    text: 'Vue.js',
    collapsible: true,
    children: [
      '/vue/',
      '/vue/component.md',
    ]
  },
]