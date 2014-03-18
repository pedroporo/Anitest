var TABLA_ESPECIAL = "Especial";
var TABLA_MANEJO_CATEGORIA = "TABLA_MANEJO_CATEGORIA";
var TABLA_SIN_EFECTO = "TABLA_SIN_EFECTO";
var TABLA_MANEJO_ARMAS = "TABLA_MANEJO_ARMAS";

var TABLA_ARMA_SIMILAR = "Arma Similar";
var TABLA_ARMA_MIXTA = "TABLA_ARMA_MIXTA";
var TABLA_ARMA_DISTINTA = "TABLA_ARMA_DISTINTA";
var TABLA_TIPOLOGIA = "TABLA_TIPOLOGIA";

tablasArmas_set.push(new TablaArmas( TABLA_ARMA_SIMILAR, "", TABLA_ARMA_SIMILAR_DESC, 10, TABLA_ESPECIAL, [TABLA_ARMA_SIMILAR], CATEGORIA_TABLA_ARMAS_GENERALES ));
tablasArmas_set.push(new TablaArmas( TABLA_ARMA_MIXTA, "", TABLA_ARMA_MIXTA_DESC, 15, TABLA_ESPECIAL, [TABLA_ARMA_MIXTA], CATEGORIA_TABLA_ARMAS_GENERALES ));
tablasArmas_set.push(new TablaArmas( TABLA_ARMA_DISTINTA_DESARMADO, "", TABLA_ARMA_DISTINTA_DESARMADO_DESC, 20, TABLA_ESPECIAL, [TABLA_ARMA_DISTINTA], CATEGORIA_TABLA_ARMAS_GENERALES ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_TIPOLOGIA, "", TABLA_TABLA_DE_TIPOLOGIA_DESC, 50, TABLA_ESPECIAL, [TABLA_TIPOLOGIA], CATEGORIA_TABLA_ARMAS_GENERALES ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_PROYECTILES, "", TABLA_TABLA_DE_PROYECTILES_DESC, 50, TABLA_MANEJO_CATEGORIA, [CAT_ARMA_PROYECTILES], CATEGORIA_TABLA_ARMAS_GENERALES ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_LANZAMIENTO, "", TABLA_TABLA_DE_LANZAMIENTO_DESC, 50, TABLA_MANEJO_CATEGORIA, [CAT_ARMA_LANZAMIENTO], CATEGORIA_TABLA_ARMAS_GENERALES ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_ARMAS_IMPROVISADAS, "", TABLA_TABLA_DE_ARMAS_IMPROVISADAS_DESC, 50, TABLA_SIN_EFECTO, [], CATEGORIA_TABLA_ARMAS_GENERALES ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_ASESINO, "", TABLA_TABLA_DE_ASESINO_DESC, 50, TABLA_MANEJO_ARMAS, [ARMA_ESPADA_CORTA,ARMA_BALLESTA_MANO,ARMA_GARROTE,ARMA_CERBATANA,ARMA_ESTILETE], CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_BARBARO, "", TABLA_TABLA_DE_BARBARO_DESC, 50, TABLA_MANEJO_ARMAS, [ARMA_HACHA_GUERRA,ARMA_HACHA_DOS_MANOS,ARMA_MANDOBLE,ARMA_ESPADA_BASTARDA,ARMA_MAZA_PESADA], CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_CABALLERO, "", TABLA_TABLA_DE_CABALLERO_DESC, 50, TABLA_MANEJO_ARMAS, [ARMA_ESPADA_LARGA,ARMA_LANZA_CABALLERIA,ARMA_MAZA,ARMA_ESPADA_BASTARDA,ARMA_ESCUDO], CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_NOMADA, "", TABLA_TABLA_DE_NOMADA_DESC, 50, TABLA_MANEJO_ARMAS, [ARMA_DAGA,ARMA_TURCUS,ARMA_ARCO_LARGO,ARMA_CIMITARRA,ARMA_LANZA], CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_GLADIADOR, "", TABLA_TABLA_DE_GLADIADOR_DESC, 50, TABLA_MANEJO_ARMAS, [ARMA_ESPADA_CORTA,ARMA_RED_GLADIADOR,ARMA_RODELA,ARMA_TRIDENTE,ARMA_LATIGO], CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_CAZADOR, "", TABLA_TABLA_DE_CAZADOR_DESC, 50, TABLA_MANEJO_ARMAS, [ARMA_JABALINA,ARMA_ARCO_LARGO,ARMA_ARCO_CORTO,ARMA_ARCO_LARGO_COMPUESTO,ARMA_LANZA,ARMA_BOLEADORAS], CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_SOLDADO, "", TABLA_TABLA_DE_SOLDADO_DESC, 50, TABLA_MANEJO_ARMAS, [ARMA_BALLESTA,ARMA_ESPADA_LARGA,ARMA_ALABARDA,ARMA_LANZA,ARMA_ESCUDO], CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_NINJA, "", TABLA_TABLA_DE_NINJA_DESC, 50, TABLA_MANEJO_ARMAS, [ARMA_KATANA,ARMA_TANTO,ARMA_GARRAS,ARMA_SHURIKEN,ARMA_KUSARI_GAMA], CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_DUELISTA, "", TABLA_TABLA_DE_DUELISTA_DESC, 50, TABLA_MANEJO_ARMAS, [ARMA_ESTOQUE,ARMA_FLORETE,ARMA_DAGA_PARADA,ARMA_SABLE,ARMA_ESPADA_LARGA], CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_ABORIGEN, "", TABLA_TABLA_DE_ABORIGEN_DESC, 50, TABLA_MANEJO_ARMAS, [ARMA_JABALINA,ARMA_LANZA,ARMA_ESCUDO_CORPORAL,ARMA_ARCO_LARGO,ARMA_ARCO_CORTO,ARMA_ARCO_LARGO_COMPUESTO,ARMA_CERBATANA], CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_PIRATA, "", TABLA_TABLA_DE_PIRATA_DESC, 50, TABLA_MANEJO_ARMAS, [ARMA_ARPON,ARMA_RED_GLADIADOR,ARMA_GARFIO,ARMA_SABLE,ARMA_HACHA_MANO], CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_BANDIDO, "", TABLA_TABLA_DE_BANDIDO_DESC, 50, TABLA_MANEJO_ARMAS, [ARMA_DAGA,ARMA_BALLESTA,ARMA_ESPADA_CORTA,ARMA_MAZA,ARMA_GARROTE], CATEGORIA_TABLA_ARMAS_ARQUETÍPICAS ));
tablasArmas_set.push(new TablaArmas( TABLA_BATTO_JUTSU_IAI_JUTSU, "", TABLA_BATTO_JUTSU_IAI_JUTSU_DESC, 30, TABLA_SIN_EFECTO, [], CATEGORIA_TABLA_ARMAS_ESTILOS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_AREA, "", TABLA_TABLA_DE_AREA_DESC, 50, TABLA_SIN_EFECTO, [], CATEGORIA_TABLA_ARMAS_ESTILOS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_PRECISION, "", TABLA_TABLA_DE_PRECISION_DESC, 50, TABLA_SIN_EFECTO, [], CATEGORIA_TABLA_ARMAS_ESTILOS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_DESARME, "", TABLA_TABLA_DE_DESARME_DESC, 40, TABLA_SIN_EFECTO, [], CATEGORIA_TABLA_ARMAS_ESTILOS ));
tablasArmas_set.push(new TablaArmas( TABLA_TABLA_DE_ATAQUE_ENCADENADO, "", TABLA_TABLA_DE_ATAQUE_ENCADENADO_DESC, 50, TABLA_SIN_EFECTO, [], CATEGORIA_TABLA_ARMAS_ESTILOS ));