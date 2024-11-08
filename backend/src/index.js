const express = require('express');
const cors = require('cors');
const conection= require('../src/conection');

const app= express();

app.use(cors());
app.use(express.json());


app.get('/',(req,res) =>{
    const sql= `SELECT *
                FROM tareas`
   
    conection.query(sql, (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.json(result);
        }
    })            
})


app.post('/', (req,res)=>{

     const data= req.body;
     console.log(data);


    const sql=`INSERT INTO tareas(nombre_tarea, fecha, estado)
               VALUES(?, ?, ?)` 

   conection.query(sql, [data.nombre_tarea, data.fecha, data.estado], (err,result)=>{
       if(err){
        console.log(err)
       }else{
        res.json(result)
       }
   })            

})


app.patch('/:id', (req, res)=>{
    const id= req.params.id;

    const sql=`UPDATE tareas
               SET estado = 'finalizado'
               WHERE id_tareas= ?`
    
    conection.query(sql,[id], (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.json(result)
            }
    })
});

app.delete('/:id', (req,res)=>{
     const id= req.params.id;

     const sql=`DELETE FROM tareas
                WHERE id_tareas= ?`
    conection.query(sql, [id], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.json(result)
        }
    })
})


app.listen(8000, ()=>{
    console.log('el servidor esta escuchando perfectamente');
})