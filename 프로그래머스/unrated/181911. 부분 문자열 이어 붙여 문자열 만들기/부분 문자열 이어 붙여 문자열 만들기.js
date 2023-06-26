function solution(my_strings, parts) {
    let result = '';
    for(let i=0; i<my_strings.length; i++){
        for(let j=0; j<1; j++){
            let sliced = my_strings[i].slice(parts[i][0],(parts[i][1]+1))
            result = result + sliced
        }
    }
    return result;
}