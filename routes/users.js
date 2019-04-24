var express = require('express');
var router = express.Router();
var User=require('../Model/User');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/add',function(req,res,next){
  res.render('users/add');
})
router.post('/add',function(req,res){
  var user=new User()
  user.firstname=req.body.firstname;
  user.lastname=req.body.lastname;
  user.email=req.body.email;
  user.city=req.body.city;
  user.state=req.body.state;
  user.zipcode=req.body.zipcode;
  user.save(function(err,rtn){
    if (err)throw err;
    console.log(rtn);
    res.redirect('/');
  })

})
router.get('/list',function(req,res){
  User.find({},function(err,rtn){
    if (err)throw err;
    console.log(rtn);
    res.render('users/list',{user:rtn});
  })

})
module.exports = router;
