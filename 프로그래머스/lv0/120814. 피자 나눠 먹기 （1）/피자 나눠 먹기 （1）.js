function solution(n) {
    // 피자는 1판당 7조각이 나온다
    // n명의 사람이 최소 1조각 먹어야됨
    return Math.ceil(n / 7)
}