
module.exports = function(req, res, next) {

  console.log(req.headers);

  if(req.headers.authorization){
    return next() //Tienes permiso
  }else{
    return res.forbidden("No tiene cabecera de Autorizacion") //Redirigirle al error 403!
  }

};
