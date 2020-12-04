# 开局一个表，其他全靠敲

		数据库选的是 MySQL，语法是 MySQL 语法。

## 先来一个库

```SQL
CREATE DATABASE shop;
```

## 再来一个表

```SQL
CREATE TABLE Product(
	product_id char(4) not null, 
	product_name varchar(100) not null, 
	product_type varchar(32) not null, 
  -- mysql 中，这个未指定长度，默认为 int(11)
	sale_price int, 
	purchase_price int, 
	regist_date DATE, 
	PRIMARY key (product_id)
);
```

## 删除一个表

```SQL
DROP TABLE shop;
```

## 表更新

- 增加一列 `product_name_pinyin`
```SQL
ALTER TABLE Product ADD COLUMN product_name_pinyin varchar(100);
```

- 删除 `product_name_pinyin` 列
```SQL
ALTER TABLE Product DROP COLUMN product_name_pinyin;
```

## 插入数据

```SQL
START TRANSACTION;

INSERT Product VALUES ('001', 'T恤衫', '衣服', 1000, 500, '2009-09-20');
INSERT Product VALUES ('002', '打孔器', '办公用品', 500, 320, '2009-09-11');
INSERT Product VALUES ('003', 'T恤衫', '运动T恤', 4000, 2800, NULL);
INSERT Product VALUES ('004', '菜刀', '厨房用具', 3000, 2800, '2009-09-20');
INSERT Product VALUES ('005', '高压锅', '厨房用具', 6800, 5000, '2009-01-15');
INSERT Product VALUES ('006', '叉子', '厨房用具', 500, NULL, '2009-09-20');
INSERT Product VALUES ('007', '擦菜板', '厨房用具', 880, 790, '2009-04-28');
INSERT Product VALUES ('008', '圆珠笔', '办公用品', 100, NULL, '2009-11-11');

COMMIT;
```

## 变更表名

```SQL
RENAME TABLE Product TO PRODUCT;
```