# Travis CI

    编码只是软件开发的一小部分，更多的时间往往花在构件和测试。

Travis只支持GitHub，不支持其他代码托管服务。

没有Travis CI的情况下，每次写完需要执行下列操作。

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
 #git push -f git@github.com:<llccing>/<llccing>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:llccing/FrontEnd.git master:gh-pages

cd -
```
当然sh文件应该是可以自动执行的，我现在还没找到正确的方式。哈哈。

所以呢，就找个别的方式，Travis ci是个很省力的方式，配置好之后，每次在master分支push到远端，会触发Travis ci自动构建，这样省去了很多事。


## 参考 

[vuepress travis ci 介绍](https://peterhpchen.github.io/tarvis-ci,/vuepress,/github-page/2019/02/20/publish-vuepress-by-travis.html)

[Travis CI简介](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)

[vuepress travis-ci](https://itnext.io/publish-a-vuepress-site-on-github-pages-with-travis-82036243bf36)

[从Gitbook 到 vuepress](https://shazi.info/%E7%94%A8-vuepress-github-pages-%E5%8F%96%E4%BB%A3%E5%B0%8F%E6%B0%A3%E9%AC%BC%E7%9A%84-gitbook-%E5%90%A7/)