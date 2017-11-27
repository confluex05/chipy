/* global process */
var restify = require('restify');
var builder = require('botbuilder');
//=========================================================
// Bot Setup
//=========================================================
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword,
    stateEndpoint: process.env.BotStateEndpoint,
    openIdMetadata: process.env.BotOpenIdMetadata 
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//Bot on
bot.on('contactRelationUpdate', function (message) {
   if (message.action === 'add') {
       var name = message.user ? message.user.name : null;
       var reply = new builder.Message()
               .address(message.address)
               .text("Hello %s... Thanks for adding me. Say 'hello' to see some great demos.", name || 'there');
       bot.send(reply);
   } else {
       // delete their data
   }
});
bot.on('typing', function (message) {
 // User is typing
});
bot.on('deleteUserData', function (message) {
   // User asked to delete their data
});
//=========================================================
// Bots Dialogs
//=========================================================
String.prototype.contains = function(content){
 return this.indexOf(content) !== -1;
}

bot.dialog('/', function (session) {
      
   if(session.message.text.toLowerCase().contains('hello')){
     session.send(`Hey, How are you?`);
     }else if(session.message.text.toLowerCase().contains('fine')){
       session.send(`How can I help you?`);
     }else if(session.message.text.toLowerCase().contains('do something for me')){
       session.send(`what do u want?`);
     }
else if(session.message.text.toLowerCase().contains('q10000')){session.send(`A10000`);
      }
else if(session.message.text.toLowerCase().contains('q9999')){session.send(`A9999`);
      }
else if(session.message.text.toLowerCase().contains('q9998')){session.send(`A9998`);
      }
else if(session.message.text.toLowerCase().contains('q9997')){session.send(`A9997`);
      }
else if(session.message.text.toLowerCase().contains('q9996')){session.send(`A9996`);
      }
else if(session.message.text.toLowerCase().contains('q9995')){session.send(`A9995`);
      }
else if(session.message.text.toLowerCase().contains('q9994')){session.send(`A9994`);
      }
else if(session.message.text.toLowerCase().contains('q9993')){session.send(`A9993`);
      }
else if(session.message.text.toLowerCase().contains('q9992')){session.send(`A9992`);
      }
else if(session.message.text.toLowerCase().contains('q9991')){session.send(`A9991`);
      }
else if(session.message.text.toLowerCase().contains('q9990')){session.send(`A9990`);
      }
else if(session.message.text.toLowerCase().contains('q9989')){session.send(`A9989`);
      }
else if(session.message.text.toLowerCase().contains('q9988')){session.send(`A9988`);
      }
else if(session.message.text.toLowerCase().contains('q9987')){session.send(`A9987`);
      }
else if(session.message.text.toLowerCase().contains('q9986')){session.send(`A9986`);
      }
else if(session.message.text.toLowerCase().contains('q9985')){session.send(`A9985`);
      }
else if(session.message.text.toLowerCase().contains('q9984')){session.send(`A9984`);
      }
else if(session.message.text.toLowerCase().contains('q9983')){session.send(`A9983`);
      }
else if(session.message.text.toLowerCase().contains('q9982')){session.send(`A9982`);
      }
else if(session.message.text.toLowerCase().contains('q9981')){session.send(`A9981`);
      }
else if(session.message.text.toLowerCase().contains('q9980')){session.send(`A9980`);
      }
else if(session.message.text.toLowerCase().contains('q9979')){session.send(`A9979`);
      }
else if(session.message.text.toLowerCase().contains('q9978')){session.send(`A9978`);
      }
else if(session.message.text.toLowerCase().contains('q9977')){session.send(`A9977`);
      }
else if(session.message.text.toLowerCase().contains('q9976')){session.send(`A9976`);
      }
else if(session.message.text.toLowerCase().contains('q9975')){session.send(`A9975`);
      }
else if(session.message.text.toLowerCase().contains('q9974')){session.send(`A9974`);
      }
else if(session.message.text.toLowerCase().contains('q9973')){session.send(`A9973`);
      }
else if(session.message.text.toLowerCase().contains('q9972')){session.send(`A9972`);
      }
else if(session.message.text.toLowerCase().contains('q9971')){session.send(`A9971`);
      }
else if(session.message.text.toLowerCase().contains('q9970')){session.send(`A9970`);
      }
else if(session.message.text.toLowerCase().contains('q9969')){session.send(`A9969`);
      }
else if(session.message.text.toLowerCase().contains('q9968')){session.send(`A9968`);
      }
else if(session.message.text.toLowerCase().contains('q9967')){session.send(`A9967`);
      }
else if(session.message.text.toLowerCase().contains('q9966')){session.send(`A9966`);
      }
else if(session.message.text.toLowerCase().contains('q9965')){session.send(`A9965`);
      }
else if(session.message.text.toLowerCase().contains('q9964')){session.send(`A9964`);
      }
else if(session.message.text.toLowerCase().contains('q9963')){session.send(`A9963`);
      }
else if(session.message.text.toLowerCase().contains('q9962')){session.send(`A9962`);
      }
else if(session.message.text.toLowerCase().contains('q9961')){session.send(`A9961`);
      }
else if(session.message.text.toLowerCase().contains('q9960')){session.send(`A9960`);
      }
else if(session.message.text.toLowerCase().contains('q9959')){session.send(`A9959`);
      }
else if(session.message.text.toLowerCase().contains('q9958')){session.send(`A9958`);
      }
else if(session.message.text.toLowerCase().contains('q9957')){session.send(`A9957`);
      }
else if(session.message.text.toLowerCase().contains('q9956')){session.send(`A9956`);
      }
else if(session.message.text.toLowerCase().contains('q9955')){session.send(`A9955`);
      }
else if(session.message.text.toLowerCase().contains('q9954')){session.send(`A9954`);
      }
else if(session.message.text.toLowerCase().contains('q9953')){session.send(`A9953`);
      }
else if(session.message.text.toLowerCase().contains('q9952')){session.send(`A9952`);
      }
else if(session.message.text.toLowerCase().contains('q9951')){session.send(`A9951`);
      }
else if(session.message.text.toLowerCase().contains('q9950')){session.send(`A9950`);
      }
else if(session.message.text.toLowerCase().contains('q9949')){session.send(`A9949`);
      }
else if(session.message.text.toLowerCase().contains('q9948')){session.send(`A9948`);
      }
else if(session.message.text.toLowerCase().contains('q9947')){session.send(`A9947`);
      }
else if(session.message.text.toLowerCase().contains('q9946')){session.send(`A9946`);
      }
else if(session.message.text.toLowerCase().contains('q9945')){session.send(`A9945`);
      }
else if(session.message.text.toLowerCase().contains('q9944')){session.send(`A9944`);
      }
else if(session.message.text.toLowerCase().contains('q9943')){session.send(`A9943`);
      }
else if(session.message.text.toLowerCase().contains('q9942')){session.send(`A9942`);
      }
else if(session.message.text.toLowerCase().contains('q9941')){session.send(`A9941`);
      }
else if(session.message.text.toLowerCase().contains('q9940')){session.send(`A9940`);
      }
else if(session.message.text.toLowerCase().contains('q9939')){session.send(`A9939`);
      }
else if(session.message.text.toLowerCase().contains('q9938')){session.send(`A9938`);
      }
else if(session.message.text.toLowerCase().contains('q9937')){session.send(`A9937`);
      }
else if(session.message.text.toLowerCase().contains('q9936')){session.send(`A9936`);
      }
else if(session.message.text.toLowerCase().contains('q9935')){session.send(`A9935`);
      }
else if(session.message.text.toLowerCase().contains('q9934')){session.send(`A9934`);
      }
else if(session.message.text.toLowerCase().contains('q9933')){session.send(`A9933`);
      }
else if(session.message.text.toLowerCase().contains('q9932')){session.send(`A9932`);
      }
else if(session.message.text.toLowerCase().contains('q9931')){session.send(`A9931`);
      }
else if(session.message.text.toLowerCase().contains('q9930')){session.send(`A9930`);
      }
else if(session.message.text.toLowerCase().contains('q9929')){session.send(`A9929`);
      }
else if(session.message.text.toLowerCase().contains('q9928')){session.send(`A9928`);
      }
else if(session.message.text.toLowerCase().contains('q9927')){session.send(`A9927`);
      }
else if(session.message.text.toLowerCase().contains('q9926')){session.send(`A9926`);
      }
else if(session.message.text.toLowerCase().contains('q9925')){session.send(`A9925`);
      }
else if(session.message.text.toLowerCase().contains('q9924')){session.send(`A9924`);
      }
else if(session.message.text.toLowerCase().contains('q9923')){session.send(`A9923`);
      }
else if(session.message.text.toLowerCase().contains('q9922')){session.send(`A9922`);
      }
else if(session.message.text.toLowerCase().contains('q9921')){session.send(`A9921`);
      }
else if(session.message.text.toLowerCase().contains('q9920')){session.send(`A9920`);
      }
else if(session.message.text.toLowerCase().contains('q9919')){session.send(`A9919`);
      }
else if(session.message.text.toLowerCase().contains('q9918')){session.send(`A9918`);
      }
else if(session.message.text.toLowerCase().contains('q9917')){session.send(`A9917`);
      }
else if(session.message.text.toLowerCase().contains('q9916')){session.send(`A9916`);
      }
else if(session.message.text.toLowerCase().contains('q9915')){session.send(`A9915`);
      }
else if(session.message.text.toLowerCase().contains('q9914')){session.send(`A9914`);
      }
else if(session.message.text.toLowerCase().contains('q9913')){session.send(`A9913`);
      }
else if(session.message.text.toLowerCase().contains('q9912')){session.send(`A9912`);
      }
else if(session.message.text.toLowerCase().contains('q9911')){session.send(`A9911`);
      }
else if(session.message.text.toLowerCase().contains('q9910')){session.send(`A9910`);
      }
else if(session.message.text.toLowerCase().contains('q9909')){session.send(`A9909`);
      }
else if(session.message.text.toLowerCase().contains('q9908')){session.send(`A9908`);
      }
else if(session.message.text.toLowerCase().contains('q9907')){session.send(`A9907`);
      }
else if(session.message.text.toLowerCase().contains('q9906')){session.send(`A9906`);
      }
else if(session.message.text.toLowerCase().contains('q9905')){session.send(`A9905`);
      }
else if(session.message.text.toLowerCase().contains('q9904')){session.send(`A9904`);
      }
else if(session.message.text.toLowerCase().contains('q9903')){session.send(`A9903`);
      }
else if(session.message.text.toLowerCase().contains('q9902')){session.send(`A9902`);
      }
else if(session.message.text.toLowerCase().contains('q9901')){session.send(`A9901`);
      }
else if(session.message.text.toLowerCase().contains('q9900')){session.send(`A9900`);
      }
else if(session.message.text.toLowerCase().contains('q9899')){session.send(`A9899`);
      }
else if(session.message.text.toLowerCase().contains('q9898')){session.send(`A9898`);
      }
else if(session.message.text.toLowerCase().contains('q9897')){session.send(`A9897`);
      }
else if(session.message.text.toLowerCase().contains('q9896')){session.send(`A9896`);
      }
else if(session.message.text.toLowerCase().contains('q9895')){session.send(`A9895`);
      }
else if(session.message.text.toLowerCase().contains('q9894')){session.send(`A9894`);
      }
else if(session.message.text.toLowerCase().contains('q9893')){session.send(`A9893`);
      }
else if(session.message.text.toLowerCase().contains('q9892')){session.send(`A9892`);
      }
else if(session.message.text.toLowerCase().contains('q9891')){session.send(`A9891`);
      }
else if(session.message.text.toLowerCase().contains('q9890')){session.send(`A9890`);
      }
else if(session.message.text.toLowerCase().contains('q9889')){session.send(`A9889`);
      }
else if(session.message.text.toLowerCase().contains('q9888')){session.send(`A9888`);
      }
else if(session.message.text.toLowerCase().contains('q9887')){session.send(`A9887`);
      }
else if(session.message.text.toLowerCase().contains('q9886')){session.send(`A9886`);
      }
else if(session.message.text.toLowerCase().contains('q9885')){session.send(`A9885`);
      }
else if(session.message.text.toLowerCase().contains('q9884')){session.send(`A9884`);
      }
else if(session.message.text.toLowerCase().contains('q9883')){session.send(`A9883`);
      }
else if(session.message.text.toLowerCase().contains('q9882')){session.send(`A9882`);
      }
else if(session.message.text.toLowerCase().contains('q9881')){session.send(`A9881`);
      }
else if(session.message.text.toLowerCase().contains('q9880')){session.send(`A9880`);
      }
else if(session.message.text.toLowerCase().contains('q9879')){session.send(`A9879`);
      }
else if(session.message.text.toLowerCase().contains('q9878')){session.send(`A9878`);
      }
else if(session.message.text.toLowerCase().contains('q9877')){session.send(`A9877`);
      }
else if(session.message.text.toLowerCase().contains('q9876')){session.send(`A9876`);
      }
else if(session.message.text.toLowerCase().contains('q9875')){session.send(`A9875`);
      }
else if(session.message.text.toLowerCase().contains('q9874')){session.send(`A9874`);
      }
else if(session.message.text.toLowerCase().contains('q9873')){session.send(`A9873`);
      }
else if(session.message.text.toLowerCase().contains('q9872')){session.send(`A9872`);
      }
else if(session.message.text.toLowerCase().contains('q9871')){session.send(`A9871`);
      }
else if(session.message.text.toLowerCase().contains('q9870')){session.send(`A9870`);
      }
else if(session.message.text.toLowerCase().contains('q9869')){session.send(`A9869`);
      }
else if(session.message.text.toLowerCase().contains('q9868')){session.send(`A9868`);
      }
else if(session.message.text.toLowerCase().contains('q9867')){session.send(`A9867`);
      }
else if(session.message.text.toLowerCase().contains('q9866')){session.send(`A9866`);
      }
else if(session.message.text.toLowerCase().contains('q9865')){session.send(`A9865`);
      }
else if(session.message.text.toLowerCase().contains('q9864')){session.send(`A9864`);
      }
else if(session.message.text.toLowerCase().contains('q9863')){session.send(`A9863`);
      }
else if(session.message.text.toLowerCase().contains('q9862')){session.send(`A9862`);
      }
else if(session.message.text.toLowerCase().contains('q9861')){session.send(`A9861`);
      }
else if(session.message.text.toLowerCase().contains('q9860')){session.send(`A9860`);
      }
else if(session.message.text.toLowerCase().contains('q9859')){session.send(`A9859`);
      }
else if(session.message.text.toLowerCase().contains('q9858')){session.send(`A9858`);
      }
else if(session.message.text.toLowerCase().contains('q9857')){session.send(`A9857`);
      }
else if(session.message.text.toLowerCase().contains('q9856')){session.send(`A9856`);
      }
else if(session.message.text.toLowerCase().contains('q9855')){session.send(`A9855`);
      }
else if(session.message.text.toLowerCase().contains('q9854')){session.send(`A9854`);
      }
else if(session.message.text.toLowerCase().contains('q9853')){session.send(`A9853`);
      }
else if(session.message.text.toLowerCase().contains('q9852')){session.send(`A9852`);
      }
else if(session.message.text.toLowerCase().contains('q9851')){session.send(`A9851`);
      }
else if(session.message.text.toLowerCase().contains('q9850')){session.send(`A9850`);
      }
else if(session.message.text.toLowerCase().contains('q9849')){session.send(`A9849`);
      }
else if(session.message.text.toLowerCase().contains('q9848')){session.send(`A9848`);
      }
else if(session.message.text.toLowerCase().contains('q9847')){session.send(`A9847`);
      }
else if(session.message.text.toLowerCase().contains('q9846')){session.send(`A9846`);
      }
else if(session.message.text.toLowerCase().contains('q9845')){session.send(`A9845`);
      }
else if(session.message.text.toLowerCase().contains('q9844')){session.send(`A9844`);
      }
else if(session.message.text.toLowerCase().contains('q9843')){session.send(`A9843`);
      }
else if(session.message.text.toLowerCase().contains('q9842')){session.send(`A9842`);
      }
else if(session.message.text.toLowerCase().contains('q9841')){session.send(`A9841`);
      }
else if(session.message.text.toLowerCase().contains('q9840')){session.send(`A9840`);
      }
else if(session.message.text.toLowerCase().contains('q9839')){session.send(`A9839`);
      }
else if(session.message.text.toLowerCase().contains('q9838')){session.send(`A9838`);
      }
else if(session.message.text.toLowerCase().contains('q9837')){session.send(`A9837`);
      }
else if(session.message.text.toLowerCase().contains('q9836')){session.send(`A9836`);
      }
else if(session.message.text.toLowerCase().contains('q9835')){session.send(`A9835`);
      }
else if(session.message.text.toLowerCase().contains('q9834')){session.send(`A9834`);
      }
else if(session.message.text.toLowerCase().contains('q9833')){session.send(`A9833`);
      }
else if(session.message.text.toLowerCase().contains('q9832')){session.send(`A9832`);
      }
else if(session.message.text.toLowerCase().contains('q9831')){session.send(`A9831`);
      }
else if(session.message.text.toLowerCase().contains('q9830')){session.send(`A9830`);
      }
else if(session.message.text.toLowerCase().contains('q9829')){session.send(`A9829`);
      }
else if(session.message.text.toLowerCase().contains('q9828')){session.send(`A9828`);
      }
else if(session.message.text.toLowerCase().contains('q9827')){session.send(`A9827`);
      }
else if(session.message.text.toLowerCase().contains('q9826')){session.send(`A9826`);
      }
else if(session.message.text.toLowerCase().contains('q9825')){session.send(`A9825`);
      }
else if(session.message.text.toLowerCase().contains('q9824')){session.send(`A9824`);
      }
else if(session.message.text.toLowerCase().contains('q9823')){session.send(`A9823`);
      }
else if(session.message.text.toLowerCase().contains('q9822')){session.send(`A9822`);
      }
else if(session.message.text.toLowerCase().contains('q9821')){session.send(`A9821`);
      }
else if(session.message.text.toLowerCase().contains('q9820')){session.send(`A9820`);
      }
else if(session.message.text.toLowerCase().contains('q9819')){session.send(`A9819`);
      }
else if(session.message.text.toLowerCase().contains('q9818')){session.send(`A9818`);
      }
else if(session.message.text.toLowerCase().contains('q9817')){session.send(`A9817`);
      }
else if(session.message.text.toLowerCase().contains('q9816')){session.send(`A9816`);
      }
else if(session.message.text.toLowerCase().contains('q9815')){session.send(`A9815`);
      }
else if(session.message.text.toLowerCase().contains('q9814')){session.send(`A9814`);
      }
else if(session.message.text.toLowerCase().contains('q9813')){session.send(`A9813`);
      }
else if(session.message.text.toLowerCase().contains('q9812')){session.send(`A9812`);
      }
else if(session.message.text.toLowerCase().contains('q9811')){session.send(`A9811`);
      }
else if(session.message.text.toLowerCase().contains('q9810')){session.send(`A9810`);
      }
else if(session.message.text.toLowerCase().contains('q9809')){session.send(`A9809`);
      }
else if(session.message.text.toLowerCase().contains('q9808')){session.send(`A9808`);
      }
else if(session.message.text.toLowerCase().contains('q9807')){session.send(`A9807`);
      }
else if(session.message.text.toLowerCase().contains('q9806')){session.send(`A9806`);
      }
else if(session.message.text.toLowerCase().contains('q9805')){session.send(`A9805`);
      }
else if(session.message.text.toLowerCase().contains('q9804')){session.send(`A9804`);
      }
else if(session.message.text.toLowerCase().contains('q9803')){session.send(`A9803`);
      }
else if(session.message.text.toLowerCase().contains('q9802')){session.send(`A9802`);
      }
else if(session.message.text.toLowerCase().contains('q9801')){session.send(`A9801`);
      }
else if(session.message.text.toLowerCase().contains('q9800')){session.send(`A9800`);
      }
else if(session.message.text.toLowerCase().contains('q9799')){session.send(`A9799`);
      }
else if(session.message.text.toLowerCase().contains('q9798')){session.send(`A9798`);
      }
else if(session.message.text.toLowerCase().contains('q9797')){session.send(`A9797`);
      }
else if(session.message.text.toLowerCase().contains('q9796')){session.send(`A9796`);
      }
else if(session.message.text.toLowerCase().contains('q9795')){session.send(`A9795`);
      }
else if(session.message.text.toLowerCase().contains('q9794')){session.send(`A9794`);
      }
else if(session.message.text.toLowerCase().contains('q9793')){session.send(`A9793`);
      }
else if(session.message.text.toLowerCase().contains('q9792')){session.send(`A9792`);
      }
else if(session.message.text.toLowerCase().contains('q9791')){session.send(`A9791`);
      }
else if(session.message.text.toLowerCase().contains('q9790')){session.send(`A9790`);
      }
else if(session.message.text.toLowerCase().contains('q9789')){session.send(`A9789`);
      }
else if(session.message.text.toLowerCase().contains('q9788')){session.send(`A9788`);
      }
else if(session.message.text.toLowerCase().contains('q9787')){session.send(`A9787`);
      }
else if(session.message.text.toLowerCase().contains('q9786')){session.send(`A9786`);
      }
else if(session.message.text.toLowerCase().contains('q9785')){session.send(`A9785`);
      }
else if(session.message.text.toLowerCase().contains('q9784')){session.send(`A9784`);
      }
else if(session.message.text.toLowerCase().contains('q9783')){session.send(`A9783`);
      }
else if(session.message.text.toLowerCase().contains('q9782')){session.send(`A9782`);
      }
else if(session.message.text.toLowerCase().contains('q9781')){session.send(`A9781`);
      }
else if(session.message.text.toLowerCase().contains('q9780')){session.send(`A9780`);
      }
else if(session.message.text.toLowerCase().contains('q9779')){session.send(`A9779`);
      }
else if(session.message.text.toLowerCase().contains('q9778')){session.send(`A9778`);
      }
else if(session.message.text.toLowerCase().contains('q9777')){session.send(`A9777`);
      }
else if(session.message.text.toLowerCase().contains('q9776')){session.send(`A9776`);
      }
else if(session.message.text.toLowerCase().contains('q9775')){session.send(`A9775`);
      }
else if(session.message.text.toLowerCase().contains('q9774')){session.send(`A9774`);
      }
else if(session.message.text.toLowerCase().contains('q9773')){session.send(`A9773`);
      }
else if(session.message.text.toLowerCase().contains('q9772')){session.send(`A9772`);
      }
else if(session.message.text.toLowerCase().contains('q9771')){session.send(`A9771`);
      }
else if(session.message.text.toLowerCase().contains('q9770')){session.send(`A9770`);
      }
else if(session.message.text.toLowerCase().contains('q9769')){session.send(`A9769`);
      }
else if(session.message.text.toLowerCase().contains('q9768')){session.send(`A9768`);
      }
else if(session.message.text.toLowerCase().contains('q9767')){session.send(`A9767`);
      }
else if(session.message.text.toLowerCase().contains('q9766')){session.send(`A9766`);
      }
else if(session.message.text.toLowerCase().contains('q9765')){session.send(`A9765`);
      }
else if(session.message.text.toLowerCase().contains('q9764')){session.send(`A9764`);
      }
else if(session.message.text.toLowerCase().contains('q9763')){session.send(`A9763`);
      }
else if(session.message.text.toLowerCase().contains('q9762')){session.send(`A9762`);
      }
else if(session.message.text.toLowerCase().contains('q9761')){session.send(`A9761`);
      }
else if(session.message.text.toLowerCase().contains('q9760')){session.send(`A9760`);
      }
else if(session.message.text.toLowerCase().contains('q9759')){session.send(`A9759`);
      }
else if(session.message.text.toLowerCase().contains('q9758')){session.send(`A9758`);
      }
else if(session.message.text.toLowerCase().contains('q9757')){session.send(`A9757`);
      }
else if(session.message.text.toLowerCase().contains('q9756')){session.send(`A9756`);
      }
else if(session.message.text.toLowerCase().contains('q9755')){session.send(`A9755`);
      }
else if(session.message.text.toLowerCase().contains('q9754')){session.send(`A9754`);
      }
else if(session.message.text.toLowerCase().contains('q9753')){session.send(`A9753`);
      }
else if(session.message.text.toLowerCase().contains('q9752')){session.send(`A9752`);
      }
else if(session.message.text.toLowerCase().contains('q9751')){session.send(`A9751`);
      }
else if(session.message.text.toLowerCase().contains('q9750')){session.send(`A9750`);
      }
else if(session.message.text.toLowerCase().contains('q9749')){session.send(`A9749`);
      }
else if(session.message.text.toLowerCase().contains('q9748')){session.send(`A9748`);
      }
else if(session.message.text.toLowerCase().contains('q9747')){session.send(`A9747`);
      }
else if(session.message.text.toLowerCase().contains('q9746')){session.send(`A9746`);
      }
else if(session.message.text.toLowerCase().contains('q9745')){session.send(`A9745`);
      }
else if(session.message.text.toLowerCase().contains('q9744')){session.send(`A9744`);
      }
else if(session.message.text.toLowerCase().contains('q9743')){session.send(`A9743`);
      }
else if(session.message.text.toLowerCase().contains('q9742')){session.send(`A9742`);
      }
else if(session.message.text.toLowerCase().contains('q9741')){session.send(`A9741`);
      }
else if(session.message.text.toLowerCase().contains('q9740')){session.send(`A9740`);
      }
else if(session.message.text.toLowerCase().contains('q9739')){session.send(`A9739`);
      }
else if(session.message.text.toLowerCase().contains('q9738')){session.send(`A9738`);
      }
else if(session.message.text.toLowerCase().contains('q9737')){session.send(`A9737`);
      }
else if(session.message.text.toLowerCase().contains('q9736')){session.send(`A9736`);
      }
else if(session.message.text.toLowerCase().contains('q9735')){session.send(`A9735`);
      }
else if(session.message.text.toLowerCase().contains('q9734')){session.send(`A9734`);
      }
else if(session.message.text.toLowerCase().contains('q9733')){session.send(`A9733`);
      }
else if(session.message.text.toLowerCase().contains('q9732')){session.send(`A9732`);
      }
else if(session.message.text.toLowerCase().contains('q9731')){session.send(`A9731`);
      }
else if(session.message.text.toLowerCase().contains('q9730')){session.send(`A9730`);
      }
else if(session.message.text.toLowerCase().contains('q9729')){session.send(`A9729`);
      }
else if(session.message.text.toLowerCase().contains('q9728')){session.send(`A9728`);
      }
else if(session.message.text.toLowerCase().contains('q9727')){session.send(`A9727`);
      }
else if(session.message.text.toLowerCase().contains('q9726')){session.send(`A9726`);
      }
else if(session.message.text.toLowerCase().contains('q9725')){session.send(`A9725`);
      }
else if(session.message.text.toLowerCase().contains('q9724')){session.send(`A9724`);
      }
else if(session.message.text.toLowerCase().contains('q9723')){session.send(`A9723`);
      }
else if(session.message.text.toLowerCase().contains('q9722')){session.send(`A9722`);
      }
else if(session.message.text.toLowerCase().contains('q9721')){session.send(`A9721`);
      }
else if(session.message.text.toLowerCase().contains('q9720')){session.send(`A9720`);
      }
else if(session.message.text.toLowerCase().contains('q9719')){session.send(`A9719`);
      }
else if(session.message.text.toLowerCase().contains('q9718')){session.send(`A9718`);
      }
else if(session.message.text.toLowerCase().contains('q9717')){session.send(`A9717`);
      }
else if(session.message.text.toLowerCase().contains('q9716')){session.send(`A9716`);
      }
else if(session.message.text.toLowerCase().contains('q9715')){session.send(`A9715`);
      }
else if(session.message.text.toLowerCase().contains('q9714')){session.send(`A9714`);
      }
else if(session.message.text.toLowerCase().contains('q9713')){session.send(`A9713`);
      }
else if(session.message.text.toLowerCase().contains('q9712')){session.send(`A9712`);
      }
else if(session.message.text.toLowerCase().contains('q9711')){session.send(`A9711`);
      }
else if(session.message.text.toLowerCase().contains('q9710')){session.send(`A9710`);
      }
else if(session.message.text.toLowerCase().contains('q9709')){session.send(`A9709`);
      }
else if(session.message.text.toLowerCase().contains('q9708')){session.send(`A9708`);
      }
else if(session.message.text.toLowerCase().contains('q9707')){session.send(`A9707`);
      }
else if(session.message.text.toLowerCase().contains('q9706')){session.send(`A9706`);
      }
else if(session.message.text.toLowerCase().contains('q9705')){session.send(`A9705`);
      }
else if(session.message.text.toLowerCase().contains('q9704')){session.send(`A9704`);
      }
else if(session.message.text.toLowerCase().contains('q9703')){session.send(`A9703`);
      }
else if(session.message.text.toLowerCase().contains('q9702')){session.send(`A9702`);
      }
else if(session.message.text.toLowerCase().contains('q9701')){session.send(`A9701`);
      }
else if(session.message.text.toLowerCase().contains('q9700')){session.send(`A9700`);
      }
else if(session.message.text.toLowerCase().contains('q9699')){session.send(`A9699`);
      }
else if(session.message.text.toLowerCase().contains('q9698')){session.send(`A9698`);
      }
else if(session.message.text.toLowerCase().contains('q9697')){session.send(`A9697`);
      }
else if(session.message.text.toLowerCase().contains('q9696')){session.send(`A9696`);
      }
else if(session.message.text.toLowerCase().contains('q9695')){session.send(`A9695`);
      }
else if(session.message.text.toLowerCase().contains('q9694')){session.send(`A9694`);
      }
else if(session.message.text.toLowerCase().contains('q9693')){session.send(`A9693`);
      }
else if(session.message.text.toLowerCase().contains('q9692')){session.send(`A9692`);
      }
else if(session.message.text.toLowerCase().contains('q9691')){session.send(`A9691`);
      }
else if(session.message.text.toLowerCase().contains('q9690')){session.send(`A9690`);
      }
else if(session.message.text.toLowerCase().contains('q9689')){session.send(`A9689`);
      }
else if(session.message.text.toLowerCase().contains('q9688')){session.send(`A9688`);
      }
else if(session.message.text.toLowerCase().contains('q9687')){session.send(`A9687`);
      }
else if(session.message.text.toLowerCase().contains('q9686')){session.send(`A9686`);
      }
else if(session.message.text.toLowerCase().contains('q9685')){session.send(`A9685`);
      }
else if(session.message.text.toLowerCase().contains('q9684')){session.send(`A9684`);
      }
else if(session.message.text.toLowerCase().contains('q9683')){session.send(`A9683`);
      }
else if(session.message.text.toLowerCase().contains('q9682')){session.send(`A9682`);
      }
else if(session.message.text.toLowerCase().contains('q9681')){session.send(`A9681`);
      }
else if(session.message.text.toLowerCase().contains('q9680')){session.send(`A9680`);
      }
else if(session.message.text.toLowerCase().contains('q9679')){session.send(`A9679`);
      }
else if(session.message.text.toLowerCase().contains('q9678')){session.send(`A9678`);
      }
else if(session.message.text.toLowerCase().contains('q9677')){session.send(`A9677`);
      }
else if(session.message.text.toLowerCase().contains('q9676')){session.send(`A9676`);
      }
else if(session.message.text.toLowerCase().contains('q9675')){session.send(`A9675`);
      }
else if(session.message.text.toLowerCase().contains('q9674')){session.send(`A9674`);
      }
else if(session.message.text.toLowerCase().contains('q9673')){session.send(`A9673`);
      }
else if(session.message.text.toLowerCase().contains('q9672')){session.send(`A9672`);
      }
else if(session.message.text.toLowerCase().contains('q9671')){session.send(`A9671`);
      }
else if(session.message.text.toLowerCase().contains('q9670')){session.send(`A9670`);
      }
else if(session.message.text.toLowerCase().contains('q9669')){session.send(`A9669`);
      }
else if(session.message.text.toLowerCase().contains('q9668')){session.send(`A9668`);
      }
else if(session.message.text.toLowerCase().contains('q9667')){session.send(`A9667`);
      }
else if(session.message.text.toLowerCase().contains('q9666')){session.send(`A9666`);
      }
else if(session.message.text.toLowerCase().contains('q9665')){session.send(`A9665`);
      }
else if(session.message.text.toLowerCase().contains('q9664')){session.send(`A9664`);
      }
else if(session.message.text.toLowerCase().contains('q9663')){session.send(`A9663`);
      }
else if(session.message.text.toLowerCase().contains('q9662')){session.send(`A9662`);
      }
else if(session.message.text.toLowerCase().contains('q9661')){session.send(`A9661`);
      }
else if(session.message.text.toLowerCase().contains('q9660')){session.send(`A9660`);
      }
else if(session.message.text.toLowerCase().contains('q9659')){session.send(`A9659`);
      }
else if(session.message.text.toLowerCase().contains('q9658')){session.send(`A9658`);
      }
else if(session.message.text.toLowerCase().contains('q9657')){session.send(`A9657`);
      }
else if(session.message.text.toLowerCase().contains('q9656')){session.send(`A9656`);
      }
else if(session.message.text.toLowerCase().contains('q9655')){session.send(`A9655`);
      }
else if(session.message.text.toLowerCase().contains('q9654')){session.send(`A9654`);
      }
else if(session.message.text.toLowerCase().contains('q9653')){session.send(`A9653`);
      }
else if(session.message.text.toLowerCase().contains('q9652')){session.send(`A9652`);
      }
else if(session.message.text.toLowerCase().contains('q9651')){session.send(`A9651`);
      }
else if(session.message.text.toLowerCase().contains('q9650')){session.send(`A9650`);
      }
else if(session.message.text.toLowerCase().contains('q9649')){session.send(`A9649`);
      }
else if(session.message.text.toLowerCase().contains('q9648')){session.send(`A9648`);
      }
else if(session.message.text.toLowerCase().contains('q9647')){session.send(`A9647`);
      }
else if(session.message.text.toLowerCase().contains('q9646')){session.send(`A9646`);
      }
else if(session.message.text.toLowerCase().contains('q9645')){session.send(`A9645`);
      }
else if(session.message.text.toLowerCase().contains('q9644')){session.send(`A9644`);
      }
else if(session.message.text.toLowerCase().contains('q9643')){session.send(`A9643`);
      }
else if(session.message.text.toLowerCase().contains('q9642')){session.send(`A9642`);
      }
else if(session.message.text.toLowerCase().contains('q9641')){session.send(`A9641`);
      }
else if(session.message.text.toLowerCase().contains('q9640')){session.send(`A9640`);
      }
else if(session.message.text.toLowerCase().contains('q9639')){session.send(`A9639`);
      }
else if(session.message.text.toLowerCase().contains('q9638')){session.send(`A9638`);
      }
else if(session.message.text.toLowerCase().contains('q9637')){session.send(`A9637`);
      }
else if(session.message.text.toLowerCase().contains('q9636')){session.send(`A9636`);
      }
else if(session.message.text.toLowerCase().contains('q9635')){session.send(`A9635`);
      }
else if(session.message.text.toLowerCase().contains('q9634')){session.send(`A9634`);
      }
else if(session.message.text.toLowerCase().contains('q9633')){session.send(`A9633`);
      }
else if(session.message.text.toLowerCase().contains('q9632')){session.send(`A9632`);
      }
else if(session.message.text.toLowerCase().contains('q9631')){session.send(`A9631`);
      }
else if(session.message.text.toLowerCase().contains('q9630')){session.send(`A9630`);
      }
else if(session.message.text.toLowerCase().contains('q9629')){session.send(`A9629`);
      }
else if(session.message.text.toLowerCase().contains('q9628')){session.send(`A9628`);
      }
else if(session.message.text.toLowerCase().contains('q9627')){session.send(`A9627`);
      }
else if(session.message.text.toLowerCase().contains('q9626')){session.send(`A9626`);
      }
else if(session.message.text.toLowerCase().contains('q9625')){session.send(`A9625`);
      }
else if(session.message.text.toLowerCase().contains('q9624')){session.send(`A9624`);
      }
else if(session.message.text.toLowerCase().contains('q9623')){session.send(`A9623`);
      }
else if(session.message.text.toLowerCase().contains('q9622')){session.send(`A9622`);
      }
else if(session.message.text.toLowerCase().contains('q9621')){session.send(`A9621`);
      }
else if(session.message.text.toLowerCase().contains('q9620')){session.send(`A9620`);
      }
else if(session.message.text.toLowerCase().contains('q9619')){session.send(`A9619`);
      }
else if(session.message.text.toLowerCase().contains('q9618')){session.send(`A9618`);
      }
else if(session.message.text.toLowerCase().contains('q9617')){session.send(`A9617`);
      }
else if(session.message.text.toLowerCase().contains('q9616')){session.send(`A9616`);
      }
else if(session.message.text.toLowerCase().contains('q9615')){session.send(`A9615`);
      }
else if(session.message.text.toLowerCase().contains('q9614')){session.send(`A9614`);
      }
else if(session.message.text.toLowerCase().contains('q9613')){session.send(`A9613`);
      }
else if(session.message.text.toLowerCase().contains('q9612')){session.send(`A9612`);
      }
else if(session.message.text.toLowerCase().contains('q9611')){session.send(`A9611`);
      }
else if(session.message.text.toLowerCase().contains('q9610')){session.send(`A9610`);
      }
else if(session.message.text.toLowerCase().contains('q9609')){session.send(`A9609`);
      }
else if(session.message.text.toLowerCase().contains('q9608')){session.send(`A9608`);
      }
else if(session.message.text.toLowerCase().contains('q9607')){session.send(`A9607`);
      }
else if(session.message.text.toLowerCase().contains('q9606')){session.send(`A9606`);
      }
else if(session.message.text.toLowerCase().contains('q9605')){session.send(`A9605`);
      }
else if(session.message.text.toLowerCase().contains('q9604')){session.send(`A9604`);
      }
else if(session.message.text.toLowerCase().contains('q9603')){session.send(`A9603`);
      }
else if(session.message.text.toLowerCase().contains('q9602')){session.send(`A9602`);
      }
else if(session.message.text.toLowerCase().contains('q9601')){session.send(`A9601`);
      }
else if(session.message.text.toLowerCase().contains('q9600')){session.send(`A9600`);
      }
else if(session.message.text.toLowerCase().contains('q9599')){session.send(`A9599`);
      }
else if(session.message.text.toLowerCase().contains('q9598')){session.send(`A9598`);
      }
else if(session.message.text.toLowerCase().contains('q9597')){session.send(`A9597`);
      }
else if(session.message.text.toLowerCase().contains('q9596')){session.send(`A9596`);
      }
else if(session.message.text.toLowerCase().contains('q9595')){session.send(`A9595`);
      }
else if(session.message.text.toLowerCase().contains('q9594')){session.send(`A9594`);
      }
else if(session.message.text.toLowerCase().contains('q9593')){session.send(`A9593`);
      }
else if(session.message.text.toLowerCase().contains('q9592')){session.send(`A9592`);
      }
else if(session.message.text.toLowerCase().contains('q9591')){session.send(`A9591`);
      }
else if(session.message.text.toLowerCase().contains('q9590')){session.send(`A9590`);
      }
else if(session.message.text.toLowerCase().contains('q9589')){session.send(`A9589`);
      }
else if(session.message.text.toLowerCase().contains('q9588')){session.send(`A9588`);
      }
else if(session.message.text.toLowerCase().contains('q9587')){session.send(`A9587`);
      }
else if(session.message.text.toLowerCase().contains('q9586')){session.send(`A9586`);
      }
else if(session.message.text.toLowerCase().contains('q9585')){session.send(`A9585`);
      }
else if(session.message.text.toLowerCase().contains('q9584')){session.send(`A9584`);
      }
else if(session.message.text.toLowerCase().contains('q9583')){session.send(`A9583`);
      }
else if(session.message.text.toLowerCase().contains('q9582')){session.send(`A9582`);
      }
else if(session.message.text.toLowerCase().contains('q9581')){session.send(`A9581`);
      }
else if(session.message.text.toLowerCase().contains('q9580')){session.send(`A9580`);
      }
else if(session.message.text.toLowerCase().contains('q9579')){session.send(`A9579`);
      }
else if(session.message.text.toLowerCase().contains('q9578')){session.send(`A9578`);
      }
else if(session.message.text.toLowerCase().contains('q9577')){session.send(`A9577`);
      }
else if(session.message.text.toLowerCase().contains('q9576')){session.send(`A9576`);
      }
else if(session.message.text.toLowerCase().contains('q9575')){session.send(`A9575`);
      }
else if(session.message.text.toLowerCase().contains('q9574')){session.send(`A9574`);
      }
else if(session.message.text.toLowerCase().contains('q9573')){session.send(`A9573`);
      }
else if(session.message.text.toLowerCase().contains('q9572')){session.send(`A9572`);
      }
else if(session.message.text.toLowerCase().contains('q9571')){session.send(`A9571`);
      }
else if(session.message.text.toLowerCase().contains('q9570')){session.send(`A9570`);
      }
else if(session.message.text.toLowerCase().contains('q9569')){session.send(`A9569`);
      }
else if(session.message.text.toLowerCase().contains('q9568')){session.send(`A9568`);
      }
else if(session.message.text.toLowerCase().contains('q9567')){session.send(`A9567`);
      }
else if(session.message.text.toLowerCase().contains('q9566')){session.send(`A9566`);
      }
else if(session.message.text.toLowerCase().contains('q9565')){session.send(`A9565`);
      }
else if(session.message.text.toLowerCase().contains('q9564')){session.send(`A9564`);
      }
else if(session.message.text.toLowerCase().contains('q9563')){session.send(`A9563`);
      }
else if(session.message.text.toLowerCase().contains('q9562')){session.send(`A9562`);
      }
else if(session.message.text.toLowerCase().contains('q9561')){session.send(`A9561`);
      }
else if(session.message.text.toLowerCase().contains('q9560')){session.send(`A9560`);
      }
else if(session.message.text.toLowerCase().contains('q9559')){session.send(`A9559`);
      }
else if(session.message.text.toLowerCase().contains('q9558')){session.send(`A9558`);
      }
else if(session.message.text.toLowerCase().contains('q9557')){session.send(`A9557`);
      }
else if(session.message.text.toLowerCase().contains('q9556')){session.send(`A9556`);
      }
else if(session.message.text.toLowerCase().contains('q9555')){session.send(`A9555`);
      }
else if(session.message.text.toLowerCase().contains('q9554')){session.send(`A9554`);
      }
else if(session.message.text.toLowerCase().contains('q9553')){session.send(`A9553`);
      }
else if(session.message.text.toLowerCase().contains('q9552')){session.send(`A9552`);
      }
else if(session.message.text.toLowerCase().contains('q9551')){session.send(`A9551`);
      }
else if(session.message.text.toLowerCase().contains('q9550')){session.send(`A9550`);
      }
else if(session.message.text.toLowerCase().contains('q9549')){session.send(`A9549`);
      }
else if(session.message.text.toLowerCase().contains('q9548')){session.send(`A9548`);
      }
else if(session.message.text.toLowerCase().contains('q9547')){session.send(`A9547`);
      }
else if(session.message.text.toLowerCase().contains('q9546')){session.send(`A9546`);
      }
else if(session.message.text.toLowerCase().contains('q9545')){session.send(`A9545`);
      }
else if(session.message.text.toLowerCase().contains('q9544')){session.send(`A9544`);
      }
else if(session.message.text.toLowerCase().contains('q9543')){session.send(`A9543`);
      }
else if(session.message.text.toLowerCase().contains('q9542')){session.send(`A9542`);
      }
else if(session.message.text.toLowerCase().contains('q9541')){session.send(`A9541`);
      }
else if(session.message.text.toLowerCase().contains('q9540')){session.send(`A9540`);
      }
else if(session.message.text.toLowerCase().contains('q9539')){session.send(`A9539`);
      }
else if(session.message.text.toLowerCase().contains('q9538')){session.send(`A9538`);
      }
else if(session.message.text.toLowerCase().contains('q9537')){session.send(`A9537`);
      }
else if(session.message.text.toLowerCase().contains('q9536')){session.send(`A9536`);
      }
else if(session.message.text.toLowerCase().contains('q9535')){session.send(`A9535`);
      }
else if(session.message.text.toLowerCase().contains('q9534')){session.send(`A9534`);
      }
else if(session.message.text.toLowerCase().contains('q9533')){session.send(`A9533`);
      }
else if(session.message.text.toLowerCase().contains('q9532')){session.send(`A9532`);
      }
else if(session.message.text.toLowerCase().contains('q9531')){session.send(`A9531`);
      }
else if(session.message.text.toLowerCase().contains('q9530')){session.send(`A9530`);
      }
else if(session.message.text.toLowerCase().contains('q9529')){session.send(`A9529`);
      }
else if(session.message.text.toLowerCase().contains('q9528')){session.send(`A9528`);
      }
else if(session.message.text.toLowerCase().contains('q9527')){session.send(`A9527`);
      }
else if(session.message.text.toLowerCase().contains('q9526')){session.send(`A9526`);
      }
else if(session.message.text.toLowerCase().contains('q9525')){session.send(`A9525`);
      }
else if(session.message.text.toLowerCase().contains('q9524')){session.send(`A9524`);
      }
else if(session.message.text.toLowerCase().contains('q9523')){session.send(`A9523`);
      }
else if(session.message.text.toLowerCase().contains('q9522')){session.send(`A9522`);
      }
else if(session.message.text.toLowerCase().contains('q9521')){session.send(`A9521`);
      }
else if(session.message.text.toLowerCase().contains('q9520')){session.send(`A9520`);
      }
else if(session.message.text.toLowerCase().contains('q9519')){session.send(`A9519`);
      }
else if(session.message.text.toLowerCase().contains('q9518')){session.send(`A9518`);
      }
else if(session.message.text.toLowerCase().contains('q9517')){session.send(`A9517`);
      }
else if(session.message.text.toLowerCase().contains('q9516')){session.send(`A9516`);
      }
else if(session.message.text.toLowerCase().contains('q9515')){session.send(`A9515`);
      }
else if(session.message.text.toLowerCase().contains('q9514')){session.send(`A9514`);
      }
else if(session.message.text.toLowerCase().contains('q9513')){session.send(`A9513`);
      }
else if(session.message.text.toLowerCase().contains('q9512')){session.send(`A9512`);
      }
else if(session.message.text.toLowerCase().contains('q9511')){session.send(`A9511`);
      }
else if(session.message.text.toLowerCase().contains('q9510')){session.send(`A9510`);
      }
else if(session.message.text.toLowerCase().contains('q9509')){session.send(`A9509`);
      }
else if(session.message.text.toLowerCase().contains('q9508')){session.send(`A9508`);
      }
else if(session.message.text.toLowerCase().contains('q9507')){session.send(`A9507`);
      }
else if(session.message.text.toLowerCase().contains('q9506')){session.send(`A9506`);
      }
else if(session.message.text.toLowerCase().contains('q9505')){session.send(`A9505`);
      }
else if(session.message.text.toLowerCase().contains('q9504')){session.send(`A9504`);
      }
else if(session.message.text.toLowerCase().contains('q9503')){session.send(`A9503`);
      }
else if(session.message.text.toLowerCase().contains('q9502')){session.send(`A9502`);
      }
else if(session.message.text.toLowerCase().contains('q9501')){session.send(`A9501`);
      }
else if(session.message.text.toLowerCase().contains('q9500')){session.send(`A9500`);
      }
else if(session.message.text.toLowerCase().contains('q9499')){session.send(`A9499`);
      }
else if(session.message.text.toLowerCase().contains('q9498')){session.send(`A9498`);
      }
else if(session.message.text.toLowerCase().contains('q9497')){session.send(`A9497`);
      }
else if(session.message.text.toLowerCase().contains('q9496')){session.send(`A9496`);
      }
else if(session.message.text.toLowerCase().contains('q9495')){session.send(`A9495`);
      }
else if(session.message.text.toLowerCase().contains('q9494')){session.send(`A9494`);
      }
else if(session.message.text.toLowerCase().contains('q9493')){session.send(`A9493`);
      }
else if(session.message.text.toLowerCase().contains('q9492')){session.send(`A9492`);
      }
else if(session.message.text.toLowerCase().contains('q9491')){session.send(`A9491`);
      }
else if(session.message.text.toLowerCase().contains('q9490')){session.send(`A9490`);
      }
else if(session.message.text.toLowerCase().contains('q9489')){session.send(`A9489`);
      }
else if(session.message.text.toLowerCase().contains('q9488')){session.send(`A9488`);
      }
else if(session.message.text.toLowerCase().contains('q9487')){session.send(`A9487`);
      }
else if(session.message.text.toLowerCase().contains('q9486')){session.send(`A9486`);
      }
else if(session.message.text.toLowerCase().contains('q9485')){session.send(`A9485`);
      }
else if(session.message.text.toLowerCase().contains('q9484')){session.send(`A9484`);
      }
else if(session.message.text.toLowerCase().contains('q9483')){session.send(`A9483`);
      }
else if(session.message.text.toLowerCase().contains('q9482')){session.send(`A9482`);
      }
else if(session.message.text.toLowerCase().contains('q9481')){session.send(`A9481`);
      }
else if(session.message.text.toLowerCase().contains('q9480')){session.send(`A9480`);
      }
else if(session.message.text.toLowerCase().contains('q9479')){session.send(`A9479`);
      }
else if(session.message.text.toLowerCase().contains('q9478')){session.send(`A9478`);
      }
else if(session.message.text.toLowerCase().contains('q9477')){session.send(`A9477`);
      }
else if(session.message.text.toLowerCase().contains('q9476')){session.send(`A9476`);
      }
else if(session.message.text.toLowerCase().contains('q9475')){session.send(`A9475`);
      }
else if(session.message.text.toLowerCase().contains('q9474')){session.send(`A9474`);
      }
else if(session.message.text.toLowerCase().contains('q9473')){session.send(`A9473`);
      }
else if(session.message.text.toLowerCase().contains('q9472')){session.send(`A9472`);
      }
else if(session.message.text.toLowerCase().contains('q9471')){session.send(`A9471`);
      }
else if(session.message.text.toLowerCase().contains('q9470')){session.send(`A9470`);
      }
else if(session.message.text.toLowerCase().contains('q9469')){session.send(`A9469`);
      }
else if(session.message.text.toLowerCase().contains('q9468')){session.send(`A9468`);
      }
else if(session.message.text.toLowerCase().contains('q9467')){session.send(`A9467`);
      }
else if(session.message.text.toLowerCase().contains('q9466')){session.send(`A9466`);
      }
else if(session.message.text.toLowerCase().contains('q9465')){session.send(`A9465`);
      }
else if(session.message.text.toLowerCase().contains('q9464')){session.send(`A9464`);
      }
else if(session.message.text.toLowerCase().contains('q9463')){session.send(`A9463`);
      }
else if(session.message.text.toLowerCase().contains('q9462')){session.send(`A9462`);
      }
else if(session.message.text.toLowerCase().contains('q9461')){session.send(`A9461`);
      }
else if(session.message.text.toLowerCase().contains('q9460')){session.send(`A9460`);
      }
else if(session.message.text.toLowerCase().contains('q9459')){session.send(`A9459`);
      }
else if(session.message.text.toLowerCase().contains('q9458')){session.send(`A9458`);
      }
else if(session.message.text.toLowerCase().contains('q9457')){session.send(`A9457`);
      }
else if(session.message.text.toLowerCase().contains('q9456')){session.send(`A9456`);
      }
else if(session.message.text.toLowerCase().contains('q9455')){session.send(`A9455`);
      }
else if(session.message.text.toLowerCase().contains('q9454')){session.send(`A9454`);
      }
else if(session.message.text.toLowerCase().contains('q9453')){session.send(`A9453`);
      }
else if(session.message.text.toLowerCase().contains('q9452')){session.send(`A9452`);
      }
else if(session.message.text.toLowerCase().contains('q9451')){session.send(`A9451`);
      }
else if(session.message.text.toLowerCase().contains('q9450')){session.send(`A9450`);
      }
else if(session.message.text.toLowerCase().contains('q9449')){session.send(`A9449`);
      }
else if(session.message.text.toLowerCase().contains('q9448')){session.send(`A9448`);
      }
else if(session.message.text.toLowerCase().contains('q9447')){session.send(`A9447`);
      }
else if(session.message.text.toLowerCase().contains('q9446')){session.send(`A9446`);
      }
else if(session.message.text.toLowerCase().contains('q9445')){session.send(`A9445`);
      }
else if(session.message.text.toLowerCase().contains('q9444')){session.send(`A9444`);
      }
else if(session.message.text.toLowerCase().contains('q9443')){session.send(`A9443`);
      }
else if(session.message.text.toLowerCase().contains('q9442')){session.send(`A9442`);
      }
else if(session.message.text.toLowerCase().contains('q9441')){session.send(`A9441`);
      }
else if(session.message.text.toLowerCase().contains('q9440')){session.send(`A9440`);
      }
else if(session.message.text.toLowerCase().contains('q9439')){session.send(`A9439`);
      }
else if(session.message.text.toLowerCase().contains('q9438')){session.send(`A9438`);
      }
else if(session.message.text.toLowerCase().contains('q9437')){session.send(`A9437`);
      }
else if(session.message.text.toLowerCase().contains('q9436')){session.send(`A9436`);
      }
else if(session.message.text.toLowerCase().contains('q9435')){session.send(`A9435`);
      }
else if(session.message.text.toLowerCase().contains('q9434')){session.send(`A9434`);
      }
else if(session.message.text.toLowerCase().contains('q9433')){session.send(`A9433`);
      }
else if(session.message.text.toLowerCase().contains('q9432')){session.send(`A9432`);
      }
else if(session.message.text.toLowerCase().contains('q9431')){session.send(`A9431`);
      }
else if(session.message.text.toLowerCase().contains('q9430')){session.send(`A9430`);
      }
else if(session.message.text.toLowerCase().contains('q9429')){session.send(`A9429`);
      }
else if(session.message.text.toLowerCase().contains('q9428')){session.send(`A9428`);
      }
else if(session.message.text.toLowerCase().contains('q9427')){session.send(`A9427`);
      }
else if(session.message.text.toLowerCase().contains('q9426')){session.send(`A9426`);
      }
else if(session.message.text.toLowerCase().contains('q9425')){session.send(`A9425`);
      }
else if(session.message.text.toLowerCase().contains('q9424')){session.send(`A9424`);
      }
else if(session.message.text.toLowerCase().contains('q9423')){session.send(`A9423`);
      }
else if(session.message.text.toLowerCase().contains('q9422')){session.send(`A9422`);
      }
else if(session.message.text.toLowerCase().contains('q9421')){session.send(`A9421`);
      }
else if(session.message.text.toLowerCase().contains('q9420')){session.send(`A9420`);
      }
else if(session.message.text.toLowerCase().contains('q9419')){session.send(`A9419`);
      }
else if(session.message.text.toLowerCase().contains('q9418')){session.send(`A9418`);
      }
else if(session.message.text.toLowerCase().contains('q9417')){session.send(`A9417`);
      }
else if(session.message.text.toLowerCase().contains('q9416')){session.send(`A9416`);
      }
else if(session.message.text.toLowerCase().contains('q9415')){session.send(`A9415`);
      }
else if(session.message.text.toLowerCase().contains('q9414')){session.send(`A9414`);
      }
else if(session.message.text.toLowerCase().contains('q9413')){session.send(`A9413`);
      }
else if(session.message.text.toLowerCase().contains('q9412')){session.send(`A9412`);
      }
else if(session.message.text.toLowerCase().contains('q9411')){session.send(`A9411`);
      }
else if(session.message.text.toLowerCase().contains('q9410')){session.send(`A9410`);
      }
else if(session.message.text.toLowerCase().contains('q9409')){session.send(`A9409`);
      }
else if(session.message.text.toLowerCase().contains('q9408')){session.send(`A9408`);
      }
else if(session.message.text.toLowerCase().contains('q9407')){session.send(`A9407`);
      }
else if(session.message.text.toLowerCase().contains('q9406')){session.send(`A9406`);
      }
else if(session.message.text.toLowerCase().contains('q9405')){session.send(`A9405`);
      }
else if(session.message.text.toLowerCase().contains('q9404')){session.send(`A9404`);
      }
else if(session.message.text.toLowerCase().contains('q9403')){session.send(`A9403`);
      }
else if(session.message.text.toLowerCase().contains('q9402')){session.send(`A9402`);
      }
else if(session.message.text.toLowerCase().contains('q9401')){session.send(`A9401`);
      }
else if(session.message.text.toLowerCase().contains('q9400')){session.send(`A9400`);
      }
else if(session.message.text.toLowerCase().contains('q9399')){session.send(`A9399`);
      }
else if(session.message.text.toLowerCase().contains('q9398')){session.send(`A9398`);
      }
else if(session.message.text.toLowerCase().contains('q9397')){session.send(`A9397`);
      }
else if(session.message.text.toLowerCase().contains('q9396')){session.send(`A9396`);
      }
else if(session.message.text.toLowerCase().contains('q9395')){session.send(`A9395`);
      }
else if(session.message.text.toLowerCase().contains('q9394')){session.send(`A9394`);
      }
else if(session.message.text.toLowerCase().contains('q9393')){session.send(`A9393`);
      }
else if(session.message.text.toLowerCase().contains('q9392')){session.send(`A9392`);
      }
else if(session.message.text.toLowerCase().contains('q9391')){session.send(`A9391`);
      }
else if(session.message.text.toLowerCase().contains('q9390')){session.send(`A9390`);
      }
else if(session.message.text.toLowerCase().contains('q9389')){session.send(`A9389`);
      }
else if(session.message.text.toLowerCase().contains('q9388')){session.send(`A9388`);
      }
else if(session.message.text.toLowerCase().contains('q9387')){session.send(`A9387`);
      }
else if(session.message.text.toLowerCase().contains('q9386')){session.send(`A9386`);
      }
else if(session.message.text.toLowerCase().contains('q9385')){session.send(`A9385`);
      }
else if(session.message.text.toLowerCase().contains('q9384')){session.send(`A9384`);
      }
else if(session.message.text.toLowerCase().contains('q9383')){session.send(`A9383`);
      }
else if(session.message.text.toLowerCase().contains('q9382')){session.send(`A9382`);
      }
else if(session.message.text.toLowerCase().contains('q9381')){session.send(`A9381`);
      }
else if(session.message.text.toLowerCase().contains('q9380')){session.send(`A9380`);
      }
else if(session.message.text.toLowerCase().contains('q9379')){session.send(`A9379`);
      }
else if(session.message.text.toLowerCase().contains('q9378')){session.send(`A9378`);
      }
else if(session.message.text.toLowerCase().contains('q9377')){session.send(`A9377`);
      }
else if(session.message.text.toLowerCase().contains('q9376')){session.send(`A9376`);
      }
else if(session.message.text.toLowerCase().contains('q9375')){session.send(`A9375`);
      }
else if(session.message.text.toLowerCase().contains('q9374')){session.send(`A9374`);
      }
else if(session.message.text.toLowerCase().contains('q9373')){session.send(`A9373`);
      }
else if(session.message.text.toLowerCase().contains('q9372')){session.send(`A9372`);
      }
else if(session.message.text.toLowerCase().contains('q9371')){session.send(`A9371`);
      }
else if(session.message.text.toLowerCase().contains('q9370')){session.send(`A9370`);
      }
else if(session.message.text.toLowerCase().contains('q9369')){session.send(`A9369`);
      }
else if(session.message.text.toLowerCase().contains('q9368')){session.send(`A9368`);
      }
else if(session.message.text.toLowerCase().contains('q9367')){session.send(`A9367`);
      }
else if(session.message.text.toLowerCase().contains('q9366')){session.send(`A9366`);
      }
else if(session.message.text.toLowerCase().contains('q9365')){session.send(`A9365`);
      }
else if(session.message.text.toLowerCase().contains('q9364')){session.send(`A9364`);
      }
else if(session.message.text.toLowerCase().contains('q9363')){session.send(`A9363`);
      }
else if(session.message.text.toLowerCase().contains('q9362')){session.send(`A9362`);
      }
else if(session.message.text.toLowerCase().contains('q9361')){session.send(`A9361`);
      }
else if(session.message.text.toLowerCase().contains('q9360')){session.send(`A9360`);
      }
else if(session.message.text.toLowerCase().contains('q9359')){session.send(`A9359`);
      }
else if(session.message.text.toLowerCase().contains('q9358')){session.send(`A9358`);
      }
else if(session.message.text.toLowerCase().contains('q9357')){session.send(`A9357`);
      }
else if(session.message.text.toLowerCase().contains('q9356')){session.send(`A9356`);
      }
else if(session.message.text.toLowerCase().contains('q9355')){session.send(`A9355`);
      }
else if(session.message.text.toLowerCase().contains('q9354')){session.send(`A9354`);
      }
else if(session.message.text.toLowerCase().contains('q9353')){session.send(`A9353`);
      }
else if(session.message.text.toLowerCase().contains('q9352')){session.send(`A9352`);
      }
else if(session.message.text.toLowerCase().contains('q9351')){session.send(`A9351`);
      }
else if(session.message.text.toLowerCase().contains('q9350')){session.send(`A9350`);
      }
else if(session.message.text.toLowerCase().contains('q9349')){session.send(`A9349`);
      }
else if(session.message.text.toLowerCase().contains('q9348')){session.send(`A9348`);
      }
else if(session.message.text.toLowerCase().contains('q9347')){session.send(`A9347`);
      }
else if(session.message.text.toLowerCase().contains('q9346')){session.send(`A9346`);
      }
else if(session.message.text.toLowerCase().contains('q9345')){session.send(`A9345`);
      }
else if(session.message.text.toLowerCase().contains('q9344')){session.send(`A9344`);
      }
else if(session.message.text.toLowerCase().contains('q9343')){session.send(`A9343`);
      }
else if(session.message.text.toLowerCase().contains('q9342')){session.send(`A9342`);
      }
else if(session.message.text.toLowerCase().contains('q9341')){session.send(`A9341`);
      }
else if(session.message.text.toLowerCase().contains('q9340')){session.send(`A9340`);
      }
else if(session.message.text.toLowerCase().contains('q9339')){session.send(`A9339`);
      }
else if(session.message.text.toLowerCase().contains('q9338')){session.send(`A9338`);
      }
else if(session.message.text.toLowerCase().contains('q9337')){session.send(`A9337`);
      }
else if(session.message.text.toLowerCase().contains('q9336')){session.send(`A9336`);
      }
else if(session.message.text.toLowerCase().contains('q9335')){session.send(`A9335`);
      }
else if(session.message.text.toLowerCase().contains('q9334')){session.send(`A9334`);
      }
else if(session.message.text.toLowerCase().contains('q9333')){session.send(`A9333`);
      }
else if(session.message.text.toLowerCase().contains('q9332')){session.send(`A9332`);
      }
else if(session.message.text.toLowerCase().contains('q9331')){session.send(`A9331`);
      }
else if(session.message.text.toLowerCase().contains('q9330')){session.send(`A9330`);
      }
else if(session.message.text.toLowerCase().contains('q9329')){session.send(`A9329`);
      }
else if(session.message.text.toLowerCase().contains('q9328')){session.send(`A9328`);
      }
else if(session.message.text.toLowerCase().contains('q9327')){session.send(`A9327`);
      }
else if(session.message.text.toLowerCase().contains('q9326')){session.send(`A9326`);
      }
else if(session.message.text.toLowerCase().contains('q9325')){session.send(`A9325`);
      }
else if(session.message.text.toLowerCase().contains('q9324')){session.send(`A9324`);
      }
else if(session.message.text.toLowerCase().contains('q9323')){session.send(`A9323`);
      }
else if(session.message.text.toLowerCase().contains('q9322')){session.send(`A9322`);
      }
else if(session.message.text.toLowerCase().contains('q9321')){session.send(`A9321`);
      }
else if(session.message.text.toLowerCase().contains('q9320')){session.send(`A9320`);
      }
else if(session.message.text.toLowerCase().contains('q9319')){session.send(`A9319`);
      }
else if(session.message.text.toLowerCase().contains('q9318')){session.send(`A9318`);
      }
else if(session.message.text.toLowerCase().contains('q9317')){session.send(`A9317`);
      }
else if(session.message.text.toLowerCase().contains('q9316')){session.send(`A9316`);
      }
else if(session.message.text.toLowerCase().contains('q9315')){session.send(`A9315`);
      }
else if(session.message.text.toLowerCase().contains('q9314')){session.send(`A9314`);
      }
else if(session.message.text.toLowerCase().contains('q9313')){session.send(`A9313`);
      }
else if(session.message.text.toLowerCase().contains('q9312')){session.send(`A9312`);
      }
else if(session.message.text.toLowerCase().contains('q9311')){session.send(`A9311`);
      }
else if(session.message.text.toLowerCase().contains('q9310')){session.send(`A9310`);
      }
else if(session.message.text.toLowerCase().contains('q9309')){session.send(`A9309`);
      }
else if(session.message.text.toLowerCase().contains('q9308')){session.send(`A9308`);
      }
else if(session.message.text.toLowerCase().contains('q9307')){session.send(`A9307`);
      }
else if(session.message.text.toLowerCase().contains('q9306')){session.send(`A9306`);
      }
else if(session.message.text.toLowerCase().contains('q9305')){session.send(`A9305`);
      }
else if(session.message.text.toLowerCase().contains('q9304')){session.send(`A9304`);
      }
else if(session.message.text.toLowerCase().contains('q9303')){session.send(`A9303`);
      }
else if(session.message.text.toLowerCase().contains('q9302')){session.send(`A9302`);
      }
else if(session.message.text.toLowerCase().contains('q9301')){session.send(`A9301`);
      }
else if(session.message.text.toLowerCase().contains('q9300')){session.send(`A9300`);
      }
else if(session.message.text.toLowerCase().contains('q9299')){session.send(`A9299`);
      }
else if(session.message.text.toLowerCase().contains('q9298')){session.send(`A9298`);
      }
else if(session.message.text.toLowerCase().contains('q9297')){session.send(`A9297`);
      }
else if(session.message.text.toLowerCase().contains('q9296')){session.send(`A9296`);
      }
else if(session.message.text.toLowerCase().contains('q9295')){session.send(`A9295`);
      }
else if(session.message.text.toLowerCase().contains('q9294')){session.send(`A9294`);
      }
else if(session.message.text.toLowerCase().contains('q9293')){session.send(`A9293`);
      }
else if(session.message.text.toLowerCase().contains('q9292')){session.send(`A9292`);
      }
else if(session.message.text.toLowerCase().contains('q9291')){session.send(`A9291`);
      }
else if(session.message.text.toLowerCase().contains('q9290')){session.send(`A9290`);
      }
else if(session.message.text.toLowerCase().contains('q9289')){session.send(`A9289`);
      }
else if(session.message.text.toLowerCase().contains('q9288')){session.send(`A9288`);
      }
else if(session.message.text.toLowerCase().contains('q9287')){session.send(`A9287`);
      }
else if(session.message.text.toLowerCase().contains('q9286')){session.send(`A9286`);
      }
else if(session.message.text.toLowerCase().contains('q9285')){session.send(`A9285`);
      }
else if(session.message.text.toLowerCase().contains('q9284')){session.send(`A9284`);
      }
else if(session.message.text.toLowerCase().contains('q9283')){session.send(`A9283`);
      }
else if(session.message.text.toLowerCase().contains('q9282')){session.send(`A9282`);
      }
else if(session.message.text.toLowerCase().contains('q9281')){session.send(`A9281`);
      }
else if(session.message.text.toLowerCase().contains('q9280')){session.send(`A9280`);
      }
else if(session.message.text.toLowerCase().contains('q9279')){session.send(`A9279`);
      }
else if(session.message.text.toLowerCase().contains('q9278')){session.send(`A9278`);
      }
else if(session.message.text.toLowerCase().contains('q9277')){session.send(`A9277`);
      }
else if(session.message.text.toLowerCase().contains('q9276')){session.send(`A9276`);
      }
else if(session.message.text.toLowerCase().contains('q9275')){session.send(`A9275`);
      }
else if(session.message.text.toLowerCase().contains('q9274')){session.send(`A9274`);
      }
else if(session.message.text.toLowerCase().contains('q9273')){session.send(`A9273`);
      }
else if(session.message.text.toLowerCase().contains('q9272')){session.send(`A9272`);
      }
else if(session.message.text.toLowerCase().contains('q9271')){session.send(`A9271`);
      }
else if(session.message.text.toLowerCase().contains('q9270')){session.send(`A9270`);
      }
else if(session.message.text.toLowerCase().contains('q9269')){session.send(`A9269`);
      }
else if(session.message.text.toLowerCase().contains('q9268')){session.send(`A9268`);
      }
else if(session.message.text.toLowerCase().contains('q9267')){session.send(`A9267`);
      }
else if(session.message.text.toLowerCase().contains('q9266')){session.send(`A9266`);
      }
else if(session.message.text.toLowerCase().contains('q9265')){session.send(`A9265`);
      }
else if(session.message.text.toLowerCase().contains('q9264')){session.send(`A9264`);
      }
else if(session.message.text.toLowerCase().contains('q9263')){session.send(`A9263`);
      }
else if(session.message.text.toLowerCase().contains('q9262')){session.send(`A9262`);
      }
else if(session.message.text.toLowerCase().contains('q9261')){session.send(`A9261`);
      }
else if(session.message.text.toLowerCase().contains('q9260')){session.send(`A9260`);
      }
else if(session.message.text.toLowerCase().contains('q9259')){session.send(`A9259`);
      }
else if(session.message.text.toLowerCase().contains('q9258')){session.send(`A9258`);
      }
else if(session.message.text.toLowerCase().contains('q9257')){session.send(`A9257`);
      }
else if(session.message.text.toLowerCase().contains('q9256')){session.send(`A9256`);
      }
else if(session.message.text.toLowerCase().contains('q9255')){session.send(`A9255`);
      }
else if(session.message.text.toLowerCase().contains('q9254')){session.send(`A9254`);
      }
else if(session.message.text.toLowerCase().contains('q9253')){session.send(`A9253`);
      }
else if(session.message.text.toLowerCase().contains('q9252')){session.send(`A9252`);
      }
else if(session.message.text.toLowerCase().contains('q9251')){session.send(`A9251`);
      }
else if(session.message.text.toLowerCase().contains('q9250')){session.send(`A9250`);
      }
else if(session.message.text.toLowerCase().contains('q9249')){session.send(`A9249`);
      }
else if(session.message.text.toLowerCase().contains('q9248')){session.send(`A9248`);
      }
else if(session.message.text.toLowerCase().contains('q9247')){session.send(`A9247`);
      }
else if(session.message.text.toLowerCase().contains('q9246')){session.send(`A9246`);
      }
else if(session.message.text.toLowerCase().contains('q9245')){session.send(`A9245`);
      }
else if(session.message.text.toLowerCase().contains('q9244')){session.send(`A9244`);
      }
else if(session.message.text.toLowerCase().contains('q9243')){session.send(`A9243`);
      }
else if(session.message.text.toLowerCase().contains('q9242')){session.send(`A9242`);
      }
else if(session.message.text.toLowerCase().contains('q9241')){session.send(`A9241`);
      }
else if(session.message.text.toLowerCase().contains('q9240')){session.send(`A9240`);
      }
else if(session.message.text.toLowerCase().contains('q9239')){session.send(`A9239`);
      }
else if(session.message.text.toLowerCase().contains('q9238')){session.send(`A9238`);
      }
else if(session.message.text.toLowerCase().contains('q9237')){session.send(`A9237`);
      }
else if(session.message.text.toLowerCase().contains('q9236')){session.send(`A9236`);
      }
else if(session.message.text.toLowerCase().contains('q9235')){session.send(`A9235`);
      }
else if(session.message.text.toLowerCase().contains('q9234')){session.send(`A9234`);
      }
else if(session.message.text.toLowerCase().contains('q9233')){session.send(`A9233`);
      }
else if(session.message.text.toLowerCase().contains('q9232')){session.send(`A9232`);
      }
else if(session.message.text.toLowerCase().contains('q9231')){session.send(`A9231`);
      }
else if(session.message.text.toLowerCase().contains('q9230')){session.send(`A9230`);
      }
else if(session.message.text.toLowerCase().contains('q9229')){session.send(`A9229`);
      }
else if(session.message.text.toLowerCase().contains('q9228')){session.send(`A9228`);
      }
else if(session.message.text.toLowerCase().contains('q9227')){session.send(`A9227`);
      }
else if(session.message.text.toLowerCase().contains('q9226')){session.send(`A9226`);
      }
else if(session.message.text.toLowerCase().contains('q9225')){session.send(`A9225`);
      }
else if(session.message.text.toLowerCase().contains('q9224')){session.send(`A9224`);
      }
else if(session.message.text.toLowerCase().contains('q9223')){session.send(`A9223`);
      }
else if(session.message.text.toLowerCase().contains('q9222')){session.send(`A9222`);
      }
else if(session.message.text.toLowerCase().contains('q9221')){session.send(`A9221`);
      }
else if(session.message.text.toLowerCase().contains('q9220')){session.send(`A9220`);
      }
else if(session.message.text.toLowerCase().contains('q9219')){session.send(`A9219`);
      }
else if(session.message.text.toLowerCase().contains('q9218')){session.send(`A9218`);
      }
else if(session.message.text.toLowerCase().contains('q9217')){session.send(`A9217`);
      }
else if(session.message.text.toLowerCase().contains('q9216')){session.send(`A9216`);
      }
else if(session.message.text.toLowerCase().contains('q9215')){session.send(`A9215`);
      }
else if(session.message.text.toLowerCase().contains('q9214')){session.send(`A9214`);
      }
else if(session.message.text.toLowerCase().contains('q9213')){session.send(`A9213`);
      }
else if(session.message.text.toLowerCase().contains('q9212')){session.send(`A9212`);
      }
else if(session.message.text.toLowerCase().contains('q9211')){session.send(`A9211`);
      }
else if(session.message.text.toLowerCase().contains('q9210')){session.send(`A9210`);
      }
else if(session.message.text.toLowerCase().contains('q9209')){session.send(`A9209`);
      }
else if(session.message.text.toLowerCase().contains('q9208')){session.send(`A9208`);
      }
else if(session.message.text.toLowerCase().contains('q9207')){session.send(`A9207`);
      }
else if(session.message.text.toLowerCase().contains('q9206')){session.send(`A9206`);
      }
else if(session.message.text.toLowerCase().contains('q9205')){session.send(`A9205`);
      }
else if(session.message.text.toLowerCase().contains('q9204')){session.send(`A9204`);
      }
else if(session.message.text.toLowerCase().contains('q9203')){session.send(`A9203`);
      }
else if(session.message.text.toLowerCase().contains('q9202')){session.send(`A9202`);
      }
else if(session.message.text.toLowerCase().contains('q9201')){session.send(`A9201`);
      }
else if(session.message.text.toLowerCase().contains('q9200')){session.send(`A9200`);
      }
else if(session.message.text.toLowerCase().contains('q9199')){session.send(`A9199`);
      }
else if(session.message.text.toLowerCase().contains('q9198')){session.send(`A9198`);
      }
else if(session.message.text.toLowerCase().contains('q9197')){session.send(`A9197`);
      }
else if(session.message.text.toLowerCase().contains('q9196')){session.send(`A9196`);
      }
else if(session.message.text.toLowerCase().contains('q9195')){session.send(`A9195`);
      }
else if(session.message.text.toLowerCase().contains('q9194')){session.send(`A9194`);
      }
else if(session.message.text.toLowerCase().contains('q9193')){session.send(`A9193`);
      }
else if(session.message.text.toLowerCase().contains('q9192')){session.send(`A9192`);
      }
else if(session.message.text.toLowerCase().contains('q9191')){session.send(`A9191`);
      }
else if(session.message.text.toLowerCase().contains('q9190')){session.send(`A9190`);
      }
else if(session.message.text.toLowerCase().contains('q9189')){session.send(`A9189`);
      }
else if(session.message.text.toLowerCase().contains('q9188')){session.send(`A9188`);
      }
else if(session.message.text.toLowerCase().contains('q9187')){session.send(`A9187`);
      }
else if(session.message.text.toLowerCase().contains('q9186')){session.send(`A9186`);
      }
else if(session.message.text.toLowerCase().contains('q9185')){session.send(`A9185`);
      }
else if(session.message.text.toLowerCase().contains('q9184')){session.send(`A9184`);
      }
else if(session.message.text.toLowerCase().contains('q9183')){session.send(`A9183`);
      }
else if(session.message.text.toLowerCase().contains('q9182')){session.send(`A9182`);
      }
else if(session.message.text.toLowerCase().contains('q9181')){session.send(`A9181`);
      }
else if(session.message.text.toLowerCase().contains('q9180')){session.send(`A9180`);
      }
else if(session.message.text.toLowerCase().contains('q9179')){session.send(`A9179`);
      }
else if(session.message.text.toLowerCase().contains('q9178')){session.send(`A9178`);
      }
else if(session.message.text.toLowerCase().contains('q9177')){session.send(`A9177`);
      }
else if(session.message.text.toLowerCase().contains('q9176')){session.send(`A9176`);
      }
else if(session.message.text.toLowerCase().contains('q9175')){session.send(`A9175`);
      }
else if(session.message.text.toLowerCase().contains('q9174')){session.send(`A9174`);
      }
else if(session.message.text.toLowerCase().contains('q9173')){session.send(`A9173`);
      }
else if(session.message.text.toLowerCase().contains('q9172')){session.send(`A9172`);
      }
else if(session.message.text.toLowerCase().contains('q9171')){session.send(`A9171`);
      }
else if(session.message.text.toLowerCase().contains('q9170')){session.send(`A9170`);
      }
else if(session.message.text.toLowerCase().contains('q9169')){session.send(`A9169`);
      }
else if(session.message.text.toLowerCase().contains('q9168')){session.send(`A9168`);
      }
else if(session.message.text.toLowerCase().contains('q9167')){session.send(`A9167`);
      }
else if(session.message.text.toLowerCase().contains('q9166')){session.send(`A9166`);
      }
else if(session.message.text.toLowerCase().contains('q9165')){session.send(`A9165`);
      }
else if(session.message.text.toLowerCase().contains('q9164')){session.send(`A9164`);
      }
else if(session.message.text.toLowerCase().contains('q9163')){session.send(`A9163`);
      }
else if(session.message.text.toLowerCase().contains('q9162')){session.send(`A9162`);
      }
else if(session.message.text.toLowerCase().contains('q9161')){session.send(`A9161`);
      }
else if(session.message.text.toLowerCase().contains('q9160')){session.send(`A9160`);
      }
else if(session.message.text.toLowerCase().contains('q9159')){session.send(`A9159`);
      }
else if(session.message.text.toLowerCase().contains('q9158')){session.send(`A9158`);
      }
else if(session.message.text.toLowerCase().contains('q9157')){session.send(`A9157`);
      }
else if(session.message.text.toLowerCase().contains('q9156')){session.send(`A9156`);
      }
else if(session.message.text.toLowerCase().contains('q9155')){session.send(`A9155`);
      }
else if(session.message.text.toLowerCase().contains('q9154')){session.send(`A9154`);
      }
else if(session.message.text.toLowerCase().contains('q9153')){session.send(`A9153`);
      }
else if(session.message.text.toLowerCase().contains('q9152')){session.send(`A9152`);
      }
else if(session.message.text.toLowerCase().contains('q9151')){session.send(`A9151`);
      }
else if(session.message.text.toLowerCase().contains('q9150')){session.send(`A9150`);
      }
else if(session.message.text.toLowerCase().contains('q9149')){session.send(`A9149`);
      }
else if(session.message.text.toLowerCase().contains('q9148')){session.send(`A9148`);
      }
else if(session.message.text.toLowerCase().contains('q9147')){session.send(`A9147`);
      }
else if(session.message.text.toLowerCase().contains('q9146')){session.send(`A9146`);
      }
else if(session.message.text.toLowerCase().contains('q9145')){session.send(`A9145`);
      }
else if(session.message.text.toLowerCase().contains('q9144')){session.send(`A9144`);
      }
else if(session.message.text.toLowerCase().contains('q9143')){session.send(`A9143`);
      }
else if(session.message.text.toLowerCase().contains('q9142')){session.send(`A9142`);
      }
else if(session.message.text.toLowerCase().contains('q9141')){session.send(`A9141`);
      }
else if(session.message.text.toLowerCase().contains('q9140')){session.send(`A9140`);
      }
else if(session.message.text.toLowerCase().contains('q9139')){session.send(`A9139`);
      }
else if(session.message.text.toLowerCase().contains('q9138')){session.send(`A9138`);
      }
else if(session.message.text.toLowerCase().contains('q9137')){session.send(`A9137`);
      }
else if(session.message.text.toLowerCase().contains('q9136')){session.send(`A9136`);
      }
else if(session.message.text.toLowerCase().contains('q9135')){session.send(`A9135`);
      }
else if(session.message.text.toLowerCase().contains('q9134')){session.send(`A9134`);
      }
else if(session.message.text.toLowerCase().contains('q9133')){session.send(`A9133`);
      }
else if(session.message.text.toLowerCase().contains('q9132')){session.send(`A9132`);
      }
else if(session.message.text.toLowerCase().contains('q9131')){session.send(`A9131`);
      }
else if(session.message.text.toLowerCase().contains('q9130')){session.send(`A9130`);
      }
else if(session.message.text.toLowerCase().contains('q9129')){session.send(`A9129`);
      }
else if(session.message.text.toLowerCase().contains('q9128')){session.send(`A9128`);
      }
else if(session.message.text.toLowerCase().contains('q9127')){session.send(`A9127`);
      }
else if(session.message.text.toLowerCase().contains('q9126')){session.send(`A9126`);
      }
else if(session.message.text.toLowerCase().contains('q9125')){session.send(`A9125`);
      }
else if(session.message.text.toLowerCase().contains('q9124')){session.send(`A9124`);
      }
else if(session.message.text.toLowerCase().contains('q9123')){session.send(`A9123`);
      }
else if(session.message.text.toLowerCase().contains('q9122')){session.send(`A9122`);
      }
else if(session.message.text.toLowerCase().contains('q9121')){session.send(`A9121`);
      }
else if(session.message.text.toLowerCase().contains('q9120')){session.send(`A9120`);
      }
else if(session.message.text.toLowerCase().contains('q9119')){session.send(`A9119`);
      }
else if(session.message.text.toLowerCase().contains('q9118')){session.send(`A9118`);
      }
else if(session.message.text.toLowerCase().contains('q9117')){session.send(`A9117`);
      }
else if(session.message.text.toLowerCase().contains('q9116')){session.send(`A9116`);
      }
else if(session.message.text.toLowerCase().contains('q9115')){session.send(`A9115`);
      }
else if(session.message.text.toLowerCase().contains('q9114')){session.send(`A9114`);
      }
else if(session.message.text.toLowerCase().contains('q9113')){session.send(`A9113`);
      }
else if(session.message.text.toLowerCase().contains('q9112')){session.send(`A9112`);
      }
else if(session.message.text.toLowerCase().contains('q9111')){session.send(`A9111`);
      }
else if(session.message.text.toLowerCase().contains('q9110')){session.send(`A9110`);
      }
else if(session.message.text.toLowerCase().contains('q9109')){session.send(`A9109`);
      }
else if(session.message.text.toLowerCase().contains('q9108')){session.send(`A9108`);
      }
else if(session.message.text.toLowerCase().contains('q9107')){session.send(`A9107`);
      }
else if(session.message.text.toLowerCase().contains('q9106')){session.send(`A9106`);
      }
else if(session.message.text.toLowerCase().contains('q9105')){session.send(`A9105`);
      }
else if(session.message.text.toLowerCase().contains('q9104')){session.send(`A9104`);
      }
else if(session.message.text.toLowerCase().contains('q9103')){session.send(`A9103`);
      }
else if(session.message.text.toLowerCase().contains('q9102')){session.send(`A9102`);
      }
else if(session.message.text.toLowerCase().contains('q9101')){session.send(`A9101`);
      }
else if(session.message.text.toLowerCase().contains('q9100')){session.send(`A9100`);
      }
else if(session.message.text.toLowerCase().contains('q9099')){session.send(`A9099`);
      }
else if(session.message.text.toLowerCase().contains('q9098')){session.send(`A9098`);
      }
else if(session.message.text.toLowerCase().contains('q9097')){session.send(`A9097`);
      }
else if(session.message.text.toLowerCase().contains('q9096')){session.send(`A9096`);
      }
else if(session.message.text.toLowerCase().contains('q9095')){session.send(`A9095`);
      }
else if(session.message.text.toLowerCase().contains('q9094')){session.send(`A9094`);
      }
else if(session.message.text.toLowerCase().contains('q9093')){session.send(`A9093`);
      }
else if(session.message.text.toLowerCase().contains('q9092')){session.send(`A9092`);
      }
else if(session.message.text.toLowerCase().contains('q9091')){session.send(`A9091`);
      }
else if(session.message.text.toLowerCase().contains('q9090')){session.send(`A9090`);
      }
else if(session.message.text.toLowerCase().contains('q9089')){session.send(`A9089`);
      }
else if(session.message.text.toLowerCase().contains('q9088')){session.send(`A9088`);
      }
else if(session.message.text.toLowerCase().contains('q9087')){session.send(`A9087`);
      }
else if(session.message.text.toLowerCase().contains('q9086')){session.send(`A9086`);
      }
else if(session.message.text.toLowerCase().contains('q9085')){session.send(`A9085`);
      }
else if(session.message.text.toLowerCase().contains('q9084')){session.send(`A9084`);
      }
else if(session.message.text.toLowerCase().contains('q9083')){session.send(`A9083`);
      }
else if(session.message.text.toLowerCase().contains('q9082')){session.send(`A9082`);
      }
else if(session.message.text.toLowerCase().contains('q9081')){session.send(`A9081`);
      }
else if(session.message.text.toLowerCase().contains('q9080')){session.send(`A9080`);
      }
else if(session.message.text.toLowerCase().contains('q9079')){session.send(`A9079`);
      }
else if(session.message.text.toLowerCase().contains('q9078')){session.send(`A9078`);
      }
else if(session.message.text.toLowerCase().contains('q9077')){session.send(`A9077`);
      }
else if(session.message.text.toLowerCase().contains('q9076')){session.send(`A9076`);
      }
else if(session.message.text.toLowerCase().contains('q9075')){session.send(`A9075`);
      }
else if(session.message.text.toLowerCase().contains('q9074')){session.send(`A9074`);
      }
else if(session.message.text.toLowerCase().contains('q9073')){session.send(`A9073`);
      }
else if(session.message.text.toLowerCase().contains('q9072')){session.send(`A9072`);
      }
else if(session.message.text.toLowerCase().contains('q9071')){session.send(`A9071`);
      }
else if(session.message.text.toLowerCase().contains('q9070')){session.send(`A9070`);
      }
else if(session.message.text.toLowerCase().contains('q9069')){session.send(`A9069`);
      }
else if(session.message.text.toLowerCase().contains('q9068')){session.send(`A9068`);
      }
else if(session.message.text.toLowerCase().contains('q9067')){session.send(`A9067`);
      }
else if(session.message.text.toLowerCase().contains('q9066')){session.send(`A9066`);
      }
else if(session.message.text.toLowerCase().contains('q9065')){session.send(`A9065`);
      }
else if(session.message.text.toLowerCase().contains('q9064')){session.send(`A9064`);
      }
else if(session.message.text.toLowerCase().contains('q9063')){session.send(`A9063`);
      }
else if(session.message.text.toLowerCase().contains('q9062')){session.send(`A9062`);
      }
else if(session.message.text.toLowerCase().contains('q9061')){session.send(`A9061`);
      }
else if(session.message.text.toLowerCase().contains('q9060')){session.send(`A9060`);
      }
else if(session.message.text.toLowerCase().contains('q9059')){session.send(`A9059`);
      }
else if(session.message.text.toLowerCase().contains('q9058')){session.send(`A9058`);
      }
else if(session.message.text.toLowerCase().contains('q9057')){session.send(`A9057`);
      }
else if(session.message.text.toLowerCase().contains('q9056')){session.send(`A9056`);
      }
else if(session.message.text.toLowerCase().contains('q9055')){session.send(`A9055`);
      }
else if(session.message.text.toLowerCase().contains('q9054')){session.send(`A9054`);
      }
else if(session.message.text.toLowerCase().contains('q9053')){session.send(`A9053`);
      }
else if(session.message.text.toLowerCase().contains('q9052')){session.send(`A9052`);
      }
else if(session.message.text.toLowerCase().contains('q9051')){session.send(`A9051`);
      }
else if(session.message.text.toLowerCase().contains('q9050')){session.send(`A9050`);
      }
else if(session.message.text.toLowerCase().contains('q9049')){session.send(`A9049`);
      }
else if(session.message.text.toLowerCase().contains('q9048')){session.send(`A9048`);
      }
else if(session.message.text.toLowerCase().contains('q9047')){session.send(`A9047`);
      }
else if(session.message.text.toLowerCase().contains('q9046')){session.send(`A9046`);
      }
else if(session.message.text.toLowerCase().contains('q9045')){session.send(`A9045`);
      }
else if(session.message.text.toLowerCase().contains('q9044')){session.send(`A9044`);
      }
else if(session.message.text.toLowerCase().contains('q9043')){session.send(`A9043`);
      }
else if(session.message.text.toLowerCase().contains('q9042')){session.send(`A9042`);
      }
else if(session.message.text.toLowerCase().contains('q9041')){session.send(`A9041`);
      }
else if(session.message.text.toLowerCase().contains('q9040')){session.send(`A9040`);
      }
else if(session.message.text.toLowerCase().contains('q9039')){session.send(`A9039`);
      }
else if(session.message.text.toLowerCase().contains('q9038')){session.send(`A9038`);
      }
else if(session.message.text.toLowerCase().contains('q9037')){session.send(`A9037`);
      }
else if(session.message.text.toLowerCase().contains('q9036')){session.send(`A9036`);
      }
else if(session.message.text.toLowerCase().contains('q9035')){session.send(`A9035`);
      }
else if(session.message.text.toLowerCase().contains('q9034')){session.send(`A9034`);
      }
else if(session.message.text.toLowerCase().contains('q9033')){session.send(`A9033`);
      }
else if(session.message.text.toLowerCase().contains('q9032')){session.send(`A9032`);
      }
else if(session.message.text.toLowerCase().contains('q9031')){session.send(`A9031`);
      }
else if(session.message.text.toLowerCase().contains('q9030')){session.send(`A9030`);
      }
else if(session.message.text.toLowerCase().contains('q9029')){session.send(`A9029`);
      }
else if(session.message.text.toLowerCase().contains('q9028')){session.send(`A9028`);
      }
else if(session.message.text.toLowerCase().contains('q9027')){session.send(`A9027`);
      }
else if(session.message.text.toLowerCase().contains('q9026')){session.send(`A9026`);
      }
else if(session.message.text.toLowerCase().contains('q9025')){session.send(`A9025`);
      }
else if(session.message.text.toLowerCase().contains('q9024')){session.send(`A9024`);
      }
else if(session.message.text.toLowerCase().contains('q9023')){session.send(`A9023`);
      }
else if(session.message.text.toLowerCase().contains('q9022')){session.send(`A9022`);
      }
else if(session.message.text.toLowerCase().contains('q9021')){session.send(`A9021`);
      }
else if(session.message.text.toLowerCase().contains('q9020')){session.send(`A9020`);
      }
else if(session.message.text.toLowerCase().contains('q9019')){session.send(`A9019`);
      }
else if(session.message.text.toLowerCase().contains('q9018')){session.send(`A9018`);
      }
else if(session.message.text.toLowerCase().contains('q9017')){session.send(`A9017`);
      }
else if(session.message.text.toLowerCase().contains('q9016')){session.send(`A9016`);
      }
else if(session.message.text.toLowerCase().contains('q9015')){session.send(`A9015`);
      }
else if(session.message.text.toLowerCase().contains('q9014')){session.send(`A9014`);
      }
else if(session.message.text.toLowerCase().contains('q9013')){session.send(`A9013`);
      }
else if(session.message.text.toLowerCase().contains('q9012')){session.send(`A9012`);
      }
else if(session.message.text.toLowerCase().contains('q9011')){session.send(`A9011`);
      }
else if(session.message.text.toLowerCase().contains('q9010')){session.send(`A9010`);
      }
else if(session.message.text.toLowerCase().contains('q9009')){session.send(`A9009`);
      }
else if(session.message.text.toLowerCase().contains('q9008')){session.send(`A9008`);
      }
else if(session.message.text.toLowerCase().contains('q9007')){session.send(`A9007`);
      }
else if(session.message.text.toLowerCase().contains('q9006')){session.send(`A9006`);
      }
else if(session.message.text.toLowerCase().contains('q9005')){session.send(`A9005`);
      }
else if(session.message.text.toLowerCase().contains('q9004')){session.send(`A9004`);
      }
else if(session.message.text.toLowerCase().contains('q9003')){session.send(`A9003`);
      }
else if(session.message.text.toLowerCase().contains('q9002')){session.send(`A9002`);
      }
else if(session.message.text.toLowerCase().contains('q9001')){session.send(`A9001`);
      }
else if(session.message.text.toLowerCase().contains('q9000')){session.send(`A9000`);
      }
else if(session.message.text.toLowerCase().contains('q8999')){session.send(`A8999`);
      }
else if(session.message.text.toLowerCase().contains('q8998')){session.send(`A8998`);
      }
else if(session.message.text.toLowerCase().contains('q8997')){session.send(`A8997`);
      }
else if(session.message.text.toLowerCase().contains('q8996')){session.send(`A8996`);
      }
else if(session.message.text.toLowerCase().contains('q8995')){session.send(`A8995`);
      }
else if(session.message.text.toLowerCase().contains('q8994')){session.send(`A8994`);
      }
else if(session.message.text.toLowerCase().contains('q8993')){session.send(`A8993`);
      }
else if(session.message.text.toLowerCase().contains('q8992')){session.send(`A8992`);
      }
else if(session.message.text.toLowerCase().contains('q8991')){session.send(`A8991`);
      }
else if(session.message.text.toLowerCase().contains('q8990')){session.send(`A8990`);
      }
else if(session.message.text.toLowerCase().contains('q8989')){session.send(`A8989`);
      }
else if(session.message.text.toLowerCase().contains('q8988')){session.send(`A8988`);
      }
else if(session.message.text.toLowerCase().contains('q8987')){session.send(`A8987`);
      }
else if(session.message.text.toLowerCase().contains('q8986')){session.send(`A8986`);
      }
else if(session.message.text.toLowerCase().contains('q8985')){session.send(`A8985`);
      }
else if(session.message.text.toLowerCase().contains('q8984')){session.send(`A8984`);
      }
else if(session.message.text.toLowerCase().contains('q8983')){session.send(`A8983`);
      }
else if(session.message.text.toLowerCase().contains('q8982')){session.send(`A8982`);
      }
else if(session.message.text.toLowerCase().contains('q8981')){session.send(`A8981`);
      }
else if(session.message.text.toLowerCase().contains('q8980')){session.send(`A8980`);
      }
else if(session.message.text.toLowerCase().contains('q8979')){session.send(`A8979`);
      }
else if(session.message.text.toLowerCase().contains('q8978')){session.send(`A8978`);
      }
else if(session.message.text.toLowerCase().contains('q8977')){session.send(`A8977`);
      }
else if(session.message.text.toLowerCase().contains('q8976')){session.send(`A8976`);
      }
else if(session.message.text.toLowerCase().contains('q8975')){session.send(`A8975`);
      }
else if(session.message.text.toLowerCase().contains('q8974')){session.send(`A8974`);
      }
else if(session.message.text.toLowerCase().contains('q8973')){session.send(`A8973`);
      }
else if(session.message.text.toLowerCase().contains('q8972')){session.send(`A8972`);
      }
else if(session.message.text.toLowerCase().contains('q8971')){session.send(`A8971`);
      }
else if(session.message.text.toLowerCase().contains('q8970')){session.send(`A8970`);
      }
else if(session.message.text.toLowerCase().contains('q8969')){session.send(`A8969`);
      }
else if(session.message.text.toLowerCase().contains('q8968')){session.send(`A8968`);
      }
else if(session.message.text.toLowerCase().contains('q8967')){session.send(`A8967`);
      }
else if(session.message.text.toLowerCase().contains('q8966')){session.send(`A8966`);
      }
else if(session.message.text.toLowerCase().contains('q8965')){session.send(`A8965`);
      }
else if(session.message.text.toLowerCase().contains('q8964')){session.send(`A8964`);
      }
else if(session.message.text.toLowerCase().contains('q8963')){session.send(`A8963`);
      }
else if(session.message.text.toLowerCase().contains('q8962')){session.send(`A8962`);
      }
else if(session.message.text.toLowerCase().contains('q8961')){session.send(`A8961`);
      }
else if(session.message.text.toLowerCase().contains('q8960')){session.send(`A8960`);
      }
else if(session.message.text.toLowerCase().contains('q8959')){session.send(`A8959`);
      }
else if(session.message.text.toLowerCase().contains('q8958')){session.send(`A8958`);
      }
else if(session.message.text.toLowerCase().contains('q8957')){session.send(`A8957`);
      }
else if(session.message.text.toLowerCase().contains('q8956')){session.send(`A8956`);
      }
else if(session.message.text.toLowerCase().contains('q8955')){session.send(`A8955`);
      }
else if(session.message.text.toLowerCase().contains('q8954')){session.send(`A8954`);
      }
else if(session.message.text.toLowerCase().contains('q8953')){session.send(`A8953`);
      }
else if(session.message.text.toLowerCase().contains('q8952')){session.send(`A8952`);
      }
else if(session.message.text.toLowerCase().contains('q8951')){session.send(`A8951`);
      }
else if(session.message.text.toLowerCase().contains('q8950')){session.send(`A8950`);
      }
else if(session.message.text.toLowerCase().contains('q8949')){session.send(`A8949`);
      }
else if(session.message.text.toLowerCase().contains('q8948')){session.send(`A8948`);
      }
else if(session.message.text.toLowerCase().contains('q8947')){session.send(`A8947`);
      }
else if(session.message.text.toLowerCase().contains('q8946')){session.send(`A8946`);
      }
else if(session.message.text.toLowerCase().contains('q8945')){session.send(`A8945`);
      }
else if(session.message.text.toLowerCase().contains('q8944')){session.send(`A8944`);
      }
else if(session.message.text.toLowerCase().contains('q8943')){session.send(`A8943`);
      }
else if(session.message.text.toLowerCase().contains('q8942')){session.send(`A8942`);
      }
else if(session.message.text.toLowerCase().contains('q8941')){session.send(`A8941`);
      }
else if(session.message.text.toLowerCase().contains('q8940')){session.send(`A8940`);
      }
else if(session.message.text.toLowerCase().contains('q8939')){session.send(`A8939`);
      }
else if(session.message.text.toLowerCase().contains('q8938')){session.send(`A8938`);
      }
else if(session.message.text.toLowerCase().contains('q8937')){session.send(`A8937`);
      }
else if(session.message.text.toLowerCase().contains('q8936')){session.send(`A8936`);
      }
else if(session.message.text.toLowerCase().contains('q8935')){session.send(`A8935`);
      }
else if(session.message.text.toLowerCase().contains('q8934')){session.send(`A8934`);
      }
else if(session.message.text.toLowerCase().contains('q8933')){session.send(`A8933`);
      }
else if(session.message.text.toLowerCase().contains('q8932')){session.send(`A8932`);
      }
else if(session.message.text.toLowerCase().contains('q8931')){session.send(`A8931`);
      }
else if(session.message.text.toLowerCase().contains('q8930')){session.send(`A8930`);
      }
else if(session.message.text.toLowerCase().contains('q8929')){session.send(`A8929`);
      }
else if(session.message.text.toLowerCase().contains('q8928')){session.send(`A8928`);
      }
else if(session.message.text.toLowerCase().contains('q8927')){session.send(`A8927`);
      }
else if(session.message.text.toLowerCase().contains('q8926')){session.send(`A8926`);
      }
else if(session.message.text.toLowerCase().contains('q8925')){session.send(`A8925`);
      }
else if(session.message.text.toLowerCase().contains('q8924')){session.send(`A8924`);
      }
else if(session.message.text.toLowerCase().contains('q8923')){session.send(`A8923`);
      }
else if(session.message.text.toLowerCase().contains('q8922')){session.send(`A8922`);
      }
else if(session.message.text.toLowerCase().contains('q8921')){session.send(`A8921`);
      }
else if(session.message.text.toLowerCase().contains('q8920')){session.send(`A8920`);
      }
else if(session.message.text.toLowerCase().contains('q8919')){session.send(`A8919`);
      }
else if(session.message.text.toLowerCase().contains('q8918')){session.send(`A8918`);
      }
else if(session.message.text.toLowerCase().contains('q8917')){session.send(`A8917`);
      }
else if(session.message.text.toLowerCase().contains('q8916')){session.send(`A8916`);
      }
else if(session.message.text.toLowerCase().contains('q8915')){session.send(`A8915`);
      }
else if(session.message.text.toLowerCase().contains('q8914')){session.send(`A8914`);
      }
else if(session.message.text.toLowerCase().contains('q8913')){session.send(`A8913`);
      }
else if(session.message.text.toLowerCase().contains('q8912')){session.send(`A8912`);
      }
else if(session.message.text.toLowerCase().contains('q8911')){session.send(`A8911`);
      }
else if(session.message.text.toLowerCase().contains('q8910')){session.send(`A8910`);
      }
else if(session.message.text.toLowerCase().contains('q8909')){session.send(`A8909`);
      }
else if(session.message.text.toLowerCase().contains('q8908')){session.send(`A8908`);
      }
else if(session.message.text.toLowerCase().contains('q8907')){session.send(`A8907`);
      }
else if(session.message.text.toLowerCase().contains('q8906')){session.send(`A8906`);
      }
else if(session.message.text.toLowerCase().contains('q8905')){session.send(`A8905`);
      }
else if(session.message.text.toLowerCase().contains('q8904')){session.send(`A8904`);
      }
else if(session.message.text.toLowerCase().contains('q8903')){session.send(`A8903`);
      }
else if(session.message.text.toLowerCase().contains('q8902')){session.send(`A8902`);
      }
else if(session.message.text.toLowerCase().contains('q8901')){session.send(`A8901`);
      }
else if(session.message.text.toLowerCase().contains('q8900')){session.send(`A8900`);
      }
else if(session.message.text.toLowerCase().contains('q8899')){session.send(`A8899`);
      }
else if(session.message.text.toLowerCase().contains('q8898')){session.send(`A8898`);
      }
else if(session.message.text.toLowerCase().contains('q8897')){session.send(`A8897`);
      }
else if(session.message.text.toLowerCase().contains('q8896')){session.send(`A8896`);
      }
else if(session.message.text.toLowerCase().contains('q8895')){session.send(`A8895`);
      }
else if(session.message.text.toLowerCase().contains('q8894')){session.send(`A8894`);
      }
else if(session.message.text.toLowerCase().contains('q8893')){session.send(`A8893`);
      }
else if(session.message.text.toLowerCase().contains('q8892')){session.send(`A8892`);
      }
else if(session.message.text.toLowerCase().contains('q8891')){session.send(`A8891`);
      }
else if(session.message.text.toLowerCase().contains('q8890')){session.send(`A8890`);
      }
else if(session.message.text.toLowerCase().contains('q8889')){session.send(`A8889`);
      }
else if(session.message.text.toLowerCase().contains('q8888')){session.send(`A8888`);
      }
else if(session.message.text.toLowerCase().contains('q8887')){session.send(`A8887`);
      }
else if(session.message.text.toLowerCase().contains('q8886')){session.send(`A8886`);
      }
else if(session.message.text.toLowerCase().contains('q8885')){session.send(`A8885`);
      }
else if(session.message.text.toLowerCase().contains('q8884')){session.send(`A8884`);
      }
else if(session.message.text.toLowerCase().contains('q8883')){session.send(`A8883`);
      }
else if(session.message.text.toLowerCase().contains('q8882')){session.send(`A8882`);
      }
else if(session.message.text.toLowerCase().contains('q8881')){session.send(`A8881`);
      }
else if(session.message.text.toLowerCase().contains('q8880')){session.send(`A8880`);
      }
else if(session.message.text.toLowerCase().contains('q8879')){session.send(`A8879`);
      }
else if(session.message.text.toLowerCase().contains('q8878')){session.send(`A8878`);
      }
else if(session.message.text.toLowerCase().contains('q8877')){session.send(`A8877`);
      }
else if(session.message.text.toLowerCase().contains('q8876')){session.send(`A8876`);
      }
else if(session.message.text.toLowerCase().contains('q8875')){session.send(`A8875`);
      }
else if(session.message.text.toLowerCase().contains('q8874')){session.send(`A8874`);
      }
else if(session.message.text.toLowerCase().contains('q8873')){session.send(`A8873`);
      }
else if(session.message.text.toLowerCase().contains('q8872')){session.send(`A8872`);
      }
else if(session.message.text.toLowerCase().contains('q8871')){session.send(`A8871`);
      }
else if(session.message.text.toLowerCase().contains('q8870')){session.send(`A8870`);
      }
else if(session.message.text.toLowerCase().contains('q8869')){session.send(`A8869`);
      }
else if(session.message.text.toLowerCase().contains('q8868')){session.send(`A8868`);
      }
else if(session.message.text.toLowerCase().contains('q8867')){session.send(`A8867`);
      }
else if(session.message.text.toLowerCase().contains('q8866')){session.send(`A8866`);
      }
else if(session.message.text.toLowerCase().contains('q8865')){session.send(`A8865`);
      }
else if(session.message.text.toLowerCase().contains('q8864')){session.send(`A8864`);
      }
else if(session.message.text.toLowerCase().contains('q8863')){session.send(`A8863`);
      }
else if(session.message.text.toLowerCase().contains('q8862')){session.send(`A8862`);
      }
else if(session.message.text.toLowerCase().contains('q8861')){session.send(`A8861`);
      }
else if(session.message.text.toLowerCase().contains('q8860')){session.send(`A8860`);
      }
else if(session.message.text.toLowerCase().contains('q8859')){session.send(`A8859`);
      }
else if(session.message.text.toLowerCase().contains('q8858')){session.send(`A8858`);
      }
else if(session.message.text.toLowerCase().contains('q8857')){session.send(`A8857`);
      }
else if(session.message.text.toLowerCase().contains('q8856')){session.send(`A8856`);
      }
else if(session.message.text.toLowerCase().contains('q8855')){session.send(`A8855`);
      }
else if(session.message.text.toLowerCase().contains('q8854')){session.send(`A8854`);
      }
else if(session.message.text.toLowerCase().contains('q8853')){session.send(`A8853`);
      }
else if(session.message.text.toLowerCase().contains('q8852')){session.send(`A8852`);
      }
else if(session.message.text.toLowerCase().contains('q8851')){session.send(`A8851`);
      }
else if(session.message.text.toLowerCase().contains('q8850')){session.send(`A8850`);
      }
else if(session.message.text.toLowerCase().contains('q8849')){session.send(`A8849`);
      }
else if(session.message.text.toLowerCase().contains('q8848')){session.send(`A8848`);
      }
else if(session.message.text.toLowerCase().contains('q8847')){session.send(`A8847`);
      }
else if(session.message.text.toLowerCase().contains('q8846')){session.send(`A8846`);
      }
else if(session.message.text.toLowerCase().contains('q8845')){session.send(`A8845`);
      }
else if(session.message.text.toLowerCase().contains('q8844')){session.send(`A8844`);
      }
else if(session.message.text.toLowerCase().contains('q8843')){session.send(`A8843`);
      }
else if(session.message.text.toLowerCase().contains('q8842')){session.send(`A8842`);
      }
else if(session.message.text.toLowerCase().contains('q8841')){session.send(`A8841`);
      }
else if(session.message.text.toLowerCase().contains('q8840')){session.send(`A8840`);
      }
else if(session.message.text.toLowerCase().contains('q8839')){session.send(`A8839`);
      }
else if(session.message.text.toLowerCase().contains('q8838')){session.send(`A8838`);
      }
else if(session.message.text.toLowerCase().contains('q8837')){session.send(`A8837`);
      }
else if(session.message.text.toLowerCase().contains('q8836')){session.send(`A8836`);
      }
else if(session.message.text.toLowerCase().contains('q8835')){session.send(`A8835`);
      }
else if(session.message.text.toLowerCase().contains('q8834')){session.send(`A8834`);
      }
else if(session.message.text.toLowerCase().contains('q8833')){session.send(`A8833`);
      }
else if(session.message.text.toLowerCase().contains('q8832')){session.send(`A8832`);
      }
else if(session.message.text.toLowerCase().contains('q8831')){session.send(`A8831`);
      }
else if(session.message.text.toLowerCase().contains('q8830')){session.send(`A8830`);
      }
else if(session.message.text.toLowerCase().contains('q8829')){session.send(`A8829`);
      }
else if(session.message.text.toLowerCase().contains('q8828')){session.send(`A8828`);
      }
else if(session.message.text.toLowerCase().contains('q8827')){session.send(`A8827`);
      }
else if(session.message.text.toLowerCase().contains('q8826')){session.send(`A8826`);
      }
else if(session.message.text.toLowerCase().contains('q8825')){session.send(`A8825`);
      }
else if(session.message.text.toLowerCase().contains('q8824')){session.send(`A8824`);
      }
else if(session.message.text.toLowerCase().contains('q8823')){session.send(`A8823`);
      }
else if(session.message.text.toLowerCase().contains('q8822')){session.send(`A8822`);
      }
else if(session.message.text.toLowerCase().contains('q8821')){session.send(`A8821`);
      }
else if(session.message.text.toLowerCase().contains('q8820')){session.send(`A8820`);
      }
else if(session.message.text.toLowerCase().contains('q8819')){session.send(`A8819`);
      }
else if(session.message.text.toLowerCase().contains('q8818')){session.send(`A8818`);
      }
else if(session.message.text.toLowerCase().contains('q8817')){session.send(`A8817`);
      }
else if(session.message.text.toLowerCase().contains('q8816')){session.send(`A8816`);
      }
else if(session.message.text.toLowerCase().contains('q8815')){session.send(`A8815`);
      }
else if(session.message.text.toLowerCase().contains('q8814')){session.send(`A8814`);
      }
else if(session.message.text.toLowerCase().contains('q8813')){session.send(`A8813`);
      }
else if(session.message.text.toLowerCase().contains('q8812')){session.send(`A8812`);
      }
else if(session.message.text.toLowerCase().contains('q8811')){session.send(`A8811`);
      }
else if(session.message.text.toLowerCase().contains('q8810')){session.send(`A8810`);
      }
else if(session.message.text.toLowerCase().contains('q8809')){session.send(`A8809`);
      }
else if(session.message.text.toLowerCase().contains('q8808')){session.send(`A8808`);
      }
else if(session.message.text.toLowerCase().contains('q8807')){session.send(`A8807`);
      }
else if(session.message.text.toLowerCase().contains('q8806')){session.send(`A8806`);
      }
else if(session.message.text.toLowerCase().contains('q8805')){session.send(`A8805`);
      }
else if(session.message.text.toLowerCase().contains('q8804')){session.send(`A8804`);
      }
else if(session.message.text.toLowerCase().contains('q8803')){session.send(`A8803`);
      }
else if(session.message.text.toLowerCase().contains('q8802')){session.send(`A8802`);
      }
else if(session.message.text.toLowerCase().contains('q8801')){session.send(`A8801`);
      }
else if(session.message.text.toLowerCase().contains('q8800')){session.send(`A8800`);
      }
else if(session.message.text.toLowerCase().contains('q8799')){session.send(`A8799`);
      }
else if(session.message.text.toLowerCase().contains('q8798')){session.send(`A8798`);
      }
else if(session.message.text.toLowerCase().contains('q8797')){session.send(`A8797`);
      }
else if(session.message.text.toLowerCase().contains('q8796')){session.send(`A8796`);
      }
else if(session.message.text.toLowerCase().contains('q8795')){session.send(`A8795`);
      }
else if(session.message.text.toLowerCase().contains('q8794')){session.send(`A8794`);
      }
else if(session.message.text.toLowerCase().contains('q8793')){session.send(`A8793`);
      }
else if(session.message.text.toLowerCase().contains('q8792')){session.send(`A8792`);
      }
else if(session.message.text.toLowerCase().contains('q8791')){session.send(`A8791`);
      }
else if(session.message.text.toLowerCase().contains('q8790')){session.send(`A8790`);
      }
else if(session.message.text.toLowerCase().contains('q8789')){session.send(`A8789`);
      }
else if(session.message.text.toLowerCase().contains('q8788')){session.send(`A8788`);
      }
else if(session.message.text.toLowerCase().contains('q8787')){session.send(`A8787`);
      }
else if(session.message.text.toLowerCase().contains('q8786')){session.send(`A8786`);
      }
else if(session.message.text.toLowerCase().contains('q8785')){session.send(`A8785`);
      }
else if(session.message.text.toLowerCase().contains('q8784')){session.send(`A8784`);
      }
else if(session.message.text.toLowerCase().contains('q8783')){session.send(`A8783`);
      }
else if(session.message.text.toLowerCase().contains('q8782')){session.send(`A8782`);
      }
else if(session.message.text.toLowerCase().contains('q8781')){session.send(`A8781`);
      }
else if(session.message.text.toLowerCase().contains('q8780')){session.send(`A8780`);
      }
else if(session.message.text.toLowerCase().contains('q8779')){session.send(`A8779`);
      }
else if(session.message.text.toLowerCase().contains('q8778')){session.send(`A8778`);
      }
else if(session.message.text.toLowerCase().contains('q8777')){session.send(`A8777`);
      }
else if(session.message.text.toLowerCase().contains('q8776')){session.send(`A8776`);
      }
else if(session.message.text.toLowerCase().contains('q8775')){session.send(`A8775`);
      }
else if(session.message.text.toLowerCase().contains('q8774')){session.send(`A8774`);
      }
else if(session.message.text.toLowerCase().contains('q8773')){session.send(`A8773`);
      }
else if(session.message.text.toLowerCase().contains('q8772')){session.send(`A8772`);
      }
else if(session.message.text.toLowerCase().contains('q8771')){session.send(`A8771`);
      }
else if(session.message.text.toLowerCase().contains('q8770')){session.send(`A8770`);
      }
else if(session.message.text.toLowerCase().contains('q8769')){session.send(`A8769`);
      }
else if(session.message.text.toLowerCase().contains('q8768')){session.send(`A8768`);
      }
else if(session.message.text.toLowerCase().contains('q8767')){session.send(`A8767`);
      }
else if(session.message.text.toLowerCase().contains('q8766')){session.send(`A8766`);
      }
else if(session.message.text.toLowerCase().contains('q8765')){session.send(`A8765`);
      }
else if(session.message.text.toLowerCase().contains('q8764')){session.send(`A8764`);
      }
else if(session.message.text.toLowerCase().contains('q8763')){session.send(`A8763`);
      }
else if(session.message.text.toLowerCase().contains('q8762')){session.send(`A8762`);
      }
else if(session.message.text.toLowerCase().contains('q8761')){session.send(`A8761`);
      }
else if(session.message.text.toLowerCase().contains('q8760')){session.send(`A8760`);
      }
else if(session.message.text.toLowerCase().contains('q8759')){session.send(`A8759`);
      }
else if(session.message.text.toLowerCase().contains('q8758')){session.send(`A8758`);
      }
else if(session.message.text.toLowerCase().contains('q8757')){session.send(`A8757`);
      }
else if(session.message.text.toLowerCase().contains('q8756')){session.send(`A8756`);
      }
else if(session.message.text.toLowerCase().contains('q8755')){session.send(`A8755`);
      }
else if(session.message.text.toLowerCase().contains('q8754')){session.send(`A8754`);
      }
else if(session.message.text.toLowerCase().contains('q8753')){session.send(`A8753`);
      }
else if(session.message.text.toLowerCase().contains('q8752')){session.send(`A8752`);
      }
else if(session.message.text.toLowerCase().contains('q8751')){session.send(`A8751`);
      }
else if(session.message.text.toLowerCase().contains('q8750')){session.send(`A8750`);
      }
else if(session.message.text.toLowerCase().contains('q8749')){session.send(`A8749`);
      }
else if(session.message.text.toLowerCase().contains('q8748')){session.send(`A8748`);
      }
else if(session.message.text.toLowerCase().contains('q8747')){session.send(`A8747`);
      }
else if(session.message.text.toLowerCase().contains('q8746')){session.send(`A8746`);
      }
else if(session.message.text.toLowerCase().contains('q8745')){session.send(`A8745`);
      }
else if(session.message.text.toLowerCase().contains('q8744')){session.send(`A8744`);
      }
else if(session.message.text.toLowerCase().contains('q8743')){session.send(`A8743`);
      }
else if(session.message.text.toLowerCase().contains('q8742')){session.send(`A8742`);
      }
else if(session.message.text.toLowerCase().contains('q8741')){session.send(`A8741`);
      }
else if(session.message.text.toLowerCase().contains('q8740')){session.send(`A8740`);
      }
else if(session.message.text.toLowerCase().contains('q8739')){session.send(`A8739`);
      }
else if(session.message.text.toLowerCase().contains('q8738')){session.send(`A8738`);
      }
else if(session.message.text.toLowerCase().contains('q8737')){session.send(`A8737`);
      }
else if(session.message.text.toLowerCase().contains('q8736')){session.send(`A8736`);
      }
else if(session.message.text.toLowerCase().contains('q8735')){session.send(`A8735`);
      }
else if(session.message.text.toLowerCase().contains('q8734')){session.send(`A8734`);
      }
else if(session.message.text.toLowerCase().contains('q8733')){session.send(`A8733`);
      }
else if(session.message.text.toLowerCase().contains('q8732')){session.send(`A8732`);
      }
else if(session.message.text.toLowerCase().contains('q8731')){session.send(`A8731`);
      }
else if(session.message.text.toLowerCase().contains('q8730')){session.send(`A8730`);
      }
else if(session.message.text.toLowerCase().contains('q8729')){session.send(`A8729`);
      }
else if(session.message.text.toLowerCase().contains('q8728')){session.send(`A8728`);
      }
else if(session.message.text.toLowerCase().contains('q8727')){session.send(`A8727`);
      }
else if(session.message.text.toLowerCase().contains('q8726')){session.send(`A8726`);
      }
else if(session.message.text.toLowerCase().contains('q8725')){session.send(`A8725`);
      }
else if(session.message.text.toLowerCase().contains('q8724')){session.send(`A8724`);
      }
else if(session.message.text.toLowerCase().contains('q8723')){session.send(`A8723`);
      }
else if(session.message.text.toLowerCase().contains('q8722')){session.send(`A8722`);
      }
else if(session.message.text.toLowerCase().contains('q8721')){session.send(`A8721`);
      }
else if(session.message.text.toLowerCase().contains('q8720')){session.send(`A8720`);
      }
else if(session.message.text.toLowerCase().contains('q8719')){session.send(`A8719`);
      }
else if(session.message.text.toLowerCase().contains('q8718')){session.send(`A8718`);
      }
else if(session.message.text.toLowerCase().contains('q8717')){session.send(`A8717`);
      }
else if(session.message.text.toLowerCase().contains('q8716')){session.send(`A8716`);
      }
else if(session.message.text.toLowerCase().contains('q8715')){session.send(`A8715`);
      }
else if(session.message.text.toLowerCase().contains('q8714')){session.send(`A8714`);
      }
else if(session.message.text.toLowerCase().contains('q8713')){session.send(`A8713`);
      }
else if(session.message.text.toLowerCase().contains('q8712')){session.send(`A8712`);
      }
else if(session.message.text.toLowerCase().contains('q8711')){session.send(`A8711`);
      }
else if(session.message.text.toLowerCase().contains('q8710')){session.send(`A8710`);
      }
else if(session.message.text.toLowerCase().contains('q8709')){session.send(`A8709`);
      }
else if(session.message.text.toLowerCase().contains('q8708')){session.send(`A8708`);
      }
else if(session.message.text.toLowerCase().contains('q8707')){session.send(`A8707`);
      }
else if(session.message.text.toLowerCase().contains('q8706')){session.send(`A8706`);
      }
else if(session.message.text.toLowerCase().contains('q8705')){session.send(`A8705`);
      }
else if(session.message.text.toLowerCase().contains('q8704')){session.send(`A8704`);
      }
else if(session.message.text.toLowerCase().contains('q8703')){session.send(`A8703`);
      }
else if(session.message.text.toLowerCase().contains('q8702')){session.send(`A8702`);
      }
else if(session.message.text.toLowerCase().contains('q8701')){session.send(`A8701`);
      }
else if(session.message.text.toLowerCase().contains('q8700')){session.send(`A8700`);
      }
else if(session.message.text.toLowerCase().contains('q8699')){session.send(`A8699`);
      }
else if(session.message.text.toLowerCase().contains('q8698')){session.send(`A8698`);
      }
else if(session.message.text.toLowerCase().contains('q8697')){session.send(`A8697`);
      }
else if(session.message.text.toLowerCase().contains('q8696')){session.send(`A8696`);
      }
else if(session.message.text.toLowerCase().contains('q8695')){session.send(`A8695`);
      }
else if(session.message.text.toLowerCase().contains('q8694')){session.send(`A8694`);
      }
else if(session.message.text.toLowerCase().contains('q8693')){session.send(`A8693`);
      }
else if(session.message.text.toLowerCase().contains('q8692')){session.send(`A8692`);
      }
else if(session.message.text.toLowerCase().contains('q8691')){session.send(`A8691`);
      }
else if(session.message.text.toLowerCase().contains('q8690')){session.send(`A8690`);
      }
else if(session.message.text.toLowerCase().contains('q8689')){session.send(`A8689`);
      }
else if(session.message.text.toLowerCase().contains('q8688')){session.send(`A8688`);
      }
else if(session.message.text.toLowerCase().contains('q8687')){session.send(`A8687`);
      }
else if(session.message.text.toLowerCase().contains('q8686')){session.send(`A8686`);
      }
else if(session.message.text.toLowerCase().contains('q8685')){session.send(`A8685`);
      }
else if(session.message.text.toLowerCase().contains('q8684')){session.send(`A8684`);
      }
else if(session.message.text.toLowerCase().contains('q8683')){session.send(`A8683`);
      }
else if(session.message.text.toLowerCase().contains('q8682')){session.send(`A8682`);
      }
else if(session.message.text.toLowerCase().contains('q8681')){session.send(`A8681`);
      }
else if(session.message.text.toLowerCase().contains('q8680')){session.send(`A8680`);
      }
else if(session.message.text.toLowerCase().contains('q8679')){session.send(`A8679`);
      }
else if(session.message.text.toLowerCase().contains('q8678')){session.send(`A8678`);
      }
else if(session.message.text.toLowerCase().contains('q8677')){session.send(`A8677`);
      }
else if(session.message.text.toLowerCase().contains('q8676')){session.send(`A8676`);
      }
else if(session.message.text.toLowerCase().contains('q8675')){session.send(`A8675`);
      }
else if(session.message.text.toLowerCase().contains('q8674')){session.send(`A8674`);
      }
else if(session.message.text.toLowerCase().contains('q8673')){session.send(`A8673`);
      }
else if(session.message.text.toLowerCase().contains('q8672')){session.send(`A8672`);
      }
else if(session.message.text.toLowerCase().contains('q8671')){session.send(`A8671`);
      }
else if(session.message.text.toLowerCase().contains('q8670')){session.send(`A8670`);
      }
else if(session.message.text.toLowerCase().contains('q8669')){session.send(`A8669`);
      }
else if(session.message.text.toLowerCase().contains('q8668')){session.send(`A8668`);
      }
else if(session.message.text.toLowerCase().contains('q8667')){session.send(`A8667`);
      }
else if(session.message.text.toLowerCase().contains('q8666')){session.send(`A8666`);
      }
else if(session.message.text.toLowerCase().contains('q8665')){session.send(`A8665`);
      }
else if(session.message.text.toLowerCase().contains('q8664')){session.send(`A8664`);
      }
else if(session.message.text.toLowerCase().contains('q8663')){session.send(`A8663`);
      }
else if(session.message.text.toLowerCase().contains('q8662')){session.send(`A8662`);
      }
else if(session.message.text.toLowerCase().contains('q8661')){session.send(`A8661`);
      }
else if(session.message.text.toLowerCase().contains('q8660')){session.send(`A8660`);
      }
else if(session.message.text.toLowerCase().contains('q8659')){session.send(`A8659`);
      }
else if(session.message.text.toLowerCase().contains('q8658')){session.send(`A8658`);
      }
else if(session.message.text.toLowerCase().contains('q8657')){session.send(`A8657`);
      }
else if(session.message.text.toLowerCase().contains('q8656')){session.send(`A8656`);
      }
else if(session.message.text.toLowerCase().contains('q8655')){session.send(`A8655`);
      }
else if(session.message.text.toLowerCase().contains('q8654')){session.send(`A8654`);
      }
else if(session.message.text.toLowerCase().contains('q8653')){session.send(`A8653`);
      }
else if(session.message.text.toLowerCase().contains('q8652')){session.send(`A8652`);
      }
else if(session.message.text.toLowerCase().contains('q8651')){session.send(`A8651`);
      }
else if(session.message.text.toLowerCase().contains('q8650')){session.send(`A8650`);
      }
else if(session.message.text.toLowerCase().contains('q8649')){session.send(`A8649`);
      }
else if(session.message.text.toLowerCase().contains('q8648')){session.send(`A8648`);
      }
else if(session.message.text.toLowerCase().contains('q8647')){session.send(`A8647`);
      }
else if(session.message.text.toLowerCase().contains('q8646')){session.send(`A8646`);
      }
else if(session.message.text.toLowerCase().contains('q8645')){session.send(`A8645`);
      }
else if(session.message.text.toLowerCase().contains('q8644')){session.send(`A8644`);
      }
else if(session.message.text.toLowerCase().contains('q8643')){session.send(`A8643`);
      }
else if(session.message.text.toLowerCase().contains('q8642')){session.send(`A8642`);
      }
else if(session.message.text.toLowerCase().contains('q8641')){session.send(`A8641`);
      }
else if(session.message.text.toLowerCase().contains('q8640')){session.send(`A8640`);
      }
else if(session.message.text.toLowerCase().contains('q8639')){session.send(`A8639`);
      }
else if(session.message.text.toLowerCase().contains('q8638')){session.send(`A8638`);
      }
else if(session.message.text.toLowerCase().contains('q8637')){session.send(`A8637`);
      }
else if(session.message.text.toLowerCase().contains('q8636')){session.send(`A8636`);
      }
else if(session.message.text.toLowerCase().contains('q8635')){session.send(`A8635`);
      }
else if(session.message.text.toLowerCase().contains('q8634')){session.send(`A8634`);
      }
else if(session.message.text.toLowerCase().contains('q8633')){session.send(`A8633`);
      }
else if(session.message.text.toLowerCase().contains('q8632')){session.send(`A8632`);
      }
else if(session.message.text.toLowerCase().contains('q8631')){session.send(`A8631`);
      }
else if(session.message.text.toLowerCase().contains('q8630')){session.send(`A8630`);
      }
else if(session.message.text.toLowerCase().contains('q8629')){session.send(`A8629`);
      }
else if(session.message.text.toLowerCase().contains('q8628')){session.send(`A8628`);
      }
else if(session.message.text.toLowerCase().contains('q8627')){session.send(`A8627`);
      }
else if(session.message.text.toLowerCase().contains('q8626')){session.send(`A8626`);
      }
else if(session.message.text.toLowerCase().contains('q8625')){session.send(`A8625`);
      }
else if(session.message.text.toLowerCase().contains('q8624')){session.send(`A8624`);
      }
else if(session.message.text.toLowerCase().contains('q8623')){session.send(`A8623`);
      }
else if(session.message.text.toLowerCase().contains('q8622')){session.send(`A8622`);
      }
else if(session.message.text.toLowerCase().contains('q8621')){session.send(`A8621`);
      }
else if(session.message.text.toLowerCase().contains('q8620')){session.send(`A8620`);
      }
else if(session.message.text.toLowerCase().contains('q8619')){session.send(`A8619`);
      }
else if(session.message.text.toLowerCase().contains('q8618')){session.send(`A8618`);
      }
else if(session.message.text.toLowerCase().contains('q8617')){session.send(`A8617`);
      }
else if(session.message.text.toLowerCase().contains('q8616')){session.send(`A8616`);
      }
else if(session.message.text.toLowerCase().contains('q8615')){session.send(`A8615`);
      }
else if(session.message.text.toLowerCase().contains('q8614')){session.send(`A8614`);
      }
else if(session.message.text.toLowerCase().contains('q8613')){session.send(`A8613`);
      }
else if(session.message.text.toLowerCase().contains('q8612')){session.send(`A8612`);
      }
else if(session.message.text.toLowerCase().contains('q8611')){session.send(`A8611`);
      }
else if(session.message.text.toLowerCase().contains('q8610')){session.send(`A8610`);
      }
else if(session.message.text.toLowerCase().contains('q8609')){session.send(`A8609`);
      }
else if(session.message.text.toLowerCase().contains('q8608')){session.send(`A8608`);
      }
else if(session.message.text.toLowerCase().contains('q8607')){session.send(`A8607`);
      }
else if(session.message.text.toLowerCase().contains('q8606')){session.send(`A8606`);
      }
else if(session.message.text.toLowerCase().contains('q8605')){session.send(`A8605`);
      }
else if(session.message.text.toLowerCase().contains('q8604')){session.send(`A8604`);
      }
else if(session.message.text.toLowerCase().contains('q8603')){session.send(`A8603`);
      }
else if(session.message.text.toLowerCase().contains('q8602')){session.send(`A8602`);
      }
else if(session.message.text.toLowerCase().contains('q8601')){session.send(`A8601`);
      }
else if(session.message.text.toLowerCase().contains('q8600')){session.send(`A8600`);
      }
else if(session.message.text.toLowerCase().contains('q8599')){session.send(`A8599`);
      }
else if(session.message.text.toLowerCase().contains('q8598')){session.send(`A8598`);
      }
else if(session.message.text.toLowerCase().contains('q8597')){session.send(`A8597`);
      }
else if(session.message.text.toLowerCase().contains('q8596')){session.send(`A8596`);
      }
else if(session.message.text.toLowerCase().contains('q8595')){session.send(`A8595`);
      }
else if(session.message.text.toLowerCase().contains('q8594')){session.send(`A8594`);
      }
else if(session.message.text.toLowerCase().contains('q8593')){session.send(`A8593`);
      }
else if(session.message.text.toLowerCase().contains('q8592')){session.send(`A8592`);
      }
else if(session.message.text.toLowerCase().contains('q8591')){session.send(`A8591`);
      }
else if(session.message.text.toLowerCase().contains('q8590')){session.send(`A8590`);
      }
else if(session.message.text.toLowerCase().contains('q8589')){session.send(`A8589`);
      }
else if(session.message.text.toLowerCase().contains('q8588')){session.send(`A8588`);
      }
else if(session.message.text.toLowerCase().contains('q8587')){session.send(`A8587`);
      }
else if(session.message.text.toLowerCase().contains('q8586')){session.send(`A8586`);
      }
else if(session.message.text.toLowerCase().contains('q8585')){session.send(`A8585`);
      }
else if(session.message.text.toLowerCase().contains('q8584')){session.send(`A8584`);
      }
else if(session.message.text.toLowerCase().contains('q8583')){session.send(`A8583`);
      }
else if(session.message.text.toLowerCase().contains('q8582')){session.send(`A8582`);
      }
else if(session.message.text.toLowerCase().contains('q8581')){session.send(`A8581`);
      }
else if(session.message.text.toLowerCase().contains('q8580')){session.send(`A8580`);
      }
else if(session.message.text.toLowerCase().contains('q8579')){session.send(`A8579`);
      }
else if(session.message.text.toLowerCase().contains('q8578')){session.send(`A8578`);
      }
else if(session.message.text.toLowerCase().contains('q8577')){session.send(`A8577`);
      }
else if(session.message.text.toLowerCase().contains('q8576')){session.send(`A8576`);
      }
else if(session.message.text.toLowerCase().contains('q8575')){session.send(`A8575`);
      }
else if(session.message.text.toLowerCase().contains('q8574')){session.send(`A8574`);
      }
else if(session.message.text.toLowerCase().contains('q8573')){session.send(`A8573`);
      }
else if(session.message.text.toLowerCase().contains('q8572')){session.send(`A8572`);
      }
else if(session.message.text.toLowerCase().contains('q8571')){session.send(`A8571`);
      }
else if(session.message.text.toLowerCase().contains('q8570')){session.send(`A8570`);
      }
else if(session.message.text.toLowerCase().contains('q8569')){session.send(`A8569`);
      }
else if(session.message.text.toLowerCase().contains('q8568')){session.send(`A8568`);
      }
else if(session.message.text.toLowerCase().contains('q8567')){session.send(`A8567`);
      }
else if(session.message.text.toLowerCase().contains('q8566')){session.send(`A8566`);
      }
else if(session.message.text.toLowerCase().contains('q8565')){session.send(`A8565`);
      }
else if(session.message.text.toLowerCase().contains('q8564')){session.send(`A8564`);
      }
else if(session.message.text.toLowerCase().contains('q8563')){session.send(`A8563`);
      }
else if(session.message.text.toLowerCase().contains('q8562')){session.send(`A8562`);
      }
else if(session.message.text.toLowerCase().contains('q8561')){session.send(`A8561`);
      }
else if(session.message.text.toLowerCase().contains('q8560')){session.send(`A8560`);
      }
else if(session.message.text.toLowerCase().contains('q8559')){session.send(`A8559`);
      }
else if(session.message.text.toLowerCase().contains('q8558')){session.send(`A8558`);
      }
else if(session.message.text.toLowerCase().contains('q8557')){session.send(`A8557`);
      }
else if(session.message.text.toLowerCase().contains('q8556')){session.send(`A8556`);
      }
else if(session.message.text.toLowerCase().contains('q8555')){session.send(`A8555`);
      }
else if(session.message.text.toLowerCase().contains('q8554')){session.send(`A8554`);
      }
else if(session.message.text.toLowerCase().contains('q8553')){session.send(`A8553`);
      }
else if(session.message.text.toLowerCase().contains('q8552')){session.send(`A8552`);
      }
else if(session.message.text.toLowerCase().contains('q8551')){session.send(`A8551`);
      }
else if(session.message.text.toLowerCase().contains('q8550')){session.send(`A8550`);
      }
else if(session.message.text.toLowerCase().contains('q8549')){session.send(`A8549`);
      }
else if(session.message.text.toLowerCase().contains('q8548')){session.send(`A8548`);
      }
else if(session.message.text.toLowerCase().contains('q8547')){session.send(`A8547`);
      }
else if(session.message.text.toLowerCase().contains('q8546')){session.send(`A8546`);
      }
else if(session.message.text.toLowerCase().contains('q8545')){session.send(`A8545`);
      }
else if(session.message.text.toLowerCase().contains('q8544')){session.send(`A8544`);
      }
else if(session.message.text.toLowerCase().contains('q8543')){session.send(`A8543`);
      }
else if(session.message.text.toLowerCase().contains('q8542')){session.send(`A8542`);
      }
else if(session.message.text.toLowerCase().contains('q8541')){session.send(`A8541`);
      }
else if(session.message.text.toLowerCase().contains('q8540')){session.send(`A8540`);
      }
else if(session.message.text.toLowerCase().contains('q8539')){session.send(`A8539`);
      }
else if(session.message.text.toLowerCase().contains('q8538')){session.send(`A8538`);
      }
else if(session.message.text.toLowerCase().contains('q8537')){session.send(`A8537`);
      }
else if(session.message.text.toLowerCase().contains('q8536')){session.send(`A8536`);
      }
else if(session.message.text.toLowerCase().contains('q8535')){session.send(`A8535`);
      }
else if(session.message.text.toLowerCase().contains('q8534')){session.send(`A8534`);
      }
else if(session.message.text.toLowerCase().contains('q8533')){session.send(`A8533`);
      }
else if(session.message.text.toLowerCase().contains('q8532')){session.send(`A8532`);
      }
else if(session.message.text.toLowerCase().contains('q8531')){session.send(`A8531`);
      }
else if(session.message.text.toLowerCase().contains('q8530')){session.send(`A8530`);
      }
else if(session.message.text.toLowerCase().contains('q8529')){session.send(`A8529`);
      }
else if(session.message.text.toLowerCase().contains('q8528')){session.send(`A8528`);
      }
else if(session.message.text.toLowerCase().contains('q8527')){session.send(`A8527`);
      }
else if(session.message.text.toLowerCase().contains('q8526')){session.send(`A8526`);
      }
else if(session.message.text.toLowerCase().contains('q8525')){session.send(`A8525`);
      }
else if(session.message.text.toLowerCase().contains('q8524')){session.send(`A8524`);
      }
else if(session.message.text.toLowerCase().contains('q8523')){session.send(`A8523`);
      }
else if(session.message.text.toLowerCase().contains('q8522')){session.send(`A8522`);
      }
else if(session.message.text.toLowerCase().contains('q8521')){session.send(`A8521`);
      }
else if(session.message.text.toLowerCase().contains('q8520')){session.send(`A8520`);
      }
else if(session.message.text.toLowerCase().contains('q8519')){session.send(`A8519`);
      }
else if(session.message.text.toLowerCase().contains('q8518')){session.send(`A8518`);
      }
else if(session.message.text.toLowerCase().contains('q8517')){session.send(`A8517`);
      }
else if(session.message.text.toLowerCase().contains('q8516')){session.send(`A8516`);
      }
else if(session.message.text.toLowerCase().contains('q8515')){session.send(`A8515`);
      }
else if(session.message.text.toLowerCase().contains('q8514')){session.send(`A8514`);
      }
else if(session.message.text.toLowerCase().contains('q8513')){session.send(`A8513`);
      }
else if(session.message.text.toLowerCase().contains('q8512')){session.send(`A8512`);
      }
else if(session.message.text.toLowerCase().contains('q8511')){session.send(`A8511`);
      }
else if(session.message.text.toLowerCase().contains('q8510')){session.send(`A8510`);
      }
else if(session.message.text.toLowerCase().contains('q8509')){session.send(`A8509`);
      }
else if(session.message.text.toLowerCase().contains('q8508')){session.send(`A8508`);
      }
else if(session.message.text.toLowerCase().contains('q8507')){session.send(`A8507`);
      }
else if(session.message.text.toLowerCase().contains('q8506')){session.send(`A8506`);
      }
else if(session.message.text.toLowerCase().contains('q8505')){session.send(`A8505`);
      }
else if(session.message.text.toLowerCase().contains('q8504')){session.send(`A8504`);
      }
else if(session.message.text.toLowerCase().contains('q8503')){session.send(`A8503`);
      }
else if(session.message.text.toLowerCase().contains('q8502')){session.send(`A8502`);
      }
else if(session.message.text.toLowerCase().contains('q8501')){session.send(`A8501`);
      }
else if(session.message.text.toLowerCase().contains('q8500')){session.send(`A8500`);
      }
else if(session.message.text.toLowerCase().contains('q8499')){session.send(`A8499`);
      }
else if(session.message.text.toLowerCase().contains('q8498')){session.send(`A8498`);
      }
else if(session.message.text.toLowerCase().contains('q8497')){session.send(`A8497`);
      }
else if(session.message.text.toLowerCase().contains('q8496')){session.send(`A8496`);
      }
else if(session.message.text.toLowerCase().contains('q8495')){session.send(`A8495`);
      }
else if(session.message.text.toLowerCase().contains('q8494')){session.send(`A8494`);
      }
else if(session.message.text.toLowerCase().contains('q8493')){session.send(`A8493`);
      }
else if(session.message.text.toLowerCase().contains('q8492')){session.send(`A8492`);
      }
else if(session.message.text.toLowerCase().contains('q8491')){session.send(`A8491`);
      }
else if(session.message.text.toLowerCase().contains('q8490')){session.send(`A8490`);
      }
else if(session.message.text.toLowerCase().contains('q8489')){session.send(`A8489`);
      }
else if(session.message.text.toLowerCase().contains('q8488')){session.send(`A8488`);
      }
else if(session.message.text.toLowerCase().contains('q8487')){session.send(`A8487`);
      }
else if(session.message.text.toLowerCase().contains('q8486')){session.send(`A8486`);
      }
else if(session.message.text.toLowerCase().contains('q8485')){session.send(`A8485`);
      }
else if(session.message.text.toLowerCase().contains('q8484')){session.send(`A8484`);
      }
else if(session.message.text.toLowerCase().contains('q8483')){session.send(`A8483`);
      }
else if(session.message.text.toLowerCase().contains('q8482')){session.send(`A8482`);
      }
else if(session.message.text.toLowerCase().contains('q8481')){session.send(`A8481`);
      }
else if(session.message.text.toLowerCase().contains('q8480')){session.send(`A8480`);
      }
else if(session.message.text.toLowerCase().contains('q8479')){session.send(`A8479`);
      }
else if(session.message.text.toLowerCase().contains('q8478')){session.send(`A8478`);
      }
else if(session.message.text.toLowerCase().contains('q8477')){session.send(`A8477`);
      }
else if(session.message.text.toLowerCase().contains('q8476')){session.send(`A8476`);
      }
else if(session.message.text.toLowerCase().contains('q8475')){session.send(`A8475`);
      }
else if(session.message.text.toLowerCase().contains('q8474')){session.send(`A8474`);
      }
else if(session.message.text.toLowerCase().contains('q8473')){session.send(`A8473`);
      }
else if(session.message.text.toLowerCase().contains('q8472')){session.send(`A8472`);
      }
else if(session.message.text.toLowerCase().contains('q8471')){session.send(`A8471`);
      }
else if(session.message.text.toLowerCase().contains('q8470')){session.send(`A8470`);
      }
else if(session.message.text.toLowerCase().contains('q8469')){session.send(`A8469`);
      }
else if(session.message.text.toLowerCase().contains('q8468')){session.send(`A8468`);
      }
else if(session.message.text.toLowerCase().contains('q8467')){session.send(`A8467`);
      }
else if(session.message.text.toLowerCase().contains('q8466')){session.send(`A8466`);
      }
else if(session.message.text.toLowerCase().contains('q8465')){session.send(`A8465`);
      }
else if(session.message.text.toLowerCase().contains('q8464')){session.send(`A8464`);
      }
else if(session.message.text.toLowerCase().contains('q8463')){session.send(`A8463`);
      }
else if(session.message.text.toLowerCase().contains('q8462')){session.send(`A8462`);
      }
else if(session.message.text.toLowerCase().contains('q8461')){session.send(`A8461`);
      }
else if(session.message.text.toLowerCase().contains('q8460')){session.send(`A8460`);
      }
else if(session.message.text.toLowerCase().contains('q8459')){session.send(`A8459`);
      }
else if(session.message.text.toLowerCase().contains('q8458')){session.send(`A8458`);
      }
else if(session.message.text.toLowerCase().contains('q8457')){session.send(`A8457`);
      }
else if(session.message.text.toLowerCase().contains('q8456')){session.send(`A8456`);
      }
else if(session.message.text.toLowerCase().contains('q8455')){session.send(`A8455`);
      }
else if(session.message.text.toLowerCase().contains('q8454')){session.send(`A8454`);
      }
else if(session.message.text.toLowerCase().contains('q8453')){session.send(`A8453`);
      }
else if(session.message.text.toLowerCase().contains('q8452')){session.send(`A8452`);
      }
else if(session.message.text.toLowerCase().contains('q8451')){session.send(`A8451`);
      }
else if(session.message.text.toLowerCase().contains('q8450')){session.send(`A8450`);
      }
else if(session.message.text.toLowerCase().contains('q8449')){session.send(`A8449`);
      }
else if(session.message.text.toLowerCase().contains('q8448')){session.send(`A8448`);
      }
else if(session.message.text.toLowerCase().contains('q8447')){session.send(`A8447`);
      }
else if(session.message.text.toLowerCase().contains('q8446')){session.send(`A8446`);
      }
else if(session.message.text.toLowerCase().contains('q8445')){session.send(`A8445`);
      }
else if(session.message.text.toLowerCase().contains('q8444')){session.send(`A8444`);
      }
else if(session.message.text.toLowerCase().contains('q8443')){session.send(`A8443`);
      }
else if(session.message.text.toLowerCase().contains('q8442')){session.send(`A8442`);
      }
else if(session.message.text.toLowerCase().contains('q8441')){session.send(`A8441`);
      }
else if(session.message.text.toLowerCase().contains('q8440')){session.send(`A8440`);
      }
else if(session.message.text.toLowerCase().contains('q8439')){session.send(`A8439`);
      }
else if(session.message.text.toLowerCase().contains('q8438')){session.send(`A8438`);
      }
else if(session.message.text.toLowerCase().contains('q8437')){session.send(`A8437`);
      }
else if(session.message.text.toLowerCase().contains('q8436')){session.send(`A8436`);
      }
else if(session.message.text.toLowerCase().contains('q8435')){session.send(`A8435`);
      }
else if(session.message.text.toLowerCase().contains('q8434')){session.send(`A8434`);
      }
else if(session.message.text.toLowerCase().contains('q8433')){session.send(`A8433`);
      }
else if(session.message.text.toLowerCase().contains('q8432')){session.send(`A8432`);
      }
else if(session.message.text.toLowerCase().contains('q8431')){session.send(`A8431`);
      }
else if(session.message.text.toLowerCase().contains('q8430')){session.send(`A8430`);
      }
else if(session.message.text.toLowerCase().contains('q8429')){session.send(`A8429`);
      }
else if(session.message.text.toLowerCase().contains('q8428')){session.send(`A8428`);
      }
else if(session.message.text.toLowerCase().contains('q8427')){session.send(`A8427`);
      }
else if(session.message.text.toLowerCase().contains('q8426')){session.send(`A8426`);
      }
else if(session.message.text.toLowerCase().contains('q8425')){session.send(`A8425`);
      }
else if(session.message.text.toLowerCase().contains('q8424')){session.send(`A8424`);
      }
else if(session.message.text.toLowerCase().contains('q8423')){session.send(`A8423`);
      }
else if(session.message.text.toLowerCase().contains('q8422')){session.send(`A8422`);
      }
else if(session.message.text.toLowerCase().contains('q8421')){session.send(`A8421`);
      }
else if(session.message.text.toLowerCase().contains('q8420')){session.send(`A8420`);
      }
else if(session.message.text.toLowerCase().contains('q8419')){session.send(`A8419`);
      }
else if(session.message.text.toLowerCase().contains('q8418')){session.send(`A8418`);
      }
else if(session.message.text.toLowerCase().contains('q8417')){session.send(`A8417`);
      }
else if(session.message.text.toLowerCase().contains('q8416')){session.send(`A8416`);
      }
else if(session.message.text.toLowerCase().contains('q8415')){session.send(`A8415`);
      }
else if(session.message.text.toLowerCase().contains('q8414')){session.send(`A8414`);
      }
else if(session.message.text.toLowerCase().contains('q8413')){session.send(`A8413`);
      }
else if(session.message.text.toLowerCase().contains('q8412')){session.send(`A8412`);
      }
else if(session.message.text.toLowerCase().contains('q8411')){session.send(`A8411`);
      }
else if(session.message.text.toLowerCase().contains('q8410')){session.send(`A8410`);
      }
else if(session.message.text.toLowerCase().contains('q8409')){session.send(`A8409`);
      }
else if(session.message.text.toLowerCase().contains('q8408')){session.send(`A8408`);
      }
else if(session.message.text.toLowerCase().contains('q8407')){session.send(`A8407`);
      }
else if(session.message.text.toLowerCase().contains('q8406')){session.send(`A8406`);
      }
else if(session.message.text.toLowerCase().contains('q8405')){session.send(`A8405`);
      }
else if(session.message.text.toLowerCase().contains('q8404')){session.send(`A8404`);
      }
else if(session.message.text.toLowerCase().contains('q8403')){session.send(`A8403`);
      }
else if(session.message.text.toLowerCase().contains('q8402')){session.send(`A8402`);
      }
else if(session.message.text.toLowerCase().contains('q8401')){session.send(`A8401`);
      }
else if(session.message.text.toLowerCase().contains('q8400')){session.send(`A8400`);
      }
else if(session.message.text.toLowerCase().contains('q8399')){session.send(`A8399`);
      }
else if(session.message.text.toLowerCase().contains('q8398')){session.send(`A8398`);
      }
else if(session.message.text.toLowerCase().contains('q8397')){session.send(`A8397`);
      }
else if(session.message.text.toLowerCase().contains('q8396')){session.send(`A8396`);
      }
else if(session.message.text.toLowerCase().contains('q8395')){session.send(`A8395`);
      }
else if(session.message.text.toLowerCase().contains('q8394')){session.send(`A8394`);
      }
else if(session.message.text.toLowerCase().contains('q8393')){session.send(`A8393`);
      }
else if(session.message.text.toLowerCase().contains('q8392')){session.send(`A8392`);
      }
else if(session.message.text.toLowerCase().contains('q8391')){session.send(`A8391`);
      }
else if(session.message.text.toLowerCase().contains('q8390')){session.send(`A8390`);
      }
else if(session.message.text.toLowerCase().contains('q8389')){session.send(`A8389`);
      }
else if(session.message.text.toLowerCase().contains('q8388')){session.send(`A8388`);
      }
else if(session.message.text.toLowerCase().contains('q8387')){session.send(`A8387`);
      }
else if(session.message.text.toLowerCase().contains('q8386')){session.send(`A8386`);
      }
else if(session.message.text.toLowerCase().contains('q8385')){session.send(`A8385`);
      }
else if(session.message.text.toLowerCase().contains('q8384')){session.send(`A8384`);
      }
else if(session.message.text.toLowerCase().contains('q8383')){session.send(`A8383`);
      }
else if(session.message.text.toLowerCase().contains('q8382')){session.send(`A8382`);
      }
else if(session.message.text.toLowerCase().contains('q8381')){session.send(`A8381`);
      }
else if(session.message.text.toLowerCase().contains('q8380')){session.send(`A8380`);
      }
else if(session.message.text.toLowerCase().contains('q8379')){session.send(`A8379`);
      }
else if(session.message.text.toLowerCase().contains('q8378')){session.send(`A8378`);
      }
else if(session.message.text.toLowerCase().contains('q8377')){session.send(`A8377`);
      }
else if(session.message.text.toLowerCase().contains('q8376')){session.send(`A8376`);
      }
else if(session.message.text.toLowerCase().contains('q8375')){session.send(`A8375`);
      }
else if(session.message.text.toLowerCase().contains('q8374')){session.send(`A8374`);
      }
else if(session.message.text.toLowerCase().contains('q8373')){session.send(`A8373`);
      }
else if(session.message.text.toLowerCase().contains('q8372')){session.send(`A8372`);
      }
else if(session.message.text.toLowerCase().contains('q8371')){session.send(`A8371`);
      }
else if(session.message.text.toLowerCase().contains('q8370')){session.send(`A8370`);
      }
else if(session.message.text.toLowerCase().contains('q8369')){session.send(`A8369`);
      }
else if(session.message.text.toLowerCase().contains('q8368')){session.send(`A8368`);
      }
else if(session.message.text.toLowerCase().contains('q8367')){session.send(`A8367`);
      }
else if(session.message.text.toLowerCase().contains('q8366')){session.send(`A8366`);
      }
else if(session.message.text.toLowerCase().contains('q8365')){session.send(`A8365`);
      }
else if(session.message.text.toLowerCase().contains('q8364')){session.send(`A8364`);
      }
else if(session.message.text.toLowerCase().contains('q8363')){session.send(`A8363`);
      }
else if(session.message.text.toLowerCase().contains('q8362')){session.send(`A8362`);
      }
else if(session.message.text.toLowerCase().contains('q8361')){session.send(`A8361`);
      }
else if(session.message.text.toLowerCase().contains('q8360')){session.send(`A8360`);
      }
else if(session.message.text.toLowerCase().contains('q8359')){session.send(`A8359`);
      }
else if(session.message.text.toLowerCase().contains('q8358')){session.send(`A8358`);
      }
else if(session.message.text.toLowerCase().contains('q8357')){session.send(`A8357`);
      }
else if(session.message.text.toLowerCase().contains('q8356')){session.send(`A8356`);
      }
else if(session.message.text.toLowerCase().contains('q8355')){session.send(`A8355`);
      }
else if(session.message.text.toLowerCase().contains('q8354')){session.send(`A8354`);
      }
else if(session.message.text.toLowerCase().contains('q8353')){session.send(`A8353`);
      }
else if(session.message.text.toLowerCase().contains('q8352')){session.send(`A8352`);
      }
else if(session.message.text.toLowerCase().contains('q8351')){session.send(`A8351`);
      }
else if(session.message.text.toLowerCase().contains('q8350')){session.send(`A8350`);
      }
else if(session.message.text.toLowerCase().contains('q8349')){session.send(`A8349`);
      }
else if(session.message.text.toLowerCase().contains('q8348')){session.send(`A8348`);
      }
else if(session.message.text.toLowerCase().contains('q8347')){session.send(`A8347`);
      }
else if(session.message.text.toLowerCase().contains('q8346')){session.send(`A8346`);
      }
else if(session.message.text.toLowerCase().contains('q8345')){session.send(`A8345`);
      }
else if(session.message.text.toLowerCase().contains('q8344')){session.send(`A8344`);
      }
else if(session.message.text.toLowerCase().contains('q8343')){session.send(`A8343`);
      }
else if(session.message.text.toLowerCase().contains('q8342')){session.send(`A8342`);
      }
else if(session.message.text.toLowerCase().contains('q8341')){session.send(`A8341`);
      }
else if(session.message.text.toLowerCase().contains('q8340')){session.send(`A8340`);
      }
else if(session.message.text.toLowerCase().contains('q8339')){session.send(`A8339`);
      }
else if(session.message.text.toLowerCase().contains('q8338')){session.send(`A8338`);
      }
else if(session.message.text.toLowerCase().contains('q8337')){session.send(`A8337`);
      }
else if(session.message.text.toLowerCase().contains('q8336')){session.send(`A8336`);
      }
else if(session.message.text.toLowerCase().contains('q8335')){session.send(`A8335`);
      }
else if(session.message.text.toLowerCase().contains('q8334')){session.send(`A8334`);
      }
else if(session.message.text.toLowerCase().contains('q8333')){session.send(`A8333`);
      }
else if(session.message.text.toLowerCase().contains('q8332')){session.send(`A8332`);
      }
else if(session.message.text.toLowerCase().contains('q8331')){session.send(`A8331`);
      }
else if(session.message.text.toLowerCase().contains('q8330')){session.send(`A8330`);
      }
else if(session.message.text.toLowerCase().contains('q8329')){session.send(`A8329`);
      }
else if(session.message.text.toLowerCase().contains('q8328')){session.send(`A8328`);
      }
else if(session.message.text.toLowerCase().contains('q8327')){session.send(`A8327`);
      }
else if(session.message.text.toLowerCase().contains('q8326')){session.send(`A8326`);
      }
else if(session.message.text.toLowerCase().contains('q8325')){session.send(`A8325`);
      }
else if(session.message.text.toLowerCase().contains('q8324')){session.send(`A8324`);
      }
else if(session.message.text.toLowerCase().contains('q8323')){session.send(`A8323`);
      }
else if(session.message.text.toLowerCase().contains('q8322')){session.send(`A8322`);
      }
else if(session.message.text.toLowerCase().contains('q8321')){session.send(`A8321`);
      }
else if(session.message.text.toLowerCase().contains('q8320')){session.send(`A8320`);
      }
else if(session.message.text.toLowerCase().contains('q8319')){session.send(`A8319`);
      }
else if(session.message.text.toLowerCase().contains('q8318')){session.send(`A8318`);
      }
else if(session.message.text.toLowerCase().contains('q8317')){session.send(`A8317`);
      }
else if(session.message.text.toLowerCase().contains('q8316')){session.send(`A8316`);
      }
else if(session.message.text.toLowerCase().contains('q8315')){session.send(`A8315`);
      }
else if(session.message.text.toLowerCase().contains('q8314')){session.send(`A8314`);
      }
else if(session.message.text.toLowerCase().contains('q8313')){session.send(`A8313`);
      }
else if(session.message.text.toLowerCase().contains('q8312')){session.send(`A8312`);
      }
else if(session.message.text.toLowerCase().contains('q8311')){session.send(`A8311`);
      }
else if(session.message.text.toLowerCase().contains('q8310')){session.send(`A8310`);
      }
else if(session.message.text.toLowerCase().contains('q8309')){session.send(`A8309`);
      }
else if(session.message.text.toLowerCase().contains('q8308')){session.send(`A8308`);
      }
else if(session.message.text.toLowerCase().contains('q8307')){session.send(`A8307`);
      }
else if(session.message.text.toLowerCase().contains('q8306')){session.send(`A8306`);
      }
else if(session.message.text.toLowerCase().contains('q8305')){session.send(`A8305`);
      }
else if(session.message.text.toLowerCase().contains('q8304')){session.send(`A8304`);
      }
else if(session.message.text.toLowerCase().contains('q8303')){session.send(`A8303`);
      }
else if(session.message.text.toLowerCase().contains('q8302')){session.send(`A8302`);
      }
else if(session.message.text.toLowerCase().contains('q8301')){session.send(`A8301`);
      }
else if(session.message.text.toLowerCase().contains('q8300')){session.send(`A8300`);
      }
else if(session.message.text.toLowerCase().contains('q8299')){session.send(`A8299`);
      }
else if(session.message.text.toLowerCase().contains('q8298')){session.send(`A8298`);
      }
else if(session.message.text.toLowerCase().contains('q8297')){session.send(`A8297`);
      }
else if(session.message.text.toLowerCase().contains('q8296')){session.send(`A8296`);
      }
else if(session.message.text.toLowerCase().contains('q8295')){session.send(`A8295`);
      }
else if(session.message.text.toLowerCase().contains('q8294')){session.send(`A8294`);
      }
else if(session.message.text.toLowerCase().contains('q8293')){session.send(`A8293`);
      }
else if(session.message.text.toLowerCase().contains('q8292')){session.send(`A8292`);
      }
else if(session.message.text.toLowerCase().contains('q8291')){session.send(`A8291`);
      }
else if(session.message.text.toLowerCase().contains('q8290')){session.send(`A8290`);
      }
else if(session.message.text.toLowerCase().contains('q8289')){session.send(`A8289`);
      }
else if(session.message.text.toLowerCase().contains('q8288')){session.send(`A8288`);
      }
else if(session.message.text.toLowerCase().contains('q8287')){session.send(`A8287`);
      }
else if(session.message.text.toLowerCase().contains('q8286')){session.send(`A8286`);
      }
else if(session.message.text.toLowerCase().contains('q8285')){session.send(`A8285`);
      }
else if(session.message.text.toLowerCase().contains('q8284')){session.send(`A8284`);
      }
else if(session.message.text.toLowerCase().contains('q8283')){session.send(`A8283`);
      }
else if(session.message.text.toLowerCase().contains('q8282')){session.send(`A8282`);
      }
else if(session.message.text.toLowerCase().contains('q8281')){session.send(`A8281`);
      }
else if(session.message.text.toLowerCase().contains('q8280')){session.send(`A8280`);
      }
else if(session.message.text.toLowerCase().contains('q8279')){session.send(`A8279`);
      }
else if(session.message.text.toLowerCase().contains('q8278')){session.send(`A8278`);
      }
else if(session.message.text.toLowerCase().contains('q8277')){session.send(`A8277`);
      }
else if(session.message.text.toLowerCase().contains('q8276')){session.send(`A8276`);
      }
else if(session.message.text.toLowerCase().contains('q8275')){session.send(`A8275`);
      }
else if(session.message.text.toLowerCase().contains('q8274')){session.send(`A8274`);
      }
else if(session.message.text.toLowerCase().contains('q8273')){session.send(`A8273`);
      }
else if(session.message.text.toLowerCase().contains('q8272')){session.send(`A8272`);
      }
else if(session.message.text.toLowerCase().contains('q8271')){session.send(`A8271`);
      }
else if(session.message.text.toLowerCase().contains('q8270')){session.send(`A8270`);
      }
else if(session.message.text.toLowerCase().contains('q8269')){session.send(`A8269`);
      }
else if(session.message.text.toLowerCase().contains('q8268')){session.send(`A8268`);
      }
else if(session.message.text.toLowerCase().contains('q8267')){session.send(`A8267`);
      }
else if(session.message.text.toLowerCase().contains('q8266')){session.send(`A8266`);
      }
else if(session.message.text.toLowerCase().contains('q8265')){session.send(`A8265`);
      }
else if(session.message.text.toLowerCase().contains('q8264')){session.send(`A8264`);
      }
else if(session.message.text.toLowerCase().contains('q8263')){session.send(`A8263`);
      }
else if(session.message.text.toLowerCase().contains('q8262')){session.send(`A8262`);
      }
else if(session.message.text.toLowerCase().contains('q8261')){session.send(`A8261`);
      }
else if(session.message.text.toLowerCase().contains('q8260')){session.send(`A8260`);
      }
else if(session.message.text.toLowerCase().contains('q8259')){session.send(`A8259`);
      }
else if(session.message.text.toLowerCase().contains('q8258')){session.send(`A8258`);
      }
else if(session.message.text.toLowerCase().contains('q8257')){session.send(`A8257`);
      }
else if(session.message.text.toLowerCase().contains('q8256')){session.send(`A8256`);
      }
else if(session.message.text.toLowerCase().contains('q8255')){session.send(`A8255`);
      }
else if(session.message.text.toLowerCase().contains('q8254')){session.send(`A8254`);
      }
else if(session.message.text.toLowerCase().contains('q8253')){session.send(`A8253`);
      }
else if(session.message.text.toLowerCase().contains('q8252')){session.send(`A8252`);
      }
else if(session.message.text.toLowerCase().contains('q8251')){session.send(`A8251`);
      }
else if(session.message.text.toLowerCase().contains('q8250')){session.send(`A8250`);
      }
else if(session.message.text.toLowerCase().contains('q8249')){session.send(`A8249`);
      }
else if(session.message.text.toLowerCase().contains('q8248')){session.send(`A8248`);
      }
else if(session.message.text.toLowerCase().contains('q8247')){session.send(`A8247`);
      }
else if(session.message.text.toLowerCase().contains('q8246')){session.send(`A8246`);
      }
else if(session.message.text.toLowerCase().contains('q8245')){session.send(`A8245`);
      }
else if(session.message.text.toLowerCase().contains('q8244')){session.send(`A8244`);
      }
else if(session.message.text.toLowerCase().contains('q8243')){session.send(`A8243`);
      }
else if(session.message.text.toLowerCase().contains('q8242')){session.send(`A8242`);
      }
else if(session.message.text.toLowerCase().contains('q8241')){session.send(`A8241`);
      }
else if(session.message.text.toLowerCase().contains('q8240')){session.send(`A8240`);
      }
else if(session.message.text.toLowerCase().contains('q8239')){session.send(`A8239`);
      }
else if(session.message.text.toLowerCase().contains('q8238')){session.send(`A8238`);
      }
else if(session.message.text.toLowerCase().contains('q8237')){session.send(`A8237`);
      }
else if(session.message.text.toLowerCase().contains('q8236')){session.send(`A8236`);
      }
else if(session.message.text.toLowerCase().contains('q8235')){session.send(`A8235`);
      }
else if(session.message.text.toLowerCase().contains('q8234')){session.send(`A8234`);
      }
else if(session.message.text.toLowerCase().contains('q8233')){session.send(`A8233`);
      }
else if(session.message.text.toLowerCase().contains('q8232')){session.send(`A8232`);
      }
else if(session.message.text.toLowerCase().contains('q8231')){session.send(`A8231`);
      }
else if(session.message.text.toLowerCase().contains('q8230')){session.send(`A8230`);
      }
else if(session.message.text.toLowerCase().contains('q8229')){session.send(`A8229`);
      }
else if(session.message.text.toLowerCase().contains('q8228')){session.send(`A8228`);
      }
else if(session.message.text.toLowerCase().contains('q8227')){session.send(`A8227`);
      }
else if(session.message.text.toLowerCase().contains('q8226')){session.send(`A8226`);
      }
else if(session.message.text.toLowerCase().contains('q8225')){session.send(`A8225`);
      }
else if(session.message.text.toLowerCase().contains('q8224')){session.send(`A8224`);
      }
else if(session.message.text.toLowerCase().contains('q8223')){session.send(`A8223`);
      }
else if(session.message.text.toLowerCase().contains('q8222')){session.send(`A8222`);
      }
else if(session.message.text.toLowerCase().contains('q8221')){session.send(`A8221`);
      }
else if(session.message.text.toLowerCase().contains('q8220')){session.send(`A8220`);
      }
else if(session.message.text.toLowerCase().contains('q8219')){session.send(`A8219`);
      }
else if(session.message.text.toLowerCase().contains('q8218')){session.send(`A8218`);
      }
else if(session.message.text.toLowerCase().contains('q8217')){session.send(`A8217`);
      }
else if(session.message.text.toLowerCase().contains('q8216')){session.send(`A8216`);
      }
else if(session.message.text.toLowerCase().contains('q8215')){session.send(`A8215`);
      }
else if(session.message.text.toLowerCase().contains('q8214')){session.send(`A8214`);
      }
else if(session.message.text.toLowerCase().contains('q8213')){session.send(`A8213`);
      }
else if(session.message.text.toLowerCase().contains('q8212')){session.send(`A8212`);
      }
else if(session.message.text.toLowerCase().contains('q8211')){session.send(`A8211`);
      }
else if(session.message.text.toLowerCase().contains('q8210')){session.send(`A8210`);
      }
else if(session.message.text.toLowerCase().contains('q8209')){session.send(`A8209`);
      }
else if(session.message.text.toLowerCase().contains('q8208')){session.send(`A8208`);
      }
else if(session.message.text.toLowerCase().contains('q8207')){session.send(`A8207`);
      }
else if(session.message.text.toLowerCase().contains('q8206')){session.send(`A8206`);
      }
else if(session.message.text.toLowerCase().contains('q8205')){session.send(`A8205`);
      }
else if(session.message.text.toLowerCase().contains('q8204')){session.send(`A8204`);
      }
else if(session.message.text.toLowerCase().contains('q8203')){session.send(`A8203`);
      }
else if(session.message.text.toLowerCase().contains('q8202')){session.send(`A8202`);
      }
else if(session.message.text.toLowerCase().contains('q8201')){session.send(`A8201`);
      }
else if(session.message.text.toLowerCase().contains('q8200')){session.send(`A8200`);
      }
else if(session.message.text.toLowerCase().contains('q8199')){session.send(`A8199`);
      }
else if(session.message.text.toLowerCase().contains('q8198')){session.send(`A8198`);
      }
else if(session.message.text.toLowerCase().contains('q8197')){session.send(`A8197`);
      }
else if(session.message.text.toLowerCase().contains('q8196')){session.send(`A8196`);
      }
else if(session.message.text.toLowerCase().contains('q8195')){session.send(`A8195`);
      }
else if(session.message.text.toLowerCase().contains('q8194')){session.send(`A8194`);
      }
else if(session.message.text.toLowerCase().contains('q8193')){session.send(`A8193`);
      }
else if(session.message.text.toLowerCase().contains('q8192')){session.send(`A8192`);
      }
else if(session.message.text.toLowerCase().contains('q8191')){session.send(`A8191`);
      }
else if(session.message.text.toLowerCase().contains('q8190')){session.send(`A8190`);
      }
else if(session.message.text.toLowerCase().contains('q8189')){session.send(`A8189`);
      }
else if(session.message.text.toLowerCase().contains('q8188')){session.send(`A8188`);
      }
else if(session.message.text.toLowerCase().contains('q8187')){session.send(`A8187`);
      }
else if(session.message.text.toLowerCase().contains('q8186')){session.send(`A8186`);
      }
else if(session.message.text.toLowerCase().contains('q8185')){session.send(`A8185`);
      }
else if(session.message.text.toLowerCase().contains('q8184')){session.send(`A8184`);
      }
else if(session.message.text.toLowerCase().contains('q8183')){session.send(`A8183`);
      }
else if(session.message.text.toLowerCase().contains('q8182')){session.send(`A8182`);
      }
else if(session.message.text.toLowerCase().contains('q8181')){session.send(`A8181`);
      }
else if(session.message.text.toLowerCase().contains('q8180')){session.send(`A8180`);
      }
else if(session.message.text.toLowerCase().contains('q8179')){session.send(`A8179`);
      }
else if(session.message.text.toLowerCase().contains('q8178')){session.send(`A8178`);
      }
else if(session.message.text.toLowerCase().contains('q8177')){session.send(`A8177`);
      }
else if(session.message.text.toLowerCase().contains('q8176')){session.send(`A8176`);
      }
else if(session.message.text.toLowerCase().contains('q8175')){session.send(`A8175`);
      }
else if(session.message.text.toLowerCase().contains('q8174')){session.send(`A8174`);
      }
else if(session.message.text.toLowerCase().contains('q8173')){session.send(`A8173`);
      }
else if(session.message.text.toLowerCase().contains('q8172')){session.send(`A8172`);
      }
else if(session.message.text.toLowerCase().contains('q8171')){session.send(`A8171`);
      }
else if(session.message.text.toLowerCase().contains('q8170')){session.send(`A8170`);
      }
else if(session.message.text.toLowerCase().contains('q8169')){session.send(`A8169`);
      }
else if(session.message.text.toLowerCase().contains('q8168')){session.send(`A8168`);
      }
else if(session.message.text.toLowerCase().contains('q8167')){session.send(`A8167`);
      }
else if(session.message.text.toLowerCase().contains('q8166')){session.send(`A8166`);
      }
else if(session.message.text.toLowerCase().contains('q8165')){session.send(`A8165`);
      }
else if(session.message.text.toLowerCase().contains('q8164')){session.send(`A8164`);
      }
else if(session.message.text.toLowerCase().contains('q8163')){session.send(`A8163`);
      }
else if(session.message.text.toLowerCase().contains('q8162')){session.send(`A8162`);
      }
else if(session.message.text.toLowerCase().contains('q8161')){session.send(`A8161`);
      }
else if(session.message.text.toLowerCase().contains('q8160')){session.send(`A8160`);
      }
else if(session.message.text.toLowerCase().contains('q8159')){session.send(`A8159`);
      }
else if(session.message.text.toLowerCase().contains('q8158')){session.send(`A8158`);
      }
else if(session.message.text.toLowerCase().contains('q8157')){session.send(`A8157`);
      }
else if(session.message.text.toLowerCase().contains('q8156')){session.send(`A8156`);
      }
else if(session.message.text.toLowerCase().contains('q8155')){session.send(`A8155`);
      }
else if(session.message.text.toLowerCase().contains('q8154')){session.send(`A8154`);
      }
else if(session.message.text.toLowerCase().contains('q8153')){session.send(`A8153`);
      }
else if(session.message.text.toLowerCase().contains('q8152')){session.send(`A8152`);
      }
else if(session.message.text.toLowerCase().contains('q8151')){session.send(`A8151`);
      }
else if(session.message.text.toLowerCase().contains('q8150')){session.send(`A8150`);
      }
else if(session.message.text.toLowerCase().contains('q8149')){session.send(`A8149`);
      }
else if(session.message.text.toLowerCase().contains('q8148')){session.send(`A8148`);
      }
else if(session.message.text.toLowerCase().contains('q8147')){session.send(`A8147`);
      }
else if(session.message.text.toLowerCase().contains('q8146')){session.send(`A8146`);
      }
else if(session.message.text.toLowerCase().contains('q8145')){session.send(`A8145`);
      }
else if(session.message.text.toLowerCase().contains('q8144')){session.send(`A8144`);
      }
else if(session.message.text.toLowerCase().contains('q8143')){session.send(`A8143`);
      }
else if(session.message.text.toLowerCase().contains('q8142')){session.send(`A8142`);
      }
else if(session.message.text.toLowerCase().contains('q8141')){session.send(`A8141`);
      }
else if(session.message.text.toLowerCase().contains('q8140')){session.send(`A8140`);
      }
else if(session.message.text.toLowerCase().contains('q8139')){session.send(`A8139`);
      }
else if(session.message.text.toLowerCase().contains('q8138')){session.send(`A8138`);
      }
else if(session.message.text.toLowerCase().contains('q8137')){session.send(`A8137`);
      }
else if(session.message.text.toLowerCase().contains('q8136')){session.send(`A8136`);
      }
else if(session.message.text.toLowerCase().contains('q8135')){session.send(`A8135`);
      }
else if(session.message.text.toLowerCase().contains('q8134')){session.send(`A8134`);
      }
else if(session.message.text.toLowerCase().contains('q8133')){session.send(`A8133`);
      }
else if(session.message.text.toLowerCase().contains('q8132')){session.send(`A8132`);
      }
else if(session.message.text.toLowerCase().contains('q8131')){session.send(`A8131`);
      }
else if(session.message.text.toLowerCase().contains('q8130')){session.send(`A8130`);
      }
else if(session.message.text.toLowerCase().contains('q8129')){session.send(`A8129`);
      }
else if(session.message.text.toLowerCase().contains('q8128')){session.send(`A8128`);
      }
else if(session.message.text.toLowerCase().contains('q8127')){session.send(`A8127`);
      }
else if(session.message.text.toLowerCase().contains('q8126')){session.send(`A8126`);
      }
else if(session.message.text.toLowerCase().contains('q8125')){session.send(`A8125`);
      }
else if(session.message.text.toLowerCase().contains('q8124')){session.send(`A8124`);
      }
else if(session.message.text.toLowerCase().contains('q8123')){session.send(`A8123`);
      }
else if(session.message.text.toLowerCase().contains('q8122')){session.send(`A8122`);
      }
else if(session.message.text.toLowerCase().contains('q8121')){session.send(`A8121`);
      }
else if(session.message.text.toLowerCase().contains('q8120')){session.send(`A8120`);
      }
else if(session.message.text.toLowerCase().contains('q8119')){session.send(`A8119`);
      }
else if(session.message.text.toLowerCase().contains('q8118')){session.send(`A8118`);
      }
else if(session.message.text.toLowerCase().contains('q8117')){session.send(`A8117`);
      }
else if(session.message.text.toLowerCase().contains('q8116')){session.send(`A8116`);
      }
else if(session.message.text.toLowerCase().contains('q8115')){session.send(`A8115`);
      }
else if(session.message.text.toLowerCase().contains('q8114')){session.send(`A8114`);
      }
else if(session.message.text.toLowerCase().contains('q8113')){session.send(`A8113`);
      }
else if(session.message.text.toLowerCase().contains('q8112')){session.send(`A8112`);
      }
else if(session.message.text.toLowerCase().contains('q8111')){session.send(`A8111`);
      }
else if(session.message.text.toLowerCase().contains('q8110')){session.send(`A8110`);
      }
else if(session.message.text.toLowerCase().contains('q8109')){session.send(`A8109`);
      }
else if(session.message.text.toLowerCase().contains('q8108')){session.send(`A8108`);
      }
else if(session.message.text.toLowerCase().contains('q8107')){session.send(`A8107`);
      }
else if(session.message.text.toLowerCase().contains('q8106')){session.send(`A8106`);
      }
else if(session.message.text.toLowerCase().contains('q8105')){session.send(`A8105`);
      }
else if(session.message.text.toLowerCase().contains('q8104')){session.send(`A8104`);
      }
else if(session.message.text.toLowerCase().contains('q8103')){session.send(`A8103`);
      }
else if(session.message.text.toLowerCase().contains('q8102')){session.send(`A8102`);
      }
else if(session.message.text.toLowerCase().contains('q8101')){session.send(`A8101`);
      }
else if(session.message.text.toLowerCase().contains('q8100')){session.send(`A8100`);
      }
else if(session.message.text.toLowerCase().contains('q8099')){session.send(`A8099`);
      }
else if(session.message.text.toLowerCase().contains('q8098')){session.send(`A8098`);
      }
else if(session.message.text.toLowerCase().contains('q8097')){session.send(`A8097`);
      }
else if(session.message.text.toLowerCase().contains('q8096')){session.send(`A8096`);
      }
else if(session.message.text.toLowerCase().contains('q8095')){session.send(`A8095`);
      }
else if(session.message.text.toLowerCase().contains('q8094')){session.send(`A8094`);
      }
else if(session.message.text.toLowerCase().contains('q8093')){session.send(`A8093`);
      }
else if(session.message.text.toLowerCase().contains('q8092')){session.send(`A8092`);
      }
else if(session.message.text.toLowerCase().contains('q8091')){session.send(`A8091`);
      }
else if(session.message.text.toLowerCase().contains('q8090')){session.send(`A8090`);
      }
else if(session.message.text.toLowerCase().contains('q8089')){session.send(`A8089`);
      }
else if(session.message.text.toLowerCase().contains('q8088')){session.send(`A8088`);
      }
else if(session.message.text.toLowerCase().contains('q8087')){session.send(`A8087`);
      }
else if(session.message.text.toLowerCase().contains('q8086')){session.send(`A8086`);
      }
else if(session.message.text.toLowerCase().contains('q8085')){session.send(`A8085`);
      }
else if(session.message.text.toLowerCase().contains('q8084')){session.send(`A8084`);
      }
else if(session.message.text.toLowerCase().contains('q8083')){session.send(`A8083`);
      }
else if(session.message.text.toLowerCase().contains('q8082')){session.send(`A8082`);
      }
else if(session.message.text.toLowerCase().contains('q8081')){session.send(`A8081`);
      }
else if(session.message.text.toLowerCase().contains('q8080')){session.send(`A8080`);
      }
else if(session.message.text.toLowerCase().contains('q8079')){session.send(`A8079`);
      }
else if(session.message.text.toLowerCase().contains('q8078')){session.send(`A8078`);
      }
else if(session.message.text.toLowerCase().contains('q8077')){session.send(`A8077`);
      }
else if(session.message.text.toLowerCase().contains('q8076')){session.send(`A8076`);
      }
else if(session.message.text.toLowerCase().contains('q8075')){session.send(`A8075`);
      }
else if(session.message.text.toLowerCase().contains('q8074')){session.send(`A8074`);
      }
else if(session.message.text.toLowerCase().contains('q8073')){session.send(`A8073`);
      }
else if(session.message.text.toLowerCase().contains('q8072')){session.send(`A8072`);
      }
else if(session.message.text.toLowerCase().contains('q8071')){session.send(`A8071`);
      }
else if(session.message.text.toLowerCase().contains('q8070')){session.send(`A8070`);
      }
else if(session.message.text.toLowerCase().contains('q8069')){session.send(`A8069`);
      }
else if(session.message.text.toLowerCase().contains('q8068')){session.send(`A8068`);
      }
else if(session.message.text.toLowerCase().contains('q8067')){session.send(`A8067`);
      }
else if(session.message.text.toLowerCase().contains('q8066')){session.send(`A8066`);
      }
else if(session.message.text.toLowerCase().contains('q8065')){session.send(`A8065`);
      }
else if(session.message.text.toLowerCase().contains('q8064')){session.send(`A8064`);
      }
else if(session.message.text.toLowerCase().contains('q8063')){session.send(`A8063`);
      }
else if(session.message.text.toLowerCase().contains('q8062')){session.send(`A8062`);
      }
else if(session.message.text.toLowerCase().contains('q8061')){session.send(`A8061`);
      }
else if(session.message.text.toLowerCase().contains('q8060')){session.send(`A8060`);
      }
else if(session.message.text.toLowerCase().contains('q8059')){session.send(`A8059`);
      }
else if(session.message.text.toLowerCase().contains('q8058')){session.send(`A8058`);
      }
else if(session.message.text.toLowerCase().contains('q8057')){session.send(`A8057`);
      }
else if(session.message.text.toLowerCase().contains('q8056')){session.send(`A8056`);
      }
else if(session.message.text.toLowerCase().contains('q8055')){session.send(`A8055`);
      }
else if(session.message.text.toLowerCase().contains('q8054')){session.send(`A8054`);
      }
else if(session.message.text.toLowerCase().contains('q8053')){session.send(`A8053`);
      }
else if(session.message.text.toLowerCase().contains('q8052')){session.send(`A8052`);
      }
else if(session.message.text.toLowerCase().contains('q8051')){session.send(`A8051`);
      }
else if(session.message.text.toLowerCase().contains('q8050')){session.send(`A8050`);
      }
else if(session.message.text.toLowerCase().contains('q8049')){session.send(`A8049`);
      }
else if(session.message.text.toLowerCase().contains('q8048')){session.send(`A8048`);
      }
else if(session.message.text.toLowerCase().contains('q8047')){session.send(`A8047`);
      }
else if(session.message.text.toLowerCase().contains('q8046')){session.send(`A8046`);
      }
else if(session.message.text.toLowerCase().contains('q8045')){session.send(`A8045`);
      }
else if(session.message.text.toLowerCase().contains('q8044')){session.send(`A8044`);
      }
else if(session.message.text.toLowerCase().contains('q8043')){session.send(`A8043`);
      }
else if(session.message.text.toLowerCase().contains('q8042')){session.send(`A8042`);
      }
else if(session.message.text.toLowerCase().contains('q8041')){session.send(`A8041`);
      }
else if(session.message.text.toLowerCase().contains('q8040')){session.send(`A8040`);
      }
else if(session.message.text.toLowerCase().contains('q8039')){session.send(`A8039`);
      }
else if(session.message.text.toLowerCase().contains('q8038')){session.send(`A8038`);
      }
else if(session.message.text.toLowerCase().contains('q8037')){session.send(`A8037`);
      }
else if(session.message.text.toLowerCase().contains('q8036')){session.send(`A8036`);
      }
else if(session.message.text.toLowerCase().contains('q8035')){session.send(`A8035`);
      }
else if(session.message.text.toLowerCase().contains('q8034')){session.send(`A8034`);
      }
else if(session.message.text.toLowerCase().contains('q8033')){session.send(`A8033`);
      }
else if(session.message.text.toLowerCase().contains('q8032')){session.send(`A8032`);
      }
else if(session.message.text.toLowerCase().contains('q8031')){session.send(`A8031`);
      }
else if(session.message.text.toLowerCase().contains('q8030')){session.send(`A8030`);
      }
else if(session.message.text.toLowerCase().contains('q8029')){session.send(`A8029`);
      }
else if(session.message.text.toLowerCase().contains('q8028')){session.send(`A8028`);
      }
else if(session.message.text.toLowerCase().contains('q8027')){session.send(`A8027`);
      }
else if(session.message.text.toLowerCase().contains('q8026')){session.send(`A8026`);
      }
else if(session.message.text.toLowerCase().contains('q8025')){session.send(`A8025`);
      }
else if(session.message.text.toLowerCase().contains('q8024')){session.send(`A8024`);
      }
else if(session.message.text.toLowerCase().contains('q8023')){session.send(`A8023`);
      }
else if(session.message.text.toLowerCase().contains('q8022')){session.send(`A8022`);
      }
else if(session.message.text.toLowerCase().contains('q8021')){session.send(`A8021`);
      }
else if(session.message.text.toLowerCase().contains('q8020')){session.send(`A8020`);
      }
else if(session.message.text.toLowerCase().contains('q8019')){session.send(`A8019`);
      }
else if(session.message.text.toLowerCase().contains('q8018')){session.send(`A8018`);
      }
else if(session.message.text.toLowerCase().contains('q8017')){session.send(`A8017`);
      }
else if(session.message.text.toLowerCase().contains('q8016')){session.send(`A8016`);
      }
else if(session.message.text.toLowerCase().contains('q8015')){session.send(`A8015`);
      }
else if(session.message.text.toLowerCase().contains('q8014')){session.send(`A8014`);
      }
else if(session.message.text.toLowerCase().contains('q8013')){session.send(`A8013`);
      }
else if(session.message.text.toLowerCase().contains('q8012')){session.send(`A8012`);
      }
else if(session.message.text.toLowerCase().contains('q8011')){session.send(`A8011`);
      }
else if(session.message.text.toLowerCase().contains('q8010')){session.send(`A8010`);
      }
else if(session.message.text.toLowerCase().contains('q8009')){session.send(`A8009`);
      }
else if(session.message.text.toLowerCase().contains('q8008')){session.send(`A8008`);
      }
else if(session.message.text.toLowerCase().contains('q8007')){session.send(`A8007`);
      }
else if(session.message.text.toLowerCase().contains('q8006')){session.send(`A8006`);
      }
else if(session.message.text.toLowerCase().contains('q8005')){session.send(`A8005`);
      }
else if(session.message.text.toLowerCase().contains('q8004')){session.send(`A8004`);
      }
else if(session.message.text.toLowerCase().contains('q8003')){session.send(`A8003`);
      }
else if(session.message.text.toLowerCase().contains('q8002')){session.send(`A8002`);
      }
else if(session.message.text.toLowerCase().contains('q8001')){session.send(`A8001`);
      }
else if(session.message.text.toLowerCase().contains('q8000')){session.send(`A8000`);
      }
else if(session.message.text.toLowerCase().contains('q7999')){session.send(`A7999`);
      }
else if(session.message.text.toLowerCase().contains('q7998')){session.send(`A7998`);
      }
else if(session.message.text.toLowerCase().contains('q7997')){session.send(`A7997`);
      }
else if(session.message.text.toLowerCase().contains('q7996')){session.send(`A7996`);
      }
else if(session.message.text.toLowerCase().contains('q7995')){session.send(`A7995`);
      }
else if(session.message.text.toLowerCase().contains('q7994')){session.send(`A7994`);
      }
else if(session.message.text.toLowerCase().contains('q7993')){session.send(`A7993`);
      }
else if(session.message.text.toLowerCase().contains('q7992')){session.send(`A7992`);
      }
else if(session.message.text.toLowerCase().contains('q7991')){session.send(`A7991`);
      }
else if(session.message.text.toLowerCase().contains('q7990')){session.send(`A7990`);
      }
else if(session.message.text.toLowerCase().contains('q7989')){session.send(`A7989`);
      }
else if(session.message.text.toLowerCase().contains('q7988')){session.send(`A7988`);
      }
else if(session.message.text.toLowerCase().contains('q7987')){session.send(`A7987`);
      }
else if(session.message.text.toLowerCase().contains('q7986')){session.send(`A7986`);
      }
else if(session.message.text.toLowerCase().contains('q7985')){session.send(`A7985`);
      }
else if(session.message.text.toLowerCase().contains('q7984')){session.send(`A7984`);
      }
else if(session.message.text.toLowerCase().contains('q7983')){session.send(`A7983`);
      }
else if(session.message.text.toLowerCase().contains('q7982')){session.send(`A7982`);
      }
else if(session.message.text.toLowerCase().contains('q7981')){session.send(`A7981`);
      }
else if(session.message.text.toLowerCase().contains('q7980')){session.send(`A7980`);
      }
else if(session.message.text.toLowerCase().contains('q7979')){session.send(`A7979`);
      }
else if(session.message.text.toLowerCase().contains('q7978')){session.send(`A7978`);
      }
else if(session.message.text.toLowerCase().contains('q7977')){session.send(`A7977`);
      }
else if(session.message.text.toLowerCase().contains('q7976')){session.send(`A7976`);
      }
else if(session.message.text.toLowerCase().contains('q7975')){session.send(`A7975`);
      }
else if(session.message.text.toLowerCase().contains('q7974')){session.send(`A7974`);
      }
else if(session.message.text.toLowerCase().contains('q7973')){session.send(`A7973`);
      }
else if(session.message.text.toLowerCase().contains('q7972')){session.send(`A7972`);
      }
else if(session.message.text.toLowerCase().contains('q7971')){session.send(`A7971`);
      }
else if(session.message.text.toLowerCase().contains('q7970')){session.send(`A7970`);
      }
else if(session.message.text.toLowerCase().contains('q7969')){session.send(`A7969`);
      }
else if(session.message.text.toLowerCase().contains('q7968')){session.send(`A7968`);
      }
else if(session.message.text.toLowerCase().contains('q7967')){session.send(`A7967`);
      }
else if(session.message.text.toLowerCase().contains('q7966')){session.send(`A7966`);
      }
else if(session.message.text.toLowerCase().contains('q7965')){session.send(`A7965`);
      }
else if(session.message.text.toLowerCase().contains('q7964')){session.send(`A7964`);
      }
else if(session.message.text.toLowerCase().contains('q7963')){session.send(`A7963`);
      }
else if(session.message.text.toLowerCase().contains('q7962')){session.send(`A7962`);
      }
else if(session.message.text.toLowerCase().contains('q7961')){session.send(`A7961`);
      }
else if(session.message.text.toLowerCase().contains('q7960')){session.send(`A7960`);
      }
else if(session.message.text.toLowerCase().contains('q7959')){session.send(`A7959`);
      }
else if(session.message.text.toLowerCase().contains('q7958')){session.send(`A7958`);
      }
else if(session.message.text.toLowerCase().contains('q7957')){session.send(`A7957`);
      }
else if(session.message.text.toLowerCase().contains('q7956')){session.send(`A7956`);
      }
else if(session.message.text.toLowerCase().contains('q7955')){session.send(`A7955`);
      }
else if(session.message.text.toLowerCase().contains('q7954')){session.send(`A7954`);
      }
else if(session.message.text.toLowerCase().contains('q7953')){session.send(`A7953`);
      }
else if(session.message.text.toLowerCase().contains('q7952')){session.send(`A7952`);
      }
else if(session.message.text.toLowerCase().contains('q7951')){session.send(`A7951`);
      }
else if(session.message.text.toLowerCase().contains('q7950')){session.send(`A7950`);
      }
else if(session.message.text.toLowerCase().contains('q7949')){session.send(`A7949`);
      }
else if(session.message.text.toLowerCase().contains('q7948')){session.send(`A7948`);
      }
else if(session.message.text.toLowerCase().contains('q7947')){session.send(`A7947`);
      }
else if(session.message.text.toLowerCase().contains('q7946')){session.send(`A7946`);
      }
else if(session.message.text.toLowerCase().contains('q7945')){session.send(`A7945`);
      }
else if(session.message.text.toLowerCase().contains('q7944')){session.send(`A7944`);
      }
else if(session.message.text.toLowerCase().contains('q7943')){session.send(`A7943`);
      }
else if(session.message.text.toLowerCase().contains('q7942')){session.send(`A7942`);
      }
else if(session.message.text.toLowerCase().contains('q7941')){session.send(`A7941`);
      }
else if(session.message.text.toLowerCase().contains('q7940')){session.send(`A7940`);
      }
else if(session.message.text.toLowerCase().contains('q7939')){session.send(`A7939`);
      }
else if(session.message.text.toLowerCase().contains('q7938')){session.send(`A7938`);
      }
else if(session.message.text.toLowerCase().contains('q7937')){session.send(`A7937`);
      }
else if(session.message.text.toLowerCase().contains('q7936')){session.send(`A7936`);
      }
else if(session.message.text.toLowerCase().contains('q7935')){session.send(`A7935`);
      }
else if(session.message.text.toLowerCase().contains('q7934')){session.send(`A7934`);
      }
else if(session.message.text.toLowerCase().contains('q7933')){session.send(`A7933`);
      }
else if(session.message.text.toLowerCase().contains('q7932')){session.send(`A7932`);
      }
else if(session.message.text.toLowerCase().contains('q7931')){session.send(`A7931`);
      }
else if(session.message.text.toLowerCase().contains('q7930')){session.send(`A7930`);
      }
else if(session.message.text.toLowerCase().contains('q7929')){session.send(`A7929`);
      }
else if(session.message.text.toLowerCase().contains('q7928')){session.send(`A7928`);
      }
else if(session.message.text.toLowerCase().contains('q7927')){session.send(`A7927`);
      }
else if(session.message.text.toLowerCase().contains('q7926')){session.send(`A7926`);
      }
else if(session.message.text.toLowerCase().contains('q7925')){session.send(`A7925`);
      }
else if(session.message.text.toLowerCase().contains('q7924')){session.send(`A7924`);
      }
else if(session.message.text.toLowerCase().contains('q7923')){session.send(`A7923`);
      }
else if(session.message.text.toLowerCase().contains('q7922')){session.send(`A7922`);
      }
else if(session.message.text.toLowerCase().contains('q7921')){session.send(`A7921`);
      }
else if(session.message.text.toLowerCase().contains('q7920')){session.send(`A7920`);
      }
else if(session.message.text.toLowerCase().contains('q7919')){session.send(`A7919`);
      }
else if(session.message.text.toLowerCase().contains('q7918')){session.send(`A7918`);
      }
else if(session.message.text.toLowerCase().contains('q7917')){session.send(`A7917`);
      }
else if(session.message.text.toLowerCase().contains('q7916')){session.send(`A7916`);
      }
else if(session.message.text.toLowerCase().contains('q7915')){session.send(`A7915`);
      }
else if(session.message.text.toLowerCase().contains('q7914')){session.send(`A7914`);
      }
else if(session.message.text.toLowerCase().contains('q7913')){session.send(`A7913`);
      }
else if(session.message.text.toLowerCase().contains('q7912')){session.send(`A7912`);
      }
else if(session.message.text.toLowerCase().contains('q7911')){session.send(`A7911`);
      }
else if(session.message.text.toLowerCase().contains('q7910')){session.send(`A7910`);
      }
else if(session.message.text.toLowerCase().contains('q7909')){session.send(`A7909`);
      }
else if(session.message.text.toLowerCase().contains('q7908')){session.send(`A7908`);
      }
else if(session.message.text.toLowerCase().contains('q7907')){session.send(`A7907`);
      }
else if(session.message.text.toLowerCase().contains('q7906')){session.send(`A7906`);
      }
else if(session.message.text.toLowerCase().contains('q7905')){session.send(`A7905`);
      }
else if(session.message.text.toLowerCase().contains('q7904')){session.send(`A7904`);
      }
else if(session.message.text.toLowerCase().contains('q7903')){session.send(`A7903`);
      }
else if(session.message.text.toLowerCase().contains('q7902')){session.send(`A7902`);
      }
else if(session.message.text.toLowerCase().contains('q7901')){session.send(`A7901`);
      }
else if(session.message.text.toLowerCase().contains('q7900')){session.send(`A7900`);
      }
else if(session.message.text.toLowerCase().contains('q7899')){session.send(`A7899`);
      }
else if(session.message.text.toLowerCase().contains('q7898')){session.send(`A7898`);
      }
else if(session.message.text.toLowerCase().contains('q7897')){session.send(`A7897`);
      }
else if(session.message.text.toLowerCase().contains('q7896')){session.send(`A7896`);
      }
else if(session.message.text.toLowerCase().contains('q7895')){session.send(`A7895`);
      }
else if(session.message.text.toLowerCase().contains('q7894')){session.send(`A7894`);
      }
else if(session.message.text.toLowerCase().contains('q7893')){session.send(`A7893`);
      }
else if(session.message.text.toLowerCase().contains('q7892')){session.send(`A7892`);
      }
else if(session.message.text.toLowerCase().contains('q7891')){session.send(`A7891`);
      }
else if(session.message.text.toLowerCase().contains('q7890')){session.send(`A7890`);
      }
else if(session.message.text.toLowerCase().contains('q7889')){session.send(`A7889`);
      }
else if(session.message.text.toLowerCase().contains('q7888')){session.send(`A7888`);
      }
else if(session.message.text.toLowerCase().contains('q7887')){session.send(`A7887`);
      }
else if(session.message.text.toLowerCase().contains('q7886')){session.send(`A7886`);
      }
else if(session.message.text.toLowerCase().contains('q7885')){session.send(`A7885`);
      }
else if(session.message.text.toLowerCase().contains('q7884')){session.send(`A7884`);
      }
else if(session.message.text.toLowerCase().contains('q7883')){session.send(`A7883`);
      }
else if(session.message.text.toLowerCase().contains('q7882')){session.send(`A7882`);
      }
else if(session.message.text.toLowerCase().contains('q7881')){session.send(`A7881`);
      }
else if(session.message.text.toLowerCase().contains('q7880')){session.send(`A7880`);
      }
else if(session.message.text.toLowerCase().contains('q7879')){session.send(`A7879`);
      }
else if(session.message.text.toLowerCase().contains('q7878')){session.send(`A7878`);
      }
else if(session.message.text.toLowerCase().contains('q7877')){session.send(`A7877`);
      }
else if(session.message.text.toLowerCase().contains('q7876')){session.send(`A7876`);
      }
else if(session.message.text.toLowerCase().contains('q7875')){session.send(`A7875`);
      }
else if(session.message.text.toLowerCase().contains('q7874')){session.send(`A7874`);
      }
else if(session.message.text.toLowerCase().contains('q7873')){session.send(`A7873`);
      }
else if(session.message.text.toLowerCase().contains('q7872')){session.send(`A7872`);
      }
else if(session.message.text.toLowerCase().contains('q7871')){session.send(`A7871`);
      }
else if(session.message.text.toLowerCase().contains('q7870')){session.send(`A7870`);
      }
else if(session.message.text.toLowerCase().contains('q7869')){session.send(`A7869`);
      }
else if(session.message.text.toLowerCase().contains('q7868')){session.send(`A7868`);
      }
else if(session.message.text.toLowerCase().contains('q7867')){session.send(`A7867`);
      }
else if(session.message.text.toLowerCase().contains('q7866')){session.send(`A7866`);
      }
else if(session.message.text.toLowerCase().contains('q7865')){session.send(`A7865`);
      }
else if(session.message.text.toLowerCase().contains('q7864')){session.send(`A7864`);
      }
else if(session.message.text.toLowerCase().contains('q7863')){session.send(`A7863`);
      }
else if(session.message.text.toLowerCase().contains('q7862')){session.send(`A7862`);
      }
else if(session.message.text.toLowerCase().contains('q7861')){session.send(`A7861`);
      }
else if(session.message.text.toLowerCase().contains('q7860')){session.send(`A7860`);
      }
else if(session.message.text.toLowerCase().contains('q7859')){session.send(`A7859`);
      }
else if(session.message.text.toLowerCase().contains('q7858')){session.send(`A7858`);
      }
else if(session.message.text.toLowerCase().contains('q7857')){session.send(`A7857`);
      }
else if(session.message.text.toLowerCase().contains('q7856')){session.send(`A7856`);
      }
else if(session.message.text.toLowerCase().contains('q7855')){session.send(`A7855`);
      }
else if(session.message.text.toLowerCase().contains('q7854')){session.send(`A7854`);
      }
else if(session.message.text.toLowerCase().contains('q7853')){session.send(`A7853`);
      }
else if(session.message.text.toLowerCase().contains('q7852')){session.send(`A7852`);
      }
else if(session.message.text.toLowerCase().contains('q7851')){session.send(`A7851`);
      }
else if(session.message.text.toLowerCase().contains('q7850')){session.send(`A7850`);
      }
else if(session.message.text.toLowerCase().contains('q7849')){session.send(`A7849`);
      }
else if(session.message.text.toLowerCase().contains('q7848')){session.send(`A7848`);
      }
else if(session.message.text.toLowerCase().contains('q7847')){session.send(`A7847`);
      }
else if(session.message.text.toLowerCase().contains('q7846')){session.send(`A7846`);
      }
else if(session.message.text.toLowerCase().contains('q7845')){session.send(`A7845`);
      }
else if(session.message.text.toLowerCase().contains('q7844')){session.send(`A7844`);
      }
else if(session.message.text.toLowerCase().contains('q7843')){session.send(`A7843`);
      }
else if(session.message.text.toLowerCase().contains('q7842')){session.send(`A7842`);
      }
else if(session.message.text.toLowerCase().contains('q7841')){session.send(`A7841`);
      }
else if(session.message.text.toLowerCase().contains('q7840')){session.send(`A7840`);
      }
else if(session.message.text.toLowerCase().contains('q7839')){session.send(`A7839`);
      }
else if(session.message.text.toLowerCase().contains('q7838')){session.send(`A7838`);
      }
else if(session.message.text.toLowerCase().contains('q7837')){session.send(`A7837`);
      }
else if(session.message.text.toLowerCase().contains('q7836')){session.send(`A7836`);
      }
else if(session.message.text.toLowerCase().contains('q7835')){session.send(`A7835`);
      }
else if(session.message.text.toLowerCase().contains('q7834')){session.send(`A7834`);
      }
else if(session.message.text.toLowerCase().contains('q7833')){session.send(`A7833`);
      }
else if(session.message.text.toLowerCase().contains('q7832')){session.send(`A7832`);
      }
else if(session.message.text.toLowerCase().contains('q7831')){session.send(`A7831`);
      }
else if(session.message.text.toLowerCase().contains('q7830')){session.send(`A7830`);
      }
else if(session.message.text.toLowerCase().contains('q7829')){session.send(`A7829`);
      }
else if(session.message.text.toLowerCase().contains('q7828')){session.send(`A7828`);
      }
else if(session.message.text.toLowerCase().contains('q7827')){session.send(`A7827`);
      }
else if(session.message.text.toLowerCase().contains('q7826')){session.send(`A7826`);
      }
else if(session.message.text.toLowerCase().contains('q7825')){session.send(`A7825`);
      }
else if(session.message.text.toLowerCase().contains('q7824')){session.send(`A7824`);
      }
else if(session.message.text.toLowerCase().contains('q7823')){session.send(`A7823`);
      }
else if(session.message.text.toLowerCase().contains('q7822')){session.send(`A7822`);
      }
else if(session.message.text.toLowerCase().contains('q7821')){session.send(`A7821`);
      }
else if(session.message.text.toLowerCase().contains('q7820')){session.send(`A7820`);
      }
else if(session.message.text.toLowerCase().contains('q7819')){session.send(`A7819`);
      }
else if(session.message.text.toLowerCase().contains('q7818')){session.send(`A7818`);
      }
else if(session.message.text.toLowerCase().contains('q7817')){session.send(`A7817`);
      }
else if(session.message.text.toLowerCase().contains('q7816')){session.send(`A7816`);
      }
else if(session.message.text.toLowerCase().contains('q7815')){session.send(`A7815`);
      }
else if(session.message.text.toLowerCase().contains('q7814')){session.send(`A7814`);
      }
else if(session.message.text.toLowerCase().contains('q7813')){session.send(`A7813`);
      }
else if(session.message.text.toLowerCase().contains('q7812')){session.send(`A7812`);
      }
else if(session.message.text.toLowerCase().contains('q7811')){session.send(`A7811`);
      }
else if(session.message.text.toLowerCase().contains('q7810')){session.send(`A7810`);
      }
else if(session.message.text.toLowerCase().contains('q7809')){session.send(`A7809`);
      }
else if(session.message.text.toLowerCase().contains('q7808')){session.send(`A7808`);
      }
else if(session.message.text.toLowerCase().contains('q7807')){session.send(`A7807`);
      }
else if(session.message.text.toLowerCase().contains('q7806')){session.send(`A7806`);
      }
else if(session.message.text.toLowerCase().contains('q7805')){session.send(`A7805`);
      }
else if(session.message.text.toLowerCase().contains('q7804')){session.send(`A7804`);
      }
else if(session.message.text.toLowerCase().contains('q7803')){session.send(`A7803`);
      }
else if(session.message.text.toLowerCase().contains('q7802')){session.send(`A7802`);
      }
else if(session.message.text.toLowerCase().contains('q7801')){session.send(`A7801`);
      }
else if(session.message.text.toLowerCase().contains('q7800')){session.send(`A7800`);
      }
else if(session.message.text.toLowerCase().contains('q7799')){session.send(`A7799`);
      }
else if(session.message.text.toLowerCase().contains('q7798')){session.send(`A7798`);
      }
else if(session.message.text.toLowerCase().contains('q7797')){session.send(`A7797`);
      }
else if(session.message.text.toLowerCase().contains('q7796')){session.send(`A7796`);
      }
else if(session.message.text.toLowerCase().contains('q7795')){session.send(`A7795`);
      }
else if(session.message.text.toLowerCase().contains('q7794')){session.send(`A7794`);
      }
else if(session.message.text.toLowerCase().contains('q7793')){session.send(`A7793`);
      }
else if(session.message.text.toLowerCase().contains('q7792')){session.send(`A7792`);
      }
else if(session.message.text.toLowerCase().contains('q7791')){session.send(`A7791`);
      }
else if(session.message.text.toLowerCase().contains('q7790')){session.send(`A7790`);
      }
else if(session.message.text.toLowerCase().contains('q7789')){session.send(`A7789`);
      }
else if(session.message.text.toLowerCase().contains('q7788')){session.send(`A7788`);
      }
else if(session.message.text.toLowerCase().contains('q7787')){session.send(`A7787`);
      }
else if(session.message.text.toLowerCase().contains('q7786')){session.send(`A7786`);
      }
else if(session.message.text.toLowerCase().contains('q7785')){session.send(`A7785`);
      }
else if(session.message.text.toLowerCase().contains('q7784')){session.send(`A7784`);
      }
else if(session.message.text.toLowerCase().contains('q7783')){session.send(`A7783`);
      }
else if(session.message.text.toLowerCase().contains('q7782')){session.send(`A7782`);
      }
else if(session.message.text.toLowerCase().contains('q7781')){session.send(`A7781`);
      }
else if(session.message.text.toLowerCase().contains('q7780')){session.send(`A7780`);
      }
else if(session.message.text.toLowerCase().contains('q7779')){session.send(`A7779`);
      }
else if(session.message.text.toLowerCase().contains('q7778')){session.send(`A7778`);
      }
else if(session.message.text.toLowerCase().contains('q7777')){session.send(`A7777`);
      }
else if(session.message.text.toLowerCase().contains('q7776')){session.send(`A7776`);
      }
else if(session.message.text.toLowerCase().contains('q7775')){session.send(`A7775`);
      }
else if(session.message.text.toLowerCase().contains('q7774')){session.send(`A7774`);
      }
else if(session.message.text.toLowerCase().contains('q7773')){session.send(`A7773`);
      }
else if(session.message.text.toLowerCase().contains('q7772')){session.send(`A7772`);
      }
else if(session.message.text.toLowerCase().contains('q7771')){session.send(`A7771`);
      }
else if(session.message.text.toLowerCase().contains('q7770')){session.send(`A7770`);
      }
else if(session.message.text.toLowerCase().contains('q7769')){session.send(`A7769`);
      }
else if(session.message.text.toLowerCase().contains('q7768')){session.send(`A7768`);
      }
else if(session.message.text.toLowerCase().contains('q7767')){session.send(`A7767`);
      }
else if(session.message.text.toLowerCase().contains('q7766')){session.send(`A7766`);
      }
else if(session.message.text.toLowerCase().contains('q7765')){session.send(`A7765`);
      }
else if(session.message.text.toLowerCase().contains('q7764')){session.send(`A7764`);
      }
else if(session.message.text.toLowerCase().contains('q7763')){session.send(`A7763`);
      }
else if(session.message.text.toLowerCase().contains('q7762')){session.send(`A7762`);
      }
else if(session.message.text.toLowerCase().contains('q7761')){session.send(`A7761`);
      }
else if(session.message.text.toLowerCase().contains('q7760')){session.send(`A7760`);
      }
else if(session.message.text.toLowerCase().contains('q7759')){session.send(`A7759`);
      }
else if(session.message.text.toLowerCase().contains('q7758')){session.send(`A7758`);
      }
else if(session.message.text.toLowerCase().contains('q7757')){session.send(`A7757`);
      }
else if(session.message.text.toLowerCase().contains('q7756')){session.send(`A7756`);
      }
else if(session.message.text.toLowerCase().contains('q7755')){session.send(`A7755`);
      }
else if(session.message.text.toLowerCase().contains('q7754')){session.send(`A7754`);
      }
else if(session.message.text.toLowerCase().contains('q7753')){session.send(`A7753`);
      }
else if(session.message.text.toLowerCase().contains('q7752')){session.send(`A7752`);
      }
else if(session.message.text.toLowerCase().contains('q7751')){session.send(`A7751`);
      }
else if(session.message.text.toLowerCase().contains('q7750')){session.send(`A7750`);
      }
else if(session.message.text.toLowerCase().contains('q7749')){session.send(`A7749`);
      }
else if(session.message.text.toLowerCase().contains('q7748')){session.send(`A7748`);
      }
else if(session.message.text.toLowerCase().contains('q7747')){session.send(`A7747`);
      }
else if(session.message.text.toLowerCase().contains('q7746')){session.send(`A7746`);
      }
else if(session.message.text.toLowerCase().contains('q7745')){session.send(`A7745`);
      }
else if(session.message.text.toLowerCase().contains('q7744')){session.send(`A7744`);
      }
else if(session.message.text.toLowerCase().contains('q7743')){session.send(`A7743`);
      }
else if(session.message.text.toLowerCase().contains('q7742')){session.send(`A7742`);
      }
else if(session.message.text.toLowerCase().contains('q7741')){session.send(`A7741`);
      }
else if(session.message.text.toLowerCase().contains('q7740')){session.send(`A7740`);
      }
else if(session.message.text.toLowerCase().contains('q7739')){session.send(`A7739`);
      }
else if(session.message.text.toLowerCase().contains('q7738')){session.send(`A7738`);
      }
else if(session.message.text.toLowerCase().contains('q7737')){session.send(`A7737`);
      }
else if(session.message.text.toLowerCase().contains('q7736')){session.send(`A7736`);
      }
else if(session.message.text.toLowerCase().contains('q7735')){session.send(`A7735`);
      }
else if(session.message.text.toLowerCase().contains('q7734')){session.send(`A7734`);
      }
else if(session.message.text.toLowerCase().contains('q7733')){session.send(`A7733`);
      }
else if(session.message.text.toLowerCase().contains('q7732')){session.send(`A7732`);
      }
else if(session.message.text.toLowerCase().contains('q7731')){session.send(`A7731`);
      }
else if(session.message.text.toLowerCase().contains('q7730')){session.send(`A7730`);
      }
else if(session.message.text.toLowerCase().contains('q7729')){session.send(`A7729`);
      }
else if(session.message.text.toLowerCase().contains('q7728')){session.send(`A7728`);
      }
else if(session.message.text.toLowerCase().contains('q7727')){session.send(`A7727`);
      }
else if(session.message.text.toLowerCase().contains('q7726')){session.send(`A7726`);
      }
else if(session.message.text.toLowerCase().contains('q7725')){session.send(`A7725`);
      }
else if(session.message.text.toLowerCase().contains('q7724')){session.send(`A7724`);
      }
else if(session.message.text.toLowerCase().contains('q7723')){session.send(`A7723`);
      }
else if(session.message.text.toLowerCase().contains('q7722')){session.send(`A7722`);
      }
else if(session.message.text.toLowerCase().contains('q7721')){session.send(`A7721`);
      }
else if(session.message.text.toLowerCase().contains('q7720')){session.send(`A7720`);
      }
else if(session.message.text.toLowerCase().contains('q7719')){session.send(`A7719`);
      }
else if(session.message.text.toLowerCase().contains('q7718')){session.send(`A7718`);
      }
else if(session.message.text.toLowerCase().contains('q7717')){session.send(`A7717`);
      }
else if(session.message.text.toLowerCase().contains('q7716')){session.send(`A7716`);
      }
else if(session.message.text.toLowerCase().contains('q7715')){session.send(`A7715`);
      }
else if(session.message.text.toLowerCase().contains('q7714')){session.send(`A7714`);
      }
else if(session.message.text.toLowerCase().contains('q7713')){session.send(`A7713`);
      }
else if(session.message.text.toLowerCase().contains('q7712')){session.send(`A7712`);
      }
else if(session.message.text.toLowerCase().contains('q7711')){session.send(`A7711`);
      }
else if(session.message.text.toLowerCase().contains('q7710')){session.send(`A7710`);
      }
else if(session.message.text.toLowerCase().contains('q7709')){session.send(`A7709`);
      }
else if(session.message.text.toLowerCase().contains('q7708')){session.send(`A7708`);
      }
else if(session.message.text.toLowerCase().contains('q7707')){session.send(`A7707`);
      }
else if(session.message.text.toLowerCase().contains('q7706')){session.send(`A7706`);
      }
else if(session.message.text.toLowerCase().contains('q7705')){session.send(`A7705`);
      }
else if(session.message.text.toLowerCase().contains('q7704')){session.send(`A7704`);
      }
else if(session.message.text.toLowerCase().contains('q7703')){session.send(`A7703`);
      }
else if(session.message.text.toLowerCase().contains('q7702')){session.send(`A7702`);
      }
else if(session.message.text.toLowerCase().contains('q7701')){session.send(`A7701`);
      }
else if(session.message.text.toLowerCase().contains('q7700')){session.send(`A7700`);
      }
else if(session.message.text.toLowerCase().contains('q7699')){session.send(`A7699`);
      }
else if(session.message.text.toLowerCase().contains('q7698')){session.send(`A7698`);
      }
else if(session.message.text.toLowerCase().contains('q7697')){session.send(`A7697`);
      }
else if(session.message.text.toLowerCase().contains('q7696')){session.send(`A7696`);
      }
else if(session.message.text.toLowerCase().contains('q7695')){session.send(`A7695`);
      }
else if(session.message.text.toLowerCase().contains('q7694')){session.send(`A7694`);
      }
else if(session.message.text.toLowerCase().contains('q7693')){session.send(`A7693`);
      }
else if(session.message.text.toLowerCase().contains('q7692')){session.send(`A7692`);
      }
else if(session.message.text.toLowerCase().contains('q7691')){session.send(`A7691`);
      }
else if(session.message.text.toLowerCase().contains('q7690')){session.send(`A7690`);
      }
else if(session.message.text.toLowerCase().contains('q7689')){session.send(`A7689`);
      }
else if(session.message.text.toLowerCase().contains('q7688')){session.send(`A7688`);
      }
else if(session.message.text.toLowerCase().contains('q7687')){session.send(`A7687`);
      }
else if(session.message.text.toLowerCase().contains('q7686')){session.send(`A7686`);
      }
else if(session.message.text.toLowerCase().contains('q7685')){session.send(`A7685`);
      }
else if(session.message.text.toLowerCase().contains('q7684')){session.send(`A7684`);
      }
else if(session.message.text.toLowerCase().contains('q7683')){session.send(`A7683`);
      }
else if(session.message.text.toLowerCase().contains('q7682')){session.send(`A7682`);
      }
else if(session.message.text.toLowerCase().contains('q7681')){session.send(`A7681`);
      }
else if(session.message.text.toLowerCase().contains('q7680')){session.send(`A7680`);
      }
else if(session.message.text.toLowerCase().contains('q7679')){session.send(`A7679`);
      }
else if(session.message.text.toLowerCase().contains('q7678')){session.send(`A7678`);
      }
else if(session.message.text.toLowerCase().contains('q7677')){session.send(`A7677`);
      }
else if(session.message.text.toLowerCase().contains('q7676')){session.send(`A7676`);
      }
else if(session.message.text.toLowerCase().contains('q7675')){session.send(`A7675`);
      }
else if(session.message.text.toLowerCase().contains('q7674')){session.send(`A7674`);
      }
else if(session.message.text.toLowerCase().contains('q7673')){session.send(`A7673`);
      }
else if(session.message.text.toLowerCase().contains('q7672')){session.send(`A7672`);
      }
else if(session.message.text.toLowerCase().contains('q7671')){session.send(`A7671`);
      }
else if(session.message.text.toLowerCase().contains('q7670')){session.send(`A7670`);
      }
else if(session.message.text.toLowerCase().contains('q7669')){session.send(`A7669`);
      }
else if(session.message.text.toLowerCase().contains('q7668')){session.send(`A7668`);
      }
else if(session.message.text.toLowerCase().contains('q7667')){session.send(`A7667`);
      }
else if(session.message.text.toLowerCase().contains('q7666')){session.send(`A7666`);
      }
else if(session.message.text.toLowerCase().contains('q7665')){session.send(`A7665`);
      }
else if(session.message.text.toLowerCase().contains('q7664')){session.send(`A7664`);
      }
else if(session.message.text.toLowerCase().contains('q7663')){session.send(`A7663`);
      }
else if(session.message.text.toLowerCase().contains('q7662')){session.send(`A7662`);
      }
else if(session.message.text.toLowerCase().contains('q7661')){session.send(`A7661`);
      }
else if(session.message.text.toLowerCase().contains('q7660')){session.send(`A7660`);
      }
else if(session.message.text.toLowerCase().contains('q7659')){session.send(`A7659`);
      }
else if(session.message.text.toLowerCase().contains('q7658')){session.send(`A7658`);
      }
else if(session.message.text.toLowerCase().contains('q7657')){session.send(`A7657`);
      }
else if(session.message.text.toLowerCase().contains('q7656')){session.send(`A7656`);
      }
else if(session.message.text.toLowerCase().contains('q7655')){session.send(`A7655`);
      }
else if(session.message.text.toLowerCase().contains('q7654')){session.send(`A7654`);
      }
else if(session.message.text.toLowerCase().contains('q7653')){session.send(`A7653`);
      }
else if(session.message.text.toLowerCase().contains('q7652')){session.send(`A7652`);
      }
else if(session.message.text.toLowerCase().contains('q7651')){session.send(`A7651`);
      }
else if(session.message.text.toLowerCase().contains('q7650')){session.send(`A7650`);
      }
else if(session.message.text.toLowerCase().contains('q7649')){session.send(`A7649`);
      }
else if(session.message.text.toLowerCase().contains('q7648')){session.send(`A7648`);
      }
else if(session.message.text.toLowerCase().contains('q7647')){session.send(`A7647`);
      }
else if(session.message.text.toLowerCase().contains('q7646')){session.send(`A7646`);
      }
else if(session.message.text.toLowerCase().contains('q7645')){session.send(`A7645`);
      }
else if(session.message.text.toLowerCase().contains('q7644')){session.send(`A7644`);
      }
else if(session.message.text.toLowerCase().contains('q7643')){session.send(`A7643`);
      }
else if(session.message.text.toLowerCase().contains('q7642')){session.send(`A7642`);
      }
else if(session.message.text.toLowerCase().contains('q7641')){session.send(`A7641`);
      }
else if(session.message.text.toLowerCase().contains('q7640')){session.send(`A7640`);
      }
else if(session.message.text.toLowerCase().contains('q7639')){session.send(`A7639`);
      }
else if(session.message.text.toLowerCase().contains('q7638')){session.send(`A7638`);
      }
else if(session.message.text.toLowerCase().contains('q7637')){session.send(`A7637`);
      }
else if(session.message.text.toLowerCase().contains('q7636')){session.send(`A7636`);
      }
else if(session.message.text.toLowerCase().contains('q7635')){session.send(`A7635`);
      }
else if(session.message.text.toLowerCase().contains('q7634')){session.send(`A7634`);
      }
else if(session.message.text.toLowerCase().contains('q7633')){session.send(`A7633`);
      }
else if(session.message.text.toLowerCase().contains('q7632')){session.send(`A7632`);
      }
else if(session.message.text.toLowerCase().contains('q7631')){session.send(`A7631`);
      }
else if(session.message.text.toLowerCase().contains('q7630')){session.send(`A7630`);
      }
else if(session.message.text.toLowerCase().contains('q7629')){session.send(`A7629`);
      }
else if(session.message.text.toLowerCase().contains('q7628')){session.send(`A7628`);
      }
else if(session.message.text.toLowerCase().contains('q7627')){session.send(`A7627`);
      }
else if(session.message.text.toLowerCase().contains('q7626')){session.send(`A7626`);
      }
else if(session.message.text.toLowerCase().contains('q7625')){session.send(`A7625`);
      }
else if(session.message.text.toLowerCase().contains('q7624')){session.send(`A7624`);
      }
else if(session.message.text.toLowerCase().contains('q7623')){session.send(`A7623`);
      }
else if(session.message.text.toLowerCase().contains('q7622')){session.send(`A7622`);
      }
else if(session.message.text.toLowerCase().contains('q7621')){session.send(`A7621`);
      }
else if(session.message.text.toLowerCase().contains('q7620')){session.send(`A7620`);
      }
else if(session.message.text.toLowerCase().contains('q7619')){session.send(`A7619`);
      }
else if(session.message.text.toLowerCase().contains('q7618')){session.send(`A7618`);
      }
else if(session.message.text.toLowerCase().contains('q7617')){session.send(`A7617`);
      }
else if(session.message.text.toLowerCase().contains('q7616')){session.send(`A7616`);
      }
else if(session.message.text.toLowerCase().contains('q7615')){session.send(`A7615`);
      }
else if(session.message.text.toLowerCase().contains('q7614')){session.send(`A7614`);
      }
else if(session.message.text.toLowerCase().contains('q7613')){session.send(`A7613`);
      }
else if(session.message.text.toLowerCase().contains('q7612')){session.send(`A7612`);
      }
else if(session.message.text.toLowerCase().contains('q7611')){session.send(`A7611`);
      }
else if(session.message.text.toLowerCase().contains('q7610')){session.send(`A7610`);
      }
else if(session.message.text.toLowerCase().contains('q7609')){session.send(`A7609`);
      }
else if(session.message.text.toLowerCase().contains('q7608')){session.send(`A7608`);
      }
else if(session.message.text.toLowerCase().contains('q7607')){session.send(`A7607`);
      }
else if(session.message.text.toLowerCase().contains('q7606')){session.send(`A7606`);
      }
else if(session.message.text.toLowerCase().contains('q7605')){session.send(`A7605`);
      }
else if(session.message.text.toLowerCase().contains('q7604')){session.send(`A7604`);
      }
else if(session.message.text.toLowerCase().contains('q7603')){session.send(`A7603`);
      }
else if(session.message.text.toLowerCase().contains('q7602')){session.send(`A7602`);
      }
else if(session.message.text.toLowerCase().contains('q7601')){session.send(`A7601`);
      }
else if(session.message.text.toLowerCase().contains('q7600')){session.send(`A7600`);
      }
else if(session.message.text.toLowerCase().contains('q7599')){session.send(`A7599`);
      }
else if(session.message.text.toLowerCase().contains('q7598')){session.send(`A7598`);
      }
else if(session.message.text.toLowerCase().contains('q7597')){session.send(`A7597`);
      }
else if(session.message.text.toLowerCase().contains('q7596')){session.send(`A7596`);
      }
else if(session.message.text.toLowerCase().contains('q7595')){session.send(`A7595`);
      }
else if(session.message.text.toLowerCase().contains('q7594')){session.send(`A7594`);
      }
else if(session.message.text.toLowerCase().contains('q7593')){session.send(`A7593`);
      }
else if(session.message.text.toLowerCase().contains('q7592')){session.send(`A7592`);
      }
else if(session.message.text.toLowerCase().contains('q7591')){session.send(`A7591`);
      }
else if(session.message.text.toLowerCase().contains('q7590')){session.send(`A7590`);
      }
else if(session.message.text.toLowerCase().contains('q7589')){session.send(`A7589`);
      }
else if(session.message.text.toLowerCase().contains('q7588')){session.send(`A7588`);
      }
else if(session.message.text.toLowerCase().contains('q7587')){session.send(`A7587`);
      }
else if(session.message.text.toLowerCase().contains('q7586')){session.send(`A7586`);
      }
else if(session.message.text.toLowerCase().contains('q7585')){session.send(`A7585`);
      }
else if(session.message.text.toLowerCase().contains('q7584')){session.send(`A7584`);
      }
else if(session.message.text.toLowerCase().contains('q7583')){session.send(`A7583`);
      }
else if(session.message.text.toLowerCase().contains('q7582')){session.send(`A7582`);
      }
else if(session.message.text.toLowerCase().contains('q7581')){session.send(`A7581`);
      }
else if(session.message.text.toLowerCase().contains('q7580')){session.send(`A7580`);
      }
else if(session.message.text.toLowerCase().contains('q7579')){session.send(`A7579`);
      }
else if(session.message.text.toLowerCase().contains('q7578')){session.send(`A7578`);
      }
else if(session.message.text.toLowerCase().contains('q7577')){session.send(`A7577`);
      }
else if(session.message.text.toLowerCase().contains('q7576')){session.send(`A7576`);
      }
else if(session.message.text.toLowerCase().contains('q7575')){session.send(`A7575`);
      }
else if(session.message.text.toLowerCase().contains('q7574')){session.send(`A7574`);
      }
else if(session.message.text.toLowerCase().contains('q7573')){session.send(`A7573`);
      }
else if(session.message.text.toLowerCase().contains('q7572')){session.send(`A7572`);
      }
else if(session.message.text.toLowerCase().contains('q7571')){session.send(`A7571`);
      }
else if(session.message.text.toLowerCase().contains('q7570')){session.send(`A7570`);
      }
else if(session.message.text.toLowerCase().contains('q7569')){session.send(`A7569`);
      }
else if(session.message.text.toLowerCase().contains('q7568')){session.send(`A7568`);
      }
else if(session.message.text.toLowerCase().contains('q7567')){session.send(`A7567`);
      }
else if(session.message.text.toLowerCase().contains('q7566')){session.send(`A7566`);
      }
else if(session.message.text.toLowerCase().contains('q7565')){session.send(`A7565`);
      }
else if(session.message.text.toLowerCase().contains('q7564')){session.send(`A7564`);
      }
else if(session.message.text.toLowerCase().contains('q7563')){session.send(`A7563`);
      }
else if(session.message.text.toLowerCase().contains('q7562')){session.send(`A7562`);
      }
else if(session.message.text.toLowerCase().contains('q7561')){session.send(`A7561`);
      }
else if(session.message.text.toLowerCase().contains('q7560')){session.send(`A7560`);
      }
else if(session.message.text.toLowerCase().contains('q7559')){session.send(`A7559`);
      }
else if(session.message.text.toLowerCase().contains('q7558')){session.send(`A7558`);
      }
else if(session.message.text.toLowerCase().contains('q7557')){session.send(`A7557`);
      }
else if(session.message.text.toLowerCase().contains('q7556')){session.send(`A7556`);
      }
else if(session.message.text.toLowerCase().contains('q7555')){session.send(`A7555`);
      }
else if(session.message.text.toLowerCase().contains('q7554')){session.send(`A7554`);
      }
else if(session.message.text.toLowerCase().contains('q7553')){session.send(`A7553`);
      }
else if(session.message.text.toLowerCase().contains('q7552')){session.send(`A7552`);
      }
else if(session.message.text.toLowerCase().contains('q7551')){session.send(`A7551`);
      }
else if(session.message.text.toLowerCase().contains('q7550')){session.send(`A7550`);
      }
else if(session.message.text.toLowerCase().contains('q7549')){session.send(`A7549`);
      }
else if(session.message.text.toLowerCase().contains('q7548')){session.send(`A7548`);
      }
else if(session.message.text.toLowerCase().contains('q7547')){session.send(`A7547`);
      }
else if(session.message.text.toLowerCase().contains('q7546')){session.send(`A7546`);
      }
else if(session.message.text.toLowerCase().contains('q7545')){session.send(`A7545`);
      }
else if(session.message.text.toLowerCase().contains('q7544')){session.send(`A7544`);
      }
else if(session.message.text.toLowerCase().contains('q7543')){session.send(`A7543`);
      }
else if(session.message.text.toLowerCase().contains('q7542')){session.send(`A7542`);
      }
else if(session.message.text.toLowerCase().contains('q7541')){session.send(`A7541`);
      }
else if(session.message.text.toLowerCase().contains('q7540')){session.send(`A7540`);
      }
else if(session.message.text.toLowerCase().contains('q7539')){session.send(`A7539`);
      }
else if(session.message.text.toLowerCase().contains('q7538')){session.send(`A7538`);
      }
else if(session.message.text.toLowerCase().contains('q7537')){session.send(`A7537`);
      }
else if(session.message.text.toLowerCase().contains('q7536')){session.send(`A7536`);
      }
else if(session.message.text.toLowerCase().contains('q7535')){session.send(`A7535`);
      }
else if(session.message.text.toLowerCase().contains('q7534')){session.send(`A7534`);
      }
else if(session.message.text.toLowerCase().contains('q7533')){session.send(`A7533`);
      }
else if(session.message.text.toLowerCase().contains('q7532')){session.send(`A7532`);
      }
else if(session.message.text.toLowerCase().contains('q7531')){session.send(`A7531`);
      }
else if(session.message.text.toLowerCase().contains('q7530')){session.send(`A7530`);
      }
else if(session.message.text.toLowerCase().contains('q7529')){session.send(`A7529`);
      }
else if(session.message.text.toLowerCase().contains('q7528')){session.send(`A7528`);
      }
else if(session.message.text.toLowerCase().contains('q7527')){session.send(`A7527`);
      }
else if(session.message.text.toLowerCase().contains('q7526')){session.send(`A7526`);
      }
else if(session.message.text.toLowerCase().contains('q7525')){session.send(`A7525`);
      }
else if(session.message.text.toLowerCase().contains('q7524')){session.send(`A7524`);
      }
else if(session.message.text.toLowerCase().contains('q7523')){session.send(`A7523`);
      }
else if(session.message.text.toLowerCase().contains('q7522')){session.send(`A7522`);
      }
else if(session.message.text.toLowerCase().contains('q7521')){session.send(`A7521`);
      }
else if(session.message.text.toLowerCase().contains('q7520')){session.send(`A7520`);
      }
else if(session.message.text.toLowerCase().contains('q7519')){session.send(`A7519`);
      }
else if(session.message.text.toLowerCase().contains('q7518')){session.send(`A7518`);
      }
else if(session.message.text.toLowerCase().contains('q7517')){session.send(`A7517`);
      }
else if(session.message.text.toLowerCase().contains('q7516')){session.send(`A7516`);
      }
else if(session.message.text.toLowerCase().contains('q7515')){session.send(`A7515`);
      }
else if(session.message.text.toLowerCase().contains('q7514')){session.send(`A7514`);
      }
else if(session.message.text.toLowerCase().contains('q7513')){session.send(`A7513`);
      }
else if(session.message.text.toLowerCase().contains('q7512')){session.send(`A7512`);
      }
else if(session.message.text.toLowerCase().contains('q7511')){session.send(`A7511`);
      }
else if(session.message.text.toLowerCase().contains('q7510')){session.send(`A7510`);
      }
else if(session.message.text.toLowerCase().contains('q7509')){session.send(`A7509`);
      }
else if(session.message.text.toLowerCase().contains('q7508')){session.send(`A7508`);
      }
else if(session.message.text.toLowerCase().contains('q7507')){session.send(`A7507`);
      }
else if(session.message.text.toLowerCase().contains('q7506')){session.send(`A7506`);
      }
else if(session.message.text.toLowerCase().contains('q7505')){session.send(`A7505`);
      }
else if(session.message.text.toLowerCase().contains('q7504')){session.send(`A7504`);
      }
else if(session.message.text.toLowerCase().contains('q7503')){session.send(`A7503`);
      }
else if(session.message.text.toLowerCase().contains('q7502')){session.send(`A7502`);
      }
else if(session.message.text.toLowerCase().contains('q7501')){session.send(`A7501`);
      }
else if(session.message.text.toLowerCase().contains('q7500')){session.send(`A7500`);
      }
else if(session.message.text.toLowerCase().contains('q7499')){session.send(`A7499`);
      }
else if(session.message.text.toLowerCase().contains('q7498')){session.send(`A7498`);
      }
else if(session.message.text.toLowerCase().contains('q7497')){session.send(`A7497`);
      }
else if(session.message.text.toLowerCase().contains('q7496')){session.send(`A7496`);
      }
else if(session.message.text.toLowerCase().contains('q7495')){session.send(`A7495`);
      }
else if(session.message.text.toLowerCase().contains('q7494')){session.send(`A7494`);
      }
else if(session.message.text.toLowerCase().contains('q7493')){session.send(`A7493`);
      }
else if(session.message.text.toLowerCase().contains('q7492')){session.send(`A7492`);
      }
else if(session.message.text.toLowerCase().contains('q7491')){session.send(`A7491`);
      }
else if(session.message.text.toLowerCase().contains('q7490')){session.send(`A7490`);
      }
else if(session.message.text.toLowerCase().contains('q7489')){session.send(`A7489`);
      }
else if(session.message.text.toLowerCase().contains('q7488')){session.send(`A7488`);
      }
else if(session.message.text.toLowerCase().contains('q7487')){session.send(`A7487`);
      }
else if(session.message.text.toLowerCase().contains('q7486')){session.send(`A7486`);
      }
else if(session.message.text.toLowerCase().contains('q7485')){session.send(`A7485`);
      }
else if(session.message.text.toLowerCase().contains('q7484')){session.send(`A7484`);
      }
else if(session.message.text.toLowerCase().contains('q7483')){session.send(`A7483`);
      }
else if(session.message.text.toLowerCase().contains('q7482')){session.send(`A7482`);
      }
else if(session.message.text.toLowerCase().contains('q7481')){session.send(`A7481`);
      }
else if(session.message.text.toLowerCase().contains('q7480')){session.send(`A7480`);
      }
else if(session.message.text.toLowerCase().contains('q7479')){session.send(`A7479`);
      }
else if(session.message.text.toLowerCase().contains('q7478')){session.send(`A7478`);
      }
else if(session.message.text.toLowerCase().contains('q7477')){session.send(`A7477`);
      }
else if(session.message.text.toLowerCase().contains('q7476')){session.send(`A7476`);
      }
else if(session.message.text.toLowerCase().contains('q7475')){session.send(`A7475`);
      }
else if(session.message.text.toLowerCase().contains('q7474')){session.send(`A7474`);
      }
else if(session.message.text.toLowerCase().contains('q7473')){session.send(`A7473`);
      }
else if(session.message.text.toLowerCase().contains('q7472')){session.send(`A7472`);
      }
else if(session.message.text.toLowerCase().contains('q7471')){session.send(`A7471`);
      }
else if(session.message.text.toLowerCase().contains('q7470')){session.send(`A7470`);
      }
else if(session.message.text.toLowerCase().contains('q7469')){session.send(`A7469`);
      }
else if(session.message.text.toLowerCase().contains('q7468')){session.send(`A7468`);
      }
else if(session.message.text.toLowerCase().contains('q7467')){session.send(`A7467`);
      }
else if(session.message.text.toLowerCase().contains('q7466')){session.send(`A7466`);
      }
else if(session.message.text.toLowerCase().contains('q7465')){session.send(`A7465`);
      }
else if(session.message.text.toLowerCase().contains('q7464')){session.send(`A7464`);
      }
else if(session.message.text.toLowerCase().contains('q7463')){session.send(`A7463`);
      }
else if(session.message.text.toLowerCase().contains('q7462')){session.send(`A7462`);
      }
else if(session.message.text.toLowerCase().contains('q7461')){session.send(`A7461`);
      }
else if(session.message.text.toLowerCase().contains('q7460')){session.send(`A7460`);
      }
else if(session.message.text.toLowerCase().contains('q7459')){session.send(`A7459`);
      }
else if(session.message.text.toLowerCase().contains('q7458')){session.send(`A7458`);
      }
else if(session.message.text.toLowerCase().contains('q7457')){session.send(`A7457`);
      }
else if(session.message.text.toLowerCase().contains('q7456')){session.send(`A7456`);
      }
else if(session.message.text.toLowerCase().contains('q7455')){session.send(`A7455`);
      }
else if(session.message.text.toLowerCase().contains('q7454')){session.send(`A7454`);
      }
else if(session.message.text.toLowerCase().contains('q7453')){session.send(`A7453`);
      }
else if(session.message.text.toLowerCase().contains('q7452')){session.send(`A7452`);
      }
else if(session.message.text.toLowerCase().contains('q7451')){session.send(`A7451`);
      }
else if(session.message.text.toLowerCase().contains('q7450')){session.send(`A7450`);
      }
else if(session.message.text.toLowerCase().contains('q7449')){session.send(`A7449`);
      }
else if(session.message.text.toLowerCase().contains('q7448')){session.send(`A7448`);
      }
else if(session.message.text.toLowerCase().contains('q7447')){session.send(`A7447`);
      }
else if(session.message.text.toLowerCase().contains('q7446')){session.send(`A7446`);
      }
else if(session.message.text.toLowerCase().contains('q7445')){session.send(`A7445`);
      }
else if(session.message.text.toLowerCase().contains('q7444')){session.send(`A7444`);
      }
else if(session.message.text.toLowerCase().contains('q7443')){session.send(`A7443`);
      }
else if(session.message.text.toLowerCase().contains('q7442')){session.send(`A7442`);
      }
else if(session.message.text.toLowerCase().contains('q7441')){session.send(`A7441`);
      }
else if(session.message.text.toLowerCase().contains('q7440')){session.send(`A7440`);
      }
else if(session.message.text.toLowerCase().contains('q7439')){session.send(`A7439`);
      }
else if(session.message.text.toLowerCase().contains('q7438')){session.send(`A7438`);
      }
else if(session.message.text.toLowerCase().contains('q7437')){session.send(`A7437`);
      }
else if(session.message.text.toLowerCase().contains('q7436')){session.send(`A7436`);
      }
else if(session.message.text.toLowerCase().contains('q7435')){session.send(`A7435`);
      }
else if(session.message.text.toLowerCase().contains('q7434')){session.send(`A7434`);
      }
else if(session.message.text.toLowerCase().contains('q7433')){session.send(`A7433`);
      }
else if(session.message.text.toLowerCase().contains('q7432')){session.send(`A7432`);
      }
else if(session.message.text.toLowerCase().contains('q7431')){session.send(`A7431`);
      }
else if(session.message.text.toLowerCase().contains('q7430')){session.send(`A7430`);
      }
else if(session.message.text.toLowerCase().contains('q7429')){session.send(`A7429`);
      }
else if(session.message.text.toLowerCase().contains('q7428')){session.send(`A7428`);
      }
else if(session.message.text.toLowerCase().contains('q7427')){session.send(`A7427`);
      }
else if(session.message.text.toLowerCase().contains('q7426')){session.send(`A7426`);
      }
else if(session.message.text.toLowerCase().contains('q7425')){session.send(`A7425`);
      }
else if(session.message.text.toLowerCase().contains('q7424')){session.send(`A7424`);
      }
else if(session.message.text.toLowerCase().contains('q7423')){session.send(`A7423`);
      }
else if(session.message.text.toLowerCase().contains('q7422')){session.send(`A7422`);
      }
else if(session.message.text.toLowerCase().contains('q7421')){session.send(`A7421`);
      }
else if(session.message.text.toLowerCase().contains('q7420')){session.send(`A7420`);
      }
else if(session.message.text.toLowerCase().contains('q7419')){session.send(`A7419`);
      }
else if(session.message.text.toLowerCase().contains('q7418')){session.send(`A7418`);
      }
else if(session.message.text.toLowerCase().contains('q7417')){session.send(`A7417`);
      }
else if(session.message.text.toLowerCase().contains('q7416')){session.send(`A7416`);
      }
else if(session.message.text.toLowerCase().contains('q7415')){session.send(`A7415`);
      }
else if(session.message.text.toLowerCase().contains('q7414')){session.send(`A7414`);
      }
else if(session.message.text.toLowerCase().contains('q7413')){session.send(`A7413`);
      }
else if(session.message.text.toLowerCase().contains('q7412')){session.send(`A7412`);
      }
else if(session.message.text.toLowerCase().contains('q7411')){session.send(`A7411`);
      }
else if(session.message.text.toLowerCase().contains('q7410')){session.send(`A7410`);
      }
else if(session.message.text.toLowerCase().contains('q7409')){session.send(`A7409`);
      }
else if(session.message.text.toLowerCase().contains('q7408')){session.send(`A7408`);
      }
else if(session.message.text.toLowerCase().contains('q7407')){session.send(`A7407`);
      }
else if(session.message.text.toLowerCase().contains('q7406')){session.send(`A7406`);
      }
else if(session.message.text.toLowerCase().contains('q7405')){session.send(`A7405`);
      }
else if(session.message.text.toLowerCase().contains('q7404')){session.send(`A7404`);
      }
else if(session.message.text.toLowerCase().contains('q7403')){session.send(`A7403`);
      }
else if(session.message.text.toLowerCase().contains('q7402')){session.send(`A7402`);
      }
else if(session.message.text.toLowerCase().contains('q7401')){session.send(`A7401`);
      }
else if(session.message.text.toLowerCase().contains('q7400')){session.send(`A7400`);
      }
else if(session.message.text.toLowerCase().contains('q7399')){session.send(`A7399`);
      }
else if(session.message.text.toLowerCase().contains('q7398')){session.send(`A7398`);
      }
else if(session.message.text.toLowerCase().contains('q7397')){session.send(`A7397`);
      }
else if(session.message.text.toLowerCase().contains('q7396')){session.send(`A7396`);
      }
else if(session.message.text.toLowerCase().contains('q7395')){session.send(`A7395`);
      }
else if(session.message.text.toLowerCase().contains('q7394')){session.send(`A7394`);
      }
else if(session.message.text.toLowerCase().contains('q7393')){session.send(`A7393`);
      }
else if(session.message.text.toLowerCase().contains('q7392')){session.send(`A7392`);
      }
else if(session.message.text.toLowerCase().contains('q7391')){session.send(`A7391`);
      }
else if(session.message.text.toLowerCase().contains('q7390')){session.send(`A7390`);
      }
else if(session.message.text.toLowerCase().contains('q7389')){session.send(`A7389`);
      }
else if(session.message.text.toLowerCase().contains('q7388')){session.send(`A7388`);
      }
else if(session.message.text.toLowerCase().contains('q7387')){session.send(`A7387`);
      }
else if(session.message.text.toLowerCase().contains('q7386')){session.send(`A7386`);
      }
else if(session.message.text.toLowerCase().contains('q7385')){session.send(`A7385`);
      }
else if(session.message.text.toLowerCase().contains('q7384')){session.send(`A7384`);
      }
else if(session.message.text.toLowerCase().contains('q7383')){session.send(`A7383`);
      }
else if(session.message.text.toLowerCase().contains('q7382')){session.send(`A7382`);
      }
else if(session.message.text.toLowerCase().contains('q7381')){session.send(`A7381`);
      }
else if(session.message.text.toLowerCase().contains('q7380')){session.send(`A7380`);
      }
else if(session.message.text.toLowerCase().contains('q7379')){session.send(`A7379`);
      }
else if(session.message.text.toLowerCase().contains('q7378')){session.send(`A7378`);
      }
else if(session.message.text.toLowerCase().contains('q7377')){session.send(`A7377`);
      }
else if(session.message.text.toLowerCase().contains('q7376')){session.send(`A7376`);
      }
else if(session.message.text.toLowerCase().contains('q7375')){session.send(`A7375`);
      }
else if(session.message.text.toLowerCase().contains('q7374')){session.send(`A7374`);
      }
else if(session.message.text.toLowerCase().contains('q7373')){session.send(`A7373`);
      }
else if(session.message.text.toLowerCase().contains('q7372')){session.send(`A7372`);
      }
else if(session.message.text.toLowerCase().contains('q7371')){session.send(`A7371`);
      }
else if(session.message.text.toLowerCase().contains('q7370')){session.send(`A7370`);
      }
else if(session.message.text.toLowerCase().contains('q7369')){session.send(`A7369`);
      }
else if(session.message.text.toLowerCase().contains('q7368')){session.send(`A7368`);
      }
else if(session.message.text.toLowerCase().contains('q7367')){session.send(`A7367`);
      }
else if(session.message.text.toLowerCase().contains('q7366')){session.send(`A7366`);
      }
else if(session.message.text.toLowerCase().contains('q7365')){session.send(`A7365`);
      }
else if(session.message.text.toLowerCase().contains('q7364')){session.send(`A7364`);
      }
else if(session.message.text.toLowerCase().contains('q7363')){session.send(`A7363`);
      }
else if(session.message.text.toLowerCase().contains('q7362')){session.send(`A7362`);
      }
else if(session.message.text.toLowerCase().contains('q7361')){session.send(`A7361`);
      }
else if(session.message.text.toLowerCase().contains('q7360')){session.send(`A7360`);
      }
else if(session.message.text.toLowerCase().contains('q7359')){session.send(`A7359`);
      }
else if(session.message.text.toLowerCase().contains('q7358')){session.send(`A7358`);
      }
else if(session.message.text.toLowerCase().contains('q7357')){session.send(`A7357`);
      }
else if(session.message.text.toLowerCase().contains('q7356')){session.send(`A7356`);
      }
else if(session.message.text.toLowerCase().contains('q7355')){session.send(`A7355`);
      }
else if(session.message.text.toLowerCase().contains('q7354')){session.send(`A7354`);
      }
else if(session.message.text.toLowerCase().contains('q7353')){session.send(`A7353`);
      }
else if(session.message.text.toLowerCase().contains('q7352')){session.send(`A7352`);
      }
else if(session.message.text.toLowerCase().contains('q7351')){session.send(`A7351`);
      }
else if(session.message.text.toLowerCase().contains('q7350')){session.send(`A7350`);
      }
else if(session.message.text.toLowerCase().contains('q7349')){session.send(`A7349`);
      }
else if(session.message.text.toLowerCase().contains('q7348')){session.send(`A7348`);
      }
else if(session.message.text.toLowerCase().contains('q7347')){session.send(`A7347`);
      }
else if(session.message.text.toLowerCase().contains('q7346')){session.send(`A7346`);
      }
else if(session.message.text.toLowerCase().contains('q7345')){session.send(`A7345`);
      }
else if(session.message.text.toLowerCase().contains('q7344')){session.send(`A7344`);
      }
else if(session.message.text.toLowerCase().contains('q7343')){session.send(`A7343`);
      }
else if(session.message.text.toLowerCase().contains('q7342')){session.send(`A7342`);
      }
else if(session.message.text.toLowerCase().contains('q7341')){session.send(`A7341`);
      }
else if(session.message.text.toLowerCase().contains('q7340')){session.send(`A7340`);
      }
else if(session.message.text.toLowerCase().contains('q7339')){session.send(`A7339`);
      }
else if(session.message.text.toLowerCase().contains('q7338')){session.send(`A7338`);
      }
else if(session.message.text.toLowerCase().contains('q7337')){session.send(`A7337`);
      }
else if(session.message.text.toLowerCase().contains('q7336')){session.send(`A7336`);
      }
else if(session.message.text.toLowerCase().contains('q7335')){session.send(`A7335`);
      }
else if(session.message.text.toLowerCase().contains('q7334')){session.send(`A7334`);
      }
else if(session.message.text.toLowerCase().contains('q7333')){session.send(`A7333`);
      }
else if(session.message.text.toLowerCase().contains('q7332')){session.send(`A7332`);
      }
else if(session.message.text.toLowerCase().contains('q7331')){session.send(`A7331`);
      }
else if(session.message.text.toLowerCase().contains('q7330')){session.send(`A7330`);
      }
else if(session.message.text.toLowerCase().contains('q7329')){session.send(`A7329`);
      }
else if(session.message.text.toLowerCase().contains('q7328')){session.send(`A7328`);
      }
else if(session.message.text.toLowerCase().contains('q7327')){session.send(`A7327`);
      }
else if(session.message.text.toLowerCase().contains('q7326')){session.send(`A7326`);
      }
else if(session.message.text.toLowerCase().contains('q7325')){session.send(`A7325`);
      }
else if(session.message.text.toLowerCase().contains('q7324')){session.send(`A7324`);
      }
else if(session.message.text.toLowerCase().contains('q7323')){session.send(`A7323`);
      }
else if(session.message.text.toLowerCase().contains('q7322')){session.send(`A7322`);
      }
else if(session.message.text.toLowerCase().contains('q7321')){session.send(`A7321`);
      }
else if(session.message.text.toLowerCase().contains('q7320')){session.send(`A7320`);
      }
else if(session.message.text.toLowerCase().contains('q7319')){session.send(`A7319`);
      }
else if(session.message.text.toLowerCase().contains('q7318')){session.send(`A7318`);
      }
else if(session.message.text.toLowerCase().contains('q7317')){session.send(`A7317`);
      }
else if(session.message.text.toLowerCase().contains('q7316')){session.send(`A7316`);
      }
else if(session.message.text.toLowerCase().contains('q7315')){session.send(`A7315`);
      }
else if(session.message.text.toLowerCase().contains('q7314')){session.send(`A7314`);
      }
else if(session.message.text.toLowerCase().contains('q7313')){session.send(`A7313`);
      }
else if(session.message.text.toLowerCase().contains('q7312')){session.send(`A7312`);
      }
else if(session.message.text.toLowerCase().contains('q7311')){session.send(`A7311`);
      }
else if(session.message.text.toLowerCase().contains('q7310')){session.send(`A7310`);
      }
else if(session.message.text.toLowerCase().contains('q7309')){session.send(`A7309`);
      }
else if(session.message.text.toLowerCase().contains('q7308')){session.send(`A7308`);
      }
else if(session.message.text.toLowerCase().contains('q7307')){session.send(`A7307`);
      }
else if(session.message.text.toLowerCase().contains('q7306')){session.send(`A7306`);
      }
else if(session.message.text.toLowerCase().contains('q7305')){session.send(`A7305`);
      }
else if(session.message.text.toLowerCase().contains('q7304')){session.send(`A7304`);
      }
else if(session.message.text.toLowerCase().contains('q7303')){session.send(`A7303`);
      }
else if(session.message.text.toLowerCase().contains('q7302')){session.send(`A7302`);
      }
else if(session.message.text.toLowerCase().contains('q7301')){session.send(`A7301`);
      }
else if(session.message.text.toLowerCase().contains('q7300')){session.send(`A7300`);
      }
else if(session.message.text.toLowerCase().contains('q7299')){session.send(`A7299`);
      }
else if(session.message.text.toLowerCase().contains('q7298')){session.send(`A7298`);
      }
else if(session.message.text.toLowerCase().contains('q7297')){session.send(`A7297`);
      }
else if(session.message.text.toLowerCase().contains('q7296')){session.send(`A7296`);
      }
else if(session.message.text.toLowerCase().contains('q7295')){session.send(`A7295`);
      }
else if(session.message.text.toLowerCase().contains('q7294')){session.send(`A7294`);
      }
else if(session.message.text.toLowerCase().contains('q7293')){session.send(`A7293`);
      }
else if(session.message.text.toLowerCase().contains('q7292')){session.send(`A7292`);
      }
else if(session.message.text.toLowerCase().contains('q7291')){session.send(`A7291`);
      }
else if(session.message.text.toLowerCase().contains('q7290')){session.send(`A7290`);
      }
else if(session.message.text.toLowerCase().contains('q7289')){session.send(`A7289`);
      }
else if(session.message.text.toLowerCase().contains('q7288')){session.send(`A7288`);
      }
else if(session.message.text.toLowerCase().contains('q7287')){session.send(`A7287`);
      }
else if(session.message.text.toLowerCase().contains('q7286')){session.send(`A7286`);
      }
else if(session.message.text.toLowerCase().contains('q7285')){session.send(`A7285`);
      }
else if(session.message.text.toLowerCase().contains('q7284')){session.send(`A7284`);
      }
else if(session.message.text.toLowerCase().contains('q7283')){session.send(`A7283`);
      }
else if(session.message.text.toLowerCase().contains('q7282')){session.send(`A7282`);
      }
else if(session.message.text.toLowerCase().contains('q7281')){session.send(`A7281`);
      }
else if(session.message.text.toLowerCase().contains('q7280')){session.send(`A7280`);
      }
else if(session.message.text.toLowerCase().contains('q7279')){session.send(`A7279`);
      }
else if(session.message.text.toLowerCase().contains('q7278')){session.send(`A7278`);
      }
else if(session.message.text.toLowerCase().contains('q7277')){session.send(`A7277`);
      }
else if(session.message.text.toLowerCase().contains('q7276')){session.send(`A7276`);
      }
else if(session.message.text.toLowerCase().contains('q7275')){session.send(`A7275`);
      }
else if(session.message.text.toLowerCase().contains('q7274')){session.send(`A7274`);
      }
else if(session.message.text.toLowerCase().contains('q7273')){session.send(`A7273`);
      }
else if(session.message.text.toLowerCase().contains('q7272')){session.send(`A7272`);
      }
else if(session.message.text.toLowerCase().contains('q7271')){session.send(`A7271`);
      }
else if(session.message.text.toLowerCase().contains('q7270')){session.send(`A7270`);
      }
else if(session.message.text.toLowerCase().contains('q7269')){session.send(`A7269`);
      }
else if(session.message.text.toLowerCase().contains('q7268')){session.send(`A7268`);
      }
else if(session.message.text.toLowerCase().contains('q7267')){session.send(`A7267`);
      }
else if(session.message.text.toLowerCase().contains('q7266')){session.send(`A7266`);
      }
else if(session.message.text.toLowerCase().contains('q7265')){session.send(`A7265`);
      }
else if(session.message.text.toLowerCase().contains('q7264')){session.send(`A7264`);
      }
else if(session.message.text.toLowerCase().contains('q7263')){session.send(`A7263`);
      }
else if(session.message.text.toLowerCase().contains('q7262')){session.send(`A7262`);
      }
else if(session.message.text.toLowerCase().contains('q7261')){session.send(`A7261`);
      }
else if(session.message.text.toLowerCase().contains('q7260')){session.send(`A7260`);
      }
else if(session.message.text.toLowerCase().contains('q7259')){session.send(`A7259`);
      }
else if(session.message.text.toLowerCase().contains('q7258')){session.send(`A7258`);
      }
else if(session.message.text.toLowerCase().contains('q7257')){session.send(`A7257`);
      }
else if(session.message.text.toLowerCase().contains('q7256')){session.send(`A7256`);
      }
else if(session.message.text.toLowerCase().contains('q7255')){session.send(`A7255`);
      }
else if(session.message.text.toLowerCase().contains('q7254')){session.send(`A7254`);
      }
else if(session.message.text.toLowerCase().contains('q7253')){session.send(`A7253`);
      }
else if(session.message.text.toLowerCase().contains('q7252')){session.send(`A7252`);
      }
else if(session.message.text.toLowerCase().contains('q7251')){session.send(`A7251`);
      }
else if(session.message.text.toLowerCase().contains('q7250')){session.send(`A7250`);
      }
else if(session.message.text.toLowerCase().contains('q7249')){session.send(`A7249`);
      }
else if(session.message.text.toLowerCase().contains('q7248')){session.send(`A7248`);
      }
else if(session.message.text.toLowerCase().contains('q7247')){session.send(`A7247`);
      }
else if(session.message.text.toLowerCase().contains('q7246')){session.send(`A7246`);
      }
else if(session.message.text.toLowerCase().contains('q7245')){session.send(`A7245`);
      }
else if(session.message.text.toLowerCase().contains('q7244')){session.send(`A7244`);
      }
else if(session.message.text.toLowerCase().contains('q7243')){session.send(`A7243`);
      }
else if(session.message.text.toLowerCase().contains('q7242')){session.send(`A7242`);
      }
else if(session.message.text.toLowerCase().contains('q7241')){session.send(`A7241`);
      }
else if(session.message.text.toLowerCase().contains('q7240')){session.send(`A7240`);
      }
else if(session.message.text.toLowerCase().contains('q7239')){session.send(`A7239`);
      }
else if(session.message.text.toLowerCase().contains('q7238')){session.send(`A7238`);
      }
else if(session.message.text.toLowerCase().contains('q7237')){session.send(`A7237`);
      }
else if(session.message.text.toLowerCase().contains('q7236')){session.send(`A7236`);
      }
else if(session.message.text.toLowerCase().contains('q7235')){session.send(`A7235`);
      }
else if(session.message.text.toLowerCase().contains('q7234')){session.send(`A7234`);
      }
else if(session.message.text.toLowerCase().contains('q7233')){session.send(`A7233`);
      }
else if(session.message.text.toLowerCase().contains('q7232')){session.send(`A7232`);
      }
else if(session.message.text.toLowerCase().contains('q7231')){session.send(`A7231`);
      }
else if(session.message.text.toLowerCase().contains('q7230')){session.send(`A7230`);
      }
else if(session.message.text.toLowerCase().contains('q7229')){session.send(`A7229`);
      }
else if(session.message.text.toLowerCase().contains('q7228')){session.send(`A7228`);
      }
else if(session.message.text.toLowerCase().contains('q7227')){session.send(`A7227`);
      }
else if(session.message.text.toLowerCase().contains('q7226')){session.send(`A7226`);
      }
else if(session.message.text.toLowerCase().contains('q7225')){session.send(`A7225`);
      }
else if(session.message.text.toLowerCase().contains('q7224')){session.send(`A7224`);
      }
else if(session.message.text.toLowerCase().contains('q7223')){session.send(`A7223`);
      }
else if(session.message.text.toLowerCase().contains('q7222')){session.send(`A7222`);
      }
else if(session.message.text.toLowerCase().contains('q7221')){session.send(`A7221`);
      }
else if(session.message.text.toLowerCase().contains('q7220')){session.send(`A7220`);
      }
else if(session.message.text.toLowerCase().contains('q7219')){session.send(`A7219`);
      }
else if(session.message.text.toLowerCase().contains('q7218')){session.send(`A7218`);
      }
else if(session.message.text.toLowerCase().contains('q7217')){session.send(`A7217`);
      }
else if(session.message.text.toLowerCase().contains('q7216')){session.send(`A7216`);
      }
else if(session.message.text.toLowerCase().contains('q7215')){session.send(`A7215`);
      }
else if(session.message.text.toLowerCase().contains('q7214')){session.send(`A7214`);
      }
else if(session.message.text.toLowerCase().contains('q7213')){session.send(`A7213`);
      }
else if(session.message.text.toLowerCase().contains('q7212')){session.send(`A7212`);
      }
else if(session.message.text.toLowerCase().contains('q7211')){session.send(`A7211`);
      }
else if(session.message.text.toLowerCase().contains('q7210')){session.send(`A7210`);
      }
else if(session.message.text.toLowerCase().contains('q7209')){session.send(`A7209`);
      }
else if(session.message.text.toLowerCase().contains('q7208')){session.send(`A7208`);
      }
else if(session.message.text.toLowerCase().contains('q7207')){session.send(`A7207`);
      }
else if(session.message.text.toLowerCase().contains('q7206')){session.send(`A7206`);
      }
else if(session.message.text.toLowerCase().contains('q7205')){session.send(`A7205`);
      }
else if(session.message.text.toLowerCase().contains('q7204')){session.send(`A7204`);
      }
else if(session.message.text.toLowerCase().contains('q7203')){session.send(`A7203`);
      }
else if(session.message.text.toLowerCase().contains('q7202')){session.send(`A7202`);
      }
else if(session.message.text.toLowerCase().contains('q7201')){session.send(`A7201`);
      }
else if(session.message.text.toLowerCase().contains('q7200')){session.send(`A7200`);
      }
else if(session.message.text.toLowerCase().contains('q7199')){session.send(`A7199`);
      }
else if(session.message.text.toLowerCase().contains('q7198')){session.send(`A7198`);
      }
else if(session.message.text.toLowerCase().contains('q7197')){session.send(`A7197`);
      }
else if(session.message.text.toLowerCase().contains('q7196')){session.send(`A7196`);
      }
else if(session.message.text.toLowerCase().contains('q7195')){session.send(`A7195`);
      }
else if(session.message.text.toLowerCase().contains('q7194')){session.send(`A7194`);
      }
else if(session.message.text.toLowerCase().contains('q7193')){session.send(`A7193`);
      }
else if(session.message.text.toLowerCase().contains('q7192')){session.send(`A7192`);
      }
else if(session.message.text.toLowerCase().contains('q7191')){session.send(`A7191`);
      }
else if(session.message.text.toLowerCase().contains('q7190')){session.send(`A7190`);
      }
else if(session.message.text.toLowerCase().contains('q7189')){session.send(`A7189`);
      }
else if(session.message.text.toLowerCase().contains('q7188')){session.send(`A7188`);
      }
else if(session.message.text.toLowerCase().contains('q7187')){session.send(`A7187`);
      }
else if(session.message.text.toLowerCase().contains('q7186')){session.send(`A7186`);
      }
else if(session.message.text.toLowerCase().contains('q7185')){session.send(`A7185`);
      }
else if(session.message.text.toLowerCase().contains('q7184')){session.send(`A7184`);
      }
else if(session.message.text.toLowerCase().contains('q7183')){session.send(`A7183`);
      }
else if(session.message.text.toLowerCase().contains('q7182')){session.send(`A7182`);
      }
else if(session.message.text.toLowerCase().contains('q7181')){session.send(`A7181`);
      }
else if(session.message.text.toLowerCase().contains('q7180')){session.send(`A7180`);
      }
else if(session.message.text.toLowerCase().contains('q7179')){session.send(`A7179`);
      }
else if(session.message.text.toLowerCase().contains('q7178')){session.send(`A7178`);
      }
else if(session.message.text.toLowerCase().contains('q7177')){session.send(`A7177`);
      }
else if(session.message.text.toLowerCase().contains('q7176')){session.send(`A7176`);
      }
else if(session.message.text.toLowerCase().contains('q7175')){session.send(`A7175`);
      }
else if(session.message.text.toLowerCase().contains('q7174')){session.send(`A7174`);
      }
else if(session.message.text.toLowerCase().contains('q7173')){session.send(`A7173`);
      }
else if(session.message.text.toLowerCase().contains('q7172')){session.send(`A7172`);
      }
else if(session.message.text.toLowerCase().contains('q7171')){session.send(`A7171`);
      }
else if(session.message.text.toLowerCase().contains('q7170')){session.send(`A7170`);
      }
else if(session.message.text.toLowerCase().contains('q7169')){session.send(`A7169`);
      }
else if(session.message.text.toLowerCase().contains('q7168')){session.send(`A7168`);
      }
else if(session.message.text.toLowerCase().contains('q7167')){session.send(`A7167`);
      }
else if(session.message.text.toLowerCase().contains('q7166')){session.send(`A7166`);
      }
else if(session.message.text.toLowerCase().contains('q7165')){session.send(`A7165`);
      }
else if(session.message.text.toLowerCase().contains('q7164')){session.send(`A7164`);
      }
else if(session.message.text.toLowerCase().contains('q7163')){session.send(`A7163`);
      }
else if(session.message.text.toLowerCase().contains('q7162')){session.send(`A7162`);
      }
else if(session.message.text.toLowerCase().contains('q7161')){session.send(`A7161`);
      }
else if(session.message.text.toLowerCase().contains('q7160')){session.send(`A7160`);
      }
else if(session.message.text.toLowerCase().contains('q7159')){session.send(`A7159`);
      }
else if(session.message.text.toLowerCase().contains('q7158')){session.send(`A7158`);
      }
else if(session.message.text.toLowerCase().contains('q7157')){session.send(`A7157`);
      }
else if(session.message.text.toLowerCase().contains('q7156')){session.send(`A7156`);
      }
else if(session.message.text.toLowerCase().contains('q7155')){session.send(`A7155`);
      }
else if(session.message.text.toLowerCase().contains('q7154')){session.send(`A7154`);
      }
else if(session.message.text.toLowerCase().contains('q7153')){session.send(`A7153`);
      }
else if(session.message.text.toLowerCase().contains('q7152')){session.send(`A7152`);
      }
else if(session.message.text.toLowerCase().contains('q7151')){session.send(`A7151`);
      }
else if(session.message.text.toLowerCase().contains('q7150')){session.send(`A7150`);
      }
else if(session.message.text.toLowerCase().contains('q7149')){session.send(`A7149`);
      }
else if(session.message.text.toLowerCase().contains('q7148')){session.send(`A7148`);
      }
else if(session.message.text.toLowerCase().contains('q7147')){session.send(`A7147`);
      }
else if(session.message.text.toLowerCase().contains('q7146')){session.send(`A7146`);
      }
else if(session.message.text.toLowerCase().contains('q7145')){session.send(`A7145`);
      }
else if(session.message.text.toLowerCase().contains('q7144')){session.send(`A7144`);
      }
else if(session.message.text.toLowerCase().contains('q7143')){session.send(`A7143`);
      }
else if(session.message.text.toLowerCase().contains('q7142')){session.send(`A7142`);
      }
else if(session.message.text.toLowerCase().contains('q7141')){session.send(`A7141`);
      }
else if(session.message.text.toLowerCase().contains('q7140')){session.send(`A7140`);
      }
else if(session.message.text.toLowerCase().contains('q7139')){session.send(`A7139`);
      }
else if(session.message.text.toLowerCase().contains('q7138')){session.send(`A7138`);
      }
else if(session.message.text.toLowerCase().contains('q7137')){session.send(`A7137`);
      }
else if(session.message.text.toLowerCase().contains('q7136')){session.send(`A7136`);
      }
else if(session.message.text.toLowerCase().contains('q7135')){session.send(`A7135`);
      }
else if(session.message.text.toLowerCase().contains('q7134')){session.send(`A7134`);
      }
else if(session.message.text.toLowerCase().contains('q7133')){session.send(`A7133`);
      }
else if(session.message.text.toLowerCase().contains('q7132')){session.send(`A7132`);
      }
else if(session.message.text.toLowerCase().contains('q7131')){session.send(`A7131`);
      }
else if(session.message.text.toLowerCase().contains('q7130')){session.send(`A7130`);
      }
else if(session.message.text.toLowerCase().contains('q7129')){session.send(`A7129`);
      }
else if(session.message.text.toLowerCase().contains('q7128')){session.send(`A7128`);
      }
else if(session.message.text.toLowerCase().contains('q7127')){session.send(`A7127`);
      }
else if(session.message.text.toLowerCase().contains('q7126')){session.send(`A7126`);
      }
else if(session.message.text.toLowerCase().contains('q7125')){session.send(`A7125`);
      }
else if(session.message.text.toLowerCase().contains('q7124')){session.send(`A7124`);
      }
else if(session.message.text.toLowerCase().contains('q7123')){session.send(`A7123`);
      }
else if(session.message.text.toLowerCase().contains('q7122')){session.send(`A7122`);
      }
else if(session.message.text.toLowerCase().contains('q7121')){session.send(`A7121`);
      }
else if(session.message.text.toLowerCase().contains('q7120')){session.send(`A7120`);
      }
else if(session.message.text.toLowerCase().contains('q7119')){session.send(`A7119`);
      }
else if(session.message.text.toLowerCase().contains('q7118')){session.send(`A7118`);
      }
else if(session.message.text.toLowerCase().contains('q7117')){session.send(`A7117`);
      }
else if(session.message.text.toLowerCase().contains('q7116')){session.send(`A7116`);
      }
else if(session.message.text.toLowerCase().contains('q7115')){session.send(`A7115`);
      }
else if(session.message.text.toLowerCase().contains('q7114')){session.send(`A7114`);
      }
else if(session.message.text.toLowerCase().contains('q7113')){session.send(`A7113`);
      }
else if(session.message.text.toLowerCase().contains('q7112')){session.send(`A7112`);
      }
else if(session.message.text.toLowerCase().contains('q7111')){session.send(`A7111`);
      }
else if(session.message.text.toLowerCase().contains('q7110')){session.send(`A7110`);
      }
else if(session.message.text.toLowerCase().contains('q7109')){session.send(`A7109`);
      }
else if(session.message.text.toLowerCase().contains('q7108')){session.send(`A7108`);
      }
else if(session.message.text.toLowerCase().contains('q7107')){session.send(`A7107`);
      }
else if(session.message.text.toLowerCase().contains('q7106')){session.send(`A7106`);
      }
else if(session.message.text.toLowerCase().contains('q7105')){session.send(`A7105`);
      }
else if(session.message.text.toLowerCase().contains('q7104')){session.send(`A7104`);
      }
else if(session.message.text.toLowerCase().contains('q7103')){session.send(`A7103`);
      }
else if(session.message.text.toLowerCase().contains('q7102')){session.send(`A7102`);
      }
else if(session.message.text.toLowerCase().contains('q7101')){session.send(`A7101`);
      }
else if(session.message.text.toLowerCase().contains('q7100')){session.send(`A7100`);
      }
else if(session.message.text.toLowerCase().contains('q7099')){session.send(`A7099`);
      }
else if(session.message.text.toLowerCase().contains('q7098')){session.send(`A7098`);
      }
else if(session.message.text.toLowerCase().contains('q7097')){session.send(`A7097`);
      }
else if(session.message.text.toLowerCase().contains('q7096')){session.send(`A7096`);
      }
else if(session.message.text.toLowerCase().contains('q7095')){session.send(`A7095`);
      }
else if(session.message.text.toLowerCase().contains('q7094')){session.send(`A7094`);
      }
else if(session.message.text.toLowerCase().contains('q7093')){session.send(`A7093`);
      }
else if(session.message.text.toLowerCase().contains('q7092')){session.send(`A7092`);
      }
else if(session.message.text.toLowerCase().contains('q7091')){session.send(`A7091`);
      }
else if(session.message.text.toLowerCase().contains('q7090')){session.send(`A7090`);
      }
else if(session.message.text.toLowerCase().contains('q7089')){session.send(`A7089`);
      }
else if(session.message.text.toLowerCase().contains('q7088')){session.send(`A7088`);
      }
else if(session.message.text.toLowerCase().contains('q7087')){session.send(`A7087`);
      }
else if(session.message.text.toLowerCase().contains('q7086')){session.send(`A7086`);
      }
else if(session.message.text.toLowerCase().contains('q7085')){session.send(`A7085`);
      }
else if(session.message.text.toLowerCase().contains('q7084')){session.send(`A7084`);
      }
else if(session.message.text.toLowerCase().contains('q7083')){session.send(`A7083`);
      }
else if(session.message.text.toLowerCase().contains('q7082')){session.send(`A7082`);
      }
else if(session.message.text.toLowerCase().contains('q7081')){session.send(`A7081`);
      }
else if(session.message.text.toLowerCase().contains('q7080')){session.send(`A7080`);
      }
else if(session.message.text.toLowerCase().contains('q7079')){session.send(`A7079`);
      }
else if(session.message.text.toLowerCase().contains('q7078')){session.send(`A7078`);
      }
else if(session.message.text.toLowerCase().contains('q7077')){session.send(`A7077`);
      }
else if(session.message.text.toLowerCase().contains('q7076')){session.send(`A7076`);
      }
else if(session.message.text.toLowerCase().contains('q7075')){session.send(`A7075`);
      }
else if(session.message.text.toLowerCase().contains('q7074')){session.send(`A7074`);
      }
else if(session.message.text.toLowerCase().contains('q7073')){session.send(`A7073`);
      }
else if(session.message.text.toLowerCase().contains('q7072')){session.send(`A7072`);
      }
else if(session.message.text.toLowerCase().contains('q7071')){session.send(`A7071`);
      }
else if(session.message.text.toLowerCase().contains('q7070')){session.send(`A7070`);
      }
else if(session.message.text.toLowerCase().contains('q7069')){session.send(`A7069`);
      }
else if(session.message.text.toLowerCase().contains('q7068')){session.send(`A7068`);
      }
else if(session.message.text.toLowerCase().contains('q7067')){session.send(`A7067`);
      }
else if(session.message.text.toLowerCase().contains('q7066')){session.send(`A7066`);
      }
else if(session.message.text.toLowerCase().contains('q7065')){session.send(`A7065`);
      }
else if(session.message.text.toLowerCase().contains('q7064')){session.send(`A7064`);
      }
else if(session.message.text.toLowerCase().contains('q7063')){session.send(`A7063`);
      }
else if(session.message.text.toLowerCase().contains('q7062')){session.send(`A7062`);
      }
else if(session.message.text.toLowerCase().contains('q7061')){session.send(`A7061`);
      }
else if(session.message.text.toLowerCase().contains('q7060')){session.send(`A7060`);
      }
else if(session.message.text.toLowerCase().contains('q7059')){session.send(`A7059`);
      }
else if(session.message.text.toLowerCase().contains('q7058')){session.send(`A7058`);
      }
else if(session.message.text.toLowerCase().contains('q7057')){session.send(`A7057`);
      }
else if(session.message.text.toLowerCase().contains('q7056')){session.send(`A7056`);
      }
else if(session.message.text.toLowerCase().contains('q7055')){session.send(`A7055`);
      }
else if(session.message.text.toLowerCase().contains('q7054')){session.send(`A7054`);
      }
else if(session.message.text.toLowerCase().contains('q7053')){session.send(`A7053`);
      }
else if(session.message.text.toLowerCase().contains('q7052')){session.send(`A7052`);
      }
else if(session.message.text.toLowerCase().contains('q7051')){session.send(`A7051`);
      }
else if(session.message.text.toLowerCase().contains('q7050')){session.send(`A7050`);
      }
else if(session.message.text.toLowerCase().contains('q7049')){session.send(`A7049`);
      }
else if(session.message.text.toLowerCase().contains('q7048')){session.send(`A7048`);
      }
else if(session.message.text.toLowerCase().contains('q7047')){session.send(`A7047`);
      }
else if(session.message.text.toLowerCase().contains('q7046')){session.send(`A7046`);
      }
else if(session.message.text.toLowerCase().contains('q7045')){session.send(`A7045`);
      }
else if(session.message.text.toLowerCase().contains('q7044')){session.send(`A7044`);
      }
else if(session.message.text.toLowerCase().contains('q7043')){session.send(`A7043`);
      }
else if(session.message.text.toLowerCase().contains('q7042')){session.send(`A7042`);
      }
else if(session.message.text.toLowerCase().contains('q7041')){session.send(`A7041`);
      }
else if(session.message.text.toLowerCase().contains('q7040')){session.send(`A7040`);
      }
else if(session.message.text.toLowerCase().contains('q7039')){session.send(`A7039`);
      }
else if(session.message.text.toLowerCase().contains('q7038')){session.send(`A7038`);
      }
else if(session.message.text.toLowerCase().contains('q7037')){session.send(`A7037`);
      }
else if(session.message.text.toLowerCase().contains('q7036')){session.send(`A7036`);
      }
else if(session.message.text.toLowerCase().contains('q7035')){session.send(`A7035`);
      }
else if(session.message.text.toLowerCase().contains('q7034')){session.send(`A7034`);
      }
else if(session.message.text.toLowerCase().contains('q7033')){session.send(`A7033`);
      }
else if(session.message.text.toLowerCase().contains('q7032')){session.send(`A7032`);
      }
else if(session.message.text.toLowerCase().contains('q7031')){session.send(`A7031`);
      }
else if(session.message.text.toLowerCase().contains('q7030')){session.send(`A7030`);
      }
else if(session.message.text.toLowerCase().contains('q7029')){session.send(`A7029`);
      }
else if(session.message.text.toLowerCase().contains('q7028')){session.send(`A7028`);
      }
else if(session.message.text.toLowerCase().contains('q7027')){session.send(`A7027`);
      }
else if(session.message.text.toLowerCase().contains('q7026')){session.send(`A7026`);
      }
else if(session.message.text.toLowerCase().contains('q7025')){session.send(`A7025`);
      }
else if(session.message.text.toLowerCase().contains('q7024')){session.send(`A7024`);
      }
else if(session.message.text.toLowerCase().contains('q7023')){session.send(`A7023`);
      }
else if(session.message.text.toLowerCase().contains('q7022')){session.send(`A7022`);
      }
else if(session.message.text.toLowerCase().contains('q7021')){session.send(`A7021`);
      }
else if(session.message.text.toLowerCase().contains('q7020')){session.send(`A7020`);
      }
else if(session.message.text.toLowerCase().contains('q7019')){session.send(`A7019`);
      }
else if(session.message.text.toLowerCase().contains('q7018')){session.send(`A7018`);
      }
else if(session.message.text.toLowerCase().contains('q7017')){session.send(`A7017`);
      }
else if(session.message.text.toLowerCase().contains('q7016')){session.send(`A7016`);
      }
else if(session.message.text.toLowerCase().contains('q7015')){session.send(`A7015`);
      }
else if(session.message.text.toLowerCase().contains('q7014')){session.send(`A7014`);
      }
else if(session.message.text.toLowerCase().contains('q7013')){session.send(`A7013`);
      }
else if(session.message.text.toLowerCase().contains('q7012')){session.send(`A7012`);
      }
else if(session.message.text.toLowerCase().contains('q7011')){session.send(`A7011`);
      }
else if(session.message.text.toLowerCase().contains('q7010')){session.send(`A7010`);
      }
else if(session.message.text.toLowerCase().contains('q7009')){session.send(`A7009`);
      }
else if(session.message.text.toLowerCase().contains('q7008')){session.send(`A7008`);
      }
else if(session.message.text.toLowerCase().contains('q7007')){session.send(`A7007`);
      }
else if(session.message.text.toLowerCase().contains('q7006')){session.send(`A7006`);
      }
else if(session.message.text.toLowerCase().contains('q7005')){session.send(`A7005`);
      }
else if(session.message.text.toLowerCase().contains('q7004')){session.send(`A7004`);
      }
else if(session.message.text.toLowerCase().contains('q7003')){session.send(`A7003`);
      }
else if(session.message.text.toLowerCase().contains('q7002')){session.send(`A7002`);
      }
else if(session.message.text.toLowerCase().contains('q7001')){session.send(`A7001`);
      }
else if(session.message.text.toLowerCase().contains('q7000')){session.send(`A7000`);
      }
else if(session.message.text.toLowerCase().contains('q6999')){session.send(`A6999`);
      }
else if(session.message.text.toLowerCase().contains('q6998')){session.send(`A6998`);
      }
else if(session.message.text.toLowerCase().contains('q6997')){session.send(`A6997`);
      }
else if(session.message.text.toLowerCase().contains('q6996')){session.send(`A6996`);
      }
else if(session.message.text.toLowerCase().contains('q6995')){session.send(`A6995`);
      }
else if(session.message.text.toLowerCase().contains('q6994')){session.send(`A6994`);
      }
else if(session.message.text.toLowerCase().contains('q6993')){session.send(`A6993`);
      }
else if(session.message.text.toLowerCase().contains('q6992')){session.send(`A6992`);
      }
else if(session.message.text.toLowerCase().contains('q6991')){session.send(`A6991`);
      }
else if(session.message.text.toLowerCase().contains('q6990')){session.send(`A6990`);
      }
else if(session.message.text.toLowerCase().contains('q6989')){session.send(`A6989`);
      }
else if(session.message.text.toLowerCase().contains('q6988')){session.send(`A6988`);
      }
else if(session.message.text.toLowerCase().contains('q6987')){session.send(`A6987`);
      }
else if(session.message.text.toLowerCase().contains('q6986')){session.send(`A6986`);
      }
else if(session.message.text.toLowerCase().contains('q6985')){session.send(`A6985`);
      }
else if(session.message.text.toLowerCase().contains('q6984')){session.send(`A6984`);
      }
else if(session.message.text.toLowerCase().contains('q6983')){session.send(`A6983`);
      }
else if(session.message.text.toLowerCase().contains('q6982')){session.send(`A6982`);
      }
else if(session.message.text.toLowerCase().contains('q6981')){session.send(`A6981`);
      }
else if(session.message.text.toLowerCase().contains('q6980')){session.send(`A6980`);
      }
else if(session.message.text.toLowerCase().contains('q6979')){session.send(`A6979`);
      }
else if(session.message.text.toLowerCase().contains('q6978')){session.send(`A6978`);
      }
else if(session.message.text.toLowerCase().contains('q6977')){session.send(`A6977`);
      }
else if(session.message.text.toLowerCase().contains('q6976')){session.send(`A6976`);
      }
else if(session.message.text.toLowerCase().contains('q6975')){session.send(`A6975`);
      }
else if(session.message.text.toLowerCase().contains('q6974')){session.send(`A6974`);
      }
else if(session.message.text.toLowerCase().contains('q6973')){session.send(`A6973`);
      }
else if(session.message.text.toLowerCase().contains('q6972')){session.send(`A6972`);
      }
else if(session.message.text.toLowerCase().contains('q6971')){session.send(`A6971`);
      }
else if(session.message.text.toLowerCase().contains('q6970')){session.send(`A6970`);
      }
else if(session.message.text.toLowerCase().contains('q6969')){session.send(`A6969`);
      }
else if(session.message.text.toLowerCase().contains('q6968')){session.send(`A6968`);
      }
else if(session.message.text.toLowerCase().contains('q6967')){session.send(`A6967`);
      }
else if(session.message.text.toLowerCase().contains('q6966')){session.send(`A6966`);
      }
else if(session.message.text.toLowerCase().contains('q6965')){session.send(`A6965`);
      }
else if(session.message.text.toLowerCase().contains('q6964')){session.send(`A6964`);
      }
else if(session.message.text.toLowerCase().contains('q6963')){session.send(`A6963`);
      }
else if(session.message.text.toLowerCase().contains('q6962')){session.send(`A6962`);
      }
else if(session.message.text.toLowerCase().contains('q6961')){session.send(`A6961`);
      }
else if(session.message.text.toLowerCase().contains('q6960')){session.send(`A6960`);
      }
else if(session.message.text.toLowerCase().contains('q6959')){session.send(`A6959`);
      }
else if(session.message.text.toLowerCase().contains('q6958')){session.send(`A6958`);
      }
else if(session.message.text.toLowerCase().contains('q6957')){session.send(`A6957`);
      }
else if(session.message.text.toLowerCase().contains('q6956')){session.send(`A6956`);
      }
else if(session.message.text.toLowerCase().contains('q6955')){session.send(`A6955`);
      }
else if(session.message.text.toLowerCase().contains('q6954')){session.send(`A6954`);
      }
else if(session.message.text.toLowerCase().contains('q6953')){session.send(`A6953`);
      }
else if(session.message.text.toLowerCase().contains('q6952')){session.send(`A6952`);
      }
else if(session.message.text.toLowerCase().contains('q6951')){session.send(`A6951`);
      }
else if(session.message.text.toLowerCase().contains('q6950')){session.send(`A6950`);
      }
else if(session.message.text.toLowerCase().contains('q6949')){session.send(`A6949`);
      }
else if(session.message.text.toLowerCase().contains('q6948')){session.send(`A6948`);
      }
else if(session.message.text.toLowerCase().contains('q6947')){session.send(`A6947`);
      }
else if(session.message.text.toLowerCase().contains('q6946')){session.send(`A6946`);
      }
else if(session.message.text.toLowerCase().contains('q6945')){session.send(`A6945`);
      }
else if(session.message.text.toLowerCase().contains('q6944')){session.send(`A6944`);
      }
else if(session.message.text.toLowerCase().contains('q6943')){session.send(`A6943`);
      }
else if(session.message.text.toLowerCase().contains('q6942')){session.send(`A6942`);
      }
else if(session.message.text.toLowerCase().contains('q6941')){session.send(`A6941`);
      }
else if(session.message.text.toLowerCase().contains('q6940')){session.send(`A6940`);
      }
else if(session.message.text.toLowerCase().contains('q6939')){session.send(`A6939`);
      }
else if(session.message.text.toLowerCase().contains('q6938')){session.send(`A6938`);
      }
else if(session.message.text.toLowerCase().contains('q6937')){session.send(`A6937`);
      }
else if(session.message.text.toLowerCase().contains('q6936')){session.send(`A6936`);
      }
else if(session.message.text.toLowerCase().contains('q6935')){session.send(`A6935`);
      }
else if(session.message.text.toLowerCase().contains('q6934')){session.send(`A6934`);
      }
else if(session.message.text.toLowerCase().contains('q6933')){session.send(`A6933`);
      }
else if(session.message.text.toLowerCase().contains('q6932')){session.send(`A6932`);
      }
else if(session.message.text.toLowerCase().contains('q6931')){session.send(`A6931`);
      }
else if(session.message.text.toLowerCase().contains('q6930')){session.send(`A6930`);
      }
else if(session.message.text.toLowerCase().contains('q6929')){session.send(`A6929`);
      }
else if(session.message.text.toLowerCase().contains('q6928')){session.send(`A6928`);
      }
else if(session.message.text.toLowerCase().contains('q6927')){session.send(`A6927`);
      }
else if(session.message.text.toLowerCase().contains('q6926')){session.send(`A6926`);
      }
else if(session.message.text.toLowerCase().contains('q6925')){session.send(`A6925`);
      }
else if(session.message.text.toLowerCase().contains('q6924')){session.send(`A6924`);
      }
else if(session.message.text.toLowerCase().contains('q6923')){session.send(`A6923`);
      }
else if(session.message.text.toLowerCase().contains('q6922')){session.send(`A6922`);
      }
else if(session.message.text.toLowerCase().contains('q6921')){session.send(`A6921`);
      }
else if(session.message.text.toLowerCase().contains('q6920')){session.send(`A6920`);
      }
else if(session.message.text.toLowerCase().contains('q6919')){session.send(`A6919`);
      }
else if(session.message.text.toLowerCase().contains('q6918')){session.send(`A6918`);
      }
else if(session.message.text.toLowerCase().contains('q6917')){session.send(`A6917`);
      }
else if(session.message.text.toLowerCase().contains('q6916')){session.send(`A6916`);
      }
else if(session.message.text.toLowerCase().contains('q6915')){session.send(`A6915`);
      }
else if(session.message.text.toLowerCase().contains('q6914')){session.send(`A6914`);
      }
else if(session.message.text.toLowerCase().contains('q6913')){session.send(`A6913`);
      }
else if(session.message.text.toLowerCase().contains('q6912')){session.send(`A6912`);
      }
else if(session.message.text.toLowerCase().contains('q6911')){session.send(`A6911`);
      }
else if(session.message.text.toLowerCase().contains('q6910')){session.send(`A6910`);
      }
else if(session.message.text.toLowerCase().contains('q6909')){session.send(`A6909`);
      }
else if(session.message.text.toLowerCase().contains('q6908')){session.send(`A6908`);
      }
else if(session.message.text.toLowerCase().contains('q6907')){session.send(`A6907`);
      }
else if(session.message.text.toLowerCase().contains('q6906')){session.send(`A6906`);
      }
else if(session.message.text.toLowerCase().contains('q6905')){session.send(`A6905`);
      }
else if(session.message.text.toLowerCase().contains('q6904')){session.send(`A6904`);
      }
else if(session.message.text.toLowerCase().contains('q6903')){session.send(`A6903`);
      }
else if(session.message.text.toLowerCase().contains('q6902')){session.send(`A6902`);
      }
else if(session.message.text.toLowerCase().contains('q6901')){session.send(`A6901`);
      }
else if(session.message.text.toLowerCase().contains('q6900')){session.send(`A6900`);
      }
else if(session.message.text.toLowerCase().contains('q6899')){session.send(`A6899`);
      }
else if(session.message.text.toLowerCase().contains('q6898')){session.send(`A6898`);
      }
else if(session.message.text.toLowerCase().contains('q6897')){session.send(`A6897`);
      }
else if(session.message.text.toLowerCase().contains('q6896')){session.send(`A6896`);
      }
else if(session.message.text.toLowerCase().contains('q6895')){session.send(`A6895`);
      }
else if(session.message.text.toLowerCase().contains('q6894')){session.send(`A6894`);
      }
else if(session.message.text.toLowerCase().contains('q6893')){session.send(`A6893`);
      }
else if(session.message.text.toLowerCase().contains('q6892')){session.send(`A6892`);
      }
else if(session.message.text.toLowerCase().contains('q6891')){session.send(`A6891`);
      }
else if(session.message.text.toLowerCase().contains('q6890')){session.send(`A6890`);
      }
else if(session.message.text.toLowerCase().contains('q6889')){session.send(`A6889`);
      }
else if(session.message.text.toLowerCase().contains('q6888')){session.send(`A6888`);
      }
else if(session.message.text.toLowerCase().contains('q6887')){session.send(`A6887`);
      }
else if(session.message.text.toLowerCase().contains('q6886')){session.send(`A6886`);
      }
else if(session.message.text.toLowerCase().contains('q6885')){session.send(`A6885`);
      }
else if(session.message.text.toLowerCase().contains('q6884')){session.send(`A6884`);
      }
else if(session.message.text.toLowerCase().contains('q6883')){session.send(`A6883`);
      }
else if(session.message.text.toLowerCase().contains('q6882')){session.send(`A6882`);
      }
else if(session.message.text.toLowerCase().contains('q6881')){session.send(`A6881`);
      }
else if(session.message.text.toLowerCase().contains('q6880')){session.send(`A6880`);
      }
else if(session.message.text.toLowerCase().contains('q6879')){session.send(`A6879`);
      }
else if(session.message.text.toLowerCase().contains('q6878')){session.send(`A6878`);
      }
else if(session.message.text.toLowerCase().contains('q6877')){session.send(`A6877`);
      }
else if(session.message.text.toLowerCase().contains('q6876')){session.send(`A6876`);
      }
else if(session.message.text.toLowerCase().contains('q6875')){session.send(`A6875`);
      }
else if(session.message.text.toLowerCase().contains('q6874')){session.send(`A6874`);
      }
else if(session.message.text.toLowerCase().contains('q6873')){session.send(`A6873`);
      }
else if(session.message.text.toLowerCase().contains('q6872')){session.send(`A6872`);
      }
else if(session.message.text.toLowerCase().contains('q6871')){session.send(`A6871`);
      }
else if(session.message.text.toLowerCase().contains('q6870')){session.send(`A6870`);
      }
else if(session.message.text.toLowerCase().contains('q6869')){session.send(`A6869`);
      }
else if(session.message.text.toLowerCase().contains('q6868')){session.send(`A6868`);
      }
else if(session.message.text.toLowerCase().contains('q6867')){session.send(`A6867`);
      }
else if(session.message.text.toLowerCase().contains('q6866')){session.send(`A6866`);
      }
else if(session.message.text.toLowerCase().contains('q6865')){session.send(`A6865`);
      }
else if(session.message.text.toLowerCase().contains('q6864')){session.send(`A6864`);
      }
else if(session.message.text.toLowerCase().contains('q6863')){session.send(`A6863`);
      }
else if(session.message.text.toLowerCase().contains('q6862')){session.send(`A6862`);
      }
else if(session.message.text.toLowerCase().contains('q6861')){session.send(`A6861`);
      }
else if(session.message.text.toLowerCase().contains('q6860')){session.send(`A6860`);
      }
else if(session.message.text.toLowerCase().contains('q6859')){session.send(`A6859`);
      }
else if(session.message.text.toLowerCase().contains('q6858')){session.send(`A6858`);
      }
else if(session.message.text.toLowerCase().contains('q6857')){session.send(`A6857`);
      }
else if(session.message.text.toLowerCase().contains('q6856')){session.send(`A6856`);
      }
else if(session.message.text.toLowerCase().contains('q6855')){session.send(`A6855`);
      }
else if(session.message.text.toLowerCase().contains('q6854')){session.send(`A6854`);
      }
else if(session.message.text.toLowerCase().contains('q6853')){session.send(`A6853`);
      }
else if(session.message.text.toLowerCase().contains('q6852')){session.send(`A6852`);
      }
else if(session.message.text.toLowerCase().contains('q6851')){session.send(`A6851`);
      }
else if(session.message.text.toLowerCase().contains('q6850')){session.send(`A6850`);
      }
else if(session.message.text.toLowerCase().contains('q6849')){session.send(`A6849`);
      }
else if(session.message.text.toLowerCase().contains('q6848')){session.send(`A6848`);
      }
else if(session.message.text.toLowerCase().contains('q6847')){session.send(`A6847`);
      }
else if(session.message.text.toLowerCase().contains('q6846')){session.send(`A6846`);
      }
else if(session.message.text.toLowerCase().contains('q6845')){session.send(`A6845`);
      }
else if(session.message.text.toLowerCase().contains('q6844')){session.send(`A6844`);
      }
else if(session.message.text.toLowerCase().contains('q6843')){session.send(`A6843`);
      }
else if(session.message.text.toLowerCase().contains('q6842')){session.send(`A6842`);
      }
else if(session.message.text.toLowerCase().contains('q6841')){session.send(`A6841`);
      }
else if(session.message.text.toLowerCase().contains('q6840')){session.send(`A6840`);
      }
else if(session.message.text.toLowerCase().contains('q6839')){session.send(`A6839`);
      }
else if(session.message.text.toLowerCase().contains('q6838')){session.send(`A6838`);
      }
else if(session.message.text.toLowerCase().contains('q6837')){session.send(`A6837`);
      }
else if(session.message.text.toLowerCase().contains('q6836')){session.send(`A6836`);
      }
else if(session.message.text.toLowerCase().contains('q6835')){session.send(`A6835`);
      }
else if(session.message.text.toLowerCase().contains('q6834')){session.send(`A6834`);
      }
else if(session.message.text.toLowerCase().contains('q6833')){session.send(`A6833`);
      }
else if(session.message.text.toLowerCase().contains('q6832')){session.send(`A6832`);
      }
else if(session.message.text.toLowerCase().contains('q6831')){session.send(`A6831`);
      }
else if(session.message.text.toLowerCase().contains('q6830')){session.send(`A6830`);
      }
else if(session.message.text.toLowerCase().contains('q6829')){session.send(`A6829`);
      }
else if(session.message.text.toLowerCase().contains('q6828')){session.send(`A6828`);
      }
else if(session.message.text.toLowerCase().contains('q6827')){session.send(`A6827`);
      }
else if(session.message.text.toLowerCase().contains('q6826')){session.send(`A6826`);
      }
else if(session.message.text.toLowerCase().contains('q6825')){session.send(`A6825`);
      }
else if(session.message.text.toLowerCase().contains('q6824')){session.send(`A6824`);
      }
else if(session.message.text.toLowerCase().contains('q6823')){session.send(`A6823`);
      }
else if(session.message.text.toLowerCase().contains('q6822')){session.send(`A6822`);
      }
else if(session.message.text.toLowerCase().contains('q6821')){session.send(`A6821`);
      }
else if(session.message.text.toLowerCase().contains('q6820')){session.send(`A6820`);
      }
else if(session.message.text.toLowerCase().contains('q6819')){session.send(`A6819`);
      }
else if(session.message.text.toLowerCase().contains('q6818')){session.send(`A6818`);
      }
else if(session.message.text.toLowerCase().contains('q6817')){session.send(`A6817`);
      }
else if(session.message.text.toLowerCase().contains('q6816')){session.send(`A6816`);
      }
else if(session.message.text.toLowerCase().contains('q6815')){session.send(`A6815`);
      }
else if(session.message.text.toLowerCase().contains('q6814')){session.send(`A6814`);
      }
else if(session.message.text.toLowerCase().contains('q6813')){session.send(`A6813`);
      }
else if(session.message.text.toLowerCase().contains('q6812')){session.send(`A6812`);
      }
else if(session.message.text.toLowerCase().contains('q6811')){session.send(`A6811`);
      }
else if(session.message.text.toLowerCase().contains('q6810')){session.send(`A6810`);
      }
else if(session.message.text.toLowerCase().contains('q6809')){session.send(`A6809`);
      }
else if(session.message.text.toLowerCase().contains('q6808')){session.send(`A6808`);
      }
else if(session.message.text.toLowerCase().contains('q6807')){session.send(`A6807`);
      }
else if(session.message.text.toLowerCase().contains('q6806')){session.send(`A6806`);
      }
else if(session.message.text.toLowerCase().contains('q6805')){session.send(`A6805`);
      }
else if(session.message.text.toLowerCase().contains('q6804')){session.send(`A6804`);
      }
else if(session.message.text.toLowerCase().contains('q6803')){session.send(`A6803`);
      }
else if(session.message.text.toLowerCase().contains('q6802')){session.send(`A6802`);
      }
else if(session.message.text.toLowerCase().contains('q6801')){session.send(`A6801`);
      }
else if(session.message.text.toLowerCase().contains('q6800')){session.send(`A6800`);
      }
else if(session.message.text.toLowerCase().contains('q6799')){session.send(`A6799`);
      }
else if(session.message.text.toLowerCase().contains('q6798')){session.send(`A6798`);
      }
else if(session.message.text.toLowerCase().contains('q6797')){session.send(`A6797`);
      }
else if(session.message.text.toLowerCase().contains('q6796')){session.send(`A6796`);
      }
else if(session.message.text.toLowerCase().contains('q6795')){session.send(`A6795`);
      }
else if(session.message.text.toLowerCase().contains('q6794')){session.send(`A6794`);
      }
else if(session.message.text.toLowerCase().contains('q6793')){session.send(`A6793`);
      }
else if(session.message.text.toLowerCase().contains('q6792')){session.send(`A6792`);
      }
else if(session.message.text.toLowerCase().contains('q6791')){session.send(`A6791`);
      }
else if(session.message.text.toLowerCase().contains('q6790')){session.send(`A6790`);
      }
else if(session.message.text.toLowerCase().contains('q6789')){session.send(`A6789`);
      }
else if(session.message.text.toLowerCase().contains('q6788')){session.send(`A6788`);
      }
else if(session.message.text.toLowerCase().contains('q6787')){session.send(`A6787`);
      }
else if(session.message.text.toLowerCase().contains('q6786')){session.send(`A6786`);
      }
else if(session.message.text.toLowerCase().contains('q6785')){session.send(`A6785`);
      }
else if(session.message.text.toLowerCase().contains('q6784')){session.send(`A6784`);
      }
else if(session.message.text.toLowerCase().contains('q6783')){session.send(`A6783`);
      }
else if(session.message.text.toLowerCase().contains('q6782')){session.send(`A6782`);
      }
else if(session.message.text.toLowerCase().contains('q6781')){session.send(`A6781`);
      }
else if(session.message.text.toLowerCase().contains('q6780')){session.send(`A6780`);
      }
else if(session.message.text.toLowerCase().contains('q6779')){session.send(`A6779`);
      }
else if(session.message.text.toLowerCase().contains('q6778')){session.send(`A6778`);
      }
else if(session.message.text.toLowerCase().contains('q6777')){session.send(`A6777`);
      }
else if(session.message.text.toLowerCase().contains('q6776')){session.send(`A6776`);
      }
else if(session.message.text.toLowerCase().contains('q6775')){session.send(`A6775`);
      }
else if(session.message.text.toLowerCase().contains('q6774')){session.send(`A6774`);
      }
else if(session.message.text.toLowerCase().contains('q6773')){session.send(`A6773`);
      }
else if(session.message.text.toLowerCase().contains('q6772')){session.send(`A6772`);
      }
else if(session.message.text.toLowerCase().contains('q6771')){session.send(`A6771`);
      }
else if(session.message.text.toLowerCase().contains('q6770')){session.send(`A6770`);
      }
else if(session.message.text.toLowerCase().contains('q6769')){session.send(`A6769`);
      }
else if(session.message.text.toLowerCase().contains('q6768')){session.send(`A6768`);
      }
else if(session.message.text.toLowerCase().contains('q6767')){session.send(`A6767`);
      }
else if(session.message.text.toLowerCase().contains('q6766')){session.send(`A6766`);
      }
else if(session.message.text.toLowerCase().contains('q6765')){session.send(`A6765`);
      }
else if(session.message.text.toLowerCase().contains('q6764')){session.send(`A6764`);
      }
else if(session.message.text.toLowerCase().contains('q6763')){session.send(`A6763`);
      }
else if(session.message.text.toLowerCase().contains('q6762')){session.send(`A6762`);
      }
else if(session.message.text.toLowerCase().contains('q6761')){session.send(`A6761`);
      }
else if(session.message.text.toLowerCase().contains('q6760')){session.send(`A6760`);
      }
else if(session.message.text.toLowerCase().contains('q6759')){session.send(`A6759`);
      }
else if(session.message.text.toLowerCase().contains('q6758')){session.send(`A6758`);
      }
else if(session.message.text.toLowerCase().contains('q6757')){session.send(`A6757`);
      }
else if(session.message.text.toLowerCase().contains('q6756')){session.send(`A6756`);
      }
else if(session.message.text.toLowerCase().contains('q6755')){session.send(`A6755`);
      }
else if(session.message.text.toLowerCase().contains('q6754')){session.send(`A6754`);
      }
else if(session.message.text.toLowerCase().contains('q6753')){session.send(`A6753`);
      }
else if(session.message.text.toLowerCase().contains('q6752')){session.send(`A6752`);
      }
else if(session.message.text.toLowerCase().contains('q6751')){session.send(`A6751`);
      }
else if(session.message.text.toLowerCase().contains('q6750')){session.send(`A6750`);
      }
else if(session.message.text.toLowerCase().contains('q6749')){session.send(`A6749`);
      }
else if(session.message.text.toLowerCase().contains('q6748')){session.send(`A6748`);
      }
else if(session.message.text.toLowerCase().contains('q6747')){session.send(`A6747`);
      }
else if(session.message.text.toLowerCase().contains('q6746')){session.send(`A6746`);
      }
else if(session.message.text.toLowerCase().contains('q6745')){session.send(`A6745`);
      }
else if(session.message.text.toLowerCase().contains('q6744')){session.send(`A6744`);
      }
else if(session.message.text.toLowerCase().contains('q6743')){session.send(`A6743`);
      }
else if(session.message.text.toLowerCase().contains('q6742')){session.send(`A6742`);
      }
else if(session.message.text.toLowerCase().contains('q6741')){session.send(`A6741`);
      }
else if(session.message.text.toLowerCase().contains('q6740')){session.send(`A6740`);
      }
else if(session.message.text.toLowerCase().contains('q6739')){session.send(`A6739`);
      }
else if(session.message.text.toLowerCase().contains('q6738')){session.send(`A6738`);
      }
else if(session.message.text.toLowerCase().contains('q6737')){session.send(`A6737`);
      }
else if(session.message.text.toLowerCase().contains('q6736')){session.send(`A6736`);
      }
else if(session.message.text.toLowerCase().contains('q6735')){session.send(`A6735`);
      }
else if(session.message.text.toLowerCase().contains('q6734')){session.send(`A6734`);
      }
else if(session.message.text.toLowerCase().contains('q6733')){session.send(`A6733`);
      }
else if(session.message.text.toLowerCase().contains('q6732')){session.send(`A6732`);
      }
else if(session.message.text.toLowerCase().contains('q6731')){session.send(`A6731`);
      }
else if(session.message.text.toLowerCase().contains('q6730')){session.send(`A6730`);
      }
else if(session.message.text.toLowerCase().contains('q6729')){session.send(`A6729`);
      }
else if(session.message.text.toLowerCase().contains('q6728')){session.send(`A6728`);
      }
else if(session.message.text.toLowerCase().contains('q6727')){session.send(`A6727`);
      }
else if(session.message.text.toLowerCase().contains('q6726')){session.send(`A6726`);
      }
else if(session.message.text.toLowerCase().contains('q6725')){session.send(`A6725`);
      }
else if(session.message.text.toLowerCase().contains('q6724')){session.send(`A6724`);
      }
else if(session.message.text.toLowerCase().contains('q6723')){session.send(`A6723`);
      }
else if(session.message.text.toLowerCase().contains('q6722')){session.send(`A6722`);
      }
else if(session.message.text.toLowerCase().contains('q6721')){session.send(`A6721`);
      }
else if(session.message.text.toLowerCase().contains('q6720')){session.send(`A6720`);
      }
else if(session.message.text.toLowerCase().contains('q6719')){session.send(`A6719`);
      }
else if(session.message.text.toLowerCase().contains('q6718')){session.send(`A6718`);
      }
else if(session.message.text.toLowerCase().contains('q6717')){session.send(`A6717`);
      }
else if(session.message.text.toLowerCase().contains('q6716')){session.send(`A6716`);
      }
else if(session.message.text.toLowerCase().contains('q6715')){session.send(`A6715`);
      }
else if(session.message.text.toLowerCase().contains('q6714')){session.send(`A6714`);
      }
else if(session.message.text.toLowerCase().contains('q6713')){session.send(`A6713`);
      }
else if(session.message.text.toLowerCase().contains('q6712')){session.send(`A6712`);
      }
else if(session.message.text.toLowerCase().contains('q6711')){session.send(`A6711`);
      }
else if(session.message.text.toLowerCase().contains('q6710')){session.send(`A6710`);
      }
else if(session.message.text.toLowerCase().contains('q6709')){session.send(`A6709`);
      }
else if(session.message.text.toLowerCase().contains('q6708')){session.send(`A6708`);
      }
else if(session.message.text.toLowerCase().contains('q6707')){session.send(`A6707`);
      }
else if(session.message.text.toLowerCase().contains('q6706')){session.send(`A6706`);
      }
else if(session.message.text.toLowerCase().contains('q6705')){session.send(`A6705`);
      }
else if(session.message.text.toLowerCase().contains('q6704')){session.send(`A6704`);
      }
else if(session.message.text.toLowerCase().contains('q6703')){session.send(`A6703`);
      }
else if(session.message.text.toLowerCase().contains('q6702')){session.send(`A6702`);
      }
else if(session.message.text.toLowerCase().contains('q6701')){session.send(`A6701`);
      }
else if(session.message.text.toLowerCase().contains('q6700')){session.send(`A6700`);
      }
else if(session.message.text.toLowerCase().contains('q6699')){session.send(`A6699`);
      }
else if(session.message.text.toLowerCase().contains('q6698')){session.send(`A6698`);
      }
else if(session.message.text.toLowerCase().contains('q6697')){session.send(`A6697`);
      }
else if(session.message.text.toLowerCase().contains('q6696')){session.send(`A6696`);
      }
else if(session.message.text.toLowerCase().contains('q6695')){session.send(`A6695`);
      }
else if(session.message.text.toLowerCase().contains('q6694')){session.send(`A6694`);
      }
else if(session.message.text.toLowerCase().contains('q6693')){session.send(`A6693`);
      }
else if(session.message.text.toLowerCase().contains('q6692')){session.send(`A6692`);
      }
else if(session.message.text.toLowerCase().contains('q6691')){session.send(`A6691`);
      }
else if(session.message.text.toLowerCase().contains('q6690')){session.send(`A6690`);
      }
else if(session.message.text.toLowerCase().contains('q6689')){session.send(`A6689`);
      }
else if(session.message.text.toLowerCase().contains('q6688')){session.send(`A6688`);
      }
else if(session.message.text.toLowerCase().contains('q6687')){session.send(`A6687`);
      }
else if(session.message.text.toLowerCase().contains('q6686')){session.send(`A6686`);
      }
else if(session.message.text.toLowerCase().contains('q6685')){session.send(`A6685`);
      }
else if(session.message.text.toLowerCase().contains('q6684')){session.send(`A6684`);
      }
else if(session.message.text.toLowerCase().contains('q6683')){session.send(`A6683`);
      }
else if(session.message.text.toLowerCase().contains('q6682')){session.send(`A6682`);
      }
else if(session.message.text.toLowerCase().contains('q6681')){session.send(`A6681`);
      }
else if(session.message.text.toLowerCase().contains('q6680')){session.send(`A6680`);
      }
else if(session.message.text.toLowerCase().contains('q6679')){session.send(`A6679`);
      }
else if(session.message.text.toLowerCase().contains('q6678')){session.send(`A6678`);
      }
else if(session.message.text.toLowerCase().contains('q6677')){session.send(`A6677`);
      }
else if(session.message.text.toLowerCase().contains('q6676')){session.send(`A6676`);
      }
else if(session.message.text.toLowerCase().contains('q6675')){session.send(`A6675`);
      }
else if(session.message.text.toLowerCase().contains('q6674')){session.send(`A6674`);
      }
else if(session.message.text.toLowerCase().contains('q6673')){session.send(`A6673`);
      }
else if(session.message.text.toLowerCase().contains('q6672')){session.send(`A6672`);
      }
else if(session.message.text.toLowerCase().contains('q6671')){session.send(`A6671`);
      }
else if(session.message.text.toLowerCase().contains('q6670')){session.send(`A6670`);
      }
else if(session.message.text.toLowerCase().contains('q6669')){session.send(`A6669`);
      }
else if(session.message.text.toLowerCase().contains('q6668')){session.send(`A6668`);
      }
else if(session.message.text.toLowerCase().contains('q6667')){session.send(`A6667`);
      }
else if(session.message.text.toLowerCase().contains('q6666')){session.send(`A6666`);
      }
else if(session.message.text.toLowerCase().contains('q6665')){session.send(`A6665`);
      }
else if(session.message.text.toLowerCase().contains('q6664')){session.send(`A6664`);
      }
else if(session.message.text.toLowerCase().contains('q6663')){session.send(`A6663`);
      }
else if(session.message.text.toLowerCase().contains('q6662')){session.send(`A6662`);
      }
else if(session.message.text.toLowerCase().contains('q6661')){session.send(`A6661`);
      }
else if(session.message.text.toLowerCase().contains('q6660')){session.send(`A6660`);
      }
else if(session.message.text.toLowerCase().contains('q6659')){session.send(`A6659`);
      }
else if(session.message.text.toLowerCase().contains('q6658')){session.send(`A6658`);
      }
else if(session.message.text.toLowerCase().contains('q6657')){session.send(`A6657`);
      }
else if(session.message.text.toLowerCase().contains('q6656')){session.send(`A6656`);
      }
else if(session.message.text.toLowerCase().contains('q6655')){session.send(`A6655`);
      }
else if(session.message.text.toLowerCase().contains('q6654')){session.send(`A6654`);
      }
else if(session.message.text.toLowerCase().contains('q6653')){session.send(`A6653`);
      }
else if(session.message.text.toLowerCase().contains('q6652')){session.send(`A6652`);
      }
else if(session.message.text.toLowerCase().contains('q6651')){session.send(`A6651`);
      }
else if(session.message.text.toLowerCase().contains('q6650')){session.send(`A6650`);
      }
else if(session.message.text.toLowerCase().contains('q6649')){session.send(`A6649`);
      }
else if(session.message.text.toLowerCase().contains('q6648')){session.send(`A6648`);
      }
else if(session.message.text.toLowerCase().contains('q6647')){session.send(`A6647`);
      }
else if(session.message.text.toLowerCase().contains('q6646')){session.send(`A6646`);
      }
else if(session.message.text.toLowerCase().contains('q6645')){session.send(`A6645`);
      }
else if(session.message.text.toLowerCase().contains('q6644')){session.send(`A6644`);
      }
else if(session.message.text.toLowerCase().contains('q6643')){session.send(`A6643`);
      }
else if(session.message.text.toLowerCase().contains('q6642')){session.send(`A6642`);
      }
else if(session.message.text.toLowerCase().contains('q6641')){session.send(`A6641`);
      }
else if(session.message.text.toLowerCase().contains('q6640')){session.send(`A6640`);
      }
else if(session.message.text.toLowerCase().contains('q6639')){session.send(`A6639`);
      }
else if(session.message.text.toLowerCase().contains('q6638')){session.send(`A6638`);
      }
else if(session.message.text.toLowerCase().contains('q6637')){session.send(`A6637`);
      }
else if(session.message.text.toLowerCase().contains('q6636')){session.send(`A6636`);
      }
else if(session.message.text.toLowerCase().contains('q6635')){session.send(`A6635`);
      }
else if(session.message.text.toLowerCase().contains('q6634')){session.send(`A6634`);
      }
else if(session.message.text.toLowerCase().contains('q6633')){session.send(`A6633`);
      }
else if(session.message.text.toLowerCase().contains('q6632')){session.send(`A6632`);
      }
else if(session.message.text.toLowerCase().contains('q6631')){session.send(`A6631`);
      }
else if(session.message.text.toLowerCase().contains('q6630')){session.send(`A6630`);
      }
else if(session.message.text.toLowerCase().contains('q6629')){session.send(`A6629`);
      }
else if(session.message.text.toLowerCase().contains('q6628')){session.send(`A6628`);
      }
else if(session.message.text.toLowerCase().contains('q6627')){session.send(`A6627`);
      }
else if(session.message.text.toLowerCase().contains('q6626')){session.send(`A6626`);
      }
else if(session.message.text.toLowerCase().contains('q6625')){session.send(`A6625`);
      }
else if(session.message.text.toLowerCase().contains('q6624')){session.send(`A6624`);
      }
else if(session.message.text.toLowerCase().contains('q6623')){session.send(`A6623`);
      }
else if(session.message.text.toLowerCase().contains('q6622')){session.send(`A6622`);
      }
else if(session.message.text.toLowerCase().contains('q6621')){session.send(`A6621`);
      }
else if(session.message.text.toLowerCase().contains('q6620')){session.send(`A6620`);
      }
else if(session.message.text.toLowerCase().contains('q6619')){session.send(`A6619`);
      }
else if(session.message.text.toLowerCase().contains('q6618')){session.send(`A6618`);
      }
else if(session.message.text.toLowerCase().contains('q6617')){session.send(`A6617`);
      }
else if(session.message.text.toLowerCase().contains('q6616')){session.send(`A6616`);
      }
else if(session.message.text.toLowerCase().contains('q6615')){session.send(`A6615`);
      }
else if(session.message.text.toLowerCase().contains('q6614')){session.send(`A6614`);
      }
else if(session.message.text.toLowerCase().contains('q6613')){session.send(`A6613`);
      }
else if(session.message.text.toLowerCase().contains('q6612')){session.send(`A6612`);
      }
else if(session.message.text.toLowerCase().contains('q6611')){session.send(`A6611`);
      }
else if(session.message.text.toLowerCase().contains('q6610')){session.send(`A6610`);
      }
else if(session.message.text.toLowerCase().contains('q6609')){session.send(`A6609`);
      }
else if(session.message.text.toLowerCase().contains('q6608')){session.send(`A6608`);
      }
else if(session.message.text.toLowerCase().contains('q6607')){session.send(`A6607`);
      }
else if(session.message.text.toLowerCase().contains('q6606')){session.send(`A6606`);
      }
else if(session.message.text.toLowerCase().contains('q6605')){session.send(`A6605`);
      }
else if(session.message.text.toLowerCase().contains('q6604')){session.send(`A6604`);
      }
else if(session.message.text.toLowerCase().contains('q6603')){session.send(`A6603`);
      }
else if(session.message.text.toLowerCase().contains('q6602')){session.send(`A6602`);
      }
else if(session.message.text.toLowerCase().contains('q6601')){session.send(`A6601`);
      }
else if(session.message.text.toLowerCase().contains('q6600')){session.send(`A6600`);
      }
else if(session.message.text.toLowerCase().contains('q6599')){session.send(`A6599`);
      }
else if(session.message.text.toLowerCase().contains('q6598')){session.send(`A6598`);
      }
else if(session.message.text.toLowerCase().contains('q6597')){session.send(`A6597`);
      }
else if(session.message.text.toLowerCase().contains('q6596')){session.send(`A6596`);
      }
else if(session.message.text.toLowerCase().contains('q6595')){session.send(`A6595`);
      }
else if(session.message.text.toLowerCase().contains('q6594')){session.send(`A6594`);
      }
else if(session.message.text.toLowerCase().contains('q6593')){session.send(`A6593`);
      }
else if(session.message.text.toLowerCase().contains('q6592')){session.send(`A6592`);
      }
else if(session.message.text.toLowerCase().contains('q6591')){session.send(`A6591`);
      }
else if(session.message.text.toLowerCase().contains('q6590')){session.send(`A6590`);
      }
else if(session.message.text.toLowerCase().contains('q6589')){session.send(`A6589`);
      }
else if(session.message.text.toLowerCase().contains('q6588')){session.send(`A6588`);
      }
else if(session.message.text.toLowerCase().contains('q6587')){session.send(`A6587`);
      }
else if(session.message.text.toLowerCase().contains('q6586')){session.send(`A6586`);
      }
else if(session.message.text.toLowerCase().contains('q6585')){session.send(`A6585`);
      }
else if(session.message.text.toLowerCase().contains('q6584')){session.send(`A6584`);
      }
else if(session.message.text.toLowerCase().contains('q6583')){session.send(`A6583`);
      }
else if(session.message.text.toLowerCase().contains('q6582')){session.send(`A6582`);
      }
else if(session.message.text.toLowerCase().contains('q6581')){session.send(`A6581`);
      }
else if(session.message.text.toLowerCase().contains('q6580')){session.send(`A6580`);
      }
else if(session.message.text.toLowerCase().contains('q6579')){session.send(`A6579`);
      }
else if(session.message.text.toLowerCase().contains('q6578')){session.send(`A6578`);
      }
else if(session.message.text.toLowerCase().contains('q6577')){session.send(`A6577`);
      }
else if(session.message.text.toLowerCase().contains('q6576')){session.send(`A6576`);
      }
else if(session.message.text.toLowerCase().contains('q6575')){session.send(`A6575`);
      }
else if(session.message.text.toLowerCase().contains('q6574')){session.send(`A6574`);
      }
else if(session.message.text.toLowerCase().contains('q6573')){session.send(`A6573`);
      }
else if(session.message.text.toLowerCase().contains('q6572')){session.send(`A6572`);
      }
else if(session.message.text.toLowerCase().contains('q6571')){session.send(`A6571`);
      }
else if(session.message.text.toLowerCase().contains('q6570')){session.send(`A6570`);
      }
else if(session.message.text.toLowerCase().contains('q6569')){session.send(`A6569`);
      }
else if(session.message.text.toLowerCase().contains('q6568')){session.send(`A6568`);
      }
else if(session.message.text.toLowerCase().contains('q6567')){session.send(`A6567`);
      }
else if(session.message.text.toLowerCase().contains('q6566')){session.send(`A6566`);
      }
else if(session.message.text.toLowerCase().contains('q6565')){session.send(`A6565`);
      }
else if(session.message.text.toLowerCase().contains('q6564')){session.send(`A6564`);
      }
else if(session.message.text.toLowerCase().contains('q6563')){session.send(`A6563`);
      }
else if(session.message.text.toLowerCase().contains('q6562')){session.send(`A6562`);
      }
else if(session.message.text.toLowerCase().contains('q6561')){session.send(`A6561`);
      }
else if(session.message.text.toLowerCase().contains('q6560')){session.send(`A6560`);
      }
else if(session.message.text.toLowerCase().contains('q6559')){session.send(`A6559`);
      }
else if(session.message.text.toLowerCase().contains('q6558')){session.send(`A6558`);
      }
else if(session.message.text.toLowerCase().contains('q6557')){session.send(`A6557`);
      }
else if(session.message.text.toLowerCase().contains('q6556')){session.send(`A6556`);
      }
else if(session.message.text.toLowerCase().contains('q6555')){session.send(`A6555`);
      }
else if(session.message.text.toLowerCase().contains('q6554')){session.send(`A6554`);
      }
else if(session.message.text.toLowerCase().contains('q6553')){session.send(`A6553`);
      }
else if(session.message.text.toLowerCase().contains('q6552')){session.send(`A6552`);
      }
else if(session.message.text.toLowerCase().contains('q6551')){session.send(`A6551`);
      }
else if(session.message.text.toLowerCase().contains('q6550')){session.send(`A6550`);
      }
else if(session.message.text.toLowerCase().contains('q6549')){session.send(`A6549`);
      }
else if(session.message.text.toLowerCase().contains('q6548')){session.send(`A6548`);
      }
else if(session.message.text.toLowerCase().contains('q6547')){session.send(`A6547`);
      }
else if(session.message.text.toLowerCase().contains('q6546')){session.send(`A6546`);
      }
else if(session.message.text.toLowerCase().contains('q6545')){session.send(`A6545`);
      }
else if(session.message.text.toLowerCase().contains('q6544')){session.send(`A6544`);
      }
else if(session.message.text.toLowerCase().contains('q6543')){session.send(`A6543`);
      }
else if(session.message.text.toLowerCase().contains('q6542')){session.send(`A6542`);
      }
else if(session.message.text.toLowerCase().contains('q6541')){session.send(`A6541`);
      }
else if(session.message.text.toLowerCase().contains('q6540')){session.send(`A6540`);
      }
else if(session.message.text.toLowerCase().contains('q6539')){session.send(`A6539`);
      }
else if(session.message.text.toLowerCase().contains('q6538')){session.send(`A6538`);
      }
else if(session.message.text.toLowerCase().contains('q6537')){session.send(`A6537`);
      }
else if(session.message.text.toLowerCase().contains('q6536')){session.send(`A6536`);
      }
else if(session.message.text.toLowerCase().contains('q6535')){session.send(`A6535`);
      }
else if(session.message.text.toLowerCase().contains('q6534')){session.send(`A6534`);
      }
else if(session.message.text.toLowerCase().contains('q6533')){session.send(`A6533`);
      }
else if(session.message.text.toLowerCase().contains('q6532')){session.send(`A6532`);
      }
else if(session.message.text.toLowerCase().contains('q6531')){session.send(`A6531`);
      }
else if(session.message.text.toLowerCase().contains('q6530')){session.send(`A6530`);
      }
else if(session.message.text.toLowerCase().contains('q6529')){session.send(`A6529`);
      }
else if(session.message.text.toLowerCase().contains('q6528')){session.send(`A6528`);
      }
else if(session.message.text.toLowerCase().contains('q6527')){session.send(`A6527`);
      }
else if(session.message.text.toLowerCase().contains('q6526')){session.send(`A6526`);
      }
else if(session.message.text.toLowerCase().contains('q6525')){session.send(`A6525`);
      }
else if(session.message.text.toLowerCase().contains('q6524')){session.send(`A6524`);
      }
else if(session.message.text.toLowerCase().contains('q6523')){session.send(`A6523`);
      }
else if(session.message.text.toLowerCase().contains('q6522')){session.send(`A6522`);
      }
else if(session.message.text.toLowerCase().contains('q6521')){session.send(`A6521`);
      }
else if(session.message.text.toLowerCase().contains('q6520')){session.send(`A6520`);
      }
else if(session.message.text.toLowerCase().contains('q6519')){session.send(`A6519`);
      }
else if(session.message.text.toLowerCase().contains('q6518')){session.send(`A6518`);
      }
else if(session.message.text.toLowerCase().contains('q6517')){session.send(`A6517`);
      }
else if(session.message.text.toLowerCase().contains('q6516')){session.send(`A6516`);
      }
else if(session.message.text.toLowerCase().contains('q6515')){session.send(`A6515`);
      }
else if(session.message.text.toLowerCase().contains('q6514')){session.send(`A6514`);
      }
else if(session.message.text.toLowerCase().contains('q6513')){session.send(`A6513`);
      }
else if(session.message.text.toLowerCase().contains('q6512')){session.send(`A6512`);
      }
else if(session.message.text.toLowerCase().contains('q6511')){session.send(`A6511`);
      }
else if(session.message.text.toLowerCase().contains('q6510')){session.send(`A6510`);
      }
else if(session.message.text.toLowerCase().contains('q6509')){session.send(`A6509`);
      }
else if(session.message.text.toLowerCase().contains('q6508')){session.send(`A6508`);
      }
else if(session.message.text.toLowerCase().contains('q6507')){session.send(`A6507`);
      }
else if(session.message.text.toLowerCase().contains('q6506')){session.send(`A6506`);
      }
else if(session.message.text.toLowerCase().contains('q6505')){session.send(`A6505`);
      }
else if(session.message.text.toLowerCase().contains('q6504')){session.send(`A6504`);
      }
else if(session.message.text.toLowerCase().contains('q6503')){session.send(`A6503`);
      }
else if(session.message.text.toLowerCase().contains('q6502')){session.send(`A6502`);
      }
else if(session.message.text.toLowerCase().contains('q6501')){session.send(`A6501`);
      }
else if(session.message.text.toLowerCase().contains('q6500')){session.send(`A6500`);
      }
else if(session.message.text.toLowerCase().contains('q6499')){session.send(`A6499`);
      }
else if(session.message.text.toLowerCase().contains('q6498')){session.send(`A6498`);
      }
else if(session.message.text.toLowerCase().contains('q6497')){session.send(`A6497`);
      }
else if(session.message.text.toLowerCase().contains('q6496')){session.send(`A6496`);
      }
else if(session.message.text.toLowerCase().contains('q6495')){session.send(`A6495`);
      }
else if(session.message.text.toLowerCase().contains('q6494')){session.send(`A6494`);
      }
else if(session.message.text.toLowerCase().contains('q6493')){session.send(`A6493`);
      }
else if(session.message.text.toLowerCase().contains('q6492')){session.send(`A6492`);
      }
else if(session.message.text.toLowerCase().contains('q6491')){session.send(`A6491`);
      }
else if(session.message.text.toLowerCase().contains('q6490')){session.send(`A6490`);
      }
else if(session.message.text.toLowerCase().contains('q6489')){session.send(`A6489`);
      }
else if(session.message.text.toLowerCase().contains('q6488')){session.send(`A6488`);
      }
else if(session.message.text.toLowerCase().contains('q6487')){session.send(`A6487`);
      }
else if(session.message.text.toLowerCase().contains('q6486')){session.send(`A6486`);
      }
else if(session.message.text.toLowerCase().contains('q6485')){session.send(`A6485`);
      }
else if(session.message.text.toLowerCase().contains('q6484')){session.send(`A6484`);
      }
else if(session.message.text.toLowerCase().contains('q6483')){session.send(`A6483`);
      }
else if(session.message.text.toLowerCase().contains('q6482')){session.send(`A6482`);
      }
else if(session.message.text.toLowerCase().contains('q6481')){session.send(`A6481`);
      }
else if(session.message.text.toLowerCase().contains('q6480')){session.send(`A6480`);
      }
else if(session.message.text.toLowerCase().contains('q6479')){session.send(`A6479`);
      }
else if(session.message.text.toLowerCase().contains('q6478')){session.send(`A6478`);
      }
else if(session.message.text.toLowerCase().contains('q6477')){session.send(`A6477`);
      }
else if(session.message.text.toLowerCase().contains('q6476')){session.send(`A6476`);
      }
else if(session.message.text.toLowerCase().contains('q6475')){session.send(`A6475`);
      }
else if(session.message.text.toLowerCase().contains('q6474')){session.send(`A6474`);
      }
else if(session.message.text.toLowerCase().contains('q6473')){session.send(`A6473`);
      }
else if(session.message.text.toLowerCase().contains('q6472')){session.send(`A6472`);
      }
else if(session.message.text.toLowerCase().contains('q6471')){session.send(`A6471`);
      }
else if(session.message.text.toLowerCase().contains('q6470')){session.send(`A6470`);
      }
else if(session.message.text.toLowerCase().contains('q6469')){session.send(`A6469`);
      }
else if(session.message.text.toLowerCase().contains('q6468')){session.send(`A6468`);
      }
else if(session.message.text.toLowerCase().contains('q6467')){session.send(`A6467`);
      }
else if(session.message.text.toLowerCase().contains('q6466')){session.send(`A6466`);
      }
else if(session.message.text.toLowerCase().contains('q6465')){session.send(`A6465`);
      }
else if(session.message.text.toLowerCase().contains('q6464')){session.send(`A6464`);
      }
else if(session.message.text.toLowerCase().contains('q6463')){session.send(`A6463`);
      }
else if(session.message.text.toLowerCase().contains('q6462')){session.send(`A6462`);
      }
else if(session.message.text.toLowerCase().contains('q6461')){session.send(`A6461`);
      }
else if(session.message.text.toLowerCase().contains('q6460')){session.send(`A6460`);
      }
else if(session.message.text.toLowerCase().contains('q6459')){session.send(`A6459`);
      }
else if(session.message.text.toLowerCase().contains('q6458')){session.send(`A6458`);
      }
else if(session.message.text.toLowerCase().contains('q6457')){session.send(`A6457`);
      }
else if(session.message.text.toLowerCase().contains('q6456')){session.send(`A6456`);
      }
else if(session.message.text.toLowerCase().contains('q6455')){session.send(`A6455`);
      }
else if(session.message.text.toLowerCase().contains('q6454')){session.send(`A6454`);
      }
else if(session.message.text.toLowerCase().contains('q6453')){session.send(`A6453`);
      }
else if(session.message.text.toLowerCase().contains('q6452')){session.send(`A6452`);
      }
else if(session.message.text.toLowerCase().contains('q6451')){session.send(`A6451`);
      }
else if(session.message.text.toLowerCase().contains('q6450')){session.send(`A6450`);
      }
else if(session.message.text.toLowerCase().contains('q6449')){session.send(`A6449`);
      }
else if(session.message.text.toLowerCase().contains('q6448')){session.send(`A6448`);
      }
else if(session.message.text.toLowerCase().contains('q6447')){session.send(`A6447`);
      }
else if(session.message.text.toLowerCase().contains('q6446')){session.send(`A6446`);
      }
else if(session.message.text.toLowerCase().contains('q6445')){session.send(`A6445`);
      }
else if(session.message.text.toLowerCase().contains('q6444')){session.send(`A6444`);
      }
else if(session.message.text.toLowerCase().contains('q6443')){session.send(`A6443`);
      }
else if(session.message.text.toLowerCase().contains('q6442')){session.send(`A6442`);
      }
else if(session.message.text.toLowerCase().contains('q6441')){session.send(`A6441`);
      }
else if(session.message.text.toLowerCase().contains('q6440')){session.send(`A6440`);
      }
else if(session.message.text.toLowerCase().contains('q6439')){session.send(`A6439`);
      }
else if(session.message.text.toLowerCase().contains('q6438')){session.send(`A6438`);
      }
else if(session.message.text.toLowerCase().contains('q6437')){session.send(`A6437`);
      }
else if(session.message.text.toLowerCase().contains('q6436')){session.send(`A6436`);
      }
else if(session.message.text.toLowerCase().contains('q6435')){session.send(`A6435`);
      }
else if(session.message.text.toLowerCase().contains('q6434')){session.send(`A6434`);
      }
else if(session.message.text.toLowerCase().contains('q6433')){session.send(`A6433`);
      }
else if(session.message.text.toLowerCase().contains('q6432')){session.send(`A6432`);
      }
else if(session.message.text.toLowerCase().contains('q6431')){session.send(`A6431`);
      }
else if(session.message.text.toLowerCase().contains('q6430')){session.send(`A6430`);
      }
else if(session.message.text.toLowerCase().contains('q6429')){session.send(`A6429`);
      }
else if(session.message.text.toLowerCase().contains('q6428')){session.send(`A6428`);
      }
else if(session.message.text.toLowerCase().contains('q6427')){session.send(`A6427`);
      }
else if(session.message.text.toLowerCase().contains('q6426')){session.send(`A6426`);
      }
else if(session.message.text.toLowerCase().contains('q6425')){session.send(`A6425`);
      }
else if(session.message.text.toLowerCase().contains('q6424')){session.send(`A6424`);
      }
else if(session.message.text.toLowerCase().contains('q6423')){session.send(`A6423`);
      }
else if(session.message.text.toLowerCase().contains('q6422')){session.send(`A6422`);
      }
else if(session.message.text.toLowerCase().contains('q6421')){session.send(`A6421`);
      }
else if(session.message.text.toLowerCase().contains('q6420')){session.send(`A6420`);
      }
else if(session.message.text.toLowerCase().contains('q6419')){session.send(`A6419`);
      }
else if(session.message.text.toLowerCase().contains('q6418')){session.send(`A6418`);
      }
else if(session.message.text.toLowerCase().contains('q6417')){session.send(`A6417`);
      }
else if(session.message.text.toLowerCase().contains('q6416')){session.send(`A6416`);
      }
else if(session.message.text.toLowerCase().contains('q6415')){session.send(`A6415`);
      }
else if(session.message.text.toLowerCase().contains('q6414')){session.send(`A6414`);
      }
else if(session.message.text.toLowerCase().contains('q6413')){session.send(`A6413`);
      }
else if(session.message.text.toLowerCase().contains('q6412')){session.send(`A6412`);
      }
else if(session.message.text.toLowerCase().contains('q6411')){session.send(`A6411`);
      }
else if(session.message.text.toLowerCase().contains('q6410')){session.send(`A6410`);
      }
else if(session.message.text.toLowerCase().contains('q6409')){session.send(`A6409`);
      }
else if(session.message.text.toLowerCase().contains('q6408')){session.send(`A6408`);
      }
else if(session.message.text.toLowerCase().contains('q6407')){session.send(`A6407`);
      }
else if(session.message.text.toLowerCase().contains('q6406')){session.send(`A6406`);
      }
else if(session.message.text.toLowerCase().contains('q6405')){session.send(`A6405`);
      }
else if(session.message.text.toLowerCase().contains('q6404')){session.send(`A6404`);
      }
else if(session.message.text.toLowerCase().contains('q6403')){session.send(`A6403`);
      }
else if(session.message.text.toLowerCase().contains('q6402')){session.send(`A6402`);
      }
else if(session.message.text.toLowerCase().contains('q6401')){session.send(`A6401`);
      }
else if(session.message.text.toLowerCase().contains('q6400')){session.send(`A6400`);
      }
else if(session.message.text.toLowerCase().contains('q6399')){session.send(`A6399`);
      }
else if(session.message.text.toLowerCase().contains('q6398')){session.send(`A6398`);
      }
else if(session.message.text.toLowerCase().contains('q6397')){session.send(`A6397`);
      }
else if(session.message.text.toLowerCase().contains('q6396')){session.send(`A6396`);
      }
else if(session.message.text.toLowerCase().contains('q6395')){session.send(`A6395`);
      }
else if(session.message.text.toLowerCase().contains('q6394')){session.send(`A6394`);
      }
else if(session.message.text.toLowerCase().contains('q6393')){session.send(`A6393`);
      }
else if(session.message.text.toLowerCase().contains('q6392')){session.send(`A6392`);
      }
else if(session.message.text.toLowerCase().contains('q6391')){session.send(`A6391`);
      }
else if(session.message.text.toLowerCase().contains('q6390')){session.send(`A6390`);
      }
else if(session.message.text.toLowerCase().contains('q6389')){session.send(`A6389`);
      }
else if(session.message.text.toLowerCase().contains('q6388')){session.send(`A6388`);
      }
else if(session.message.text.toLowerCase().contains('q6387')){session.send(`A6387`);
      }
else if(session.message.text.toLowerCase().contains('q6386')){session.send(`A6386`);
      }
else if(session.message.text.toLowerCase().contains('q6385')){session.send(`A6385`);
      }
else if(session.message.text.toLowerCase().contains('q6384')){session.send(`A6384`);
      }
else if(session.message.text.toLowerCase().contains('q6383')){session.send(`A6383`);
      }
else if(session.message.text.toLowerCase().contains('q6382')){session.send(`A6382`);
      }
else if(session.message.text.toLowerCase().contains('q6381')){session.send(`A6381`);
      }
else if(session.message.text.toLowerCase().contains('q6380')){session.send(`A6380`);
      }
else if(session.message.text.toLowerCase().contains('q6379')){session.send(`A6379`);
      }
else if(session.message.text.toLowerCase().contains('q6378')){session.send(`A6378`);
      }
else if(session.message.text.toLowerCase().contains('q6377')){session.send(`A6377`);
      }
else if(session.message.text.toLowerCase().contains('q6376')){session.send(`A6376`);
      }
else if(session.message.text.toLowerCase().contains('q6375')){session.send(`A6375`);
      }
else if(session.message.text.toLowerCase().contains('q6374')){session.send(`A6374`);
      }
else if(session.message.text.toLowerCase().contains('q6373')){session.send(`A6373`);
      }
else if(session.message.text.toLowerCase().contains('q6372')){session.send(`A6372`);
      }
else if(session.message.text.toLowerCase().contains('q6371')){session.send(`A6371`);
      }
else if(session.message.text.toLowerCase().contains('q6370')){session.send(`A6370`);
      }
else if(session.message.text.toLowerCase().contains('q6369')){session.send(`A6369`);
      }
else if(session.message.text.toLowerCase().contains('q6368')){session.send(`A6368`);
      }
else if(session.message.text.toLowerCase().contains('q6367')){session.send(`A6367`);
      }
else if(session.message.text.toLowerCase().contains('q6366')){session.send(`A6366`);
      }
else if(session.message.text.toLowerCase().contains('q6365')){session.send(`A6365`);
      }
else if(session.message.text.toLowerCase().contains('q6364')){session.send(`A6364`);
      }
else if(session.message.text.toLowerCase().contains('q6363')){session.send(`A6363`);
      }
else if(session.message.text.toLowerCase().contains('q6362')){session.send(`A6362`);
      }
else if(session.message.text.toLowerCase().contains('q6361')){session.send(`A6361`);
      }
else if(session.message.text.toLowerCase().contains('q6360')){session.send(`A6360`);
      }
else if(session.message.text.toLowerCase().contains('q6359')){session.send(`A6359`);
      }
else if(session.message.text.toLowerCase().contains('q6358')){session.send(`A6358`);
      }
else if(session.message.text.toLowerCase().contains('q6357')){session.send(`A6357`);
      }
else if(session.message.text.toLowerCase().contains('q6356')){session.send(`A6356`);
      }
else if(session.message.text.toLowerCase().contains('q6355')){session.send(`A6355`);
      }
else if(session.message.text.toLowerCase().contains('q6354')){session.send(`A6354`);
      }
else if(session.message.text.toLowerCase().contains('q6353')){session.send(`A6353`);
      }
else if(session.message.text.toLowerCase().contains('q6352')){session.send(`A6352`);
      }
else if(session.message.text.toLowerCase().contains('q6351')){session.send(`A6351`);
      }
else if(session.message.text.toLowerCase().contains('q6350')){session.send(`A6350`);
      }
else if(session.message.text.toLowerCase().contains('q6349')){session.send(`A6349`);
      }
else if(session.message.text.toLowerCase().contains('q6348')){session.send(`A6348`);
      }
else if(session.message.text.toLowerCase().contains('q6347')){session.send(`A6347`);
      }
else if(session.message.text.toLowerCase().contains('q6346')){session.send(`A6346`);
      }
else if(session.message.text.toLowerCase().contains('q6345')){session.send(`A6345`);
      }
else if(session.message.text.toLowerCase().contains('q6344')){session.send(`A6344`);
      }
else if(session.message.text.toLowerCase().contains('q6343')){session.send(`A6343`);
      }
else if(session.message.text.toLowerCase().contains('q6342')){session.send(`A6342`);
      }
else if(session.message.text.toLowerCase().contains('q6341')){session.send(`A6341`);
      }
else if(session.message.text.toLowerCase().contains('q6340')){session.send(`A6340`);
      }
else if(session.message.text.toLowerCase().contains('q6339')){session.send(`A6339`);
      }
else if(session.message.text.toLowerCase().contains('q6338')){session.send(`A6338`);
      }
else if(session.message.text.toLowerCase().contains('q6337')){session.send(`A6337`);
      }
else if(session.message.text.toLowerCase().contains('q6336')){session.send(`A6336`);
      }
else if(session.message.text.toLowerCase().contains('q6335')){session.send(`A6335`);
      }
else if(session.message.text.toLowerCase().contains('q6334')){session.send(`A6334`);
      }
else if(session.message.text.toLowerCase().contains('q6333')){session.send(`A6333`);
      }
else if(session.message.text.toLowerCase().contains('q6332')){session.send(`A6332`);
      }
else if(session.message.text.toLowerCase().contains('q6331')){session.send(`A6331`);
      }
else if(session.message.text.toLowerCase().contains('q6330')){session.send(`A6330`);
      }
else if(session.message.text.toLowerCase().contains('q6329')){session.send(`A6329`);
      }
else if(session.message.text.toLowerCase().contains('q6328')){session.send(`A6328`);
      }
else if(session.message.text.toLowerCase().contains('q6327')){session.send(`A6327`);
      }
else if(session.message.text.toLowerCase().contains('q6326')){session.send(`A6326`);
      }
else if(session.message.text.toLowerCase().contains('q6325')){session.send(`A6325`);
      }
else if(session.message.text.toLowerCase().contains('q6324')){session.send(`A6324`);
      }
else if(session.message.text.toLowerCase().contains('q6323')){session.send(`A6323`);
      }
else if(session.message.text.toLowerCase().contains('q6322')){session.send(`A6322`);
      }
else if(session.message.text.toLowerCase().contains('q6321')){session.send(`A6321`);
      }
else if(session.message.text.toLowerCase().contains('q6320')){session.send(`A6320`);
      }
else if(session.message.text.toLowerCase().contains('q6319')){session.send(`A6319`);
      }
else if(session.message.text.toLowerCase().contains('q6318')){session.send(`A6318`);
      }
else if(session.message.text.toLowerCase().contains('q6317')){session.send(`A6317`);
      }
else if(session.message.text.toLowerCase().contains('q6316')){session.send(`A6316`);
      }
else if(session.message.text.toLowerCase().contains('q6315')){session.send(`A6315`);
      }
else if(session.message.text.toLowerCase().contains('q6314')){session.send(`A6314`);
      }
else if(session.message.text.toLowerCase().contains('q6313')){session.send(`A6313`);
      }
else if(session.message.text.toLowerCase().contains('q6312')){session.send(`A6312`);
      }
else if(session.message.text.toLowerCase().contains('q6311')){session.send(`A6311`);
      }
else if(session.message.text.toLowerCase().contains('q6310')){session.send(`A6310`);
      }
else if(session.message.text.toLowerCase().contains('q6309')){session.send(`A6309`);
      }
else if(session.message.text.toLowerCase().contains('q6308')){session.send(`A6308`);
      }
else if(session.message.text.toLowerCase().contains('q6307')){session.send(`A6307`);
      }
else if(session.message.text.toLowerCase().contains('q6306')){session.send(`A6306`);
      }
else if(session.message.text.toLowerCase().contains('q6305')){session.send(`A6305`);
      }
else if(session.message.text.toLowerCase().contains('q6304')){session.send(`A6304`);
      }
else if(session.message.text.toLowerCase().contains('q6303')){session.send(`A6303`);
      }
else if(session.message.text.toLowerCase().contains('q6302')){session.send(`A6302`);
      }
else if(session.message.text.toLowerCase().contains('q6301')){session.send(`A6301`);
      }
else if(session.message.text.toLowerCase().contains('q6300')){session.send(`A6300`);
      }
else if(session.message.text.toLowerCase().contains('q6299')){session.send(`A6299`);
      }
else if(session.message.text.toLowerCase().contains('q6298')){session.send(`A6298`);
      }
else if(session.message.text.toLowerCase().contains('q6297')){session.send(`A6297`);
      }
else if(session.message.text.toLowerCase().contains('q6296')){session.send(`A6296`);
      }
else if(session.message.text.toLowerCase().contains('q6295')){session.send(`A6295`);
      }
else if(session.message.text.toLowerCase().contains('q6294')){session.send(`A6294`);
      }
else if(session.message.text.toLowerCase().contains('q6293')){session.send(`A6293`);
      }
else if(session.message.text.toLowerCase().contains('q6292')){session.send(`A6292`);
      }
else if(session.message.text.toLowerCase().contains('q6291')){session.send(`A6291`);
      }
else if(session.message.text.toLowerCase().contains('q6290')){session.send(`A6290`);
      }
else if(session.message.text.toLowerCase().contains('q6289')){session.send(`A6289`);
      }
else if(session.message.text.toLowerCase().contains('q6288')){session.send(`A6288`);
      }
else if(session.message.text.toLowerCase().contains('q6287')){session.send(`A6287`);
      }
else if(session.message.text.toLowerCase().contains('q6286')){session.send(`A6286`);
      }
else if(session.message.text.toLowerCase().contains('q6285')){session.send(`A6285`);
      }
else if(session.message.text.toLowerCase().contains('q6284')){session.send(`A6284`);
      }
else if(session.message.text.toLowerCase().contains('q6283')){session.send(`A6283`);
      }
else if(session.message.text.toLowerCase().contains('q6282')){session.send(`A6282`);
      }
else if(session.message.text.toLowerCase().contains('q6281')){session.send(`A6281`);
      }
else if(session.message.text.toLowerCase().contains('q6280')){session.send(`A6280`);
      }
else if(session.message.text.toLowerCase().contains('q6279')){session.send(`A6279`);
      }
else if(session.message.text.toLowerCase().contains('q6278')){session.send(`A6278`);
      }
else if(session.message.text.toLowerCase().contains('q6277')){session.send(`A6277`);
      }
else if(session.message.text.toLowerCase().contains('q6276')){session.send(`A6276`);
      }
else if(session.message.text.toLowerCase().contains('q6275')){session.send(`A6275`);
      }
else if(session.message.text.toLowerCase().contains('q6274')){session.send(`A6274`);
      }
else if(session.message.text.toLowerCase().contains('q6273')){session.send(`A6273`);
      }
else if(session.message.text.toLowerCase().contains('q6272')){session.send(`A6272`);
      }
else if(session.message.text.toLowerCase().contains('q6271')){session.send(`A6271`);
      }
else if(session.message.text.toLowerCase().contains('q6270')){session.send(`A6270`);
      }
else if(session.message.text.toLowerCase().contains('q6269')){session.send(`A6269`);
      }
else if(session.message.text.toLowerCase().contains('q6268')){session.send(`A6268`);
      }
else if(session.message.text.toLowerCase().contains('q6267')){session.send(`A6267`);
      }
else if(session.message.text.toLowerCase().contains('q6266')){session.send(`A6266`);
      }
else if(session.message.text.toLowerCase().contains('q6265')){session.send(`A6265`);
      }
else if(session.message.text.toLowerCase().contains('q6264')){session.send(`A6264`);
      }
else if(session.message.text.toLowerCase().contains('q6263')){session.send(`A6263`);
      }
else if(session.message.text.toLowerCase().contains('q6262')){session.send(`A6262`);
      }
else if(session.message.text.toLowerCase().contains('q6261')){session.send(`A6261`);
      }
else if(session.message.text.toLowerCase().contains('q6260')){session.send(`A6260`);
      }
else if(session.message.text.toLowerCase().contains('q6259')){session.send(`A6259`);
      }
else if(session.message.text.toLowerCase().contains('q6258')){session.send(`A6258`);
      }
else if(session.message.text.toLowerCase().contains('q6257')){session.send(`A6257`);
      }
else if(session.message.text.toLowerCase().contains('q6256')){session.send(`A6256`);
      }
else if(session.message.text.toLowerCase().contains('q6255')){session.send(`A6255`);
      }
else if(session.message.text.toLowerCase().contains('q6254')){session.send(`A6254`);
      }
else if(session.message.text.toLowerCase().contains('q6253')){session.send(`A6253`);
      }
else if(session.message.text.toLowerCase().contains('q6252')){session.send(`A6252`);
      }
else if(session.message.text.toLowerCase().contains('q6251')){session.send(`A6251`);
      }
else if(session.message.text.toLowerCase().contains('q6250')){session.send(`A6250`);
      }
else if(session.message.text.toLowerCase().contains('q6249')){session.send(`A6249`);
      }
else if(session.message.text.toLowerCase().contains('q6248')){session.send(`A6248`);
      }
else if(session.message.text.toLowerCase().contains('q6247')){session.send(`A6247`);
      }
else if(session.message.text.toLowerCase().contains('q6246')){session.send(`A6246`);
      }
else if(session.message.text.toLowerCase().contains('q6245')){session.send(`A6245`);
      }
else if(session.message.text.toLowerCase().contains('q6244')){session.send(`A6244`);
      }
else if(session.message.text.toLowerCase().contains('q6243')){session.send(`A6243`);
      }
else if(session.message.text.toLowerCase().contains('q6242')){session.send(`A6242`);
      }
else if(session.message.text.toLowerCase().contains('q6241')){session.send(`A6241`);
      }
else if(session.message.text.toLowerCase().contains('q6240')){session.send(`A6240`);
      }
else if(session.message.text.toLowerCase().contains('q6239')){session.send(`A6239`);
      }
else if(session.message.text.toLowerCase().contains('q6238')){session.send(`A6238`);
      }
else if(session.message.text.toLowerCase().contains('q6237')){session.send(`A6237`);
      }
else if(session.message.text.toLowerCase().contains('q6236')){session.send(`A6236`);
      }
else if(session.message.text.toLowerCase().contains('q6235')){session.send(`A6235`);
      }
else if(session.message.text.toLowerCase().contains('q6234')){session.send(`A6234`);
      }
else if(session.message.text.toLowerCase().contains('q6233')){session.send(`A6233`);
      }
else if(session.message.text.toLowerCase().contains('q6232')){session.send(`A6232`);
      }
else if(session.message.text.toLowerCase().contains('q6231')){session.send(`A6231`);
      }
else if(session.message.text.toLowerCase().contains('q6230')){session.send(`A6230`);
      }
else if(session.message.text.toLowerCase().contains('q6229')){session.send(`A6229`);
      }
else if(session.message.text.toLowerCase().contains('q6228')){session.send(`A6228`);
      }
else if(session.message.text.toLowerCase().contains('q6227')){session.send(`A6227`);
      }
else if(session.message.text.toLowerCase().contains('q6226')){session.send(`A6226`);
      }
else if(session.message.text.toLowerCase().contains('q6225')){session.send(`A6225`);
      }
else if(session.message.text.toLowerCase().contains('q6224')){session.send(`A6224`);
      }
else if(session.message.text.toLowerCase().contains('q6223')){session.send(`A6223`);
      }
else if(session.message.text.toLowerCase().contains('q6222')){session.send(`A6222`);
      }
else if(session.message.text.toLowerCase().contains('q6221')){session.send(`A6221`);
      }
else if(session.message.text.toLowerCase().contains('q6220')){session.send(`A6220`);
      }
else if(session.message.text.toLowerCase().contains('q6219')){session.send(`A6219`);
      }
else if(session.message.text.toLowerCase().contains('q6218')){session.send(`A6218`);
      }
else if(session.message.text.toLowerCase().contains('q6217')){session.send(`A6217`);
      }
else if(session.message.text.toLowerCase().contains('q6216')){session.send(`A6216`);
      }
else if(session.message.text.toLowerCase().contains('q6215')){session.send(`A6215`);
      }
else if(session.message.text.toLowerCase().contains('q6214')){session.send(`A6214`);
      }
else if(session.message.text.toLowerCase().contains('q6213')){session.send(`A6213`);
      }
else if(session.message.text.toLowerCase().contains('q6212')){session.send(`A6212`);
      }
else if(session.message.text.toLowerCase().contains('q6211')){session.send(`A6211`);
      }
else if(session.message.text.toLowerCase().contains('q6210')){session.send(`A6210`);
      }
else if(session.message.text.toLowerCase().contains('q6209')){session.send(`A6209`);
      }
else if(session.message.text.toLowerCase().contains('q6208')){session.send(`A6208`);
      }
else if(session.message.text.toLowerCase().contains('q6207')){session.send(`A6207`);
      }
else if(session.message.text.toLowerCase().contains('q6206')){session.send(`A6206`);
      }
else if(session.message.text.toLowerCase().contains('q6205')){session.send(`A6205`);
      }
else if(session.message.text.toLowerCase().contains('q6204')){session.send(`A6204`);
      }
else if(session.message.text.toLowerCase().contains('q6203')){session.send(`A6203`);
      }
else if(session.message.text.toLowerCase().contains('q6202')){session.send(`A6202`);
      }
else if(session.message.text.toLowerCase().contains('q6201')){session.send(`A6201`);
      }
else if(session.message.text.toLowerCase().contains('q6200')){session.send(`A6200`);
      }
else if(session.message.text.toLowerCase().contains('q6199')){session.send(`A6199`);
      }
else if(session.message.text.toLowerCase().contains('q6198')){session.send(`A6198`);
      }
else if(session.message.text.toLowerCase().contains('q6197')){session.send(`A6197`);
      }
else if(session.message.text.toLowerCase().contains('q6196')){session.send(`A6196`);
      }
else if(session.message.text.toLowerCase().contains('q6195')){session.send(`A6195`);
      }
else if(session.message.text.toLowerCase().contains('q6194')){session.send(`A6194`);
      }
else if(session.message.text.toLowerCase().contains('q6193')){session.send(`A6193`);
      }
else if(session.message.text.toLowerCase().contains('q6192')){session.send(`A6192`);
      }
else if(session.message.text.toLowerCase().contains('q6191')){session.send(`A6191`);
      }
else if(session.message.text.toLowerCase().contains('q6190')){session.send(`A6190`);
      }
else if(session.message.text.toLowerCase().contains('q6189')){session.send(`A6189`);
      }
else if(session.message.text.toLowerCase().contains('q6188')){session.send(`A6188`);
      }
else if(session.message.text.toLowerCase().contains('q6187')){session.send(`A6187`);
      }
else if(session.message.text.toLowerCase().contains('q6186')){session.send(`A6186`);
      }
else if(session.message.text.toLowerCase().contains('q6185')){session.send(`A6185`);
      }
else if(session.message.text.toLowerCase().contains('q6184')){session.send(`A6184`);
      }
else if(session.message.text.toLowerCase().contains('q6183')){session.send(`A6183`);
      }
else if(session.message.text.toLowerCase().contains('q6182')){session.send(`A6182`);
      }
else if(session.message.text.toLowerCase().contains('q6181')){session.send(`A6181`);
      }
else if(session.message.text.toLowerCase().contains('q6180')){session.send(`A6180`);
      }
else if(session.message.text.toLowerCase().contains('q6179')){session.send(`A6179`);
      }
else if(session.message.text.toLowerCase().contains('q6178')){session.send(`A6178`);
      }
else if(session.message.text.toLowerCase().contains('q6177')){session.send(`A6177`);
      }
else if(session.message.text.toLowerCase().contains('q6176')){session.send(`A6176`);
      }
else if(session.message.text.toLowerCase().contains('q6175')){session.send(`A6175`);
      }
else if(session.message.text.toLowerCase().contains('q6174')){session.send(`A6174`);
      }
else if(session.message.text.toLowerCase().contains('q6173')){session.send(`A6173`);
      }
else if(session.message.text.toLowerCase().contains('q6172')){session.send(`A6172`);
      }
else if(session.message.text.toLowerCase().contains('q6171')){session.send(`A6171`);
      }
else if(session.message.text.toLowerCase().contains('q6170')){session.send(`A6170`);
      }
else if(session.message.text.toLowerCase().contains('q6169')){session.send(`A6169`);
      }
else if(session.message.text.toLowerCase().contains('q6168')){session.send(`A6168`);
      }
else if(session.message.text.toLowerCase().contains('q6167')){session.send(`A6167`);
      }
else if(session.message.text.toLowerCase().contains('q6166')){session.send(`A6166`);
      }
else if(session.message.text.toLowerCase().contains('q6165')){session.send(`A6165`);
      }
else if(session.message.text.toLowerCase().contains('q6164')){session.send(`A6164`);
      }
else if(session.message.text.toLowerCase().contains('q6163')){session.send(`A6163`);
      }
else if(session.message.text.toLowerCase().contains('q6162')){session.send(`A6162`);
      }
else if(session.message.text.toLowerCase().contains('q6161')){session.send(`A6161`);
      }
else if(session.message.text.toLowerCase().contains('q6160')){session.send(`A6160`);
      }
else if(session.message.text.toLowerCase().contains('q6159')){session.send(`A6159`);
      }
else if(session.message.text.toLowerCase().contains('q6158')){session.send(`A6158`);
      }
else if(session.message.text.toLowerCase().contains('q6157')){session.send(`A6157`);
      }
else if(session.message.text.toLowerCase().contains('q6156')){session.send(`A6156`);
      }
else if(session.message.text.toLowerCase().contains('q6155')){session.send(`A6155`);
      }
else if(session.message.text.toLowerCase().contains('q6154')){session.send(`A6154`);
      }
else if(session.message.text.toLowerCase().contains('q6153')){session.send(`A6153`);
      }
else if(session.message.text.toLowerCase().contains('q6152')){session.send(`A6152`);
      }
else if(session.message.text.toLowerCase().contains('q6151')){session.send(`A6151`);
      }
else if(session.message.text.toLowerCase().contains('q6150')){session.send(`A6150`);
      }
else if(session.message.text.toLowerCase().contains('q6149')){session.send(`A6149`);
      }
else if(session.message.text.toLowerCase().contains('q6148')){session.send(`A6148`);
      }
else if(session.message.text.toLowerCase().contains('q6147')){session.send(`A6147`);
      }
else if(session.message.text.toLowerCase().contains('q6146')){session.send(`A6146`);
      }
else if(session.message.text.toLowerCase().contains('q6145')){session.send(`A6145`);
      }
else if(session.message.text.toLowerCase().contains('q6144')){session.send(`A6144`);
      }
else if(session.message.text.toLowerCase().contains('q6143')){session.send(`A6143`);
      }
else if(session.message.text.toLowerCase().contains('q6142')){session.send(`A6142`);
      }
else if(session.message.text.toLowerCase().contains('q6141')){session.send(`A6141`);
      }
else if(session.message.text.toLowerCase().contains('q6140')){session.send(`A6140`);
      }
else if(session.message.text.toLowerCase().contains('q6139')){session.send(`A6139`);
      }
else if(session.message.text.toLowerCase().contains('q6138')){session.send(`A6138`);
      }
else if(session.message.text.toLowerCase().contains('q6137')){session.send(`A6137`);
      }
else if(session.message.text.toLowerCase().contains('q6136')){session.send(`A6136`);
      }
else if(session.message.text.toLowerCase().contains('q6135')){session.send(`A6135`);
      }
else if(session.message.text.toLowerCase().contains('q6134')){session.send(`A6134`);
      }
else if(session.message.text.toLowerCase().contains('q6133')){session.send(`A6133`);
      }
else if(session.message.text.toLowerCase().contains('q6132')){session.send(`A6132`);
      }
else if(session.message.text.toLowerCase().contains('q6131')){session.send(`A6131`);
      }
else if(session.message.text.toLowerCase().contains('q6130')){session.send(`A6130`);
      }
else if(session.message.text.toLowerCase().contains('q6129')){session.send(`A6129`);
      }
else if(session.message.text.toLowerCase().contains('q6128')){session.send(`A6128`);
      }
else if(session.message.text.toLowerCase().contains('q6127')){session.send(`A6127`);
      }
else if(session.message.text.toLowerCase().contains('q6126')){session.send(`A6126`);
      }
else if(session.message.text.toLowerCase().contains('q6125')){session.send(`A6125`);
      }
else if(session.message.text.toLowerCase().contains('q6124')){session.send(`A6124`);
      }
else if(session.message.text.toLowerCase().contains('q6123')){session.send(`A6123`);
      }
else if(session.message.text.toLowerCase().contains('q6122')){session.send(`A6122`);
      }
else if(session.message.text.toLowerCase().contains('q6121')){session.send(`A6121`);
      }
else if(session.message.text.toLowerCase().contains('q6120')){session.send(`A6120`);
      }
else if(session.message.text.toLowerCase().contains('q6119')){session.send(`A6119`);
      }
else if(session.message.text.toLowerCase().contains('q6118')){session.send(`A6118`);
      }
else if(session.message.text.toLowerCase().contains('q6117')){session.send(`A6117`);
      }
else if(session.message.text.toLowerCase().contains('q6116')){session.send(`A6116`);
      }
else if(session.message.text.toLowerCase().contains('q6115')){session.send(`A6115`);
      }
else if(session.message.text.toLowerCase().contains('q6114')){session.send(`A6114`);
      }
else if(session.message.text.toLowerCase().contains('q6113')){session.send(`A6113`);
      }
else if(session.message.text.toLowerCase().contains('q6112')){session.send(`A6112`);
      }
else if(session.message.text.toLowerCase().contains('q6111')){session.send(`A6111`);
      }
else if(session.message.text.toLowerCase().contains('q6110')){session.send(`A6110`);
      }
else if(session.message.text.toLowerCase().contains('q6109')){session.send(`A6109`);
      }
else if(session.message.text.toLowerCase().contains('q6108')){session.send(`A6108`);
      }
else if(session.message.text.toLowerCase().contains('q6107')){session.send(`A6107`);
      }
else if(session.message.text.toLowerCase().contains('q6106')){session.send(`A6106`);
      }
else if(session.message.text.toLowerCase().contains('q6105')){session.send(`A6105`);
      }
else if(session.message.text.toLowerCase().contains('q6104')){session.send(`A6104`);
      }
else if(session.message.text.toLowerCase().contains('q6103')){session.send(`A6103`);
      }
else if(session.message.text.toLowerCase().contains('q6102')){session.send(`A6102`);
      }
else if(session.message.text.toLowerCase().contains('q6101')){session.send(`A6101`);
      }
else if(session.message.text.toLowerCase().contains('q6100')){session.send(`A6100`);
      }
else if(session.message.text.toLowerCase().contains('q6099')){session.send(`A6099`);
      }
else if(session.message.text.toLowerCase().contains('q6098')){session.send(`A6098`);
      }
else if(session.message.text.toLowerCase().contains('q6097')){session.send(`A6097`);
      }
else if(session.message.text.toLowerCase().contains('q6096')){session.send(`A6096`);
      }
else if(session.message.text.toLowerCase().contains('q6095')){session.send(`A6095`);
      }
else if(session.message.text.toLowerCase().contains('q6094')){session.send(`A6094`);
      }
else if(session.message.text.toLowerCase().contains('q6093')){session.send(`A6093`);
      }
else if(session.message.text.toLowerCase().contains('q6092')){session.send(`A6092`);
      }
else if(session.message.text.toLowerCase().contains('q6091')){session.send(`A6091`);
      }
else if(session.message.text.toLowerCase().contains('q6090')){session.send(`A6090`);
      }
else if(session.message.text.toLowerCase().contains('q6089')){session.send(`A6089`);
      }
else if(session.message.text.toLowerCase().contains('q6088')){session.send(`A6088`);
      }
else if(session.message.text.toLowerCase().contains('q6087')){session.send(`A6087`);
      }
else if(session.message.text.toLowerCase().contains('q6086')){session.send(`A6086`);
      }
else if(session.message.text.toLowerCase().contains('q6085')){session.send(`A6085`);
      }
else if(session.message.text.toLowerCase().contains('q6084')){session.send(`A6084`);
      }
else if(session.message.text.toLowerCase().contains('q6083')){session.send(`A6083`);
      }
else if(session.message.text.toLowerCase().contains('q6082')){session.send(`A6082`);
      }
else if(session.message.text.toLowerCase().contains('q6081')){session.send(`A6081`);
      }
else if(session.message.text.toLowerCase().contains('q6080')){session.send(`A6080`);
      }
else if(session.message.text.toLowerCase().contains('q6079')){session.send(`A6079`);
      }
else if(session.message.text.toLowerCase().contains('q6078')){session.send(`A6078`);
      }
else if(session.message.text.toLowerCase().contains('q6077')){session.send(`A6077`);
      }
else if(session.message.text.toLowerCase().contains('q6076')){session.send(`A6076`);
      }
else if(session.message.text.toLowerCase().contains('q6075')){session.send(`A6075`);
      }
else if(session.message.text.toLowerCase().contains('q6074')){session.send(`A6074`);
      }
else if(session.message.text.toLowerCase().contains('q6073')){session.send(`A6073`);
      }
else if(session.message.text.toLowerCase().contains('q6072')){session.send(`A6072`);
      }
else if(session.message.text.toLowerCase().contains('q6071')){session.send(`A6071`);
      }
else if(session.message.text.toLowerCase().contains('q6070')){session.send(`A6070`);
      }
else if(session.message.text.toLowerCase().contains('q6069')){session.send(`A6069`);
      }
else if(session.message.text.toLowerCase().contains('q6068')){session.send(`A6068`);
      }
else if(session.message.text.toLowerCase().contains('q6067')){session.send(`A6067`);
      }
else if(session.message.text.toLowerCase().contains('q6066')){session.send(`A6066`);
      }
else if(session.message.text.toLowerCase().contains('q6065')){session.send(`A6065`);
      }
else if(session.message.text.toLowerCase().contains('q6064')){session.send(`A6064`);
      }
else if(session.message.text.toLowerCase().contains('q6063')){session.send(`A6063`);
      }
else if(session.message.text.toLowerCase().contains('q6062')){session.send(`A6062`);
      }
else if(session.message.text.toLowerCase().contains('q6061')){session.send(`A6061`);
      }
else if(session.message.text.toLowerCase().contains('q6060')){session.send(`A6060`);
      }
else if(session.message.text.toLowerCase().contains('q6059')){session.send(`A6059`);
      }
else if(session.message.text.toLowerCase().contains('q6058')){session.send(`A6058`);
      }
else if(session.message.text.toLowerCase().contains('q6057')){session.send(`A6057`);
      }
else if(session.message.text.toLowerCase().contains('q6056')){session.send(`A6056`);
      }
else if(session.message.text.toLowerCase().contains('q6055')){session.send(`A6055`);
      }
else if(session.message.text.toLowerCase().contains('q6054')){session.send(`A6054`);
      }
else if(session.message.text.toLowerCase().contains('q6053')){session.send(`A6053`);
      }
else if(session.message.text.toLowerCase().contains('q6052')){session.send(`A6052`);
      }
else if(session.message.text.toLowerCase().contains('q6051')){session.send(`A6051`);
      }
else if(session.message.text.toLowerCase().contains('q6050')){session.send(`A6050`);
      }
else if(session.message.text.toLowerCase().contains('q6049')){session.send(`A6049`);
      }
else if(session.message.text.toLowerCase().contains('q6048')){session.send(`A6048`);
      }
else if(session.message.text.toLowerCase().contains('q6047')){session.send(`A6047`);
      }
else if(session.message.text.toLowerCase().contains('q6046')){session.send(`A6046`);
      }
else if(session.message.text.toLowerCase().contains('q6045')){session.send(`A6045`);
      }
else if(session.message.text.toLowerCase().contains('q6044')){session.send(`A6044`);
      }
else if(session.message.text.toLowerCase().contains('q6043')){session.send(`A6043`);
      }
else if(session.message.text.toLowerCase().contains('q6042')){session.send(`A6042`);
      }
else if(session.message.text.toLowerCase().contains('q6041')){session.send(`A6041`);
      }
else if(session.message.text.toLowerCase().contains('q6040')){session.send(`A6040`);
      }
else if(session.message.text.toLowerCase().contains('q6039')){session.send(`A6039`);
      }
else if(session.message.text.toLowerCase().contains('q6038')){session.send(`A6038`);
      }
else if(session.message.text.toLowerCase().contains('q6037')){session.send(`A6037`);
      }
else if(session.message.text.toLowerCase().contains('q6036')){session.send(`A6036`);
      }
else if(session.message.text.toLowerCase().contains('q6035')){session.send(`A6035`);
      }
else if(session.message.text.toLowerCase().contains('q6034')){session.send(`A6034`);
      }
else if(session.message.text.toLowerCase().contains('q6033')){session.send(`A6033`);
      }
else if(session.message.text.toLowerCase().contains('q6032')){session.send(`A6032`);
      }
else if(session.message.text.toLowerCase().contains('q6031')){session.send(`A6031`);
      }
else if(session.message.text.toLowerCase().contains('q6030')){session.send(`A6030`);
      }
else if(session.message.text.toLowerCase().contains('q6029')){session.send(`A6029`);
      }
else if(session.message.text.toLowerCase().contains('q6028')){session.send(`A6028`);
      }
else if(session.message.text.toLowerCase().contains('q6027')){session.send(`A6027`);
      }
else if(session.message.text.toLowerCase().contains('q6026')){session.send(`A6026`);
      }
else if(session.message.text.toLowerCase().contains('q6025')){session.send(`A6025`);
      }
else if(session.message.text.toLowerCase().contains('q6024')){session.send(`A6024`);
      }
else if(session.message.text.toLowerCase().contains('q6023')){session.send(`A6023`);
      }
else if(session.message.text.toLowerCase().contains('q6022')){session.send(`A6022`);
      }
else if(session.message.text.toLowerCase().contains('q6021')){session.send(`A6021`);
      }
else if(session.message.text.toLowerCase().contains('q6020')){session.send(`A6020`);
      }
else if(session.message.text.toLowerCase().contains('q6019')){session.send(`A6019`);
      }
else if(session.message.text.toLowerCase().contains('q6018')){session.send(`A6018`);
      }
else if(session.message.text.toLowerCase().contains('q6017')){session.send(`A6017`);
      }
else if(session.message.text.toLowerCase().contains('q6016')){session.send(`A6016`);
      }
else if(session.message.text.toLowerCase().contains('q6015')){session.send(`A6015`);
      }
else if(session.message.text.toLowerCase().contains('q6014')){session.send(`A6014`);
      }
else if(session.message.text.toLowerCase().contains('q6013')){session.send(`A6013`);
      }
else if(session.message.text.toLowerCase().contains('q6012')){session.send(`A6012`);
      }
else if(session.message.text.toLowerCase().contains('q6011')){session.send(`A6011`);
      }
else if(session.message.text.toLowerCase().contains('q6010')){session.send(`A6010`);
      }
else if(session.message.text.toLowerCase().contains('q6009')){session.send(`A6009`);
      }
else if(session.message.text.toLowerCase().contains('q6008')){session.send(`A6008`);
      }
else if(session.message.text.toLowerCase().contains('q6007')){session.send(`A6007`);
      }
else if(session.message.text.toLowerCase().contains('q6006')){session.send(`A6006`);
      }
else if(session.message.text.toLowerCase().contains('q6005')){session.send(`A6005`);
      }
else if(session.message.text.toLowerCase().contains('q6004')){session.send(`A6004`);
      }
else if(session.message.text.toLowerCase().contains('q6003')){session.send(`A6003`);
      }
else if(session.message.text.toLowerCase().contains('q6002')){session.send(`A6002`);
      }
else if(session.message.text.toLowerCase().contains('q6001')){session.send(`A6001`);
      }
else if(session.message.text.toLowerCase().contains('q6000')){session.send(`A6000`);
      }
else if(session.message.text.toLowerCase().contains('q5999')){session.send(`A5999`);
      }
else if(session.message.text.toLowerCase().contains('q5998')){session.send(`A5998`);
      }
else if(session.message.text.toLowerCase().contains('q5997')){session.send(`A5997`);
      }
else if(session.message.text.toLowerCase().contains('q5996')){session.send(`A5996`);
      }
else if(session.message.text.toLowerCase().contains('q5995')){session.send(`A5995`);
      }
else if(session.message.text.toLowerCase().contains('q5994')){session.send(`A5994`);
      }
else if(session.message.text.toLowerCase().contains('q5993')){session.send(`A5993`);
      }
else if(session.message.text.toLowerCase().contains('q5992')){session.send(`A5992`);
      }
else if(session.message.text.toLowerCase().contains('q5991')){session.send(`A5991`);
      }
else if(session.message.text.toLowerCase().contains('q5990')){session.send(`A5990`);
      }
else if(session.message.text.toLowerCase().contains('q5989')){session.send(`A5989`);
      }
else if(session.message.text.toLowerCase().contains('q5988')){session.send(`A5988`);
      }
else if(session.message.text.toLowerCase().contains('q5987')){session.send(`A5987`);
      }
else if(session.message.text.toLowerCase().contains('q5986')){session.send(`A5986`);
      }
else if(session.message.text.toLowerCase().contains('q5985')){session.send(`A5985`);
      }
else if(session.message.text.toLowerCase().contains('q5984')){session.send(`A5984`);
      }
else if(session.message.text.toLowerCase().contains('q5983')){session.send(`A5983`);
      }
else if(session.message.text.toLowerCase().contains('q5982')){session.send(`A5982`);
      }
else if(session.message.text.toLowerCase().contains('q5981')){session.send(`A5981`);
      }
else if(session.message.text.toLowerCase().contains('q5980')){session.send(`A5980`);
      }
else if(session.message.text.toLowerCase().contains('q5979')){session.send(`A5979`);
      }
else if(session.message.text.toLowerCase().contains('q5978')){session.send(`A5978`);
      }
else if(session.message.text.toLowerCase().contains('q5977')){session.send(`A5977`);
      }
else if(session.message.text.toLowerCase().contains('q5976')){session.send(`A5976`);
      }
else if(session.message.text.toLowerCase().contains('q5975')){session.send(`A5975`);
      }
else if(session.message.text.toLowerCase().contains('q5974')){session.send(`A5974`);
      }
else if(session.message.text.toLowerCase().contains('q5973')){session.send(`A5973`);
      }
else if(session.message.text.toLowerCase().contains('q5972')){session.send(`A5972`);
      }
else if(session.message.text.toLowerCase().contains('q5971')){session.send(`A5971`);
      }
else if(session.message.text.toLowerCase().contains('q5970')){session.send(`A5970`);
      }
else if(session.message.text.toLowerCase().contains('q5969')){session.send(`A5969`);
      }
else if(session.message.text.toLowerCase().contains('q5968')){session.send(`A5968`);
      }
else if(session.message.text.toLowerCase().contains('q5967')){session.send(`A5967`);
      }
else if(session.message.text.toLowerCase().contains('q5966')){session.send(`A5966`);
      }
else if(session.message.text.toLowerCase().contains('q5965')){session.send(`A5965`);
      }
else if(session.message.text.toLowerCase().contains('q5964')){session.send(`A5964`);
      }
else if(session.message.text.toLowerCase().contains('q5963')){session.send(`A5963`);
      }
else if(session.message.text.toLowerCase().contains('q5962')){session.send(`A5962`);
      }
else if(session.message.text.toLowerCase().contains('q5961')){session.send(`A5961`);
      }
else if(session.message.text.toLowerCase().contains('q5960')){session.send(`A5960`);
      }
else if(session.message.text.toLowerCase().contains('q5959')){session.send(`A5959`);
      }
else if(session.message.text.toLowerCase().contains('q5958')){session.send(`A5958`);
      }
else if(session.message.text.toLowerCase().contains('q5957')){session.send(`A5957`);
      }
else if(session.message.text.toLowerCase().contains('q5956')){session.send(`A5956`);
      }
else if(session.message.text.toLowerCase().contains('q5955')){session.send(`A5955`);
      }
else if(session.message.text.toLowerCase().contains('q5954')){session.send(`A5954`);
      }
else if(session.message.text.toLowerCase().contains('q5953')){session.send(`A5953`);
      }
else if(session.message.text.toLowerCase().contains('q5952')){session.send(`A5952`);
      }
else if(session.message.text.toLowerCase().contains('q5951')){session.send(`A5951`);
      }
else if(session.message.text.toLowerCase().contains('q5950')){session.send(`A5950`);
      }
else if(session.message.text.toLowerCase().contains('q5949')){session.send(`A5949`);
      }
else if(session.message.text.toLowerCase().contains('q5948')){session.send(`A5948`);
      }
else if(session.message.text.toLowerCase().contains('q5947')){session.send(`A5947`);
      }
else if(session.message.text.toLowerCase().contains('q5946')){session.send(`A5946`);
      }
else if(session.message.text.toLowerCase().contains('q5945')){session.send(`A5945`);
      }
else if(session.message.text.toLowerCase().contains('q5944')){session.send(`A5944`);
      }
else if(session.message.text.toLowerCase().contains('q5943')){session.send(`A5943`);
      }
else if(session.message.text.toLowerCase().contains('q5942')){session.send(`A5942`);
      }
else if(session.message.text.toLowerCase().contains('q5941')){session.send(`A5941`);
      }
else if(session.message.text.toLowerCase().contains('q5940')){session.send(`A5940`);
      }
else if(session.message.text.toLowerCase().contains('q5939')){session.send(`A5939`);
      }
else if(session.message.text.toLowerCase().contains('q5938')){session.send(`A5938`);
      }
else if(session.message.text.toLowerCase().contains('q5937')){session.send(`A5937`);
      }
else if(session.message.text.toLowerCase().contains('q5936')){session.send(`A5936`);
      }
else if(session.message.text.toLowerCase().contains('q5935')){session.send(`A5935`);
      }
else if(session.message.text.toLowerCase().contains('q5934')){session.send(`A5934`);
      }
else if(session.message.text.toLowerCase().contains('q5933')){session.send(`A5933`);
      }
else if(session.message.text.toLowerCase().contains('q5932')){session.send(`A5932`);
      }
else if(session.message.text.toLowerCase().contains('q5931')){session.send(`A5931`);
      }
else if(session.message.text.toLowerCase().contains('q5930')){session.send(`A5930`);
      }
else if(session.message.text.toLowerCase().contains('q5929')){session.send(`A5929`);
      }
else if(session.message.text.toLowerCase().contains('q5928')){session.send(`A5928`);
      }
else if(session.message.text.toLowerCase().contains('q5927')){session.send(`A5927`);
      }
else if(session.message.text.toLowerCase().contains('q5926')){session.send(`A5926`);
      }
else if(session.message.text.toLowerCase().contains('q5925')){session.send(`A5925`);
      }
else if(session.message.text.toLowerCase().contains('q5924')){session.send(`A5924`);
      }
else if(session.message.text.toLowerCase().contains('q5923')){session.send(`A5923`);
      }
else if(session.message.text.toLowerCase().contains('q5922')){session.send(`A5922`);
      }
else if(session.message.text.toLowerCase().contains('q5921')){session.send(`A5921`);
      }
else if(session.message.text.toLowerCase().contains('q5920')){session.send(`A5920`);
      }
else if(session.message.text.toLowerCase().contains('q5919')){session.send(`A5919`);
      }
else if(session.message.text.toLowerCase().contains('q5918')){session.send(`A5918`);
      }
else if(session.message.text.toLowerCase().contains('q5917')){session.send(`A5917`);
      }
else if(session.message.text.toLowerCase().contains('q5916')){session.send(`A5916`);
      }
else if(session.message.text.toLowerCase().contains('q5915')){session.send(`A5915`);
      }
else if(session.message.text.toLowerCase().contains('q5914')){session.send(`A5914`);
      }
else if(session.message.text.toLowerCase().contains('q5913')){session.send(`A5913`);
      }
else if(session.message.text.toLowerCase().contains('q5912')){session.send(`A5912`);
      }
else if(session.message.text.toLowerCase().contains('q5911')){session.send(`A5911`);
      }
else if(session.message.text.toLowerCase().contains('q5910')){session.send(`A5910`);
      }
else if(session.message.text.toLowerCase().contains('q5909')){session.send(`A5909`);
      }
else if(session.message.text.toLowerCase().contains('q5908')){session.send(`A5908`);
      }
else if(session.message.text.toLowerCase().contains('q5907')){session.send(`A5907`);
      }
else if(session.message.text.toLowerCase().contains('q5906')){session.send(`A5906`);
      }
else if(session.message.text.toLowerCase().contains('q5905')){session.send(`A5905`);
      }
else if(session.message.text.toLowerCase().contains('q5904')){session.send(`A5904`);
      }
else if(session.message.text.toLowerCase().contains('q5903')){session.send(`A5903`);
      }
else if(session.message.text.toLowerCase().contains('q5902')){session.send(`A5902`);
      }
else if(session.message.text.toLowerCase().contains('q5901')){session.send(`A5901`);
      }
else if(session.message.text.toLowerCase().contains('q5900')){session.send(`A5900`);
      }
else if(session.message.text.toLowerCase().contains('q5899')){session.send(`A5899`);
      }
else if(session.message.text.toLowerCase().contains('q5898')){session.send(`A5898`);
      }
else if(session.message.text.toLowerCase().contains('q5897')){session.send(`A5897`);
      }
else if(session.message.text.toLowerCase().contains('q5896')){session.send(`A5896`);
      }
else if(session.message.text.toLowerCase().contains('q5895')){session.send(`A5895`);
      }
else if(session.message.text.toLowerCase().contains('q5894')){session.send(`A5894`);
      }
else if(session.message.text.toLowerCase().contains('q5893')){session.send(`A5893`);
      }
else if(session.message.text.toLowerCase().contains('q5892')){session.send(`A5892`);
      }
else if(session.message.text.toLowerCase().contains('q5891')){session.send(`A5891`);
      }
else if(session.message.text.toLowerCase().contains('q5890')){session.send(`A5890`);
      }
else if(session.message.text.toLowerCase().contains('q5889')){session.send(`A5889`);
      }
else if(session.message.text.toLowerCase().contains('q5888')){session.send(`A5888`);
      }
else if(session.message.text.toLowerCase().contains('q5887')){session.send(`A5887`);
      }
else if(session.message.text.toLowerCase().contains('q5886')){session.send(`A5886`);
      }
else if(session.message.text.toLowerCase().contains('q5885')){session.send(`A5885`);
      }
else if(session.message.text.toLowerCase().contains('q5884')){session.send(`A5884`);
      }
else if(session.message.text.toLowerCase().contains('q5883')){session.send(`A5883`);
      }
else if(session.message.text.toLowerCase().contains('q5882')){session.send(`A5882`);
      }
else if(session.message.text.toLowerCase().contains('q5881')){session.send(`A5881`);
      }
else if(session.message.text.toLowerCase().contains('q5880')){session.send(`A5880`);
      }
else if(session.message.text.toLowerCase().contains('q5879')){session.send(`A5879`);
      }
else if(session.message.text.toLowerCase().contains('q5878')){session.send(`A5878`);
      }
else if(session.message.text.toLowerCase().contains('q5877')){session.send(`A5877`);
      }
else if(session.message.text.toLowerCase().contains('q5876')){session.send(`A5876`);
      }
else if(session.message.text.toLowerCase().contains('q5875')){session.send(`A5875`);
      }
else if(session.message.text.toLowerCase().contains('q5874')){session.send(`A5874`);
      }
else if(session.message.text.toLowerCase().contains('q5873')){session.send(`A5873`);
      }
else if(session.message.text.toLowerCase().contains('q5872')){session.send(`A5872`);
      }
else if(session.message.text.toLowerCase().contains('q5871')){session.send(`A5871`);
      }
else if(session.message.text.toLowerCase().contains('q5870')){session.send(`A5870`);
      }
else if(session.message.text.toLowerCase().contains('q5869')){session.send(`A5869`);
      }
else if(session.message.text.toLowerCase().contains('q5868')){session.send(`A5868`);
      }
else if(session.message.text.toLowerCase().contains('q5867')){session.send(`A5867`);
      }
else if(session.message.text.toLowerCase().contains('q5866')){session.send(`A5866`);
      }
else if(session.message.text.toLowerCase().contains('q5865')){session.send(`A5865`);
      }
else if(session.message.text.toLowerCase().contains('q5864')){session.send(`A5864`);
      }
else if(session.message.text.toLowerCase().contains('q5863')){session.send(`A5863`);
      }
else if(session.message.text.toLowerCase().contains('q5862')){session.send(`A5862`);
      }
else if(session.message.text.toLowerCase().contains('q5861')){session.send(`A5861`);
      }
else if(session.message.text.toLowerCase().contains('q5860')){session.send(`A5860`);
      }
else if(session.message.text.toLowerCase().contains('q5859')){session.send(`A5859`);
      }
else if(session.message.text.toLowerCase().contains('q5858')){session.send(`A5858`);
      }
else if(session.message.text.toLowerCase().contains('q5857')){session.send(`A5857`);
      }
else if(session.message.text.toLowerCase().contains('q5856')){session.send(`A5856`);
      }
else if(session.message.text.toLowerCase().contains('q5855')){session.send(`A5855`);
      }
else if(session.message.text.toLowerCase().contains('q5854')){session.send(`A5854`);
      }
else if(session.message.text.toLowerCase().contains('q5853')){session.send(`A5853`);
      }
else if(session.message.text.toLowerCase().contains('q5852')){session.send(`A5852`);
      }
else if(session.message.text.toLowerCase().contains('q5851')){session.send(`A5851`);
      }
else if(session.message.text.toLowerCase().contains('q5850')){session.send(`A5850`);
      }
else if(session.message.text.toLowerCase().contains('q5849')){session.send(`A5849`);
      }
else if(session.message.text.toLowerCase().contains('q5848')){session.send(`A5848`);
      }
else if(session.message.text.toLowerCase().contains('q5847')){session.send(`A5847`);
      }
else if(session.message.text.toLowerCase().contains('q5846')){session.send(`A5846`);
      }
else if(session.message.text.toLowerCase().contains('q5845')){session.send(`A5845`);
      }
else if(session.message.text.toLowerCase().contains('q5844')){session.send(`A5844`);
      }
else if(session.message.text.toLowerCase().contains('q5843')){session.send(`A5843`);
      }
else if(session.message.text.toLowerCase().contains('q5842')){session.send(`A5842`);
      }
else if(session.message.text.toLowerCase().contains('q5841')){session.send(`A5841`);
      }
else if(session.message.text.toLowerCase().contains('q5840')){session.send(`A5840`);
      }
else if(session.message.text.toLowerCase().contains('q5839')){session.send(`A5839`);
      }
else if(session.message.text.toLowerCase().contains('q5838')){session.send(`A5838`);
      }
else if(session.message.text.toLowerCase().contains('q5837')){session.send(`A5837`);
      }
else if(session.message.text.toLowerCase().contains('q5836')){session.send(`A5836`);
      }
else if(session.message.text.toLowerCase().contains('q5835')){session.send(`A5835`);
      }
else if(session.message.text.toLowerCase().contains('q5834')){session.send(`A5834`);
      }
else if(session.message.text.toLowerCase().contains('q5833')){session.send(`A5833`);
      }
else if(session.message.text.toLowerCase().contains('q5832')){session.send(`A5832`);
      }
else if(session.message.text.toLowerCase().contains('q5831')){session.send(`A5831`);
      }
else if(session.message.text.toLowerCase().contains('q5830')){session.send(`A5830`);
      }
else if(session.message.text.toLowerCase().contains('q5829')){session.send(`A5829`);
      }
else if(session.message.text.toLowerCase().contains('q5828')){session.send(`A5828`);
      }
else if(session.message.text.toLowerCase().contains('q5827')){session.send(`A5827`);
      }
else if(session.message.text.toLowerCase().contains('q5826')){session.send(`A5826`);
      }
else if(session.message.text.toLowerCase().contains('q5825')){session.send(`A5825`);
      }
else if(session.message.text.toLowerCase().contains('q5824')){session.send(`A5824`);
      }
else if(session.message.text.toLowerCase().contains('q5823')){session.send(`A5823`);
      }
else if(session.message.text.toLowerCase().contains('q5822')){session.send(`A5822`);
      }
else if(session.message.text.toLowerCase().contains('q5821')){session.send(`A5821`);
      }
else if(session.message.text.toLowerCase().contains('q5820')){session.send(`A5820`);
      }
else if(session.message.text.toLowerCase().contains('q5819')){session.send(`A5819`);
      }
else if(session.message.text.toLowerCase().contains('q5818')){session.send(`A5818`);
      }
else if(session.message.text.toLowerCase().contains('q5817')){session.send(`A5817`);
      }
else if(session.message.text.toLowerCase().contains('q5816')){session.send(`A5816`);
      }
else if(session.message.text.toLowerCase().contains('q5815')){session.send(`A5815`);
      }
else if(session.message.text.toLowerCase().contains('q5814')){session.send(`A5814`);
      }
else if(session.message.text.toLowerCase().contains('q5813')){session.send(`A5813`);
      }
else if(session.message.text.toLowerCase().contains('q5812')){session.send(`A5812`);
      }
else if(session.message.text.toLowerCase().contains('q5811')){session.send(`A5811`);
      }
else if(session.message.text.toLowerCase().contains('q5810')){session.send(`A5810`);
      }
else if(session.message.text.toLowerCase().contains('q5809')){session.send(`A5809`);
      }
else if(session.message.text.toLowerCase().contains('q5808')){session.send(`A5808`);
      }
else if(session.message.text.toLowerCase().contains('q5807')){session.send(`A5807`);
      }
else if(session.message.text.toLowerCase().contains('q5806')){session.send(`A5806`);
      }
else if(session.message.text.toLowerCase().contains('q5805')){session.send(`A5805`);
      }
else if(session.message.text.toLowerCase().contains('q5804')){session.send(`A5804`);
      }
else if(session.message.text.toLowerCase().contains('q5803')){session.send(`A5803`);
      }
else if(session.message.text.toLowerCase().contains('q5802')){session.send(`A5802`);
      }
else if(session.message.text.toLowerCase().contains('q5801')){session.send(`A5801`);
      }
else if(session.message.text.toLowerCase().contains('q5800')){session.send(`A5800`);
      }
else if(session.message.text.toLowerCase().contains('q5799')){session.send(`A5799`);
      }
else if(session.message.text.toLowerCase().contains('q5798')){session.send(`A5798`);
      }
else if(session.message.text.toLowerCase().contains('q5797')){session.send(`A5797`);
      }
else if(session.message.text.toLowerCase().contains('q5796')){session.send(`A5796`);
      }
else if(session.message.text.toLowerCase().contains('q5795')){session.send(`A5795`);
      }
else if(session.message.text.toLowerCase().contains('q5794')){session.send(`A5794`);
      }
else if(session.message.text.toLowerCase().contains('q5793')){session.send(`A5793`);
      }
else if(session.message.text.toLowerCase().contains('q5792')){session.send(`A5792`);
      }
else if(session.message.text.toLowerCase().contains('q5791')){session.send(`A5791`);
      }
else if(session.message.text.toLowerCase().contains('q5790')){session.send(`A5790`);
      }
else if(session.message.text.toLowerCase().contains('q5789')){session.send(`A5789`);
      }
else if(session.message.text.toLowerCase().contains('q5788')){session.send(`A5788`);
      }
else if(session.message.text.toLowerCase().contains('q5787')){session.send(`A5787`);
      }
else if(session.message.text.toLowerCase().contains('q5786')){session.send(`A5786`);
      }
else if(session.message.text.toLowerCase().contains('q5785')){session.send(`A5785`);
      }
else if(session.message.text.toLowerCase().contains('q5784')){session.send(`A5784`);
      }
else if(session.message.text.toLowerCase().contains('q5783')){session.send(`A5783`);
      }
else if(session.message.text.toLowerCase().contains('q5782')){session.send(`A5782`);
      }
else if(session.message.text.toLowerCase().contains('q5781')){session.send(`A5781`);
      }
else if(session.message.text.toLowerCase().contains('q5780')){session.send(`A5780`);
      }
else if(session.message.text.toLowerCase().contains('q5779')){session.send(`A5779`);
      }
else if(session.message.text.toLowerCase().contains('q5778')){session.send(`A5778`);
      }
else if(session.message.text.toLowerCase().contains('q5777')){session.send(`A5777`);
      }
else if(session.message.text.toLowerCase().contains('q5776')){session.send(`A5776`);
      }
else if(session.message.text.toLowerCase().contains('q5775')){session.send(`A5775`);
      }
else if(session.message.text.toLowerCase().contains('q5774')){session.send(`A5774`);
      }
else if(session.message.text.toLowerCase().contains('q5773')){session.send(`A5773`);
      }
else if(session.message.text.toLowerCase().contains('q5772')){session.send(`A5772`);
      }
else if(session.message.text.toLowerCase().contains('q5771')){session.send(`A5771`);
      }
else if(session.message.text.toLowerCase().contains('q5770')){session.send(`A5770`);
      }
else if(session.message.text.toLowerCase().contains('q5769')){session.send(`A5769`);
      }
else if(session.message.text.toLowerCase().contains('q5768')){session.send(`A5768`);
      }
else if(session.message.text.toLowerCase().contains('q5767')){session.send(`A5767`);
      }
else if(session.message.text.toLowerCase().contains('q5766')){session.send(`A5766`);
      }
else if(session.message.text.toLowerCase().contains('q5765')){session.send(`A5765`);
      }
else if(session.message.text.toLowerCase().contains('q5764')){session.send(`A5764`);
      }
else if(session.message.text.toLowerCase().contains('q5763')){session.send(`A5763`);
      }
else if(session.message.text.toLowerCase().contains('q5762')){session.send(`A5762`);
      }
else if(session.message.text.toLowerCase().contains('q5761')){session.send(`A5761`);
      }
else if(session.message.text.toLowerCase().contains('q5760')){session.send(`A5760`);
      }
else if(session.message.text.toLowerCase().contains('q5759')){session.send(`A5759`);
      }
else if(session.message.text.toLowerCase().contains('q5758')){session.send(`A5758`);
      }
else if(session.message.text.toLowerCase().contains('q5757')){session.send(`A5757`);
      }
else if(session.message.text.toLowerCase().contains('q5756')){session.send(`A5756`);
      }
else if(session.message.text.toLowerCase().contains('q5755')){session.send(`A5755`);
      }
else if(session.message.text.toLowerCase().contains('q5754')){session.send(`A5754`);
      }
else if(session.message.text.toLowerCase().contains('q5753')){session.send(`A5753`);
      }
else if(session.message.text.toLowerCase().contains('q5752')){session.send(`A5752`);
      }
else if(session.message.text.toLowerCase().contains('q5751')){session.send(`A5751`);
      }
else if(session.message.text.toLowerCase().contains('q5750')){session.send(`A5750`);
      }
else if(session.message.text.toLowerCase().contains('q5749')){session.send(`A5749`);
      }
else if(session.message.text.toLowerCase().contains('q5748')){session.send(`A5748`);
      }
else if(session.message.text.toLowerCase().contains('q5747')){session.send(`A5747`);
      }
else if(session.message.text.toLowerCase().contains('q5746')){session.send(`A5746`);
      }
else if(session.message.text.toLowerCase().contains('q5745')){session.send(`A5745`);
      }
else if(session.message.text.toLowerCase().contains('q5744')){session.send(`A5744`);
      }
else if(session.message.text.toLowerCase().contains('q5743')){session.send(`A5743`);
      }
else if(session.message.text.toLowerCase().contains('q5742')){session.send(`A5742`);
      }
else if(session.message.text.toLowerCase().contains('q5741')){session.send(`A5741`);
      }
else if(session.message.text.toLowerCase().contains('q5740')){session.send(`A5740`);
      }
else if(session.message.text.toLowerCase().contains('q5739')){session.send(`A5739`);
      }
else if(session.message.text.toLowerCase().contains('q5738')){session.send(`A5738`);
      }
else if(session.message.text.toLowerCase().contains('q5737')){session.send(`A5737`);
      }
else if(session.message.text.toLowerCase().contains('q5736')){session.send(`A5736`);
      }
else if(session.message.text.toLowerCase().contains('q5735')){session.send(`A5735`);
      }
else if(session.message.text.toLowerCase().contains('q5734')){session.send(`A5734`);
      }
else if(session.message.text.toLowerCase().contains('q5733')){session.send(`A5733`);
      }
else if(session.message.text.toLowerCase().contains('q5732')){session.send(`A5732`);
      }
else if(session.message.text.toLowerCase().contains('q5731')){session.send(`A5731`);
      }
else if(session.message.text.toLowerCase().contains('q5730')){session.send(`A5730`);
      }
else if(session.message.text.toLowerCase().contains('q5729')){session.send(`A5729`);
      }
else if(session.message.text.toLowerCase().contains('q5728')){session.send(`A5728`);
      }
else if(session.message.text.toLowerCase().contains('q5727')){session.send(`A5727`);
      }
else if(session.message.text.toLowerCase().contains('q5726')){session.send(`A5726`);
      }
else if(session.message.text.toLowerCase().contains('q5725')){session.send(`A5725`);
      }
else if(session.message.text.toLowerCase().contains('q5724')){session.send(`A5724`);
      }
else if(session.message.text.toLowerCase().contains('q5723')){session.send(`A5723`);
      }
else if(session.message.text.toLowerCase().contains('q5722')){session.send(`A5722`);
      }
else if(session.message.text.toLowerCase().contains('q5721')){session.send(`A5721`);
      }
else if(session.message.text.toLowerCase().contains('q5720')){session.send(`A5720`);
      }
else if(session.message.text.toLowerCase().contains('q5719')){session.send(`A5719`);
      }
else if(session.message.text.toLowerCase().contains('q5718')){session.send(`A5718`);
      }
else if(session.message.text.toLowerCase().contains('q5717')){session.send(`A5717`);
      }
else if(session.message.text.toLowerCase().contains('q5716')){session.send(`A5716`);
      }
else if(session.message.text.toLowerCase().contains('q5715')){session.send(`A5715`);
      }
else if(session.message.text.toLowerCase().contains('q5714')){session.send(`A5714`);
      }
else if(session.message.text.toLowerCase().contains('q5713')){session.send(`A5713`);
      }
else if(session.message.text.toLowerCase().contains('q5712')){session.send(`A5712`);
      }
else if(session.message.text.toLowerCase().contains('q5711')){session.send(`A5711`);
      }
else if(session.message.text.toLowerCase().contains('q5710')){session.send(`A5710`);
      }
else if(session.message.text.toLowerCase().contains('q5709')){session.send(`A5709`);
      }
else if(session.message.text.toLowerCase().contains('q5708')){session.send(`A5708`);
      }
else if(session.message.text.toLowerCase().contains('q5707')){session.send(`A5707`);
      }
else if(session.message.text.toLowerCase().contains('q5706')){session.send(`A5706`);
      }
else if(session.message.text.toLowerCase().contains('q5705')){session.send(`A5705`);
      }
else if(session.message.text.toLowerCase().contains('q5704')){session.send(`A5704`);
      }
else if(session.message.text.toLowerCase().contains('q5703')){session.send(`A5703`);
      }
else if(session.message.text.toLowerCase().contains('q5702')){session.send(`A5702`);
      }
else if(session.message.text.toLowerCase().contains('q5701')){session.send(`A5701`);
      }
else if(session.message.text.toLowerCase().contains('q5700')){session.send(`A5700`);
      }
else if(session.message.text.toLowerCase().contains('q5699')){session.send(`A5699`);
      }
else if(session.message.text.toLowerCase().contains('q5698')){session.send(`A5698`);
      }
else if(session.message.text.toLowerCase().contains('q5697')){session.send(`A5697`);
      }
else if(session.message.text.toLowerCase().contains('q5696')){session.send(`A5696`);
      }
else if(session.message.text.toLowerCase().contains('q5695')){session.send(`A5695`);
      }
else if(session.message.text.toLowerCase().contains('q5694')){session.send(`A5694`);
      }
else if(session.message.text.toLowerCase().contains('q5693')){session.send(`A5693`);
      }
else if(session.message.text.toLowerCase().contains('q5692')){session.send(`A5692`);
      }
else if(session.message.text.toLowerCase().contains('q5691')){session.send(`A5691`);
      }
else if(session.message.text.toLowerCase().contains('q5690')){session.send(`A5690`);
      }
else if(session.message.text.toLowerCase().contains('q5689')){session.send(`A5689`);
      }
else if(session.message.text.toLowerCase().contains('q5688')){session.send(`A5688`);
      }
else if(session.message.text.toLowerCase().contains('q5687')){session.send(`A5687`);
      }
else if(session.message.text.toLowerCase().contains('q5686')){session.send(`A5686`);
      }
else if(session.message.text.toLowerCase().contains('q5685')){session.send(`A5685`);
      }
else if(session.message.text.toLowerCase().contains('q5684')){session.send(`A5684`);
      }
else if(session.message.text.toLowerCase().contains('q5683')){session.send(`A5683`);
      }
else if(session.message.text.toLowerCase().contains('q5682')){session.send(`A5682`);
      }
else if(session.message.text.toLowerCase().contains('q5681')){session.send(`A5681`);
      }
else if(session.message.text.toLowerCase().contains('q5680')){session.send(`A5680`);
      }
else if(session.message.text.toLowerCase().contains('q5679')){session.send(`A5679`);
      }
else if(session.message.text.toLowerCase().contains('q5678')){session.send(`A5678`);
      }
else if(session.message.text.toLowerCase().contains('q5677')){session.send(`A5677`);
      }
else if(session.message.text.toLowerCase().contains('q5676')){session.send(`A5676`);
      }
else if(session.message.text.toLowerCase().contains('q5675')){session.send(`A5675`);
      }
else if(session.message.text.toLowerCase().contains('q5674')){session.send(`A5674`);
      }
else if(session.message.text.toLowerCase().contains('q5673')){session.send(`A5673`);
      }
else if(session.message.text.toLowerCase().contains('q5672')){session.send(`A5672`);
      }
else if(session.message.text.toLowerCase().contains('q5671')){session.send(`A5671`);
      }
else if(session.message.text.toLowerCase().contains('q5670')){session.send(`A5670`);
      }
else if(session.message.text.toLowerCase().contains('q5669')){session.send(`A5669`);
      }
else if(session.message.text.toLowerCase().contains('q5668')){session.send(`A5668`);
      }
else if(session.message.text.toLowerCase().contains('q5667')){session.send(`A5667`);
      }
else if(session.message.text.toLowerCase().contains('q5666')){session.send(`A5666`);
      }
else if(session.message.text.toLowerCase().contains('q5665')){session.send(`A5665`);
      }
else if(session.message.text.toLowerCase().contains('q5664')){session.send(`A5664`);
      }
else if(session.message.text.toLowerCase().contains('q5663')){session.send(`A5663`);
      }
else if(session.message.text.toLowerCase().contains('q5662')){session.send(`A5662`);
      }
else if(session.message.text.toLowerCase().contains('q5661')){session.send(`A5661`);
      }
else if(session.message.text.toLowerCase().contains('q5660')){session.send(`A5660`);
      }
else if(session.message.text.toLowerCase().contains('q5659')){session.send(`A5659`);
      }
else if(session.message.text.toLowerCase().contains('q5658')){session.send(`A5658`);
      }
else if(session.message.text.toLowerCase().contains('q5657')){session.send(`A5657`);
      }
else if(session.message.text.toLowerCase().contains('q5656')){session.send(`A5656`);
      }
else if(session.message.text.toLowerCase().contains('q5655')){session.send(`A5655`);
      }
else if(session.message.text.toLowerCase().contains('q5654')){session.send(`A5654`);
      }
else if(session.message.text.toLowerCase().contains('q5653')){session.send(`A5653`);
      }
else if(session.message.text.toLowerCase().contains('q5652')){session.send(`A5652`);
      }
else if(session.message.text.toLowerCase().contains('q5651')){session.send(`A5651`);
      }
else if(session.message.text.toLowerCase().contains('q5650')){session.send(`A5650`);
      }
else if(session.message.text.toLowerCase().contains('q5649')){session.send(`A5649`);
      }
else if(session.message.text.toLowerCase().contains('q5648')){session.send(`A5648`);
      }
else if(session.message.text.toLowerCase().contains('q5647')){session.send(`A5647`);
      }
else if(session.message.text.toLowerCase().contains('q5646')){session.send(`A5646`);
      }
else if(session.message.text.toLowerCase().contains('q5645')){session.send(`A5645`);
      }
else if(session.message.text.toLowerCase().contains('q5644')){session.send(`A5644`);
      }
else if(session.message.text.toLowerCase().contains('q5643')){session.send(`A5643`);
      }
else if(session.message.text.toLowerCase().contains('q5642')){session.send(`A5642`);
      }
else if(session.message.text.toLowerCase().contains('q5641')){session.send(`A5641`);
      }
else if(session.message.text.toLowerCase().contains('q5640')){session.send(`A5640`);
      }
else if(session.message.text.toLowerCase().contains('q5639')){session.send(`A5639`);
      }
else if(session.message.text.toLowerCase().contains('q5638')){session.send(`A5638`);
      }
else if(session.message.text.toLowerCase().contains('q5637')){session.send(`A5637`);
      }
else if(session.message.text.toLowerCase().contains('q5636')){session.send(`A5636`);
      }
else if(session.message.text.toLowerCase().contains('q5635')){session.send(`A5635`);
      }
else if(session.message.text.toLowerCase().contains('q5634')){session.send(`A5634`);
      }
else if(session.message.text.toLowerCase().contains('q5633')){session.send(`A5633`);
      }
else if(session.message.text.toLowerCase().contains('q5632')){session.send(`A5632`);
      }
else if(session.message.text.toLowerCase().contains('q5631')){session.send(`A5631`);
      }
else if(session.message.text.toLowerCase().contains('q5630')){session.send(`A5630`);
      }
else if(session.message.text.toLowerCase().contains('q5629')){session.send(`A5629`);
      }
else if(session.message.text.toLowerCase().contains('q5628')){session.send(`A5628`);
      }
else if(session.message.text.toLowerCase().contains('q5627')){session.send(`A5627`);
      }
else if(session.message.text.toLowerCase().contains('q5626')){session.send(`A5626`);
      }
else if(session.message.text.toLowerCase().contains('q5625')){session.send(`A5625`);
      }
else if(session.message.text.toLowerCase().contains('q5624')){session.send(`A5624`);
      }
else if(session.message.text.toLowerCase().contains('q5623')){session.send(`A5623`);
      }
else if(session.message.text.toLowerCase().contains('q5622')){session.send(`A5622`);
      }
else if(session.message.text.toLowerCase().contains('q5621')){session.send(`A5621`);
      }
else if(session.message.text.toLowerCase().contains('q5620')){session.send(`A5620`);
      }
else if(session.message.text.toLowerCase().contains('q5619')){session.send(`A5619`);
      }
else if(session.message.text.toLowerCase().contains('q5618')){session.send(`A5618`);
      }
else if(session.message.text.toLowerCase().contains('q5617')){session.send(`A5617`);
      }
else if(session.message.text.toLowerCase().contains('q5616')){session.send(`A5616`);
      }
else if(session.message.text.toLowerCase().contains('q5615')){session.send(`A5615`);
      }
else if(session.message.text.toLowerCase().contains('q5614')){session.send(`A5614`);
      }
else if(session.message.text.toLowerCase().contains('q5613')){session.send(`A5613`);
      }
else if(session.message.text.toLowerCase().contains('q5612')){session.send(`A5612`);
      }
else if(session.message.text.toLowerCase().contains('q5611')){session.send(`A5611`);
      }
else if(session.message.text.toLowerCase().contains('q5610')){session.send(`A5610`);
      }
else if(session.message.text.toLowerCase().contains('q5609')){session.send(`A5609`);
      }
else if(session.message.text.toLowerCase().contains('q5608')){session.send(`A5608`);
      }
else if(session.message.text.toLowerCase().contains('q5607')){session.send(`A5607`);
      }
else if(session.message.text.toLowerCase().contains('q5606')){session.send(`A5606`);
      }
else if(session.message.text.toLowerCase().contains('q5605')){session.send(`A5605`);
      }
else if(session.message.text.toLowerCase().contains('q5604')){session.send(`A5604`);
      }
else if(session.message.text.toLowerCase().contains('q5603')){session.send(`A5603`);
      }
else if(session.message.text.toLowerCase().contains('q5602')){session.send(`A5602`);
      }
else if(session.message.text.toLowerCase().contains('q5601')){session.send(`A5601`);
      }
else if(session.message.text.toLowerCase().contains('q5600')){session.send(`A5600`);
      }
else if(session.message.text.toLowerCase().contains('q5599')){session.send(`A5599`);
      }
else if(session.message.text.toLowerCase().contains('q5598')){session.send(`A5598`);
      }
else if(session.message.text.toLowerCase().contains('q5597')){session.send(`A5597`);
      }
else if(session.message.text.toLowerCase().contains('q5596')){session.send(`A5596`);
      }
else if(session.message.text.toLowerCase().contains('q5595')){session.send(`A5595`);
      }
else if(session.message.text.toLowerCase().contains('q5594')){session.send(`A5594`);
      }
else if(session.message.text.toLowerCase().contains('q5593')){session.send(`A5593`);
      }
else if(session.message.text.toLowerCase().contains('q5592')){session.send(`A5592`);
      }
else if(session.message.text.toLowerCase().contains('q5591')){session.send(`A5591`);
      }
else if(session.message.text.toLowerCase().contains('q5590')){session.send(`A5590`);
      }
else if(session.message.text.toLowerCase().contains('q5589')){session.send(`A5589`);
      }
else if(session.message.text.toLowerCase().contains('q5588')){session.send(`A5588`);
      }
else if(session.message.text.toLowerCase().contains('q5587')){session.send(`A5587`);
      }
else if(session.message.text.toLowerCase().contains('q5586')){session.send(`A5586`);
      }
else if(session.message.text.toLowerCase().contains('q5585')){session.send(`A5585`);
      }
else if(session.message.text.toLowerCase().contains('q5584')){session.send(`A5584`);
      }
else if(session.message.text.toLowerCase().contains('q5583')){session.send(`A5583`);
      }
else if(session.message.text.toLowerCase().contains('q5582')){session.send(`A5582`);
      }
else if(session.message.text.toLowerCase().contains('q5581')){session.send(`A5581`);
      }
else if(session.message.text.toLowerCase().contains('q5580')){session.send(`A5580`);
      }
else if(session.message.text.toLowerCase().contains('q5579')){session.send(`A5579`);
      }
else if(session.message.text.toLowerCase().contains('q5578')){session.send(`A5578`);
      }
else if(session.message.text.toLowerCase().contains('q5577')){session.send(`A5577`);
      }
else if(session.message.text.toLowerCase().contains('q5576')){session.send(`A5576`);
      }
else if(session.message.text.toLowerCase().contains('q5575')){session.send(`A5575`);
      }
else if(session.message.text.toLowerCase().contains('q5574')){session.send(`A5574`);
      }
else if(session.message.text.toLowerCase().contains('q5573')){session.send(`A5573`);
      }
else if(session.message.text.toLowerCase().contains('q5572')){session.send(`A5572`);
      }
else if(session.message.text.toLowerCase().contains('q5571')){session.send(`A5571`);
      }
else if(session.message.text.toLowerCase().contains('q5570')){session.send(`A5570`);
      }
else if(session.message.text.toLowerCase().contains('q5569')){session.send(`A5569`);
      }
else if(session.message.text.toLowerCase().contains('q5568')){session.send(`A5568`);
      }
else if(session.message.text.toLowerCase().contains('q5567')){session.send(`A5567`);
      }
else if(session.message.text.toLowerCase().contains('q5566')){session.send(`A5566`);
      }
else if(session.message.text.toLowerCase().contains('q5565')){session.send(`A5565`);
      }
else if(session.message.text.toLowerCase().contains('q5564')){session.send(`A5564`);
      }
else if(session.message.text.toLowerCase().contains('q5563')){session.send(`A5563`);
      }
else if(session.message.text.toLowerCase().contains('q5562')){session.send(`A5562`);
      }
else if(session.message.text.toLowerCase().contains('q5561')){session.send(`A5561`);
      }
else if(session.message.text.toLowerCase().contains('q5560')){session.send(`A5560`);
      }
else if(session.message.text.toLowerCase().contains('q5559')){session.send(`A5559`);
      }
else if(session.message.text.toLowerCase().contains('q5558')){session.send(`A5558`);
      }
else if(session.message.text.toLowerCase().contains('q5557')){session.send(`A5557`);
      }
else if(session.message.text.toLowerCase().contains('q5556')){session.send(`A5556`);
      }
else if(session.message.text.toLowerCase().contains('q5555')){session.send(`A5555`);
      }
else if(session.message.text.toLowerCase().contains('q5554')){session.send(`A5554`);
      }
else if(session.message.text.toLowerCase().contains('q5553')){session.send(`A5553`);
      }
else if(session.message.text.toLowerCase().contains('q5552')){session.send(`A5552`);
      }
else if(session.message.text.toLowerCase().contains('q5551')){session.send(`A5551`);
      }
else if(session.message.text.toLowerCase().contains('q5550')){session.send(`A5550`);
      }
else if(session.message.text.toLowerCase().contains('q5549')){session.send(`A5549`);
      }
else if(session.message.text.toLowerCase().contains('q5548')){session.send(`A5548`);
      }
else if(session.message.text.toLowerCase().contains('q5547')){session.send(`A5547`);
      }
else if(session.message.text.toLowerCase().contains('q5546')){session.send(`A5546`);
      }
else if(session.message.text.toLowerCase().contains('q5545')){session.send(`A5545`);
      }
else if(session.message.text.toLowerCase().contains('q5544')){session.send(`A5544`);
      }
else if(session.message.text.toLowerCase().contains('q5543')){session.send(`A5543`);
      }
else if(session.message.text.toLowerCase().contains('q5542')){session.send(`A5542`);
      }
else if(session.message.text.toLowerCase().contains('q5541')){session.send(`A5541`);
      }
else if(session.message.text.toLowerCase().contains('q5540')){session.send(`A5540`);
      }
else if(session.message.text.toLowerCase().contains('q5539')){session.send(`A5539`);
      }
else if(session.message.text.toLowerCase().contains('q5538')){session.send(`A5538`);
      }
else if(session.message.text.toLowerCase().contains('q5537')){session.send(`A5537`);
      }
else if(session.message.text.toLowerCase().contains('q5536')){session.send(`A5536`);
      }
else if(session.message.text.toLowerCase().contains('q5535')){session.send(`A5535`);
      }
else if(session.message.text.toLowerCase().contains('q5534')){session.send(`A5534`);
      }
else if(session.message.text.toLowerCase().contains('q5533')){session.send(`A5533`);
      }
else if(session.message.text.toLowerCase().contains('q5532')){session.send(`A5532`);
      }
else if(session.message.text.toLowerCase().contains('q5531')){session.send(`A5531`);
      }
else if(session.message.text.toLowerCase().contains('q5530')){session.send(`A5530`);
      }
else if(session.message.text.toLowerCase().contains('q5529')){session.send(`A5529`);
      }
else if(session.message.text.toLowerCase().contains('q5528')){session.send(`A5528`);
      }
else if(session.message.text.toLowerCase().contains('q5527')){session.send(`A5527`);
      }
else if(session.message.text.toLowerCase().contains('q5526')){session.send(`A5526`);
      }
else if(session.message.text.toLowerCase().contains('q5525')){session.send(`A5525`);
      }
else if(session.message.text.toLowerCase().contains('q5524')){session.send(`A5524`);
      }
else if(session.message.text.toLowerCase().contains('q5523')){session.send(`A5523`);
      }
else if(session.message.text.toLowerCase().contains('q5522')){session.send(`A5522`);
      }
else if(session.message.text.toLowerCase().contains('q5521')){session.send(`A5521`);
      }
else if(session.message.text.toLowerCase().contains('q5520')){session.send(`A5520`);
      }
else if(session.message.text.toLowerCase().contains('q5519')){session.send(`A5519`);
      }
else if(session.message.text.toLowerCase().contains('q5518')){session.send(`A5518`);
      }
else if(session.message.text.toLowerCase().contains('q5517')){session.send(`A5517`);
      }
else if(session.message.text.toLowerCase().contains('q5516')){session.send(`A5516`);
      }
else if(session.message.text.toLowerCase().contains('q5515')){session.send(`A5515`);
      }
else if(session.message.text.toLowerCase().contains('q5514')){session.send(`A5514`);
      }
else if(session.message.text.toLowerCase().contains('q5513')){session.send(`A5513`);
      }
else if(session.message.text.toLowerCase().contains('q5512')){session.send(`A5512`);
      }
else if(session.message.text.toLowerCase().contains('q5511')){session.send(`A5511`);
      }
else if(session.message.text.toLowerCase().contains('q5510')){session.send(`A5510`);
      }
else if(session.message.text.toLowerCase().contains('q5509')){session.send(`A5509`);
      }
else if(session.message.text.toLowerCase().contains('q5508')){session.send(`A5508`);
      }
else if(session.message.text.toLowerCase().contains('q5507')){session.send(`A5507`);
      }
else if(session.message.text.toLowerCase().contains('q5506')){session.send(`A5506`);
      }
else if(session.message.text.toLowerCase().contains('q5505')){session.send(`A5505`);
      }
else if(session.message.text.toLowerCase().contains('q5504')){session.send(`A5504`);
      }
else if(session.message.text.toLowerCase().contains('q5503')){session.send(`A5503`);
      }
else if(session.message.text.toLowerCase().contains('q5502')){session.send(`A5502`);
      }
else if(session.message.text.toLowerCase().contains('q5501')){session.send(`A5501`);
      }
else if(session.message.text.toLowerCase().contains('q5500')){session.send(`A5500`);
      }
else if(session.message.text.toLowerCase().contains('q5499')){session.send(`A5499`);
      }
else if(session.message.text.toLowerCase().contains('q5498')){session.send(`A5498`);
      }
else if(session.message.text.toLowerCase().contains('q5497')){session.send(`A5497`);
      }
else if(session.message.text.toLowerCase().contains('q5496')){session.send(`A5496`);
      }
else if(session.message.text.toLowerCase().contains('q5495')){session.send(`A5495`);
      }
else if(session.message.text.toLowerCase().contains('q5494')){session.send(`A5494`);
      }
else if(session.message.text.toLowerCase().contains('q5493')){session.send(`A5493`);
      }
else if(session.message.text.toLowerCase().contains('q5492')){session.send(`A5492`);
      }
else if(session.message.text.toLowerCase().contains('q5491')){session.send(`A5491`);
      }
else if(session.message.text.toLowerCase().contains('q5490')){session.send(`A5490`);
      }
else if(session.message.text.toLowerCase().contains('q5489')){session.send(`A5489`);
      }
else if(session.message.text.toLowerCase().contains('q5488')){session.send(`A5488`);
      }
else if(session.message.text.toLowerCase().contains('q5487')){session.send(`A5487`);
      }
else if(session.message.text.toLowerCase().contains('q5486')){session.send(`A5486`);
      }
else if(session.message.text.toLowerCase().contains('q5485')){session.send(`A5485`);
      }
else if(session.message.text.toLowerCase().contains('q5484')){session.send(`A5484`);
      }
else if(session.message.text.toLowerCase().contains('q5483')){session.send(`A5483`);
      }
else if(session.message.text.toLowerCase().contains('q5482')){session.send(`A5482`);
      }
else if(session.message.text.toLowerCase().contains('q5481')){session.send(`A5481`);
      }
else if(session.message.text.toLowerCase().contains('q5480')){session.send(`A5480`);
      }
else if(session.message.text.toLowerCase().contains('q5479')){session.send(`A5479`);
      }
else if(session.message.text.toLowerCase().contains('q5478')){session.send(`A5478`);
      }
else if(session.message.text.toLowerCase().contains('q5477')){session.send(`A5477`);
      }
else if(session.message.text.toLowerCase().contains('q5476')){session.send(`A5476`);
      }
else if(session.message.text.toLowerCase().contains('q5475')){session.send(`A5475`);
      }
else if(session.message.text.toLowerCase().contains('q5474')){session.send(`A5474`);
      }
else if(session.message.text.toLowerCase().contains('q5473')){session.send(`A5473`);
      }
else if(session.message.text.toLowerCase().contains('q5472')){session.send(`A5472`);
      }
else if(session.message.text.toLowerCase().contains('q5471')){session.send(`A5471`);
      }
else if(session.message.text.toLowerCase().contains('q5470')){session.send(`A5470`);
      }
else if(session.message.text.toLowerCase().contains('q5469')){session.send(`A5469`);
      }
else if(session.message.text.toLowerCase().contains('q5468')){session.send(`A5468`);
      }
else if(session.message.text.toLowerCase().contains('q5467')){session.send(`A5467`);
      }
else if(session.message.text.toLowerCase().contains('q5466')){session.send(`A5466`);
      }
else if(session.message.text.toLowerCase().contains('q5465')){session.send(`A5465`);
      }
else if(session.message.text.toLowerCase().contains('q5464')){session.send(`A5464`);
      }
else if(session.message.text.toLowerCase().contains('q5463')){session.send(`A5463`);
      }
else if(session.message.text.toLowerCase().contains('q5462')){session.send(`A5462`);
      }
else if(session.message.text.toLowerCase().contains('q5461')){session.send(`A5461`);
      }
else if(session.message.text.toLowerCase().contains('q5460')){session.send(`A5460`);
      }
else if(session.message.text.toLowerCase().contains('q5459')){session.send(`A5459`);
      }
else if(session.message.text.toLowerCase().contains('q5458')){session.send(`A5458`);
      }
else if(session.message.text.toLowerCase().contains('q5457')){session.send(`A5457`);
      }
else if(session.message.text.toLowerCase().contains('q5456')){session.send(`A5456`);
      }
else if(session.message.text.toLowerCase().contains('q5455')){session.send(`A5455`);
      }
else if(session.message.text.toLowerCase().contains('q5454')){session.send(`A5454`);
      }
else if(session.message.text.toLowerCase().contains('q5453')){session.send(`A5453`);
      }
else if(session.message.text.toLowerCase().contains('q5452')){session.send(`A5452`);
      }
else if(session.message.text.toLowerCase().contains('q5451')){session.send(`A5451`);
      }
else if(session.message.text.toLowerCase().contains('q5450')){session.send(`A5450`);
      }
else if(session.message.text.toLowerCase().contains('q5449')){session.send(`A5449`);
      }
else if(session.message.text.toLowerCase().contains('q5448')){session.send(`A5448`);
      }
else if(session.message.text.toLowerCase().contains('q5447')){session.send(`A5447`);
      }
else if(session.message.text.toLowerCase().contains('q5446')){session.send(`A5446`);
      }
else if(session.message.text.toLowerCase().contains('q5445')){session.send(`A5445`);
      }
else if(session.message.text.toLowerCase().contains('q5444')){session.send(`A5444`);
      }
else if(session.message.text.toLowerCase().contains('q5443')){session.send(`A5443`);
      }
else if(session.message.text.toLowerCase().contains('q5442')){session.send(`A5442`);
      }
else if(session.message.text.toLowerCase().contains('q5441')){session.send(`A5441`);
      }
else if(session.message.text.toLowerCase().contains('q5440')){session.send(`A5440`);
      }
else if(session.message.text.toLowerCase().contains('q5439')){session.send(`A5439`);
      }
else if(session.message.text.toLowerCase().contains('q5438')){session.send(`A5438`);
      }
else if(session.message.text.toLowerCase().contains('q5437')){session.send(`A5437`);
      }
else if(session.message.text.toLowerCase().contains('q5436')){session.send(`A5436`);
      }
else if(session.message.text.toLowerCase().contains('q5435')){session.send(`A5435`);
      }
else if(session.message.text.toLowerCase().contains('q5434')){session.send(`A5434`);
      }
else if(session.message.text.toLowerCase().contains('q5433')){session.send(`A5433`);
      }
else if(session.message.text.toLowerCase().contains('q5432')){session.send(`A5432`);
      }
else if(session.message.text.toLowerCase().contains('q5431')){session.send(`A5431`);
      }
else if(session.message.text.toLowerCase().contains('q5430')){session.send(`A5430`);
      }
else if(session.message.text.toLowerCase().contains('q5429')){session.send(`A5429`);
      }
else if(session.message.text.toLowerCase().contains('q5428')){session.send(`A5428`);
      }
else if(session.message.text.toLowerCase().contains('q5427')){session.send(`A5427`);
      }
else if(session.message.text.toLowerCase().contains('q5426')){session.send(`A5426`);
      }
else if(session.message.text.toLowerCase().contains('q5425')){session.send(`A5425`);
      }
else if(session.message.text.toLowerCase().contains('q5424')){session.send(`A5424`);
      }
else if(session.message.text.toLowerCase().contains('q5423')){session.send(`A5423`);
      }
else if(session.message.text.toLowerCase().contains('q5422')){session.send(`A5422`);
      }
else if(session.message.text.toLowerCase().contains('q5421')){session.send(`A5421`);
      }
else if(session.message.text.toLowerCase().contains('q5420')){session.send(`A5420`);
      }
else if(session.message.text.toLowerCase().contains('q5419')){session.send(`A5419`);
      }
else if(session.message.text.toLowerCase().contains('q5418')){session.send(`A5418`);
      }
else if(session.message.text.toLowerCase().contains('q5417')){session.send(`A5417`);
      }
else if(session.message.text.toLowerCase().contains('q5416')){session.send(`A5416`);
      }
else if(session.message.text.toLowerCase().contains('q5415')){session.send(`A5415`);
      }
else if(session.message.text.toLowerCase().contains('q5414')){session.send(`A5414`);
      }
else if(session.message.text.toLowerCase().contains('q5413')){session.send(`A5413`);
      }
else if(session.message.text.toLowerCase().contains('q5412')){session.send(`A5412`);
      }
else if(session.message.text.toLowerCase().contains('q5411')){session.send(`A5411`);
      }
else if(session.message.text.toLowerCase().contains('q5410')){session.send(`A5410`);
      }
else if(session.message.text.toLowerCase().contains('q5409')){session.send(`A5409`);
      }
else if(session.message.text.toLowerCase().contains('q5408')){session.send(`A5408`);
      }
else if(session.message.text.toLowerCase().contains('q5407')){session.send(`A5407`);
      }
else if(session.message.text.toLowerCase().contains('q5406')){session.send(`A5406`);
      }
else if(session.message.text.toLowerCase().contains('q5405')){session.send(`A5405`);
      }
else if(session.message.text.toLowerCase().contains('q5404')){session.send(`A5404`);
      }
else if(session.message.text.toLowerCase().contains('q5403')){session.send(`A5403`);
      }
else if(session.message.text.toLowerCase().contains('q5402')){session.send(`A5402`);
      }
else if(session.message.text.toLowerCase().contains('q5401')){session.send(`A5401`);
      }
else if(session.message.text.toLowerCase().contains('q5400')){session.send(`A5400`);
      }
else if(session.message.text.toLowerCase().contains('q5399')){session.send(`A5399`);
      }
else if(session.message.text.toLowerCase().contains('q5398')){session.send(`A5398`);
      }
else if(session.message.text.toLowerCase().contains('q5397')){session.send(`A5397`);
      }
else if(session.message.text.toLowerCase().contains('q5396')){session.send(`A5396`);
      }
else if(session.message.text.toLowerCase().contains('q5395')){session.send(`A5395`);
      }
else if(session.message.text.toLowerCase().contains('q5394')){session.send(`A5394`);
      }
else if(session.message.text.toLowerCase().contains('q5393')){session.send(`A5393`);
      }
else if(session.message.text.toLowerCase().contains('q5392')){session.send(`A5392`);
      }
else if(session.message.text.toLowerCase().contains('q5391')){session.send(`A5391`);
      }
else if(session.message.text.toLowerCase().contains('q5390')){session.send(`A5390`);
      }
else if(session.message.text.toLowerCase().contains('q5389')){session.send(`A5389`);
      }
else if(session.message.text.toLowerCase().contains('q5388')){session.send(`A5388`);
      }
else if(session.message.text.toLowerCase().contains('q5387')){session.send(`A5387`);
      }
else if(session.message.text.toLowerCase().contains('q5386')){session.send(`A5386`);
      }
else if(session.message.text.toLowerCase().contains('q5385')){session.send(`A5385`);
      }
else if(session.message.text.toLowerCase().contains('q5384')){session.send(`A5384`);
      }
else if(session.message.text.toLowerCase().contains('q5383')){session.send(`A5383`);
      }
else if(session.message.text.toLowerCase().contains('q5382')){session.send(`A5382`);
      }
else if(session.message.text.toLowerCase().contains('q5381')){session.send(`A5381`);
      }
else if(session.message.text.toLowerCase().contains('q5380')){session.send(`A5380`);
      }
else if(session.message.text.toLowerCase().contains('q5379')){session.send(`A5379`);
      }
else if(session.message.text.toLowerCase().contains('q5378')){session.send(`A5378`);
      }
else if(session.message.text.toLowerCase().contains('q5377')){session.send(`A5377`);
      }
else if(session.message.text.toLowerCase().contains('q5376')){session.send(`A5376`);
      }
else if(session.message.text.toLowerCase().contains('q5375')){session.send(`A5375`);
      }
else if(session.message.text.toLowerCase().contains('q5374')){session.send(`A5374`);
      }
else if(session.message.text.toLowerCase().contains('q5373')){session.send(`A5373`);
      }
else if(session.message.text.toLowerCase().contains('q5372')){session.send(`A5372`);
      }
else if(session.message.text.toLowerCase().contains('q5371')){session.send(`A5371`);
      }
else if(session.message.text.toLowerCase().contains('q5370')){session.send(`A5370`);
      }
else if(session.message.text.toLowerCase().contains('q5369')){session.send(`A5369`);
      }
else if(session.message.text.toLowerCase().contains('q5368')){session.send(`A5368`);
      }
else if(session.message.text.toLowerCase().contains('q5367')){session.send(`A5367`);
      }
else if(session.message.text.toLowerCase().contains('q5366')){session.send(`A5366`);
      }
else if(session.message.text.toLowerCase().contains('q5365')){session.send(`A5365`);
      }
else if(session.message.text.toLowerCase().contains('q5364')){session.send(`A5364`);
      }
else if(session.message.text.toLowerCase().contains('q5363')){session.send(`A5363`);
      }
else if(session.message.text.toLowerCase().contains('q5362')){session.send(`A5362`);
      }
else if(session.message.text.toLowerCase().contains('q5361')){session.send(`A5361`);
      }
else if(session.message.text.toLowerCase().contains('q5360')){session.send(`A5360`);
      }
else if(session.message.text.toLowerCase().contains('q5359')){session.send(`A5359`);
      }
else if(session.message.text.toLowerCase().contains('q5358')){session.send(`A5358`);
      }
else if(session.message.text.toLowerCase().contains('q5357')){session.send(`A5357`);
      }
else if(session.message.text.toLowerCase().contains('q5356')){session.send(`A5356`);
      }
else if(session.message.text.toLowerCase().contains('q5355')){session.send(`A5355`);
      }
else if(session.message.text.toLowerCase().contains('q5354')){session.send(`A5354`);
      }
else if(session.message.text.toLowerCase().contains('q5353')){session.send(`A5353`);
      }
else if(session.message.text.toLowerCase().contains('q5352')){session.send(`A5352`);
      }
else if(session.message.text.toLowerCase().contains('q5351')){session.send(`A5351`);
      }
else if(session.message.text.toLowerCase().contains('q5350')){session.send(`A5350`);
      }
else if(session.message.text.toLowerCase().contains('q5349')){session.send(`A5349`);
      }
else if(session.message.text.toLowerCase().contains('q5348')){session.send(`A5348`);
      }
else if(session.message.text.toLowerCase().contains('q5347')){session.send(`A5347`);
      }
else if(session.message.text.toLowerCase().contains('q5346')){session.send(`A5346`);
      }
else if(session.message.text.toLowerCase().contains('q5345')){session.send(`A5345`);
      }
else if(session.message.text.toLowerCase().contains('q5344')){session.send(`A5344`);
      }
else if(session.message.text.toLowerCase().contains('q5343')){session.send(`A5343`);
      }
else if(session.message.text.toLowerCase().contains('q5342')){session.send(`A5342`);
      }
else if(session.message.text.toLowerCase().contains('q5341')){session.send(`A5341`);
      }
else if(session.message.text.toLowerCase().contains('q5340')){session.send(`A5340`);
      }
else if(session.message.text.toLowerCase().contains('q5339')){session.send(`A5339`);
      }
else if(session.message.text.toLowerCase().contains('q5338')){session.send(`A5338`);
      }
else if(session.message.text.toLowerCase().contains('q5337')){session.send(`A5337`);
      }
else if(session.message.text.toLowerCase().contains('q5336')){session.send(`A5336`);
      }
else if(session.message.text.toLowerCase().contains('q5335')){session.send(`A5335`);
      }
else if(session.message.text.toLowerCase().contains('q5334')){session.send(`A5334`);
      }
else if(session.message.text.toLowerCase().contains('q5333')){session.send(`A5333`);
      }
else if(session.message.text.toLowerCase().contains('q5332')){session.send(`A5332`);
      }
else if(session.message.text.toLowerCase().contains('q5331')){session.send(`A5331`);
      }
else if(session.message.text.toLowerCase().contains('q5330')){session.send(`A5330`);
      }
else if(session.message.text.toLowerCase().contains('q5329')){session.send(`A5329`);
      }
else if(session.message.text.toLowerCase().contains('q5328')){session.send(`A5328`);
      }
else if(session.message.text.toLowerCase().contains('q5327')){session.send(`A5327`);
      }
else if(session.message.text.toLowerCase().contains('q5326')){session.send(`A5326`);
      }
else if(session.message.text.toLowerCase().contains('q5325')){session.send(`A5325`);
      }
else if(session.message.text.toLowerCase().contains('q5324')){session.send(`A5324`);
      }
else if(session.message.text.toLowerCase().contains('q5323')){session.send(`A5323`);
      }
else if(session.message.text.toLowerCase().contains('q5322')){session.send(`A5322`);
      }
else if(session.message.text.toLowerCase().contains('q5321')){session.send(`A5321`);
      }
else if(session.message.text.toLowerCase().contains('q5320')){session.send(`A5320`);
      }
else if(session.message.text.toLowerCase().contains('q5319')){session.send(`A5319`);
      }
else if(session.message.text.toLowerCase().contains('q5318')){session.send(`A5318`);
      }
else if(session.message.text.toLowerCase().contains('q5317')){session.send(`A5317`);
      }
else if(session.message.text.toLowerCase().contains('q5316')){session.send(`A5316`);
      }
else if(session.message.text.toLowerCase().contains('q5315')){session.send(`A5315`);
      }
else if(session.message.text.toLowerCase().contains('q5314')){session.send(`A5314`);
      }
else if(session.message.text.toLowerCase().contains('q5313')){session.send(`A5313`);
      }
else if(session.message.text.toLowerCase().contains('q5312')){session.send(`A5312`);
      }
else if(session.message.text.toLowerCase().contains('q5311')){session.send(`A5311`);
      }
else if(session.message.text.toLowerCase().contains('q5310')){session.send(`A5310`);
      }
else if(session.message.text.toLowerCase().contains('q5309')){session.send(`A5309`);
      }
else if(session.message.text.toLowerCase().contains('q5308')){session.send(`A5308`);
      }
else if(session.message.text.toLowerCase().contains('q5307')){session.send(`A5307`);
      }
else if(session.message.text.toLowerCase().contains('q5306')){session.send(`A5306`);
      }
else if(session.message.text.toLowerCase().contains('q5305')){session.send(`A5305`);
      }
else if(session.message.text.toLowerCase().contains('q5304')){session.send(`A5304`);
      }
else if(session.message.text.toLowerCase().contains('q5303')){session.send(`A5303`);
      }
else if(session.message.text.toLowerCase().contains('q5302')){session.send(`A5302`);
      }
else if(session.message.text.toLowerCase().contains('q5301')){session.send(`A5301`);
      }
else if(session.message.text.toLowerCase().contains('q5300')){session.send(`A5300`);
      }
else if(session.message.text.toLowerCase().contains('q5299')){session.send(`A5299`);
      }
else if(session.message.text.toLowerCase().contains('q5298')){session.send(`A5298`);
      }
else if(session.message.text.toLowerCase().contains('q5297')){session.send(`A5297`);
      }
else if(session.message.text.toLowerCase().contains('q5296')){session.send(`A5296`);
      }
else if(session.message.text.toLowerCase().contains('q5295')){session.send(`A5295`);
      }
else if(session.message.text.toLowerCase().contains('q5294')){session.send(`A5294`);
      }
else if(session.message.text.toLowerCase().contains('q5293')){session.send(`A5293`);
      }
else if(session.message.text.toLowerCase().contains('q5292')){session.send(`A5292`);
      }
else if(session.message.text.toLowerCase().contains('q5291')){session.send(`A5291`);
      }
else if(session.message.text.toLowerCase().contains('q5290')){session.send(`A5290`);
      }
else if(session.message.text.toLowerCase().contains('q5289')){session.send(`A5289`);
      }
else if(session.message.text.toLowerCase().contains('q5288')){session.send(`A5288`);
      }
else if(session.message.text.toLowerCase().contains('q5287')){session.send(`A5287`);
      }
else if(session.message.text.toLowerCase().contains('q5286')){session.send(`A5286`);
      }
else if(session.message.text.toLowerCase().contains('q5285')){session.send(`A5285`);
      }
else if(session.message.text.toLowerCase().contains('q5284')){session.send(`A5284`);
      }
else if(session.message.text.toLowerCase().contains('q5283')){session.send(`A5283`);
      }
else if(session.message.text.toLowerCase().contains('q5282')){session.send(`A5282`);
      }
else if(session.message.text.toLowerCase().contains('q5281')){session.send(`A5281`);
      }
else if(session.message.text.toLowerCase().contains('q5280')){session.send(`A5280`);
      }
else if(session.message.text.toLowerCase().contains('q5279')){session.send(`A5279`);
      }
else if(session.message.text.toLowerCase().contains('q5278')){session.send(`A5278`);
      }
else if(session.message.text.toLowerCase().contains('q5277')){session.send(`A5277`);
      }
else if(session.message.text.toLowerCase().contains('q5276')){session.send(`A5276`);
      }
else if(session.message.text.toLowerCase().contains('q5275')){session.send(`A5275`);
      }
else if(session.message.text.toLowerCase().contains('q5274')){session.send(`A5274`);
      }
else if(session.message.text.toLowerCase().contains('q5273')){session.send(`A5273`);
      }
else if(session.message.text.toLowerCase().contains('q5272')){session.send(`A5272`);
      }
else if(session.message.text.toLowerCase().contains('q5271')){session.send(`A5271`);
      }
else if(session.message.text.toLowerCase().contains('q5270')){session.send(`A5270`);
      }
else if(session.message.text.toLowerCase().contains('q5269')){session.send(`A5269`);
      }
else if(session.message.text.toLowerCase().contains('q5268')){session.send(`A5268`);
      }
else if(session.message.text.toLowerCase().contains('q5267')){session.send(`A5267`);
      }
else if(session.message.text.toLowerCase().contains('q5266')){session.send(`A5266`);
      }
else if(session.message.text.toLowerCase().contains('q5265')){session.send(`A5265`);
      }
else if(session.message.text.toLowerCase().contains('q5264')){session.send(`A5264`);
      }
else if(session.message.text.toLowerCase().contains('q5263')){session.send(`A5263`);
      }
else if(session.message.text.toLowerCase().contains('q5262')){session.send(`A5262`);
      }
else if(session.message.text.toLowerCase().contains('q5261')){session.send(`A5261`);
      }
else if(session.message.text.toLowerCase().contains('q5260')){session.send(`A5260`);
      }
else if(session.message.text.toLowerCase().contains('q5259')){session.send(`A5259`);
      }
else if(session.message.text.toLowerCase().contains('q5258')){session.send(`A5258`);
      }
else if(session.message.text.toLowerCase().contains('q5257')){session.send(`A5257`);
      }
else if(session.message.text.toLowerCase().contains('q5256')){session.send(`A5256`);
      }
else if(session.message.text.toLowerCase().contains('q5255')){session.send(`A5255`);
      }
else if(session.message.text.toLowerCase().contains('q5254')){session.send(`A5254`);
      }
else if(session.message.text.toLowerCase().contains('q5253')){session.send(`A5253`);
      }
else if(session.message.text.toLowerCase().contains('q5252')){session.send(`A5252`);
      }
else if(session.message.text.toLowerCase().contains('q5251')){session.send(`A5251`);
      }
else if(session.message.text.toLowerCase().contains('q5250')){session.send(`A5250`);
      }
else if(session.message.text.toLowerCase().contains('q5249')){session.send(`A5249`);
      }
else if(session.message.text.toLowerCase().contains('q5248')){session.send(`A5248`);
      }
else if(session.message.text.toLowerCase().contains('q5247')){session.send(`A5247`);
      }
else if(session.message.text.toLowerCase().contains('q5246')){session.send(`A5246`);
      }
else if(session.message.text.toLowerCase().contains('q5245')){session.send(`A5245`);
      }
else if(session.message.text.toLowerCase().contains('q5244')){session.send(`A5244`);
      }
else if(session.message.text.toLowerCase().contains('q5243')){session.send(`A5243`);
      }
else if(session.message.text.toLowerCase().contains('q5242')){session.send(`A5242`);
      }
else if(session.message.text.toLowerCase().contains('q5241')){session.send(`A5241`);
      }
else if(session.message.text.toLowerCase().contains('q5240')){session.send(`A5240`);
      }
else if(session.message.text.toLowerCase().contains('q5239')){session.send(`A5239`);
      }
else if(session.message.text.toLowerCase().contains('q5238')){session.send(`A5238`);
      }
else if(session.message.text.toLowerCase().contains('q5237')){session.send(`A5237`);
      }
else if(session.message.text.toLowerCase().contains('q5236')){session.send(`A5236`);
      }
else if(session.message.text.toLowerCase().contains('q5235')){session.send(`A5235`);
      }
else if(session.message.text.toLowerCase().contains('q5234')){session.send(`A5234`);
      }
else if(session.message.text.toLowerCase().contains('q5233')){session.send(`A5233`);
      }
else if(session.message.text.toLowerCase().contains('q5232')){session.send(`A5232`);
      }
else if(session.message.text.toLowerCase().contains('q5231')){session.send(`A5231`);
      }
else if(session.message.text.toLowerCase().contains('q5230')){session.send(`A5230`);
      }
else if(session.message.text.toLowerCase().contains('q5229')){session.send(`A5229`);
      }
else if(session.message.text.toLowerCase().contains('q5228')){session.send(`A5228`);
      }
else if(session.message.text.toLowerCase().contains('q5227')){session.send(`A5227`);
      }
else if(session.message.text.toLowerCase().contains('q5226')){session.send(`A5226`);
      }
else if(session.message.text.toLowerCase().contains('q5225')){session.send(`A5225`);
      }
else if(session.message.text.toLowerCase().contains('q5224')){session.send(`A5224`);
      }
else if(session.message.text.toLowerCase().contains('q5223')){session.send(`A5223`);
      }
else if(session.message.text.toLowerCase().contains('q5222')){session.send(`A5222`);
      }
else if(session.message.text.toLowerCase().contains('q5221')){session.send(`A5221`);
      }
else if(session.message.text.toLowerCase().contains('q5220')){session.send(`A5220`);
      }
else if(session.message.text.toLowerCase().contains('q5219')){session.send(`A5219`);
      }
else if(session.message.text.toLowerCase().contains('q5218')){session.send(`A5218`);
      }
else if(session.message.text.toLowerCase().contains('q5217')){session.send(`A5217`);
      }
else if(session.message.text.toLowerCase().contains('q5216')){session.send(`A5216`);
      }
else if(session.message.text.toLowerCase().contains('q5215')){session.send(`A5215`);
      }
else if(session.message.text.toLowerCase().contains('q5214')){session.send(`A5214`);
      }
else if(session.message.text.toLowerCase().contains('q5213')){session.send(`A5213`);
      }
else if(session.message.text.toLowerCase().contains('q5212')){session.send(`A5212`);
      }
else if(session.message.text.toLowerCase().contains('q5211')){session.send(`A5211`);
      }
else if(session.message.text.toLowerCase().contains('q5210')){session.send(`A5210`);
      }
else if(session.message.text.toLowerCase().contains('q5209')){session.send(`A5209`);
      }
else if(session.message.text.toLowerCase().contains('q5208')){session.send(`A5208`);
      }
else if(session.message.text.toLowerCase().contains('q5207')){session.send(`A5207`);
      }
else if(session.message.text.toLowerCase().contains('q5206')){session.send(`A5206`);
      }
else if(session.message.text.toLowerCase().contains('q5205')){session.send(`A5205`);
      }
else if(session.message.text.toLowerCase().contains('q5204')){session.send(`A5204`);
      }
else if(session.message.text.toLowerCase().contains('q5203')){session.send(`A5203`);
      }
else if(session.message.text.toLowerCase().contains('q5202')){session.send(`A5202`);
      }
else if(session.message.text.toLowerCase().contains('q5201')){session.send(`A5201`);
      }
else if(session.message.text.toLowerCase().contains('q5200')){session.send(`A5200`);
      }
else if(session.message.text.toLowerCase().contains('q5199')){session.send(`A5199`);
      }
else if(session.message.text.toLowerCase().contains('q5198')){session.send(`A5198`);
      }
else if(session.message.text.toLowerCase().contains('q5197')){session.send(`A5197`);
      }
else if(session.message.text.toLowerCase().contains('q5196')){session.send(`A5196`);
      }
else if(session.message.text.toLowerCase().contains('q5195')){session.send(`A5195`);
      }
else if(session.message.text.toLowerCase().contains('q5194')){session.send(`A5194`);
      }
else if(session.message.text.toLowerCase().contains('q5193')){session.send(`A5193`);
      }
else if(session.message.text.toLowerCase().contains('q5192')){session.send(`A5192`);
      }
else if(session.message.text.toLowerCase().contains('q5191')){session.send(`A5191`);
      }
else if(session.message.text.toLowerCase().contains('q5190')){session.send(`A5190`);
      }
else if(session.message.text.toLowerCase().contains('q5189')){session.send(`A5189`);
      }
else if(session.message.text.toLowerCase().contains('q5188')){session.send(`A5188`);
      }
else if(session.message.text.toLowerCase().contains('q5187')){session.send(`A5187`);
      }
else if(session.message.text.toLowerCase().contains('q5186')){session.send(`A5186`);
      }
else if(session.message.text.toLowerCase().contains('q5185')){session.send(`A5185`);
      }
else if(session.message.text.toLowerCase().contains('q5184')){session.send(`A5184`);
      }
else if(session.message.text.toLowerCase().contains('q5183')){session.send(`A5183`);
      }
else if(session.message.text.toLowerCase().contains('q5182')){session.send(`A5182`);
      }
else if(session.message.text.toLowerCase().contains('q5181')){session.send(`A5181`);
      }
else if(session.message.text.toLowerCase().contains('q5180')){session.send(`A5180`);
      }
else if(session.message.text.toLowerCase().contains('q5179')){session.send(`A5179`);
      }
else if(session.message.text.toLowerCase().contains('q5178')){session.send(`A5178`);
      }
else if(session.message.text.toLowerCase().contains('q5177')){session.send(`A5177`);
      }
else if(session.message.text.toLowerCase().contains('q5176')){session.send(`A5176`);
      }
else if(session.message.text.toLowerCase().contains('q5175')){session.send(`A5175`);
      }
else if(session.message.text.toLowerCase().contains('q5174')){session.send(`A5174`);
      }
else if(session.message.text.toLowerCase().contains('q5173')){session.send(`A5173`);
      }
else if(session.message.text.toLowerCase().contains('q5172')){session.send(`A5172`);
      }
else if(session.message.text.toLowerCase().contains('q5171')){session.send(`A5171`);
      }
else if(session.message.text.toLowerCase().contains('q5170')){session.send(`A5170`);
      }
else if(session.message.text.toLowerCase().contains('q5169')){session.send(`A5169`);
      }
else if(session.message.text.toLowerCase().contains('q5168')){session.send(`A5168`);
      }
else if(session.message.text.toLowerCase().contains('q5167')){session.send(`A5167`);
      }
else if(session.message.text.toLowerCase().contains('q5166')){session.send(`A5166`);
      }
else if(session.message.text.toLowerCase().contains('q5165')){session.send(`A5165`);
      }
else if(session.message.text.toLowerCase().contains('q5164')){session.send(`A5164`);
      }
else if(session.message.text.toLowerCase().contains('q5163')){session.send(`A5163`);
      }
else if(session.message.text.toLowerCase().contains('q5162')){session.send(`A5162`);
      }
else if(session.message.text.toLowerCase().contains('q5161')){session.send(`A5161`);
      }
else if(session.message.text.toLowerCase().contains('q5160')){session.send(`A5160`);
      }
else if(session.message.text.toLowerCase().contains('q5159')){session.send(`A5159`);
      }
else if(session.message.text.toLowerCase().contains('q5158')){session.send(`A5158`);
      }
else if(session.message.text.toLowerCase().contains('q5157')){session.send(`A5157`);
      }
else if(session.message.text.toLowerCase().contains('q5156')){session.send(`A5156`);
      }
else if(session.message.text.toLowerCase().contains('q5155')){session.send(`A5155`);
      }
else if(session.message.text.toLowerCase().contains('q5154')){session.send(`A5154`);
      }
else if(session.message.text.toLowerCase().contains('q5153')){session.send(`A5153`);
      }
else if(session.message.text.toLowerCase().contains('q5152')){session.send(`A5152`);
      }
else if(session.message.text.toLowerCase().contains('q5151')){session.send(`A5151`);
      }
else if(session.message.text.toLowerCase().contains('q5150')){session.send(`A5150`);
      }
else if(session.message.text.toLowerCase().contains('q5149')){session.send(`A5149`);
      }
else if(session.message.text.toLowerCase().contains('q5148')){session.send(`A5148`);
      }
else if(session.message.text.toLowerCase().contains('q5147')){session.send(`A5147`);
      }
else if(session.message.text.toLowerCase().contains('q5146')){session.send(`A5146`);
      }
else if(session.message.text.toLowerCase().contains('q5145')){session.send(`A5145`);
      }
else if(session.message.text.toLowerCase().contains('q5144')){session.send(`A5144`);
      }
else if(session.message.text.toLowerCase().contains('q5143')){session.send(`A5143`);
      }
else if(session.message.text.toLowerCase().contains('q5142')){session.send(`A5142`);
      }
else if(session.message.text.toLowerCase().contains('q5141')){session.send(`A5141`);
      }
else if(session.message.text.toLowerCase().contains('q5140')){session.send(`A5140`);
      }
else if(session.message.text.toLowerCase().contains('q5139')){session.send(`A5139`);
      }
else if(session.message.text.toLowerCase().contains('q5138')){session.send(`A5138`);
      }
else if(session.message.text.toLowerCase().contains('q5137')){session.send(`A5137`);
      }
else if(session.message.text.toLowerCase().contains('q5136')){session.send(`A5136`);
      }
else if(session.message.text.toLowerCase().contains('q5135')){session.send(`A5135`);
      }
else if(session.message.text.toLowerCase().contains('q5134')){session.send(`A5134`);
      }
else if(session.message.text.toLowerCase().contains('q5133')){session.send(`A5133`);
      }
else if(session.message.text.toLowerCase().contains('q5132')){session.send(`A5132`);
      }
else if(session.message.text.toLowerCase().contains('q5131')){session.send(`A5131`);
      }
else if(session.message.text.toLowerCase().contains('q5130')){session.send(`A5130`);
      }
else if(session.message.text.toLowerCase().contains('q5129')){session.send(`A5129`);
      }
else if(session.message.text.toLowerCase().contains('q5128')){session.send(`A5128`);
      }
else if(session.message.text.toLowerCase().contains('q5127')){session.send(`A5127`);
      }
else if(session.message.text.toLowerCase().contains('q5126')){session.send(`A5126`);
      }
else if(session.message.text.toLowerCase().contains('q5125')){session.send(`A5125`);
      }
else if(session.message.text.toLowerCase().contains('q5124')){session.send(`A5124`);
      }
else if(session.message.text.toLowerCase().contains('q5123')){session.send(`A5123`);
      }
else if(session.message.text.toLowerCase().contains('q5122')){session.send(`A5122`);
      }
else if(session.message.text.toLowerCase().contains('q5121')){session.send(`A5121`);
      }
else if(session.message.text.toLowerCase().contains('q5120')){session.send(`A5120`);
      }
else if(session.message.text.toLowerCase().contains('q5119')){session.send(`A5119`);
      }
else if(session.message.text.toLowerCase().contains('q5118')){session.send(`A5118`);
      }
else if(session.message.text.toLowerCase().contains('q5117')){session.send(`A5117`);
      }
else if(session.message.text.toLowerCase().contains('q5116')){session.send(`A5116`);
      }
else if(session.message.text.toLowerCase().contains('q5115')){session.send(`A5115`);
      }
else if(session.message.text.toLowerCase().contains('q5114')){session.send(`A5114`);
      }
else if(session.message.text.toLowerCase().contains('q5113')){session.send(`A5113`);
      }
else if(session.message.text.toLowerCase().contains('q5112')){session.send(`A5112`);
      }
else if(session.message.text.toLowerCase().contains('q5111')){session.send(`A5111`);
      }
else if(session.message.text.toLowerCase().contains('q5110')){session.send(`A5110`);
      }
else if(session.message.text.toLowerCase().contains('q5109')){session.send(`A5109`);
      }
else if(session.message.text.toLowerCase().contains('q5108')){session.send(`A5108`);
      }
else if(session.message.text.toLowerCase().contains('q5107')){session.send(`A5107`);
      }
else if(session.message.text.toLowerCase().contains('q5106')){session.send(`A5106`);
      }
else if(session.message.text.toLowerCase().contains('q5105')){session.send(`A5105`);
      }
else if(session.message.text.toLowerCase().contains('q5104')){session.send(`A5104`);
      }
else if(session.message.text.toLowerCase().contains('q5103')){session.send(`A5103`);
      }
else if(session.message.text.toLowerCase().contains('q5102')){session.send(`A5102`);
      }
else if(session.message.text.toLowerCase().contains('q5101')){session.send(`A5101`);
      }
else if(session.message.text.toLowerCase().contains('q5100')){session.send(`A5100`);
      }
else if(session.message.text.toLowerCase().contains('q5099')){session.send(`A5099`);
      }
else if(session.message.text.toLowerCase().contains('q5098')){session.send(`A5098`);
      }
else if(session.message.text.toLowerCase().contains('q5097')){session.send(`A5097`);
      }
else if(session.message.text.toLowerCase().contains('q5096')){session.send(`A5096`);
      }
else if(session.message.text.toLowerCase().contains('q5095')){session.send(`A5095`);
      }
else if(session.message.text.toLowerCase().contains('q5094')){session.send(`A5094`);
      }
else if(session.message.text.toLowerCase().contains('q5093')){session.send(`A5093`);
      }
else if(session.message.text.toLowerCase().contains('q5092')){session.send(`A5092`);
      }
else if(session.message.text.toLowerCase().contains('q5091')){session.send(`A5091`);
      }
else if(session.message.text.toLowerCase().contains('q5090')){session.send(`A5090`);
      }
else if(session.message.text.toLowerCase().contains('q5089')){session.send(`A5089`);
      }
else if(session.message.text.toLowerCase().contains('q5088')){session.send(`A5088`);
      }
else if(session.message.text.toLowerCase().contains('q5087')){session.send(`A5087`);
      }
else if(session.message.text.toLowerCase().contains('q5086')){session.send(`A5086`);
      }
else if(session.message.text.toLowerCase().contains('q5085')){session.send(`A5085`);
      }
else if(session.message.text.toLowerCase().contains('q5084')){session.send(`A5084`);
      }
else if(session.message.text.toLowerCase().contains('q5083')){session.send(`A5083`);
      }
else if(session.message.text.toLowerCase().contains('q5082')){session.send(`A5082`);
      }
else if(session.message.text.toLowerCase().contains('q5081')){session.send(`A5081`);
      }
else if(session.message.text.toLowerCase().contains('q5080')){session.send(`A5080`);
      }
else if(session.message.text.toLowerCase().contains('q5079')){session.send(`A5079`);
      }
else if(session.message.text.toLowerCase().contains('q5078')){session.send(`A5078`);
      }
else if(session.message.text.toLowerCase().contains('q5077')){session.send(`A5077`);
      }
else if(session.message.text.toLowerCase().contains('q5076')){session.send(`A5076`);
      }
else if(session.message.text.toLowerCase().contains('q5075')){session.send(`A5075`);
      }
else if(session.message.text.toLowerCase().contains('q5074')){session.send(`A5074`);
      }
else if(session.message.text.toLowerCase().contains('q5073')){session.send(`A5073`);
      }
else if(session.message.text.toLowerCase().contains('q5072')){session.send(`A5072`);
      }
else if(session.message.text.toLowerCase().contains('q5071')){session.send(`A5071`);
      }
else if(session.message.text.toLowerCase().contains('q5070')){session.send(`A5070`);
      }
else if(session.message.text.toLowerCase().contains('q5069')){session.send(`A5069`);
      }
else if(session.message.text.toLowerCase().contains('q5068')){session.send(`A5068`);
      }
else if(session.message.text.toLowerCase().contains('q5067')){session.send(`A5067`);
      }
else if(session.message.text.toLowerCase().contains('q5066')){session.send(`A5066`);
      }
else if(session.message.text.toLowerCase().contains('q5065')){session.send(`A5065`);
      }
else if(session.message.text.toLowerCase().contains('q5064')){session.send(`A5064`);
      }
else if(session.message.text.toLowerCase().contains('q5063')){session.send(`A5063`);
      }
else if(session.message.text.toLowerCase().contains('q5062')){session.send(`A5062`);
      }
else if(session.message.text.toLowerCase().contains('q5061')){session.send(`A5061`);
      }
else if(session.message.text.toLowerCase().contains('q5060')){session.send(`A5060`);
      }
else if(session.message.text.toLowerCase().contains('q5059')){session.send(`A5059`);
      }
else if(session.message.text.toLowerCase().contains('q5058')){session.send(`A5058`);
      }
else if(session.message.text.toLowerCase().contains('q5057')){session.send(`A5057`);
      }
else if(session.message.text.toLowerCase().contains('q5056')){session.send(`A5056`);
      }
else if(session.message.text.toLowerCase().contains('q5055')){session.send(`A5055`);
      }
else if(session.message.text.toLowerCase().contains('q5054')){session.send(`A5054`);
      }
else if(session.message.text.toLowerCase().contains('q5053')){session.send(`A5053`);
      }
else if(session.message.text.toLowerCase().contains('q5052')){session.send(`A5052`);
      }
else if(session.message.text.toLowerCase().contains('q5051')){session.send(`A5051`);
      }
else if(session.message.text.toLowerCase().contains('q5050')){session.send(`A5050`);
      }
else if(session.message.text.toLowerCase().contains('q5049')){session.send(`A5049`);
      }
else if(session.message.text.toLowerCase().contains('q5048')){session.send(`A5048`);
      }
else if(session.message.text.toLowerCase().contains('q5047')){session.send(`A5047`);
      }
else if(session.message.text.toLowerCase().contains('q5046')){session.send(`A5046`);
      }
else if(session.message.text.toLowerCase().contains('q5045')){session.send(`A5045`);
      }
else if(session.message.text.toLowerCase().contains('q5044')){session.send(`A5044`);
      }
else if(session.message.text.toLowerCase().contains('q5043')){session.send(`A5043`);
      }
else if(session.message.text.toLowerCase().contains('q5042')){session.send(`A5042`);
      }
else if(session.message.text.toLowerCase().contains('q5041')){session.send(`A5041`);
      }
else if(session.message.text.toLowerCase().contains('q5040')){session.send(`A5040`);
      }
else if(session.message.text.toLowerCase().contains('q5039')){session.send(`A5039`);
      }
else if(session.message.text.toLowerCase().contains('q5038')){session.send(`A5038`);
      }
else if(session.message.text.toLowerCase().contains('q5037')){session.send(`A5037`);
      }
else if(session.message.text.toLowerCase().contains('q5036')){session.send(`A5036`);
      }
else if(session.message.text.toLowerCase().contains('q5035')){session.send(`A5035`);
      }
else if(session.message.text.toLowerCase().contains('q5034')){session.send(`A5034`);
      }
else if(session.message.text.toLowerCase().contains('q5033')){session.send(`A5033`);
      }
else if(session.message.text.toLowerCase().contains('q5032')){session.send(`A5032`);
      }
else if(session.message.text.toLowerCase().contains('q5031')){session.send(`A5031`);
      }
else if(session.message.text.toLowerCase().contains('q5030')){session.send(`A5030`);
      }
else if(session.message.text.toLowerCase().contains('q5029')){session.send(`A5029`);
      }
else if(session.message.text.toLowerCase().contains('q5028')){session.send(`A5028`);
      }
else if(session.message.text.toLowerCase().contains('q5027')){session.send(`A5027`);
      }
else if(session.message.text.toLowerCase().contains('q5026')){session.send(`A5026`);
      }
else if(session.message.text.toLowerCase().contains('q5025')){session.send(`A5025`);
      }
else if(session.message.text.toLowerCase().contains('q5024')){session.send(`A5024`);
      }
else if(session.message.text.toLowerCase().contains('q5023')){session.send(`A5023`);
      }
else if(session.message.text.toLowerCase().contains('q5022')){session.send(`A5022`);
      }
else if(session.message.text.toLowerCase().contains('q5021')){session.send(`A5021`);
      }
else if(session.message.text.toLowerCase().contains('q5020')){session.send(`A5020`);
      }
else if(session.message.text.toLowerCase().contains('q5019')){session.send(`A5019`);
      }
else if(session.message.text.toLowerCase().contains('q5018')){session.send(`A5018`);
      }
else if(session.message.text.toLowerCase().contains('q5017')){session.send(`A5017`);
      }
else if(session.message.text.toLowerCase().contains('q5016')){session.send(`A5016`);
      }
else if(session.message.text.toLowerCase().contains('q5015')){session.send(`A5015`);
      }
else if(session.message.text.toLowerCase().contains('q5014')){session.send(`A5014`);
      }
else if(session.message.text.toLowerCase().contains('q5013')){session.send(`A5013`);
      }
else if(session.message.text.toLowerCase().contains('q5012')){session.send(`A5012`);
      }
else if(session.message.text.toLowerCase().contains('q5011')){session.send(`A5011`);
      }
else if(session.message.text.toLowerCase().contains('q5010')){session.send(`A5010`);
      }
else if(session.message.text.toLowerCase().contains('q5009')){session.send(`A5009`);
      }
else if(session.message.text.toLowerCase().contains('q5008')){session.send(`A5008`);
      }
else if(session.message.text.toLowerCase().contains('q5007')){session.send(`A5007`);
      }
else if(session.message.text.toLowerCase().contains('q5006')){session.send(`A5006`);
      }
else if(session.message.text.toLowerCase().contains('q5005')){session.send(`A5005`);
      }
else if(session.message.text.toLowerCase().contains('q5004')){session.send(`A5004`);
      }
else if(session.message.text.toLowerCase().contains('q5003')){session.send(`A5003`);
      }
else if(session.message.text.toLowerCase().contains('q5002')){session.send(`A5002`);
      }
else if(session.message.text.toLowerCase().contains('q5001')){session.send(`A5001`);
      }
else if(session.message.text.toLowerCase().contains('q5000')){session.send(`A5000`);
      }
else if(session.message.text.toLowerCase().contains('q4999')){session.send(`A4999`);
      }
else if(session.message.text.toLowerCase().contains('q4998')){session.send(`A4998`);
      }
else if(session.message.text.toLowerCase().contains('q4997')){session.send(`A4997`);
      }
else if(session.message.text.toLowerCase().contains('q4996')){session.send(`A4996`);
      }
else if(session.message.text.toLowerCase().contains('q4995')){session.send(`A4995`);
      }
else if(session.message.text.toLowerCase().contains('q4994')){session.send(`A4994`);
      }
else if(session.message.text.toLowerCase().contains('q4993')){session.send(`A4993`);
      }
else if(session.message.text.toLowerCase().contains('q4992')){session.send(`A4992`);
      }
else if(session.message.text.toLowerCase().contains('q4991')){session.send(`A4991`);
      }
else if(session.message.text.toLowerCase().contains('q4990')){session.send(`A4990`);
      }
else if(session.message.text.toLowerCase().contains('q4989')){session.send(`A4989`);
      }
else if(session.message.text.toLowerCase().contains('q4988')){session.send(`A4988`);
      }
else if(session.message.text.toLowerCase().contains('q4987')){session.send(`A4987`);
      }
else if(session.message.text.toLowerCase().contains('q4986')){session.send(`A4986`);
      }
else if(session.message.text.toLowerCase().contains('q4985')){session.send(`A4985`);
      }
else if(session.message.text.toLowerCase().contains('q4984')){session.send(`A4984`);
      }
else if(session.message.text.toLowerCase().contains('q4983')){session.send(`A4983`);
      }
else if(session.message.text.toLowerCase().contains('q4982')){session.send(`A4982`);
      }
else if(session.message.text.toLowerCase().contains('q4981')){session.send(`A4981`);
      }
else if(session.message.text.toLowerCase().contains('q4980')){session.send(`A4980`);
      }
else if(session.message.text.toLowerCase().contains('q4979')){session.send(`A4979`);
      }
else if(session.message.text.toLowerCase().contains('q4978')){session.send(`A4978`);
      }
else if(session.message.text.toLowerCase().contains('q4977')){session.send(`A4977`);
      }
else if(session.message.text.toLowerCase().contains('q4976')){session.send(`A4976`);
      }
else if(session.message.text.toLowerCase().contains('q4975')){session.send(`A4975`);
      }
else if(session.message.text.toLowerCase().contains('q4974')){session.send(`A4974`);
      }
else if(session.message.text.toLowerCase().contains('q4973')){session.send(`A4973`);
      }
else if(session.message.text.toLowerCase().contains('q4972')){session.send(`A4972`);
      }
else if(session.message.text.toLowerCase().contains('q4971')){session.send(`A4971`);
      }
else if(session.message.text.toLowerCase().contains('q4970')){session.send(`A4970`);
      }
else if(session.message.text.toLowerCase().contains('q4969')){session.send(`A4969`);
      }
else if(session.message.text.toLowerCase().contains('q4968')){session.send(`A4968`);
      }
else if(session.message.text.toLowerCase().contains('q4967')){session.send(`A4967`);
      }
else if(session.message.text.toLowerCase().contains('q4966')){session.send(`A4966`);
      }
else if(session.message.text.toLowerCase().contains('q4965')){session.send(`A4965`);
      }
else if(session.message.text.toLowerCase().contains('q4964')){session.send(`A4964`);
      }
else if(session.message.text.toLowerCase().contains('q4963')){session.send(`A4963`);
      }
else if(session.message.text.toLowerCase().contains('q4962')){session.send(`A4962`);
      }
else if(session.message.text.toLowerCase().contains('q4961')){session.send(`A4961`);
      }
else if(session.message.text.toLowerCase().contains('q4960')){session.send(`A4960`);
      }
else if(session.message.text.toLowerCase().contains('q4959')){session.send(`A4959`);
      }
else if(session.message.text.toLowerCase().contains('q4958')){session.send(`A4958`);
      }
else if(session.message.text.toLowerCase().contains('q4957')){session.send(`A4957`);
      }
else if(session.message.text.toLowerCase().contains('q4956')){session.send(`A4956`);
      }
else if(session.message.text.toLowerCase().contains('q4955')){session.send(`A4955`);
      }
else if(session.message.text.toLowerCase().contains('q4954')){session.send(`A4954`);
      }
else if(session.message.text.toLowerCase().contains('q4953')){session.send(`A4953`);
      }
else if(session.message.text.toLowerCase().contains('q4952')){session.send(`A4952`);
      }
else if(session.message.text.toLowerCase().contains('q4951')){session.send(`A4951`);
      }
else if(session.message.text.toLowerCase().contains('q4950')){session.send(`A4950`);
      }
else if(session.message.text.toLowerCase().contains('q4949')){session.send(`A4949`);
      }
else if(session.message.text.toLowerCase().contains('q4948')){session.send(`A4948`);
      }
else if(session.message.text.toLowerCase().contains('q4947')){session.send(`A4947`);
      }
else if(session.message.text.toLowerCase().contains('q4946')){session.send(`A4946`);
      }
else if(session.message.text.toLowerCase().contains('q4945')){session.send(`A4945`);
      }
else if(session.message.text.toLowerCase().contains('q4944')){session.send(`A4944`);
      }
else if(session.message.text.toLowerCase().contains('q4943')){session.send(`A4943`);
      }
else if(session.message.text.toLowerCase().contains('q4942')){session.send(`A4942`);
      }
else if(session.message.text.toLowerCase().contains('q4941')){session.send(`A4941`);
      }
else if(session.message.text.toLowerCase().contains('q4940')){session.send(`A4940`);
      }
else if(session.message.text.toLowerCase().contains('q4939')){session.send(`A4939`);
      }
else if(session.message.text.toLowerCase().contains('q4938')){session.send(`A4938`);
      }
else if(session.message.text.toLowerCase().contains('q4937')){session.send(`A4937`);
      }
else if(session.message.text.toLowerCase().contains('q4936')){session.send(`A4936`);
      }
else if(session.message.text.toLowerCase().contains('q4935')){session.send(`A4935`);
      }
else if(session.message.text.toLowerCase().contains('q4934')){session.send(`A4934`);
      }
else if(session.message.text.toLowerCase().contains('q4933')){session.send(`A4933`);
      }
else if(session.message.text.toLowerCase().contains('q4932')){session.send(`A4932`);
      }
else if(session.message.text.toLowerCase().contains('q4931')){session.send(`A4931`);
      }
else if(session.message.text.toLowerCase().contains('q4930')){session.send(`A4930`);
      }
else if(session.message.text.toLowerCase().contains('q4929')){session.send(`A4929`);
      }
else if(session.message.text.toLowerCase().contains('q4928')){session.send(`A4928`);
      }
else if(session.message.text.toLowerCase().contains('q4927')){session.send(`A4927`);
      }
else if(session.message.text.toLowerCase().contains('q4926')){session.send(`A4926`);
      }
else if(session.message.text.toLowerCase().contains('q4925')){session.send(`A4925`);
      }
else if(session.message.text.toLowerCase().contains('q4924')){session.send(`A4924`);
      }
else if(session.message.text.toLowerCase().contains('q4923')){session.send(`A4923`);
      }
else if(session.message.text.toLowerCase().contains('q4922')){session.send(`A4922`);
      }
else if(session.message.text.toLowerCase().contains('q4921')){session.send(`A4921`);
      }
else if(session.message.text.toLowerCase().contains('q4920')){session.send(`A4920`);
      }
else if(session.message.text.toLowerCase().contains('q4919')){session.send(`A4919`);
      }
else if(session.message.text.toLowerCase().contains('q4918')){session.send(`A4918`);
      }
else if(session.message.text.toLowerCase().contains('q4917')){session.send(`A4917`);
      }
else if(session.message.text.toLowerCase().contains('q4916')){session.send(`A4916`);
      }
else if(session.message.text.toLowerCase().contains('q4915')){session.send(`A4915`);
      }
else if(session.message.text.toLowerCase().contains('q4914')){session.send(`A4914`);
      }
else if(session.message.text.toLowerCase().contains('q4913')){session.send(`A4913`);
      }
else if(session.message.text.toLowerCase().contains('q4912')){session.send(`A4912`);
      }
else if(session.message.text.toLowerCase().contains('q4911')){session.send(`A4911`);
      }
else if(session.message.text.toLowerCase().contains('q4910')){session.send(`A4910`);
      }
else if(session.message.text.toLowerCase().contains('q4909')){session.send(`A4909`);
      }
else if(session.message.text.toLowerCase().contains('q4908')){session.send(`A4908`);
      }
else if(session.message.text.toLowerCase().contains('q4907')){session.send(`A4907`);
      }
else if(session.message.text.toLowerCase().contains('q4906')){session.send(`A4906`);
      }
else if(session.message.text.toLowerCase().contains('q4905')){session.send(`A4905`);
      }
else if(session.message.text.toLowerCase().contains('q4904')){session.send(`A4904`);
      }
else if(session.message.text.toLowerCase().contains('q4903')){session.send(`A4903`);
      }
else if(session.message.text.toLowerCase().contains('q4902')){session.send(`A4902`);
      }
else if(session.message.text.toLowerCase().contains('q4901')){session.send(`A4901`);
      }
else if(session.message.text.toLowerCase().contains('q4900')){session.send(`A4900`);
      }
else if(session.message.text.toLowerCase().contains('q4899')){session.send(`A4899`);
      }
else if(session.message.text.toLowerCase().contains('q4898')){session.send(`A4898`);
      }
else if(session.message.text.toLowerCase().contains('q4897')){session.send(`A4897`);
      }
else if(session.message.text.toLowerCase().contains('q4896')){session.send(`A4896`);
      }
else if(session.message.text.toLowerCase().contains('q4895')){session.send(`A4895`);
      }
else if(session.message.text.toLowerCase().contains('q4894')){session.send(`A4894`);
      }
else if(session.message.text.toLowerCase().contains('q4893')){session.send(`A4893`);
      }
else if(session.message.text.toLowerCase().contains('q4892')){session.send(`A4892`);
      }
else if(session.message.text.toLowerCase().contains('q4891')){session.send(`A4891`);
      }
else if(session.message.text.toLowerCase().contains('q4890')){session.send(`A4890`);
      }
else if(session.message.text.toLowerCase().contains('q4889')){session.send(`A4889`);
      }
else if(session.message.text.toLowerCase().contains('q4888')){session.send(`A4888`);
      }
else if(session.message.text.toLowerCase().contains('q4887')){session.send(`A4887`);
      }
else if(session.message.text.toLowerCase().contains('q4886')){session.send(`A4886`);
      }
else if(session.message.text.toLowerCase().contains('q4885')){session.send(`A4885`);
      }
else if(session.message.text.toLowerCase().contains('q4884')){session.send(`A4884`);
      }
else if(session.message.text.toLowerCase().contains('q4883')){session.send(`A4883`);
      }
else if(session.message.text.toLowerCase().contains('q4882')){session.send(`A4882`);
      }
else if(session.message.text.toLowerCase().contains('q4881')){session.send(`A4881`);
      }
else if(session.message.text.toLowerCase().contains('q4880')){session.send(`A4880`);
      }
else if(session.message.text.toLowerCase().contains('q4879')){session.send(`A4879`);
      }
else if(session.message.text.toLowerCase().contains('q4878')){session.send(`A4878`);
      }
else if(session.message.text.toLowerCase().contains('q4877')){session.send(`A4877`);
      }
else if(session.message.text.toLowerCase().contains('q4876')){session.send(`A4876`);
      }
else if(session.message.text.toLowerCase().contains('q4875')){session.send(`A4875`);
      }
else if(session.message.text.toLowerCase().contains('q4874')){session.send(`A4874`);
      }
else if(session.message.text.toLowerCase().contains('q4873')){session.send(`A4873`);
      }
else if(session.message.text.toLowerCase().contains('q4872')){session.send(`A4872`);
      }
else if(session.message.text.toLowerCase().contains('q4871')){session.send(`A4871`);
      }
else if(session.message.text.toLowerCase().contains('q4870')){session.send(`A4870`);
      }
else if(session.message.text.toLowerCase().contains('q4869')){session.send(`A4869`);
      }
else if(session.message.text.toLowerCase().contains('q4868')){session.send(`A4868`);
      }
else if(session.message.text.toLowerCase().contains('q4867')){session.send(`A4867`);
      }
else if(session.message.text.toLowerCase().contains('q4866')){session.send(`A4866`);
      }
else if(session.message.text.toLowerCase().contains('q4865')){session.send(`A4865`);
      }
else if(session.message.text.toLowerCase().contains('q4864')){session.send(`A4864`);
      }
else if(session.message.text.toLowerCase().contains('q4863')){session.send(`A4863`);
      }
else if(session.message.text.toLowerCase().contains('q4862')){session.send(`A4862`);
      }
else if(session.message.text.toLowerCase().contains('q4861')){session.send(`A4861`);
      }
else if(session.message.text.toLowerCase().contains('q4860')){session.send(`A4860`);
      }
else if(session.message.text.toLowerCase().contains('q4859')){session.send(`A4859`);
      }
else if(session.message.text.toLowerCase().contains('q4858')){session.send(`A4858`);
      }
else if(session.message.text.toLowerCase().contains('q4857')){session.send(`A4857`);
      }
else if(session.message.text.toLowerCase().contains('q4856')){session.send(`A4856`);
      }
else if(session.message.text.toLowerCase().contains('q4855')){session.send(`A4855`);
      }
else if(session.message.text.toLowerCase().contains('q4854')){session.send(`A4854`);
      }
else if(session.message.text.toLowerCase().contains('q4853')){session.send(`A4853`);
      }
else if(session.message.text.toLowerCase().contains('q4852')){session.send(`A4852`);
      }
else if(session.message.text.toLowerCase().contains('q4851')){session.send(`A4851`);
      }
else if(session.message.text.toLowerCase().contains('q4850')){session.send(`A4850`);
      }
else if(session.message.text.toLowerCase().contains('q4849')){session.send(`A4849`);
      }
else if(session.message.text.toLowerCase().contains('q4848')){session.send(`A4848`);
      }
else if(session.message.text.toLowerCase().contains('q4847')){session.send(`A4847`);
      }
else if(session.message.text.toLowerCase().contains('q4846')){session.send(`A4846`);
      }
else if(session.message.text.toLowerCase().contains('q4845')){session.send(`A4845`);
      }
else if(session.message.text.toLowerCase().contains('q4844')){session.send(`A4844`);
      }
else if(session.message.text.toLowerCase().contains('q4843')){session.send(`A4843`);
      }
else if(session.message.text.toLowerCase().contains('q4842')){session.send(`A4842`);
      }
else if(session.message.text.toLowerCase().contains('q4841')){session.send(`A4841`);
      }
else if(session.message.text.toLowerCase().contains('q4840')){session.send(`A4840`);
      }
else if(session.message.text.toLowerCase().contains('q4839')){session.send(`A4839`);
      }
else if(session.message.text.toLowerCase().contains('q4838')){session.send(`A4838`);
      }
else if(session.message.text.toLowerCase().contains('q4837')){session.send(`A4837`);
      }
else if(session.message.text.toLowerCase().contains('q4836')){session.send(`A4836`);
      }
else if(session.message.text.toLowerCase().contains('q4835')){session.send(`A4835`);
      }
else if(session.message.text.toLowerCase().contains('q4834')){session.send(`A4834`);
      }
else if(session.message.text.toLowerCase().contains('q4833')){session.send(`A4833`);
      }
else if(session.message.text.toLowerCase().contains('q4832')){session.send(`A4832`);
      }
else if(session.message.text.toLowerCase().contains('q4831')){session.send(`A4831`);
      }
else if(session.message.text.toLowerCase().contains('q4830')){session.send(`A4830`);
      }
else if(session.message.text.toLowerCase().contains('q4829')){session.send(`A4829`);
      }
else if(session.message.text.toLowerCase().contains('q4828')){session.send(`A4828`);
      }
else if(session.message.text.toLowerCase().contains('q4827')){session.send(`A4827`);
      }
else if(session.message.text.toLowerCase().contains('q4826')){session.send(`A4826`);
      }
else if(session.message.text.toLowerCase().contains('q4825')){session.send(`A4825`);
      }
else if(session.message.text.toLowerCase().contains('q4824')){session.send(`A4824`);
      }
else if(session.message.text.toLowerCase().contains('q4823')){session.send(`A4823`);
      }
else if(session.message.text.toLowerCase().contains('q4822')){session.send(`A4822`);
      }
else if(session.message.text.toLowerCase().contains('q4821')){session.send(`A4821`);
      }
else if(session.message.text.toLowerCase().contains('q4820')){session.send(`A4820`);
      }
else if(session.message.text.toLowerCase().contains('q4819')){session.send(`A4819`);
      }
else if(session.message.text.toLowerCase().contains('q4818')){session.send(`A4818`);
      }
else if(session.message.text.toLowerCase().contains('q4817')){session.send(`A4817`);
      }
else if(session.message.text.toLowerCase().contains('q4816')){session.send(`A4816`);
      }
else if(session.message.text.toLowerCase().contains('q4815')){session.send(`A4815`);
      }
else if(session.message.text.toLowerCase().contains('q4814')){session.send(`A4814`);
      }
else if(session.message.text.toLowerCase().contains('q4813')){session.send(`A4813`);
      }
else if(session.message.text.toLowerCase().contains('q4812')){session.send(`A4812`);
      }
else if(session.message.text.toLowerCase().contains('q4811')){session.send(`A4811`);
      }
else if(session.message.text.toLowerCase().contains('q4810')){session.send(`A4810`);
      }
else if(session.message.text.toLowerCase().contains('q4809')){session.send(`A4809`);
      }
else if(session.message.text.toLowerCase().contains('q4808')){session.send(`A4808`);
      }
else if(session.message.text.toLowerCase().contains('q4807')){session.send(`A4807`);
      }
else if(session.message.text.toLowerCase().contains('q4806')){session.send(`A4806`);
      }
else if(session.message.text.toLowerCase().contains('q4805')){session.send(`A4805`);
      }
else if(session.message.text.toLowerCase().contains('q4804')){session.send(`A4804`);
      }
else if(session.message.text.toLowerCase().contains('q4803')){session.send(`A4803`);
      }
else if(session.message.text.toLowerCase().contains('q4802')){session.send(`A4802`);
      }
else if(session.message.text.toLowerCase().contains('q4801')){session.send(`A4801`);
      }
else if(session.message.text.toLowerCase().contains('q4800')){session.send(`A4800`);
      }
else if(session.message.text.toLowerCase().contains('q4799')){session.send(`A4799`);
      }
else if(session.message.text.toLowerCase().contains('q4798')){session.send(`A4798`);
      }
else if(session.message.text.toLowerCase().contains('q4797')){session.send(`A4797`);
      }
else if(session.message.text.toLowerCase().contains('q4796')){session.send(`A4796`);
      }
else if(session.message.text.toLowerCase().contains('q4795')){session.send(`A4795`);
      }
else if(session.message.text.toLowerCase().contains('q4794')){session.send(`A4794`);
      }
else if(session.message.text.toLowerCase().contains('q4793')){session.send(`A4793`);
      }
else if(session.message.text.toLowerCase().contains('q4792')){session.send(`A4792`);
      }
else if(session.message.text.toLowerCase().contains('q4791')){session.send(`A4791`);
      }
else if(session.message.text.toLowerCase().contains('q4790')){session.send(`A4790`);
      }
else if(session.message.text.toLowerCase().contains('q4789')){session.send(`A4789`);
      }
else if(session.message.text.toLowerCase().contains('q4788')){session.send(`A4788`);
      }
else if(session.message.text.toLowerCase().contains('q4787')){session.send(`A4787`);
      }
else if(session.message.text.toLowerCase().contains('q4786')){session.send(`A4786`);
      }
else if(session.message.text.toLowerCase().contains('q4785')){session.send(`A4785`);
      }
else if(session.message.text.toLowerCase().contains('q4784')){session.send(`A4784`);
      }
else if(session.message.text.toLowerCase().contains('q4783')){session.send(`A4783`);
      }
else if(session.message.text.toLowerCase().contains('q4782')){session.send(`A4782`);
      }
else if(session.message.text.toLowerCase().contains('q4781')){session.send(`A4781`);
      }
else if(session.message.text.toLowerCase().contains('q4780')){session.send(`A4780`);
      }
else if(session.message.text.toLowerCase().contains('q4779')){session.send(`A4779`);
      }
else if(session.message.text.toLowerCase().contains('q4778')){session.send(`A4778`);
      }
else if(session.message.text.toLowerCase().contains('q4777')){session.send(`A4777`);
      }
else if(session.message.text.toLowerCase().contains('q4776')){session.send(`A4776`);
      }
else if(session.message.text.toLowerCase().contains('q4775')){session.send(`A4775`);
      }
else if(session.message.text.toLowerCase().contains('q4774')){session.send(`A4774`);
      }
else if(session.message.text.toLowerCase().contains('q4773')){session.send(`A4773`);
      }
else if(session.message.text.toLowerCase().contains('q4772')){session.send(`A4772`);
      }
else if(session.message.text.toLowerCase().contains('q4771')){session.send(`A4771`);
      }
else if(session.message.text.toLowerCase().contains('q4770')){session.send(`A4770`);
      }
else if(session.message.text.toLowerCase().contains('q4769')){session.send(`A4769`);
      }
else if(session.message.text.toLowerCase().contains('q4768')){session.send(`A4768`);
      }
else if(session.message.text.toLowerCase().contains('q4767')){session.send(`A4767`);
      }
else if(session.message.text.toLowerCase().contains('q4766')){session.send(`A4766`);
      }
else if(session.message.text.toLowerCase().contains('q4765')){session.send(`A4765`);
      }
else if(session.message.text.toLowerCase().contains('q4764')){session.send(`A4764`);
      }
else if(session.message.text.toLowerCase().contains('q4763')){session.send(`A4763`);
      }
else if(session.message.text.toLowerCase().contains('q4762')){session.send(`A4762`);
      }
else if(session.message.text.toLowerCase().contains('q4761')){session.send(`A4761`);
      }
else if(session.message.text.toLowerCase().contains('q4760')){session.send(`A4760`);
      }
else if(session.message.text.toLowerCase().contains('q4759')){session.send(`A4759`);
      }
else if(session.message.text.toLowerCase().contains('q4758')){session.send(`A4758`);
      }
else if(session.message.text.toLowerCase().contains('q4757')){session.send(`A4757`);
      }
else if(session.message.text.toLowerCase().contains('q4756')){session.send(`A4756`);
      }
else if(session.message.text.toLowerCase().contains('q4755')){session.send(`A4755`);
      }
else if(session.message.text.toLowerCase().contains('q4754')){session.send(`A4754`);
      }
else if(session.message.text.toLowerCase().contains('q4753')){session.send(`A4753`);
      }
else if(session.message.text.toLowerCase().contains('q4752')){session.send(`A4752`);
      }
else if(session.message.text.toLowerCase().contains('q4751')){session.send(`A4751`);
      }
else if(session.message.text.toLowerCase().contains('q4750')){session.send(`A4750`);
      }
else if(session.message.text.toLowerCase().contains('q4749')){session.send(`A4749`);
      }
else if(session.message.text.toLowerCase().contains('q4748')){session.send(`A4748`);
      }
else if(session.message.text.toLowerCase().contains('q4747')){session.send(`A4747`);
      }
else if(session.message.text.toLowerCase().contains('q4746')){session.send(`A4746`);
      }
else if(session.message.text.toLowerCase().contains('q4745')){session.send(`A4745`);
      }
else if(session.message.text.toLowerCase().contains('q4744')){session.send(`A4744`);
      }
else if(session.message.text.toLowerCase().contains('q4743')){session.send(`A4743`);
      }
else if(session.message.text.toLowerCase().contains('q4742')){session.send(`A4742`);
      }
else if(session.message.text.toLowerCase().contains('q4741')){session.send(`A4741`);
      }
else if(session.message.text.toLowerCase().contains('q4740')){session.send(`A4740`);
      }
else if(session.message.text.toLowerCase().contains('q4739')){session.send(`A4739`);
      }
else if(session.message.text.toLowerCase().contains('q4738')){session.send(`A4738`);
      }
else if(session.message.text.toLowerCase().contains('q4737')){session.send(`A4737`);
      }
else if(session.message.text.toLowerCase().contains('q4736')){session.send(`A4736`);
      }
else if(session.message.text.toLowerCase().contains('q4735')){session.send(`A4735`);
      }
else if(session.message.text.toLowerCase().contains('q4734')){session.send(`A4734`);
      }
else if(session.message.text.toLowerCase().contains('q4733')){session.send(`A4733`);
      }
else if(session.message.text.toLowerCase().contains('q4732')){session.send(`A4732`);
      }
else if(session.message.text.toLowerCase().contains('q4731')){session.send(`A4731`);
      }
else if(session.message.text.toLowerCase().contains('q4730')){session.send(`A4730`);
      }
else if(session.message.text.toLowerCase().contains('q4729')){session.send(`A4729`);
      }
else if(session.message.text.toLowerCase().contains('q4728')){session.send(`A4728`);
      }
else if(session.message.text.toLowerCase().contains('q4727')){session.send(`A4727`);
      }
else if(session.message.text.toLowerCase().contains('q4726')){session.send(`A4726`);
      }
else if(session.message.text.toLowerCase().contains('q4725')){session.send(`A4725`);
      }
else if(session.message.text.toLowerCase().contains('q4724')){session.send(`A4724`);
      }
else if(session.message.text.toLowerCase().contains('q4723')){session.send(`A4723`);
      }
else if(session.message.text.toLowerCase().contains('q4722')){session.send(`A4722`);
      }
else if(session.message.text.toLowerCase().contains('q4721')){session.send(`A4721`);
      }
else if(session.message.text.toLowerCase().contains('q4720')){session.send(`A4720`);
      }
else if(session.message.text.toLowerCase().contains('q4719')){session.send(`A4719`);
      }
else if(session.message.text.toLowerCase().contains('q4718')){session.send(`A4718`);
      }
else if(session.message.text.toLowerCase().contains('q4717')){session.send(`A4717`);
      }
else if(session.message.text.toLowerCase().contains('q4716')){session.send(`A4716`);
      }
else if(session.message.text.toLowerCase().contains('q4715')){session.send(`A4715`);
      }
else if(session.message.text.toLowerCase().contains('q4714')){session.send(`A4714`);
      }
else if(session.message.text.toLowerCase().contains('q4713')){session.send(`A4713`);
      }
else if(session.message.text.toLowerCase().contains('q4712')){session.send(`A4712`);
      }
else if(session.message.text.toLowerCase().contains('q4711')){session.send(`A4711`);
      }
else if(session.message.text.toLowerCase().contains('q4710')){session.send(`A4710`);
      }
else if(session.message.text.toLowerCase().contains('q4709')){session.send(`A4709`);
      }
else if(session.message.text.toLowerCase().contains('q4708')){session.send(`A4708`);
      }
else if(session.message.text.toLowerCase().contains('q4707')){session.send(`A4707`);
      }
else if(session.message.text.toLowerCase().contains('q4706')){session.send(`A4706`);
      }
else if(session.message.text.toLowerCase().contains('q4705')){session.send(`A4705`);
      }
else if(session.message.text.toLowerCase().contains('q4704')){session.send(`A4704`);
      }
else if(session.message.text.toLowerCase().contains('q4703')){session.send(`A4703`);
      }
else if(session.message.text.toLowerCase().contains('q4702')){session.send(`A4702`);
      }
else if(session.message.text.toLowerCase().contains('q4701')){session.send(`A4701`);
      }
else if(session.message.text.toLowerCase().contains('q4700')){session.send(`A4700`);
      }
else if(session.message.text.toLowerCase().contains('q4699')){session.send(`A4699`);
      }
else if(session.message.text.toLowerCase().contains('q4698')){session.send(`A4698`);
      }
else if(session.message.text.toLowerCase().contains('q4697')){session.send(`A4697`);
      }
else if(session.message.text.toLowerCase().contains('q4696')){session.send(`A4696`);
      }
else if(session.message.text.toLowerCase().contains('q4695')){session.send(`A4695`);
      }
else if(session.message.text.toLowerCase().contains('q4694')){session.send(`A4694`);
      }
else if(session.message.text.toLowerCase().contains('q4693')){session.send(`A4693`);
      }
else if(session.message.text.toLowerCase().contains('q4692')){session.send(`A4692`);
      }
else if(session.message.text.toLowerCase().contains('q4691')){session.send(`A4691`);
      }
else if(session.message.text.toLowerCase().contains('q4690')){session.send(`A4690`);
      }
else if(session.message.text.toLowerCase().contains('q4689')){session.send(`A4689`);
      }
else if(session.message.text.toLowerCase().contains('q4688')){session.send(`A4688`);
      }
else if(session.message.text.toLowerCase().contains('q4687')){session.send(`A4687`);
      }
else if(session.message.text.toLowerCase().contains('q4686')){session.send(`A4686`);
      }
else if(session.message.text.toLowerCase().contains('q4685')){session.send(`A4685`);
      }
else if(session.message.text.toLowerCase().contains('q4684')){session.send(`A4684`);
      }
else if(session.message.text.toLowerCase().contains('q4683')){session.send(`A4683`);
      }
else if(session.message.text.toLowerCase().contains('q4682')){session.send(`A4682`);
      }
else if(session.message.text.toLowerCase().contains('q4681')){session.send(`A4681`);
      }
else if(session.message.text.toLowerCase().contains('q4680')){session.send(`A4680`);
      }
else if(session.message.text.toLowerCase().contains('q4679')){session.send(`A4679`);
      }
else if(session.message.text.toLowerCase().contains('q4678')){session.send(`A4678`);
      }
else if(session.message.text.toLowerCase().contains('q4677')){session.send(`A4677`);
      }
else if(session.message.text.toLowerCase().contains('q4676')){session.send(`A4676`);
      }
else if(session.message.text.toLowerCase().contains('q4675')){session.send(`A4675`);
      }
else if(session.message.text.toLowerCase().contains('q4674')){session.send(`A4674`);
      }
else if(session.message.text.toLowerCase().contains('q4673')){session.send(`A4673`);
      }
else if(session.message.text.toLowerCase().contains('q4672')){session.send(`A4672`);
      }
else if(session.message.text.toLowerCase().contains('q4671')){session.send(`A4671`);
      }
else if(session.message.text.toLowerCase().contains('q4670')){session.send(`A4670`);
      }
else if(session.message.text.toLowerCase().contains('q4669')){session.send(`A4669`);
      }
else if(session.message.text.toLowerCase().contains('q4668')){session.send(`A4668`);
      }
else if(session.message.text.toLowerCase().contains('q4667')){session.send(`A4667`);
      }
else if(session.message.text.toLowerCase().contains('q4666')){session.send(`A4666`);
      }
else if(session.message.text.toLowerCase().contains('q4665')){session.send(`A4665`);
      }
else if(session.message.text.toLowerCase().contains('q4664')){session.send(`A4664`);
      }
else if(session.message.text.toLowerCase().contains('q4663')){session.send(`A4663`);
      }
else if(session.message.text.toLowerCase().contains('q4662')){session.send(`A4662`);
      }
else if(session.message.text.toLowerCase().contains('q4661')){session.send(`A4661`);
      }
else if(session.message.text.toLowerCase().contains('q4660')){session.send(`A4660`);
      }
else if(session.message.text.toLowerCase().contains('q4659')){session.send(`A4659`);
      }
else if(session.message.text.toLowerCase().contains('q4658')){session.send(`A4658`);
      }
else if(session.message.text.toLowerCase().contains('q4657')){session.send(`A4657`);
      }
else if(session.message.text.toLowerCase().contains('q4656')){session.send(`A4656`);
      }
else if(session.message.text.toLowerCase().contains('q4655')){session.send(`A4655`);
      }
else if(session.message.text.toLowerCase().contains('q4654')){session.send(`A4654`);
      }
else if(session.message.text.toLowerCase().contains('q4653')){session.send(`A4653`);
      }
else if(session.message.text.toLowerCase().contains('q4652')){session.send(`A4652`);
      }
else if(session.message.text.toLowerCase().contains('q4651')){session.send(`A4651`);
      }
else if(session.message.text.toLowerCase().contains('q4650')){session.send(`A4650`);
      }
else if(session.message.text.toLowerCase().contains('q4649')){session.send(`A4649`);
      }
else if(session.message.text.toLowerCase().contains('q4648')){session.send(`A4648`);
      }
else if(session.message.text.toLowerCase().contains('q4647')){session.send(`A4647`);
      }
else if(session.message.text.toLowerCase().contains('q4646')){session.send(`A4646`);
      }
else if(session.message.text.toLowerCase().contains('q4645')){session.send(`A4645`);
      }
else if(session.message.text.toLowerCase().contains('q4644')){session.send(`A4644`);
      }
else if(session.message.text.toLowerCase().contains('q4643')){session.send(`A4643`);
      }
else if(session.message.text.toLowerCase().contains('q4642')){session.send(`A4642`);
      }
else if(session.message.text.toLowerCase().contains('q4641')){session.send(`A4641`);
      }
else if(session.message.text.toLowerCase().contains('q4640')){session.send(`A4640`);
      }
else if(session.message.text.toLowerCase().contains('q4639')){session.send(`A4639`);
      }
else if(session.message.text.toLowerCase().contains('q4638')){session.send(`A4638`);
      }
else if(session.message.text.toLowerCase().contains('q4637')){session.send(`A4637`);
      }
else if(session.message.text.toLowerCase().contains('q4636')){session.send(`A4636`);
      }
else if(session.message.text.toLowerCase().contains('q4635')){session.send(`A4635`);
      }
else if(session.message.text.toLowerCase().contains('q4634')){session.send(`A4634`);
      }
else if(session.message.text.toLowerCase().contains('q4633')){session.send(`A4633`);
      }
else if(session.message.text.toLowerCase().contains('q4632')){session.send(`A4632`);
      }
else if(session.message.text.toLowerCase().contains('q4631')){session.send(`A4631`);
      }
else if(session.message.text.toLowerCase().contains('q4630')){session.send(`A4630`);
      }
else if(session.message.text.toLowerCase().contains('q4629')){session.send(`A4629`);
      }
else if(session.message.text.toLowerCase().contains('q4628')){session.send(`A4628`);
      }
else if(session.message.text.toLowerCase().contains('q4627')){session.send(`A4627`);
      }
else if(session.message.text.toLowerCase().contains('q4626')){session.send(`A4626`);
      }
else if(session.message.text.toLowerCase().contains('q4625')){session.send(`A4625`);
      }
else if(session.message.text.toLowerCase().contains('q4624')){session.send(`A4624`);
      }
else if(session.message.text.toLowerCase().contains('q4623')){session.send(`A4623`);
      }
else if(session.message.text.toLowerCase().contains('q4622')){session.send(`A4622`);
      }
else if(session.message.text.toLowerCase().contains('q4621')){session.send(`A4621`);
      }
else if(session.message.text.toLowerCase().contains('q4620')){session.send(`A4620`);
      }
else if(session.message.text.toLowerCase().contains('q4619')){session.send(`A4619`);
      }
else if(session.message.text.toLowerCase().contains('q4618')){session.send(`A4618`);
      }
else if(session.message.text.toLowerCase().contains('q4617')){session.send(`A4617`);
      }
else if(session.message.text.toLowerCase().contains('q4616')){session.send(`A4616`);
      }
else if(session.message.text.toLowerCase().contains('q4615')){session.send(`A4615`);
      }
else if(session.message.text.toLowerCase().contains('q4614')){session.send(`A4614`);
      }
else if(session.message.text.toLowerCase().contains('q4613')){session.send(`A4613`);
      }
else if(session.message.text.toLowerCase().contains('q4612')){session.send(`A4612`);
      }
else if(session.message.text.toLowerCase().contains('q4611')){session.send(`A4611`);
      }
else if(session.message.text.toLowerCase().contains('q4610')){session.send(`A4610`);
      }
else if(session.message.text.toLowerCase().contains('q4609')){session.send(`A4609`);
      }
else if(session.message.text.toLowerCase().contains('q4608')){session.send(`A4608`);
      }
else if(session.message.text.toLowerCase().contains('q4607')){session.send(`A4607`);
      }
else if(session.message.text.toLowerCase().contains('q4606')){session.send(`A4606`);
      }
else if(session.message.text.toLowerCase().contains('q4605')){session.send(`A4605`);
      }
else if(session.message.text.toLowerCase().contains('q4604')){session.send(`A4604`);
      }
else if(session.message.text.toLowerCase().contains('q4603')){session.send(`A4603`);
      }
else if(session.message.text.toLowerCase().contains('q4602')){session.send(`A4602`);
      }
else if(session.message.text.toLowerCase().contains('q4601')){session.send(`A4601`);
      }
else if(session.message.text.toLowerCase().contains('q4600')){session.send(`A4600`);
      }
else if(session.message.text.toLowerCase().contains('q4599')){session.send(`A4599`);
      }
else if(session.message.text.toLowerCase().contains('q4598')){session.send(`A4598`);
      }
else if(session.message.text.toLowerCase().contains('q4597')){session.send(`A4597`);
      }
else if(session.message.text.toLowerCase().contains('q4596')){session.send(`A4596`);
      }
else if(session.message.text.toLowerCase().contains('q4595')){session.send(`A4595`);
      }
else if(session.message.text.toLowerCase().contains('q4594')){session.send(`A4594`);
      }
else if(session.message.text.toLowerCase().contains('q4593')){session.send(`A4593`);
      }
else if(session.message.text.toLowerCase().contains('q4592')){session.send(`A4592`);
      }
else if(session.message.text.toLowerCase().contains('q4591')){session.send(`A4591`);
      }
else if(session.message.text.toLowerCase().contains('q4590')){session.send(`A4590`);
      }
else if(session.message.text.toLowerCase().contains('q4589')){session.send(`A4589`);
      }
else if(session.message.text.toLowerCase().contains('q4588')){session.send(`A4588`);
      }
else if(session.message.text.toLowerCase().contains('q4587')){session.send(`A4587`);
      }
else if(session.message.text.toLowerCase().contains('q4586')){session.send(`A4586`);
      }
else if(session.message.text.toLowerCase().contains('q4585')){session.send(`A4585`);
      }
else if(session.message.text.toLowerCase().contains('q4584')){session.send(`A4584`);
      }
else if(session.message.text.toLowerCase().contains('q4583')){session.send(`A4583`);
      }
else if(session.message.text.toLowerCase().contains('q4582')){session.send(`A4582`);
      }
else if(session.message.text.toLowerCase().contains('q4581')){session.send(`A4581`);
      }
else if(session.message.text.toLowerCase().contains('q4580')){session.send(`A4580`);
      }
else if(session.message.text.toLowerCase().contains('q4579')){session.send(`A4579`);
      }
else if(session.message.text.toLowerCase().contains('q4578')){session.send(`A4578`);
      }
else if(session.message.text.toLowerCase().contains('q4577')){session.send(`A4577`);
      }
else if(session.message.text.toLowerCase().contains('q4576')){session.send(`A4576`);
      }
else if(session.message.text.toLowerCase().contains('q4575')){session.send(`A4575`);
      }
else if(session.message.text.toLowerCase().contains('q4574')){session.send(`A4574`);
      }
else if(session.message.text.toLowerCase().contains('q4573')){session.send(`A4573`);
      }
else if(session.message.text.toLowerCase().contains('q4572')){session.send(`A4572`);
      }
else if(session.message.text.toLowerCase().contains('q4571')){session.send(`A4571`);
      }
else if(session.message.text.toLowerCase().contains('q4570')){session.send(`A4570`);
      }
else if(session.message.text.toLowerCase().contains('q4569')){session.send(`A4569`);
      }
else if(session.message.text.toLowerCase().contains('q4568')){session.send(`A4568`);
      }
else if(session.message.text.toLowerCase().contains('q4567')){session.send(`A4567`);
      }
else if(session.message.text.toLowerCase().contains('q4566')){session.send(`A4566`);
      }
else if(session.message.text.toLowerCase().contains('q4565')){session.send(`A4565`);
      }
else if(session.message.text.toLowerCase().contains('q4564')){session.send(`A4564`);
      }
else if(session.message.text.toLowerCase().contains('q4563')){session.send(`A4563`);
      }
else if(session.message.text.toLowerCase().contains('q4562')){session.send(`A4562`);
      }
else if(session.message.text.toLowerCase().contains('q4561')){session.send(`A4561`);
      }
else if(session.message.text.toLowerCase().contains('q4560')){session.send(`A4560`);
      }
else if(session.message.text.toLowerCase().contains('q4559')){session.send(`A4559`);
      }
else if(session.message.text.toLowerCase().contains('q4558')){session.send(`A4558`);
      }
else if(session.message.text.toLowerCase().contains('q4557')){session.send(`A4557`);
      }
else if(session.message.text.toLowerCase().contains('q4556')){session.send(`A4556`);
      }
else if(session.message.text.toLowerCase().contains('q4555')){session.send(`A4555`);
      }
else if(session.message.text.toLowerCase().contains('q4554')){session.send(`A4554`);
      }
else if(session.message.text.toLowerCase().contains('q4553')){session.send(`A4553`);
      }
else if(session.message.text.toLowerCase().contains('q4552')){session.send(`A4552`);
      }
else if(session.message.text.toLowerCase().contains('q4551')){session.send(`A4551`);
      }
else if(session.message.text.toLowerCase().contains('q4550')){session.send(`A4550`);
      }
else if(session.message.text.toLowerCase().contains('q4549')){session.send(`A4549`);
      }
else if(session.message.text.toLowerCase().contains('q4548')){session.send(`A4548`);
      }
else if(session.message.text.toLowerCase().contains('q4547')){session.send(`A4547`);
      }
else if(session.message.text.toLowerCase().contains('q4546')){session.send(`A4546`);
      }
else if(session.message.text.toLowerCase().contains('q4545')){session.send(`A4545`);
      }
else if(session.message.text.toLowerCase().contains('q4544')){session.send(`A4544`);
      }
else if(session.message.text.toLowerCase().contains('q4543')){session.send(`A4543`);
      }
else if(session.message.text.toLowerCase().contains('q4542')){session.send(`A4542`);
      }
else if(session.message.text.toLowerCase().contains('q4541')){session.send(`A4541`);
      }
else if(session.message.text.toLowerCase().contains('q4540')){session.send(`A4540`);
      }
else if(session.message.text.toLowerCase().contains('q4539')){session.send(`A4539`);
      }
else if(session.message.text.toLowerCase().contains('q4538')){session.send(`A4538`);
      }
else if(session.message.text.toLowerCase().contains('q4537')){session.send(`A4537`);
      }
else if(session.message.text.toLowerCase().contains('q4536')){session.send(`A4536`);
      }
else if(session.message.text.toLowerCase().contains('q4535')){session.send(`A4535`);
      }
else if(session.message.text.toLowerCase().contains('q4534')){session.send(`A4534`);
      }
else if(session.message.text.toLowerCase().contains('q4533')){session.send(`A4533`);
      }
else if(session.message.text.toLowerCase().contains('q4532')){session.send(`A4532`);
      }
else if(session.message.text.toLowerCase().contains('q4531')){session.send(`A4531`);
      }
else if(session.message.text.toLowerCase().contains('q4530')){session.send(`A4530`);
      }
else if(session.message.text.toLowerCase().contains('q4529')){session.send(`A4529`);
      }
else if(session.message.text.toLowerCase().contains('q4528')){session.send(`A4528`);
      }
else if(session.message.text.toLowerCase().contains('q4527')){session.send(`A4527`);
      }
else if(session.message.text.toLowerCase().contains('q4526')){session.send(`A4526`);
      }
else if(session.message.text.toLowerCase().contains('q4525')){session.send(`A4525`);
      }
else if(session.message.text.toLowerCase().contains('q4524')){session.send(`A4524`);
      }
else if(session.message.text.toLowerCase().contains('q4523')){session.send(`A4523`);
      }
else if(session.message.text.toLowerCase().contains('q4522')){session.send(`A4522`);
      }
else if(session.message.text.toLowerCase().contains('q4521')){session.send(`A4521`);
      }
else if(session.message.text.toLowerCase().contains('q4520')){session.send(`A4520`);
      }
else if(session.message.text.toLowerCase().contains('q4519')){session.send(`A4519`);
      }
else if(session.message.text.toLowerCase().contains('q4518')){session.send(`A4518`);
      }
else if(session.message.text.toLowerCase().contains('q4517')){session.send(`A4517`);
      }
else if(session.message.text.toLowerCase().contains('q4516')){session.send(`A4516`);
      }
else if(session.message.text.toLowerCase().contains('q4515')){session.send(`A4515`);
      }
else if(session.message.text.toLowerCase().contains('q4514')){session.send(`A4514`);
      }
else if(session.message.text.toLowerCase().contains('q4513')){session.send(`A4513`);
      }
else if(session.message.text.toLowerCase().contains('q4512')){session.send(`A4512`);
      }
else if(session.message.text.toLowerCase().contains('q4511')){session.send(`A4511`);
      }
else if(session.message.text.toLowerCase().contains('q4510')){session.send(`A4510`);
      }
else if(session.message.text.toLowerCase().contains('q4509')){session.send(`A4509`);
      }
else if(session.message.text.toLowerCase().contains('q4508')){session.send(`A4508`);
      }
else if(session.message.text.toLowerCase().contains('q4507')){session.send(`A4507`);
      }
else if(session.message.text.toLowerCase().contains('q4506')){session.send(`A4506`);
      }
else if(session.message.text.toLowerCase().contains('q4505')){session.send(`A4505`);
      }
else if(session.message.text.toLowerCase().contains('q4504')){session.send(`A4504`);
      }
else if(session.message.text.toLowerCase().contains('q4503')){session.send(`A4503`);
      }
else if(session.message.text.toLowerCase().contains('q4502')){session.send(`A4502`);
      }
else if(session.message.text.toLowerCase().contains('q4501')){session.send(`A4501`);
      }
else if(session.message.text.toLowerCase().contains('q4500')){session.send(`A4500`);
      }
else if(session.message.text.toLowerCase().contains('q4499')){session.send(`A4499`);
      }
else if(session.message.text.toLowerCase().contains('q4498')){session.send(`A4498`);
      }
else if(session.message.text.toLowerCase().contains('q4497')){session.send(`A4497`);
      }
else if(session.message.text.toLowerCase().contains('q4496')){session.send(`A4496`);
      }
else if(session.message.text.toLowerCase().contains('q4495')){session.send(`A4495`);
      }
else if(session.message.text.toLowerCase().contains('q4494')){session.send(`A4494`);
      }
else if(session.message.text.toLowerCase().contains('q4493')){session.send(`A4493`);
      }
else if(session.message.text.toLowerCase().contains('q4492')){session.send(`A4492`);
      }
else if(session.message.text.toLowerCase().contains('q4491')){session.send(`A4491`);
      }
else if(session.message.text.toLowerCase().contains('q4490')){session.send(`A4490`);
      }
else if(session.message.text.toLowerCase().contains('q4489')){session.send(`A4489`);
      }
else if(session.message.text.toLowerCase().contains('q4488')){session.send(`A4488`);
      }
else if(session.message.text.toLowerCase().contains('q4487')){session.send(`A4487`);
      }
else if(session.message.text.toLowerCase().contains('q4486')){session.send(`A4486`);
      }
else if(session.message.text.toLowerCase().contains('q4485')){session.send(`A4485`);
      }
else if(session.message.text.toLowerCase().contains('q4484')){session.send(`A4484`);
      }
else if(session.message.text.toLowerCase().contains('q4483')){session.send(`A4483`);
      }
else if(session.message.text.toLowerCase().contains('q4482')){session.send(`A4482`);
      }
else if(session.message.text.toLowerCase().contains('q4481')){session.send(`A4481`);
      }
else if(session.message.text.toLowerCase().contains('q4480')){session.send(`A4480`);
      }
else if(session.message.text.toLowerCase().contains('q4479')){session.send(`A4479`);
      }
else if(session.message.text.toLowerCase().contains('q4478')){session.send(`A4478`);
      }
else if(session.message.text.toLowerCase().contains('q4477')){session.send(`A4477`);
      }
else if(session.message.text.toLowerCase().contains('q4476')){session.send(`A4476`);
      }
else if(session.message.text.toLowerCase().contains('q4475')){session.send(`A4475`);
      }
else if(session.message.text.toLowerCase().contains('q4474')){session.send(`A4474`);
      }
else if(session.message.text.toLowerCase().contains('q4473')){session.send(`A4473`);
      }
else if(session.message.text.toLowerCase().contains('q4472')){session.send(`A4472`);
      }
else if(session.message.text.toLowerCase().contains('q4471')){session.send(`A4471`);
      }
else if(session.message.text.toLowerCase().contains('q4470')){session.send(`A4470`);
      }
else if(session.message.text.toLowerCase().contains('q4469')){session.send(`A4469`);
      }
else if(session.message.text.toLowerCase().contains('q4468')){session.send(`A4468`);
      }
else if(session.message.text.toLowerCase().contains('q4467')){session.send(`A4467`);
      }
else if(session.message.text.toLowerCase().contains('q4466')){session.send(`A4466`);
      }
else if(session.message.text.toLowerCase().contains('q4465')){session.send(`A4465`);
      }
else if(session.message.text.toLowerCase().contains('q4464')){session.send(`A4464`);
      }
else if(session.message.text.toLowerCase().contains('q4463')){session.send(`A4463`);
      }
else if(session.message.text.toLowerCase().contains('q4462')){session.send(`A4462`);
      }
else if(session.message.text.toLowerCase().contains('q4461')){session.send(`A4461`);
      }
else if(session.message.text.toLowerCase().contains('q4460')){session.send(`A4460`);
      }
else if(session.message.text.toLowerCase().contains('q4459')){session.send(`A4459`);
      }
else if(session.message.text.toLowerCase().contains('q4458')){session.send(`A4458`);
      }
else if(session.message.text.toLowerCase().contains('q4457')){session.send(`A4457`);
      }
else if(session.message.text.toLowerCase().contains('q4456')){session.send(`A4456`);
      }
else if(session.message.text.toLowerCase().contains('q4455')){session.send(`A4455`);
      }
else if(session.message.text.toLowerCase().contains('q4454')){session.send(`A4454`);
      }
else if(session.message.text.toLowerCase().contains('q4453')){session.send(`A4453`);
      }
else if(session.message.text.toLowerCase().contains('q4452')){session.send(`A4452`);
      }
else if(session.message.text.toLowerCase().contains('q4451')){session.send(`A4451`);
      }
else if(session.message.text.toLowerCase().contains('q4450')){session.send(`A4450`);
      }
else if(session.message.text.toLowerCase().contains('q4449')){session.send(`A4449`);
      }
else if(session.message.text.toLowerCase().contains('q4448')){session.send(`A4448`);
      }
else if(session.message.text.toLowerCase().contains('q4447')){session.send(`A4447`);
      }
else if(session.message.text.toLowerCase().contains('q4446')){session.send(`A4446`);
      }
else if(session.message.text.toLowerCase().contains('q4445')){session.send(`A4445`);
      }
else if(session.message.text.toLowerCase().contains('q4444')){session.send(`A4444`);
      }
else if(session.message.text.toLowerCase().contains('q4443')){session.send(`A4443`);
      }
else if(session.message.text.toLowerCase().contains('q4442')){session.send(`A4442`);
      }
else if(session.message.text.toLowerCase().contains('q4441')){session.send(`A4441`);
      }
else if(session.message.text.toLowerCase().contains('q4440')){session.send(`A4440`);
      }
else if(session.message.text.toLowerCase().contains('q4439')){session.send(`A4439`);
      }
else if(session.message.text.toLowerCase().contains('q4438')){session.send(`A4438`);
      }
else if(session.message.text.toLowerCase().contains('q4437')){session.send(`A4437`);
      }
else if(session.message.text.toLowerCase().contains('q4436')){session.send(`A4436`);
      }
else if(session.message.text.toLowerCase().contains('q4435')){session.send(`A4435`);
      }
else if(session.message.text.toLowerCase().contains('q4434')){session.send(`A4434`);
      }
else if(session.message.text.toLowerCase().contains('q4433')){session.send(`A4433`);
      }
else if(session.message.text.toLowerCase().contains('q4432')){session.send(`A4432`);
      }
else if(session.message.text.toLowerCase().contains('q4431')){session.send(`A4431`);
      }
else if(session.message.text.toLowerCase().contains('q4430')){session.send(`A4430`);
      }
else if(session.message.text.toLowerCase().contains('q4429')){session.send(`A4429`);
      }
else if(session.message.text.toLowerCase().contains('q4428')){session.send(`A4428`);
      }
else if(session.message.text.toLowerCase().contains('q4427')){session.send(`A4427`);
      }
else if(session.message.text.toLowerCase().contains('q4426')){session.send(`A4426`);
      }
else if(session.message.text.toLowerCase().contains('q4425')){session.send(`A4425`);
      }
else if(session.message.text.toLowerCase().contains('q4424')){session.send(`A4424`);
      }
else if(session.message.text.toLowerCase().contains('q4423')){session.send(`A4423`);
      }
else if(session.message.text.toLowerCase().contains('q4422')){session.send(`A4422`);
      }
else if(session.message.text.toLowerCase().contains('q4421')){session.send(`A4421`);
      }
else if(session.message.text.toLowerCase().contains('q4420')){session.send(`A4420`);
      }
else if(session.message.text.toLowerCase().contains('q4419')){session.send(`A4419`);
      }
else if(session.message.text.toLowerCase().contains('q4418')){session.send(`A4418`);
      }
else if(session.message.text.toLowerCase().contains('q4417')){session.send(`A4417`);
      }
else if(session.message.text.toLowerCase().contains('q4416')){session.send(`A4416`);
      }
else if(session.message.text.toLowerCase().contains('q4415')){session.send(`A4415`);
      }
else if(session.message.text.toLowerCase().contains('q4414')){session.send(`A4414`);
      }
else if(session.message.text.toLowerCase().contains('q4413')){session.send(`A4413`);
      }
else if(session.message.text.toLowerCase().contains('q4412')){session.send(`A4412`);
      }
else if(session.message.text.toLowerCase().contains('q4411')){session.send(`A4411`);
      }
else if(session.message.text.toLowerCase().contains('q4410')){session.send(`A4410`);
      }
else if(session.message.text.toLowerCase().contains('q4409')){session.send(`A4409`);
      }
else if(session.message.text.toLowerCase().contains('q4408')){session.send(`A4408`);
      }
else if(session.message.text.toLowerCase().contains('q4407')){session.send(`A4407`);
      }
else if(session.message.text.toLowerCase().contains('q4406')){session.send(`A4406`);
      }
else if(session.message.text.toLowerCase().contains('q4405')){session.send(`A4405`);
      }
else if(session.message.text.toLowerCase().contains('q4404')){session.send(`A4404`);
      }
else if(session.message.text.toLowerCase().contains('q4403')){session.send(`A4403`);
      }
else if(session.message.text.toLowerCase().contains('q4402')){session.send(`A4402`);
      }
else if(session.message.text.toLowerCase().contains('q4401')){session.send(`A4401`);
      }
else if(session.message.text.toLowerCase().contains('q4400')){session.send(`A4400`);
      }
else if(session.message.text.toLowerCase().contains('q4399')){session.send(`A4399`);
      }
else if(session.message.text.toLowerCase().contains('q4398')){session.send(`A4398`);
      }
else if(session.message.text.toLowerCase().contains('q4397')){session.send(`A4397`);
      }
else if(session.message.text.toLowerCase().contains('q4396')){session.send(`A4396`);
      }
else if(session.message.text.toLowerCase().contains('q4395')){session.send(`A4395`);
      }
else if(session.message.text.toLowerCase().contains('q4394')){session.send(`A4394`);
      }
else if(session.message.text.toLowerCase().contains('q4393')){session.send(`A4393`);
      }
else if(session.message.text.toLowerCase().contains('q4392')){session.send(`A4392`);
      }
else if(session.message.text.toLowerCase().contains('q4391')){session.send(`A4391`);
      }
else if(session.message.text.toLowerCase().contains('q4390')){session.send(`A4390`);
      }
else if(session.message.text.toLowerCase().contains('q4389')){session.send(`A4389`);
      }
else if(session.message.text.toLowerCase().contains('q4388')){session.send(`A4388`);
      }
else if(session.message.text.toLowerCase().contains('q4387')){session.send(`A4387`);
      }
else if(session.message.text.toLowerCase().contains('q4386')){session.send(`A4386`);
      }
else if(session.message.text.toLowerCase().contains('q4385')){session.send(`A4385`);
      }
else if(session.message.text.toLowerCase().contains('q4384')){session.send(`A4384`);
      }
else if(session.message.text.toLowerCase().contains('q4383')){session.send(`A4383`);
      }
else if(session.message.text.toLowerCase().contains('q4382')){session.send(`A4382`);
      }
else if(session.message.text.toLowerCase().contains('q4381')){session.send(`A4381`);
      }
else if(session.message.text.toLowerCase().contains('q4380')){session.send(`A4380`);
      }
else if(session.message.text.toLowerCase().contains('q4379')){session.send(`A4379`);
      }
else if(session.message.text.toLowerCase().contains('q4378')){session.send(`A4378`);
      }
else if(session.message.text.toLowerCase().contains('q4377')){session.send(`A4377`);
      }
else if(session.message.text.toLowerCase().contains('q4376')){session.send(`A4376`);
      }
else if(session.message.text.toLowerCase().contains('q4375')){session.send(`A4375`);
      }
else if(session.message.text.toLowerCase().contains('q4374')){session.send(`A4374`);
      }
else if(session.message.text.toLowerCase().contains('q4373')){session.send(`A4373`);
      }
else if(session.message.text.toLowerCase().contains('q4372')){session.send(`A4372`);
      }
else if(session.message.text.toLowerCase().contains('q4371')){session.send(`A4371`);
      }
else if(session.message.text.toLowerCase().contains('q4370')){session.send(`A4370`);
      }
else if(session.message.text.toLowerCase().contains('q4369')){session.send(`A4369`);
      }
else if(session.message.text.toLowerCase().contains('q4368')){session.send(`A4368`);
      }
else if(session.message.text.toLowerCase().contains('q4367')){session.send(`A4367`);
      }
else if(session.message.text.toLowerCase().contains('q4366')){session.send(`A4366`);
      }
else if(session.message.text.toLowerCase().contains('q4365')){session.send(`A4365`);
      }
else if(session.message.text.toLowerCase().contains('q4364')){session.send(`A4364`);
      }
else if(session.message.text.toLowerCase().contains('q4363')){session.send(`A4363`);
      }
else if(session.message.text.toLowerCase().contains('q4362')){session.send(`A4362`);
      }
else if(session.message.text.toLowerCase().contains('q4361')){session.send(`A4361`);
      }
else if(session.message.text.toLowerCase().contains('q4360')){session.send(`A4360`);
      }
else if(session.message.text.toLowerCase().contains('q4359')){session.send(`A4359`);
      }
else if(session.message.text.toLowerCase().contains('q4358')){session.send(`A4358`);
      }
else if(session.message.text.toLowerCase().contains('q4357')){session.send(`A4357`);
      }
else if(session.message.text.toLowerCase().contains('q4356')){session.send(`A4356`);
      }
else if(session.message.text.toLowerCase().contains('q4355')){session.send(`A4355`);
      }
else if(session.message.text.toLowerCase().contains('q4354')){session.send(`A4354`);
      }
else if(session.message.text.toLowerCase().contains('q4353')){session.send(`A4353`);
      }
else if(session.message.text.toLowerCase().contains('q4352')){session.send(`A4352`);
      }
else if(session.message.text.toLowerCase().contains('q4351')){session.send(`A4351`);
      }
else if(session.message.text.toLowerCase().contains('q4350')){session.send(`A4350`);
      }
else if(session.message.text.toLowerCase().contains('q4349')){session.send(`A4349`);
      }
else if(session.message.text.toLowerCase().contains('q4348')){session.send(`A4348`);
      }
else if(session.message.text.toLowerCase().contains('q4347')){session.send(`A4347`);
      }
else if(session.message.text.toLowerCase().contains('q4346')){session.send(`A4346`);
      }
else if(session.message.text.toLowerCase().contains('q4345')){session.send(`A4345`);
      }
else if(session.message.text.toLowerCase().contains('q4344')){session.send(`A4344`);
      }
else if(session.message.text.toLowerCase().contains('q4343')){session.send(`A4343`);
      }
else if(session.message.text.toLowerCase().contains('q4342')){session.send(`A4342`);
      }
else if(session.message.text.toLowerCase().contains('q4341')){session.send(`A4341`);
      }
else if(session.message.text.toLowerCase().contains('q4340')){session.send(`A4340`);
      }
else if(session.message.text.toLowerCase().contains('q4339')){session.send(`A4339`);
      }
else if(session.message.text.toLowerCase().contains('q4338')){session.send(`A4338`);
      }
else if(session.message.text.toLowerCase().contains('q4337')){session.send(`A4337`);
      }
else if(session.message.text.toLowerCase().contains('q4336')){session.send(`A4336`);
      }
else if(session.message.text.toLowerCase().contains('q4335')){session.send(`A4335`);
      }
else if(session.message.text.toLowerCase().contains('q4334')){session.send(`A4334`);
      }
else if(session.message.text.toLowerCase().contains('q4333')){session.send(`A4333`);
      }
else if(session.message.text.toLowerCase().contains('q4332')){session.send(`A4332`);
      }
else if(session.message.text.toLowerCase().contains('q4331')){session.send(`A4331`);
      }
else if(session.message.text.toLowerCase().contains('q4330')){session.send(`A4330`);
      }
else if(session.message.text.toLowerCase().contains('q4329')){session.send(`A4329`);
      }
else if(session.message.text.toLowerCase().contains('q4328')){session.send(`A4328`);
      }
else if(session.message.text.toLowerCase().contains('q4327')){session.send(`A4327`);
      }
else if(session.message.text.toLowerCase().contains('q4326')){session.send(`A4326`);
      }
else if(session.message.text.toLowerCase().contains('q4325')){session.send(`A4325`);
      }
else if(session.message.text.toLowerCase().contains('q4324')){session.send(`A4324`);
      }
else if(session.message.text.toLowerCase().contains('q4323')){session.send(`A4323`);
      }
else if(session.message.text.toLowerCase().contains('q4322')){session.send(`A4322`);
      }
else if(session.message.text.toLowerCase().contains('q4321')){session.send(`A4321`);
      }
else if(session.message.text.toLowerCase().contains('q4320')){session.send(`A4320`);
      }
else if(session.message.text.toLowerCase().contains('q4319')){session.send(`A4319`);
      }
else if(session.message.text.toLowerCase().contains('q4318')){session.send(`A4318`);
      }
else if(session.message.text.toLowerCase().contains('q4317')){session.send(`A4317`);
      }
else if(session.message.text.toLowerCase().contains('q4316')){session.send(`A4316`);
      }
else if(session.message.text.toLowerCase().contains('q4315')){session.send(`A4315`);
      }
else if(session.message.text.toLowerCase().contains('q4314')){session.send(`A4314`);
      }
else if(session.message.text.toLowerCase().contains('q4313')){session.send(`A4313`);
      }
else if(session.message.text.toLowerCase().contains('q4312')){session.send(`A4312`);
      }
else if(session.message.text.toLowerCase().contains('q4311')){session.send(`A4311`);
      }
else if(session.message.text.toLowerCase().contains('q4310')){session.send(`A4310`);
      }
else if(session.message.text.toLowerCase().contains('q4309')){session.send(`A4309`);
      }
else if(session.message.text.toLowerCase().contains('q4308')){session.send(`A4308`);
      }
else if(session.message.text.toLowerCase().contains('q4307')){session.send(`A4307`);
      }
else if(session.message.text.toLowerCase().contains('q4306')){session.send(`A4306`);
      }
else if(session.message.text.toLowerCase().contains('q4305')){session.send(`A4305`);
      }
else if(session.message.text.toLowerCase().contains('q4304')){session.send(`A4304`);
      }
else if(session.message.text.toLowerCase().contains('q4303')){session.send(`A4303`);
      }
else if(session.message.text.toLowerCase().contains('q4302')){session.send(`A4302`);
      }
else if(session.message.text.toLowerCase().contains('q4301')){session.send(`A4301`);
      }
else if(session.message.text.toLowerCase().contains('q4300')){session.send(`A4300`);
      }
else if(session.message.text.toLowerCase().contains('q4299')){session.send(`A4299`);
      }
else if(session.message.text.toLowerCase().contains('q4298')){session.send(`A4298`);
      }
else if(session.message.text.toLowerCase().contains('q4297')){session.send(`A4297`);
      }
else if(session.message.text.toLowerCase().contains('q4296')){session.send(`A4296`);
      }
else if(session.message.text.toLowerCase().contains('q4295')){session.send(`A4295`);
      }
else if(session.message.text.toLowerCase().contains('q4294')){session.send(`A4294`);
      }
else if(session.message.text.toLowerCase().contains('q4293')){session.send(`A4293`);
      }
else if(session.message.text.toLowerCase().contains('q4292')){session.send(`A4292`);
      }
else if(session.message.text.toLowerCase().contains('q4291')){session.send(`A4291`);
      }
else if(session.message.text.toLowerCase().contains('q4290')){session.send(`A4290`);
      }
else if(session.message.text.toLowerCase().contains('q4289')){session.send(`A4289`);
      }
else if(session.message.text.toLowerCase().contains('q4288')){session.send(`A4288`);
      }
else if(session.message.text.toLowerCase().contains('q4287')){session.send(`A4287`);
      }
else if(session.message.text.toLowerCase().contains('q4286')){session.send(`A4286`);
      }
else if(session.message.text.toLowerCase().contains('q4285')){session.send(`A4285`);
      }
else if(session.message.text.toLowerCase().contains('q4284')){session.send(`A4284`);
      }
else if(session.message.text.toLowerCase().contains('q4283')){session.send(`A4283`);
      }
else if(session.message.text.toLowerCase().contains('q4282')){session.send(`A4282`);
      }
else if(session.message.text.toLowerCase().contains('q4281')){session.send(`A4281`);
      }
else if(session.message.text.toLowerCase().contains('q4280')){session.send(`A4280`);
      }
else if(session.message.text.toLowerCase().contains('q4279')){session.send(`A4279`);
      }
else if(session.message.text.toLowerCase().contains('q4278')){session.send(`A4278`);
      }
else if(session.message.text.toLowerCase().contains('q4277')){session.send(`A4277`);
      }
else if(session.message.text.toLowerCase().contains('q4276')){session.send(`A4276`);
      }
else if(session.message.text.toLowerCase().contains('q4275')){session.send(`A4275`);
      }
else if(session.message.text.toLowerCase().contains('q4274')){session.send(`A4274`);
      }
else if(session.message.text.toLowerCase().contains('q4273')){session.send(`A4273`);
      }
else if(session.message.text.toLowerCase().contains('q4272')){session.send(`A4272`);
      }
else if(session.message.text.toLowerCase().contains('q4271')){session.send(`A4271`);
      }
else if(session.message.text.toLowerCase().contains('q4270')){session.send(`A4270`);
      }
else if(session.message.text.toLowerCase().contains('q4269')){session.send(`A4269`);
      }
else if(session.message.text.toLowerCase().contains('q4268')){session.send(`A4268`);
      }
else if(session.message.text.toLowerCase().contains('q4267')){session.send(`A4267`);
      }
else if(session.message.text.toLowerCase().contains('q4266')){session.send(`A4266`);
      }
else if(session.message.text.toLowerCase().contains('q4265')){session.send(`A4265`);
      }
else if(session.message.text.toLowerCase().contains('q4264')){session.send(`A4264`);
      }
else if(session.message.text.toLowerCase().contains('q4263')){session.send(`A4263`);
      }
else if(session.message.text.toLowerCase().contains('q4262')){session.send(`A4262`);
      }
else if(session.message.text.toLowerCase().contains('q4261')){session.send(`A4261`);
      }
else if(session.message.text.toLowerCase().contains('q4260')){session.send(`A4260`);
      }
else if(session.message.text.toLowerCase().contains('q4259')){session.send(`A4259`);
      }
else if(session.message.text.toLowerCase().contains('q4258')){session.send(`A4258`);
      }
else if(session.message.text.toLowerCase().contains('q4257')){session.send(`A4257`);
      }
else if(session.message.text.toLowerCase().contains('q4256')){session.send(`A4256`);
      }
else if(session.message.text.toLowerCase().contains('q4255')){session.send(`A4255`);
      }
else if(session.message.text.toLowerCase().contains('q4254')){session.send(`A4254`);
      }
else if(session.message.text.toLowerCase().contains('q4253')){session.send(`A4253`);
      }
else if(session.message.text.toLowerCase().contains('q4252')){session.send(`A4252`);
      }
else if(session.message.text.toLowerCase().contains('q4251')){session.send(`A4251`);
      }
else if(session.message.text.toLowerCase().contains('q4250')){session.send(`A4250`);
      }
else if(session.message.text.toLowerCase().contains('q4249')){session.send(`A4249`);
      }
else if(session.message.text.toLowerCase().contains('q4248')){session.send(`A4248`);
      }
else if(session.message.text.toLowerCase().contains('q4247')){session.send(`A4247`);
      }
else if(session.message.text.toLowerCase().contains('q4246')){session.send(`A4246`);
      }
else if(session.message.text.toLowerCase().contains('q4245')){session.send(`A4245`);
      }
else if(session.message.text.toLowerCase().contains('q4244')){session.send(`A4244`);
      }
else if(session.message.text.toLowerCase().contains('q4243')){session.send(`A4243`);
      }
else if(session.message.text.toLowerCase().contains('q4242')){session.send(`A4242`);
      }
else if(session.message.text.toLowerCase().contains('q4241')){session.send(`A4241`);
      }
else if(session.message.text.toLowerCase().contains('q4240')){session.send(`A4240`);
      }
else if(session.message.text.toLowerCase().contains('q4239')){session.send(`A4239`);
      }
else if(session.message.text.toLowerCase().contains('q4238')){session.send(`A4238`);
      }
else if(session.message.text.toLowerCase().contains('q4237')){session.send(`A4237`);
      }
else if(session.message.text.toLowerCase().contains('q4236')){session.send(`A4236`);
      }
else if(session.message.text.toLowerCase().contains('q4235')){session.send(`A4235`);
      }
else if(session.message.text.toLowerCase().contains('q4234')){session.send(`A4234`);
      }
else if(session.message.text.toLowerCase().contains('q4233')){session.send(`A4233`);
      }
else if(session.message.text.toLowerCase().contains('q4232')){session.send(`A4232`);
      }
else if(session.message.text.toLowerCase().contains('q4231')){session.send(`A4231`);
      }
else if(session.message.text.toLowerCase().contains('q4230')){session.send(`A4230`);
      }
else if(session.message.text.toLowerCase().contains('q4229')){session.send(`A4229`);
      }
else if(session.message.text.toLowerCase().contains('q4228')){session.send(`A4228`);
      }
else if(session.message.text.toLowerCase().contains('q4227')){session.send(`A4227`);
      }
else if(session.message.text.toLowerCase().contains('q4226')){session.send(`A4226`);
      }
else if(session.message.text.toLowerCase().contains('q4225')){session.send(`A4225`);
      }
else if(session.message.text.toLowerCase().contains('q4224')){session.send(`A4224`);
      }
else if(session.message.text.toLowerCase().contains('q4223')){session.send(`A4223`);
      }
else if(session.message.text.toLowerCase().contains('q4222')){session.send(`A4222`);
      }
else if(session.message.text.toLowerCase().contains('q4221')){session.send(`A4221`);
      }
else if(session.message.text.toLowerCase().contains('q4220')){session.send(`A4220`);
      }
else if(session.message.text.toLowerCase().contains('q4219')){session.send(`A4219`);
      }
else if(session.message.text.toLowerCase().contains('q4218')){session.send(`A4218`);
      }
else if(session.message.text.toLowerCase().contains('q4217')){session.send(`A4217`);
      }
else if(session.message.text.toLowerCase().contains('q4216')){session.send(`A4216`);
      }
else if(session.message.text.toLowerCase().contains('q4215')){session.send(`A4215`);
      }
else if(session.message.text.toLowerCase().contains('q4214')){session.send(`A4214`);
      }
else if(session.message.text.toLowerCase().contains('q4213')){session.send(`A4213`);
      }
else if(session.message.text.toLowerCase().contains('q4212')){session.send(`A4212`);
      }
else if(session.message.text.toLowerCase().contains('q4211')){session.send(`A4211`);
      }
else if(session.message.text.toLowerCase().contains('q4210')){session.send(`A4210`);
      }
else if(session.message.text.toLowerCase().contains('q4209')){session.send(`A4209`);
      }
else if(session.message.text.toLowerCase().contains('q4208')){session.send(`A4208`);
      }
else if(session.message.text.toLowerCase().contains('q4207')){session.send(`A4207`);
      }
else if(session.message.text.toLowerCase().contains('q4206')){session.send(`A4206`);
      }
else if(session.message.text.toLowerCase().contains('q4205')){session.send(`A4205`);
      }
else if(session.message.text.toLowerCase().contains('q4204')){session.send(`A4204`);
      }
else if(session.message.text.toLowerCase().contains('q4203')){session.send(`A4203`);
      }
else if(session.message.text.toLowerCase().contains('q4202')){session.send(`A4202`);
      }
else if(session.message.text.toLowerCase().contains('q4201')){session.send(`A4201`);
      }
else if(session.message.text.toLowerCase().contains('q4200')){session.send(`A4200`);
      }
else if(session.message.text.toLowerCase().contains('q4199')){session.send(`A4199`);
      }
else if(session.message.text.toLowerCase().contains('q4198')){session.send(`A4198`);
      }
else if(session.message.text.toLowerCase().contains('q4197')){session.send(`A4197`);
      }
else if(session.message.text.toLowerCase().contains('q4196')){session.send(`A4196`);
      }
else if(session.message.text.toLowerCase().contains('q4195')){session.send(`A4195`);
      }
else if(session.message.text.toLowerCase().contains('q4194')){session.send(`A4194`);
      }
else if(session.message.text.toLowerCase().contains('q4193')){session.send(`A4193`);
      }
else if(session.message.text.toLowerCase().contains('q4192')){session.send(`A4192`);
      }
else if(session.message.text.toLowerCase().contains('q4191')){session.send(`A4191`);
      }
else if(session.message.text.toLowerCase().contains('q4190')){session.send(`A4190`);
      }
else if(session.message.text.toLowerCase().contains('q4189')){session.send(`A4189`);
      }
else if(session.message.text.toLowerCase().contains('q4188')){session.send(`A4188`);
      }
else if(session.message.text.toLowerCase().contains('q4187')){session.send(`A4187`);
      }
else if(session.message.text.toLowerCase().contains('q4186')){session.send(`A4186`);
      }
else if(session.message.text.toLowerCase().contains('q4185')){session.send(`A4185`);
      }
else if(session.message.text.toLowerCase().contains('q4184')){session.send(`A4184`);
      }
else if(session.message.text.toLowerCase().contains('q4183')){session.send(`A4183`);
      }
else if(session.message.text.toLowerCase().contains('q4182')){session.send(`A4182`);
      }
else if(session.message.text.toLowerCase().contains('q4181')){session.send(`A4181`);
      }
else if(session.message.text.toLowerCase().contains('q4180')){session.send(`A4180`);
      }
else if(session.message.text.toLowerCase().contains('q4179')){session.send(`A4179`);
      }
else if(session.message.text.toLowerCase().contains('q4178')){session.send(`A4178`);
      }
else if(session.message.text.toLowerCase().contains('q4177')){session.send(`A4177`);
      }
else if(session.message.text.toLowerCase().contains('q4176')){session.send(`A4176`);
      }
else if(session.message.text.toLowerCase().contains('q4175')){session.send(`A4175`);
      }
else if(session.message.text.toLowerCase().contains('q4174')){session.send(`A4174`);
      }
else if(session.message.text.toLowerCase().contains('q4173')){session.send(`A4173`);
      }
else if(session.message.text.toLowerCase().contains('q4172')){session.send(`A4172`);
      }
else if(session.message.text.toLowerCase().contains('q4171')){session.send(`A4171`);
      }
else if(session.message.text.toLowerCase().contains('q4170')){session.send(`A4170`);
      }
else if(session.message.text.toLowerCase().contains('q4169')){session.send(`A4169`);
      }
else if(session.message.text.toLowerCase().contains('q4168')){session.send(`A4168`);
      }
else if(session.message.text.toLowerCase().contains('q4167')){session.send(`A4167`);
      }
else if(session.message.text.toLowerCase().contains('q4166')){session.send(`A4166`);
      }
else if(session.message.text.toLowerCase().contains('q4165')){session.send(`A4165`);
      }
else if(session.message.text.toLowerCase().contains('q4164')){session.send(`A4164`);
      }
else if(session.message.text.toLowerCase().contains('q4163')){session.send(`A4163`);
      }
else if(session.message.text.toLowerCase().contains('q4162')){session.send(`A4162`);
      }
else if(session.message.text.toLowerCase().contains('q4161')){session.send(`A4161`);
      }
else if(session.message.text.toLowerCase().contains('q4160')){session.send(`A4160`);
      }
else if(session.message.text.toLowerCase().contains('q4159')){session.send(`A4159`);
      }
else if(session.message.text.toLowerCase().contains('q4158')){session.send(`A4158`);
      }
else if(session.message.text.toLowerCase().contains('q4157')){session.send(`A4157`);
      }
else if(session.message.text.toLowerCase().contains('q4156')){session.send(`A4156`);
      }
else if(session.message.text.toLowerCase().contains('q4155')){session.send(`A4155`);
      }
else if(session.message.text.toLowerCase().contains('q4154')){session.send(`A4154`);
      }
else if(session.message.text.toLowerCase().contains('q4153')){session.send(`A4153`);
      }
else if(session.message.text.toLowerCase().contains('q4152')){session.send(`A4152`);
      }
else if(session.message.text.toLowerCase().contains('q4151')){session.send(`A4151`);
      }
else if(session.message.text.toLowerCase().contains('q4150')){session.send(`A4150`);
      }
else if(session.message.text.toLowerCase().contains('q4149')){session.send(`A4149`);
      }
else if(session.message.text.toLowerCase().contains('q4148')){session.send(`A4148`);
      }
else if(session.message.text.toLowerCase().contains('q4147')){session.send(`A4147`);
      }
else if(session.message.text.toLowerCase().contains('q4146')){session.send(`A4146`);
      }
else if(session.message.text.toLowerCase().contains('q4145')){session.send(`A4145`);
      }
else if(session.message.text.toLowerCase().contains('q4144')){session.send(`A4144`);
      }
else if(session.message.text.toLowerCase().contains('q4143')){session.send(`A4143`);
      }
else if(session.message.text.toLowerCase().contains('q4142')){session.send(`A4142`);
      }
else if(session.message.text.toLowerCase().contains('q4141')){session.send(`A4141`);
      }
else if(session.message.text.toLowerCase().contains('q4140')){session.send(`A4140`);
      }
else if(session.message.text.toLowerCase().contains('q4139')){session.send(`A4139`);
      }
else if(session.message.text.toLowerCase().contains('q4138')){session.send(`A4138`);
      }
else if(session.message.text.toLowerCase().contains('q4137')){session.send(`A4137`);
      }
else if(session.message.text.toLowerCase().contains('q4136')){session.send(`A4136`);
      }
else if(session.message.text.toLowerCase().contains('q4135')){session.send(`A4135`);
      }
else if(session.message.text.toLowerCase().contains('q4134')){session.send(`A4134`);
      }
else if(session.message.text.toLowerCase().contains('q4133')){session.send(`A4133`);
      }
else if(session.message.text.toLowerCase().contains('q4132')){session.send(`A4132`);
      }
else if(session.message.text.toLowerCase().contains('q4131')){session.send(`A4131`);
      }
else if(session.message.text.toLowerCase().contains('q4130')){session.send(`A4130`);
      }
else if(session.message.text.toLowerCase().contains('q4129')){session.send(`A4129`);
      }
else if(session.message.text.toLowerCase().contains('q4128')){session.send(`A4128`);
      }
else if(session.message.text.toLowerCase().contains('q4127')){session.send(`A4127`);
      }
else if(session.message.text.toLowerCase().contains('q4126')){session.send(`A4126`);
      }
else if(session.message.text.toLowerCase().contains('q4125')){session.send(`A4125`);
      }
else if(session.message.text.toLowerCase().contains('q4124')){session.send(`A4124`);
      }
else if(session.message.text.toLowerCase().contains('q4123')){session.send(`A4123`);
      }
else if(session.message.text.toLowerCase().contains('q4122')){session.send(`A4122`);
      }
else if(session.message.text.toLowerCase().contains('q4121')){session.send(`A4121`);
      }
else if(session.message.text.toLowerCase().contains('q4120')){session.send(`A4120`);
      }
else if(session.message.text.toLowerCase().contains('q4119')){session.send(`A4119`);
      }
else if(session.message.text.toLowerCase().contains('q4118')){session.send(`A4118`);
      }
else if(session.message.text.toLowerCase().contains('q4117')){session.send(`A4117`);
      }
else if(session.message.text.toLowerCase().contains('q4116')){session.send(`A4116`);
      }
else if(session.message.text.toLowerCase().contains('q4115')){session.send(`A4115`);
      }
else if(session.message.text.toLowerCase().contains('q4114')){session.send(`A4114`);
      }
else if(session.message.text.toLowerCase().contains('q4113')){session.send(`A4113`);
      }
else if(session.message.text.toLowerCase().contains('q4112')){session.send(`A4112`);
      }
else if(session.message.text.toLowerCase().contains('q4111')){session.send(`A4111`);
      }
else if(session.message.text.toLowerCase().contains('q4110')){session.send(`A4110`);
      }
else if(session.message.text.toLowerCase().contains('q4109')){session.send(`A4109`);
      }
else if(session.message.text.toLowerCase().contains('q4108')){session.send(`A4108`);
      }
else if(session.message.text.toLowerCase().contains('q4107')){session.send(`A4107`);
      }
else if(session.message.text.toLowerCase().contains('q4106')){session.send(`A4106`);
      }
else if(session.message.text.toLowerCase().contains('q4105')){session.send(`A4105`);
      }
else if(session.message.text.toLowerCase().contains('q4104')){session.send(`A4104`);
      }
else if(session.message.text.toLowerCase().contains('q4103')){session.send(`A4103`);
      }
else if(session.message.text.toLowerCase().contains('q4102')){session.send(`A4102`);
      }
else if(session.message.text.toLowerCase().contains('q4101')){session.send(`A4101`);
      }
else if(session.message.text.toLowerCase().contains('q4100')){session.send(`A4100`);
      }
else if(session.message.text.toLowerCase().contains('q4099')){session.send(`A4099`);
      }
else if(session.message.text.toLowerCase().contains('q4098')){session.send(`A4098`);
      }
else if(session.message.text.toLowerCase().contains('q4097')){session.send(`A4097`);
      }
else if(session.message.text.toLowerCase().contains('q4096')){session.send(`A4096`);
      }
else if(session.message.text.toLowerCase().contains('q4095')){session.send(`A4095`);
      }
else if(session.message.text.toLowerCase().contains('q4094')){session.send(`A4094`);
      }
else if(session.message.text.toLowerCase().contains('q4093')){session.send(`A4093`);
      }
else if(session.message.text.toLowerCase().contains('q4092')){session.send(`A4092`);
      }
else if(session.message.text.toLowerCase().contains('q4091')){session.send(`A4091`);
      }
else if(session.message.text.toLowerCase().contains('q4090')){session.send(`A4090`);
      }
else if(session.message.text.toLowerCase().contains('q4089')){session.send(`A4089`);
      }
else if(session.message.text.toLowerCase().contains('q4088')){session.send(`A4088`);
      }
else if(session.message.text.toLowerCase().contains('q4087')){session.send(`A4087`);
      }
else if(session.message.text.toLowerCase().contains('q4086')){session.send(`A4086`);
      }
else if(session.message.text.toLowerCase().contains('q4085')){session.send(`A4085`);
      }
else if(session.message.text.toLowerCase().contains('q4084')){session.send(`A4084`);
      }
else if(session.message.text.toLowerCase().contains('q4083')){session.send(`A4083`);
      }
else if(session.message.text.toLowerCase().contains('q4082')){session.send(`A4082`);
      }
else if(session.message.text.toLowerCase().contains('q4081')){session.send(`A4081`);
      }
else if(session.message.text.toLowerCase().contains('q4080')){session.send(`A4080`);
      }
else if(session.message.text.toLowerCase().contains('q4079')){session.send(`A4079`);
      }
else if(session.message.text.toLowerCase().contains('q4078')){session.send(`A4078`);
      }
else if(session.message.text.toLowerCase().contains('q4077')){session.send(`A4077`);
      }
else if(session.message.text.toLowerCase().contains('q4076')){session.send(`A4076`);
      }
else if(session.message.text.toLowerCase().contains('q4075')){session.send(`A4075`);
      }
else if(session.message.text.toLowerCase().contains('q4074')){session.send(`A4074`);
      }
else if(session.message.text.toLowerCase().contains('q4073')){session.send(`A4073`);
      }
else if(session.message.text.toLowerCase().contains('q4072')){session.send(`A4072`);
      }
else if(session.message.text.toLowerCase().contains('q4071')){session.send(`A4071`);
      }
else if(session.message.text.toLowerCase().contains('q4070')){session.send(`A4070`);
      }
else if(session.message.text.toLowerCase().contains('q4069')){session.send(`A4069`);
      }
else if(session.message.text.toLowerCase().contains('q4068')){session.send(`A4068`);
      }
else if(session.message.text.toLowerCase().contains('q4067')){session.send(`A4067`);
      }
else if(session.message.text.toLowerCase().contains('q4066')){session.send(`A4066`);
      }
else if(session.message.text.toLowerCase().contains('q4065')){session.send(`A4065`);
      }
else if(session.message.text.toLowerCase().contains('q4064')){session.send(`A4064`);
      }
else if(session.message.text.toLowerCase().contains('q4063')){session.send(`A4063`);
      }
else if(session.message.text.toLowerCase().contains('q4062')){session.send(`A4062`);
      }
else if(session.message.text.toLowerCase().contains('q4061')){session.send(`A4061`);
      }
else if(session.message.text.toLowerCase().contains('q4060')){session.send(`A4060`);
      }
else if(session.message.text.toLowerCase().contains('q4059')){session.send(`A4059`);
      }
else if(session.message.text.toLowerCase().contains('q4058')){session.send(`A4058`);
      }
else if(session.message.text.toLowerCase().contains('q4057')){session.send(`A4057`);
      }
else if(session.message.text.toLowerCase().contains('q4056')){session.send(`A4056`);
      }
else if(session.message.text.toLowerCase().contains('q4055')){session.send(`A4055`);
      }
else if(session.message.text.toLowerCase().contains('q4054')){session.send(`A4054`);
      }
else if(session.message.text.toLowerCase().contains('q4053')){session.send(`A4053`);
      }
else if(session.message.text.toLowerCase().contains('q4052')){session.send(`A4052`);
      }
else if(session.message.text.toLowerCase().contains('q4051')){session.send(`A4051`);
      }
else if(session.message.text.toLowerCase().contains('q4050')){session.send(`A4050`);
      }
else if(session.message.text.toLowerCase().contains('q4049')){session.send(`A4049`);
      }
else if(session.message.text.toLowerCase().contains('q4048')){session.send(`A4048`);
      }
else if(session.message.text.toLowerCase().contains('q4047')){session.send(`A4047`);
      }
else if(session.message.text.toLowerCase().contains('q4046')){session.send(`A4046`);
      }
else if(session.message.text.toLowerCase().contains('q4045')){session.send(`A4045`);
      }
else if(session.message.text.toLowerCase().contains('q4044')){session.send(`A4044`);
      }
else if(session.message.text.toLowerCase().contains('q4043')){session.send(`A4043`);
      }
else if(session.message.text.toLowerCase().contains('q4042')){session.send(`A4042`);
      }
else if(session.message.text.toLowerCase().contains('q4041')){session.send(`A4041`);
      }
else if(session.message.text.toLowerCase().contains('q4040')){session.send(`A4040`);
      }
else if(session.message.text.toLowerCase().contains('q4039')){session.send(`A4039`);
      }
else if(session.message.text.toLowerCase().contains('q4038')){session.send(`A4038`);
      }
else if(session.message.text.toLowerCase().contains('q4037')){session.send(`A4037`);
      }
else if(session.message.text.toLowerCase().contains('q4036')){session.send(`A4036`);
      }
else if(session.message.text.toLowerCase().contains('q4035')){session.send(`A4035`);
      }
else if(session.message.text.toLowerCase().contains('q4034')){session.send(`A4034`);
      }
else if(session.message.text.toLowerCase().contains('q4033')){session.send(`A4033`);
      }
else if(session.message.text.toLowerCase().contains('q4032')){session.send(`A4032`);
      }
else if(session.message.text.toLowerCase().contains('q4031')){session.send(`A4031`);
      }
else if(session.message.text.toLowerCase().contains('q4030')){session.send(`A4030`);
      }
else if(session.message.text.toLowerCase().contains('q4029')){session.send(`A4029`);
      }
else if(session.message.text.toLowerCase().contains('q4028')){session.send(`A4028`);
      }
else if(session.message.text.toLowerCase().contains('q4027')){session.send(`A4027`);
      }
else if(session.message.text.toLowerCase().contains('q4026')){session.send(`A4026`);
      }
else if(session.message.text.toLowerCase().contains('q4025')){session.send(`A4025`);
      }
else if(session.message.text.toLowerCase().contains('q4024')){session.send(`A4024`);
      }
else if(session.message.text.toLowerCase().contains('q4023')){session.send(`A4023`);
      }
else if(session.message.text.toLowerCase().contains('q4022')){session.send(`A4022`);
      }
else if(session.message.text.toLowerCase().contains('q4021')){session.send(`A4021`);
      }
else if(session.message.text.toLowerCase().contains('q4020')){session.send(`A4020`);
      }
else if(session.message.text.toLowerCase().contains('q4019')){session.send(`A4019`);
      }
else if(session.message.text.toLowerCase().contains('q4018')){session.send(`A4018`);
      }
else if(session.message.text.toLowerCase().contains('q4017')){session.send(`A4017`);
      }
else if(session.message.text.toLowerCase().contains('q4016')){session.send(`A4016`);
      }
else if(session.message.text.toLowerCase().contains('q4015')){session.send(`A4015`);
      }
else if(session.message.text.toLowerCase().contains('q4014')){session.send(`A4014`);
      }
else if(session.message.text.toLowerCase().contains('q4013')){session.send(`A4013`);
      }
else if(session.message.text.toLowerCase().contains('q4012')){session.send(`A4012`);
      }
else if(session.message.text.toLowerCase().contains('q4011')){session.send(`A4011`);
      }
else if(session.message.text.toLowerCase().contains('q4010')){session.send(`A4010`);
      }
else if(session.message.text.toLowerCase().contains('q4009')){session.send(`A4009`);
      }
else if(session.message.text.toLowerCase().contains('q4008')){session.send(`A4008`);
      }
else if(session.message.text.toLowerCase().contains('q4007')){session.send(`A4007`);
      }
else if(session.message.text.toLowerCase().contains('q4006')){session.send(`A4006`);
      }
else if(session.message.text.toLowerCase().contains('q4005')){session.send(`A4005`);
      }
else if(session.message.text.toLowerCase().contains('q4004')){session.send(`A4004`);
      }
else if(session.message.text.toLowerCase().contains('q4003')){session.send(`A4003`);
      }
else if(session.message.text.toLowerCase().contains('q4002')){session.send(`A4002`);
      }
else if(session.message.text.toLowerCase().contains('q4001')){session.send(`A4001`);
      }
else if(session.message.text.toLowerCase().contains('q4000')){session.send(`A4000`);
      }
else if(session.message.text.toLowerCase().contains('q3999')){session.send(`A3999`);
      }
else if(session.message.text.toLowerCase().contains('q3998')){session.send(`A3998`);
      }
else if(session.message.text.toLowerCase().contains('q3997')){session.send(`A3997`);
      }
else if(session.message.text.toLowerCase().contains('q3996')){session.send(`A3996`);
      }
else if(session.message.text.toLowerCase().contains('q3995')){session.send(`A3995`);
      }
else if(session.message.text.toLowerCase().contains('q3994')){session.send(`A3994`);
      }
else if(session.message.text.toLowerCase().contains('q3993')){session.send(`A3993`);
      }
else if(session.message.text.toLowerCase().contains('q3992')){session.send(`A3992`);
      }
else if(session.message.text.toLowerCase().contains('q3991')){session.send(`A3991`);
      }
else if(session.message.text.toLowerCase().contains('q3990')){session.send(`A3990`);
      }
else if(session.message.text.toLowerCase().contains('q3989')){session.send(`A3989`);
      }
else if(session.message.text.toLowerCase().contains('q3988')){session.send(`A3988`);
      }
else if(session.message.text.toLowerCase().contains('q3987')){session.send(`A3987`);
      }
else if(session.message.text.toLowerCase().contains('q3986')){session.send(`A3986`);
      }
else if(session.message.text.toLowerCase().contains('q3985')){session.send(`A3985`);
      }
else if(session.message.text.toLowerCase().contains('q3984')){session.send(`A3984`);
      }
else if(session.message.text.toLowerCase().contains('q3983')){session.send(`A3983`);
      }
else if(session.message.text.toLowerCase().contains('q3982')){session.send(`A3982`);
      }
else if(session.message.text.toLowerCase().contains('q3981')){session.send(`A3981`);
      }
else if(session.message.text.toLowerCase().contains('q3980')){session.send(`A3980`);
      }
else if(session.message.text.toLowerCase().contains('q3979')){session.send(`A3979`);
      }
else if(session.message.text.toLowerCase().contains('q3978')){session.send(`A3978`);
      }
else if(session.message.text.toLowerCase().contains('q3977')){session.send(`A3977`);
      }
else if(session.message.text.toLowerCase().contains('q3976')){session.send(`A3976`);
      }
else if(session.message.text.toLowerCase().contains('q3975')){session.send(`A3975`);
      }
else if(session.message.text.toLowerCase().contains('q3974')){session.send(`A3974`);
      }
else if(session.message.text.toLowerCase().contains('q3973')){session.send(`A3973`);
      }
else if(session.message.text.toLowerCase().contains('q3972')){session.send(`A3972`);
      }
else if(session.message.text.toLowerCase().contains('q3971')){session.send(`A3971`);
      }
else if(session.message.text.toLowerCase().contains('q3970')){session.send(`A3970`);
      }
else if(session.message.text.toLowerCase().contains('q3969')){session.send(`A3969`);
      }
else if(session.message.text.toLowerCase().contains('q3968')){session.send(`A3968`);
      }
else if(session.message.text.toLowerCase().contains('q3967')){session.send(`A3967`);
      }
else if(session.message.text.toLowerCase().contains('q3966')){session.send(`A3966`);
      }
else if(session.message.text.toLowerCase().contains('q3965')){session.send(`A3965`);
      }
else if(session.message.text.toLowerCase().contains('q3964')){session.send(`A3964`);
      }
else if(session.message.text.toLowerCase().contains('q3963')){session.send(`A3963`);
      }
else if(session.message.text.toLowerCase().contains('q3962')){session.send(`A3962`);
      }
else if(session.message.text.toLowerCase().contains('q3961')){session.send(`A3961`);
      }
else if(session.message.text.toLowerCase().contains('q3960')){session.send(`A3960`);
      }
else if(session.message.text.toLowerCase().contains('q3959')){session.send(`A3959`);
      }
else if(session.message.text.toLowerCase().contains('q3958')){session.send(`A3958`);
      }
else if(session.message.text.toLowerCase().contains('q3957')){session.send(`A3957`);
      }
else if(session.message.text.toLowerCase().contains('q3956')){session.send(`A3956`);
      }
else if(session.message.text.toLowerCase().contains('q3955')){session.send(`A3955`);
      }
else if(session.message.text.toLowerCase().contains('q3954')){session.send(`A3954`);
      }
else if(session.message.text.toLowerCase().contains('q3953')){session.send(`A3953`);
      }
else if(session.message.text.toLowerCase().contains('q3952')){session.send(`A3952`);
      }
else if(session.message.text.toLowerCase().contains('q3951')){session.send(`A3951`);
      }
else if(session.message.text.toLowerCase().contains('q3950')){session.send(`A3950`);
      }
else if(session.message.text.toLowerCase().contains('q3949')){session.send(`A3949`);
      }
else if(session.message.text.toLowerCase().contains('q3948')){session.send(`A3948`);
      }
else if(session.message.text.toLowerCase().contains('q3947')){session.send(`A3947`);
      }
else if(session.message.text.toLowerCase().contains('q3946')){session.send(`A3946`);
      }
else if(session.message.text.toLowerCase().contains('q3945')){session.send(`A3945`);
      }
else if(session.message.text.toLowerCase().contains('q3944')){session.send(`A3944`);
      }
else if(session.message.text.toLowerCase().contains('q3943')){session.send(`A3943`);
      }
else if(session.message.text.toLowerCase().contains('q3942')){session.send(`A3942`);
      }
else if(session.message.text.toLowerCase().contains('q3941')){session.send(`A3941`);
      }
else if(session.message.text.toLowerCase().contains('q3940')){session.send(`A3940`);
      }
else if(session.message.text.toLowerCase().contains('q3939')){session.send(`A3939`);
      }
else if(session.message.text.toLowerCase().contains('q3938')){session.send(`A3938`);
      }
else if(session.message.text.toLowerCase().contains('q3937')){session.send(`A3937`);
      }
else if(session.message.text.toLowerCase().contains('q3936')){session.send(`A3936`);
      }
else if(session.message.text.toLowerCase().contains('q3935')){session.send(`A3935`);
      }
else if(session.message.text.toLowerCase().contains('q3934')){session.send(`A3934`);
      }
else if(session.message.text.toLowerCase().contains('q3933')){session.send(`A3933`);
      }
else if(session.message.text.toLowerCase().contains('q3932')){session.send(`A3932`);
      }
else if(session.message.text.toLowerCase().contains('q3931')){session.send(`A3931`);
      }
else if(session.message.text.toLowerCase().contains('q3930')){session.send(`A3930`);
      }
else if(session.message.text.toLowerCase().contains('q3929')){session.send(`A3929`);
      }
else if(session.message.text.toLowerCase().contains('q3928')){session.send(`A3928`);
      }
else if(session.message.text.toLowerCase().contains('q3927')){session.send(`A3927`);
      }
else if(session.message.text.toLowerCase().contains('q3926')){session.send(`A3926`);
      }
else if(session.message.text.toLowerCase().contains('q3925')){session.send(`A3925`);
      }
else if(session.message.text.toLowerCase().contains('q3924')){session.send(`A3924`);
      }
else if(session.message.text.toLowerCase().contains('q3923')){session.send(`A3923`);
      }
else if(session.message.text.toLowerCase().contains('q3922')){session.send(`A3922`);
      }
else if(session.message.text.toLowerCase().contains('q3921')){session.send(`A3921`);
      }
else if(session.message.text.toLowerCase().contains('q3920')){session.send(`A3920`);
      }
else if(session.message.text.toLowerCase().contains('q3919')){session.send(`A3919`);
      }
else if(session.message.text.toLowerCase().contains('q3918')){session.send(`A3918`);
      }
else if(session.message.text.toLowerCase().contains('q3917')){session.send(`A3917`);
      }
else if(session.message.text.toLowerCase().contains('q3916')){session.send(`A3916`);
      }
else if(session.message.text.toLowerCase().contains('q3915')){session.send(`A3915`);
      }
else if(session.message.text.toLowerCase().contains('q3914')){session.send(`A3914`);
      }
else if(session.message.text.toLowerCase().contains('q3913')){session.send(`A3913`);
      }
else if(session.message.text.toLowerCase().contains('q3912')){session.send(`A3912`);
      }
else if(session.message.text.toLowerCase().contains('q3911')){session.send(`A3911`);
      }
else if(session.message.text.toLowerCase().contains('q3910')){session.send(`A3910`);
      }
else if(session.message.text.toLowerCase().contains('q3909')){session.send(`A3909`);
      }
else if(session.message.text.toLowerCase().contains('q3908')){session.send(`A3908`);
      }
else if(session.message.text.toLowerCase().contains('q3907')){session.send(`A3907`);
      }
else if(session.message.text.toLowerCase().contains('q3906')){session.send(`A3906`);
      }
else if(session.message.text.toLowerCase().contains('q3905')){session.send(`A3905`);
      }
else if(session.message.text.toLowerCase().contains('q3904')){session.send(`A3904`);
      }
else if(session.message.text.toLowerCase().contains('q3903')){session.send(`A3903`);
      }
else if(session.message.text.toLowerCase().contains('q3902')){session.send(`A3902`);
      }
else if(session.message.text.toLowerCase().contains('q3901')){session.send(`A3901`);
      }
else if(session.message.text.toLowerCase().contains('q3900')){session.send(`A3900`);
      }
else if(session.message.text.toLowerCase().contains('q3899')){session.send(`A3899`);
      }
else if(session.message.text.toLowerCase().contains('q3898')){session.send(`A3898`);
      }
else if(session.message.text.toLowerCase().contains('q3897')){session.send(`A3897`);
      }
else if(session.message.text.toLowerCase().contains('q3896')){session.send(`A3896`);
      }
else if(session.message.text.toLowerCase().contains('q3895')){session.send(`A3895`);
      }
else if(session.message.text.toLowerCase().contains('q3894')){session.send(`A3894`);
      }
else if(session.message.text.toLowerCase().contains('q3893')){session.send(`A3893`);
      }
else if(session.message.text.toLowerCase().contains('q3892')){session.send(`A3892`);
      }
else if(session.message.text.toLowerCase().contains('q3891')){session.send(`A3891`);
      }
else if(session.message.text.toLowerCase().contains('q3890')){session.send(`A3890`);
      }
else if(session.message.text.toLowerCase().contains('q3889')){session.send(`A3889`);
      }
else if(session.message.text.toLowerCase().contains('q3888')){session.send(`A3888`);
      }
else if(session.message.text.toLowerCase().contains('q3887')){session.send(`A3887`);
      }
else if(session.message.text.toLowerCase().contains('q3886')){session.send(`A3886`);
      }
else if(session.message.text.toLowerCase().contains('q3885')){session.send(`A3885`);
      }
else if(session.message.text.toLowerCase().contains('q3884')){session.send(`A3884`);
      }
else if(session.message.text.toLowerCase().contains('q3883')){session.send(`A3883`);
      }
else if(session.message.text.toLowerCase().contains('q3882')){session.send(`A3882`);
      }
else if(session.message.text.toLowerCase().contains('q3881')){session.send(`A3881`);
      }
else if(session.message.text.toLowerCase().contains('q3880')){session.send(`A3880`);
      }
else if(session.message.text.toLowerCase().contains('q3879')){session.send(`A3879`);
      }
else if(session.message.text.toLowerCase().contains('q3878')){session.send(`A3878`);
      }
else if(session.message.text.toLowerCase().contains('q3877')){session.send(`A3877`);
      }
else if(session.message.text.toLowerCase().contains('q3876')){session.send(`A3876`);
      }
else if(session.message.text.toLowerCase().contains('q3875')){session.send(`A3875`);
      }
else if(session.message.text.toLowerCase().contains('q3874')){session.send(`A3874`);
      }
else if(session.message.text.toLowerCase().contains('q3873')){session.send(`A3873`);
      }
else if(session.message.text.toLowerCase().contains('q3872')){session.send(`A3872`);
      }
else if(session.message.text.toLowerCase().contains('q3871')){session.send(`A3871`);
      }
else if(session.message.text.toLowerCase().contains('q3870')){session.send(`A3870`);
      }
else if(session.message.text.toLowerCase().contains('q3869')){session.send(`A3869`);
      }
else if(session.message.text.toLowerCase().contains('q3868')){session.send(`A3868`);
      }
else if(session.message.text.toLowerCase().contains('q3867')){session.send(`A3867`);
      }
else if(session.message.text.toLowerCase().contains('q3866')){session.send(`A3866`);
      }
else if(session.message.text.toLowerCase().contains('q3865')){session.send(`A3865`);
      }
else if(session.message.text.toLowerCase().contains('q3864')){session.send(`A3864`);
      }
else if(session.message.text.toLowerCase().contains('q3863')){session.send(`A3863`);
      }
else if(session.message.text.toLowerCase().contains('q3862')){session.send(`A3862`);
      }
else if(session.message.text.toLowerCase().contains('q3861')){session.send(`A3861`);
      }
else if(session.message.text.toLowerCase().contains('q3860')){session.send(`A3860`);
      }
else if(session.message.text.toLowerCase().contains('q3859')){session.send(`A3859`);
      }
else if(session.message.text.toLowerCase().contains('q3858')){session.send(`A3858`);
      }
else if(session.message.text.toLowerCase().contains('q3857')){session.send(`A3857`);
      }
else if(session.message.text.toLowerCase().contains('q3856')){session.send(`A3856`);
      }
else if(session.message.text.toLowerCase().contains('q3855')){session.send(`A3855`);
      }
else if(session.message.text.toLowerCase().contains('q3854')){session.send(`A3854`);
      }
else if(session.message.text.toLowerCase().contains('q3853')){session.send(`A3853`);
      }
else if(session.message.text.toLowerCase().contains('q3852')){session.send(`A3852`);
      }
else if(session.message.text.toLowerCase().contains('q3851')){session.send(`A3851`);
      }
else if(session.message.text.toLowerCase().contains('q3850')){session.send(`A3850`);
      }
else if(session.message.text.toLowerCase().contains('q3849')){session.send(`A3849`);
      }
else if(session.message.text.toLowerCase().contains('q3848')){session.send(`A3848`);
      }
else if(session.message.text.toLowerCase().contains('q3847')){session.send(`A3847`);
      }
else if(session.message.text.toLowerCase().contains('q3846')){session.send(`A3846`);
      }
else if(session.message.text.toLowerCase().contains('q3845')){session.send(`A3845`);
      }
else if(session.message.text.toLowerCase().contains('q3844')){session.send(`A3844`);
      }
else if(session.message.text.toLowerCase().contains('q3843')){session.send(`A3843`);
      }
else if(session.message.text.toLowerCase().contains('q3842')){session.send(`A3842`);
      }
else if(session.message.text.toLowerCase().contains('q3841')){session.send(`A3841`);
      }
else if(session.message.text.toLowerCase().contains('q3840')){session.send(`A3840`);
      }
else if(session.message.text.toLowerCase().contains('q3839')){session.send(`A3839`);
      }
else if(session.message.text.toLowerCase().contains('q3838')){session.send(`A3838`);
      }
else if(session.message.text.toLowerCase().contains('q3837')){session.send(`A3837`);
      }
else if(session.message.text.toLowerCase().contains('q3836')){session.send(`A3836`);
      }
else if(session.message.text.toLowerCase().contains('q3835')){session.send(`A3835`);
      }
else if(session.message.text.toLowerCase().contains('q3834')){session.send(`A3834`);
      }
else if(session.message.text.toLowerCase().contains('q3833')){session.send(`A3833`);
      }
else if(session.message.text.toLowerCase().contains('q3832')){session.send(`A3832`);
      }
else if(session.message.text.toLowerCase().contains('q3831')){session.send(`A3831`);
      }
else if(session.message.text.toLowerCase().contains('q3830')){session.send(`A3830`);
      }
else if(session.message.text.toLowerCase().contains('q3829')){session.send(`A3829`);
      }
else if(session.message.text.toLowerCase().contains('q3828')){session.send(`A3828`);
      }
else if(session.message.text.toLowerCase().contains('q3827')){session.send(`A3827`);
      }
else if(session.message.text.toLowerCase().contains('q3826')){session.send(`A3826`);
      }
else if(session.message.text.toLowerCase().contains('q3825')){session.send(`A3825`);
      }
else if(session.message.text.toLowerCase().contains('q3824')){session.send(`A3824`);
      }
else if(session.message.text.toLowerCase().contains('q3823')){session.send(`A3823`);
      }
else if(session.message.text.toLowerCase().contains('q3822')){session.send(`A3822`);
      }
else if(session.message.text.toLowerCase().contains('q3821')){session.send(`A3821`);
      }
else if(session.message.text.toLowerCase().contains('q3820')){session.send(`A3820`);
      }
else if(session.message.text.toLowerCase().contains('q3819')){session.send(`A3819`);
      }
else if(session.message.text.toLowerCase().contains('q3818')){session.send(`A3818`);
      }
else if(session.message.text.toLowerCase().contains('q3817')){session.send(`A3817`);
      }
else if(session.message.text.toLowerCase().contains('q3816')){session.send(`A3816`);
      }
else if(session.message.text.toLowerCase().contains('q3815')){session.send(`A3815`);
      }
else if(session.message.text.toLowerCase().contains('q3814')){session.send(`A3814`);
      }
else if(session.message.text.toLowerCase().contains('q3813')){session.send(`A3813`);
      }
else if(session.message.text.toLowerCase().contains('q3812')){session.send(`A3812`);
      }
else if(session.message.text.toLowerCase().contains('q3811')){session.send(`A3811`);
      }
else if(session.message.text.toLowerCase().contains('q3810')){session.send(`A3810`);
      }
else if(session.message.text.toLowerCase().contains('q3809')){session.send(`A3809`);
      }
else if(session.message.text.toLowerCase().contains('q3808')){session.send(`A3808`);
      }
else if(session.message.text.toLowerCase().contains('q3807')){session.send(`A3807`);
      }
else if(session.message.text.toLowerCase().contains('q3806')){session.send(`A3806`);
      }
else if(session.message.text.toLowerCase().contains('q3805')){session.send(`A3805`);
      }
else if(session.message.text.toLowerCase().contains('q3804')){session.send(`A3804`);
      }
else if(session.message.text.toLowerCase().contains('q3803')){session.send(`A3803`);
      }
else if(session.message.text.toLowerCase().contains('q3802')){session.send(`A3802`);
      }
else if(session.message.text.toLowerCase().contains('q3801')){session.send(`A3801`);
      }
else if(session.message.text.toLowerCase().contains('q3800')){session.send(`A3800`);
      }
else if(session.message.text.toLowerCase().contains('q3799')){session.send(`A3799`);
      }
else if(session.message.text.toLowerCase().contains('q3798')){session.send(`A3798`);
      }
else if(session.message.text.toLowerCase().contains('q3797')){session.send(`A3797`);
      }
else if(session.message.text.toLowerCase().contains('q3796')){session.send(`A3796`);
      }
else if(session.message.text.toLowerCase().contains('q3795')){session.send(`A3795`);
      }
else if(session.message.text.toLowerCase().contains('q3794')){session.send(`A3794`);
      }
else if(session.message.text.toLowerCase().contains('q3793')){session.send(`A3793`);
      }
else if(session.message.text.toLowerCase().contains('q3792')){session.send(`A3792`);
      }
else if(session.message.text.toLowerCase().contains('q3791')){session.send(`A3791`);
      }
else if(session.message.text.toLowerCase().contains('q3790')){session.send(`A3790`);
      }
else if(session.message.text.toLowerCase().contains('q3789')){session.send(`A3789`);
      }
else if(session.message.text.toLowerCase().contains('q3788')){session.send(`A3788`);
      }
else if(session.message.text.toLowerCase().contains('q3787')){session.send(`A3787`);
      }
else if(session.message.text.toLowerCase().contains('q3786')){session.send(`A3786`);
      }
else if(session.message.text.toLowerCase().contains('q3785')){session.send(`A3785`);
      }
else if(session.message.text.toLowerCase().contains('q3784')){session.send(`A3784`);
      }
else if(session.message.text.toLowerCase().contains('q3783')){session.send(`A3783`);
      }
else if(session.message.text.toLowerCase().contains('q3782')){session.send(`A3782`);
      }
else if(session.message.text.toLowerCase().contains('q3781')){session.send(`A3781`);
      }
else if(session.message.text.toLowerCase().contains('q3780')){session.send(`A3780`);
      }
else if(session.message.text.toLowerCase().contains('q3779')){session.send(`A3779`);
      }
else if(session.message.text.toLowerCase().contains('q3778')){session.send(`A3778`);
      }
else if(session.message.text.toLowerCase().contains('q3777')){session.send(`A3777`);
      }
else if(session.message.text.toLowerCase().contains('q3776')){session.send(`A3776`);
      }
else if(session.message.text.toLowerCase().contains('q3775')){session.send(`A3775`);
      }
else if(session.message.text.toLowerCase().contains('q3774')){session.send(`A3774`);
      }
else if(session.message.text.toLowerCase().contains('q3773')){session.send(`A3773`);
      }
else if(session.message.text.toLowerCase().contains('q3772')){session.send(`A3772`);
      }
else if(session.message.text.toLowerCase().contains('q3771')){session.send(`A3771`);
      }
else if(session.message.text.toLowerCase().contains('q3770')){session.send(`A3770`);
      }
else if(session.message.text.toLowerCase().contains('q3769')){session.send(`A3769`);
      }
else if(session.message.text.toLowerCase().contains('q3768')){session.send(`A3768`);
      }
else if(session.message.text.toLowerCase().contains('q3767')){session.send(`A3767`);
      }
else if(session.message.text.toLowerCase().contains('q3766')){session.send(`A3766`);
      }
else if(session.message.text.toLowerCase().contains('q3765')){session.send(`A3765`);
      }
else if(session.message.text.toLowerCase().contains('q3764')){session.send(`A3764`);
      }
else if(session.message.text.toLowerCase().contains('q3763')){session.send(`A3763`);
      }
else if(session.message.text.toLowerCase().contains('q3762')){session.send(`A3762`);
      }
else if(session.message.text.toLowerCase().contains('q3761')){session.send(`A3761`);
      }
else if(session.message.text.toLowerCase().contains('q3760')){session.send(`A3760`);
      }
else if(session.message.text.toLowerCase().contains('q3759')){session.send(`A3759`);
      }
else if(session.message.text.toLowerCase().contains('q3758')){session.send(`A3758`);
      }
else if(session.message.text.toLowerCase().contains('q3757')){session.send(`A3757`);
      }
else if(session.message.text.toLowerCase().contains('q3756')){session.send(`A3756`);
      }
else if(session.message.text.toLowerCase().contains('q3755')){session.send(`A3755`);
      }
else if(session.message.text.toLowerCase().contains('q3754')){session.send(`A3754`);
      }
else if(session.message.text.toLowerCase().contains('q3753')){session.send(`A3753`);
      }
else if(session.message.text.toLowerCase().contains('q3752')){session.send(`A3752`);
      }
else if(session.message.text.toLowerCase().contains('q3751')){session.send(`A3751`);
      }
else if(session.message.text.toLowerCase().contains('q3750')){session.send(`A3750`);
      }
else if(session.message.text.toLowerCase().contains('q3749')){session.send(`A3749`);
      }
else if(session.message.text.toLowerCase().contains('q3748')){session.send(`A3748`);
      }
else if(session.message.text.toLowerCase().contains('q3747')){session.send(`A3747`);
      }
else if(session.message.text.toLowerCase().contains('q3746')){session.send(`A3746`);
      }
else if(session.message.text.toLowerCase().contains('q3745')){session.send(`A3745`);
      }
else if(session.message.text.toLowerCase().contains('q3744')){session.send(`A3744`);
      }
else if(session.message.text.toLowerCase().contains('q3743')){session.send(`A3743`);
      }
else if(session.message.text.toLowerCase().contains('q3742')){session.send(`A3742`);
      }
else if(session.message.text.toLowerCase().contains('q3741')){session.send(`A3741`);
      }
else if(session.message.text.toLowerCase().contains('q3740')){session.send(`A3740`);
      }
else if(session.message.text.toLowerCase().contains('q3739')){session.send(`A3739`);
      }
else if(session.message.text.toLowerCase().contains('q3738')){session.send(`A3738`);
      }
else if(session.message.text.toLowerCase().contains('q3737')){session.send(`A3737`);
      }
else if(session.message.text.toLowerCase().contains('q3736')){session.send(`A3736`);
      }
else if(session.message.text.toLowerCase().contains('q3735')){session.send(`A3735`);
      }
else if(session.message.text.toLowerCase().contains('q3734')){session.send(`A3734`);
      }
else if(session.message.text.toLowerCase().contains('q3733')){session.send(`A3733`);
      }
else if(session.message.text.toLowerCase().contains('q3732')){session.send(`A3732`);
      }
else if(session.message.text.toLowerCase().contains('q3731')){session.send(`A3731`);
      }
else if(session.message.text.toLowerCase().contains('q3730')){session.send(`A3730`);
      }
else if(session.message.text.toLowerCase().contains('q3729')){session.send(`A3729`);
      }
else if(session.message.text.toLowerCase().contains('q3728')){session.send(`A3728`);
      }
else if(session.message.text.toLowerCase().contains('q3727')){session.send(`A3727`);
      }
else if(session.message.text.toLowerCase().contains('q3726')){session.send(`A3726`);
      }
else if(session.message.text.toLowerCase().contains('q3725')){session.send(`A3725`);
      }
else if(session.message.text.toLowerCase().contains('q3724')){session.send(`A3724`);
      }
else if(session.message.text.toLowerCase().contains('q3723')){session.send(`A3723`);
      }
else if(session.message.text.toLowerCase().contains('q3722')){session.send(`A3722`);
      }
else if(session.message.text.toLowerCase().contains('q3721')){session.send(`A3721`);
      }
else if(session.message.text.toLowerCase().contains('q3720')){session.send(`A3720`);
      }
else if(session.message.text.toLowerCase().contains('q3719')){session.send(`A3719`);
      }
else if(session.message.text.toLowerCase().contains('q3718')){session.send(`A3718`);
      }
else if(session.message.text.toLowerCase().contains('q3717')){session.send(`A3717`);
      }
else if(session.message.text.toLowerCase().contains('q3716')){session.send(`A3716`);
      }
else if(session.message.text.toLowerCase().contains('q3715')){session.send(`A3715`);
      }
else if(session.message.text.toLowerCase().contains('q3714')){session.send(`A3714`);
      }
else if(session.message.text.toLowerCase().contains('q3713')){session.send(`A3713`);
      }
else if(session.message.text.toLowerCase().contains('q3712')){session.send(`A3712`);
      }
else if(session.message.text.toLowerCase().contains('q3711')){session.send(`A3711`);
      }
else if(session.message.text.toLowerCase().contains('q3710')){session.send(`A3710`);
      }
else if(session.message.text.toLowerCase().contains('q3709')){session.send(`A3709`);
      }
else if(session.message.text.toLowerCase().contains('q3708')){session.send(`A3708`);
      }
else if(session.message.text.toLowerCase().contains('q3707')){session.send(`A3707`);
      }
else if(session.message.text.toLowerCase().contains('q3706')){session.send(`A3706`);
      }
else if(session.message.text.toLowerCase().contains('q3705')){session.send(`A3705`);
      }
else if(session.message.text.toLowerCase().contains('q3704')){session.send(`A3704`);
      }
else if(session.message.text.toLowerCase().contains('q3703')){session.send(`A3703`);
      }
else if(session.message.text.toLowerCase().contains('q3702')){session.send(`A3702`);
      }
else if(session.message.text.toLowerCase().contains('q3701')){session.send(`A3701`);
      }
else if(session.message.text.toLowerCase().contains('q3700')){session.send(`A3700`);
      }
else if(session.message.text.toLowerCase().contains('q3699')){session.send(`A3699`);
      }
else if(session.message.text.toLowerCase().contains('q3698')){session.send(`A3698`);
      }
else if(session.message.text.toLowerCase().contains('q3697')){session.send(`A3697`);
      }
else if(session.message.text.toLowerCase().contains('q3696')){session.send(`A3696`);
      }
else if(session.message.text.toLowerCase().contains('q3695')){session.send(`A3695`);
      }
else if(session.message.text.toLowerCase().contains('q3694')){session.send(`A3694`);
      }
else if(session.message.text.toLowerCase().contains('q3693')){session.send(`A3693`);
      }
else if(session.message.text.toLowerCase().contains('q3692')){session.send(`A3692`);
      }
else if(session.message.text.toLowerCase().contains('q3691')){session.send(`A3691`);
      }
else if(session.message.text.toLowerCase().contains('q3690')){session.send(`A3690`);
      }
else if(session.message.text.toLowerCase().contains('q3689')){session.send(`A3689`);
      }
else if(session.message.text.toLowerCase().contains('q3688')){session.send(`A3688`);
      }
else if(session.message.text.toLowerCase().contains('q3687')){session.send(`A3687`);
      }
else if(session.message.text.toLowerCase().contains('q3686')){session.send(`A3686`);
      }
else if(session.message.text.toLowerCase().contains('q3685')){session.send(`A3685`);
      }
else if(session.message.text.toLowerCase().contains('q3684')){session.send(`A3684`);
      }
else if(session.message.text.toLowerCase().contains('q3683')){session.send(`A3683`);
      }
else if(session.message.text.toLowerCase().contains('q3682')){session.send(`A3682`);
      }
else if(session.message.text.toLowerCase().contains('q3681')){session.send(`A3681`);
      }
else if(session.message.text.toLowerCase().contains('q3680')){session.send(`A3680`);
      }
else if(session.message.text.toLowerCase().contains('q3679')){session.send(`A3679`);
      }
else if(session.message.text.toLowerCase().contains('q3678')){session.send(`A3678`);
      }
else if(session.message.text.toLowerCase().contains('q3677')){session.send(`A3677`);
      }
else if(session.message.text.toLowerCase().contains('q3676')){session.send(`A3676`);
      }
else if(session.message.text.toLowerCase().contains('q3675')){session.send(`A3675`);
      }
else if(session.message.text.toLowerCase().contains('q3674')){session.send(`A3674`);
      }
else if(session.message.text.toLowerCase().contains('q3673')){session.send(`A3673`);
      }
else if(session.message.text.toLowerCase().contains('q3672')){session.send(`A3672`);
      }
else if(session.message.text.toLowerCase().contains('q3671')){session.send(`A3671`);
      }
else if(session.message.text.toLowerCase().contains('q3670')){session.send(`A3670`);
      }
else if(session.message.text.toLowerCase().contains('q3669')){session.send(`A3669`);
      }
else if(session.message.text.toLowerCase().contains('q3668')){session.send(`A3668`);
      }
else if(session.message.text.toLowerCase().contains('q3667')){session.send(`A3667`);
      }
else if(session.message.text.toLowerCase().contains('q3666')){session.send(`A3666`);
      }
else if(session.message.text.toLowerCase().contains('q3665')){session.send(`A3665`);
      }
else if(session.message.text.toLowerCase().contains('q3664')){session.send(`A3664`);
      }
else if(session.message.text.toLowerCase().contains('q3663')){session.send(`A3663`);
      }
else if(session.message.text.toLowerCase().contains('q3662')){session.send(`A3662`);
      }
else if(session.message.text.toLowerCase().contains('q3661')){session.send(`A3661`);
      }
else if(session.message.text.toLowerCase().contains('q3660')){session.send(`A3660`);
      }
else if(session.message.text.toLowerCase().contains('q3659')){session.send(`A3659`);
      }
else if(session.message.text.toLowerCase().contains('q3658')){session.send(`A3658`);
      }
else if(session.message.text.toLowerCase().contains('q3657')){session.send(`A3657`);
      }
else if(session.message.text.toLowerCase().contains('q3656')){session.send(`A3656`);
      }
else if(session.message.text.toLowerCase().contains('q3655')){session.send(`A3655`);
      }
else if(session.message.text.toLowerCase().contains('q3654')){session.send(`A3654`);
      }
else if(session.message.text.toLowerCase().contains('q3653')){session.send(`A3653`);
      }
else if(session.message.text.toLowerCase().contains('q3652')){session.send(`A3652`);
      }
else if(session.message.text.toLowerCase().contains('q3651')){session.send(`A3651`);
      }
else if(session.message.text.toLowerCase().contains('q3650')){session.send(`A3650`);
      }
else if(session.message.text.toLowerCase().contains('q3649')){session.send(`A3649`);
      }
else if(session.message.text.toLowerCase().contains('q3648')){session.send(`A3648`);
      }
else if(session.message.text.toLowerCase().contains('q3647')){session.send(`A3647`);
      }
else if(session.message.text.toLowerCase().contains('q3646')){session.send(`A3646`);
      }
else if(session.message.text.toLowerCase().contains('q3645')){session.send(`A3645`);
      }
else if(session.message.text.toLowerCase().contains('q3644')){session.send(`A3644`);
      }
else if(session.message.text.toLowerCase().contains('q3643')){session.send(`A3643`);
      }
else if(session.message.text.toLowerCase().contains('q3642')){session.send(`A3642`);
      }
else if(session.message.text.toLowerCase().contains('q3641')){session.send(`A3641`);
      }
else if(session.message.text.toLowerCase().contains('q3640')){session.send(`A3640`);
      }
else if(session.message.text.toLowerCase().contains('q3639')){session.send(`A3639`);
      }
else if(session.message.text.toLowerCase().contains('q3638')){session.send(`A3638`);
      }
else if(session.message.text.toLowerCase().contains('q3637')){session.send(`A3637`);
      }
else if(session.message.text.toLowerCase().contains('q3636')){session.send(`A3636`);
      }
else if(session.message.text.toLowerCase().contains('q3635')){session.send(`A3635`);
      }
else if(session.message.text.toLowerCase().contains('q3634')){session.send(`A3634`);
      }
else if(session.message.text.toLowerCase().contains('q3633')){session.send(`A3633`);
      }
else if(session.message.text.toLowerCase().contains('q3632')){session.send(`A3632`);
      }
else if(session.message.text.toLowerCase().contains('q3631')){session.send(`A3631`);
      }
else if(session.message.text.toLowerCase().contains('q3630')){session.send(`A3630`);
      }
else if(session.message.text.toLowerCase().contains('q3629')){session.send(`A3629`);
      }
else if(session.message.text.toLowerCase().contains('q3628')){session.send(`A3628`);
      }
else if(session.message.text.toLowerCase().contains('q3627')){session.send(`A3627`);
      }
else if(session.message.text.toLowerCase().contains('q3626')){session.send(`A3626`);
      }
else if(session.message.text.toLowerCase().contains('q3625')){session.send(`A3625`);
      }
else if(session.message.text.toLowerCase().contains('q3624')){session.send(`A3624`);
      }
else if(session.message.text.toLowerCase().contains('q3623')){session.send(`A3623`);
      }
else if(session.message.text.toLowerCase().contains('q3622')){session.send(`A3622`);
      }
else if(session.message.text.toLowerCase().contains('q3621')){session.send(`A3621`);
      }
else if(session.message.text.toLowerCase().contains('q3620')){session.send(`A3620`);
      }
else if(session.message.text.toLowerCase().contains('q3619')){session.send(`A3619`);
      }
else if(session.message.text.toLowerCase().contains('q3618')){session.send(`A3618`);
      }
else if(session.message.text.toLowerCase().contains('q3617')){session.send(`A3617`);
      }
else if(session.message.text.toLowerCase().contains('q3616')){session.send(`A3616`);
      }
else if(session.message.text.toLowerCase().contains('q3615')){session.send(`A3615`);
      }
else if(session.message.text.toLowerCase().contains('q3614')){session.send(`A3614`);
      }
else if(session.message.text.toLowerCase().contains('q3613')){session.send(`A3613`);
      }
else if(session.message.text.toLowerCase().contains('q3612')){session.send(`A3612`);
      }
else if(session.message.text.toLowerCase().contains('q3611')){session.send(`A3611`);
      }
else if(session.message.text.toLowerCase().contains('q3610')){session.send(`A3610`);
      }
else if(session.message.text.toLowerCase().contains('q3609')){session.send(`A3609`);
      }
else if(session.message.text.toLowerCase().contains('q3608')){session.send(`A3608`);
      }
else if(session.message.text.toLowerCase().contains('q3607')){session.send(`A3607`);
      }
else if(session.message.text.toLowerCase().contains('q3606')){session.send(`A3606`);
      }
else if(session.message.text.toLowerCase().contains('q3605')){session.send(`A3605`);
      }
else if(session.message.text.toLowerCase().contains('q3604')){session.send(`A3604`);
      }
else if(session.message.text.toLowerCase().contains('q3603')){session.send(`A3603`);
      }
else if(session.message.text.toLowerCase().contains('q3602')){session.send(`A3602`);
      }
else if(session.message.text.toLowerCase().contains('q3601')){session.send(`A3601`);
      }
else if(session.message.text.toLowerCase().contains('q3600')){session.send(`A3600`);
      }
else if(session.message.text.toLowerCase().contains('q3599')){session.send(`A3599`);
      }
else if(session.message.text.toLowerCase().contains('q3598')){session.send(`A3598`);
      }
else if(session.message.text.toLowerCase().contains('q3597')){session.send(`A3597`);
      }
else if(session.message.text.toLowerCase().contains('q3596')){session.send(`A3596`);
      }
else if(session.message.text.toLowerCase().contains('q3595')){session.send(`A3595`);
      }
else if(session.message.text.toLowerCase().contains('q3594')){session.send(`A3594`);
      }
else if(session.message.text.toLowerCase().contains('q3593')){session.send(`A3593`);
      }
else if(session.message.text.toLowerCase().contains('q3592')){session.send(`A3592`);
      }
else if(session.message.text.toLowerCase().contains('q3591')){session.send(`A3591`);
      }
else if(session.message.text.toLowerCase().contains('q3590')){session.send(`A3590`);
      }
else if(session.message.text.toLowerCase().contains('q3589')){session.send(`A3589`);
      }
else if(session.message.text.toLowerCase().contains('q3588')){session.send(`A3588`);
      }
else if(session.message.text.toLowerCase().contains('q3587')){session.send(`A3587`);
      }
else if(session.message.text.toLowerCase().contains('q3586')){session.send(`A3586`);
      }
else if(session.message.text.toLowerCase().contains('q3585')){session.send(`A3585`);
      }
else if(session.message.text.toLowerCase().contains('q3584')){session.send(`A3584`);
      }
else if(session.message.text.toLowerCase().contains('q3583')){session.send(`A3583`);
      }
else if(session.message.text.toLowerCase().contains('q3582')){session.send(`A3582`);
      }
else if(session.message.text.toLowerCase().contains('q3581')){session.send(`A3581`);
      }
else if(session.message.text.toLowerCase().contains('q3580')){session.send(`A3580`);
      }
else if(session.message.text.toLowerCase().contains('q3579')){session.send(`A3579`);
      }
else if(session.message.text.toLowerCase().contains('q3578')){session.send(`A3578`);
      }
else if(session.message.text.toLowerCase().contains('q3577')){session.send(`A3577`);
      }
else if(session.message.text.toLowerCase().contains('q3576')){session.send(`A3576`);
      }
else if(session.message.text.toLowerCase().contains('q3575')){session.send(`A3575`);
      }
else if(session.message.text.toLowerCase().contains('q3574')){session.send(`A3574`);
      }
else if(session.message.text.toLowerCase().contains('q3573')){session.send(`A3573`);
      }
else if(session.message.text.toLowerCase().contains('q3572')){session.send(`A3572`);
      }
else if(session.message.text.toLowerCase().contains('q3571')){session.send(`A3571`);
      }
else if(session.message.text.toLowerCase().contains('q3570')){session.send(`A3570`);
      }
else if(session.message.text.toLowerCase().contains('q3569')){session.send(`A3569`);
      }
else if(session.message.text.toLowerCase().contains('q3568')){session.send(`A3568`);
      }
else if(session.message.text.toLowerCase().contains('q3567')){session.send(`A3567`);
      }
else if(session.message.text.toLowerCase().contains('q3566')){session.send(`A3566`);
      }
else if(session.message.text.toLowerCase().contains('q3565')){session.send(`A3565`);
      }
else if(session.message.text.toLowerCase().contains('q3564')){session.send(`A3564`);
      }
else if(session.message.text.toLowerCase().contains('q3563')){session.send(`A3563`);
      }
else if(session.message.text.toLowerCase().contains('q3562')){session.send(`A3562`);
      }
else if(session.message.text.toLowerCase().contains('q3561')){session.send(`A3561`);
      }
else if(session.message.text.toLowerCase().contains('q3560')){session.send(`A3560`);
      }
else if(session.message.text.toLowerCase().contains('q3559')){session.send(`A3559`);
      }
else if(session.message.text.toLowerCase().contains('q3558')){session.send(`A3558`);
      }
else if(session.message.text.toLowerCase().contains('q3557')){session.send(`A3557`);
      }
else if(session.message.text.toLowerCase().contains('q3556')){session.send(`A3556`);
      }
else if(session.message.text.toLowerCase().contains('q3555')){session.send(`A3555`);
      }
else if(session.message.text.toLowerCase().contains('q3554')){session.send(`A3554`);
      }
else if(session.message.text.toLowerCase().contains('q3553')){session.send(`A3553`);
      }
else if(session.message.text.toLowerCase().contains('q3552')){session.send(`A3552`);
      }
else if(session.message.text.toLowerCase().contains('q3551')){session.send(`A3551`);
      }
else if(session.message.text.toLowerCase().contains('q3550')){session.send(`A3550`);
      }
else if(session.message.text.toLowerCase().contains('q3549')){session.send(`A3549`);
      }
else if(session.message.text.toLowerCase().contains('q3548')){session.send(`A3548`);
      }
else if(session.message.text.toLowerCase().contains('q3547')){session.send(`A3547`);
      }
else if(session.message.text.toLowerCase().contains('q3546')){session.send(`A3546`);
      }
else if(session.message.text.toLowerCase().contains('q3545')){session.send(`A3545`);
      }
else if(session.message.text.toLowerCase().contains('q3544')){session.send(`A3544`);
      }
else if(session.message.text.toLowerCase().contains('q3543')){session.send(`A3543`);
      }
else if(session.message.text.toLowerCase().contains('q3542')){session.send(`A3542`);
      }
else if(session.message.text.toLowerCase().contains('q3541')){session.send(`A3541`);
      }
else if(session.message.text.toLowerCase().contains('q3540')){session.send(`A3540`);
      }
else if(session.message.text.toLowerCase().contains('q3539')){session.send(`A3539`);
      }
else if(session.message.text.toLowerCase().contains('q3538')){session.send(`A3538`);
      }
else if(session.message.text.toLowerCase().contains('q3537')){session.send(`A3537`);
      }
else if(session.message.text.toLowerCase().contains('q3536')){session.send(`A3536`);
      }
else if(session.message.text.toLowerCase().contains('q3535')){session.send(`A3535`);
      }
else if(session.message.text.toLowerCase().contains('q3534')){session.send(`A3534`);
      }
else if(session.message.text.toLowerCase().contains('q3533')){session.send(`A3533`);
      }
else if(session.message.text.toLowerCase().contains('q3532')){session.send(`A3532`);
      }
else if(session.message.text.toLowerCase().contains('q3531')){session.send(`A3531`);
      }
else if(session.message.text.toLowerCase().contains('q3530')){session.send(`A3530`);
      }
else if(session.message.text.toLowerCase().contains('q3529')){session.send(`A3529`);
      }
else if(session.message.text.toLowerCase().contains('q3528')){session.send(`A3528`);
      }
else if(session.message.text.toLowerCase().contains('q3527')){session.send(`A3527`);
      }
else if(session.message.text.toLowerCase().contains('q3526')){session.send(`A3526`);
      }
else if(session.message.text.toLowerCase().contains('q3525')){session.send(`A3525`);
      }
else if(session.message.text.toLowerCase().contains('q3524')){session.send(`A3524`);
      }
else if(session.message.text.toLowerCase().contains('q3523')){session.send(`A3523`);
      }
else if(session.message.text.toLowerCase().contains('q3522')){session.send(`A3522`);
      }
else if(session.message.text.toLowerCase().contains('q3521')){session.send(`A3521`);
      }
else if(session.message.text.toLowerCase().contains('q3520')){session.send(`A3520`);
      }
else if(session.message.text.toLowerCase().contains('q3519')){session.send(`A3519`);
      }
else if(session.message.text.toLowerCase().contains('q3518')){session.send(`A3518`);
      }
else if(session.message.text.toLowerCase().contains('q3517')){session.send(`A3517`);
      }
else if(session.message.text.toLowerCase().contains('q3516')){session.send(`A3516`);
      }
else if(session.message.text.toLowerCase().contains('q3515')){session.send(`A3515`);
      }
else if(session.message.text.toLowerCase().contains('q3514')){session.send(`A3514`);
      }
else if(session.message.text.toLowerCase().contains('q3513')){session.send(`A3513`);
      }
else if(session.message.text.toLowerCase().contains('q3512')){session.send(`A3512`);
      }
else if(session.message.text.toLowerCase().contains('q3511')){session.send(`A3511`);
      }
else if(session.message.text.toLowerCase().contains('q3510')){session.send(`A3510`);
      }
else if(session.message.text.toLowerCase().contains('q3509')){session.send(`A3509`);
      }
else if(session.message.text.toLowerCase().contains('q3508')){session.send(`A3508`);
      }
else if(session.message.text.toLowerCase().contains('q3507')){session.send(`A3507`);
      }
else if(session.message.text.toLowerCase().contains('q3506')){session.send(`A3506`);
      }
else if(session.message.text.toLowerCase().contains('q3505')){session.send(`A3505`);
      }
else if(session.message.text.toLowerCase().contains('q3504')){session.send(`A3504`);
      }
else if(session.message.text.toLowerCase().contains('q3503')){session.send(`A3503`);
      }
else if(session.message.text.toLowerCase().contains('q3502')){session.send(`A3502`);
      }
else if(session.message.text.toLowerCase().contains('q3501')){session.send(`A3501`);
      }
else if(session.message.text.toLowerCase().contains('q3500')){session.send(`A3500`);
      }
else if(session.message.text.toLowerCase().contains('q3499')){session.send(`A3499`);
      }
else if(session.message.text.toLowerCase().contains('q3498')){session.send(`A3498`);
      }
else if(session.message.text.toLowerCase().contains('q3497')){session.send(`A3497`);
      }
else if(session.message.text.toLowerCase().contains('q3496')){session.send(`A3496`);
      }
else if(session.message.text.toLowerCase().contains('q3495')){session.send(`A3495`);
      }
else if(session.message.text.toLowerCase().contains('q3494')){session.send(`A3494`);
      }
else if(session.message.text.toLowerCase().contains('q3493')){session.send(`A3493`);
      }
else if(session.message.text.toLowerCase().contains('q3492')){session.send(`A3492`);
      }
else if(session.message.text.toLowerCase().contains('q3491')){session.send(`A3491`);
      }
else if(session.message.text.toLowerCase().contains('q3490')){session.send(`A3490`);
      }
else if(session.message.text.toLowerCase().contains('q3489')){session.send(`A3489`);
      }
else if(session.message.text.toLowerCase().contains('q3488')){session.send(`A3488`);
      }
else if(session.message.text.toLowerCase().contains('q3487')){session.send(`A3487`);
      }
else if(session.message.text.toLowerCase().contains('q3486')){session.send(`A3486`);
      }
else if(session.message.text.toLowerCase().contains('q3485')){session.send(`A3485`);
      }
else if(session.message.text.toLowerCase().contains('q3484')){session.send(`A3484`);
      }
else if(session.message.text.toLowerCase().contains('q3483')){session.send(`A3483`);
      }
else if(session.message.text.toLowerCase().contains('q3482')){session.send(`A3482`);
      }
else if(session.message.text.toLowerCase().contains('q3481')){session.send(`A3481`);
      }
else if(session.message.text.toLowerCase().contains('q3480')){session.send(`A3480`);
      }
else if(session.message.text.toLowerCase().contains('q3479')){session.send(`A3479`);
      }
else if(session.message.text.toLowerCase().contains('q3478')){session.send(`A3478`);
      }
else if(session.message.text.toLowerCase().contains('q3477')){session.send(`A3477`);
      }
else if(session.message.text.toLowerCase().contains('q3476')){session.send(`A3476`);
      }
else if(session.message.text.toLowerCase().contains('q3475')){session.send(`A3475`);
      }
else if(session.message.text.toLowerCase().contains('q3474')){session.send(`A3474`);
      }
else if(session.message.text.toLowerCase().contains('q3473')){session.send(`A3473`);
      }
else if(session.message.text.toLowerCase().contains('q3472')){session.send(`A3472`);
      }
else if(session.message.text.toLowerCase().contains('q3471')){session.send(`A3471`);
      }
else if(session.message.text.toLowerCase().contains('q3470')){session.send(`A3470`);
      }
else if(session.message.text.toLowerCase().contains('q3469')){session.send(`A3469`);
      }
else if(session.message.text.toLowerCase().contains('q3468')){session.send(`A3468`);
      }
else if(session.message.text.toLowerCase().contains('q3467')){session.send(`A3467`);
      }
else if(session.message.text.toLowerCase().contains('q3466')){session.send(`A3466`);
      }
else if(session.message.text.toLowerCase().contains('q3465')){session.send(`A3465`);
      }
else if(session.message.text.toLowerCase().contains('q3464')){session.send(`A3464`);
      }
else if(session.message.text.toLowerCase().contains('q3463')){session.send(`A3463`);
      }
else if(session.message.text.toLowerCase().contains('q3462')){session.send(`A3462`);
      }
else if(session.message.text.toLowerCase().contains('q3461')){session.send(`A3461`);
      }
else if(session.message.text.toLowerCase().contains('q3460')){session.send(`A3460`);
      }
else if(session.message.text.toLowerCase().contains('q3459')){session.send(`A3459`);
      }
else if(session.message.text.toLowerCase().contains('q3458')){session.send(`A3458`);
      }
else if(session.message.text.toLowerCase().contains('q3457')){session.send(`A3457`);
      }
else if(session.message.text.toLowerCase().contains('q3456')){session.send(`A3456`);
      }
else if(session.message.text.toLowerCase().contains('q3455')){session.send(`A3455`);
      }
else if(session.message.text.toLowerCase().contains('q3454')){session.send(`A3454`);
      }
else if(session.message.text.toLowerCase().contains('q3453')){session.send(`A3453`);
      }
else if(session.message.text.toLowerCase().contains('q3452')){session.send(`A3452`);
      }
else if(session.message.text.toLowerCase().contains('q3451')){session.send(`A3451`);
      }
else if(session.message.text.toLowerCase().contains('q3450')){session.send(`A3450`);
      }
else if(session.message.text.toLowerCase().contains('q3449')){session.send(`A3449`);
      }
else if(session.message.text.toLowerCase().contains('q3448')){session.send(`A3448`);
      }
else if(session.message.text.toLowerCase().contains('q3447')){session.send(`A3447`);
      }
else if(session.message.text.toLowerCase().contains('q3446')){session.send(`A3446`);
      }
else if(session.message.text.toLowerCase().contains('q3445')){session.send(`A3445`);
      }
else if(session.message.text.toLowerCase().contains('q3444')){session.send(`A3444`);
      }
else if(session.message.text.toLowerCase().contains('q3443')){session.send(`A3443`);
      }
else if(session.message.text.toLowerCase().contains('q3442')){session.send(`A3442`);
      }
else if(session.message.text.toLowerCase().contains('q3441')){session.send(`A3441`);
      }
else if(session.message.text.toLowerCase().contains('q3440')){session.send(`A3440`);
      }
else if(session.message.text.toLowerCase().contains('q3439')){session.send(`A3439`);
      }
else if(session.message.text.toLowerCase().contains('q3438')){session.send(`A3438`);
      }
else if(session.message.text.toLowerCase().contains('q3437')){session.send(`A3437`);
      }
else if(session.message.text.toLowerCase().contains('q3436')){session.send(`A3436`);
      }
else if(session.message.text.toLowerCase().contains('q3435')){session.send(`A3435`);
      }
else if(session.message.text.toLowerCase().contains('q3434')){session.send(`A3434`);
      }
else if(session.message.text.toLowerCase().contains('q3433')){session.send(`A3433`);
      }
else if(session.message.text.toLowerCase().contains('q3432')){session.send(`A3432`);
      }
else if(session.message.text.toLowerCase().contains('q3431')){session.send(`A3431`);
      }
else if(session.message.text.toLowerCase().contains('q3430')){session.send(`A3430`);
      }
else if(session.message.text.toLowerCase().contains('q3429')){session.send(`A3429`);
      }
else if(session.message.text.toLowerCase().contains('q3428')){session.send(`A3428`);
      }
else if(session.message.text.toLowerCase().contains('q3427')){session.send(`A3427`);
      }
else if(session.message.text.toLowerCase().contains('q3426')){session.send(`A3426`);
      }
else if(session.message.text.toLowerCase().contains('q3425')){session.send(`A3425`);
      }
else if(session.message.text.toLowerCase().contains('q3424')){session.send(`A3424`);
      }
else if(session.message.text.toLowerCase().contains('q3423')){session.send(`A3423`);
      }
else if(session.message.text.toLowerCase().contains('q3422')){session.send(`A3422`);
      }
else if(session.message.text.toLowerCase().contains('q3421')){session.send(`A3421`);
      }
else if(session.message.text.toLowerCase().contains('q3420')){session.send(`A3420`);
      }
else if(session.message.text.toLowerCase().contains('q3419')){session.send(`A3419`);
      }
else if(session.message.text.toLowerCase().contains('q3418')){session.send(`A3418`);
      }
else if(session.message.text.toLowerCase().contains('q3417')){session.send(`A3417`);
      }
else if(session.message.text.toLowerCase().contains('q3416')){session.send(`A3416`);
      }
else if(session.message.text.toLowerCase().contains('q3415')){session.send(`A3415`);
      }
else if(session.message.text.toLowerCase().contains('q3414')){session.send(`A3414`);
      }
else if(session.message.text.toLowerCase().contains('q3413')){session.send(`A3413`);
      }
else if(session.message.text.toLowerCase().contains('q3412')){session.send(`A3412`);
      }
else if(session.message.text.toLowerCase().contains('q3411')){session.send(`A3411`);
      }
else if(session.message.text.toLowerCase().contains('q3410')){session.send(`A3410`);
      }
else if(session.message.text.toLowerCase().contains('q3409')){session.send(`A3409`);
      }
else if(session.message.text.toLowerCase().contains('q3408')){session.send(`A3408`);
      }
else if(session.message.text.toLowerCase().contains('q3407')){session.send(`A3407`);
      }
else if(session.message.text.toLowerCase().contains('q3406')){session.send(`A3406`);
      }
else if(session.message.text.toLowerCase().contains('q3405')){session.send(`A3405`);
      }
else if(session.message.text.toLowerCase().contains('q3404')){session.send(`A3404`);
      }
else if(session.message.text.toLowerCase().contains('q3403')){session.send(`A3403`);
      }
else if(session.message.text.toLowerCase().contains('q3402')){session.send(`A3402`);
      }
else if(session.message.text.toLowerCase().contains('q3401')){session.send(`A3401`);
      }
else if(session.message.text.toLowerCase().contains('q3400')){session.send(`A3400`);
      }
else if(session.message.text.toLowerCase().contains('q3399')){session.send(`A3399`);
      }
else if(session.message.text.toLowerCase().contains('q3398')){session.send(`A3398`);
      }
else if(session.message.text.toLowerCase().contains('q3397')){session.send(`A3397`);
      }
else if(session.message.text.toLowerCase().contains('q3396')){session.send(`A3396`);
      }
else if(session.message.text.toLowerCase().contains('q3395')){session.send(`A3395`);
      }
else if(session.message.text.toLowerCase().contains('q3394')){session.send(`A3394`);
      }
else if(session.message.text.toLowerCase().contains('q3393')){session.send(`A3393`);
      }
else if(session.message.text.toLowerCase().contains('q3392')){session.send(`A3392`);
      }
else if(session.message.text.toLowerCase().contains('q3391')){session.send(`A3391`);
      }
else if(session.message.text.toLowerCase().contains('q3390')){session.send(`A3390`);
      }
else if(session.message.text.toLowerCase().contains('q3389')){session.send(`A3389`);
      }
else if(session.message.text.toLowerCase().contains('q3388')){session.send(`A3388`);
      }
else if(session.message.text.toLowerCase().contains('q3387')){session.send(`A3387`);
      }
else if(session.message.text.toLowerCase().contains('q3386')){session.send(`A3386`);
      }
else if(session.message.text.toLowerCase().contains('q3385')){session.send(`A3385`);
      }
else if(session.message.text.toLowerCase().contains('q3384')){session.send(`A3384`);
      }
else if(session.message.text.toLowerCase().contains('q3383')){session.send(`A3383`);
      }
else if(session.message.text.toLowerCase().contains('q3382')){session.send(`A3382`);
      }
else if(session.message.text.toLowerCase().contains('q3381')){session.send(`A3381`);
      }
else if(session.message.text.toLowerCase().contains('q3380')){session.send(`A3380`);
      }
else if(session.message.text.toLowerCase().contains('q3379')){session.send(`A3379`);
      }
else if(session.message.text.toLowerCase().contains('q3378')){session.send(`A3378`);
      }
else if(session.message.text.toLowerCase().contains('q3377')){session.send(`A3377`);
      }
else if(session.message.text.toLowerCase().contains('q3376')){session.send(`A3376`);
      }
else if(session.message.text.toLowerCase().contains('q3375')){session.send(`A3375`);
      }
else if(session.message.text.toLowerCase().contains('q3374')){session.send(`A3374`);
      }
else if(session.message.text.toLowerCase().contains('q3373')){session.send(`A3373`);
      }
else if(session.message.text.toLowerCase().contains('q3372')){session.send(`A3372`);
      }
else if(session.message.text.toLowerCase().contains('q3371')){session.send(`A3371`);
      }
else if(session.message.text.toLowerCase().contains('q3370')){session.send(`A3370`);
      }
else if(session.message.text.toLowerCase().contains('q3369')){session.send(`A3369`);
      }
else if(session.message.text.toLowerCase().contains('q3368')){session.send(`A3368`);
      }
else if(session.message.text.toLowerCase().contains('q3367')){session.send(`A3367`);
      }
else if(session.message.text.toLowerCase().contains('q3366')){session.send(`A3366`);
      }
else if(session.message.text.toLowerCase().contains('q3365')){session.send(`A3365`);
      }
else if(session.message.text.toLowerCase().contains('q3364')){session.send(`A3364`);
      }
else if(session.message.text.toLowerCase().contains('q3363')){session.send(`A3363`);
      }
else if(session.message.text.toLowerCase().contains('q3362')){session.send(`A3362`);
      }
else if(session.message.text.toLowerCase().contains('q3361')){session.send(`A3361`);
      }
else if(session.message.text.toLowerCase().contains('q3360')){session.send(`A3360`);
      }
else if(session.message.text.toLowerCase().contains('q3359')){session.send(`A3359`);
      }
else if(session.message.text.toLowerCase().contains('q3358')){session.send(`A3358`);
      }
else if(session.message.text.toLowerCase().contains('q3357')){session.send(`A3357`);
      }
else if(session.message.text.toLowerCase().contains('q3356')){session.send(`A3356`);
      }
else if(session.message.text.toLowerCase().contains('q3355')){session.send(`A3355`);
      }
else if(session.message.text.toLowerCase().contains('q3354')){session.send(`A3354`);
      }
else if(session.message.text.toLowerCase().contains('q3353')){session.send(`A3353`);
      }
else if(session.message.text.toLowerCase().contains('q3352')){session.send(`A3352`);
      }
else if(session.message.text.toLowerCase().contains('q3351')){session.send(`A3351`);
      }
else if(session.message.text.toLowerCase().contains('q3350')){session.send(`A3350`);
      }
else if(session.message.text.toLowerCase().contains('q3349')){session.send(`A3349`);
      }
else if(session.message.text.toLowerCase().contains('q3348')){session.send(`A3348`);
      }
else if(session.message.text.toLowerCase().contains('q3347')){session.send(`A3347`);
      }
else if(session.message.text.toLowerCase().contains('q3346')){session.send(`A3346`);
      }
else if(session.message.text.toLowerCase().contains('q3345')){session.send(`A3345`);
      }
else if(session.message.text.toLowerCase().contains('q3344')){session.send(`A3344`);
      }
else if(session.message.text.toLowerCase().contains('q3343')){session.send(`A3343`);
      }
else if(session.message.text.toLowerCase().contains('q3342')){session.send(`A3342`);
      }
else if(session.message.text.toLowerCase().contains('q3341')){session.send(`A3341`);
      }
else if(session.message.text.toLowerCase().contains('q3340')){session.send(`A3340`);
      }
else if(session.message.text.toLowerCase().contains('q3339')){session.send(`A3339`);
      }
else if(session.message.text.toLowerCase().contains('q3338')){session.send(`A3338`);
      }
else if(session.message.text.toLowerCase().contains('q3337')){session.send(`A3337`);
      }
else if(session.message.text.toLowerCase().contains('q3336')){session.send(`A3336`);
      }
else if(session.message.text.toLowerCase().contains('q3335')){session.send(`A3335`);
      }
else if(session.message.text.toLowerCase().contains('q3334')){session.send(`A3334`);
      }
else if(session.message.text.toLowerCase().contains('q3333')){session.send(`A3333`);
      }
else if(session.message.text.toLowerCase().contains('q3332')){session.send(`A3332`);
      }
else if(session.message.text.toLowerCase().contains('q3331')){session.send(`A3331`);
      }
else if(session.message.text.toLowerCase().contains('q3330')){session.send(`A3330`);
      }
else if(session.message.text.toLowerCase().contains('q3329')){session.send(`A3329`);
      }
else if(session.message.text.toLowerCase().contains('q3328')){session.send(`A3328`);
      }
else if(session.message.text.toLowerCase().contains('q3327')){session.send(`A3327`);
      }
else if(session.message.text.toLowerCase().contains('q3326')){session.send(`A3326`);
      }
else if(session.message.text.toLowerCase().contains('q3325')){session.send(`A3325`);
      }
else if(session.message.text.toLowerCase().contains('q3324')){session.send(`A3324`);
      }
else if(session.message.text.toLowerCase().contains('q3323')){session.send(`A3323`);
      }
else if(session.message.text.toLowerCase().contains('q3322')){session.send(`A3322`);
      }
else if(session.message.text.toLowerCase().contains('q3321')){session.send(`A3321`);
      }
else if(session.message.text.toLowerCase().contains('q3320')){session.send(`A3320`);
      }
else if(session.message.text.toLowerCase().contains('q3319')){session.send(`A3319`);
      }
else if(session.message.text.toLowerCase().contains('q3318')){session.send(`A3318`);
      }
else if(session.message.text.toLowerCase().contains('q3317')){session.send(`A3317`);
      }
else if(session.message.text.toLowerCase().contains('q3316')){session.send(`A3316`);
      }
else if(session.message.text.toLowerCase().contains('q3315')){session.send(`A3315`);
      }
else if(session.message.text.toLowerCase().contains('q3314')){session.send(`A3314`);
      }
else if(session.message.text.toLowerCase().contains('q3313')){session.send(`A3313`);
      }
else if(session.message.text.toLowerCase().contains('q3312')){session.send(`A3312`);
      }
else if(session.message.text.toLowerCase().contains('q3311')){session.send(`A3311`);
      }
else if(session.message.text.toLowerCase().contains('q3310')){session.send(`A3310`);
      }
else if(session.message.text.toLowerCase().contains('q3309')){session.send(`A3309`);
      }
else if(session.message.text.toLowerCase().contains('q3308')){session.send(`A3308`);
      }
else if(session.message.text.toLowerCase().contains('q3307')){session.send(`A3307`);
      }
else if(session.message.text.toLowerCase().contains('q3306')){session.send(`A3306`);
      }
else if(session.message.text.toLowerCase().contains('q3305')){session.send(`A3305`);
      }
else if(session.message.text.toLowerCase().contains('q3304')){session.send(`A3304`);
      }
else if(session.message.text.toLowerCase().contains('q3303')){session.send(`A3303`);
      }
else if(session.message.text.toLowerCase().contains('q3302')){session.send(`A3302`);
      }
else if(session.message.text.toLowerCase().contains('q3301')){session.send(`A3301`);
      }
else if(session.message.text.toLowerCase().contains('q3300')){session.send(`A3300`);
      }
else if(session.message.text.toLowerCase().contains('q3299')){session.send(`A3299`);
      }
else if(session.message.text.toLowerCase().contains('q3298')){session.send(`A3298`);
      }
else if(session.message.text.toLowerCase().contains('q3297')){session.send(`A3297`);
      }
else if(session.message.text.toLowerCase().contains('q3296')){session.send(`A3296`);
      }
else if(session.message.text.toLowerCase().contains('q3295')){session.send(`A3295`);
      }
else if(session.message.text.toLowerCase().contains('q3294')){session.send(`A3294`);
      }
else if(session.message.text.toLowerCase().contains('q3293')){session.send(`A3293`);
      }
else if(session.message.text.toLowerCase().contains('q3292')){session.send(`A3292`);
      }
else if(session.message.text.toLowerCase().contains('q3291')){session.send(`A3291`);
      }
else if(session.message.text.toLowerCase().contains('q3290')){session.send(`A3290`);
      }
else if(session.message.text.toLowerCase().contains('q3289')){session.send(`A3289`);
      }
else if(session.message.text.toLowerCase().contains('q3288')){session.send(`A3288`);
      }
else if(session.message.text.toLowerCase().contains('q3287')){session.send(`A3287`);
      }
else if(session.message.text.toLowerCase().contains('q3286')){session.send(`A3286`);
      }
else if(session.message.text.toLowerCase().contains('q3285')){session.send(`A3285`);
      }
else if(session.message.text.toLowerCase().contains('q3284')){session.send(`A3284`);
      }
else if(session.message.text.toLowerCase().contains('q3283')){session.send(`A3283`);
      }
else if(session.message.text.toLowerCase().contains('q3282')){session.send(`A3282`);
      }
else if(session.message.text.toLowerCase().contains('q3281')){session.send(`A3281`);
      }
else if(session.message.text.toLowerCase().contains('q3280')){session.send(`A3280`);
      }
else if(session.message.text.toLowerCase().contains('q3279')){session.send(`A3279`);
      }
else if(session.message.text.toLowerCase().contains('q3278')){session.send(`A3278`);
      }
else if(session.message.text.toLowerCase().contains('q3277')){session.send(`A3277`);
      }
else if(session.message.text.toLowerCase().contains('q3276')){session.send(`A3276`);
      }
else if(session.message.text.toLowerCase().contains('q3275')){session.send(`A3275`);
      }
else if(session.message.text.toLowerCase().contains('q3274')){session.send(`A3274`);
      }
else if(session.message.text.toLowerCase().contains('q3273')){session.send(`A3273`);
      }
else if(session.message.text.toLowerCase().contains('q3272')){session.send(`A3272`);
      }
else if(session.message.text.toLowerCase().contains('q3271')){session.send(`A3271`);
      }
else if(session.message.text.toLowerCase().contains('q3270')){session.send(`A3270`);
      }
else if(session.message.text.toLowerCase().contains('q3269')){session.send(`A3269`);
      }
else if(session.message.text.toLowerCase().contains('q3268')){session.send(`A3268`);
      }
else if(session.message.text.toLowerCase().contains('q3267')){session.send(`A3267`);
      }
else if(session.message.text.toLowerCase().contains('q3266')){session.send(`A3266`);
      }
else if(session.message.text.toLowerCase().contains('q3265')){session.send(`A3265`);
      }
else if(session.message.text.toLowerCase().contains('q3264')){session.send(`A3264`);
      }
else if(session.message.text.toLowerCase().contains('q3263')){session.send(`A3263`);
      }
else if(session.message.text.toLowerCase().contains('q3262')){session.send(`A3262`);
      }
else if(session.message.text.toLowerCase().contains('q3261')){session.send(`A3261`);
      }
else if(session.message.text.toLowerCase().contains('q3260')){session.send(`A3260`);
      }
else if(session.message.text.toLowerCase().contains('q3259')){session.send(`A3259`);
      }
else if(session.message.text.toLowerCase().contains('q3258')){session.send(`A3258`);
      }
else if(session.message.text.toLowerCase().contains('q3257')){session.send(`A3257`);
      }
else if(session.message.text.toLowerCase().contains('q3256')){session.send(`A3256`);
      }
else if(session.message.text.toLowerCase().contains('q3255')){session.send(`A3255`);
      }
else if(session.message.text.toLowerCase().contains('q3254')){session.send(`A3254`);
      }
else if(session.message.text.toLowerCase().contains('q3253')){session.send(`A3253`);
      }
else if(session.message.text.toLowerCase().contains('q3252')){session.send(`A3252`);
      }
else if(session.message.text.toLowerCase().contains('q3251')){session.send(`A3251`);
      }
else if(session.message.text.toLowerCase().contains('q3250')){session.send(`A3250`);
      }
else if(session.message.text.toLowerCase().contains('q3249')){session.send(`A3249`);
      }
else if(session.message.text.toLowerCase().contains('q3248')){session.send(`A3248`);
      }
else if(session.message.text.toLowerCase().contains('q3247')){session.send(`A3247`);
      }
else if(session.message.text.toLowerCase().contains('q3246')){session.send(`A3246`);
      }
else if(session.message.text.toLowerCase().contains('q3245')){session.send(`A3245`);
      }
else if(session.message.text.toLowerCase().contains('q3244')){session.send(`A3244`);
      }
else if(session.message.text.toLowerCase().contains('q3243')){session.send(`A3243`);
      }
else if(session.message.text.toLowerCase().contains('q3242')){session.send(`A3242`);
      }
else if(session.message.text.toLowerCase().contains('q3241')){session.send(`A3241`);
      }
else if(session.message.text.toLowerCase().contains('q3240')){session.send(`A3240`);
      }
else if(session.message.text.toLowerCase().contains('q3239')){session.send(`A3239`);
      }
else if(session.message.text.toLowerCase().contains('q3238')){session.send(`A3238`);
      }
else if(session.message.text.toLowerCase().contains('q3237')){session.send(`A3237`);
      }
else if(session.message.text.toLowerCase().contains('q3236')){session.send(`A3236`);
      }
else if(session.message.text.toLowerCase().contains('q3235')){session.send(`A3235`);
      }
else if(session.message.text.toLowerCase().contains('q3234')){session.send(`A3234`);
      }
else if(session.message.text.toLowerCase().contains('q3233')){session.send(`A3233`);
      }
else if(session.message.text.toLowerCase().contains('q3232')){session.send(`A3232`);
      }
else if(session.message.text.toLowerCase().contains('q3231')){session.send(`A3231`);
      }
else if(session.message.text.toLowerCase().contains('q3230')){session.send(`A3230`);
      }
else if(session.message.text.toLowerCase().contains('q3229')){session.send(`A3229`);
      }
else if(session.message.text.toLowerCase().contains('q3228')){session.send(`A3228`);
      }
else if(session.message.text.toLowerCase().contains('q3227')){session.send(`A3227`);
      }
else if(session.message.text.toLowerCase().contains('q3226')){session.send(`A3226`);
      }
else if(session.message.text.toLowerCase().contains('q3225')){session.send(`A3225`);
      }
else if(session.message.text.toLowerCase().contains('q3224')){session.send(`A3224`);
      }
else if(session.message.text.toLowerCase().contains('q3223')){session.send(`A3223`);
      }
else if(session.message.text.toLowerCase().contains('q3222')){session.send(`A3222`);
      }
else if(session.message.text.toLowerCase().contains('q3221')){session.send(`A3221`);
      }
else if(session.message.text.toLowerCase().contains('q3220')){session.send(`A3220`);
      }
else if(session.message.text.toLowerCase().contains('q3219')){session.send(`A3219`);
      }
else if(session.message.text.toLowerCase().contains('q3218')){session.send(`A3218`);
      }
else if(session.message.text.toLowerCase().contains('q3217')){session.send(`A3217`);
      }
else if(session.message.text.toLowerCase().contains('q3216')){session.send(`A3216`);
      }
else if(session.message.text.toLowerCase().contains('q3215')){session.send(`A3215`);
      }
else if(session.message.text.toLowerCase().contains('q3214')){session.send(`A3214`);
      }
else if(session.message.text.toLowerCase().contains('q3213')){session.send(`A3213`);
      }
else if(session.message.text.toLowerCase().contains('q3212')){session.send(`A3212`);
      }
else if(session.message.text.toLowerCase().contains('q3211')){session.send(`A3211`);
      }
else if(session.message.text.toLowerCase().contains('q3210')){session.send(`A3210`);
      }
else if(session.message.text.toLowerCase().contains('q3209')){session.send(`A3209`);
      }
else if(session.message.text.toLowerCase().contains('q3208')){session.send(`A3208`);
      }
else if(session.message.text.toLowerCase().contains('q3207')){session.send(`A3207`);
      }
else if(session.message.text.toLowerCase().contains('q3206')){session.send(`A3206`);
      }
else if(session.message.text.toLowerCase().contains('q3205')){session.send(`A3205`);
      }
else if(session.message.text.toLowerCase().contains('q3204')){session.send(`A3204`);
      }
else if(session.message.text.toLowerCase().contains('q3203')){session.send(`A3203`);
      }
else if(session.message.text.toLowerCase().contains('q3202')){session.send(`A3202`);
      }
else if(session.message.text.toLowerCase().contains('q3201')){session.send(`A3201`);
      }
else if(session.message.text.toLowerCase().contains('q3200')){session.send(`A3200`);
      }
else if(session.message.text.toLowerCase().contains('q3199')){session.send(`A3199`);
      }
else if(session.message.text.toLowerCase().contains('q3198')){session.send(`A3198`);
      }
else if(session.message.text.toLowerCase().contains('q3197')){session.send(`A3197`);
      }
else if(session.message.text.toLowerCase().contains('q3196')){session.send(`A3196`);
      }
else if(session.message.text.toLowerCase().contains('q3195')){session.send(`A3195`);
      }
else if(session.message.text.toLowerCase().contains('q3194')){session.send(`A3194`);
      }
else if(session.message.text.toLowerCase().contains('q3193')){session.send(`A3193`);
      }
else if(session.message.text.toLowerCase().contains('q3192')){session.send(`A3192`);
      }
else if(session.message.text.toLowerCase().contains('q3191')){session.send(`A3191`);
      }
else if(session.message.text.toLowerCase().contains('q3190')){session.send(`A3190`);
      }
else if(session.message.text.toLowerCase().contains('q3189')){session.send(`A3189`);
      }
else if(session.message.text.toLowerCase().contains('q3188')){session.send(`A3188`);
      }
else if(session.message.text.toLowerCase().contains('q3187')){session.send(`A3187`);
      }
else if(session.message.text.toLowerCase().contains('q3186')){session.send(`A3186`);
      }
else if(session.message.text.toLowerCase().contains('q3185')){session.send(`A3185`);
      }
else if(session.message.text.toLowerCase().contains('q3184')){session.send(`A3184`);
      }
else if(session.message.text.toLowerCase().contains('q3183')){session.send(`A3183`);
      }
else if(session.message.text.toLowerCase().contains('q3182')){session.send(`A3182`);
      }
else if(session.message.text.toLowerCase().contains('q3181')){session.send(`A3181`);
      }
else if(session.message.text.toLowerCase().contains('q3180')){session.send(`A3180`);
      }
else if(session.message.text.toLowerCase().contains('q3179')){session.send(`A3179`);
      }
else if(session.message.text.toLowerCase().contains('q3178')){session.send(`A3178`);
      }
else if(session.message.text.toLowerCase().contains('q3177')){session.send(`A3177`);
      }
else if(session.message.text.toLowerCase().contains('q3176')){session.send(`A3176`);
      }
else if(session.message.text.toLowerCase().contains('q3175')){session.send(`A3175`);
      }
else if(session.message.text.toLowerCase().contains('q3174')){session.send(`A3174`);
      }
else if(session.message.text.toLowerCase().contains('q3173')){session.send(`A3173`);
      }
else if(session.message.text.toLowerCase().contains('q3172')){session.send(`A3172`);
      }
else if(session.message.text.toLowerCase().contains('q3171')){session.send(`A3171`);
      }
else if(session.message.text.toLowerCase().contains('q3170')){session.send(`A3170`);
      }
else if(session.message.text.toLowerCase().contains('q3169')){session.send(`A3169`);
      }
else if(session.message.text.toLowerCase().contains('q3168')){session.send(`A3168`);
      }
else if(session.message.text.toLowerCase().contains('q3167')){session.send(`A3167`);
      }
else if(session.message.text.toLowerCase().contains('q3166')){session.send(`A3166`);
      }
else if(session.message.text.toLowerCase().contains('q3165')){session.send(`A3165`);
      }
else if(session.message.text.toLowerCase().contains('q3164')){session.send(`A3164`);
      }
else if(session.message.text.toLowerCase().contains('q3163')){session.send(`A3163`);
      }
else if(session.message.text.toLowerCase().contains('q3162')){session.send(`A3162`);
      }
else if(session.message.text.toLowerCase().contains('q3161')){session.send(`A3161`);
      }
else if(session.message.text.toLowerCase().contains('q3160')){session.send(`A3160`);
      }
else if(session.message.text.toLowerCase().contains('q3159')){session.send(`A3159`);
      }
else if(session.message.text.toLowerCase().contains('q3158')){session.send(`A3158`);
      }
else if(session.message.text.toLowerCase().contains('q3157')){session.send(`A3157`);
      }
else if(session.message.text.toLowerCase().contains('q3156')){session.send(`A3156`);
      }
else if(session.message.text.toLowerCase().contains('q3155')){session.send(`A3155`);
      }
else if(session.message.text.toLowerCase().contains('q3154')){session.send(`A3154`);
      }
else if(session.message.text.toLowerCase().contains('q3153')){session.send(`A3153`);
      }
else if(session.message.text.toLowerCase().contains('q3152')){session.send(`A3152`);
      }
else if(session.message.text.toLowerCase().contains('q3151')){session.send(`A3151`);
      }
else if(session.message.text.toLowerCase().contains('q3150')){session.send(`A3150`);
      }
else if(session.message.text.toLowerCase().contains('q3149')){session.send(`A3149`);
      }
else if(session.message.text.toLowerCase().contains('q3148')){session.send(`A3148`);
      }
else if(session.message.text.toLowerCase().contains('q3147')){session.send(`A3147`);
      }
else if(session.message.text.toLowerCase().contains('q3146')){session.send(`A3146`);
      }
else if(session.message.text.toLowerCase().contains('q3145')){session.send(`A3145`);
      }
else if(session.message.text.toLowerCase().contains('q3144')){session.send(`A3144`);
      }
else if(session.message.text.toLowerCase().contains('q3143')){session.send(`A3143`);
      }
else if(session.message.text.toLowerCase().contains('q3142')){session.send(`A3142`);
      }
else if(session.message.text.toLowerCase().contains('q3141')){session.send(`A3141`);
      }
else if(session.message.text.toLowerCase().contains('q3140')){session.send(`A3140`);
      }
else if(session.message.text.toLowerCase().contains('q3139')){session.send(`A3139`);
      }
else if(session.message.text.toLowerCase().contains('q3138')){session.send(`A3138`);
      }
else if(session.message.text.toLowerCase().contains('q3137')){session.send(`A3137`);
      }
else if(session.message.text.toLowerCase().contains('q3136')){session.send(`A3136`);
      }
else if(session.message.text.toLowerCase().contains('q3135')){session.send(`A3135`);
      }
else if(session.message.text.toLowerCase().contains('q3134')){session.send(`A3134`);
      }
else if(session.message.text.toLowerCase().contains('q3133')){session.send(`A3133`);
      }
else if(session.message.text.toLowerCase().contains('q3132')){session.send(`A3132`);
      }
else if(session.message.text.toLowerCase().contains('q3131')){session.send(`A3131`);
      }
else if(session.message.text.toLowerCase().contains('q3130')){session.send(`A3130`);
      }
else if(session.message.text.toLowerCase().contains('q3129')){session.send(`A3129`);
      }
else if(session.message.text.toLowerCase().contains('q3128')){session.send(`A3128`);
      }
else if(session.message.text.toLowerCase().contains('q3127')){session.send(`A3127`);
      }
else if(session.message.text.toLowerCase().contains('q3126')){session.send(`A3126`);
      }
else if(session.message.text.toLowerCase().contains('q3125')){session.send(`A3125`);
      }
else if(session.message.text.toLowerCase().contains('q3124')){session.send(`A3124`);
      }
else if(session.message.text.toLowerCase().contains('q3123')){session.send(`A3123`);
      }
else if(session.message.text.toLowerCase().contains('q3122')){session.send(`A3122`);
      }
else if(session.message.text.toLowerCase().contains('q3121')){session.send(`A3121`);
      }
else if(session.message.text.toLowerCase().contains('q3120')){session.send(`A3120`);
      }
else if(session.message.text.toLowerCase().contains('q3119')){session.send(`A3119`);
      }
else if(session.message.text.toLowerCase().contains('q3118')){session.send(`A3118`);
      }
else if(session.message.text.toLowerCase().contains('q3117')){session.send(`A3117`);
      }
else if(session.message.text.toLowerCase().contains('q3116')){session.send(`A3116`);
      }
else if(session.message.text.toLowerCase().contains('q3115')){session.send(`A3115`);
      }
else if(session.message.text.toLowerCase().contains('q3114')){session.send(`A3114`);
      }
else if(session.message.text.toLowerCase().contains('q3113')){session.send(`A3113`);
      }
else if(session.message.text.toLowerCase().contains('q3112')){session.send(`A3112`);
      }
else if(session.message.text.toLowerCase().contains('q3111')){session.send(`A3111`);
      }
else if(session.message.text.toLowerCase().contains('q3110')){session.send(`A3110`);
      }
else if(session.message.text.toLowerCase().contains('q3109')){session.send(`A3109`);
      }
else if(session.message.text.toLowerCase().contains('q3108')){session.send(`A3108`);
      }
else if(session.message.text.toLowerCase().contains('q3107')){session.send(`A3107`);
      }
else if(session.message.text.toLowerCase().contains('q3106')){session.send(`A3106`);
      }
else if(session.message.text.toLowerCase().contains('q3105')){session.send(`A3105`);
      }
else if(session.message.text.toLowerCase().contains('q3104')){session.send(`A3104`);
      }
else if(session.message.text.toLowerCase().contains('q3103')){session.send(`A3103`);
      }
else if(session.message.text.toLowerCase().contains('q3102')){session.send(`A3102`);
      }
else if(session.message.text.toLowerCase().contains('q3101')){session.send(`A3101`);
      }
else if(session.message.text.toLowerCase().contains('q3100')){session.send(`A3100`);
      }
else if(session.message.text.toLowerCase().contains('q3099')){session.send(`A3099`);
      }
else if(session.message.text.toLowerCase().contains('q3098')){session.send(`A3098`);
      }
else if(session.message.text.toLowerCase().contains('q3097')){session.send(`A3097`);
      }
else if(session.message.text.toLowerCase().contains('q3096')){session.send(`A3096`);
      }
else if(session.message.text.toLowerCase().contains('q3095')){session.send(`A3095`);
      }
else if(session.message.text.toLowerCase().contains('q3094')){session.send(`A3094`);
      }
else if(session.message.text.toLowerCase().contains('q3093')){session.send(`A3093`);
      }
else if(session.message.text.toLowerCase().contains('q3092')){session.send(`A3092`);
      }
else if(session.message.text.toLowerCase().contains('q3091')){session.send(`A3091`);
      }
else if(session.message.text.toLowerCase().contains('q3090')){session.send(`A3090`);
      }
else if(session.message.text.toLowerCase().contains('q3089')){session.send(`A3089`);
      }
else if(session.message.text.toLowerCase().contains('q3088')){session.send(`A3088`);
      }
else if(session.message.text.toLowerCase().contains('q3087')){session.send(`A3087`);
      }
else if(session.message.text.toLowerCase().contains('q3086')){session.send(`A3086`);
      }
else if(session.message.text.toLowerCase().contains('q3085')){session.send(`A3085`);
      }
else if(session.message.text.toLowerCase().contains('q3084')){session.send(`A3084`);
      }
else if(session.message.text.toLowerCase().contains('q3083')){session.send(`A3083`);
      }
else if(session.message.text.toLowerCase().contains('q3082')){session.send(`A3082`);
      }
else if(session.message.text.toLowerCase().contains('q3081')){session.send(`A3081`);
      }
else if(session.message.text.toLowerCase().contains('q3080')){session.send(`A3080`);
      }
else if(session.message.text.toLowerCase().contains('q3079')){session.send(`A3079`);
      }
else if(session.message.text.toLowerCase().contains('q3078')){session.send(`A3078`);
      }
else if(session.message.text.toLowerCase().contains('q3077')){session.send(`A3077`);
      }
else if(session.message.text.toLowerCase().contains('q3076')){session.send(`A3076`);
      }
else if(session.message.text.toLowerCase().contains('q3075')){session.send(`A3075`);
      }
else if(session.message.text.toLowerCase().contains('q3074')){session.send(`A3074`);
      }
else if(session.message.text.toLowerCase().contains('q3073')){session.send(`A3073`);
      }
else if(session.message.text.toLowerCase().contains('q3072')){session.send(`A3072`);
      }
else if(session.message.text.toLowerCase().contains('q3071')){session.send(`A3071`);
      }
else if(session.message.text.toLowerCase().contains('q3070')){session.send(`A3070`);
      }
else if(session.message.text.toLowerCase().contains('q3069')){session.send(`A3069`);
      }
else if(session.message.text.toLowerCase().contains('q3068')){session.send(`A3068`);
      }
else if(session.message.text.toLowerCase().contains('q3067')){session.send(`A3067`);
      }
else if(session.message.text.toLowerCase().contains('q3066')){session.send(`A3066`);
      }
else if(session.message.text.toLowerCase().contains('q3065')){session.send(`A3065`);
      }
else if(session.message.text.toLowerCase().contains('q3064')){session.send(`A3064`);
      }
else if(session.message.text.toLowerCase().contains('q3063')){session.send(`A3063`);
      }
else if(session.message.text.toLowerCase().contains('q3062')){session.send(`A3062`);
      }
else if(session.message.text.toLowerCase().contains('q3061')){session.send(`A3061`);
      }
else if(session.message.text.toLowerCase().contains('q3060')){session.send(`A3060`);
      }
else if(session.message.text.toLowerCase().contains('q3059')){session.send(`A3059`);
      }
else if(session.message.text.toLowerCase().contains('q3058')){session.send(`A3058`);
      }
else if(session.message.text.toLowerCase().contains('q3057')){session.send(`A3057`);
      }
else if(session.message.text.toLowerCase().contains('q3056')){session.send(`A3056`);
      }
else if(session.message.text.toLowerCase().contains('q3055')){session.send(`A3055`);
      }
else if(session.message.text.toLowerCase().contains('q3054')){session.send(`A3054`);
      }
else if(session.message.text.toLowerCase().contains('q3053')){session.send(`A3053`);
      }
else if(session.message.text.toLowerCase().contains('q3052')){session.send(`A3052`);
      }
else if(session.message.text.toLowerCase().contains('q3051')){session.send(`A3051`);
      }
else if(session.message.text.toLowerCase().contains('q3050')){session.send(`A3050`);
      }
else if(session.message.text.toLowerCase().contains('q3049')){session.send(`A3049`);
      }
else if(session.message.text.toLowerCase().contains('q3048')){session.send(`A3048`);
      }
else if(session.message.text.toLowerCase().contains('q3047')){session.send(`A3047`);
      }
else if(session.message.text.toLowerCase().contains('q3046')){session.send(`A3046`);
      }
else if(session.message.text.toLowerCase().contains('q3045')){session.send(`A3045`);
      }
else if(session.message.text.toLowerCase().contains('q3044')){session.send(`A3044`);
      }
else if(session.message.text.toLowerCase().contains('q3043')){session.send(`A3043`);
      }
else if(session.message.text.toLowerCase().contains('q3042')){session.send(`A3042`);
      }
else if(session.message.text.toLowerCase().contains('q3041')){session.send(`A3041`);
      }
else if(session.message.text.toLowerCase().contains('q3040')){session.send(`A3040`);
      }
else if(session.message.text.toLowerCase().contains('q3039')){session.send(`A3039`);
      }
else if(session.message.text.toLowerCase().contains('q3038')){session.send(`A3038`);
      }
else if(session.message.text.toLowerCase().contains('q3037')){session.send(`A3037`);
      }
else if(session.message.text.toLowerCase().contains('q3036')){session.send(`A3036`);
      }
else if(session.message.text.toLowerCase().contains('q3035')){session.send(`A3035`);
      }
else if(session.message.text.toLowerCase().contains('q3034')){session.send(`A3034`);
      }
else if(session.message.text.toLowerCase().contains('q3033')){session.send(`A3033`);
      }
else if(session.message.text.toLowerCase().contains('q3032')){session.send(`A3032`);
      }
else if(session.message.text.toLowerCase().contains('q3031')){session.send(`A3031`);
      }
else if(session.message.text.toLowerCase().contains('q3030')){session.send(`A3030`);
      }
else if(session.message.text.toLowerCase().contains('q3029')){session.send(`A3029`);
      }
else if(session.message.text.toLowerCase().contains('q3028')){session.send(`A3028`);
      }
else if(session.message.text.toLowerCase().contains('q3027')){session.send(`A3027`);
      }
else if(session.message.text.toLowerCase().contains('q3026')){session.send(`A3026`);
      }
else if(session.message.text.toLowerCase().contains('q3025')){session.send(`A3025`);
      }
else if(session.message.text.toLowerCase().contains('q3024')){session.send(`A3024`);
}

  
     else{
       session.send(`Sorry I don't understand you...`);
     }
});