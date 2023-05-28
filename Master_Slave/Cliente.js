"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importar la clase Expediente desde el archivo "Expediente"
var Expediente_1 = require("./Expediente");
// Crear una instancia de la clase Expediente
var expediente = new Expediente_1.Expediente(1, 1, 1, 1);
// Llamar al método SimulacionEjecucionTareas en la instancia del expediente
expediente.SimulacionEjecucionTareas();
