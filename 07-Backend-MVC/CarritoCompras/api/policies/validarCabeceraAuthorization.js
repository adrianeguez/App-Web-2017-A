
module.exports = function(req, res, next) {

  console.log(res.header("Authorization"));

  if(res.header("Authorization")){
    return next() //Tienes permiso
  }else{
    return res.forbidden("No tiene cabecera de Autorizacion") //Redirigirle al error 403!
  }

};
