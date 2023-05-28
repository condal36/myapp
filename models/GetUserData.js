const db = require('./connection_db');

module.exports = function GetUserData(userid) {
    let result = {};
    return new Promise((resolve, reject) => {
        console.log('Search ',userid,'\'s everydaylife data on Time:',userid.time);
        db.query('Select * from everydaylife WHERE UserID = ?', [userid.id], function (err, rows) {
            if (err) {
                console.log(err);
                result.status = "會員資料查詢失敗。"
                result.err = "伺服器錯誤，請稍後在試！"
                reject(result);
                return;
            }
            result.status = "會員資料查詢成功。"
            result.data=rows;
            resolve(result)
        })
    })
}