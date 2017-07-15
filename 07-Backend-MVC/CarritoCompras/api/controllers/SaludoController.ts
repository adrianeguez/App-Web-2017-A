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

    // http://localhost:1337/Saludo/crearUsuarioQuemado
    // /Saludo/crearUsuarioQuemado ->RELATIVE PATH

    let parametros = req.allParams();

    sails.log.info("Parametros",parametros);


    //  Ejemplo para crear por parametros query

    // http://localhost:1337/Saludo/crearUsuarioQuemado?nombres=Vicente&fechaNacimiento=2016-01-02


    let nuevoUsuario = {
      nombres:parametros.nombres,
      apellidos:parametros.apellidos,
      password:parametros.password,
      correo:parametros.correo,
      fechaNacimiento:parametros.fechaNacimiento
    };

    // 1 - Query Parameters ?nombre=Adrian&apellidos=Eguez

    // 2 - Forms Parameters


    /*let nuevoUsuario = {
      nombre:"Adrian",
      apellidos:"Eguez",
      password:"1234",
      correo:"1@1.com",
      fechaNacimiento:new Date()
    };
    */

    // NombreModelo.metodo(parametros).exec((err,registros)=>{})

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
