# egg init

## 初始化模板

```
 npm init egg --type=simple
```
yarn init 不好使。

## mysql
之前曾经在本地创建过mysql的环境，但是很久不用也就没有启动了，但是这次无论如何也不能成功启动起来。

    那么怎么搞呢

### 使用docker 
文档一不能成功启动mysql
- [操作文档一](https://zhuanlan.zhihu.com/p/35272017)
- [操作文档二](https://juejin.im/post/5c8e25bdf265da67e43e8271)

```
sudo docker run --rm -d -e MYSQL_ROOT_PASSWORD=926443 \
      -v helloworld:/var/lib/mysql \
      --name mysql\
      -p 23333:3306 mysql

```

一个参数都不能少
```
mysql -uroot -p926443 -h 127.0.0.1 -P23333
```

mysql 8.0 修改
```
ALTER USER root IDENTIFIED WITH mysql_native_password BY '926443';
```

[解决文档](https://stackoverflow.com/questions/49948350/phpmyadmin-on-mysql-8-0)



#### phpMyAdmin

拉镜像
```
docker pull phpmyadmin/phpmyadmin
```

启动它，但是要先启动mysql。
```
docker run -d \
    --name myadmin \
    --link mysql:db \
    -p 8080:80 \
    phpmyadmin/phpmyadmin

```

[文档一](https://xu3352.github.io/docker/2017/12/27/install-phpmyadmin-with-docker)
[文档二](https://blog.csdn.net/l6807718/article/details/51179507)