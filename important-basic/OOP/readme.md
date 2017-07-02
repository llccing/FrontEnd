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

## 3. 组合继承（组合继承）
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

## 4. 寄生组合继承（最佳方式）

```
function beget(obj){
	var F = function(){};
	F.prototype = obj;
	return new F();
}

function Animal(name){
	this.name = name;
	this.skill = [1];
}

Animal.prototype.fun1 = function(){
	console.log(1);
};
Animal.prototype.fun2 = function(){};

function Cat(name,age){
	Animal.call(this,name); // 核心
	this.age = age;
}

var proto = beget(Animal.prototype); 	// 核心
proto.constructor = Cat; 			 	// 核心	
Cat.prototype = proto;					// 核心

var cat1 = new Cat();
console.dir(Cat);
console.dir(cat1);
cat1.fun1();

// 核心

// beget(Animal.prototype)。去掉了原型对象上多余的父类实例属性。

// 优点：包括上述3中方式的优点。

// 缺点：（据说组合继承是比较常用的。）
```

## 5. 原型式继承

```
function beget(obj){
	var F = function(){};
	F.prototype = obj;
	return new F();
}

function Animal(name){
	this.name = name;
	this.skill = [1];
}

Animal.prototype.fun1 = function(){};

var animal = new Animal('animal xxx');

var cat = beget(animal);

cat.age = 123;

console.dir(cat);
console.log(cat.age);

// 核心

// 使用beget函数得到一个新对象（无实例属性）,再逐步增强（填充实例属性）。
// ES5提供了Object.create()函数，内部就是原型式继承。IE9+支持。

// 优点：

// 从已有对象衍生新的对象，不需要创建自定义类型。

// 缺点：

// 1. 原型继承引用属性会被所有实例共享，因为用整个父类对象来充当子类原型对象，所以会有这个缺陷。
// 2. 无法实现函数复用。（属性现添的）
```

## 5. 寄生式（是一种模式，并不只能用来实现继承）

```
function beget(obj){
	var F = function(){};
	F.prototype = obj;
	return new F();
}

function Animal(name){
	this.name = name;
	this.skill = [1];
}

Animal.prototype.fun1 = function(){};

function getSubObject(obj){
	// 创建新对象
	var clone = beget(obj); // 核心
	// 增强
	clone.age = 1;

	return clone;
}

var sub = getSubObject(new Animal('zfd'));

console.dir(sub);
console.log(sub.name);
console.log(sub.age);



// 核心

// 给原型式继承穿个马甲。（上面的原型继承更像是对象复制，等下写写对象复制。）
// beget()函数不是必须的，创建新对象->增强->返回该对象，这样的过程叫 寄生式继承，
// 新对象如何创建的并不重要（beget生的，new出来的，字面量都可以）。

// 优点：

// 不要创建自定义类型（不用写子类构造函数吗）

// 缺点：

// 无法实现函数复用（没有用到原型，所以不行）

// ------寄生式继承+组合继承 = 寄生组合式继承。
```

## 6种继承方式的联系

![理解图](http://ayqy.net/cms/wordpress/wp-content/uploads/2015/05/%E7%BB%A7%E6%89%BF.jpg)


P.S.虚线表示辅助作用，实线表示决定性作用


## 阅读文章

1. [重新理解js的6种继承方式](http://www.ayqy.net/blog/重新理解js的6种继承方式/)

2. [JS中new到底发生了什么/](http://warjiang.github.io/devcat/2016/05/12/JS中new到底发生了什么/)