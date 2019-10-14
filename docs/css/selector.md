# CSS 选择器

## 标签选择器

```css
body {
  color: blue;
}
```

## 类选择器

```css
.btn {
  font-size: 14px;
}
```

## 后代选择器

```css
.dialog .title {
  line-height: 1.5;
}
```

## id 选择器

```css
#myStyle {
  border: 1px solid #ddd;
}
```

## 兄弟选择器

选择紧接在一个元素后的元素，且二者有相同的父元素。
```css
p + p {
  margin-left: 5px;
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="css selector" src="https://codepen.io/llccing/embed/WNNQLgY?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/WNNQLgY'>css selector</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 注意事项
```css
.foo.bar
```

<iframe height="265" style="width: 100%;" scrolling="no" title="css-selector-double-class" src="https://codepen.io/llccing/embed/Yzzqqmj?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/Yzzqqmj'>css-selector-double-class</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>