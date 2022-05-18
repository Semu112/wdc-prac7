var express = require('express');
var router = express.Router();

module.exports = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('*', function(req, res, next){
  console.log("POST from a user");

  let contentType = req.get('Content-type');

  if(contentType == "application/json"){
    next();
  }
  else{
    res.sendStatus(412);
  }
});

let posts = []

router.post('/addpost', function(req, res, next){
  let newPost = {}
  newPost.title = req.body.title;
  newPost.content = req.body.content;

  posts.push(newPost);

  res.send();
})

router.get('/getposts', function(req, res, next){

  res.json(posts);
})