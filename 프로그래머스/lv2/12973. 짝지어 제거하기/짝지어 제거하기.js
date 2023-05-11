function solution(s){
    // 스택문제
    // 배열 안의 문자와 지금 들어가는 문자가 같은지 비교
    
    // 문자열 길이가 홀수면 짝지어지지 않으므로 일단 예외처리
    if(s.length % 2 !==0){
        return 0;
    }

    let arr = [];
    for(let i=0; i<s.length; i++){
        arr.push(s[i]) // 배열안에 일단 집어넣기
        // 배열에 가장 마지막 문자열과 그다음 문자열이 같은지 비교
        if(arr[arr.length-1] === arr[arr.length-2]){
            // 같으면 짝지어 제거이므로 2번 제거
            arr.pop()
            arr.pop()
        }
    }
    return arr.length === 0 ? 1 : 0
}