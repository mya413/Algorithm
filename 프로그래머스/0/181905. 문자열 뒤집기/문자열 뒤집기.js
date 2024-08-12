function solution(my_string, s, e) {
    const el = my_string.substring(s,e+1).split('').reverse();
    const strArr = [...my_string];
    strArr.splice(s,e-s+1,el)

    const result = [].concat(...strArr).join('');
    return result;
}