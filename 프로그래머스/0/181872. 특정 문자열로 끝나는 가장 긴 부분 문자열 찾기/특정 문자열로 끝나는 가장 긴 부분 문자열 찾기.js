function solution(myString, pat) {
    const result = [...myString].slice(0,myString.lastIndexOf(pat)+pat.length);
    return result.join('');
}