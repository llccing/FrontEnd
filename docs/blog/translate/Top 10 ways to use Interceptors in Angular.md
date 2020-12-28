# [译]在 Angular 中使用拦截器的方式 Top 10

有许多种方式使用拦截器，我确定我们大多数人使用的很浅显。在这篇文章中，我将介绍在 Angular 中我最喜欢的 10 种使用拦截器的方式。

我使例子尽可能的简洁。我希望他们能够启发你们去思考使用拦截器的新方式。这篇文章不是关于拦截器教学的，因为已经有很多好的文章了。但是，在开始倒数之前，让我们以一些基础的知识点开始。

## HttpInterceptor 101

[HttpInterceptor](https://angular.io/api/common/http/HttpInterceptor) 是在 Angular 4.3 引入。它提供一种方式拦截 HTTP 请求和响应，在传递他们之前转换或者处理他们。

> 尽管拦截器能够改变请求和响应，但是 [HttpRequest](https://angular.io/api/common/http/HttpRequest) 和 [HttpResponse](https://angular.io/api/common/http/HttpResponse) 实例属性是 `只读` 的，从而使它们在很大程度上不可变。 — Angular Docs

这是因为我们可能想要在某个请求第一次没成功后重试。不变性确保了拦截器链能够多次重新处理相同的请求。

你可以使用多个拦截器，但是这个记心中：

> Angular 通过你定义他们的顺序应用拦截器。如果你定义的拦截器的顺序是 A->B->C，请求将按 A->B->C 的顺序流入，响应将按 C->B->A 的顺序流入。

> 之后，不能改变顺序或者移除拦截器。如果你需要动态启用、禁用拦截器，你不得不在拦截器本身增加这个功能。— Angular Docs

在示例 APP 中，我们提供了全部拦截器，但是一次仅使用一个。这通过检查路径实现（[代码在这里](https://github.com/melcor76/interceptors/blob/172be0444d505c6164ff506ab311a4966ce8c78f/src/app/interceptors/auth.interceptor.ts#L30)）。如果不是我们找的请求，我们通过 `next.handle(req)` 传递给下一个拦截器。

![01](xxx)

拦截器的另一个好处是他们能够`一起处理请求和响应`。我们将看到，这给我们很好的可能性。

更多深度知识，可以看 [Max Koretskyi aka Wizard](https://medium.com/u/bd29063a4857?source=post_page-----db450f8a62d6--------------------------------)  这篇很棒的文章:

- [Angular 拦截器内部指南和 HttpClient 机制](https://medium.com/angular-in-depth/insiders-guide-into-interceptors-and-httpclient-mechanics-in-angular-103fbdb397bf)

在示例的 HTTP 请求中，我使用了 [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 这个网站。如果你想看代码，你可以从这里找到：

- 10.x 版本，译者版本
[GitHub 示例代码 10.x版本](https://github.com/)
[StackBlitz 线上运行](https://stackblitz.com/github/)

- 8.x 版本，作者版本
[GitHub 示例代码 8.x版本](https://github.com/melcor76/interceptors)
[StackBlitz 线上运行](https://stackblitz.com/github/melcor76/interceptors)

现在，让我们开始倒数吧！

![02](xxx)

## 10.URL

操纵 URL。当我大声说出来时，听起来有些风险，但是让我们看下在拦截器下做这个事情是多么简单。

例如，我们想从 HTTP 变为 HTTPS。

就像克隆请求同时使用 https:// 替换 http:// 一样简单。然后我们将克隆的 HTTPS 请求发送到下一个 handler。

```js
// 克隆请求，同时使用 https:// 替换 http://
const httpsReq = req.clone({
    url: req.url.replace('http://', 'https://')
});
return next.handler(httpsReq)
```

这个例子中，我们设置 URL 为 HTTP，但是当我们检查请求时，我们能看见它已经变成了 HTTPS。

```js
const url = `http://jsonplaceholder.typicode.com/todos/1`;
this.response = this.http.get(url);
```

![03](xxx)

自动化魔术 https，为什么这个不高明呢。通常你可以通过 web 服务器设置这些事情。或者你想在开发环境从 HTTP 切换到 HTTPS，你可以使用这个 [CLI](https://angular.io/cli/serve):


```js
ng serve -ssl
```

类似，你可以修改一点 URL，并且成它为 API 前缀拦截器：

```js
req.clone({
    url: environment.serverUrl + request.url
});
```

或者你可以再次通过 CLI 来实现：

```js
ng serve - serve-path=<path> - base-href <path>/
```

感谢 [David Herges](https://medium.com/u/d91c7d086b4b?source=post_page-----db450f8a62d6--------------------------------) 的 CLI 提示。

## 9.Loader