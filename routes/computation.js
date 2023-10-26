var express = require('express');
var router = express.Router();
var cd;
router.get('/', function(req, res, next) {
    var t=req.query.t;
    if(t !== undefined){
        cd = parseFloat(t);
    }
    else{
        cd = Math.log(t);
    }
    

    const RV = Math.random();

    const result1 = Math.log(RV);
    const result2 = Math.log10(RV);

    const response =
                `Math.log applied to ${RV} is ${result1}` + `Math.log10 applied to ${RV} is ${result2}` ;

                res.send(response);

});
module.exports = router;
