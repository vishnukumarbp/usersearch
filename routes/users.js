const express = require('express');
const router = express.Router();
const userDetail = require('../middleware/userModel.js');


/* GET users listing. */
router.get('/', function (req, res) {
  userDetail.find({}, (err, users) => {
    res.render('index', {
      title: users
    });
  });
});


router.get('/search/:type/:qry', function (req, res) {
  const searchQry = {};
  let type = req.params.type;
  let qry = req.params.qry;
  if (type == "skills") {
    searchQry[type] = new RegExp('^' + qry + '$', "i");
  } else {
    searchQry[type] = new RegExp('^.*' + qry + '*.$', "i");
  }
  userDetail.find(searchQry, (err, users) => {
      res.send({ 'users': users });
  });
});

module.exports = router;
