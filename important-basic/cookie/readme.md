## cookie

cookie是浏览器提供的一种机制，它将document对象的cookie属性提供给JavaScript。可以由JavaScript对其进行控制，
而并不是JavaScript本身的性质。

cookie是存于用户硬盘的一个文件，这个文件通常对应一个域名，当浏览器再次访问这个域名时，便使这个cookie可用。
因此，cookie可以跨越一个域名下的多个网页，但是不能跨越多个域名使用。

1. 设置cookie

每个cookie都是一个名/值对，可以把下面这样一个字符串赋值给
```
document.cookie：document.cookie ="userId=828";

```

如果要一次存储多个名/值对，可以使用分号加空格隔开，例如
```
document.cookie = "userId=828; userName=hulk";
```

但是在cookie的名或值中不能使用分号、逗号、等号以及空格。在cookie的名中做到这点很容易，但是要保存的值是不确定的。
如何来存储这些值呢？方法是用escape()函数进行编码，它能将一些特殊符号使用十六进制表示，例如空格将会编码为“20%”，
从而可以存储于cookie值中，而且使用此种方案还可以避免中文乱码的出现。

例
```
document.cookie = "str="+escape("l love ajax");
// 相当于
document.cookie = "str=I%20love%20ajax";
```

2. 获取cookie的值

cookie的值可以由document.cookie直接获得:
```
var strCookie = document.cookie;
```

如果要获取指定的cookie值，须自己分析这个字符串：
```
// 设置两个cookie
    document.cookie = 'userId=828';
    document.cookie = 'userName=hulk';
    var strCookie = document.cookie;
    var arrCookie = strCookie.split(';');
    var userId;
    for(var i= 0,l=arrCookie.length;i<l;i++){
        var arr = arrCookie[i].split('=');
        if(arr[0]==='userId'){
            userId = arr[1];
            break;
        }
    }
    alert(userId);
```

设置过期时间
```
        var date = new Date();
//        var expiresDays = 2;
        var expiresMinutes = 10;

//        date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);// 单位：天
        date.setTime(date.getTime() + expiresMinutes * 1000);// 单位：秒，默认的时间是毫秒
        // toGMTString() 表示转为格林威治时间，和北京时间相差8小时，根据区来划分，北京是东八区。
        document.cookie = 'userId=727;userName=zhangsan;expires=' + date.toGMTString();
```

3. 删除cookie

删除的方式是通过设置过期时间为之前的某个时间，实际测试中，未起作用，待测试。

4. 指定可访问的cookie的路径

- 某人情况下，如果在某个页面创建了一个cookie，那么该页面所在目录中的其他页面也可以访问该cookie。如果这个目录下还有子目录，
则在子目录中也可以访问。例如在www.xxx.com/html/a.html中所创建的cookie，可以被www.xxx.com/html/b.html或
www.xxx.com/html/some/c.html所访问，但不能被www.xxx.com/d.html访问。
- 为了控制cookie可以访问的目录，需要使用path参数设置cookie

语法：document.cookie = 'name=value; path=cookieDir'; (cookieDir表示可访问的cookie的目录)
eg：document.cookie='userId=320; path=/shop'; 表示当前的cookie仅能在shop目录下使用。

- 如果要使cookie可以在整个网站下使用，可以将cookie_dir指定为根目录：

document.cookie = 'userId=320; path=/';

- 指定可以访问cookie的主机名和路径类似，主机名是指同一个域下的不同的主机，例如：www.google.com和gmail.goole.com
就是两个不同的主机名。默认情况下，一个主机中创建的cookie在另一个主机下是不能被访问的，但可以通过domain参数来实现对其的控制，
其语法格式为：document.cookie = 'name=value; domain=cookieDomain';
以Google为例，要实现跨主机访问，可以写为：document.cookie = 'name=value;domain=.google.com';
这样，所有Google.com下的主机都可以访问该cookie。

5. 构造通用的cookie处理函数

