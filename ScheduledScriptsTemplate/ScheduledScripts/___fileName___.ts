/**
* @NApiVersion 2.x
* @NScriptType ScheduledScript
* @NModuleScope SameAccount
* @author Midware
* @developer ___author___
* @contact contact@midware.net
*/

import { EntryPoints } from "N/types"

import * as log from 'N/log'


export function execute(pContext: EntryPoints.Scheduled.executeContext) {
    try {

    } catch (pError) {
        handleError(pError);
    }

}


function handleError(pError : Error) {
    log.error({ title : "Error", details : pError.message });

    log.error({ title : "Stack", details : JSON.stringify(pError) });
}