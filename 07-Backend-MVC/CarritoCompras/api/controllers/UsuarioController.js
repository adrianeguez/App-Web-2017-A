/**
 * Created by USRDEL on 22/7/17.
 */
/**
 * Created by USRDEL on 19/6/17.
 */
//    localhost:1337/Usuario/metodos
module.exports = {
    eliminarUsuario: function (req, res) {
        var params = req.allParams();
        sails.log.info("Parametros", params);
        if (req.method == "POST" && params.id) {
            Usuario.destroy({
                id: params.id
            }).exec(function (err, usuarioBorrado) {
                if (err)
                    return res.serverError(err);
                return res.redirect("/");
            });
        }
        else {
            return res.badRequest();
        }
    },
    editarUsuario: function (req, res) {
        var parametros = req.allParams();
        if (parametros.nombres &&
            parametros.apellidos &&
            parametros.correo &&
            parametros.id) {
            Usuario.update({
                id: parametros.id
            }, {
                nombres: parametros.nombres,
                apellidos: parametros.apellidos,
                correo: parametros.correo
            })
                .exec(function (err, usuarioEditado) {
                if (err)
                    return res.serverError(err);
                if (usuarioEditado) {
                    //Si encontro
                    return res.redirect("/");
                }
                else {
                    //No encontro
                    return res.notFound();
                }
            });
        }
        else {
            return res.badRequest();
        }
    }
};
