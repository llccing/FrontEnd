# 聚合查询

五个常用的聚合函数

- COUNT
- SUM
- AVG
- MAX
- MIN


- **计算行数**

```SQL
SELECT COUNT(*) FROM `Product`
-- 结果是 7

SELECT COUNT(purchase_price) FROM `Product`
-- 结果是 6
-- 如果 COUNT 的参数是列名，会把列值为 NULL 的情况排除，计算 NULL 之外的数据行。
```

- **使用聚合函数删除重复值**

```SQL
SELECT COUNT(DISTINCT product_type) FROM `Product`;
```

注意，在聚合函数的参数中使用 DISTINCT，可以删除重复数据。

## 对表分组

- 计算各个种类商品的个数
```SQL
SELECT product_type, count(*) FROM `Product` GROUP BY product_type;
```

**聚合键**、**分组列**，指的都是 GROUP BY 后面跟的参数。

**注意**，书写顺序：

```SQL
SELECT -> FROM -> WHERE -> GROUP BY
```

### 聚合键中的 NULL

```SQL
SELECT product_name, purchase_price, COUNT(*) 
FROM `Product` 
GROUP BY purchase_price

-- purchase_price 字段中有NULL的情况，会展示出字段值为不确定的一行
```

**GROUP BY 和 WHERE 并用时 SELECT 语句的执行顺序**

```SQL
FROM -> WHERE -> GROUP BY -> SELECT
```


### 聚合函数和 GROUP BY 子句有关的常见错误

#### 1、在 SELECT 子句中书写了多余的列

```SQL
SELECT product_type, purchase_price, COUNT(*) 
FROM Product 
GROUP BY product_type

-- 这个语法仅仅 MySQL 自己支持，其他 DBMS 都不支持。
```

可以做如下修改，正确写法如下：

```SQL
SELECT product_type, purchase_price, COUNT(*) 
FROM Product 
GROUP BY product_type, purchase_price
```

**使用聚合函数时，SELECT子句中仅仅能存在3种元素**：
- 常数
- 聚合函数
- GROUP BY 子句中指定的列名（也就是聚合键）

#### 1、在 GRUOP BY 子句中写了列的别名


