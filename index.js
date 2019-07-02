'use strict';

exports.handler = async (event) => {
    let name = "you";
    let city = 'World';
    let time = 'day';
    let day = '';
    let responseCode = 200;
    console.log("request: " + JSON.stringify(event));
    
    if (event.queryStringParameters && event.queryStringParameters.greeting) {
    let response = {
           statusCode: 200, 
            body: "Hello "+ event.queryStringParameters.greeting
        };
        return response;
    }
};
