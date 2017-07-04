/**
 * JWTController
 *
 * @description :: Server-side logic for managing JWTS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var jwt = require("jsonwebtoken");

module.exports = {

  Emitir:function(req,res){

    var parametros = req.allParams();

    if(parametros.id){


      // (Tiempo de Validez)
      // ( DATO -> TOKEN, ID )
      // ( SECRETO )

      var token = jwt.sign({
        exp: 1500000000,
        data: {
          id:parametros.id
        }
      }, 'mi mama me mima');

      return res.ok(token);

    }else{
      return res.badRequest("No envia ID");
    }

  }


};

