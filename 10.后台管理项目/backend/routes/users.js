var express = require('express');
var router = express.Router();
const { createToken } = require('../utils/jwt')

/* GET users listing. */
router.get('/token', function(req, res, next) {
  const { username, password } = req.query
  if ( !username || !password ) {
    res.send({code: -1, message: '缺少参数'})
  } else {
    res.send(createToken({
      username,
      password
    }))
  }
});

router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
