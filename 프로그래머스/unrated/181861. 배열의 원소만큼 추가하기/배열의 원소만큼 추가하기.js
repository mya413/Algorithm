function solution(arr) {
    let result = []
    let leng = arr.length
    for(let i=0; i<leng; i++){
        for(let j=0; j<arr[i]; j++){
            result.push(arr[i])
        }
    }
    return result
}