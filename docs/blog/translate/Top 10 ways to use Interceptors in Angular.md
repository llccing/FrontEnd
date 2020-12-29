# [译]在 Angular 中使用拦截器的方式 Top 10

> [原文在此，也可以看原文哦](https://medium.com/angular-in-depth/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6)

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

![01](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/01.png)

拦截器的另一个好处是他们能够`一起处理请求和响应`。我们将看到，这给我们很好的可能性。

更多深度知识，可以看 [Max Koretskyi aka Wizard](https://medium.com/u/bd29063a4857?source=post_page-----db450f8a62d6--------------------------------)  这篇很棒的文章:

- [Angular 拦截器内部指南和 HttpClient 机制](https://medium.com/angular-in-depth/insiders-guide-into-interceptors-and-httpclient-mechanics-in-angular-103fbdb397bf)

在示例的 HTTP 请求中，我使用了 [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 这个网站。如果你想看代码，你可以从这里找到：

- 10.x 版本，译者版本
[GitHub 示例代码 10.x版本](https://github.com/) 📜
[StackBlitz 线上运行](https://stackblitz.com/github/) 🏃

- 8.x 版本，作者版本
[GitHub 示例代码 8.x版本](https://github.com/melcor76/interceptors) 📜
[StackBlitz 线上运行](https://stackblitz.com/github/melcor76/interceptors) 🏃

现在，让我们开始倒数吧！

![02](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/02.jfif)

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

![03](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/03.png)

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

当我们等待响应时，每个人都希望看见命运的纺纱轮（表示旋转的loading）。只要在请求活跃的时候，我们在拦截器中统一设置，这样我们就能够看见 loader 了。

首先，我们能够使用 loader 服务，这样就有了展示和隐藏 loader 的功能。在处理请求前，我们调用`展示`方法并通过 finalize 完成后`隐藏` loader。

```js
const loaderService = this.injector.get(LoaderService);

loaderService.show();

return next.handle(req).pipe(
    delay(5000),
    finalize(() => loaderService.hide())
)
```

这个例子很简单，在真实的解决方案中，我们应该考虑到会有多个 HTTP 请求被拦截。这可以通过一个请求（+1）响应（-1）的计数器来解决这个问题。

当然，我添加了一个延迟来让我们有时间能够看到 loader。

![04](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/04.gif)

全局的 loader 听起来是个不错的主意，但是这个为什么不在列表中呢？可能它适合特定的应用，但是如果你同时加载多个，你可能想要对 loader 定制化。

我将给你留下一些思考的空间。如果你用 [switchMap](https://www.learnrxjs.io/operators/transformation/switchmap.html) 去取消请求将会发生什么？

## 8.转换

当 API 返回一个我们不赞同的格式，我们能够使用拦截器去格式化成我们想要的样子。

这能够从 XML 转换到 JSON，或者像例子中的属性名字从大驼峰拼写到小驼峰拼写。如果后端不关心 JSON/JS 转换，我们能够使用拦截器将全部属性名重命名为小驼峰。

检查是否有 npm 包能够为你完成繁重的工作。在这个例子中我使用 [loadsh](https://www.npmjs.com/package/lodash) 的 [mapKeys](https://lodash.com/docs#mapKeys) 和 [camelCase](https://lodash.com/docs#camelCase)。

```js
return next.handle(req).pipe(
    map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            let camelCaseObject = mapKeys(event.body, (v,k) => camelCase(k));
            const modEvent = event.clone({ body: camelCaseObjec });

            return modEvent;
        }
    })
)
```

这个事情通常是后端来做，所以我通常不这么做。但是将这个加入到的兵器库，这样你需要的时候就能够使用了。

![05](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/05.gif)


## 7.Headers

通过操纵 headers 我们能够做许多事，例如：

- 认证（authentication）/ 授权（authorization）
- 缓存行为；例如，If-Modified-Since
- [XSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) 保护


我们能够通过拦截器轻而易举的添加 headers。

```js
cosnt modified = req.clone({
    setHeaders: { "X-Man": "wolverine" }
});

return next.handle(modified);
```

然后我们在开发者工具中就能够看到它被添加到了请求头中。

![06](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/06.png)

Angular 使用拦截器来防范 [跨站请求伪造](https://angular.io/guide/http#security-xsrf-protection)（XSRF）。通过读取 cookie 中的 `XSRF-TOKEN` 并设置一个 `X-XSRF-TOKEN` 请求头来实现。仅仅运行在你的域名中的代码才能够读取 cookie，这样后端能够确定 HTTP 请求来自己客户端程序而不是攻击者。

如你所见，在拦截器中能够直接操纵 headers。接下来我们将看到更多操纵 headers 的例子。


## 6.通知

这里有很多不同的例子用于展示消息。在我的例子中，每次从服务器获得 201 创建状态时，我会展示“Object created.”。

```js
return next.hadle(req).pipe(
    tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 201) {
            this.toastr.success('Object created.')
        }
    })
);
```

或者我们检查对象的类型来展示“Type created”。或者通过将数据和消息包裹到对象中创建一个定制的消息。

```ts
{
    data: T,
    message: string;
}
```

![08](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/08.gif)

当发生错误的时候，我们也可以通过拦截器展示通知。


## 5.Errors

在这个拦截器中我们实现了两个关于错误的用例。

首先，我们能够`重试 HTTP 请求`。例如，网络中断在移动端场景很常见，再试一次可能会成功。值得考虑的事情是在放弃之前的重试次数。我们应该在重试前等待吗，或者立即重试？

对于这点，我们使用 RxJS 中的 [retry](https://rxjs-dev.firebaseapp.com/api/operators/retry) 操作符重新订阅 observable。HttpClient 方法调用的重新订阅具有再次发出 HTTP 请求的效果。

这种行为的更高级的示例：

- [当发生错误时，基于自定义标准重试 observable 序列](https://www.learnrxjs.io/operators/error_handling/retrywhen.html)
- [当使用幂等回退时 rxjs 的能力](https://medium.com/angular-in-depth/power-of-rxjs-when-using-exponential-backoff-a4b8bde276b0)

第二点，检查异常的状态。基于状态，决定应该做什么。

```js
return next.handle(req).pipe(
    retry(2),
    catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
            // 401 在 auth.interceptor 中处理了
            this.toastr.error(error.message);
        }
        return throwError(error)
    })
)
```

这个例子中，在检查错误状态前，我们重试了两次。如果状态不是 401，我们已弹出（toastr）的形式展示错误。所有的错误将重新抛出来进一步处理。

![09](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/09.png)

![10](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/10.png)

更多的错误处理的知识，你可以在这里阅读我早期的文章：

- [期待意外 -- Angular 错误处理的最佳实践](https://medium.com/angular-in-depth/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4)



## 4.分析

因为拦截器能够同时处理请求和响应，能够在一次完整的 HTTP 操作中计时和记日志。所以我们能够捕获请求和响应时间，记录经过的时间结果。

```ts
const started = Date.now()
let ok: string;

return next.handle(req).pipe(
    tap(
        (event: HttpEvent<any>) => ok = event instanceof HttpResponse ? 'successed' : '',
        (error: HttpEventResponse) => ok = 'failed'
    ),

    // 响应 observable 结束或者完成的时候记日志
    finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`
        console.log(msg);
    })
    )
```

这有许多中可能，例如，我们能记录分析日志到数据库中做统计。这个例子中，我们输出到 console。

![11](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/11.png)

## 3. 伪造后端

当没有后端服务时，可以在开发中模拟或者伪装后端。你也可以将其用于 StackBlitz 中托管的代码。

我们基于请求模拟返回，然后返回一个 HttpResponse observable。

```js
const body = {
    firstName: 'mock',
    lastName: 'Faker',
};

return of(new HttpResponse(
    { status: 200, body: body }
));
```

![12](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/12.gif)

## 2. 缓存

因为拦截器能够自己处理请求，没有转发到 `next.handle()`，所以我们利用这一点来缓存请求。

在 key-value map 构成的缓存中，我们使用 URL 作为 key。如果我们响应在 map 中，我们能够通过 `next` handler 返回这个 observable 响应。

当你已经有响应缓存时，你不需要一路走到后端，这个提升了性能。

```js
import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    private cache = new Map<string, any>();

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method !== 'Get') {
            return next.handle(request);
        }

        const cacheResponse = this.cache.get(request.url);
        if (cacheResponse) {
            return of(cacheResponse);
        }

        return next.handle(request).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    this.cache.set(request.url, event);
                }
            })
        )
    }
}

```

如果我们运行这个请求，清空响应然后再次运行将使用缓存。

![13](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/13.gif)

![14](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/14.png)

如果数据更新了，你需要使缓存失效，这会引入一些复杂性。但是现在不用担心！缓存生效的时候是真的爽！

关于缓存的更多知识可以读 [Dominic E.](https://medium.com/u/6317765dd4e6?source=post_page-----db450f8a62d6--------------------------------) 的这篇很帮的文章：

- [RxJS 高级缓存](https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html)

## 1.认证

清单中的第一个是认证！对于很多应用来说他是基本的，我们已经有了适当的认证系统。这是拦截器最常见的用例之一，有充分的理由。恰到好处！


有几个和权限相关的事情我们能做：

1. 添加 bearer token
2. 重新刷新 token
3. 重定向到登录页

当我们发送 bearer token 时，我们也应该有些过滤。如果我们还没 token，我们可能在登录，并不需要添加 token。或者如果我们调用其他域名，我们也不希望添加 token。例如，如果[向 Slack 发送错误信息](https://medium.com/dailyjs/how-to-send-errors-into-slack-dc552e30506f)。

相比于其他拦截器这个会有点复杂。这是一个带有一些解释性注释的例子：

```ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private AUTH_HEADER = 'Authorization';
    private token = 'secrettoken';
    private refreshTokenInProgress = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-type')) {
            req = req.clone({
                headers: req.headers.set('Content-Type', 'application/json')
            });
        }

        req = this.addAuthenticationToken(req);

        return next.handle(req).pipe(
            cacheError((error: HttpErrorResponse) => {
                if (error && error.status === 401) {
                    if (this.refreshTokenInProgress) {
                        return this.refreshTokenSubject.pipe(
                            filter(result => result !== null),
                            take(1),
                            switchMap(() => next.handle(this.addAuthenticationToken(req)))
                        );
                    } else {
                        this.refreshTokenInProgress = true;

                        // 设置 refreshTokenSubject 为 null，这样随后的 API 将等到新的 token 被取回时才调用。
                        this.refreshTokenSubject.next(null);

                        return this.refreshAccessToken().pipe(
                            switchMap((success: boolean) => {
                                this.refreshTokenSubject.next(success);
                                return next.handle(this.addAuthenticationToken(req));
                            }),

                            // 当我们调用刷新 token 方法完成时，重置 refreshTokenInProgress 为 false，
                            // 这是为了下次 token 需要再次被刷新
                            finalize(() => this.refreshTokenInProgress = false)
                        );
                    }
                } else {
                    return throwError(error)
                }
            })
        )
    }

    private refreshAccessToken(): Observable<any> {
        return of('secret token');
    }

    private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
        // 如果还没有 token，不应该在 header 中设置 token。
        // 首先我们应该从存储 token 的地方取回
        if (!this.token) {
            return request;
        }

        // 如果访问外部域名不应该添加 token
        if (!request.url.match(/www.mydomain.com\//)) {
            return request;
        }

        return request.clone({
            headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + this.token)
        })
    }
}
```


大吉大利，今晚吃鸡！🚀


## 总结

拦截器是 Angular 4.3 中一个重要的功能，这里我们看到了很多很棒的功能。现在发挥你的创造力，我相信你可以想出一些有趣的东西！

记住，通过使用拦截器，你可以像蝙蝠侠一样棒！

![15](http://static.llccing.cn/front-end/top-10-ways-to-use-interceptors/15.jfif)

- 10.x 版本，译者版本
[GitHub 示例代码 10.x版本](https://github.com/) 📜
[StackBlitz 线上运行](https://stackblitz.com/github/) 🏃

- 8.x 版本，作者版本
[GitHub 示例代码 8.x版本](https://github.com/melcor76/interceptors) 📜
[StackBlitz 线上运行](https://stackblitz.com/github/melcor76/interceptors) 🏃

感谢 Angular In Depth 提供想法和帮助编辑文档。希望我没有忘记任何一个人，谢谢 [Max Koretskyi aka Wizard](https://medium.com/u/bd29063a4857?source=post_page-----db450f8a62d6--------------------------------)，[Tim Deschryver](https://medium.com/u/802a7996f6b6?source=post_page-----db450f8a62d6--------------------------------)，[Alex Okrushko](https://medium.com/u/f7828ad40c7c?source=post_page-----db450f8a62d6--------------------------------)，[Alexander Poshtaruk](https://medium.com/u/ae97ac398bf9?source=post_page-----db450f8a62d6--------------------------------)，[Lars Gyrup Brink Nielsen](https://medium.com/u/f0e7507974eb?source=post_page-----db450f8a62d6--------------------------------)，[Nacho Vazquez Calleja](https://medium.com/u/e0ccd74b3326?source=post_page-----db450f8a62d6--------------------------------)，[thekiba](https://medium.com/u/73c42fbc4665?source=post_page-----db450f8a62d6--------------------------------) & [Alexey Zuev](https://medium.com/u/d59a9e801370?source=post_page-----db450f8a62d6--------------------------------)!


## 资源

- [Angular 拦截器内部指南和 HttpClient 机制](https://medium.com/angular-in-depth/insiders-guide-into-interceptors-and-httpclient-mechanics-in-angular-103fbdb397bf) by [Max Koretskyi](https://medium.com/u/bd29063a4857?source=post_page-----db450f8a62d6--------------------------------)，[aka Wizard](https://medium.com/u/bd29063a4857?source=post_page-----db450f8a62d6--------------------------------)

- [Angular 文档](https://angular.io/guide/http#intercepting-requests-and-responses)

- 许多其他好文章中的点点滴滴

## 译者参考

- [驼峰拼写法](https://www.ruanyifeng.com/blog/2007/06/camelcase.html)
- [XSRF/CSRF](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0)

## 感谢阅读
感谢你阅读到这里，翻译的不好的地方，还请指点。希望我的内容能让你受用，再次感谢。[by llccing 千里](https://llccing.github.io/FrontEnd/)