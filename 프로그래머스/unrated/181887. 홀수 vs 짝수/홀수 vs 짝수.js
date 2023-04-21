function solution(num_list) {
    let even = num_list.map((el,idx)=>idx%2===0 ? el : 0).reduce((acc,cur)=>acc+cur,0)
    let odd = num_list.map((el,idx)=>idx%2===1 ? el : 0).reduce((acc,cur)=>acc+cur,0)
    if(even > odd){
        return even
    } else if(even < odd){
        return odd
    } else {
        return odd
    }
    
    console.log(even)
}