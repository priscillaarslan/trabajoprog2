const data = require('../data/index')
const usersController = {
    detalleUsuario: function(req, res) {
        res.render('detalleUsuario');
      },
   
      login: function(req, res) {
        res.render('login');
      },
    miPerfil: function(req, res) {
      console.log(data);
        res.render('miPerfil',{info: data.usuarios[0], posts:data.posts});
      },
      registracion: function(req, res) {
        res.render('registracion');
      },
      editarPerfil: function(req, res, next) {
        res.render('editarPerfil');
      },
    }  
    
    
    //exportacion
    
    module.exports = usersController;