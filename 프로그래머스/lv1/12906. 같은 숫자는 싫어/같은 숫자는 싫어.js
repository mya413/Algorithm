function solution(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i])
        if(result[result.length-1] === result[result.length-2]){
            result.pop()
        }
    }
    return result
}