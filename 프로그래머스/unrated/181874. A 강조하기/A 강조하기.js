function solution(myString) {
    let lower = myString.toLowerCase()
    if(myString.includes('a')){
        return lower.replaceAll('a', 'A')
    } else if(myString.includes('A')){
        return lower.replaceAll('a', 'A')
    } else {
        return lower
    }
}