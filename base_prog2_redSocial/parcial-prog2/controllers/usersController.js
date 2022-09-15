//requires : es para mandarle la data del modelo al controlador, ahora hay que mandar del controlador a la vista.
//para pasarselo a la vista, al render le pasamos parametros
const data = require('../data/index')

//metodos
const usersController = {
    detalleUsuario: function(req, res) {
        res.render('detalleUsuario');
      },
      Login: function(req, res) {
        res.render('Login');
      },
    miPerfil: function(req, res) {
        res.render('miPerfil',{info:data.usuarios[3],posts:data.posteos});
      },
      registracion: function(req, res) {
        res.render('registracion');
      },
      editarPerfil: function(req, res) {
        res.render('editarPerfil', {info:data.usuarios,indice:req.params.id});
      },
    }  
    /*req es un objeto literal que esta en el navegador, res es la respuesta, 
    PARAMS --> tambien es un objeto literal, el .id es el parametro*/
    
    //exportacion
    
    module.exports = usersController