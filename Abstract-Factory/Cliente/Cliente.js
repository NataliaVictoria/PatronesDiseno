// Importar la clase de la fábrica concreta de recibos
var Fabrica_concreto_Recibo_1 = require("../Fabrica_concreto_Recibo");

// Crear una instancia de la fábrica concreta de recibos
var Recibos_nuevos = new Fabrica_concreto_Recibo_1.Fabrica_Concreta_Recibo();

// Crear un recibo de tipo 1 utilizando la fábrica
Recibos_nuevos.crearRecibo(1);

// Obtener el recibo de tipo 1 creado por la fábrica
var Recibonomina;
Recibonomina = Recibos_nuevos.getRecibo(1);

// Visualizar el recibo de nómina
Recibonomina.visualizarRecibo();

/***************************************** */

// Crear otra instancia de la fábrica concreta de recibos
var Recibos_nuevo2 = new Fabrica_concreto_Recibo_1.Fabrica_Concreta_Recibo();

// Crear un recibo de tipo 2 utilizando la fábrica
var Reciboinsumos;
Recibos_nuevo2.crearRecibo(2);
Reciboinsumos = Recibos_nuevo2.getRecibo(2);

// Visualizar el recibo de insumos
Reciboinsumos.visualizarRecibo();
