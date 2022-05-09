var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

let posts = []

router.post('/addpost', function(req, res, next){
  let newPost = {}
  newPost.title = req.body.title;
  newPost.content = req.body.content;

  posts.push(newPost);

  console.log(posts);

  res.send();
})

router.get('/getposts', function(req, res, next){

  console.log(posts);

  res.send(posts);
})