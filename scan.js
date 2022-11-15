const fs = require('fs');

const streamRead = fs.createReadStream('log.log');

streamRead.on('data', function (chunk){
    let logs = chunk.toString().split(',\n');
    //console.log(log);
    analiz(logs)
});

function analiz(arrLogs){
    let count = 0,
        countWin = 0,
        countLost = 0,
        ratio = 0;
    arrLogs.forEach(log => {
        if(log){
            let logObj = JSON.parse(log);
            count++;
            logObj.result ? countWin++ : countLost++;
        }
    });
    console.log('Результат анализа логов');
    console.log(`Общее количество партий: ${count}`)
    console.log(`Выиграно: ${countWin} / Проиграно: ${countLost} `)
    console.log(`Процент побед: ${Math.round(countWin / countLost * 100)}%`)
}