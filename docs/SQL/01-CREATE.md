# 开局一个表，其他全靠敲

## 先来一个库
```sql
CREATE DATABASE shop;
```

## 再来一个表
```sql
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