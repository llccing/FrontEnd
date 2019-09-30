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


