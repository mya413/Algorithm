function solution(s1, s2) {
//     let arr1 = [];
//     let arr2 = [];
//     let result = 0;
    
//     for(let el1 of s1){
//         arr1.push(el1);
//             for(let el2 of s2){
//                 arr2.push(el2)
//                 if(el1===el2){
//                     result++
//                 }
//             }
//         }
//     return result;
    
    return s1.filter((el) => s2.includes(el)).length;
}