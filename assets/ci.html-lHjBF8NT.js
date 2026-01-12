import{_ as n,c as a,a as e,o as i}from"./app-Dbw06csz.js";const l={};function p(t,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="travis-ci" tabindex="-1"><a class="header-anchor" href="#travis-ci"><span>Travis CI</span></a></h1><pre><code>编码只是软件开发的一小部分，更多的时间往往花在构件和测试。
</code></pre><p>Travis只支持GitHub，不支持其他代码托管服务。</p><p>没有Travis CI的情况下，每次写完需要执行下列操作。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token shebang important">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 生成静态文件</span></span>
<span class="line"><span class="token function">npm</span> run docs:build</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 进入生成的文件夹</span></span>
<span class="line"><span class="token builtin class-name">cd</span> docs/.vuepress/dist</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果是发布到自定义域名</span></span>
<span class="line"><span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span></span>
<span class="line"> <span class="token comment">#git push -f git@github.com:&lt;llccing&gt;/&lt;llccing&gt;.github.io.git master</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"> <span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:llccing/FrontEnd.git master:gh-pages</span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">cd</span> -</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然sh文件应该是可以自动执行的，我现在还没找到正确的方式。哈哈。</p><p>所以呢，就找个别的方式，Travis ci是个很省力的方式，配置好之后，每次在master分支push到远端，会触发Travis ci自动构建，这样省去了很多事。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><p><a href="https://peterhpchen.github.io/tarvis-ci,/vuepress,/github-page/2019/02/20/publish-vuepress-by-travis.html" target="_blank" rel="noopener noreferrer">vuepress travis ci 介绍</a></p><p><a href="http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html" target="_blank" rel="noopener noreferrer">Travis CI简介</a></p><p><a href="https://itnext.io/publish-a-vuepress-site-on-github-pages-with-travis-82036243bf36" target="_blank" rel="noopener noreferrer">vuepress travis-ci</a></p><p><a href="https://shazi.info/%E7%94%A8-vuepress-github-pages-%E5%8F%96%E4%BB%A3%E5%B0%8F%E6%B0%A3%E9%AC%BC%E7%9A%84-gitbook-%E5%90%A7/" target="_blank" rel="noopener noreferrer">从Gitbook 到 vuepress</a></p>`,12)])])}const r=n(l,[["render",p]]),o=JSON.parse('{"path":"/blog/life/ci.html","title":"Travis CI","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1768212680000,"contributors":[{"name":"Rowan Liu","username":"","email":"lcf33123@gmail.com","commits":1}],"changelog":[{"hash":"8dc20e2f1b4b500b4a8b691792c2c9b3c12addca","time":1768212680000,"email":"lcf33123@gmail.com","author":"Rowan Liu","message":"Merge pull request #66 from llccing/copilot/fix-vite-build-error"}]},"filePathRelative":"blog/life/ci.md"}');export{r as comp,o as data};
