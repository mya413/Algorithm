function solution(my_string) {
//     let result = 0;
//     for(let el of my_string){
//         if(!isNaN(el)){
//             result = result + Number(el)
//         }
//     }
//     return result;
    
    // 정규식 사용해서 풀기
    // 문자열에 0~9까지의 숫자를 탐색 --> reduce(acc, cur) : 누적값과 현재값을 계속 더함
    return my_string.match(/[0-9]/g).reduce((a,b) => Number(a)+Number(b));
}