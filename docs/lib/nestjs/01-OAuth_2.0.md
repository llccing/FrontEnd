
# OAuth 2.0

OAuth 2.0 是一种授权机制，主要用来颁发令牌。

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

有些 Web 应用是纯前端的应用，没有后端，令牌存储在前端。允许直接向前端颁发令牌，没有授权码的步骤。

第一步，A 网站提供一个连接，要求用户跳转 B 网站，授权用户数据给 A 使用。

```js
https://b.com/oauth/authorize?
  response_type=token&
  client_id=CLIENT_ID&
  redirect_uri=CALLBACK_URL&
  scope=read
```

注意，response_type 为 token，表示要求直接返回令牌。

第二步，用户在 B 网站登录后同意给 A 网站授权。B 就会跳转回 redirect_uri 指定的网址，并把令牌作为 URL 参数，传给 A 网站。

```js
https://a.com/callback#token=ACCESS_TOKEN
```

注意，令牌是做为了 URL 锚点（fragment），而不是查询字符串，因为 OAuth 2.0 允许跳转网址是 HTTP 协议（不是HTTPS），所以存在 “中间人攻击风险”，而浏览器跳转时，锚点不会发送到服务器，就减少了令牌泄露的风险。

把令牌直接给前端是非常不安全的。所以，只能用在安全性不高的场景，并且令牌的有效期需要非常短，通常是会话期间有效。浏览器关掉，令牌就失效了。

![https://www.wangbase.com/blogimg/asset/201904/bg2019040906.jpg](https://www.wangbase.com/blogimg/asset/201904/bg2019040906.jpg)

一图胜千言。

### 3. 密码式 password

用户需要提供给A网站用户名和密码，A 拿着用户名和密码自己到 B 申请令牌。

第一步，A 网站要求用户提供 B 网站的用户名和密码，拿到以后，A 就直接向 B 请求令牌。

```js
https://oauth.b.com/token?
  grant_type=password&
  username=USERNAME&
  password=PASSWORD&
  client_id=CLIENT_ID
```
grant_type 为授权方式。

第二步，B 网站验证身份通过后，直接给出令牌。注意，这时不需要跳转，而是把数据放到 JSON 中，作为 HTTP 回应，A 因此拿到令牌。

注意，这种方式需要给 用户名 和 密码，风险很大，只适用于其他授权方式都无法采用的情况，而且必须是用户高度信任的应用。

### 4. 凭证式 client credentials

适用于没有前端的命令行应用，即在命令行下请求令牌。

第一步，A 应用在命令行向 B 发出请求：

```js
https://oauth.b.com/token?
  grant_type=client_credentials&
  client_id=CLIENT_ID&
  client_secret=CLIENT_SECRET
```

注意，`grant_type` 为 `client_credentials` 表示凭证式。

第二步，B 网站验证通过后，直接返回令牌。

这种方式给出的令牌是针对第三方应用的，不是针对用户，即有可能多个用户共享同一个令牌。


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
- [https://www.cnblogs.com/gordon0918/p/5237717.html](https://www.cnblogs.com/gordon0918/p/5237717.html) http/https/ssl/中间人攻击/加密，简介