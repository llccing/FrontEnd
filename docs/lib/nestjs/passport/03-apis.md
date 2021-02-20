# 基本 & 摘要

连同定义 HTTP 的身份验证框架，[RFC 2617](http://tools.ietf.org/html/rfc2617) 也定义了基本和摘要认证方案。这两种方案都使用用户名和密码作为凭证来认证用户，并且通常用于保护 API 端点。

有一点需要注意，依赖用户名和密码的凭证也能有不利的安全影响，尤其在这样的情景下，服务器和客户端之间没有高度互信的情景。这种情况下，建议使用认证框架比如 [OAuth 2.0](http://www.passportjs.org/guide/oauth2-api/)。

通过提供 [passport-http](https://github.com/jaredhanson/passport-http) 模块来支持基本和摘要方案

## 安装

```js
npm install passport-http
```

### 基本

基本方案使用用户名和密码来认证用户。这凭证将以明文方式传输，所以建议使用 HTTPS 来实施该方案。

## 配置

```js
passport.use(new BasicStrategy(
    function(username, password, done) {
        User.findOne({username: username}, function(err, user) {
            if(err) {
                return done(err)
            }
            if(!user) {
                return done(null, false)
            }
            if(!user.validPassword(password)) {
                return done(null, false);
            }
            return done(null, user);
        })
    }
))
```
基本认证的验证回调接收 `username` 和 `password` 参数。

## 保护端点

```js
app.get('/api/me', 
    passport.authenticate('basic', { session: false }),
    function (req, res) {
        res.json(req.user)
    }
)
```

`基本` 策略中定义 `passport.authenticate()` 来保护 API 端点。sessions 通常不被API 需要，所以能够禁止。

### 摘要

摘要策略使用用户名和密码来认证用户。与基本策略相比，它的主要优势是使用挑战响应式（challenge-response ）范例来避免明文发送密码。

## 配置

```js
passport.use(new DigestStrategy(
    { qop: 'auth' },
    function (username, done) {
        User.findOne({ username: username }, function (err, user) {
            if(err) {
                return done(err);
            }
            if(!user) {
                return done(null, false)
            }
            return done(null, user, user.password)
        })
    },
    function (params, done) {
        // 根据需要验证随机数
        done(null, true);
    }
))
```

摘要策略利用了两个回调，第二个是可选的。

第一个回调，称为“密钥回调”，接受用户名然后调用 `done` 函数，来提供用户信息和对应的密码。密码用来计算哈希，如果和请求中携带的不符将认证失败。

第二个“验证回调”接受与随机数相关的参数，能够用来校验从而避免重播攻击。

## 保护端点

```js
app.get('/api/me',
    passport.authenticate('digest', { session: false }),
    function (req, res) {
        res.json(req.user)
    }
)
```


`摘要` 策略中定义 `passport.authenticate()` 来保护 API 端点。sessions 通常不被API 需要，所以能够禁止。

# OAuth

