const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');






/*------------RUTAS PARA REGISTAR USUARIO---------------------- */

router.get('/register',userController.register);
router.post('/register'/*y aca completar la validacion*/);



/*-------------RUTAS PARA LOGUEAR USUARIO-------------------*/ 


router.get('/login',userController.login);



module.exports = router;