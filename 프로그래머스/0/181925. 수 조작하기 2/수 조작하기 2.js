function solution(numLog) {
    let arr = [];

    for(let i=0; i<numLog.length; i++){
        const el = numLog[i+1]-numLog[i]
        if(el === 1){
            arr.push('w');
        } else if(el === -1){
            arr.push('s');
        } else if(el === 10){
            arr.push('d');
        } else if(el === -10){
            arr.push('a');
        }
    }
    
    return arr.join('')
}
