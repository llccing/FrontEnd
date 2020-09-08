# passport 相关

## passport | passport-jwt | passport-local | bcrypt

## @nestjs/passport | @nestjs/jwt

## @types/passport-local | @types/bcrypt

## OAuth 2.0

### 快递员进入小区的例子

给快递员一个7天的授权码，这样不提供自己的密码即可让快递员进入小区，这样的授权机制是安全的，当时间到了之后如果仍然有需求可以二次授权，否则就自动过期

这里面有几种角色：居民小区是存储用户数据的网络服务、快递员是第三方应用、我们是终端用户，我们同意第三方应用通过授权码获取我们的数据。

OAuth 就是一种授权机制。数据的所有者告诉系统，同意授权第三方应用进入系统，获取这些数据。系统从而产生一个短期的进入令牌（token），用来代替密码，供第三方应用使用。

### 密码和令牌的区别

- 令牌是短期的，到期失效。密码是长期的。
- 令牌可以被所有者撤销，会立即失效
- 令牌有权限范围，可以仅仅授权小区二号门。

### 相关文章

- [http://www.ruanyifeng.com/blog/2019/04/oauth_design.html](http://www.ruanyifeng.com/blog/2019/04/oauth_design.html) 快递员进入小区的授权机制
- [https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html](https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html) 理解 OAuth 2.0