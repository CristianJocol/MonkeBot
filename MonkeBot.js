console.log('Monke te saluda!');

const Discord = require('discord.js');
//const moment = require('moment');
const client = new Discord.Client(); //Objeto el cual permite comunicación con la API de Discord
client.login('ODIzMDc1MjY2NTAxODA0MDUz.YFbikw.OPFGjUvgOWIbz1E8JmCq74L7i8s');

//Event handler
client.on('ready', readyDiscord);

function readyDiscord() { //Indica que el servidor esta listo.
    console.log(':D');
}

//Array contenedor de respuestas
const respuestas = [
    'Hola soy Monke, como puedo ayudarte?',
    'Monkeeeeeeeeeee!',
    'MONKEMONKEMONKEMONKE'
]


//Inicia el chat con bot a través de mensaje !MonkeBot el cual genera un mensaje de bienvenida aleatorio. 
client.on('message', gotMessage); 

function gotMessage(msg) {
    console.log(msg.content); 
    if (msg.channel.id == '823087928616026113' && msg.content === '!MonkeBot') {
        //msg.reply('Hola usuario!'); // Envía una respuesta a un usuario en especifico
        //msg.channel.send('Hola soy Monke, como puedo ayudarte?'); // Envía una respuesta a un canal de Discord sin mencionar al usuario


        /**
         * En este caso se generara un número random para elegir una de las respuestas contenidas
         * en el array respuestas
         **/
        const index = Math.floor(Math.random() * respuestas.length);
        msg.channel.send(respuestas[index]);
    } 
}
