function solution(n) {
    let arr = [1];
    for(let i=2; i <= n; i++){
        if(n%i===0){
            arr.push(i)
        }
    }
    return arr
}