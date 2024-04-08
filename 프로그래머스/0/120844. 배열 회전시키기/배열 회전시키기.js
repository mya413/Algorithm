function solution(numbers, direction) {
    if(direction === "left"){
        const el = numbers[0]
        numbers.push(numbers.shift(el))
    } else {
        numbers.unshift(numbers.pop())
    }

    return numbers
}