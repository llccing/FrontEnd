// 用new建立一个简单的对象
/*
var t = new Object();
t.a = "test";
t.b = function (){
	alert(t.a);
}
t.b();

// 用new和this关键字改进
var t = new Object();
t.a = "test";
t.b = function(){
	alert(this.a);
}
t.b();


// 改进
function test(){
	this.a = "test";
	this.b = function(){
		alert(this.a);
	}
	return 1;
}
var t = test(); 
alert(a);
b();
alert(t);
alert(t.a);
t.b;
// 直接调用函数时，t只是函数的返回值，并不是需要的对象。
//   由于test是window对象调用的，this指代了window对象，把a和b赋给了window对象。



function test(){
	this.a = "tetst";
	this.b = function(){
		alert(this.a);
	}
	return 1;
}
var t = new test();
alert(t); 
alert(t.a);
t.b();
alert(a);
b();
// 用new运算符时，调用test函数的对象被赋给了t，
// this指代t对象，函数返回值被忽略。a和b()在window上未定义。



function test(){
	var t = new Object();
	t.a = "test";
	t.b = function(){
		alert(this.a);
	}
	return t;
}

var t1 = test();
alert(t1);
alert(t1.a);
t1.b();

var t2 = test();
t2.a = "test2";
t2.b;
alert(Object.a);
Object.b();

// 在函数内部new操作符新建了基本对象并返回，
// 两个test实例不互相影响，也不影响Object对象。



var test_b = function (){
	alert(this.a)
};
function test(){
	var t = new Object;
	t.a = "test";
	t.b = test_b;
	return t;
}

var t1 = test();
t1.b();
var t2 = test();
t2.a = "test2";
t2.b(); 

// 上面两个例子的弊端是，b方法其实是只是一个函数指针，
// 两个指针所指向的函数在调用构造函数时即时创建，并非
// 同一个程序实例，造成存储空间浪费。
// 本段代码为改进程序，这样两个实例的b属性为同一个test_b指针，都指向同一个函数。



function test(){
	this.a = "test";
}
test.prototype.b = function(){
	alert(this.a);
}
test.prototype.c = new Array();
test.prototype.d = 5;
var t1 = new test();
t1.b();
var t2 = new test();
t2.a = "test2";
t2.b();
///////
t1.c = [1,2];
alert(t1.c);
t2.c[1] = 4;
alert(t2.c);
alert(t1.c);
///////
t2.d =6;
alert(t2.d);
alert(t1.d);
// 当prototype的属性为对象的引用时，它为指向对象的指针，和普通变量一样被每个实例继承。
// 另外，prototype属性在对象被实例化前创建。也不可以放在函数内，因为那样每次实例化对象时，
// 都会为prototype的属性重新赋值，那样仍然没达到目的。



// 继承
function test(){
	this.a = "test";
	this.b = function(){
		alert(this.a);
	}
}

function subTest(){
	this.peraP = test;
	this.peraP();
	this.subName = "subTest";
}
var t1 = new test();
t1.b();
var t2 = new subTest();
t2.b();
alert(t2.subName);

// 在子类的构造函数内，用this调用父类构造函数，实现了继承。

*/

function test(){
	this.a = "test";
}
test.prototype.b = function(){
	alert(this.a);
}
function subTest(){
	this.subName = "subTest";
}
subTest.prototype = new test;
subTest.prototype.showName = function(){
	alert(this.subName);
}

var t1 = new test();
t1.b();
var t2 = new subTest();
t2.b();
t2.showName();

// 当父类的构造函数不需要传递参数时，可以用
// subClass.prototype = new ParentClass;的方式覆盖子类的prototype原型，
// 子类的新原型属性放在后面添加。

//-----------------
// prototype 属性
// 返回对象类型原型的引用
// objectName.prototype
// objectName 参数是对象的名称。

// 用prototype属性提供对象的类的一组基本功能。
// 对象的新实例“继承”赋予该对象原型的操作。
// 所有的js内部对象都有prototype属性。
