# 字符串的扩展

- 字符的 Unicode 表示法
- codePointAt()
- String.fromCodePoint()
- 字符串的遍历器接口
- at()
- normalize()
- includes(), startsWith(), endsWith()
- repeat()
- padStart()，padEnd()
- 模板字符串
- 实例：模板编译
- 标签模板
- String.raw()
- 模板字符串的限制

前三个是针对编码的操作的，部分内容暂时用不到。

模板字符串对于项目中的字符串拼接修改，很有用处。

```js
//字符串的遍历接口
for (let codePoint of 'foo') {
  console.log(codePoint);
}

// 字符遍历接口最大的优点是识别大于0xFFFF的码点，
// 传统的for循环不能识别
var text = String.fromCodePoint(0x20bb7);
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

for (let i of text) {
  console.log(i);
}
```

```js
'x'.repeat(3);
'hello'.repeat(0);
'1'.repeat(-1);

// 模板字符串
var count = 3;
var name1 = '大明';
$('body').append('有' + count + '个小孩，<strong>' + name1 + '</strong>，' + '玲玲，还有一个是谁？');

// es6写法
var count = 3;
var name1 = '大明';
$('body').append(`有${count}个小孩，<strong>${name1}</strong>，
玲玲，还有一个是谁？`);

$('body').append(`<ul>
                    <li>${name1}</li>
                    <li>${name1}</li>
                    <li>${name1}</li>
                    <li>${name1}</li>
                </ul>`);
```
