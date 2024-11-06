const express = require('express');
const cors = require('cors');

const app= express();

app.use(cors());


app.get('/',(req,res) =>{
   res.json({messge: 'Tu pedido fue enviado exitosament!!'});
})


app.post('/', (req,res)=>{
    res.json({messge:'Tu solicitud esta en la base de datos!!'});

})


app.listen(8000, ()=>{
    console.log('el servidor esta escuchando perfectamente');
})