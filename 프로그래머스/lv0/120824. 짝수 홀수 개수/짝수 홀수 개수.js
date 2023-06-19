function solution(num_list) {
    let even = [];
    let odd = [];
    for(let el of num_list){
        if(el%2===0){
            even.push(el)
        } else {
           odd.push(el) 
        }
    }
    return [even.length,odd.length];
}