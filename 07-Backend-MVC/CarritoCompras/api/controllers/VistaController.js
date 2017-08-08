// Vista/vistaOculta ???????
module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    },
    homepage: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        if (!parametros.busqueda) {
            parametros.busqueda = '';
        }
        //let where = {};
        Usuario
            .find()
            .where({
            or: [
                {
                    nombres: {
                        contains: parametros.busqueda
                    }
                },
                {
                    apellidos: {
                        contains: parametros.busqueda
                    }
                }
            ]
        })
            .exec(function (err, usuarios) {
            if (err)
                return res.negotiate(err);
            var cookies = req.cookies;
            if (cookies.arregloUsuarios) {
                var arregloUsuarios = cookies.arregloUsuarios.idsCliente;
                return res.view('homepage', {
                    usuarios: usuarios,
                    arregloUsuarios: arregloUsuarios
                });
            }
            else {
                return res.view('homepage', {
                    usuarios: usuarios
                });
            }
        });
    },
    crearUsuario: function (req, res) {
        return res.view('crearusuario');
    },
    editarUsuario: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            Usuario.findOne({
                id: parametros.id
            })
                .exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.serverError(err);
                if (usuarioEncontrado) {
                    //Si encontro
                    return res.view('editarusuario', {
                        usuario: usuarioEncontrado
                    });
                }
                else {
                    //No encontro
                    return res.redirect('/crearUsuario');
                }
            });
        }
        else {
            return res.redirect('/crearUsuario');
        }
    }
};
