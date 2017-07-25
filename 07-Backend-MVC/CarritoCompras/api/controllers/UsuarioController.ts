/**
 * Created by USRDEL on 22/7/17.
 */
/**
 * Created by USRDEL on 19/6/17.
 */

declare var module;
declare var sails;
declare var Usuario;

//    localhost:1337/Usuario/metodos

module.exports = {

  eliminarUsuario:(req,res)=>{

    let params = req.allParams();
    sails.log.info("Parametros",params);

    if(req.method=="POST"&&params.id){

      Usuario.destroy({
        id:params.id
      }).exec((err,usuarioBorrado)=>{
        if(err) return res.serverError(err);
        return res.redirect("/")
      })

    }else{
      return res.badRequest();
    }


  }

};
