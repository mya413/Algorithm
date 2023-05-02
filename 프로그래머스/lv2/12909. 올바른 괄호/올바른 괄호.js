function solution(s){
    // 스택, 큐 문제
    // 스택은 LIFO(Last-In, First-Out)
    // 큐는 FIFO(First-In, First-Out)
    
    let count = 0
    let openB = '('

    // 1. openB(열린괄호) 는 +1을 카운트, 그외(닫힌괄호)는 -1을 카운트 => 0이 되었을때 온전한 괄호가 완성이 된다
    // 2. count가 0 이하(음수)면 온전하지 않은 괄호가 하나라도 발생한것이므로 false 리턴
    // 3. 총 탐색길이에서 현재 요소의 인덱스를 빼면 현재 탐색중인 요소의 문자열 길이가 나옴
    // count > s.length-i --> 열린괄호보다 닫힌괄호가 더 많다는 뜻이므로 false 리턴
    //4. count 가 0이 아닌 경우는 온전한 괄호가 한개도 없는 것이므로 false 리턴
    
    for( let i = 0 ; i < s.length ; i++ ){
        if (s[i] === openB) {
            count++;
        } else {
            count--;
        }

        if(count < 0){
            return false;
        }

        if(count > s.length-i){
            return false;
        }
    }

    if(count !== 0){
        return false;
    }

    return true;
}