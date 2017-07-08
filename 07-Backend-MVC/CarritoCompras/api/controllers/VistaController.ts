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

    let usuarioModelo = {
      nombres:"Adrian",
      apellidos:"Eguez",
      id:1,
    };

    return res.view('homepage',{
      usuario:usuarioModelo
    })



  }

};
