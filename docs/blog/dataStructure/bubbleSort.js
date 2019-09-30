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
