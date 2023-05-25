function solution(num_list) {
    let paste = num_list.slice()
    let last = paste[paste.length-1]
    let secLast = paste[paste.length-2]
    if(last > secLast){
        paste.push(last - secLast)
        return paste
    }
    if(last <= secLast) {
        paste.push(last * 2)
        return paste
    }
}