const fs = require('fs');
const path = require('path')



function dbUpdate(id, infoArray) {
    const deletedInfo = id;
    for (let i = 0; i < infoArray.length; i++) {
        if (deletedInfo === infoArray[i].id) {
                infoArray.splice(i, 1);
                fs.writeFileSync(
                path.join(__dirname, "../db/db.json"),
                JSON.stringify({info: infoArray}, null, 2), err => {
                    if(err) {
                      throw err;
                    }
                });
            }
        }
    }




function writeNote(body, infoArray) {
    const newInfo = body
    infoArray.push(newInfo);
    fs.writeFileSync(
        path.join(__dirname, ""),
        JSON.stringify({notes: infoArray}, null, 2)
    );
    return newInfo;

};

module.exports = {
    dbUpdate,
    writeNote,
};