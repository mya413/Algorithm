function solution(my_string) {
    let result = [];

    for(let i=0; i<my_string.length; i++){
        const b = my_string.slice(i)
        result.push(b);
    }
    result.sort()
    return result;
}
