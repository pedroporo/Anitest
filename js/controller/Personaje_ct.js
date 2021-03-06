/**
 *
 * @param {string} nombreHabilidad
 */
function lanzarEventoSegunHabilidad(nombreHabilidad) {
    var habilidad = getHabilidad(nombreHabilidad);

    switch (habilidad.getTipo()) {
        case TIPO_CAPACIDAD:
            personaje_actual.updateMultiplosVida(true);
            break;
        case TIPO_HB_COMBATE:
            lanzarEvento(EVENT_CHARACTER_SECCION_COMBATE_GENERAL);
            lanzarEvento(EVENT_CHARACTER_SECCION_KI);
            break;
        case TIPO_HB_SOBRENATURAL:
            lanzarEvento(EVENT_CHARACTER_SECCION_MAGIA);
            break;
        case TIPO_HB_PSIQUICA:
            lanzarEvento(EVENT_CHARACTER_SECCION_PSIQUICA);
            break;
        default:
            lanzarEvento(EVENT_CHARACTER_SECCION_SECUNDARIAS);
            lanzarEvento(EVENT_CHARACTER_SECCION_KI);
            break;
    }
}

/**
 *
 * @param {number} gnosis
 * @param {Personaje} personaje
 */
function removeEfectosGnosis(gnosis, personaje) {
    //noinspection FallThroughInSwitchStatementJS
    switch (gnosis) {
        case 50:
        case 45:
        case 40:
        case 35:
        case 30:
        case 25:
            personaje.removeFlag(FLAG_PUEDE_USAR_PODERES_MONSTRUO);
        default:
            //nada
            break;
    }
}

/**
 *
 * @param {number} gnosis
 * @param {Personaje} personaje
 */
function aplicaEfectosGnosis(gnosis, personaje) {
    //noinspection FallThroughInSwitchStatementJS
    switch (gnosis) {
        case 50:
        case 45:
        case 40:
        case 35:
        case 30:
        case 25:
            personaje.setFlag(FLAG_PUEDE_USAR_PODERES_MONSTRUO);
        default:
            //nada
            break;
    }
}

/**
 *
 * @param {Personaje} personaje
 * @param {ArmaComprada} arma
 */
function getAtaqueFinalConArma(personaje,arma) {
    var ataqueBase = personaje[HB_ATAQUE].valorFinalActual();

    if (!personaje.hasArmaManejada(arma.arma.getNombre())) {
        var penalizador = -60;
        var catArma = arma.getCategoria();

        //si similar -20
        var tiposArmasConocidos = personaje.getTiposArmasConocidos(false);
        for (var i = 0; i < tiposArmasConocidos.length; i++) {
            if (catArma == tiposArmasConocidos[i]) {
                penalizador = -20;
                break;
            }
        }

        if (penalizador == -60) {
            //si mixta -40
            var tiposArmasMixtos = getTiposMixtos(personaje_actual.getTiposArmasConocidos(true));
            for (i = 0; i < tiposArmasMixtos.length; i++) {
                if (catArma == tiposArmasMixtos[i]) {
                    penalizador = -20;
                    break;
                }
            }

        }

        ataqueBase += penalizador;
    }

    ataqueBase += arma.getModificadorAtaqueParada();
    return ataqueBase;
}


/**
 *
 * @param {Personaje} personaje
 * @param {ArmaComprada} arma
 */
function getDefensaFinalConArma(personaje,arma) {
    var paradaBase = personaje[HB_PARADA].valorFinalActual();
    if (!personaje.hasArmaManejada(arma.arma.getNombre())) {
        var penalizador = -60;
        var catArma = arma.getCategoria();

        //si similar -20
        var tiposArmasConocidos = personaje.getTiposArmasConocidos(false);
        for (var i = 0; i < tiposArmasConocidos.length; i++) {
            if (catArma == tiposArmasConocidos[i]) {
                penalizador = -20;
                break;
            }
        }

        if (penalizador == -60) {
            //si mixta -40
            var tiposArmasMixtos = getTiposMixtos(personaje_actual.getTiposArmasConocidos(true));
            for (i = 0; i < tiposArmasMixtos.length; i++) {
                if (catArma == tiposArmasMixtos[i]) {
                    penalizador = -20;
                    break;
                }
            }

        }

        paradaBase += penalizador;
    }

    paradaBase += arma.getModificadorAtaqueParada();
    return paradaBase;
}

