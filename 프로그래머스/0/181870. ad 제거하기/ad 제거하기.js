function solution(strArr) {
    const word = "ad"
    return strArr.map((el)=>(!el.includes(word) ? el : null)).filter((el)=>el !== null)
}