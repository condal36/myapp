const db = require('./connection_db');

module.exports = function everydaylifeupdate(memberUpdateData) {
    let result = {};
    return new Promise((resolve, reject) => {
        console.log('UpdateUser ',memberUpdateData.id,'\'s Message Setting:',memberUpdateData.enablemessage);
        db.query('UPDATE everydaylife SET enablemessage=? WHERE UserID = ?', [memberUpdateData.enablemessage, memberUpdateData.id], function (err, rows) {
            if (err) {
                console.log(err);
                result.status = "會員資料更新失敗。"
                result.err = "伺服器錯誤，請稍後在試！"
                reject(result);
                return;
            }
            result.status = "會員資料更新成功。"
            result.memberUpdateData = memberUpdateData
            resolve(result)
        })
    })
}