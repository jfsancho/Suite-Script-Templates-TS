/**
* @NApiVersion 2.x
* @NScriptType ClientScript
* @NModuleScope SameAccount
* @author Midware
* @developer ___author___
* @contact contact@midware.net
*/

import { EntryPoints } from "N/types"

import * as log from 'N/log'
import * as search from 'N/search'


export function each(pContext : EntryPoints.MassUpdate.eachContext) {
    try {

    } catch (error) {
        handleError(error);
    }
}


function handleError(pError : Error) {
    log.error({ title : "Error", details : pError.message });

    log.error({ title : "Stack", details : JSON.stringify(pError) });
}