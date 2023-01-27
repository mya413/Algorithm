function solution(hp) {
    //hp는 자연수, 정수가 아니므로 버림해줘야함 --> Math.floor
    
    // 장군개미 5병력 선언
    let jang = Math.floor(hp / 5);
    // 병정개미 3병력 선언
    let byung = Math.floor((hp - (jang * 5)) / 3);
    // 일개미 1병력 선언
    let il = hp - (jang * 5) - (byung * 3);
    
    // 장+병+일 더하기
    return jang + byung + il;
}