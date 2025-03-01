import readline from 'readline';

const check = (s) => {
    var length = s.length;
    
    for(let i = 0; i < length; i++){
        if(s[i] !== s[length - 1 - i]){
            return false;
        }
    }
    return true;
}

const std = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

std.question("nhập chuỗi: ", (s) => {
    console.log(check(s) ? `Chuỗi ${s} là chuỗi đối xứng` : `Chuỗi ${s} không phải là chuỗi đối xứng`);
    std.close();
})