# 概览

Passport 是 NodeJS 的认证中间件。他的唯一设计目的是：验证请求。书写模块化的、封装代码是一种美德，所以 Passport 将除了验证请求之外的功能都分发给应用程序来实现。关注点分离使代码能够更加整洁、可维护，同时也使 Passport 能够极易集成到应用中。

现在 Web 程序，认证有多种形式。传统的，用户通过用户名、密码登录。随着社交网络使用上升，使用 OAuth 的单点登录，例如 [Facebook](https://www.facebook.com/) 或者 [Twitter](https://twitter.com/) 已经成为了一种流行的认证方式。暴露一个 API 的服务通常需要基于 token 的证书来保护访问。

Passport 认识到每个应用有自己独特的认证需求。认证机制，也被成为策略，被打包成单独的模块。应用能够选择采用的策略，无需创建不需要的依赖。

不管认证的复杂性，代码能够不变的复杂。

```js
app.post('/login', passport.authentication('local', {successRedirect: '/', failureRedirect: '/login'}));
```

__install__

```js
npm install passport
```

## 认证

认证请求就像调用 `passport.authenticate()` 和指定采用哪种策略一样简单。`authenticate()` 的函数签名是标准的 [Connect](http://www.senchalabs.org/connect/) 中间件，所以能够方便的作为路由中间件在 [Express](http://expressjs.com/) 应用中使用。

```js
app.post('/login',
    passport.authenticate('local'),
    function(req, res) {
        // 如果这个函数被调用，说明认证成功。
        // `req.user` 包含认证的 user
        res.redirect('/user', + req.user.username);
    }
)
```

默认情况下，如果认证失败，Passport 将返回 `401 Unauthorized`，后续其他的路由处理器将不会执行。如果认证成功，下个处理器将调用，`req.user` 属性将设置为认证 user。

注意：在路由使用策略时，一定要预先配置。继续阅读详细[配置 todo ](http://www.passportjs.org/guide/configure/)章节。

## 重定向

重定向通常是在认证请求之后发出的。

```js
app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
    })
)
```

这种情况下，重定向选项将覆盖默认行为。若成功认证，用户将重定向到主页。若认证失败，用户将重定向返回到登录页去再次尝试。

## 即时消息（Flash Messages）

重定向通常和即时消息结合来展示用户的状态信息。

```js
app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    });
);
```

设置 `failureFlash` 选项为 true，指示 Passport 去发送 来自策略验证回调的 `error` 信息。这通常是最好的方法，因为验证回调能够最准确的判断为什么认证失败。

或者，即时消息能够自定义设置。

```js
passport.authenticate('local', {
    failureFlash: '无效用户名或者密码。'
})
```

`successFlash` 选项能够发送一个 `success` 的消息，在认证成功的时候。

```js
passport.authenticate('local', {
    successFlash: '欢迎！'
})
```

注意：使用即时消息需要 `req.flash()` 函数。Express 2.x 提供了这个功能，不过 Express 3.x 移除了。在使用 Express 3.x 时，建议使用 [connect-flash](https://github.com/jaredhanson/connect-flash) 中间件，它提供了这个功能。

## 禁止 Sessions

成功授权后，Passport 将建立一个持久的登录 session。对于用户通过浏览器访问 web 应用的场景这是有用的。然后，其他情况下，不需要 session 支持。例如，API 服务器通常需要每个请求携带凭证。这种情况下，session 支持能够通过设置 session 选项为 false 来安全的禁用。

```js
app.get('/api/users/me',
    passport.authenticate('basic', { session: false }),
    function(req, res) {
        res.json({id: req.user.id, username: req.user.username});
    }
)
```

## 自定义回调

如果内部选项不足够处理认证请求，自定义回调能够让应用处理成功和失败的情况。

```js
app.get('/login', function(req, res, next){
    passport.authenticate('local', function(err, user, info) {
        if(err) {
            return next(err);
        }
        if(!user) {
            return res.redirect('/login');
        }
        req.logIn(user, function(err) {
            if(err) {
                return next(err)
            }
            return res.redirect('/users' + user.username)
        })
    })(req, res, next);
})
```

这个例子中，注意 `authenticate()` 是在路由处理器中被调用，而不是作为路由中间件。这通过闭包给了 `req`和 `res` 对象回调权限。


## 参考

- [https://developer.mozilla.org/zh-CN/docs/Glossary/Signature/Function](https://developer.mozilla.org/zh-CN/docs/Glossary/Signature/Function) function signature
