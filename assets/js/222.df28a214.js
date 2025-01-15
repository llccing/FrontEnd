(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{461:function(t,s,a){"use strict";a.r(s);var r=a(14),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"oauth-2-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oauth-2-0"}},[t._v("#")]),t._v(" OAuth 2.0")]),t._v(" "),s("p",[t._v("OAuth 2.0 是一种授权机制，主要用来颁发令牌。")]),t._v(" "),s("h2",{attrs:{id:"快递员进入小区的例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快递员进入小区的例子"}},[t._v("#")]),t._v(" 快递员进入小区的例子")]),t._v(" "),s("p",[t._v("给快递员一个7天的授权码，这样不提供自己的密码即可让快递员进入小区，这样的授权机制是安全的，当时间到了之后如果仍然有需求可以二次授权，否则就自动过期")]),t._v(" "),s("p",[t._v("这里面有几种角色：居民小区是存储用户数据的网络服务、快递员是第三方应用、我们是终端用户，我们同意第三方应用通过授权码获取我们的数据。")]),t._v(" "),s("p",[t._v("OAuth 就是一种授权机制。数据的所有者告诉系统，同意授权第三方应用进入系统，获取这些数据。系统从而产生一个短期的进入令牌（token），用来代替密码，供第三方应用使用。")]),t._v(" "),s("h2",{attrs:{id:"密码和令牌的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#密码和令牌的区别"}},[t._v("#")]),t._v(" 密码和令牌的区别")]),t._v(" "),s("ul",[s("li",[t._v("令牌是短期的，到期失效。密码是长期的。")]),t._v(" "),s("li",[t._v("令牌可以被所有者撤销，会立即失效")]),t._v(" "),s("li",[t._v("令牌有权限范围，可以仅仅授权小区二号门。")])]),t._v(" "),s("h2",{attrs:{id:"_4-种授权类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-种授权类型"}},[t._v("#")]),t._v(" 4 种授权类型")]),t._v(" "),s("ul",[s("li",[t._v("授权码 (authorization-code)")]),t._v(" "),s("li",[t._v("隐藏式 (implicit)")]),t._v(" "),s("li",[t._v("密码式 (password)")]),t._v(" "),s("li",[t._v("客户端凭证 (client credentials)")])]),t._v(" "),s("p",[t._v("申请令牌前，需要导系统备案，说明自己身份，取得两个身份识别码：客户端id (client ID) 和客户端密钥 (client secret)。这是为了防止令牌被滥用")]),t._v(" "),s("h3",{attrs:{id:"_1-授权码-authorization-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-授权码-authorization-code"}},[t._v("#")]),t._v(" 1. 授权码 authorization code")]),t._v(" "),s("p",[t._v("最常用的流程，安全性最高，适用于有 web 后端的应用。")]),t._v(" "),s("p",[t._v("第一步，A网站是第三方应用，B是掌握用户信息网站，从 A 网站跳转 B网站进行授权，跳转链接类似下面这个：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("oauth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("authorize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  response_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  client_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLIENT_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  redirect_uri"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CALLBACK_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  scope"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("read\n")])])]),s("ul",[s("li",[t._v("response_type 表示需要返回授权码")]),t._v(" "),s("li",[t._v("client_id 表示让 B 知道是谁在请求")]),t._v(" "),s("li",[t._v("redirect_url 表示B接受或者拒绝请求后跳转网址")]),t._v(" "),s("li",[t._v("scope 表示要求的授权范围")])]),t._v(" "),s("p",[t._v("第二步，跳转之后，用户登录成功，且授权。B 会跳转会 redirect_uri，并且传回一个授权码，类似：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AUTHORIZATION_CODE")]),t._v("\n")])])]),s("p",[t._v("其中 "),s("code",[t._v("code")]),t._v(" 就是授权码。")]),t._v(" "),s("p",[t._v("第三步，A 拿到授权码后，可以在后端向 B 请求令牌。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("oauth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n client_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLIENT_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n client_secret"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLIENT_SECRET")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n grant_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("authorization_code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AUTHORIZATION_CODE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n redirect_uri"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CALLBACK_URL")]),t._v("\n")])])]),s("p",[t._v("client_id 和 client_secret 参数用来让 B 确认 A 的身份（client_secret 参数是保密的，所以只能在后端发送请求）， grant_type 参数值是 authorization_code，表示授权方式是授权码，code 参数是上一步拿到的授权码，redirect_uri 参数是令牌颁发后的回调地址。")]),t._v(" "),s("p",[t._v("第四步，B网站受到请求后，会颁发令牌。向 redirect_uri 指定的地址，发送一段 JSON 数据。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCESS_TOKEN"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2592000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REFRESH_TOKEN"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scope"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"read"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"uid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100101")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"info"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("其中 access_token 字段就是令牌，A 网站在后端拿到了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201904/bg2019040905.jpg",alt:"authorization_code"}})]),t._v(" "),s("h3",{attrs:{id:"_2-隐藏式-implicit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-隐藏式-implicit"}},[t._v("#")]),t._v(" 2. 隐藏式 implicit")]),t._v(" "),s("p",[t._v("有些 Web 应用是纯前端的应用，没有后端，令牌存储在前端。允许直接向前端颁发令牌，没有授权码的步骤。")]),t._v(" "),s("p",[t._v("第一步，A 网站提供一个连接，要求用户跳转 B 网站，授权用户数据给 A 使用。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("oauth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("authorize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  response_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  client_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLIENT_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  redirect_uri"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CALLBACK_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  scope"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("read\n")])])]),s("p",[t._v("注意，response_type 为 token，表示要求直接返回令牌。")]),t._v(" "),s("p",[t._v("第二步，用户在 B 网站登录后同意给 A 网站授权。B 就会跳转回 redirect_uri 指定的网址，并把令牌作为 URL 参数，传给 A 网站。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("callback#token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACCESS_TOKEN")]),t._v("\n")])])]),s("p",[t._v("注意，令牌是做为了 URL 锚点（fragment），而不是查询字符串，因为 OAuth 2.0 允许跳转网址是 HTTP 协议（不是HTTPS），所以存在 “中间人攻击风险”，而浏览器跳转时，锚点不会发送到服务器，就减少了令牌泄露的风险。")]),t._v(" "),s("p",[t._v("把令牌直接给前端是非常不安全的。所以，只能用在安全性不高的场景，并且令牌的有效期需要非常短，通常是会话期间有效。浏览器关掉，令牌就失效了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201904/bg2019040906.jpg",alt:"https://www.wangbase.com/blogimg/asset/201904/bg2019040906.jpg"}})]),t._v(" "),s("p",[t._v("一图胜千言。")]),t._v(" "),s("h3",{attrs:{id:"_3-密码式-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-密码式-password"}},[t._v("#")]),t._v(" 3. 密码式 password")]),t._v(" "),s("p",[t._v("用户需要提供给A网站用户名和密码，A 拿着用户名和密码自己到 B 申请令牌。")]),t._v(" "),s("p",[t._v("第一步，A 网站要求用户提供 B 网站的用户名和密码，拿到以后，A 就直接向 B 请求令牌。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("oauth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  grant_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USERNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  client_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLIENT_ID")]),t._v("\n")])])]),s("p",[t._v("grant_type 为授权方式。")]),t._v(" "),s("p",[t._v("第二步，B 网站验证身份通过后，直接给出令牌。注意，这时不需要跳转，而是把数据放到 JSON 中，作为 HTTP 回应，A 因此拿到令牌。")]),t._v(" "),s("p",[t._v("注意，这种方式需要给 用户名 和 密码，风险很大，只适用于其他授权方式都无法采用的情况，而且必须是用户高度信任的应用。")]),t._v(" "),s("h3",{attrs:{id:"_4-凭证式-client-credentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-凭证式-client-credentials"}},[t._v("#")]),t._v(" 4. 凭证式 client credentials")]),t._v(" "),s("p",[t._v("适用于没有前端的命令行应用，即在命令行下请求令牌。")]),t._v(" "),s("p",[t._v("第一步，A 应用在命令行向 B 发出请求：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("oauth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  grant_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("client_credentials"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  client_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLIENT_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  client_secret"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLIENT_SECRET")]),t._v("\n")])])]),s("p",[t._v("注意，"),s("code",[t._v("grant_type")]),t._v(" 为 "),s("code",[t._v("client_credentials")]),t._v(" 表示凭证式。")]),t._v(" "),s("p",[t._v("第二步，B 网站验证通过后，直接返回令牌。")]),t._v(" "),s("p",[t._v("这种方式给出的令牌是针对第三方应用的，不是针对用户，即有可能多个用户共享同一个令牌。")]),t._v(" "),s("h2",{attrs:{id:"令牌使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#令牌使用"}},[t._v("#")]),t._v(" 令牌使用")]),t._v(" "),s("p",[t._v("在请求头上增加 "),s("code",[t._v("Authorization")]),t._v(" 字段，令牌就放在这个字段里面。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("header")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Authorization")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Bearer ACCESS_TOKEN")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("前端请求时，需要提供这个header。")]),t._v(" "),s("h2",{attrs:{id:"更新令牌"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新令牌"}},[t._v("#")]),t._v(" 更新令牌")]),t._v(" "),s("p",[t._v("一次性颁发两个令牌，一个 "),s("code",[t._v("access_token")]),t._v("，一个 "),s("code",[t._v("refresh_token")]),t._v("，到期后通过 "),s("code",[t._v("refresh_token")]),t._v(" 发送一个请求来更新令牌。")]),t._v(" "),s("p",[t._v("示例请求如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("https")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("oauth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n  grant_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("refresh_token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  client_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLIENT_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  client_secret"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLIENT_SECRET")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n  refresh_token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REFRESH_TOKEN")]),t._v("\n")])])]),s("h2",{attrs:{id:"相关文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[t._v("#")]),t._v(" 相关文章")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/04/github-oauth.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2019/04/github-oauth.html"),s("OutboundLink")],1),t._v(" Github OAuth 第三方登录示例教程")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html"),s("OutboundLink")],1),t._v(" 授权的 4 种方式")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/04/oauth_design.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2019/04/oauth_design.html"),s("OutboundLink")],1),t._v(" 快递员进入小区的授权机制")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html"),s("OutboundLink")],1),t._v(" 理解 OAuth 2.0")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/gordon0918/p/5237717.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/gordon0918/p/5237717.html"),s("OutboundLink")],1),t._v(" http/https/ssl/中间人攻击/加密，简介")])])])}),[],!1,null,null,null);s.default=e.exports}}]);