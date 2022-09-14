const data = require('../data/index')
const usersController = {
    detalleUsuario: function(req, res) {
        res.render('detalleUsuario');
      },
   
      Login: function(req, res) {
        res.render('Login');
      },
    miPerfil: function(req, res) {
      console.log(data);
        res.render('miPerfil',{info: data.usuarios[0], posts:data.posteos});
      },
      registracion: function(req, res) {
        res.render('registracion');
      },
    }  
    
    //exportacion
    
    module.exports = usersController;