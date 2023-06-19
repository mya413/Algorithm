function solution(sides) {
    // sides.length = 3 --> 선분이 3개
    
    // 가장 긴 변 구하기
    // 다른 두 변의 합 구하기
    // 그 둘의 값을 비교
    
    sides.sort((a,b)=>a-b);
    return sides[0] + sides[1] <= sides[2] ? 2 : 1
    // 오름차순 정리 후 풀이
}