import fs from 'fs'

fs.readFile('data.json', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
        return;
    }

    try {
        const jsonData = JSON.parse(data)
        const miniData = JSON.stringify(jsonData)
        fs.writeFileSync('miniData.json', miniData)
    } catch (error) {
        console.log(error)
    }
})