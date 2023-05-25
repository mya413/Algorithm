function solution(num_list) {
    let sorted = num_list.sort((a,b)=>a-b)
    return sorted.slice(0,5).sort((a,b)=>a-b)
}