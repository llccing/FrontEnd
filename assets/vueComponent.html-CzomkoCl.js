import{_ as n,c as a,a as e,o as l}from"./app-Dbw06csz.js";const i={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="组件的重写" tabindex="-1"><a class="header-anchor" href="#组件的重写"><span>组件的重写</span></a></h1><pre><code>现在开发后台管理系统，你不用个组件库都不好意思跟人打招呼。
</code></pre><p>做了很多后台管理系统，并且一直和UI、测试同学，针对组件库的事甩锅给组件的开发者。</p><p><strong>甩</strong></p><p>UI：“这个按钮太大了，改小一点。”</p><p>怼回去；“这个是组件内部写死的，不好改。”</p><p><strong>再甩</strong></p><p>测试：“这有个bug！”</p><p>怼回去：“这个组件有bug，等他升级了，我们更新下依赖就行。”</p><p>事情的进展 虽然通过上面的沟通可以暂时将问题压下去，但是这毕竟不是一个好的解决问题的方式。所以还是需要去解决。 针对样式问题，组件库的官方其实会给出一个解决解决方案。</p><h2 id="iview组件库的样式覆盖" tabindex="-1"><a class="header-anchor" href="#iview组件库的样式覆盖"><span>iview组件库的样式覆盖</span></a></h2><p>环境：<strong>vue@2.6.6 iview@3.2.2</strong></p><p>error</p><p>解决 <a href="https://stackoverflow.com/questions/46729091/enable-inline-javascript-in-less" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/46729091/enable-inline-javascript-in-less</a><a href="https://cli.vuejs.org/zh/config/#css-loaderoptions" target="_blank" rel="noopener noreferrer">https://cli.vuejs.org/zh/config/#css-loaderoptions</a></p><p>使用vue.config.js修改lessloader的配置，才可以顺利覆盖less文件。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">module.exports = {</span>
<span class="line">  css: {</span>
<span class="line">    loaderOptions: {</span>
<span class="line">      less: {</span>
<span class="line">        // 这里的选项会传递给 less-loader</span>
<span class="line">        javascriptEnabled: true</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们只要修改less变量的值，就能够达到修改样式的目的，如下是部分变量，<a href="https://github.com/iview/iview/blob/master/src/styles/custom.less" target="_blank" rel="noopener noreferrer">全部变量在这里</a></p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code class="language-less"><span class="line"><span class="token comment">// Prefix</span></span>
<span class="line"><span class="token variable">@css-prefix             <span class="token punctuation">:</span></span> ivu<span class="token operator">-</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@css-prefix-iconfont    <span class="token punctuation">:</span></span> ivu<span class="token operator">-</span>icon<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Color</span></span>
<span class="line"><span class="token variable">@primary-color          <span class="token punctuation">:</span></span> #2d8cf0<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码在下方</p><h2 id="element-ui组件库的样式覆盖" tabindex="-1"><a class="header-anchor" href="#element-ui组件库的样式覆盖"><span>element-ui组件库的样式覆盖</span></a></h2><p>创建vue项目时记得选择scss就可以</p><p>做如下修改</p><div class="language-SCSS line-numbers-mode" data-highlighter="prismjs" data-ext="SCSS"><pre><code class="language-SCSS"><span class="line">/* 改变主题色变量 */</span>
<span class="line">$--color-primary: teal;</span>
<span class="line"></span>
<span class="line">$--button-font-size: 16px !default;</span>
<span class="line"></span>
<span class="line">$--border-radius-base: 0px !default;</span>
<span class="line">$--border-radius-small: 0px !default;</span>
<span class="line"></span>
<span class="line">/* 改变 icon 字体路径变量，必需 */</span>
<span class="line">$--font-path: &#39;~element-ui/lib/theme-chalk/fonts&#39;;</span>
<span class="line"></span>
<span class="line">@import &quot;~element-ui/packages/theme-chalk/src/index&quot;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>覆盖变量可以参考 <a href="https://github.com/ElemeFE/element/blob/master/packages/theme-chalk/src/common/var.scss" target="_blank" rel="noopener noreferrer">element 项目中定义的变量</a></p><div class="language-SCSS line-numbers-mode" data-highlighter="prismjs" data-ext="SCSS"><pre><code class="language-SCSS"><span class="line">/* Element Chalk Variables */</span>
<span class="line">/* Colors</span>
<span class="line">-------------------------- */</span>
<span class="line">$--color-white: #fff !default;</span>
<span class="line">$--color-black: #000 !default;</span>
<span class="line"></span>
<span class="line">$--color-primary: #409EFF !default;</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从修改上来看还是element-ui是个正经的组件库。</p><h2 id="iview的组件逻辑调整" tabindex="-1"><a class="header-anchor" href="#iview的组件逻辑调整"><span>iview的组件逻辑调整</span></a></h2><p>这个idea不是我，来自华为云的开发！感谢！</p><p>show you code!</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token comment">// template将iview源码的中的Table.vue的template复制过来就可以。</span></span>
<span class="line">  <span class="token comment">// 当然如果你想自定义那么也可以做更改</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>Table<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;iview&#39;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">mixins</span><span class="token operator">:</span><span class="token punctuation">[</span>Table<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;do what you want to do in mounted!&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码在下方</p><h2 id="element-ui的组件逻辑调整" tabindex="-1"><a class="header-anchor" href="#element-ui的组件逻辑调整"><span>element-ui的组件逻辑调整</span></a></h2><p>修改的方式和iview的组件类似，不过element-ui中，el-table-column暂时没有做修改。</p><h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码"><span>源码</span></a></h2><ol><li><a href="https://github.com/llccing/FrontEnd/tree/master/demo/component-style-override-element" target="_blank" rel="noopener noreferrer">component-style-override-element</a></li><li><a href="https://github.com/llccing/FrontEnd/tree/master/demo/component-style-override-iview" target="_blank" rel="noopener noreferrer">component-style-override-iview</a></li></ol>`,35)])])}const r=n(i,[["render",p]]),o=JSON.parse('{"path":"/blog/life/vueComponent.html","title":"组件的重写","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768212680000,"contributors":[{"name":"Rowan Liu","username":"","email":"lcf33123@gmail.com","commits":1}],"changelog":[{"hash":"8dc20e2f1b4b500b4a8b691792c2c9b3c12addca","time":1768212680000,"email":"lcf33123@gmail.com","author":"Rowan Liu","message":"Merge pull request #66 from llccing/copilot/fix-vite-build-error"}]},"filePathRelative":"blog/life/vueComponent.md"}');export{r as comp,o as data};
