const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path')
const fs = require('fs')

let instance = null

class ExportCSVSingletonClass {
    constructor() {
        this.value = Math.random(100)
    }

    printValue() {
        console.log(this.value);
    }

    exportCSV(data, filename) {


        return new Promise((resolve, reject) => {

            const folders = filename.split(path.sep).slice(0, -1)
            console.log(folders.length);
            if (folders.length) {
                // create folder path if it doesn't exist
                folders.reduce((last, folder) => {
                    const folderPath = last ? last + path.sep + folder : folder
                    if (!fs.existsSync(folderPath)) {
                        console.log(folderPath);
                        fs.mkdirSync(folderPath)
                    }
                    return folderPath
                })
            }

            var mykeys;
            mykeys = Object.keys(data[0]._doc);
            var headerArr = [];
            mykeys.forEach((val) => {
                headerArr.push({ 'id': val, 'title': val });
            })

            const csvWriter = createCsvWriter({
                path: filename,
                header: headerArr
            });

            csvWriter
                .writeRecords(data)
                .then(() => resolve(true))
                .catch((err) => reject(err));
        });
    }

    static getInstance() {
        if (!instance) {
            instance = new ExportCSVSingletonClass()
        }

        return instance
    }
}

module.exports = ExportCSVSingletonClass