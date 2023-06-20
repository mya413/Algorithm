function solution(money) {
    // 빈 배열 선언
    // money를 5500원으로 나눈 몫 ---> 1
    // 그 나눈 몫의 나머지 ---> 0
    
    let result = []
    
    result.push(parseInt(money/5500))
    result.push(money%5500)
    
    return result;
    
}