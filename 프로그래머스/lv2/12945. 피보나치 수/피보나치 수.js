function solution(n) {
    // 피보나치 함수의 0번째와 1번째 수는 고정
    let fibo = [0n,1n]
    // 자바스크립트가 정수계산을 보장하는 범위
    console.log(Number.MAX_SAFE_INTEGER)
    
    // 2 이상의 n의 수만큼 반복
    for(let i = 2; i <= n; i++){
        fibo[i] = fibo[i-2] + fibo[i-1]
    }
    console.log(fibo[n] % 1234567n)
    return fibo[n] % 1234567n
}