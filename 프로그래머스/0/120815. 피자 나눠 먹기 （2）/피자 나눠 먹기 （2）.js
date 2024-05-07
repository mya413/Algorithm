function solution(n) {
    let result = 1;
    while(result * 6 % n){
        result++;
    }
    return result
}
