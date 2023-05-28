import { Pago } from "./Pago";
import { DatosPaciente } from "./DatosPaciente";
import { DatosPago } from "./DatosPago";
import { ProxyPago } from "./ProxyPago";

/**
 * Creación de un objeto instancia de la clase DatosPaciente con información de ejemplo.
 * @param apellidos - Apellidos del paciente.
 * @param nombres - Nombres del paciente.
 * @param fechaNacimiento - Fecha de nacimiento del paciente.
 * @param genero - Género del paciente.
 * @param telefono - Número de teléfono del paciente.
 * @param email - Dirección de correo electrónico del paciente.
 */
const datosPaciente = new DatosPaciente(
  "González Pérez",
  "Pedro Pablo",
  "30-06-1968",
  "M",
  "5546789024",
  "ppgp@gmail.com"
);

/**
 * Creación de un objeto instancia de la clase DatosPago con información de ejemplo.
 * @param numeroTarjeta - Número de tarjeta de crédito o débito.
 * @param apellidosTitular - Apellidos del titular de la tarjeta.
 * @param nombreTitular - Nombres del titular de la tarjeta.
 * @param fechaVencimiento - Fecha de vencimiento de la tarjeta.
 * @param cvv - Código de seguridad de la tarjeta.
 * @param precioTotal - Monto total del pago.
 */
const datosPago = new DatosPago(
  "4356789023414320",
  "González Pérez",
  "Pedro Pablo",
  "12/2024",
  "896",
  500
);

/**
 * Se efectúa el pago a través del proxy ProxyPago considerando los datos del paciente y el pago.
 * @param nombre - Nombre del paciente.
 * @param datospago - Datos del pago.
 * @param monto - Monto del pago.
 * @param descripcion - Descripción del pago.
 * @param fecha - Fecha del pago.
 */
const proxypago = new ProxyPago(
  "Alez",
  datosPago,
  "500",
  "Resanado De cara",
  "10/10/10"
);
proxypago.efectua_Pago();

/**
 * Se despliega el recibo del pago realizado.
 */
proxypago.despliegaRecibo();
