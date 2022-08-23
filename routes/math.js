var express = require('express');
var router = express.Router();

/* GET users listing. 
  http://localhost:3000/math?operacao=soma&valorA=10&valorB=20
*/
router.get('/', function(req, res, next) {
  var operacao = req.query['operacao'];
  var valorA = parseInt(req.query['valorA'], 0);
  var valorB = parseInt(req.query['valorB'], 0);
  if (operacao == 'soma')
    res.render('math', { title: 'Resultado', resultado: String(valorA + valorB) });
  else
  {
    if (operacao == 'subtracao')
    res.render('math', { title: 'Resultado', resultado: String(valorA - valorB) });
    else
      res.send("operação desconhecida");
  }
});

module.exports = router;
