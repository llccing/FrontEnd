# 查询基础


## SELECT

### 全部列

```SQL 
SELECT * FROM Product;
```

### AS 别名

```SQL
SELECT 
product_id AS '商品别名', 
product_name AS '商品名字', 
purchase_price AS '进货单价' 
FROM `Product`;
```

### 常数查询

- 常数查询
```SQL
SELECT '商品' AS STRING, '2020-02-24' AS DATE, product_name FROM `Product`;
```

- DISTINCT, 合并重复值
```SQL
SELECT DISTINCT purchase_price FROM `Product`
```

### where，限定条件
```SQL
SELECT * FROM `Product` WHERE product_type = '运动T恤';
```

### 注释方式 

```SQL
/*SELECT * FROM `Product` 
WHERE product_type = '运动T恤' */

SELECT * FROM `Product` 
-- WHERE product_type = '运动T恤'
```

## 算术运算符、比较运算符

### `+`/`-`/`*`/`/`
```SQL
SELECT product_name, sale_price, sale_price * 2 AS 'sale_price_x2' from Product
```

**注意**，NULL 参与运算时，返回结果都是 NULL。

### 比较运算符

```SQL
SELECT product_name, sale_price, sale_price * 2 AS 'sale_price_x2' 
FROM Product 
-- 这里的 不等于的写法非常有意思
WHERE sale_price <> 500
```


- NULL 值判断不等于时需要注意

```SQL
SELECT product_name, sale_price, purchase_price 
FROM Product 
WHERE sale_price <> 500
```

这里 purchase_price 为 NULL 的情况没有查出来，因为 NULL 时并不能确定是不是 <> 500，所以不包含 NULL 的值。

当然如果想查询出 NULL，可以用 `IS NULL` 的方式。

```SQL
SELECT product_name, sale_price, purchase_price 
FROM Product 
WHERE purchase_price IS NULL
```

## 逻辑运算符

- NOT/AND/OR
- 通过括号强化处理，提高 OR 优先级
