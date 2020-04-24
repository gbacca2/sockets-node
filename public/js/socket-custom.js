

var socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

    //escuchar evemtos con on
    socket.on('disconnect', function(){
            console.log('perdimos conexion con el servidor');
    });


//emit enviar informacion al servidor
   socket.emit('enviarMensaje', {
      usuario: 'Fernando',
      mensaje:'Hola Mundo'
}, function(resp){
    console.log('respuesta server:',resp);
}); 


//escuchar info del servidor

socket.on('enviarMensaje', function(message){
    console.log( message)
})


