function solution(rsp) {
    // 가위: 2, 바위: 0, 보: 5
    // rsp 문자열에 저장된 가위 바위 보를 이기는 경우를 반환
    let arr = rsp.split('')
    let result = '';
    for(let i=0; i<arr.length; i++){
        if(arr[i].includes('2')){
            result = result + '0'
        } else if(arr[i].includes('0')){
            result = result + '5'
        } else {
            result = result + '2'
        }
    }
    return result
}