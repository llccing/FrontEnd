# 登录

Passport 暴露一个 `login()` 函数在 `req`（也有 `logIn()` 这个别名）上，它能够在建立登录 session 时使用。

```js
req.login(user, function(err) {
  if (err) {
    return next(err)
  }
  return res.redirect('/users/' + req.user.username);
})
```
当登录操作完成时，`user` 将被设置到 `req.user` 上。

注意：`passport.authenticate()` 中间件会自动调用 `req.login()` 方法。这个函数主要是用户注册时使用，在此期间可以调用 `req.login()` 来自动登录新注册的用户。

# 登出

Passport 暴露一个 `logout()` 函数在 `req`（也有 `logOut()` 这个别名）上，它能够被任何需要结束登录 session  的路由处理器调用。调用 `logout()` 方法将会移除 `req.user` 属性同时清理登录 session （如果存在）。

```js
app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
})
```

# 授权

一个应用可能需要包含来自多个第三方平台的信息。这种情况下，应用需要请求用户去“链接”，例如，同时链接 Facebook 和 Twitter 账户。

当发生这种情况时，用户已经被应用认证了，随后的第三方应用仅需要被授权并与用户关联。因为认证和授权的情况下相似，Passport 提供了一种方式来同时容纳他们。

授权通过调用 `passport.authorize()` 方法执行。如果已授权，策略验证回调提供的结果将会设置到 `req.account` 属性上。已经存在的登录 session 和 `req.user` 不受影响。

```js
app.get('/connect/twitter',
  // 注意，这里是授权，不是认证
  passport.authorize('twitter-authz', { failureRedirect: '/account' })
)

app.get('/connect/twitter/callback', 
  passport.authorize('twitter-authz', { failureRedirect: '/account' }),
  function (req, res) {
    var user = req.user;
    var account = req.account;

    // 将登录账户与 Twitter 账户相关联
    account.userId = user.id;
    account.save(function(err) {
      if (err) {
        return self.error(err)
      }
      self.redirect('/')
    })
  }
)
```

在回调路由中，你可以同时看见 `req.user` 和 `req.account`。新链接的账户已经和登录用户相关联并且被存储到数据库中。

## 配置

认证使用的策略和授权使用的策略是一样的。然而，应用可能需要同时提供认证和授权第三方服务。这种情况，可以使用命名策略，通过覆盖在调用 `use()` 方法时使用的默认策略名字。

```js
passport.use('twitter-authz', new TwitterStrategy({
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: 'http://www.example.com/connect/twitter/callback'
},
function (token, tokenSecret, profile, done) {}
  Account.findOne({ domain: 'twitter.com', uid: profile.id }, function(err, account) {
    if (err) {
      return done(err)
    }
    if(account) {
      return done(null, account)
    }

    var account = new Account();
    account.domain = 'twitter.com';
    account.uid = profile.id;
    var t = {
      kind: 'oauth',
      token: token,
      attributes: { tokenSecret: tokenSecret }
    };
    account.tokens.push(t);
    return done(null, account);
  })
))
```

上面这个例子，你可以看见 `twitter-authz` 策略找到或者创建一个 `Account` 实例来存储 Twitter 账号信息。结果将设置到 `req.account` 属性，允许路由处理器将账户与经过认证的用户关联。

### 验证回调中的关联

上述描述的缺点是，它需要相同策略和支持路由的两个实例。

为了避免这个，设置策略的 `passReqToCallback` 选项为 `true`。开启这个选项，`req` 将作为验证回调的第一个参数传入。

```js
passport.use(new TwitterStrategy({
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: 'http://www.example.com/auth/twitter/callback',
  passReqToCallback: true,
},
function (req, token, tokenSecret, profile, done) {
  if (!req.user) {
    // 不需要登录，通过 Twitter 账户认证。
  } else {
    // 登录。将用户和 Twitter 账户关联。
    // 关联后，通过提供已存在的 user 来保留登录状态。
    // return done(null, req.user)
  }
}
))
```

将 `req` 作为参数传入，验证回调能够使用请求状态来定制认证过程，使用一个单独的策略实例和路由集合来处理认证和授权。例如，如果用户已经登录，一个新的“链接”账户能够被关联。任何添加的设置到 `req` 上的特定应用的属性，包括 `req.session`，也能够被使用。
