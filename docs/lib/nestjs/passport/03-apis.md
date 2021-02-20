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

[OAuth](http://oauth.net/)（[RFC 5849](http://tools.ietf.org/html/rfc5849) 正式定义）提供了一种方法 -- 用户授权第三方应用访问他们的数据，而不需要暴露他们的密码给这个应用。

这个协议极大的改善了 web 应用的安全性，尤其是 OAuth 吸引人们注意将密码暴露给外部服务的潜在危险非常重要。

OAuth 1.0 仍然被大范围使用，现在已经被 [OAuth 2.0](http://www.passportjs.org/guide/oauth2-api/)。建议将新的实施基于 OAuth 2.0。

当使用 OAuth 去保护 API 端点时，必须执行三个不同的步骤：

1. 应用向用户请求许可来访问被保护资源。
2. 如果用户授权许可，token 将发送给应用。
3. 应用使用 token 认证来访问被保护资源。

## 发送 Token

[OAuthorize](https://github.com/jaredhanson/oauthorize)，Passport 的一个同级项目，提供了一个实现 OAuth 提供者服务的工具包。

认证过程是一个复杂的队列，涉及同时认证请求应用和用户，还有提示用户许可，确保提供了足够的细节给用户做知情的决定。

除此之外，由实现者来决定可以在应用程序上对访问范围设置哪些限制，以及随后实施这些限制。

作为工具包，OAuthorize 没有视图实现这个决定。这个指南不包括这个问题，但是强烈建议部署 OAuth 服务需要全面了解涉及的安全注意事项。

## 认证 Token

一旦发送，OAuth token 能够使用 [passport-http-oauth](https://github.com/jaredhanson/passport-http-oauth) 模块认证。

```js
npm install passport-http-oauth
```

## 配置

```js
passport.use('token', new TokenStrategy(
    function (consumerKey, done) {
        Consumer.findOne({ key: consumerKey }, function (err, consumer) {
            if (err) {
                return done(err)
            }
            if (!consumer) {
                return done(null, false)
            }
            return done(null, consumer, consumer.secret)
        })
    },
    function (accessToken, done) {
        AccessToken.findOne({ token: accessToken }, function (err, token) {
            if (err) {
                return done(err)
            }
            if (!token) {
                return done(null, false)
            }
            Users.findById(token.userId, function (err, user) {
                if (err) {
                    return done(err)
                }
                if (!user) {
                    return done(null, false)
                }
                // 第四个参数是可选项 info。通常用来传入需要授权请求的详细信息
                // （例如：`scope`）
                return done(null, user, token.secret, { scope: token.scope })
            })
        })
    },
    function (timestamp, nonce, done) {
        // 如果需要可以验证时间戳和随机数
        done(null, true)
    }
))
```
和其他策略相比，OAuth 需要两个回调。在 OAuth 中，用于请求应用的标识和用户定义的 token 都会编码作为凭证。

第一个回调是“消费者”回调，用来找到发出请求的应用，包括分配给它的密钥。第二个回调是“token 回调”，用户标识用户和 token 对应的密钥。密钥有消费者提供，token 回调用来计算签名，如果和请求的签名不匹配那么认证失败。


最后一个“验证回调”是可选的，通过检查时间戳和请求使用的随机数来组织重播攻击。

## 保护端点

```js
app.get('/api/me', 
    passport.authenticate('token', { session: false }),
    function (req, res) {
        res.json(req.user)
    }
)
```

`token` 策略中定义 `passport.authenticate()` 来保护 API 端点。sessions 通常不被API 需要，所以能够禁止。

# OAuth 2.0

OAuth 2.0（[RFC 6749](http://tools.ietf.org/html/rfc6749) 正式定义）提供了授权框架，允许用户授予访问权限给第三方应用。当授权后，应用将发送一个 token 作为 认证凭证使用。这有两点主要的安全好处：

1. 应用不需要存储用户的用户名和密码。
2. token 能够有一个严格限制的授权范围（例如：只读权限）。

这些好处对于确保 web 应用的安全和使 OAuth 2.0 成为占主导地位的 API 认证标准尤其重要。

当使用 OAuth 2.0 保护 API 端点时，必须执行三个不同的步骤：

1. 应用向用户请求许可来访问被保护资源。
2. 如果用户授权许可，token 将发送给应用。
3. 应用使用 token 认证来访问被保护资源。

## 发送 token

[OAuth2orize](https://github.com/jaredhanson/oauth2orize)，Passport 的一个同级项目，提供了一个实现 OAuth 2.0 认证服务的工具包。

认证过程是一个复杂的队列，涉及同时认证请求应用和用户，还有提示用户许可，确保提供了足够的细节给用户做知情的决定。

除此之外，由实现者来决定可以在应用程序上对访问范围设置哪些限制，以及随后实施这些限制。

作为工具包，OAuth2orize 没有视图实现这个决定。这个指南不包括这个问题，但是强烈建议部署 OAuth 2.0 服务需要全面了解涉及的安全注意事项。

## 认证 token

OAuth 2.0 提供了一个框架，可以在其中发布可任意扩展的 token 集合。实际上，只有特定的 token 类型得到广泛使用。


## Bearer token （不记名 token）

Bearer token 是 OAuth 2.0 中最广泛发行的 token 类型。事实上，许多实现假定 bearer token 是唯一发行的 token 类型。

Bearer token 能够使用 [passport-http-bearer](https://github.com/jaredhanson/passport-http-bearer) 模块认证。

## 安装

```js
npm install passport-http-bearer
```

## 配置

```js
passport.use(new BearerStrategy(
    function (token, done) {
        User.findOne({ token: token }, function (err, user) {
            if (err) {
                return done(err)
            }
            if (!user) {
                return done(null, false)
            }
            return done(null, user, { scope: 'read' })
        })
    }
))  
``` 