/**
 *
 * @param {Personaje} personaje
 * @param {ArmaComprada} arma
 */
function getDa??oFinalConArma(personaje,arma) {
    var da??o = arma.getDa??oBase();
    switch (arma.getBonoDa??o()) {
        case BONO_FUE:
        default:
            da??o += personaje.getBonoCaracteristica(FUE);
            break;
        case BONO_POD:
            da??o += personaje.getBonoCaracteristica(POD);
            break;
    }

    return da??o;
}


/**
 *
 * @param {Personaje} personaje
 * @param {ArmaComprada} arma
 */
function getTurnoFinalConArma(personaje,arma) {
    return personaje.getTurnoFijo() + arma.getVelocidad();
}

function getExplicacionTurnoFinalConArma(personaje, arma) {
    return personaje.getExplicacionTurnoFijo() + " " + modificadorBonito(arma.getVelocidad()) + " (" + _l(UI_ARMA) + ")";
}


/**
 *
 * @param {Personaje} personaje
 */
function getPenalizadorTodaAccionPorArmaduraActual(personaje) {
    var capasArmadura = [];
    for (var i = 0; i < personaje.armaduras.length; i++) {
        if (personaje.armaduras[i].isEquipado()) {
            capasArmadura.push(personaje.armaduras[i]);
        }
    }

    return penalizadorTodaAccionPorArmadura(personaje,capasArmadura);
}

/**
 *
 * @param {Personaje} personaje
 */
function getPenalizadorNaturalPorArmaduraActual(personaje) {
    var capasArmadura = [];
    for (var i = 0; i < personaje.armaduras.length; i++) {
        if (personaje.armaduras[i].isEquipado()) {
            capasArmadura.push(personaje.armaduras[i]);
        }
    }
    return penalizadorNaturalPorArmadura(personaje,capasArmadura);
}

/**
 *
 * @param {Personaje} personaje
 */
function getPenalizadorMovimientoPorArmaduraActual(personaje) {
    var capasArmadura = [];
    for (var i = 0; i < personaje.armaduras.length; i++) {
        if (personaje.armaduras[i].isEquipado()) {
            capasArmadura.push(personaje.armaduras[i]);
        }
    }

    return penalizadorMovimientoPorArmadura(personaje,capasArmadura);
}

