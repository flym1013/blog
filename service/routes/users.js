var express = require('express');
var router = express.Router();
const UserService = require('../services/UserService');
let userService = new UserService();


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  userService.getUserList().then((data)=>{
    res.json({
      code:0,
      msg:'OK',
      data:data
    })
  });
  console.log(req.query)
  // res.send('respond with a resource');
});

module.exports = router;
