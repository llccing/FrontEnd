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

// 3. 组合继承

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