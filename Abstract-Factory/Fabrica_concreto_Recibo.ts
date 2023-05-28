/**
 * Clase Fabrica_Concreta_Recibo
 * Esta clase extiende la clase Fabrica_Abstracta_Documento y representa una fábrica concreta de recibos.
 */
import { Fabrica_Abstracta_Documento } from "./Fabrica_Abstracta_Documento";
import { Recibo } from "./Recibo";
import { Recibo_Nomina } from "./Recibo_Nomina";
import { Recibo_Insumo } from "./ReciboInsumo";

export class Fabrica_Concreta_Recibo extends Fabrica_Abstracta_Documento {
    private recibo_no: Recibo_Nomina;
    private recibo_Ins: Recibo_Insumo;

    /**
     * Crea un recibo según el tipo especificado.
     * @param tipo - El tipo de recibo a crear (1: Recibo de Nómina, 2: Recibo de Insumo).
     */
    crearRecibo(tipo: number): void {
        switch (tipo) {
            case 1:
                this.recibo_no = new Recibo_Nomina("NOMINA", "10/10/10", 10, 5000, "Cheque", "Juan Ramiro");
                break;
            case 2:
                this.recibo_Ins = new Recibo_Insumo("INSUMO", "10/10/10", 10, 5000, "Transferencia", "Sabritas");
                break;
        }
    }

    /**
     * Obtiene un recibo según el tipo especificado.
     * @param tipo - El tipo de recibo a obtener (1: Recibo de Nómina, 2: Recibo de Insumo).
     * @returns El objeto Recibo correspondiente al tipo especificado.
     */
    getRecibo(tipo: number): Recibo {
        if (tipo == 1) {
            return this.recibo_no;
        } else {
            return this.recibo_Ins;
        }
    }
}
