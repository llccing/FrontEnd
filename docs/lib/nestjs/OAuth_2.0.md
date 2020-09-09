
# OAuth 2.0

## 快递员进入小区的例子

给快递员一个7天的授权码，这样不提供自己的密码即可让快递员进入小区，这样的授权机制是安全的，当时间到了之后如果仍然有需求可以二次授权，否则就自动过期

这里面有几种角色：居民小区是存储用户数据的网络服务、快递员是第三方应用、我们是终端用户，我们同意第三方应用通过授权码获取我们的数据。

OAuth 就是一种授权机制。数据的所有者告诉系统，同意授权第三方应用进入系统，获取这些数据。系统从而产生一个短期的进入令牌（token），用来代替密码，供第三方应用使用。

## 密码和令牌的区别

- 令牌是短期的，到期失效。密码是长期的。
- 令牌可以被所有者撤销，会立即失效
- 令牌有权限范围，可以仅仅授权小区二号门。

## 4 种授权类型

- 授权码 (authorization-code)
- 隐藏式 (implicit)
- 密码式 (password)
- 客户端凭证 (client credentials)

申请令牌前，需要导系统备案，说明自己身份，取得两个身份识别码：客户端id (client ID) 和客户端密钥 (client secret)。这是为了防止令牌被滥用


### 1. 授权码 authorization code

最常用的流程，安全性最高，适用于有 web 后端的应用。

第一步，A网站是第三方应用，B是掌握用户信息网站，从 A 网站跳转 B网站进行授权，跳转链接类似下面这个：

```js
https://b.com/oauth/authorize?
  response_type=code&
  client_id=CLIENT_ID&
  redirect_uri=CALLBACK_URL&
  scope=read
```

- response_type 表示需要返回授权码
- client_id 表示让 B 知道是谁在请求
- redirect_url 表示B接受或者拒绝请求后跳转网址
- scope 表示要求的授权范围

第二步，跳转之后，用户登录成功，且授权。B 会跳转会 redirect_uri，并且传回一个授权码，类似：

```js
https://a.com/callback?code=AUTHORIZATION_CODE
```

其中 `code` 就是授权码。

第三步，A 拿到授权码后，可以在后端向 B 请求令牌。

```js
https://b.com/oauth/token?
 client_id=CLIENT_ID&
 client_secret=CLIENT_SECRET&
 grant_type=authorization_code&
 code=AUTHORIZATION_CODE&
 redirect_uri=CALLBACK_URL
```

client_id 和 client_secret 参数用来让 B 确认 A 的身份（client_secret 参数是保密的，所以只能在后端发送请求）， grant_type 参数值是 authorization_code，表示授权方式是授权码，code 参数是上一步拿到的授权码，redirect_uri 参数是令牌颁发后的回调地址。

第四步，B网站受到请求后，会颁发令牌。向 redirect_uri 指定的地址，发送一段 JSON 数据。

```js
{    
  "access_token":"ACCESS_TOKEN",
  "token_type":"bearer",
  "expires_in":2592000,
  "refresh_token":"REFRESH_TOKEN",
  "scope":"read",
  "uid":100101,
  "info":{...}
}
```

其中 access_token 字段就是令牌，A 网站在后端拿到了。

![authorization_code](https://www.wangbase.com/blogimg/asset/201904/bg2019040905.jpg)


### 2. 隐藏式 implicit

允许直接向前端颁发令牌，没有授权码的步骤。

### 3. 密码式 password

用户需要提供给A网站用户名和密码，A 拿着用户名和密码自己到 B 申请令牌。

### 4. 凭证式 client credentials

适用于没有前端的命令行应用。

## 令牌使用

在请求头上增加 `Authorization` 字段，令牌就放在这个字段里面。

```js
{
  header: {
    Authorization: `Bearer ACCESS_TOKEN`
  }
}
```
前端请求时，需要提供这个header。

## 更新令牌

一次性颁发两个令牌，一个 `access_token`，一个 `refresh_token`，到期后通过 `refresh_token` 发送一个请求来更新令牌。

示例请求如下：
```js
https://b.com/oauth/token?
  grant_type=refresh_token&
  client_id=CLIENT_ID&
  client_secret=CLIENT_SECRET&
  refresh_token=REFRESH_TOKEN
```

## 相关文章

- [http://www.ruanyifeng.com/blog/2019/04/github-oauth.html](http://www.ruanyifeng.com/blog/2019/04/github-oauth.html) Github OAuth 第三方登录示例教程
- [http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html](http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html) 授权的 4 种方式
- [http://www.ruanyifeng.com/blog/2019/04/oauth_design.html](http://www.ruanyifeng.com/blog/2019/04/oauth_design.html) 快递员进入小区的授权机制
- [https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html](https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html) 理解 OAuth 2.0