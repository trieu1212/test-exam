import readline from 'readline';

const findTwoSum = (arr, target) => {
    var result = [];
    let map = new Map();
    for(let i = 0; i< arr.length; i++){
        let tmp = target - arr[i];
        if(map.has(tmp)) {
            for(let index of map.get(tmp)) {
                result.push([index, i]);
            }
        }

        if(!map.has(arr[i])) {
            map.set(arr[i],[]);
        }
        map.get(arr[i]).push(i)
    }
    return result;
}

const std = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

std.question("Nhập mảng số nguyên: ", (arr) => {
    arr = arr.split(',').map(Number);
    std.question("Nhập số target: ", (target) => {
        console.log(findTwoSum(arr, target));
        std.close();
    })
})