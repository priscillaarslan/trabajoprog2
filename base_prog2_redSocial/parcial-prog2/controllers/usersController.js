//requires : es para mandarle la data del modelo al controlador, ahora hay que mandar del controlador a la vista.
//para pasarselo a la vista, al render le pasamos parametros
const data = require('../data/index')

//metodos
const usersController = {
    detalleUsuario: function(req, res) {
        res.render('detalleUsuario');
      },
<<<<<<< HEAD
      Login: function(req, res) {
        res.render('Login');
      },
    miPerfil: function(req, res) {
        res.render('miPerfil',{info:data.usuarios[3],posts:data.posteos});
=======
   
      login: function(req, res) {
        res.render('login');
      },
    miPerfil: function(req, res) {
      console.log(data);
        res.render('miPerfil',{info: data.usuarios[0], posts:data.posts});
>>>>>>> 548c7180a2da786f3794a527b837c8f3394da8e2
      },
      registracion: function(req, res) {
        res.render('registracion');
      },
<<<<<<< HEAD
      editarPerfil: function(req, res) {
        res.render('editarPerfil', {info:data.usuarios,indice:req.params.id});
=======
      editarPerfil: function(req, res, next) {
        res.render('editarPerfil');
>>>>>>> 548c7180a2da786f3794a527b837c8f3394da8e2
      },
    }  
    /*req es un objeto literal que esta en el navegador, res es la respuesta, 
    PARAMS --> tambien es un objeto literal, el .id es el parametro*/
    
    
    //exportacion
    
    module.exports = usersController