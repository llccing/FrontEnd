// 折半插入排序

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