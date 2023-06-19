function solution(array) {
    // 오름차순 정렬
    array.sort((a,b)=>a-b);
    let i = Math.floor(array.length / 2)
    return array[i]
}