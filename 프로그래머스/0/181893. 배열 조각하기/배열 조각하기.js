function solution(arr, query) {
    // query를 순회
    // query의 짝수 인덱스에서는 query의 해당 요소번째 인덱스를 arr에서 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버린다
    // query의 홀수 인덱스에서는 query의 해당 번째 인덱스를 arr에서 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버린다
    // 반복 작업 후 남은 arr의 부분 배열을 return
    
    // 1. query.length 만큼 순회
    // 2. 해당 인덱스가 짝수번째인지 홀수번째인지 판별
    console.log(arr)
    console.log(query)
    for(let i = 0; i < query.length; i++) {
        if(i % 2 === 0){
            arr.splice(query[i]+1, arr.length-(query[i]+1)) // 요소를 제외한 뒤에서부터 값 1개 제거
        } else {
            arr.splice(0,query[i]) // 요소를 제외한 앞에서부터 값 1개 제거
        }
    }
    console.log(arr)
    return arr
}