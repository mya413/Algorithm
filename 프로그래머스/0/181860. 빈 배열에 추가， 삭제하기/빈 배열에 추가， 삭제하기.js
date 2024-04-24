function solution(arr, flag) {
    let result = [];

    flag.forEach((el,idx) => {
        if(el){
            for(let i = 0; i < arr[idx] * 2; i++){
                result.push(arr[idx])
            }
        }

        if(!el){
            for(let i=0; i < arr[idx]; i++){
                result.pop()
            }
        }
    });

    return result;
}