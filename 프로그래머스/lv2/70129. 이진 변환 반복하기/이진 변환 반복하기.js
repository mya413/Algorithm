function solution(s) {
    // let arr = s.split('')
    // let binary = ''
    // console.log(arr)
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i] === '0'){
    //         arr.splice(i,1)
    //         i--
    //     }
    // }
    // binary += arr.length.toString(2)
    // console.log(binary)
    
    // 1. 문자열에서 0 제거
    // 2. 0을 제거한 문자열의 길이를 2진수 변환
    // 3. 위 과정을 최종적으로 '1'이 나올때까지 반복
    let result = [0,0] // [이진변환횟수,제거된 0의 갯수]

    while(s !== '1'){
        s = s.split('') // 배열로 변환
        let leng = s.filter(v => v === '1').length // '1'로만 이루어진 배열의 길이
        result[0]++ // while이 동작하면 이진변환횟수 +1
        result[1] += s.length - leng // '0'이 포함된 배열의 길이 - '1'로만 이루어진 배열의 길이 를 result 2번째 인덱스에 누적
        s = leng.toString(2) // s를 '1'로만 이루어진 배열의 길이의 이진변환으로 업데이트
        // 마지막 줄 실행 후 s에 '1'만 남을 때까지 반복진행
    }
    console.log(result)
    return result
}