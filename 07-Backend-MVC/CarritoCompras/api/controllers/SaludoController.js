/**
 * Created by USRDEL on 19/6/17.
 */
// /Saludo/crearUsuarioQuemado
module.exports = {
    welcome: function (req, res) {
        sails.log.info(req.method);
        if (req.method == "POST") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error");
        }
    },
    bienvenido: function (req, res) {
        //PUT
        return res.send("Hola");
    },
    crearUsuarioQuemado: function (req, res) {
        var nuevoUsuario = {
            nombres: "Adrian",
            apellidos: "Eguez",
            password: "1234",
            correo: "1@1.com",
            fechaNacimiento: new Date()
        };
        Usuario.create(nuevoUsuario)
            .exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(usuarioCreado);
            }
        });
    }
};
