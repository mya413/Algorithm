function solution(num_list) {
    let mul = num_list.reduce((acc,cur)=>acc+cur,0)
    return num_list.reduce((acc,cur)=>acc*cur,1) < Math.pow(mul,2) ? 1 : 0
}