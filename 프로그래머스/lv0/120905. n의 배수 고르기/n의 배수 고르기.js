function solution(n, numlist) {
    // numlist에서 n의 배수를 찾아 배열로 반환
    let result = [];
    for(let el of numlist){
        if(el % n === 0){
            result.push(el)
        }
    }
    return result;
}