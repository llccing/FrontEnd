const nav = { text: 'JS', link: '/js/' }

const sidebar = {
  '/js/': [
    '',
    {
      text: 'ES2015',
      collapsible: true,
      children: [
        '/js/ECMAScript6/',
        '/js/ECMAScript6/let-const.md',
        '/js/ECMAScript6/function-extension.md',
        '/js/ECMAScript6/Generator-async.md',
        '/js/ECMAScript6/Generator.md',
        '/js/ECMAScript6/Iterator-for...of.md',
        '/js/ECMAScript6/number-extension.md',
        '/js/ECMAScript6/object-extension.md',
        '/js/ECMAScript6/Promise.md',
        '/js/ECMAScript6/Proxy-Reflect.md',
        '/js/ECMAScript6/Set-Map.md',
        '/js/ECMAScript6/String-extension.md',
        '/js/ECMAScript6/Symbol.md',
        '/js/ECMAScript6/variable-destructor-assignment.md'
      ]
    },
    {
      text: 'basic',
      collapsible: true,
      children: [
        '/js/basic/apply-call.md',
        '/js/basic/ajax.md',
        '/js/basic/arguments.md',
        '/js/basic/calc-box-size.md'
      ]
    }
  ]
}

export default {
  nav,
  sidebar
}