import { Recibo } from "./Recibo";
/**
 * Clase Fabrica_Abstracta_Documento
 * Esta clase abstracta define una fábrica abstracta de documentos.
 */
export abstract class Fabrica_Abstracta_Documento {
    /**
     * Crea un recibo según el tipo especificado.
     * @param tipo - El tipo de recibo a crear.
     */
    abstract crearRecibo(tipo: number): void;
    
    /**
     * Obtiene un recibo según el tipo especificado.
     * @param tipo - El tipo de recibo a obtener.
     * @returns El objeto Recibo correspondiente al tipo especificado.
     */
    abstract getRecibo(tipo: number): Recibo;
}
