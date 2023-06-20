function solution(arr, n) {
    // arr.length % 2 !== 0 ? arr의 모든 짝수 인덱스 위치에 n을 더한 배열
    // arr.length % 2 === 0 ? arr의 모든 홀수 인덱스 위치에 n을 더한 배열
    let result = []
    let leng = arr.length
    for(let i=0; i<leng; i++){
        if(leng%2===0 && i%2===1){
            arr[i] = arr[i] + n
        }
        if(leng%2===1 && i%2===0){
            arr[i] = arr[i] + n
        }
    }
    return arr
}