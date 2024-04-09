function solution(arr, intervals) {
    const arr1 = intervals[0]
    const arr2 = intervals[1]
    return [...arr.slice(arr1[0],arr1[1]+1),...arr.slice(arr2[0],arr2[1]+1)]
}