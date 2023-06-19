function solution(n, k) {
    // 양꼬치 계산
    // 음료수 계산
    // 양꼬치 10인분 먹은만큼 서비스 --> 10을 나눈 몫 만큼 빼주기
    
    let yang = n * 12000
    let umm = k * 2000
    let ser = parseInt(n / 10) * 2000
    
    result = yang + umm - ser
    return result;
    
    
}