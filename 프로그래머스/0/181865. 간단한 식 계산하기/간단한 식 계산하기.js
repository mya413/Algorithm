function solution(binomial) {
    let result = 0;
    const arr = binomial.split(' ');

    for(let i = 0; i<arr.length; i++) {
        const op = arr[1]

        if(op === '+'){
            result = Number(arr[0]) + Number(arr[2])
        } else if(op === '-'){
            result = Number(arr[0]) - Number(arr[2])
        } else {
            result = Number(arr[0]) * Number(arr[2])
        }
    }
    
    return result;
}