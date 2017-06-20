/**
 * Created by USRDEL on 19/6/17.
 */

declare var module;
declare var sails;

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

  }

};
