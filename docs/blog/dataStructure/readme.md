# 排序

> 非常晦涩难懂，但是为啥还是要啃呢，可能是因为对智商比较有好处，类似老头、老太太去打麻将，殊途同归。

[[toc]]


## 冒泡排序 bubbleSort
```js
/**
 * 冒泡排序
 * 入门级排序
 *
 * 2018年09月16日23:14:17
 */

let a = [123, 3, 3, 0, 31, 23, -12, 898, -2, 4, 5, 1, 2];
console.log('origin data is, ', a);
let l = a.length;
// 第一层控制循环次数
for (let i = 0; i < l-1; i++) {
    // 从0开始冒泡，将大的数冒出去，所以也是正序
    for(let k=0; k<l-i; k++ ){
        let temp;
        if(a[k]>a[k+1]){
            temp = a[k];
            a[k] = a[k+1];
            a[k+1] = temp;
        }
    }
}

console.log('bubbleSort result is, ',a)

```

## 插入排序 insertSort
```js
let aa = [123,233,3,3,1,2,3,4,78,0];
console.log(aa)
let temp,j;
for(let i=1;i<aa.length;i++){
    temp = aa[i];
    j = i-1;
    while(j>=0 && temp<aa[j]){
        aa[j+1] = aa[j];
        --j;
    }
    aa[j+1] = temp;
}

console.log(aa)


// 我理解的插入，
let a = [123,233,3,3,1,2,3,4,78,0];
let b = [a[0]]
console.log(a)
for(let i=1;i<a.length-1;i++){
    b.push(a[i])
    for(let k = 0;k<b.length-1;k ++){
        let temp;
        if(b[k]>b[k+1]){
            temp = b[k];
            b[k] = b[k+1];
            b[k+1] = temp;
        }
    }
}

console.log(b)

```

## 折半插入排序 binaryInsertionSort
```js

let a = [123, 3, 3, 0, 31, 23, -12, 898, -2, 4, 5, 1, 2];
console.log('origin a= ',a)

let temp,low,high,m;
for(let i=1; i<a.length;i++ ){
    temp  = a[i];
    low = 0;
    high = i-1;
    while(low <= high){
        m = Number.parseInt((high+low)/2);
        if (temp > a[m]){
            low = m+1
        } else {
            high = m-1;
        }
    }
    
    for(let j = i-1; j>=high+1; j--){
        a[j+1] = a[j];
    }
    a[high+1] = temp;
}

console.log('sorted = ', a)
```

## 希尔排序 shellSort
```js
let a = [123, 3, 0, 31, 23, -12, 898, -2, 4, 5, 1];

/**
 * 
 * shell sort
 * 希尔排序是不稳定排序
 * 
 * 123, 3, 0, 31, 23, -12, 898, -2, 4, 5, 1
 * 0,   1, 2, 3,  4,    5,  6,   7, 8, 9, 10
 * 
 * 以5为增量
 * 123                -12                 1
 *     3,                  898                
 *       0,                    -2
 *         31                    4
 *           23                   5
 * 快速排序
 * -12,              1                    123
 *    3                898
 *     -2                 0
 *       4                  31
 *        5                   23
 * 第一次shell排序结果
 * -12,  3,  -2,  4, 5,  1,  898,  0,  31,  23,  123
 * 0     1    2   3  4   5    6    7    8    9   10
 * 
 * 以3为增量
 * -12,        4          898        23
 *     3        5            0         10
 *      -2       1            31
 * 快速排序
 * -12,      4,          23,        898
 *    0        3           5           10
 *     -2       1           31
 * 
 * 第二次shell排序结果
 * -12,  0,  -2,  4,  3,  1,  23,  5,  31,  898,  10
 * 0     1    2   3   4   5    6   7    8   9     10
 * 
 * 以1为增量
 * 快速排序
 * -12,-2,0,1,3,4,5,10,23,31,898
 * 完成
 * 
 */
```