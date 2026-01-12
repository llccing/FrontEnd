import{_ as a,c as n,a as s,o as i}from"./app-Dbw06csz.js";const r={};function l(t,e){return i(),n("div",null,[...e[0]||(e[0]=[s(`<h1 id="ant-design" tabindex="-1"><a class="header-anchor" href="#ant-design"><span>Ant Design</span></a></h1><pre><code>要说为啥要学习React，可能是因为难以抗拒Ant Design的美。
</code></pre><p>根据Ant Design的文档，先尝试quick start，发现没有配置webpack等构件工具的情况下难以运行起来。所以从推荐的umi/dva/antd开始</p><h2 id="umi-dva-antd" tabindex="-1"><a class="header-anchor" href="#umi-dva-antd"><span>umi/dva/antd</span></a></h2><h3 id="umi" tabindex="-1"><a class="header-anchor" href="#umi"><span><a href="https://umijs.org/zh/" target="_blank" rel="noopener noreferrer">umi</a></span></a></h3><pre><code>可插拔的企业级React应用框架。
</code></pre><p><strong>特点</strong></p><ul><li>插件化，生命周期都是插件化的，内部实现也是大量插件组成，如pwa、按需加载，一键切换preact、一键兼容IE9等，都是通过插件实现。</li><li>开箱即用，无需再次安装react、preact、webpack、react-router、babel、jest等。</li><li>约定式路由，类似nuxt，无需维护冗余路由，支持权限，动态路由、嵌套路由等。</li></ul><p><strong>started</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 安装</span>
<span class="line">$ yarn global add umi # 或者 npm install -g umi</span>
<span class="line"></span>
<span class="line"># 新建应用</span>
<span class="line">$ mkdir myapp &amp;&amp; cd myapp</span>
<span class="line"></span>
<span class="line"># 新建页面</span>
<span class="line">$ umi generate page index</span>
<span class="line"></span>
<span class="line"># 本地开发</span>
<span class="line">$ umi dev</span>
<span class="line"></span>
<span class="line"># 构建上线</span>
<span class="line">$ umi build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>资料</strong></p><p>完成用户管理的CURD <a href="https://github.com/sorrycc/blog/issues/62" target="_blank" rel="noopener noreferrer">https://github.com/sorrycc/blog/issues/62</a></p><h3 id="dva" tabindex="-1"><a class="header-anchor" href="#dva"><span>dva</span></a></h3><pre><code>React and redux based, lightweight and elm-sytle framework.
基于React和redux，轻量级、elm-style类型的框架。

Elm is a programming language that compiles to JavaScript. It is known for its friendly error messages, helping you find issues quickly and refactor large projects with confidence. Elm is also very fast and very small when compared with React, Angular, Ember, etc.
</code></pre><p><strong>特点</strong></p><ul><li>易学易用，6个api，对redux用户友好，配合umi使用后0 API。</li><li>elm概念，通过reducers、effects、subscriptions组织model，简化redux和redux-saga引入的概念。</li><li>插件机制，比如dva-loading可以自动处理loading状态，不用一遍遍写showLoading和hideLoading。</li></ul><p><strong>资料</strong></p><p>dva.js说明文档 <a href="https://dvajs.com/guide/#%E7%89%B9%E6%80%A7" target="_blank" rel="noopener noreferrer">https://dvajs.com/guide/#%E7%89%B9%E6%80%A7</a></p><p><strong>what is dva</strong> dva = React-Router + Redux + Redux-saga</p>`,19)])])}const c=a(r,[["render",l]]),p=JSON.parse('{"path":"/lib/react/01-start-project.html","title":"Ant Design","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768212680000,"contributors":[{"name":"Rowan Liu","username":"","email":"lcf33123@gmail.com","commits":1}],"changelog":[{"hash":"8dc20e2f1b4b500b4a8b691792c2c9b3c12addca","time":1768212680000,"email":"lcf33123@gmail.com","author":"Rowan Liu","message":"Merge pull request #66 from llccing/copilot/fix-vite-build-error"}]},"filePathRelative":"lib/react/01-start-project.md"}');export{c as comp,p as data};
