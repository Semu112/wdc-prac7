var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/brew', function(req, res, next){

  let drink = req.query.drink;

  if(drink == 'tea'){
    res.send('A delicious cup of tea!');
  }
  else if(drink == 'coffee'){
    res.send(418);
  }
  else{
    res.send(400);
  }

})

let responses = ['first'];

router.post('/pass-it-on', function(req, res, next){

  let message = req.body.message;

  if(!("message" in req.body) || message == ''){
    res.send(400);
  }
  else{
    responses.unshift(message);
    res.send(responses[1]);
  }

})

router.post('/combine', function(req, res, next){

  let suffix = req.body.suffix;
  let lines = req.body.lines;

  let combined = '';

  for(let i = 0; i<lines.length; i++){
    combined = combined + lines[i] + suffix + "\n";
  }

  res.send(combined);

})