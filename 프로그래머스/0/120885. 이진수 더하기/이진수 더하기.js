function solution(bin1, bin2) {
    let binary1 = parseInt(bin1, 2);
    let binary2 = parseInt(bin2, 2);
    let result = binary1 + binary2;
    return result.toString(2)
}