var express = require("express");
var router = express.Router();
var usersController = require("../controllers/usersController");

/* GET users listing. */
router.get("/editarPerfil", usersController.editarPerfil);
router.get("/login", usersController.Login);
router.get("/miPerfil", usersController.miPerfil);
router.get("/registracion", usersController.registracion);


/* A la ruta le estamos incluyendo parametros que van a modificar 
que es lo que estamos haciendo dentro de esa ruta */
/* Las rutas con parametro van al final porque la ruta anterior espera un parametro.
 SIEMPRE LAS RUTAS CON PARAMETRO VAN ULTIMAS.  */
router.get("/detalleUsuario", usersController.detalleUsuario);


module.exports = router;
