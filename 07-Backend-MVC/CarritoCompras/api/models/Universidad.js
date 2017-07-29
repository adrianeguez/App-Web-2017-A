/**
 * Universidad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreCasual:{
      type:'string',
      required:true
    },
    nombreInstitucional:{
      type:'string',
      unique:true,
      required:true
    },
    direccion:{
      type:'string'
    },
    estado:{
      type:'string',
      enum:['Abierto','Cerrado','Clausurado'],
      defaultsTo:'Cerrado'
    }
  }
};

