function solution(babbling) {
    // 배열 내 문자열을 순회하고, 해당 문자열일 경우 빈 문자열로 치환
    // 빈 문자열인 요소들의 길이를 리턴 --> 조합하여 할 수 있는 옹알이의 총 갯수
    return babbling.map((el)=>el.replace(/aya|ye|woo|ma/g,'')).filter(el=>el==='').length
}