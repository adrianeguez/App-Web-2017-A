/**
 * Created by USRDEL on 19/6/17.
 */
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
    }
};
