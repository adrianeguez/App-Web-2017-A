/**
 * Created by USRDEL on 1/7/17.
 */
declare var module;

 // Vista/vistaOculta ???????
module.exports = {

  vistaOculta:(req,res)=>{
    return res.view('Oculto/sorpresa')
  },
  homepage:(req,res)=>{
    let parametros = req.allParams();

    sails.log.info("Parametros",parametros);

    if(!parametros.busqueda){
      parametros.busqueda ='';
    }

    //let where = {};

    Usuario
      .find()
      .where({
        or:[
          {
            nombres:{
              contains:parametros.busqueda
              }
          },
          {
            apellidos: {
              contains: parametros.busqueda
            }
          }]
      })
      .exec((err,usuarios)=>{
      if(err) return res.negotiate(err);
      sails.log.info("Usuarios",usuarios);

      return res.view('homepage',{
        usuarios:usuarios
      })
    })
  },
  crearUsuario:(req,res)=>{
      return res.view('crearusuario')
  },
  editarUsuario:(req,res)=>{
    return res.view('editarusuario')
  }

};






