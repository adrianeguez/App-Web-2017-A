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

    Usuario.find().exec((err,usuarios)=>{
      if(err) return res.negotiate(err);
      sails.log.info("Usuarios",usuarios);

      return res.view('homepage',{
        usuarios:usuarios
      })
    })
  },
  crearUsuario:(req,res)=>{
      return res.view('crearusuario')
  }

};






