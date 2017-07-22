// Vista/vistaOculta ???????
module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    },
    homepage: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        //let where = {};
        Usuario
            .find()
            .where({
            nombres: {
                contains: parametros.busqueda
            }
        })
            .exec(function (err, usuarios) {
            if (err)
                return res.negotiate(err);
            sails.log.info("Usuarios", usuarios);
            return res.view('homepage', {
                usuarios: usuarios
            });
        });
    },
    crearUsuario: function (req, res) {
        return res.view('crearusuario');
    }
};
