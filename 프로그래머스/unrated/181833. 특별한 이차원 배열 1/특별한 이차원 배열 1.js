function solution(n) {
    let result = [];
    for(let i=0; i<n; i++){
        let cells = []
        for(let j=0; j<n; j++){
            if(i===j){
                cells.push(1)
            } else {
                cells.push(0)
            }
        }
        result.push(cells)
    }
    console.log(result)
    return result;
}