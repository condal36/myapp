var express = require('express');
var router = express.Router();

const MemberModifyMethod = require('../controllers/modify_controller');
memberModifyMethod = new MemberModifyMethod();
router.post('/', function(req, res, next) {
  console.log(req.body.test)
    
});
router.post('/register', memberModifyMethod.postRegister);
router.post('/update', memberModifyMethod.putUpdate);
router.post('/user',memberModifyMethod.selectUser)
module.exports = router;