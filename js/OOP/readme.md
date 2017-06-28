## JavaScript的几种继承方式

## 1. 简单原型链继承

```
function Animal(){
	this.name = '动物';
	this.skill = [1];
}

function Cat(){
	this.age = '13';
}

Cat.prototype = new Animal(); // 核心（拿父类实例充当子类的原型对象）

var amyCat = new Cat();
var tomCat = new Cat();

amyCat.skill.push(2);

console.dir(Animal);
console.dir(Cat);
console.log(amyCat.name);
console.log(tomCat.skill);
console.log(amyCat.skill);

// 优点

// 简单易于实现。

// 存在问题

// 1.原型对象的引用属性是所有实例共享的。
// 2.创建子类实例时，无法向父类构造函数传参。

```

## 2. 借用构造函数

```
function Animal(name){
	this.name = name;
	this.skill = [1];

	this.fun = function(){};
}

function Cat(name,age){
	// Animal.call(this,name); // 核心
	Animal.apply(this,[name]); // 此处区分了call和apply的区别，apply用的是数组参数。
	this.age = age;
}

var smallCat = new Cat('small Cat',12);

var bigCat = new Cat('Big Cat', 15);

smallCat.skill.push(2);

console.dir(smallCat);
console.dir(bigCat);
console.log(smallCat.name);
console.log(bigCat.name);
console.log(bigCat.skill);

// 核心

// 借用父类构造函数来增强子类的实例，等于将父类的实例属性复制一份到子类实例中，没有用到原型。

// 优点

// 1. 解决了子类实例共享父类引用属性的问题。
// 2. 创建子类实例时，可以向父类构造函数传参。

// 缺点

// 1. 无法实现函数复用，每个子类实例都持有一个新的fun函数，太多会影响性能。
```

## 3. 组合继承
```
function Animal(name){
	this.name = name;
	this.skill = [1];

	// this.fun = function(){};
}

Animal.prototype.fun = function(){
	console.log(this.name);
};

function Cat(name,age){
	Animal.call(this, name); // 核心
	this.age = age;
}

Cat.prototype = new Animal(); // 核心

var cat1 = new Cat('asdf', 10);

var cat2 = new Cat('xxx', 23);

console.dir(cat1);

console.dir(cat2);

cat1.fun();
cat2.fun();

// 核心

// 将实例函数放在原型对象上，来实现函数复用。同时保留借用构造函数方式的优点。
// Animal.call(this, name); 继承父类的基本属性，并且向父类构造函数传参。
// Cat.prototype = new Animal(); 继承父类函数，实现函数复用。

// 优点

// 1.不存在引用属性（函数等）共享的问题。
// 2.可传参。
// 3.函数可复用。

// 缺点

// 1.子类原型上有一份多余的父类实例属性，因为父类构造函数被调用了两次，
// 子类实例上的属性屏蔽了子类原型上的属性，造成内存浪费。
```




























## 阅读文章

1. [重新理解js的6种继承方式](http://www.ayqy.net/blog/重新理解js的6种继承方式/)

2. [JS中new到底发生了什么/](http://warjiang.github.io/devcat/2016/05/12/JS中new到底发生了什么/)