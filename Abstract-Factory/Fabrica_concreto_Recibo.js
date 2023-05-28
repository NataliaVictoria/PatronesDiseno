/**
 * Clase Fabrica_Concreta_Recibo
 * Esta clase extiende la clase Fabrica_Abstracta_Documento y representa una fábrica concreta de recibos.
 */
"use strict";
var Fabrica_Concreta_Recibo = /** @class */ (function (_super) {
    __extends(Fabrica_Concreta_Recibo, _super);
    
    /**
     * Crea una instancia de la clase Fabrica_Concreta_Recibo.
     */
    function Fabrica_Concreta_Recibo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    
    /**
     * Crea un recibo según el tipo especificado.
     * @param tipo - El tipo de recibo a crear (1: Recibo de Nómina, 2: Recibo de Insumo).
     */
    Fabrica_Concreta_Recibo.prototype.crearRecibo = function (tipo) {
        switch (tipo) {
            case 1:
                this.recibo_no = new Recibo_Nomina_1.Recibo_Nomina("NOMINA", "10/10/10", 10, 5000, "Cheque", "Juan Ramiro");
                break;
            case 2:
                this.recibo_Ins = new ReciboInsumo_1.Recibo_Insumo("INSUMO", "10/10/10", 10, 5000, "Transferencia", "Sabritas");
                break;
        }
    };
    
    /**
     * Obtiene un recibo según el tipo especificado.
     * @param tipo - El tipo de recibo a obtener (1: Recibo de Nómina, 2: Recibo de Insumo).
     * @returns El objeto Recibo correspondiente al tipo especificado.
     */
    Fabrica_Concreta_Recibo.prototype.getRecibo = function (tipo) {
        if (tipo == 1) {
            return this.recibo_no;
        }
        else {
            return this.recibo_Ins;
        }
    };
    
    return Fabrica_Concreta_Recibo;
}(Fabrica_Abstracta_Documento_1.Fabrica_Abstracta_Documento));

exports.Fabrica_Concreta_Recibo = Fabrica_Concreta_Recibo;
