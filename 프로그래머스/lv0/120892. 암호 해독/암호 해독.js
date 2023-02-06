function solution(cipher, code) {
    // 문자열 cipher
    // code의 배수번째 문자만 출력
    
    // cipher에서 code 배수번째로 출력된 새로운 문자열을 반환
    
    // 새로운 문자열 반환?
    let result = '';
    // code 배수번째를 어떻게 추출?
    for(let i=code-1; i<cipher.length; i+=code){
        result = result + cipher[i]
    }
    return result;
}