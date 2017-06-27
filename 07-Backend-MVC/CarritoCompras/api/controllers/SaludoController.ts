/**
 * Created by USRDEL on 19/6/17.
 */

declare var module;
declare var sails;
declare var Usuario;

// /Saludo/crearUsuarioQuemado

module.exports = {

  welcome:(req,res)=>{

    sails.log.info(req.method);

    if(req.method=="POST"){
      return res.json({saludo:"hola"})
    }else{
      return res.send("Error")
    }



  },
  bienvenido:(req,res)=>{

    //PUT

    return res.send("Hola")

  },
  crearUsuarioQuemado:(req,res)=>{

    let nuevoUsuario = {
      nombres:"Adrian",
      apellidos:"Eguez",
      password:"1234",
      correo:"1@1.com",
      fechaNacimiento:new Date()
    };

       Usuario.create(nuevoUsuario)
              .exec(
                (error,usuarioCreado)=>{
                  if(error){
                    return res.serverError(error);
                  }else{
                    return res.ok(usuarioCreado);
                  }
        }
      )



  }


};
