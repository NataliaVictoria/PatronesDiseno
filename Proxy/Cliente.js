"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Importación de las clases necesarias
var DatosPaciente_1 = require("./DatosPaciente");
var DatosPago_1 = require("./DatosPago");
var ProxyPago_1 = require("./ProxyPago");

// Creación de un objeto instancia de la clase DatosPaciente
var datosPaciente = new DatosPaciente_1.DatosPaciente("González Pérez", "Pedro Pablo", "30-06-1968", "M", "5546789024", "ppgp@gmail.com");

// Creación de un objeto instancia de la clase DatosPago
var datosPago = new DatosPago_1.DatosPago("4356789023414320", "González Pérez", "Pedro Pablo", "12/2024", "896", 500);

// Se crea una instancia de la clase ProxyPago para realizar el pago y generar el recibo
var proxypago = new ProxyPago_1.ProxyPago("Alez", datosPago, "500", "Resanado De cara", "10/10/10");

// Se efectúa el pago llamando al método efectua_Pago()
proxypago.efectua_Pago();

// Se despliega el recibo llamando al método despliegaRecibo()
proxypago.despliegaRecibo();

// Comentarios adicionales:
// En este ejemplo, se simula un escenario de pago y generación de recibo utilizando las clases
// DatosPaciente, DatosPago y ProxyPago. Se crean instancias de DatosPaciente y DatosPago con
// datos de ejemplo. Luego, se crea una instancia de ProxyPago y se realiza el pago llamando al
// método efectua_Pago(). Finalmente, se muestra el recibo llamando al método despliegaRecibo().
// Es importante tener en cuenta que este código asume que las clases y métodos mencionados
// están implementados y disponibles en archivos separados.
