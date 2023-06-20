function solution(num_str) {
    let num = 0;
    for(let i=0; i<=num_str.length-1; i++){
        num = num + Number(num_str[i])
    }
    return num
}