const functions = require('firebase-functions');
const express = require('express');

const app= express();

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
