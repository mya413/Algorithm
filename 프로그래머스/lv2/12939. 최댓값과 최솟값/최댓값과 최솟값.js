function solution(s) {
    let arr = s.split(' ')
    let result = '';
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    return result = `${min} ${max}`
}