function solution(numbers) {
    // let result = 0;
    // for(let i=0; i<numbers.length; i++){
    //     result = result + numbers[i]
    // }
    // return result / numbers.length;
    
    // let result = 0;
    // for(i of numbers) { // 배열이니까 for of 써보자!
    //     result = result + i
    // }
    // return result / numbers.length;
    
    // let result = 0;
    // for(i in numbers){
    //     result = result + numbers[i]
    // }
    // return result / numbers.length;
    
    let result = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    // reduce((누적값,현재값) => 누적값 + 현재값, 초기값)
    return result;
}