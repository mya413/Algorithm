function solution(price) {
    // 10만원 이상 --> 5프로 할인
    // 30만원 이상 --> 10프로 할인
    // 50만원 이상 --> 20프로 할인
    return price >= 500000
        ? Math.floor(price - (price * 0.20)) : price >= 300000
        ? Math.floor(price - (price * 0.10)) : price >= 100000
        ? Math.floor(price - (price * 0.05)) : Math.floor(price)
}