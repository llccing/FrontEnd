# 表单验证

## Q: 个验证表单功能的任务，内容不多，仅需要验证用户名、邮箱、密码等。

[demo1](https://jsfiddle.net/t7pb27sk/1/)

缺点：

- 多人协作时，会覆盖。

- 创建了全局变量影响性能。

## 用对象收编变量[demo2](https://jsfiddle.net/t7pb27sk/2/)

## 对象的另一种形式[demo3](https://jsfiddle.net/t7pb27sk/3/)

优点：避免了全局变量，一旦出现覆盖现象，会全部覆盖。

问题：当别人想用你的方法时，不能复制一份，或者说别人不能通过new的方式继承这些方法。

## 使用返回对象的形式[demo4](https://jsfiddle.net/t7pb27sk/6/)

```
    var a = checkObject();
    a.checkPassword();
```

## 使用类的形式 [demo5](https://jsfiddle.net/t7pb27sk/5/)

```
    // 此处要通过new关键字来创建对象，因为使用的是类的形式。会改变this的指向到a
    var a = new checkObject();
    a.checkPassword();
```

> 写成类的形式之后，每个人在new之后都会有独有一套方法，但是这样做也会带来性能问题，需要改变一下。


## 将公共方法放在原型上 [demo6](https://jsfiddle.net/t7pb27sk/7/)

这样通过new关键字创建的对象所拥有的方法就是一个了,因为他们要依赖prototype原型依次寻找,而找到的方法都是同一个,都绑定在checkObject对象类的原型上。

## [demo7](https://jsfiddle.net/t7pb27sk/8/)

在写法上也可以采用这种将对象赋值到对象原型的方式，不过这种方法和上面的方法不能混用， 否则使用为对象的原型对象赋值新对象时，将会覆盖掉之前对prototype对象赋值的新方法。

## 链式调用[demo8](https://jsfiddle.net/t7pb27sk/9/)

## 函数的祖先 [demo9](https://jsfiddle.net/t7pb27sk/11/)

通过给Function对象的原型加入checkEmail方法，即可在所有函数中调用该方法，因为Function是所有函数的祖先。

但是这样添加会污染全局变量，会对其他人的开发造成影响，所以不推荐这种方式。

## [demo10](https://jsfiddle.net/t7pb27sk/12/)

这样做就不会污染全局变量。
## 改链式添加方法、链式调用[demo11](https://jsfiddle.net/t7pb27sk/13/)

## 使用类式调用（new）[demo12](https://jsfiddle.net/t7pb27sk/14/)

注意在调用时要通过new的方式，实例化对象