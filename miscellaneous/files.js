import fs from 'fs'
import os from 'os'

const filePath = './test/test1/abc.txt'


console.log('Platform: ', os.platform())
console.log('Type: ', os.type())
console.log('Release: ', os.release())
console.log('Total memory: ', os.totalmem(), 'mb')
console.log('Home dir: ', os.homedir())

const files = fs.readdir(`${os.homedir()}/workdir`, (err, data) => {
    if (err) console.log(err)
    if (data) {
        console.log(data)
    }
})

import { exec } from 'child_process';

// Shutdown Linux
exec('shutdown -h now', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log('System is shutting down...');
});


// fs.unlink(filePath, (err) =>{ 
//     if(err) console.log(err)
//     console.log('File deleted successful')
// })
