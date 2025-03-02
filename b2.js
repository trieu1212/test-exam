import readline from 'readline';

const findTwoSum = (arr, target) => {
    const result = [];
    const obj = {};
    for(let i=0; i < arr.length; i++) {
        const r = target - arr[i];
        if(obj[arr[i]] && obj[arr[i]] !== i) {
            result.push([+obj[arr[i]], +i]);
        } else {
            obj[r] = i;
        }
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