function solution(n) {
    let num = 0;
    if(n%2===1){
        for(let i=1; i<=n; i=i+2){
            num = num + i
        }
        return num
    } else {
        for(let i=2; i<=n; i=i+2){
            num = num + (i*i)
        }
        return num
    }
}