/*
25:

 Poderes de monstruo: A partir de esta cantidad, un ser puede utilizar sus
 PD para desarrollar libremente cualquier poder descrito en el Cap??tulo 26: La
 creaci??n de seres. Si sube de nivel, puede mejorar los que posee o adquirir
 otros nuevos, incluso si difieren de los de su especie o etnia.

30:
 Percepci??n expandida: El ser percibe el mundo de
 un modo ligeramente diferente. Por su cercan??a con el
 plano espiritual, es capaz de sentir las alteraciones de
 la realidad en el entorno y leer el aura de la gente. De
 este modo, aprecia f??cilmente el estado de ??nimo de las
 personas y puede discernir si en un lugar determinado
 se han desencadenado habilidades sobrenaturales, y
 en qu?? medida.
 ??? Control elemental: Si la criatura es un
 elemental, puede afectar parcialmente el medio
 al que es af??n. Autom??ticamente, influye en un
 n??mero de intensidades equivalente a una tercera
 parte de su Gnosis. Tambi??n ejerce cierta influencia
 en cualquier ser de su elemento con un Gnosis
 inferior al suyo. Si no es un elemental, puede dominar
 intensidades de cualquier tipo, pero este se reduce s??lo
 a una sexta parte en lugar de a una tercera.
 ??? Bonos de creaci??n: Otorga un Punto de
 Creaci??n adicional, o en su defecto 50 PD extras, para
 obtener poderes y habilidades esenciales de criaturas
 sobrenaturales.

    35:
 ??? Influir en la realidad: Exteriorizando su poder, la
 entidad modifica peque??os aspectos de la realidad circundante,
 alterando a voluntad cualquier objeto inanimado con una presencia inferior al
 doble de su Gnosis (es decir, si tuviera 35, influir??a en cosas cuya presencia fuera
 65 o inferior). S??lo puede influir en un objeto por asalto, siempre y cuando no
 est?? en contacto con alguien vivo. Esta habilidad tiene como l??mite un uso al d??a
 por cada punto de Gnosis que posea.
 ??? Inmortal: La entidad ha superado la muerte en muchos aspectos, y s??lo puede
 ser exterminada bajo ciertas circunstancias espec??ficas. Incluso si recibe da??os que
 disminuyan sus PV por debajo del estado de entre la vida y la muerte, simplemente
 permanecer?? inconsciente hasta recuperarse de las heridas. S??lo ser??n capaces de
 matarlo definitivamente las criaturas cuyo Gnosis no sea 25 puntos inferior al suyo.
 Por tanto, matar a una criatura con Gnosis 35 requiere a alguien de 10 o m??s, al igual
 que un ser con 40 morir??a s??lo a manos de un individuo que poseyera 15 puntos.
 ??? Presencia: Su mera presencia modifica el entorno, volvi??ndolo af??n a su
 naturaleza. Por ejemplo, un elemental oscuro con Gnosis 35 o superior influir??a
 en el ambiente torn??ndolo tenebroso y sombr??o.
 ??? Bonos de creaci??n: Otorga tres Puntos de Creaci??n adicionales o, en
 su defecto, 150 PD extras para obtener poderes y habilidades esenciales de
 criaturas sobrenaturales.

    40:
 ??? ??uspice: Es capaz de influir en el entorno y en el curso de los
 acontecimientos de manera favorable para ??l. Por tanto, obtiene un ??xito
 autom??tico en cualquier control de una habilidad secundaria que
 no requiera conocimientos o se enfrente directamente a la de otro
 individuo. Esta capacidad no le permite superar directamente
 la dificultad Inhumano o superior. En el caso de los controles
 enfrentados, gana un bono de +10 por cada 5 puntos de Gnosis
 por los que supere a su adversario, incluyendo las habilidades
 de combate.
 ??? Avatar: La entidad puede erigir varios avatares de s?? misma
 proyectando una parte de su conciencia a distancia. Crea
 uno por cada diez puntos de Gnosis que posea, pero es
 incapaz de generar dos de ellos a la vez en el mismo
 lugar. Un avatar tiene aproximadamente entre cinco
 y diez niveles por debajo del ser original y 15 puntos
 menos de Gnosis. Su apariencia y forma es variable,
 pero sus poderes y habilidades deben ser al menos
 parecidos en todas sus encarnaciones. Si el alma de
 un avatar resulta destruida o este es asesinado por un
 ser con un Gnosis igual o superior al suyo, la entidad
 pierde para siempre la capacidad de manifestarlo.
 ??? Bonos de creaci??n: Otorga seis Puntos de
 Creaci??n adicionales o, en su defecto, 300 PD extras
 para obtener poderes y habilidades esenciales de
 criaturas sobrenaturales.

    45:
 ??? Caminar entre mundos: Estando m??s all?? de la
 influencia del flujo de almas, la entidad es capaz de moverse
 libremente entre el mundo espiritual, el material o la Vigilia.
 Incluso si fallece, puede volver a manifestarse con todo su
 poder tras cierto tiempo (dependiendo de las circunstancias
 de su fallecimiento, puede costarle desde simples d??as a
 siglos enteros), salvo si su alma es destruida o muere a
 manos de alguien con un Gnosis superior al suyo.
 ??? Bonos de creaci??n: Otorga diez Puntos de
 Creaci??n adicionales o, en su defecto, 500 PD extras
 para obtener poderes y habilidades esenciales de criaturas sobrenaturales.

    50:
 ??? Bonos de creaci??n: Otorga quince Puntos de Creaci??n adicionales o,
 en su defecto, 750 PD extras para obtener poderes y habilidades esenciales de
 criaturas sobrenaturales.

    */