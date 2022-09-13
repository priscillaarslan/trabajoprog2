const usersController = {
    detalleUsuario: function(req, res) {
        res.render('detalleUsuario');
      },
    editarPerfil: function(req, res) {
        res.render('editarPerfil');
      },
      Login: function(req, res) {
        res.render('Login');
      },
    miPerfil: function(req, res) {
        res.render('miPerfil');
      },
      registracion: function(req, res) {
        res.render('registracion');
      },
    }  
    
    //exportacion
    
    module.exports = usersController