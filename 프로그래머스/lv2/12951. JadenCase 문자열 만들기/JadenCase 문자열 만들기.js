function solution(s) {
    let arr = s.split(' ')
    let result = arr.map(el => el ? el[0].toUpperCase() + el.slice(1).toLowerCase() : '')
    result = result.join(' ')
    return result
}