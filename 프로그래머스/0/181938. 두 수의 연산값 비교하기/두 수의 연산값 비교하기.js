function solution(a, b) {
    const strA = String(a);
    const strB = String(b);
    let str = `${strA}${strB}`
    let multiply = 2 * a * b
    
    if(str === multiply || str > multiply){
        return Number(str);
    } else {
        return multiply;
    }
}