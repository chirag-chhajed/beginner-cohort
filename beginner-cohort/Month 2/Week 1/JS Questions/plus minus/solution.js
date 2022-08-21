function plusMinus(arr) {
    // Write your code here
    let totalNum = arr.length
    let positiveNum = 0
    let negativeNum = 0
    let zeroNum = 0
    for (let i = 0; i < totalNum; i++) {
        if (arr[i] > 0) {
            positiveNum += 1
        }
        if (arr[i] < 0) {
            negativeNum += 1
        }
        if (arr[i] === 0) { zeroNum += 1 }
    }
    let positiveRatio = positiveNum / totalNum
    let negativeRatio = negativeNum / totalNum
    let zeroRatio = zeroNum / totalNum
    console.log(positiveRatio)
    console.log(negativeRatio)
    console.log(zeroRatio)
}