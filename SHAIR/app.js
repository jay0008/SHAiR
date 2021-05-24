/** 
  * File:    app.js
  * 
  * Author1:  Cyril Abia 
  * Date:     May 23rd 2021 
  * Partner:  Worked alone  
  * 
  * Summary of File: 
  * 
  *   This is the main JS file it contains code to setup port functionality to run code
  *   in the native browser.
  * 
  */ 
//Main JS file 

//import expressJS
const express = require('express')
const app = express()
//make port dynamic
const port = process.env.PORT || 3000;
//connect to port
app.listen(port, () => console.log(`listening on port ${port}!`));
app.use(express.static('public'));
