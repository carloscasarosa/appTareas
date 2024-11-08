const mysqsl = require('mysql2');

const conection = mysqsl.createConnection({
   host: 'localhost',
   user:'root',
   password:'',
   database:'listatareas',
});


//funcion para conectame a la base de datos

conection.connect((error) =>{
    if(error){
        console.log(error)
    }else{
        console.log('conexión con exito!');
    }
})

module.exports= conection;