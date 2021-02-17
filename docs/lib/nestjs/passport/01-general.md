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

如果认证失败，`user` 将被设置为 `false`。如果发生异常，`err` 将被设置。一个可选的 `info` 参数将传入，包括策略验证回调所提供的附加的详细信息。

这个回调能够使用提供的参数处理预期的认证结果。注意，当使用自定义回调时，需要应用来建立 session（通过调用 `req.login()`） 和发送响应。

## 配置

使用 Passport 来认证需要配置三个方面：

1、认证策略
2、应用中间件
3、Session（可选的）

### 策略

Passport 使用被称为策略的东西来认证请求。策略从验证用户名、密码，使用 [OAuth](http://oauth.net/) 委托认证或者使用 [OpenID](http://openid.net/) 联合认证。

在让 Passport 认证请求前，应用使用的某个策略（或者某些策略）必须要先配置。

策略和他们的配置通过 `use()` 函数提供。例如，下面的例子使用 `LocalStrategy` 来进行用户名、密码认证。

```js
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) {return done(err)}
            if (!user) {
                return done(null, false, { message: '用户名错误' })
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: '密码错误'})
            }
            return done(null, user)
        })
    }
))
```

### 验证回调

这个例子引入了一个重要的概念。策略需要一个称为回调的东西。验证回调的目的是找到拥有一套凭证的用户。

当 Passport 认证请求时，它解析请求中的凭证。然后将凭证作为调用回调函数的参数，这个例子中就是 `username` 和 `password`。如果凭证有效，回调函数将调用 `done` 将已认证的用户的信息传入 Passport。

```js
return done(null, user);
```

如果验证失败（本例中，比如密码错误），`done` 函数应该传入 `false` 而不是用户信息来表明认证失败。

```js
return done(null, false);
```

可以提供额外的消息来表明失败原因。这对于展示即时消息，来提示用户再次尝试很有用。

```js
return done(null, false, { message: '密码错误' });
```

最后，当验证凭证时发生异常（例如，数据库服务不可用），在常规的 Node 操作中 `done` 应该被调用来传入错误信息。

```js
return done(err);
```

注意，对于区分两种能够发生失败的情况是很重要的。后者是服务端异常，这种情况下 `err` 被设置为非 `null` 的值。在服务器正常运行时，认证失败也是很自然的情况。确认 `err` 包含 `null`，使用最后一个参数传递详细信息。

验证回调通过委派的方式使 Passport 可以无需数据库支持。应用可以自己决定如何存储用户信息，没有验证层强加的任何假设。

#### 中间件

在基于 [Connect](http://senchalabs.github.com/connect/) 或者 [Express](http://expressjs.com/) 的应用中，需要使用 `passport.initialize()` 中间件来初始化 Passport。如果你的应用使用了持久化登录 Session，`passport.session()` 中间件也需要使用。

```js
app.configure(function() {
    app.use(express.static('public'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
})
```

注意，开启 session 支持完全是可选的，尽管建议将其用于大多数应用中。如果开启，确认在 `passport.session()` 前使用 `session()`，从而确保登录 session 能够按正确的顺序存储。

在 Express 4.x 中，Connect 中间件不再包含于 Express 核心模块中，app.configure() 也被移除了。相同的中间件能够在 npm 模块找到。

```js
var session = require('express-session'),
    bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(session({ secret: 'cats' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
```

#### sessions 会话

在常规的 web 应用中，用于认证用户的凭证仅在登录请求时被发送。如果认证成功，一个session 将被建立和保持，通过设置在浏览器中的 cookie。

每个随后的请求将不再包含凭证，但是会有唯一的 cookie 来确认 session。为了支持登录 session，Passport 将序列化和反序列化 `user` 实例经由 session。

```js
passport.serializeUser(function(user, done) {
    done(null, user.id);
})

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    })
})

```

这个例子中，仅 user ID 被序列化到 session 中，从而保持存储在 session 中的数据量较小。当后续请求到达时，这个 ID 将用来找到存储在 `req.user` 中的 user。

序列化和反序列化逻辑由应用来提供，允许应用选择一个合适的数据库和（或者）对象mapper，无需认证层强加。

# 用户名 和 密码

最广泛使用的网站认证用户的方式是通过用户名和密码。对这种机制的支持是通过提供 [passport-local](https://github.com/jaredhanson/passport-local) 模块。

## install

```js
npm install passport-local
```

## 配置

```js
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if(err) {
                return done(err)
            }
            if(!user) {
                return done(null, false, { message: '用户名错误。' })
            }
            if(!user.validPassword(password)) {
                return done(null, false, { message: '密码错误。' })
            }
            return done(null, user);
        }) 
    }
))
```

这个本地认证的验证回调接受 `username` 和 `password` 参数，通过应用的登录表单提交上来的。

## 表单

Web 页面的一个表单，允许用户输入他们凭证然后登录。

```html
<form action="/login" method="post">
    <div>
        <label>Username:</label>
        <input type="text" name="username"/>
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password"/>
    </div>
    <div>
        <input type="submit" value="Log In"/>
    </div>
</form>
```

## 路由

登录表单通过 `POST` 方法提交到服务器。使用 `local` 策略的 `authenticate` 函数来处理登录请求。

```js
app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
)
```

设置 `failureFlash` 选项为 `true` 表明 Passport 使用验证回调提供的 `message` 选项来发送一个 `error` 消息。这对于提示用户再试一次很有用。

## 参数

默认的，`LocalStrategy` 预期在参数中找到命名为 `username` 和 `password` 的凭证。如果你的网站更喜欢用其他字段命名，有可用的选项支持修改默认值。

```js
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd',
},
function(username, password, done) {
    // ...
}
))
```

# OpenID

[OpenID](http://openid.net/) 是一个联合认证的开放标准。当访问网站时，用户使用 OpenID 登录。用户通过他们选择 OpenID 提供者（它发出一个断言来确认用户身份）来认证。网站验证这个断言来让用户登录。

OpenID 的支持通过 [passport-openid](https://github.com/jaredhanson/passport-openid) 模块提供。

## install

```js
npm install passport-openid
```

## 配置

当使用 OpenID 时，返回地址和领域必须设置。 `returnURL` 是用户在使用 OpenID 提供者认证后重定向的地址。`realm` 表明 URL空间中验证有效的部分。通常它会是网站的根 URL。

```js
var passport = require('passport'),
    OpenIDStrategy = require('passport-openid').Strategy;

passport.use(new OpenIDStrategy({
    returnURL: 'http://www.example.com/auth/openid/return',
    realm: 'http://www.example.com/'
},
function(identifier, done) {
    User.findOrCreate({openId: identifier}, function(err, user) {
        done(err, user);
    })
}
))
```

OpenID认证的验证回调接受一个 `identifier` 参数，包含用户的声明识别码。

## 表单

web 页面的表单，允许用户输入 OpenID 然后登录。

```html
<form action="/auth/openid" method="post">
    <div>
        <label>OpenID:</label>
        <input type="text" name="openid_identifier"/><br/>
    </div>
    <div>
        <input type="submit" value="Sign In"/>
    </div>
</form>
```

## 路由

OpenID 认证需要2个路由。第一个路由接受表单提交中包含的 OpenId 识别码。认证期间，用户将被重定向到 OpenID 提供者。第二个路由是用户在使用 OpenID 提供者认证后，将返回的 URL。

```js
// 接受 OpenID 识别码，将用户重定向到 OpenID 提供者处去认证。完成后，提供者将用户重定向到应用：
// /auth/openid/return
app.post('/auth/openid', passport.authenticate('openid'));

// OpenID 提供者已经将用户重定向到应用。
// 通过验证断言来完成认证过程。如果有效，用户将登录。
// 否则，认证失败。
app.get('/auth/openid/return', 
    passport.authenticate('openid', {
        successRedirect: '/',
        failureRedirect: '/login',
    })
)

```

## 个人资料交换

OpenID 能够可选择的设置为取回已认证用户的个人信息。个人资料交换通过设置 `profile` 选项为 `true` 开启。

```js
passport.use(new OpenIDStrategy({
    returnURL: 'http://www.example.com/auth/openid/return',
    realm: 'http://www.example.com/',
    profile: true
},
function(identifier, profile, done) {
    // ...
}
))
```

当个人资料交换开启后，验证回调函数签名接收额外的 `profile` 参数，包含 OpenID 提供者提供的用户个人信息；通过 [User Profile](http://www.passportjs.org/guide/profile/) 来了解更多信息。

# OAuth

[OAuth](http://oauth.net/) 是个标准协议，它允许用户授权 API 使用权给网站、桌面程序或者移动应用。一旦被授权，被授权的应用能够代表用户使用 API。OAuth 也已经成为流行的[委托授权](http://hueniverse.com/2009/04/introducing-sign-in-with-twitter-oauth-style-connect/)机制。

OAuth 有两种主要形式，两种都被广泛的部署。

OAuth 初始版本被一群组织松散的 Web 开发者开发作为开放标准。他们开发了 [OAuth 1.0](http://oauth.net/core/1.0/)，被 [OAuth 1.0a](http://oauth.net/core/1.0a/) 取代。这项工作现在被 [IEFT](http://www.ietf.org/) 作为 [RFC 5849](http://tools.ietf.org/html/rfc5849) 准备被标准化。

最近的工作 -- 专注定义 [OAuth 2.0](http://tools.ietf.org/html/rfc6749)，已经被 [web 授权协议工作组](http://tools.ietf.org/wg/oauth/) 承担。由于长期的标准化工作，提供者已经开始部署符合各种草案的实现，每种语义略有不同。

谢天谢地，Passport 隔离了应用处理 OAuth 变体的复杂性。许多情况下，特定策略的提供者能够被使用。而不是下面描述的通用策略。这减少了必须的配置，并且能容纳任何提供者的特定怪癖。查看 [Facebook](http://www.passportjs.org/docs#facebook), [Twitter](http://www.passportjs.org/docs#twitter) 或者列表中的[提供者](http://www.passportjs.org/docs/openid/)的首选用法。


OAuth 的支持通过 [passport-oauth](https://github.com/jaredhanson/passport-oauth) 模块实现

## install

```js
npm install passport-oauth
```

### OAuth 1.0

OAuth 1.0 是包含多个步骤的代理认证策略。首先，需要获得请求 token。然后，用户被重定向到服务提供者处授权。最后，授权后，用户被重定向回应用并且请求 token 能够用来交换访问 token。请求访问的应用程序（称为消费者）由消费者 key 和 消费者 secret 标识。

## 配置

当使用通用 OAuth 策略时，key, secret 和 endpoints 作为选项定义。

```js
var passport = require('passport'),
    OAuthStrategy = require('passport-oauth').OAuthStrategy;

passport.use('provider', new OAuthStrategy({
    requestTokenURL: 'https://www.provider.com/oauth/request_token',
    accessTokenURL: 'https://www.provider.com/oauth/access_token',
    userAuthorizationURL: 'https://www.provider.com/oauth/authorize',
    consumerKey: '123-456-789',
    consumerSecret: 'shhh-its-a-secret',
    callbackURL: 'https://www.example.com/auth/provider/callback'
},
function(token, tokenSecret, profile, done) {
    User.findOrCreate(..., function(err, user) {
        done(err, user);
    })
}
))
```
基于 OAuth 策略的验证回调接受 `token`，`tokenSecret` 和 `profile` 参数。`token` 是访问 token，`tokenSecret` 是它对应的秘钥。`profile` 包含服务提供者提供的用户个人信息。通过 [User Profile](http://www.passportjs.org/guide/profile/) 了解更多信息。

## 路由

OAuth 认证需要2个路由。第一个路由发起一个 OAuth 交换和重定向用户到服务提供者处。第二个路由是个URL，用户在提供者认证后重定向的 URL。

```js
// 重定向用户到用于认证的 OAuth 提供者处。当认证完成后，
// 提供者将重定向用户回到应用:
// /auth/provider/callback
app.get('/auth/provider', passport.authenticate('provider'));

// OAuth 提供者已经重定向用户回到应用。
// 通过获取访问 token 来结束认证过程。如果已经授权，用户将登录。
// 否则，认证失败。
app.get('/auth/provider/callback',
    passport.authenticate('provider', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
)
```

## 链接

在网页中可以放置一个链接或者按钮，它们在点击时将开始认证过程。

```html
<a href="/auth/provider">使用 OAuth 提供者登录</a>
```

### OAuth 2.0

OAuth 2.0 是 OAuth 1.0 的接班人，被设计来克服早期版本的已知缺陷。认证流程本质上是一样的。用户首先被重定向到服务提供者处授权，授权后，用户携带一个能够获取访问 token 的码被重定向回应用。请求访问的应用（作为客户端）由 ID 和 秘钥标识。

## 配置

使用通用 OAuth 2.0 策略时，client ID，client secret 和 endpoints 作为选项定义。

```js
var passport = require('passport'),
    OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

passport.use('provider', new OAuth2Strategy({
    authorizationURL: '',
    tokenURL: '',
    clientID: '',
    clientSecret: '',
    callbackURL: '',
},
function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
        done(err, user);
    })
}
))

```
基于 OAuth 2.0 策略的验证回调接受 `accessToken`，`refreshToken` 和 `profile` 参数。`refreshToken` 能够用来获取新的访问 token，也有可能是 `undefined` 如果提供者不发行刷新 token。`profile` 将包含服务提供者提供的用户个人信息。查看 [User Profile](http://www.passportjs.org/guide/profile/) 了解更多信息。

## 路由

OAuth 2.0 认证需要两个路由。第一个路由重定向用户到服务提供者。第二个路由是个 URL，用户在提供者处认证后重定向的URL。

```js
// 重定向用户到 OAuth 2.0 认证提供者。
// 认证完成后，提供者将重定向用户返回应用：
// /auth/provider/callback
app.get('/auth/provider', passport.authenticate('provider'));

// OAuth 2.0 提供者已经重定向用户到应用中。
// 通过尝试获取访问 token 来完成认证过程。
// 如果已授权，用户将登录。
// 否则，认证失败。
app.get('/auth/provider/callback', 
    passport.authenticate('provider', {
        successRedirect: '/',
        failureRedirect: '/login',
    })
)

```

## 作用域

当使用 OAuth 2.0 请求访问时，访问的作用域通过 scope 选项控制。

```js
app.get('/auth/provider',
    passport.authenticate('provider', { scope: 'email' })
)
```

能够使用数组定义多个作用域。

```js
app.get('/auth/provider',
    passport.authenticate('provider', { scope: ['email', 'sms'] })
)
```

`scope` 选项的值时提供者特定的。详情参考提供者文档，了解支持的作用域。

## 链接

Web 页面的链接或者按钮，当点击的时候能够开始认证过程。

```js
<a href="/auth/provider">使用 OAuth 2.0 提供者登录</a>
```

# 用户个人信息

当使用第三方服务，例如 Facebook 或者 Twitter 认证时，用户个人信息通常会可用。每个服务倾向于有个不同的方式编码这些信息。为了更易集成，Passport 尽可能规范化个人信息。

规范化个人信息符合 [Joseph Smarr][schema-author] 建立的[联系模式](https://tools.ietf.org/html/draft-smarr-vcarddav-portable-contacts-00)。下表概述了可用的公共字段。

`provider` {String}


## 参考

- [https://developer.mozilla.org/zh-CN/docs/Glossary/Signature/Function](https://developer.mozilla.org/zh-CN/docs/Glossary/Signature/Function) function signature
