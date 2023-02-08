function solution(my_string) {
    let num = my_string.match(/[0-9]+/g)
    let str = my_string.match(/[a-z]+/gi)
    if(!num){
        return 0;
    }
    let result  = num.reduce((acc,cur)=>acc+Number(cur),0);
    return result;
}