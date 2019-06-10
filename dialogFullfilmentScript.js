
/* *********************************************************************************
 script JS pour joindre la base de donnee Firebase avec Dialogflow 
 Le programme va faire un ajout directement dans la base de donne a chaque demande 
 d'utilisateur de chatbot 311 en temps reel.

Date : 9 Juin 2019
Author : Team Lama
Ai4Good event Hackathon 2019
************************************************************************************/

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');

// initialise DB connection
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://llamabot-kxoexf.firebaseio.com/',
});

process.env.DEBUG = 'dialogflow:debug';

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  function handleDeneigement(agent) {
    const valeur = {
        "location": agent.parameters.location,
        "datetime": Date.now()
    };
    valeur.location.city = "Montreal";
	
    return admin.database().ref('deneigement').transaction((element) => {
      if(element !== null) {
        element.push(valeur);
      } else {
        element = [valeur];
      }
      return element;
    }, function(error, isSuccess) {
      console.log('Update deneigement transaction success: ' + isSuccess);
    });

  }
  function handleNidDePoule(agent) {
    const valeur = {
        "datetime": Date.now(),
        "location": agent.parameters.location,
        "description": agent.parameters.description
    };

    valeur.location.city = "Montreal";

    return admin.database().ref('nid-de-poule').transaction((element) => {
      if(element !== null) {
        element.push(valeur);
      } else {
        element = [valeur];
      }
      return element;
    }, function(error, isSuccess) {
      console.log('Update requette transaction success: ' + isSuccess);
    });

  }

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Plainte_deneigement', handleDeneigement);
  intentMap.set('nid-de-poule', handleNidDePoule);
  agent.handleRequest(intentMap);
});