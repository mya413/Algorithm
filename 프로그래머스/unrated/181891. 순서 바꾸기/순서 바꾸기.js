function solution(num_list, n) {
    let result1 = num_list.slice(n)
    let result2 = num_list.slice(0,n)
    return [...result1, ...result2]
}