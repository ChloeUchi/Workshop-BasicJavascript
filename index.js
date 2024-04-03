const { rejects } = require('node:assert');
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     rl.close();
// });


const { resolve } = require("styled-jsx/css");

async function main() { //ใช้กับการ callback ต่างๆ เช่น
    try {
        let value = new Promise((resolve, reject) => {
            rl.question('What - s your name ?', (name) => {
                if (name === "Cake") {
                    resolve(name);
                } else {
                    reject("Error");
                }
                rl.close();
            });
        });
        console.log('My name is ${ value }');
    } catch (e) {
        console.log(e);
    }
}