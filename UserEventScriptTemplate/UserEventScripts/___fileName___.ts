/**
* @NApiVersion 2.x
* @NScriptType UserEventScript
* @NModuleScope SameAccount
* @author Midware
* @developer ___author___
* @contact contact@midware.net
*/

import { EntryPoints } from "N/types"

import * as log from 'N/log'

export function beforeLoad(pContext : EntryPoints.UserEvent.beforeLoadContext) {
    try {

    } catch (error) {
        handleError(error);
    }

}

export function beforeSubmit(pContext : EntryPoints.UserEvent.beforeSubmitContext) {
    try {

    } catch (error) {
        handleError(error);
    }

}

export function afterSubmit(pContext : EntryPoints.UserEvent.afterSubmitContext) {
    try {

    } catch (error) {
        handleError(error);
    }

}

function handleError(pError : Error) {
    log.error({ title : "Error", details : pError.message });

    log.error({ title : "Stack", details : JSON.stringify(pError) });
}