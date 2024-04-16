function solution(a, b, c) {
    const sum = (a+b+c)
    const doubleSum = (Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2))
    const tripleSum = (Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3))

    if(a===b&&a===c&&b===c){
        return sum * doubleSum * tripleSum
    } else if(a===b||a===c||b===c){
        return sum * doubleSum
    } else {
        return sum
    }
}