/**
 * Matricula.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    horaFechaInicioMatriculacion:{
      type:'datetime'
    },
    horaFechaFinMatriculacion:{
      type:'datetime'
    },
    estado:{
      type:'string',
      enum:['Matriculado','Pendiente','Denegado'],
      defaultsTo:'Pendiente'
    },
    fkIdPeriodoAcademico:{
      model:'PeriodoAcademico',
      required:true
    },
    fkIdUsuario:{
      model:'Usuario',
      required:true
    },
    materiasMatriculas:{
      collection:'MateriaMatricula',
      via:'fkIdMatricula'
    }
  }
};

