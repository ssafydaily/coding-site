// const pythonBasic = {
//   text: 'Basic',
//   children: [ '/python/01_data_type.md', '/python/02_container.md', '/python/03_function.md',
//               '/python/04_oop.md', '/python/05_error_handling.md',  '/python/06_module.md',
//   ],
// }
const pythonBasic = {
  text: 'Basic',
  children: [ 
    '/python/01_data_type.md',
    '/python/02_container.md', 
  ],
}
const pythonAdvance = {
  text: 'Advanced',
  children: [ '/python/10_fileIO.md', '/python/11_decorator.md', ],
}
export const pythonGroup = {
  text: 'python',
  children: [ 
    pythonBasic, 
    // pythonAdvance 
  ],
}