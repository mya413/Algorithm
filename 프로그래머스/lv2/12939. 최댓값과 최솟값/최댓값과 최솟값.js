function solution(s) {
    let arr = s.split(' ')
    let result = '';
    // 배열을 순회해서 첫번째 인덱스 요소와 두번째 인덱스 요소를 비교 --> 반복문 2번 진행
    // 조건1: 최대값
    // 조건2: 최소값
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    return result = `${min} ${max}`
}