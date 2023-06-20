function solution(my_string) {
    let str = my_string.trim().split(' ').filter(el => el !== '')
    return str
}