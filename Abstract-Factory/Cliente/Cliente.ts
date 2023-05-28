import { Fabrica_Abstracta_Documento } from "../Fabrica_Abstracta_Documento";
import { Fabrica_Concreta_Recibo } from "../Fabrica_concreto_Recibo";
import { Recibo } from "../Recibo";

// Crear una instancia de la fábrica concreta de recibos
let Recibos_nuevos = new Fabrica_Concreta_Recibo();

// Crear un recibo de tipo 1 utilizando la fábrica
Recibos_nuevos.crearRecibo(1);

// Obtener el recibo de tipo 1 creado por la fábrica
let Recibonomina: Recibo;
Recibonomina = Recibos_nuevos.getRecibo(1);

// Visualizar el recibo de nómina
Recibonomina.visualizarRecibo();

/***************************************** */

// Crear otra instancia de la fábrica concreta de recibos
let Recibos_nuevo2 = new Fabrica_Concreta_Recibo();

// Crear un recibo de tipo 2 utilizando la fábrica
Recibos_nuevo2.crearRecibo(2);

// Obtener el recibo de tipo 2 creado por la fábrica
let Reciboinsumos: Recibo;
Reciboinsumos = Recibos_nuevo2.getRecibo(2);

// Visualizar el recibo de insumos
Reciboinsumos.visualizarRecibo();
