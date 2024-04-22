function solution(order) {
    let count = 0;
    const three = '3';
    const six = '6';
    const nine = '9';
    const arr = String(order).split('');

    arr.forEach((v)=>{v === three || v === six || v === nine ? count++ : count})
    return count;
}