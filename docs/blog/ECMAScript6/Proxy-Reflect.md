### Proxy

> Proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”，即对编程语言进行编程。

> Proxy可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问
进行过滤和改写。Proxy这个词的原意是代理，用在这里表示代理某些操作，可以译为“代理器”；

暂时没用。

### Reflect（中文意思，反应、体现、思考）

> Reflect和Proxy对象一样，也是ES6为了操作对象而提供的新API。Reflect对象的设计目的有一下几个。

- 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty）,放到Reflect对象上。
- 修改某些Object方法的返回结果，让其变得更合理。比如Object.defineProperty(obj, name, desc)...
- 让Object操作都变成函数行为。比如name in obj和delete obj[name]，而Reflect.has(obj, name)和
Reflect。deleteProperty(obj,name)让它们变成了函数行为。
- Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。
