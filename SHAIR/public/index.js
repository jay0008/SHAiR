/** 
  * File:    index.js
  * 
  * Author1:  Cyril Abia 
  * Date:     May 23rd 2021 
  * Partner:  Worked alone  
  * 
  * Summary of File: 
  * 
  *   This file contains contains all JavaScript functions used in the application
  */ 

/** 
  * Summary of the getCars function: 
  * 
  *    The function returns all the car manufacturers listed
  *    in the API as a HTML Button 
  * 
  * Parameters   : NULL 
  * 
  * Return Value : HTML Buttons with all car manufacturers. 
  * 
  * Description  : The getCars function uses a URL to a JSON format
  *                Data to collet all car manufacturers and encapsulate
  *                it to buttons displayed on the web page. 
  */ 
async function getCars(){
    //Get data from the API URL
    const api_url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=JSON'
    const response = await fetch(api_url);
    const data = await response.json();
    var str = data.Results.map(function(item) { 
        //concatinate each manufacturer to a HTML button format and return the result
        for (var key in item){ 
            var name = "<button onclick='getModel("+item.Make_ID+")'/>"+item.Make_Name;
            return  name; 
        }
        }).join("<br> " );
        document.getElementById('cars').innerHTML = str;
}
exports.getCars = getCars;

/** 
  * Summary of the getModel function: 
  * 
  *    The function returns all the car manufacturers models
  *    listed in the API using the makeID
  * 
  * Parameters   : ModelNum: Uses the make ID to retrive data
  *                on models of cars from a given manufacturer. 
  * 
  * Return Value : All models with the given make ID. 
  * 
  * Description  : The getModel function uses a URL to a JSON format
  *                Data to collet a car manufacturers list of
  *                models and displays it on the web page. 
  */ 
async function getModel(modelNum){
    //Get data from the API URL
    const api_url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/'+modelNum+'?format=json'
    const response = await fetch(api_url);
    const data = await response.json();
    var str = data.Results.map(function(item) { 
        // Iterate through the list and return all models with the given make ID 
        for (var key in item) 
            return  item.Model_Name;
        }).join("&emsp; " );
        document.getElementById('model').innerHTML = str;
}
exports.getModel = getModel;

/** 
  * Summary of the getModel function: 
  * 
  *    The function returns  the year, make, and model of a
  *    vehicle given its VIN
  * 
  * Parameters   : vin: Uses the vin number to retrive data
  *                on a particular car. 
  * 
  * Return Value : the year, make, and model of the car or
  *                error message due to invalid vin
  * 
  * Description  : The getVin function uses a URL to a JSON format
  *                Data to collet a cars year, make, and model to displays it on the web page. 
  */ 
async function getVin(vin){
    //Get data from the API URL
    const api_url = 'https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/'+vin+'?format=json'
    const response = await fetch(api_url);
    const data = await response.json();
    var result;
    str = data.Results.map(function(item) { 
        for (var key in item){
            //if the vin has no issues return the year, make, and model
            if(item.ErrorCode == 0)
                result = "VIN Number: "+vin+"&emsp;  Year: "+ item.ModelYear+"&emsp;  Make: "+ item.Make+"&emsp;  Model: "+item.Model;
            //if the vin has issues display error messsage
            else
                result = "ERROR <br>"+item.ErrorText+"<br><br>ADDITIONAL ERROR <br>"+item.AdditionalErrorText;
            return  result;
        }
    }).join("&emsp; " );
    document.getElementById('vinID').innerHTML = str;
}
exports.getVin = getVin;

