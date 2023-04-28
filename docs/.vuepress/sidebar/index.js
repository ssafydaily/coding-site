
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
    title: 'Javascript',
    collapsable: true,
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
    title: 'Vue.js',
    collapsable: true,
    children: [
      '/vue/',
      '/vue/component.md',
    ]
  },
]