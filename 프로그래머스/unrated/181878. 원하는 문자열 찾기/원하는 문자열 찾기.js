function solution(myString, pat) {
    let low1 = myString.toLowerCase()
    let low2 = pat.toLowerCase()
    if(low1.includes(low2)){
        return 1
    } else {
        return 0
    }
}