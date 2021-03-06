/**
 *
 * @class TablaArmas
 * @param {string} nombre
 * @param {string} descripcion
 * @param {string} efectos
 * @param {number} coste
 * @param {string} tipoTabla
 * @param {string[]} opciones
 * @param {string} categoria
 * @param {Requisito[]} [requisitos]
 * @constructor
 * @param {string[]} flagsNecesarios
 */
function TablaArmas(nombre, descripcion, efectos, coste, tipoTabla, opciones, categoria, flagsNecesarios, requisitos) {
    flagsNecesarios = flagsNecesarios || [];
    /**
     *
     * @type {string}
     */
    this.nombre = nombre;

    /**
     *
     * @type {string}
     */
    this.descripcion = descripcion;

    /**
     *
     * @type {string}
     */
    this.efectos = efectos;

    /**
     *
     * @type {number}
     */
    this.coste = coste;

    /**
     *
     * @type {string}
     */
    this.categoriaTabla = categoria;

    /**
     *
     * @type {string}
     */
    this.tipoTabla = tipoTabla;

    /**
     *
     * @type {string[]}
     */
    this.opciones = opciones;

    /**
     *
     * @type {string[]}
     */
    this.flagsNecesarios = flagsNecesarios;

    if (requisitos)
        /**
         *
         * @type {Requisito[]}
         */
        this.requisitos = requisitos;
    else
        /**
         *
         * @type {Requisito[]}
         */
        this.requisitos = [];
}

TablaArmas.prototype = {
    constructor : TablaArmas,

    toString : function() {
        return this.nombre;
    },

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.nombre;
    },

    /**
     *
     * @returns {string}
     */
    getDescripcion : function() {
        return this.descripcion;
    },

    /**
     *
     * @returns {string}
     */
    getEfectos : function() {
        return this.efectos;
    },

    /**
     *
     * @returns {number}
     */
    getCoste : function() {
        return this.coste;
    },

    /**
     *
     * @returns {string}
     */
    getCategoriaTabla : function() {
        return this.categoriaTabla;
    },

    /**
     *
     * @returns {string}
     */
    getTipoTabla : function() {
        return this.tipoTabla;
    },

    /**
     *
     * @returns {string[]}
     */
    getOpciones : function() {
        return this.opciones;
    },

    /**
     *
     * @param personaje
     * @returns {boolean}
     */
    cumpleRequisitos : function(personaje) {
        for (var i = 0; i < this.requisitos.length; i++) {
            if (!this.requisitos[i].cumple(personaje))
                return false;
        }

        return true;
    },

    /**
     *
     * @returns {string}
     */
    toJSON : function() {
        return this.nombre;
    }
};

/**
 *
 * @param {TablaArmas} tablaArmas
 * @param {string} opcion
 * @constructor
 */
function TablaArmasComprada(tablaArmas, opcion) {

    /**
     *
     * @type {TablaArmas}
     */
    this.tablaArmas = tablaArmas;

    /**
     *
     * @type {string}
     */
    this.opcion = opcion;

    /**  @type boolean */
    this.anulable = true;

}

TablaArmasComprada.prototype = {
    constructor : TablaArmasComprada,

    toString : function() {
        if (this.opcion) {
            return this.tablaArmas.toString() + ": " + this.opcion;
        } else {
            return this.tablaArmas.toString();
        }
    },

    /**
     *
     * @returns {string}
     */
    getNombre : function() {
        return this.tablaArmas.nombre;
    },

    /**
     *
     * @returns {string}
     */
    getDescripcion : function() {
        return this.tablaArmas.descripcion;
    },

    /**
     *
     * @returns {string}
     */
    getEfectos : function() {
        return this.tablaArmas.efectos;
    },

    /**
     *
     * @param {Personaje} personaje
     * @returns {number}
     */
    getCoste : function(personaje) {
        var coste = this.tablaArmas.coste;
        if (personaje.getCategoria().getNombre() == CAT_MAESTRO_ARMAS) {
            if ((this.getCategoriaTabla() == CATEGORIA_TABLA_ARMAS_ESTILOS) ||
                (this.getCategoriaTabla() == CATEGORIA_TABLA_ARMAS_ARQUET??PICAS) ||
                (this.getCategoriaTabla() == CATEGORIA_TABLA_ARMAS_GENERALES)) {
                coste /= 2;
            }
        }
        if (personaje.getCategoria().getNombre() == CAT_TAO) {
            if (this.getCategoriaTabla() == CATEGORIA_TABLA_ARMAS_ARTES_MARCIALES) {
                coste /= 2;
            }
        }


        return coste;
    },

    /**
     *
     * @returns {string}
     */
    getCategoriaTabla : function() {
        return this.tablaArmas.categoriaTabla;
    },

    /**
     *
     * @returns {string}
     */
    getTipoTabla : function() {
        return this.tablaArmas.tipoTabla;
    },

    /**
     *
     * @returns {string[]}
     */
    getOpciones : function() {
        return this.tablaArmas.opciones;
    },

    /**
     *
     * @returns {string}
     */
    getOpcion : function() {
        return this.opcion;
    },

    /**
     *
     * @param {string} valor
     */
    setOpcion : function(valor) {
        this.opcion = valor;
    },

    /**
     *
     * @returns {boolean}
     */
    isAnulable : function() {
        return this.anulable;
    },

    /**
     *
     * @param {boolean} valor
     */
    setAnulable : function(valor) {
        this.anulable = valor;
    }


};