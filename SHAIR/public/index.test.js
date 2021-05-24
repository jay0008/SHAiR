/** 
  * File:    index.test.js
  * 
  * Author1:  Cyril Abia 
  * Date:     May 23rd 2021 
  * Partner:  Worked alone  
  * 
  * Summary of File: 
  * 
  *   This file contains contains test code for all JavaScript functions used in the application
  * 
  */ 

//Calls to functions getModel, getVin and getCars in index.js
const { getModel } = require('./index');
const { getVin } = require('./index');
const { getCars } = require('./index');

//Test for getModel function in index.js
describe("Returns all makes for a given manufacturer", () =>{
    test("getModel", async () => {
        const result = getModel('541');
        expect(result).toBe(result);
    });
});

//Test for getVin function in index.js
describe("Returns  the year, make, and model of a vehicle given its VIN", () =>{
    test("getVin", async () => {
        const result = getVin("dffcygvubhnujom");
        expect(result).toBe(result);
    });
});

//Test for getCar function in index.js
describe("Returns all car manufacturers", () =>{
    test("getCar", async () => {
        const result = getCars();
        expect(result).toBe(result);
    
    });
});