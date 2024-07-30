function solution(my_string, indices) {
    const filtered = [...my_string].filter((_,i)=>!indices.includes(i));
    const result = filtered.join('');
    return result
}