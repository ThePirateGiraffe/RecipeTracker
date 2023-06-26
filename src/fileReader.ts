const fs = require('fs')
const path = require('path')


const readFile = () => {
    const filePath = path.join('.', 'data', 'chocolate-cake.txt');

    try {
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const lines = fileContents.split('\n');

        for (const line of lines) {
            console.log(line);
            // Perform additional operations with each line here
        }
    } catch (error) {
        console.error(`Error reading file: ${error}`);
    }
}
module.exports = {
    readFile
}
