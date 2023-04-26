function solution(n, control) {
    let resultArr = [];
    let arr = control.split('')
    console.log(arr)
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] === 'w'){
            resultArr.push('+1')
        } else if(arr[i] === 's'){
            resultArr.push('-1')
        } else if(arr[i] === 'd'){
            resultArr.push('+10')
        } else {
            resultArr.push('-10')
        }
    }
    return resultArr.map((el)=>Number(el)).reduce((acc,cur)=>acc+cur,n)
}