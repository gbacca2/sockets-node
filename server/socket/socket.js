const { io } = require('../server')

io.on('connection',(client)=>{
    console.log('Usuario conectado');


    client.on('disconnect',() =>{
        console.log('Usuario Desconectado');
    })


    //Escuchar el cliente

    client.on('enviarMensaje', (message, callback) =>{
        console.log(message)

        client.broadcast.emit('enviarMessage', message)

      /*  if(message.usuario){

        callback({
            resp:'Todo salio bien'
        });

        }else{
            callback({
                resp: 'todo salio mal'
            });
        }*/
    })


    // Enviar mensaje al cliente
    client.emit('enviarMensaje',{
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    })

});