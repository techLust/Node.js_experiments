const xlsx = require('xlsx')


// const dataSheet = readXl.readFile('./Reports_13102022 - All.xlsx')
// // console.log(dataSheet)
// const convertJSON = readXl.utils.json_to_sheet()
// console.log(convertJSON)

const workbook = xlsx.readFile('./Reports_13102022 - All.xlsx');  // Step 2
let workbook_sheet = workbook.SheetNames;                // Step 3
let workbook_response = xlsx.utils.sheet_to_json(        // Step 4
  workbook.Sheets[workbook_sheet[0]]
);

console.log(workbook_response)

// let filename = (Math.random() + 1).toString(36).substring(7);
// console.log(filename);

const list = 'I have my user account @phicode it is blocked by @tcs '
const extractedList = list.split(' ').filter(userName => {
    if(userName.startsWith('@')) return userName
});
// const usersName = extractedList.filter(userName => {
//     if(userName.startsWith('@')){
//         return userName
//     }
// })
console.log(extractedList);