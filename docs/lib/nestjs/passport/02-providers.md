# Facebook

Facebook 策略允许用户使用他们的 Facebook 账户登录一个 web 应用。在内部，Facebook 认证使用 OAuth 2.0 进行工作。

Facebook 支持通过 [passport-facebook](https://github.com/jaredhanson/passport-facebook) 模块实现。

## 安装 

```js
npm install passport-facebook
```

## 配置

使用 Facebook 认证前，你必须在 [Facebook 开发者平台](https://developers.facebook.com/) 创建一个应用。创建完成后，这个应用会有 App ID 和 App Secret。你的应用也必须实现一个重定向 URL，当用户批准了你的应用访问权限后，Facebook 会将用户重定向到该 URL。

```js
var passport = require('passport'),
    FaceBookStrategy = require('passport-facebook').Strategy;

passport.use(new FaceBookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: 'http://www.example.com/auth/facebook/callback'
},
function (accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
        if (err) {
            return done(err);
        }
        done(null, user);
    })
}

))
```

Facebook 认证的验证回调接受 `accessToken`，`refreshToken` 和 `profile` 参数。`profile` 参数将包含 Facebook 提供的用户个人信息。查看 [User Profile](http://www.passportjs.org/guide/profile/) 了解更多信息。

注意：为了安全，重定向 URL 必须和在 Facebook 注册的是相同主机名。（译者注：不包含协议和端口）

## 路由

Facebook 认证需要两个路由。第一个重定向用户到 Facebook。第二个是个URL，Facebook 将在用户登录后，将用户重定向到该 URL。

```js
// 重定向用户到 Facebook 认证。当认证完成后，
// Facebook 将重定向用户到应用：
// /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// 批准后，Facebook 将重定向用户到这个 URL。
// 通过尝试获取访问 token 来结束认证过程。
// 如果已授权，用户将登录。
// 否则，认证失败。
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login',
    })
)
```

注意，回调的 URL 需要匹配配置策略时指定的 `callbackURL` 选项。

## 权限

如果你的应用需要扩展权限，可以通过设置 `scope` 选项来请求该权限。

```js
app.get('/auth/facebook',
    passport.authenticate('facebook', { scope: 'read_stream' })
)
```

多个权限可以定义为数组。

```js
app.get('/auth/facebook', 
    passport.authenticate('facebook', { scope: ['read_stream', 'publish_actions'] })
)
```

## 链接

页面上的一个链接或者按钮，允许点击登录 Facebook。

```js
<a href="/auth/facebook" >登录 Facebook</a>
```

# Twitter

Twitter 策略允许用户使用他们的 Twitter 账户登录一个 web 网站。在内部，Twitter 认证使用 OAuth 1.0a 进行工作。

Twitter 支持通过 [passport-twitter](https://github.com/jaredhanson/passport-twitter) 模块实现。

## 安装

```js
npm install passport-twitter
```

## 配置

使用 Twitter 认证前，你首先需要在 [Twitter 开发者平台](https://dev.twitter.com/) 创建应用。创建完成后，应用会被授予一个 消费者 key 和 消费者 secret。你的应用必须实现一个回调 URL，当用户为你的应用授权后，Twitter 将重定向用户到该 URL。

```js
var passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: 'http://www.example.com/auth/twitter/callback'
},
function (token, toeknSecret, profile, done) {
    User.findOrCreate(..., function(err, user) {
        if (err) {
            return done(err);
        }
        done(null, user);
    })
}
))
```

Twitter 认证的验证回调接受 `token`，`tokenSecret` 和 `profile` 参数。`profile` 包含 Twitter 提供的用户个人信息。查看 [User Profile](http://www.passportjs.org/guide/profile/) 了解更多详细信息

## 路由

Twitter 认证需要两个路由。第一个是初始化一个 OAuth 交换和重定向用户到 Twitter。第二个用户登录成功后，Twitter 将重定向用户到该 URL。

```js
// 重定向用户到 Twitter 认证。认证完成后
// Twitter 将重定向用户到应用：
// /auth/twitter/callback
app.get('/auth/twitter', passport.authenticate('twitter'));


// 批准后，Twitter 将重定向用户到这个 URL。
// 通过尝试获取访问 token 来结束认证过程。
// 如果已授权，用户将登录。
// 否则，认证失败。
app.get('/auth/twitter/callback', 
    passport.authenticate('twitter', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
)

```

注意，回调的 URL 需要匹配配置策略时指定的 `callbackURL` 选项。

## 链接

页面上的一个链接或者按钮，允许点击登录 Twitter。

```js
<a href="/auth/facebook" >登录 Twitter</a>
```


# Google
















## 相关地址

- [https://www.yuque.com/yuque/developer/authorizing-oauth-apps](https://www.yuque.com/yuque/developer/authorizing-oauth-apps) 语雀 OAuth 授权

- [https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html](https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html) 微信 OAuth2.0 接入文档

- [https://wiki.open.qq.com/wiki/%E3%80%90QQ%E7%99%BB%E5%BD%95%E3%80%91OAuth2.0%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3](https://wiki.open.qq.com/wiki/%E3%80%90QQ%E7%99%BB%E5%BD%95%E3%80%91OAuth2.0%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3) QQ OAuth 2.0 接入文档
