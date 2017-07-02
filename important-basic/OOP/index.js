function Fun() {
	// 基本属性
	var val = 1; 		// 私有基本属性
	var arr = [1];		// 私有引用属性
	function fun(){};	// 私有函数（引用属性）

	// 实例属性
	this.val = 2;				// 实例基本属性
	this.arr = [2];				// 实例引用属性
	this.fun = function(){};	// 实例函数（引用属性）
}

// 原型属性

Fun.prototype.val = 3;				// 原型基本属性
Fun.prototype.arr = [3];			// 原型引用属性
Fun.prototype.fun = function(){};	// 原型函数（引用属性）

// 6. 寄生式（是一种模式，并不只能用来实现继承）

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