const Excel = require("exceljs");
const fs = require("fs");
let workbook = new Excel.Workbook();


workbook.xlsx.readFile(__dirname + "/competitions.xlsx")
    .then(() => {
        const worksheet = workbook.getWorksheet(1);
        const rows = [];
        for(let i = 0; i < (worksheet.rowCount - 4); i++) {
            const rowBase = worksheet.getRow(i + 5);
            let row = [];
            for(let y = 0; y < 8; y++) {
                if(y === 0 || y === 6 || y === 7) {
                    row.push(rowBase.getCell(y + 2).value);
                }
            }
            rows.push(row);
        }
        let json = JSON.stringify({
            competitions: rows
        });

        fs.writeFileSync("./competitions.json", json);
    });


