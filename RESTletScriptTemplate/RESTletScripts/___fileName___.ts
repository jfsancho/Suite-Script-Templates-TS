/**
* @NApiVersion 2.x
* @NScriptType Restlet
* @NModuleScope SameAccount
* @author Midware
* @developer ___author___
* @contact contact@midware.io
*/


import * as log from 'N/log'
import * as error from 'N/error'


export function get(requestParams : any) {
    try {
        
    } catch (  error ) {
        handleError(error);
        return error.message
    }
}

export function post(requestBody : any) {
    try {
        
    } catch (error) {
        handleError(error);
        return error.message
    }
}

function doValidation(args : any, argNames : string[], methodName : string) { //validate if the arguments of a HTTP Request are correct
    for (var i = 0; i < argNames.length; i++) {
        if ( !args[argNames[i]] )
            throw error.create({
                name: 'MW_MISSING_REQ_ARG',
                message: 'Missing a required argument: [' + argNames[i] + '] for method: ' + methodName
            });
    }
}

function handleError(pError : Error) {
    log.error({ title : "Error", details : pError.message });

    log.error({ title : "Stack", details : JSON.stringify(pError) });
}