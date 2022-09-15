var express = require("express");
var router = express.Router();
var usersController = require("../controllers/usersController");

/* GET users listing. */
<<<<<<< HEAD
router.get("/login", usersController.Login);
=======

router.get("/login", usersController.login);
>>>>>>> 548c7180a2da786f3794a527b837c8f3394da8e2
router.get("/miPerfil", usersController.miPerfil);
router.get("/registracion", usersController.registracion);
router.get("/editarPerfil/:id", usersController.editarPerfil);


/* A la ruta le estamos incluyendo parametros que van a modificar 
que es lo que estamos haciendo dentro de esa ruta */
/* Las rutas con parametro van al final porque la ruta anterior espera un parametro.
 SIEMPRE LAS RUTAS CON PARAMETRO VAN ULTIMAS.  */
router.get("/detalleUsuario", usersController.detalleUsuario);


module.exports = router;

