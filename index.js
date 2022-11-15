const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({input, output})
const random = Math.random() * 10 > 5 ? 2 : 1;

rl.question('Введите 1 или 2 \n', (answer) => {
    let res;
    if(answer == random){
        console.log('Правильно');
        res = true;
    }else{
        res = false;
        console.log(`Неверно. Правильный ответ: ${random}`);
    }
    let log = {
        start: '#',
        random: random,
        answer: parseInt(answer) ? parseInt(answer) : "NaN" ,
        result: res
    }
    fs.appendFile('log.log', `${JSON.stringify(log)},\n`, (err) => {
        if (err) throw err;
        console.log('Лог создан!');
    });
    rl.close();
})

// console.log(random);