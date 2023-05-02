function solution(s){
    let bracket = 0;
    const length = s.length

    for( let i = 0 ; i < length ; i++ ){
        if (s[i] === '(') bracket++;
        else bracket--;

        if(bracket < 0){
            return false;
        }

        if(bracket > length-i){
            return false;
        }
    }

    if(bracket !== 0){
        return false;
    }

    return true;
}