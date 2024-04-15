function solution(number) {
    let result = [...number].reduce((acc,cur)=>(acc+cur)%9,0)
    return result
}