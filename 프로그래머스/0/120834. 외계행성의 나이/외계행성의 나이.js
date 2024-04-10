function solution(age) {
    // a b c d e f g h i j
    // 0 1 2 3 4 5 6 7 8 9
    const alphabet = ['a','b','c','d','e','f','g','h','i','j']
    let result = [...String(age)]
    return result.map((el)=>alphabet[el]).join('');
}