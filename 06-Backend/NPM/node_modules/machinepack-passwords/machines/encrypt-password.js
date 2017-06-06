module.exports = {


  friendlyName: 'Encrypt password',


  description: 'Encrypt a string using the BCrypt algorithm.',


  extendedDescription: 'This is particularly useful for encrypting user passwords before storing them in the database.',


  inputs: {

    password: {
      example: 'l0lcatzz',
      friendlyName: 'Password',
      description: 'String to be encrypted',
      required: true,
      protect: true
    }

  },


  exits: {

    success: {
      example: '2$a492.abc3fadifhoi3hesdqd',
      description: 'Password was successfully encrypted.'
    },

    error: {
      description: 'An unexpected error occured.'
    }

  },


  fn: function(inputs, exits) {
    require('bcrypt-nodejs').hash(inputs.password, null , null, function(err, hash) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(hash);
    });
  }

};
