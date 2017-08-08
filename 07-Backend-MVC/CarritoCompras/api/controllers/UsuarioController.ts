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


  },
  editarUsuario:(req,res)=>{

    let parametros = req.allParams();

      if(parametros.nombres&&
         parametros.apellidos&&
         parametros.correo&&
         parametros.id){

        Usuario.update({
          id:parametros.id
        },{
          nombres:parametros.nombres,
          apellidos:parametros.apellidos,
          correo:parametros.correo
        })
          .exec((err,usuarioEditado)=>{
          if(err) return res.serverError(err);
          if(usuarioEditado){
            //Si encontro
            return res.redirect("/")
          }else{
            //No encontro
            return res.notFound()
          }
        })
      }else{
        return res.badRequest()
      }




  },
  AnadirUsuarioCarrito:(req,res)=>{
    let parametros = req.allParams();

    if(parametros.id){
      let cookies = req.cookies;

      if(cookies.arregloUsuarios){

        let arregloUsuarios = cookies.arregloUsuarios;

        let existeUsuario = arregloUsuarios.find(
          (idUsuario)=>{
            return idUsuario == parametros.id;
          }
        );

        if(existeUsuario){

          return res.redirect('/');

        }else{

          arregloUsuarios.push(parametros.id);
          return res.redirect('/');

        }


      } else{
        let arregloUsuarios = [];
        arregloUsuarios.push(parametros.id);
        res.cookie('arregloUsuarios',{
          idsCliente:arregloUsuarios
        });
        return res.redirect('/');
      }

    }else{
      return res.badRequest('No envia parametros');
    }






  }

};
