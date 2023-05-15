function solution(progresses, speeds) {
    // progresses 1번 인덱스와 speeds 1번 인덱스가 상응
    // progresses 인덱스 수가 100이 되면 pop
    // 앞의 인덱스가 pop이 되기전까지 뒤에 인덱스는 pop 될 수 없음

    //1. 100까지 걸리는 일수 계산
    let days = []
    for(let i = 0; i < progresses.length; i++) {
        days.push(Math.ceil((100-progresses[i]) / speeds[i]));
    }
    console.log(days)

    //2. 한번에 배포한 갯수 계산
    let deployNum = 1
    let result = []
    let firstwork = days[0]
    
    for(let i=1; i<progresses.length; i++) {
        if(firstwork >= days[i]) { // 일수가 앞의 인덱스가 더 크거나 같을 경우 -> 배포된 갯수 누적
            deployNum += 1
        } else { // 뒤에 인덱스가 더 클 경우 -> 앞의 인덱스가 처리가 다 된 것이므로 바로 갯수 입력
            result.push(deployNum)
            deployNum = 1 // 갯수 초기화
            firstwork = days[i] // 처리 안된 다음 인덱스 진행
        }
    }
    result.push(deployNum) // 
    return result
}