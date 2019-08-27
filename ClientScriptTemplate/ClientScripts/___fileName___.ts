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


export function pageInit(pContext : EntryPoints.Client.pageInitContext) {
    try {

    } catch (error) {
        handleError(error);
    }
}

export function validateField(pContext : EntryPoints.Client.validateFieldContext) {
    try {

        return true
    } catch (error) {
        handleError(error);
    }
}

export function validateLine(pContext : EntryPoints.Client.validateLineContext) {
    try {

        return true
    } catch (error) {
        handleError(error);
    }
}

export function validateInsert(pContext : EntryPoints.Client.validateInsertContext) {
    try {

        return true
    } catch (error) {
        handleError(error);
    }
}

export function validateDelete(pContext : EntryPoints.Client.validateDeleteContext) {
    try {

        return true
    } catch (error) {
        handleError(error);
    }
}

export function fieldChanged(pContext : EntryPoints.Client.fieldChangedContext) {
    try {

    } catch (error) {
        handleError(error);
    }
}

export function postSourcing(pContext : EntryPoints.Client.postSourcingContext) {
    try {

    } catch (error) {
        handleError(error);
    }
}

export function sublistChanged(pContext : EntryPoints.Client.sublistChangedContext) {
    try {

    } catch (error) {
        handleError(error);
    }
}

export function saveRecord(pContext : EntryPoints.Client.saveRecordContext) {
    try {
        return true;
    } catch (error) {
        handleError(error);
    }
}

function handleError(pError : Error) {
    log.error({ title : "Error", details : pError.message });

    log.error({ title : "Stack", details : JSON.stringify(pError) });
}