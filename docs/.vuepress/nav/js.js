const nav = { text: 'JS', link: '/js/' }

const sidebar = {
  '/js/': [
    '',
    {
      title: 'ES2015',
      collapsable: false,
      children: [
        '',
        // 'Async',
        'let-const',
        'function-extension',
        'Generator-async',
        'Generator',
        'Iterator-for...of',
        'number-extension',
        'object-extension',
        'Promise',
        'Proxy-Reflect',
        'Set-Map',
        'String-extension',
        'Symbol',
        'variable-destructor-assignment'
      ].map(item => `./ECMAScript6/${item}`)
    },
    {
      title: 'basic',
      collapsable: false,
      children: ['apply-call', 'ajax', 'arguments', 'calc-box-size'].map(
        item => `./basic/${item}`
      )
    }
  ]
}

export default {
  nav,
  sidebar
}