const express = require('express');
const app = express();
const path = require('path');





/*----------------------IMPORTANDO RUTAS-----------------------*/


const homeRoute = require('./src/routes/homeRoute');

const userRoute = require('./src/routes/userRoute')

/*const contactRoute = require('./src/routes/contactRoute');

const aboutMeRoute = require('./src/routes/aboutMeRoute');

const worksRoute = require('./src/routes/worksRoute');

/*-------------RUTEO DE VISTAS-----------------------*/

app.use('/',homeRoute);

app.use('/users',userRoute)



/*app.use('/contact',contactRoute);

/*app.use('/aboutMe',aboutMeRoute);

app.use('/works',worksRoute);

/*---------------------------MOTOR DE PLANTILLAS--------------------- */


app.set('view engine','ejs');
app.set('views','src/views');


app.use(express.static(path.join(__dirname, './public')));




app.listen(3002,()=>{
    console.log('Servidor funcionando en el puerto 3002')
});