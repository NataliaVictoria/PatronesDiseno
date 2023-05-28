"use strict";
// Modo estricto de JavaScript

Object.defineProperty(exports, "__esModule", { value: true });
// Define la propiedad "exports" en el objeto global

exports.Expediente = void 0;
// Exporta la clase Expediente como parte del módulo

var SlaveCita_1 = require("./SlaveCita");
var SlaveDatosPaciente_1 = require("./SlaveDatosPaciente");
var SlaveReceta_1 = require("./SlaveReceta");
var SlaveResultados_1 = require("./SlaveResultados");

var Expediente = /** @class */ (function () {
    function Expediente(selReceta, selCita, selResultados, selDatosPaciente) {
        // Constructor de la clase Expediente
        this.selReceta = selReceta;
        this.selCita = selCita;
        this.selResultados = selResultados;
        this.selDatosPaciente = selDatosPaciente;
        this.NumerodeAfilicion = "1232";
    }

    Expediente.prototype.SimulacionEjecucionTareas = function () {
        // Método que simula la ejecución de tareas

        console.log("Aqui Ando");

        // Creación de instancias de las clases SlaveReceta, SlaveCita, SlaveResultados, SlaveDatosPaciente
        var receta = new SlaveReceta_1.SlaveReceta("", "");
        var cita = new SlaveCita_1.SlaveCita("", "", "");
        var resultados = new SlaveResultados_1.SlaveResultados("", "");
        var datospaciente = new SlaveDatosPaciente_1.SlaveDatosPaciente("", "", "");

        // Verifica el valor de selReceta y realiza la creación de la receta correspondiente
        if (this.selReceta == 1) {
            receta = this.creacionReceta("Paracetamol", "800 mg");
        } else {
            receta = new SlaveReceta_1.SlaveReceta("", "");
        }

        // Verifica el valor de selCita y realiza la creación de la cita correspondiente
        if (this.selCita == 1) {
            cita = this.creacionCita("Alexander", "25-05-23", "12:30");
        } else {
            cita = new SlaveCita_1.SlaveCita("", "", "");
        }

        // Verifica el valor de selResultados y realiza la creación de los resultados correspondientes
        if (this.selResultados == 1) {
            resultados = this.creacionResultados("Analisis de Sangre", "Glucosa 100, Colesterol 200");
        } else {
            resultados = new SlaveResultados_1.SlaveResultados("", "");
        }

        // Verifica el valor de selDatosPaciente y realiza la creación de los datos del paciente correspondientes
        if (this.selDatosPaciente == 1) {
            datospaciente = this.creacionDatosPaciente("Aldo", "23", "Masculino");
        } else {
            datospaciente = new SlaveDatosPaciente_1.SlaveDatosPaciente("", "", "");
        }

        // Muestra la información de las instancias creadas
        this.mostrar_InfoReservacion(receta, cita, resultados, datospaciente);
    };

    Expediente.prototype.creacionReceta = function (medicamentos, dosis) {
        // Método para crear una instancia de SlaveReceta con los parámetros proporcionados
        return new SlaveReceta_1.SlaveReceta(medicamentos, dosis);
    };

    Expediente.prototype.creacionCita = function (doctor, fecha, hora) {
        // Método para crear una instancia de SlaveCita con los parámetros proporcionados
        return new SlaveCita_1.SlaveCita(doctor, fecha, hora);
    };

    Expediente.prototype.creacionResultados = function (tipo, valores) {
        // Método para crear una instancia de SlaveResultados con los parámetros proporcionados
        return new SlaveResultados_1.SlaveResultados(tipo, valores);
    };

    Expediente.prototype.creacionDatosPaciente = function (nombre, edad, sexo) {
        // Método para crear una instancia de SlaveDatosPaciente con los parámetros proporcionados
        return new SlaveDatosPaciente_1.SlaveDatosPaciente(nombre, edad, sexo);
    };

    Expediente.prototype.mostrar_InfoReservacion = function (receta, cita, resultados, datospaciente) {
        // Método para mostrar la información de las instancias en la consola

        console.log("NUMERO DE AFILIACION: " + this.NumerodeAfilicion + "\n\n");

        // Muestra los datos del paciente si selDatosPaciente es igual a 1
        if (this.selDatosPaciente === 1) {
            console.log("***DATOS DEL PACIENTE:***\n");
            console.log("Nombre: " + datospaciente.getInfo().Nombre + "\n");
            console.log("Edad: " + datospaciente.getInfo().Edad + "\n");
            console.log("Sexo: " + datospaciente.getInfo().Sexo + "\n\n");
        }

        // Muestra los datos de la receta si selReceta es igual a 1
        if (this.selReceta === 1) {
            console.log("***DATOS DE LA RECETA:***\n");
            console.log("Medicamentos: " + receta.getInfo().Medicamentos + "\n");
            console.log("Dosis: " + receta.getInfo().Dosis + "\n\n");
        }

        // Muestra los datos de la cita si selCita es igual a 1
        if (this.selCita === 1) {
            console.log("***DATOS DE LA CITA:***\n");
            console.log("Nombre del Doctor: " + cita.getInfo().Doctor + "\n");
            console.log("Fecha: " + cita.getInfo().Fecha + "\n");
            console.log("Hora: " + cita.getInfo().Hora + "\n\n");
        }

        // Muestra los datos de los resultados si selResultados es igual a 1
        if (this.selResultados === 1) {
            console.log("***DATOS DE LOS RESULTADOS:***\n");
            console.log("Tipo de Resultados: " + resultados.getInfo().Tipo + "\n");
            console.log("Valores arrojados: " + resultados.getInfo().Valores + "\n");
        }
    };

    return Expediente;
}());

exports.Expediente = Expediente;
// Exporta la clase Expediente para que pueda ser utilizada en otros archivos
