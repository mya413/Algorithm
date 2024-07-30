function solution(str1, str2) {
    const result = [...str1].map((el,i)=>el+[...str2][i])
    return result.join('')
}