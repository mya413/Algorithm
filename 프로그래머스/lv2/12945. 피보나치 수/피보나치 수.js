function solution(n) {
    let fibo = [0n,1n]
    for(let i = 2; i <= n; i++){
        fibo[i] = fibo[i-2] + fibo[i-1]
    }
    return fibo[n] % 1234567n
    console.log(Number.MAX_SAFE_INTEGER) // 자바스크립트가 정수계산을 보장하는 범위
}