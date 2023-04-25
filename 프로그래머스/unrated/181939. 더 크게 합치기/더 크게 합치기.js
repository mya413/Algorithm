function solution(a, b) {
    let result1 = `${a}${b}`
    let result2 = `${b}${a}`
    if(result1 > result2){
        return Number(result1)
    } else {
        return Number(result2)
    }
}