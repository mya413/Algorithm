function solution(arr1, arr2) {
    let leng1 = arr1.length
    let leng2 = arr2.length
    if(leng1 > leng2){
        return 1
    }
    if(leng1 < leng2) {
        return -1
    }
    if(leng1 === leng2){
        let result1 = arr1.reduce((a,c)=>a+c,0)
        let result2 = arr2.reduce((a,c)=>a+c,0)
        if(result1 > result2){
            return 1
        } else if(result1 < result2){
            return -1
        } else{
            return 0
        }
    }
}