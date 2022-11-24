import { algoGroup } from "./algo"
const pythonBasic = {
  text: 'Basic',
  children: [ '/python/01_data_type.md', '/python/02_container.md', '/python/03_function.md',
              '/python/04_oop.md', '/python/05_error_handling.md',  '/python/06_module.md',
  ],
}
const pythonAdvance = {
  text: 'advanced',
  children: [ '/python/11_decorator.md', ],
}
const pythonGroup = {
  text: 'python',
  children: [ pythonBasic, pythonAdvance ],
}
const htmlGroup = {
  text: 'html',
  children: [ '/html/', ]
}
const cssGroup = {
  text: 'css',
  children: [ '/css/' ],
}
const webGroup = {
  text: 'web',
  children: [ htmlGroup, cssGroup ]
}

const djangoGroup = {

}

const jsGroup = {

}

const vueGroup = {

}

const pythonTest = {
  text: 'unittest & pytest',
  children: [ '/test/python/'],
}

const testGroup = {
  text: 'test',
  children: [ pythonTest, ]
}
export const navbar =  [      
  pythonGroup,
  algoGroup,
  webGroup,
  testGroup,
]