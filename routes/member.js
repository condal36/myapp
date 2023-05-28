var express = require('express');
var router = express.Router();

const MemberModifyMethod = require('../controllers/modify_controller');
memberModifyMethod = new MemberModifyMethod();
router.post('/register', memberModifyMethod.postRegister);


router.post('/', function(req, res, next) {
  console.log(req.body.test)
    
});

module.exports = router;