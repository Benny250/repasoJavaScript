// codigo JavaScript para el Curso
'use strict';
var _cursoJavaScript = {};

//#region Funciones

/// muestra una alerta en la pantalla
/// parametros: msj: string
_cursoJavaScript.funcionAlert = function (msj) {
    alert(msj);
};

/// muestra una alerta de confirmacion
/// y devuelve si ha aceptado o no, rq: boolean
/// parametros: msj: string
_cursoJavaScript.confirmAlert = function (msj) {
    var rq = confirm(msj);
    return rq;
};
/// muestra una alerta solicitando la entrada de datos
/// y devuelve el valor introducido, value: string
/// parametros: msj: string, default_msj:string
_cursoJavaScript.inputDataAlert = function (msj, default_msj) {
    var value = prompt(msj, default_msj);
    return value;
};
/// muestra el mensaje en la consola.
/// parametros: msj: string
_cursoJavaScript.consoleLog = function (msj) {
    console.log(msj);
};

/// Creamos items 
/// parametros: key: string, value: string
_cursoJavaScript.createItemSession = function (key, value) {
    sessionStorage.setItem(key, value);
};

/// Eliminamos el item creado
/// parametros key: string
_cursoJavaScript.removeItemSession = function (key) {
    sessionStorage.removeItem(key);
};
//#endregion Fin Funciones

_cursoJavaScript.main = function () {
    var edad;
    edad = _cursoJavaScript.inputDataAlert("Introduzca su edad: ", "18");

    var respuesta = _cursoJavaScript.confirmAlert("Esta seguro de que tiene " + edad);

    if (respuesta && edad > 18) {
        _cursoJavaScript.funcionAlert("Eres mayor de edad");
    }
    else {
        _cursoJavaScript.funcionAlert("No eres mayor de edad");
    }
};


//#region Llamada principal

_cursoJavaScript.main();

//#endregion