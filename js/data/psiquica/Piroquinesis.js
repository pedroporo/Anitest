var discPiroquinesis = new DisciplinaPsiquica(
    DISCIPLINA_PIROQUINESIS,
    DISCIPLINA_DESCRIPCION_PIROQUINESIS
);

discPiroquinesis.addPoder(new PoderPsiquico(
    PSI_PODER_CREAR_FUEGO,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_1,INTENSIDAD_1,INTENSIDAD_3,INTENSIDAD_5,INTENSIDAD_7,INTENSIDAD_10,INTENSIDAD_13,INTENSIDAD_16,INTENSIDAD_20,INTENSIDAD_25]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    PSI_PODER_MITIGAR_FUEGO,
    1,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_1,INTENSIDAD_MENOS_1_RF_80,INTENSIDAD_MENOS_3_RF_100,INTENSIDAD_MENOS_5_RF_120,INTENSIDAD_MENOS_7_RF_140,INTENSIDAD_MENOS_10_RF_160,INTENSIDAD_MENOS_15_RF_180,INTENSIDAD_MENOS_20_RF_200,INTENSIDAD_MENOS_30_RF_220,INTENSIDAD_MENOS_40_RF_260]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    PSI_PODER_CONTROLAR_FUEGO,
    1,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_2,FATIGA_1,INTENSIDAD_4_RF_80,INTENSIDAD_6_RF_100,INTENSIDAD_8_RF_120,INTENSIDAD_12_RF_140,INTENSIDAD_16_RF_160,INTENSIDAD_20_RF_180, INTENSIDAD_25_RF_200,INTENSIDAD_30_RF_240]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    PSI_PODER_INMOLAR,
    1,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_4,FATIGA_2,FATIGA_1, PSI_INMOLAR_EFEC_4, PSI_INMOLAR_EFEC_5, PSI_INMOLAR_EFEC_6, PSI_INMOLAR_EFEC_7, PSI_INMOLAR_EFEC_8, PSI_INMOLAR_EFEC_9, PSI_INMOLAR_EFEC_10]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    PSI_PODER_MANTENIMIENTO_IGNEO,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_4,FATIGA_2,FATIGA_1,INTENSIDAD_5,INTENSIDAD_10,INTENSIDAD_15,INTENSIDAD_20,INTENSIDAD_30,INTENSIDAD_40,INTENSIDAD_50]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    PSI_PODER_INMUNIDAD_FUEGO,
    2,
    ACCION_PASIVA,
    true,
    "",
    [FATIGA_4,FATIGA_2,FATIGA_1,INTENSIDAD_5,INTENSIDAD_10,INTENSIDAD_15,INTENSIDAD_20,INTENSIDAD_30,INTENSIDAD_40,INTENSIDAD_50]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    PSI_PODER_BARRERA_IGNEA,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_6,FATIGA_4,FATIGA_2,FATIGA_1, PSI_BARRERA_IGNEA_EFEC_5, PSI_BARRERA_IGNEA_EFEC_6, PSI_BARRERA_IGNEA_EFEC_7, PSI_BARRERA_IGNEA_EFEC_8, PSI_BARRERA_IGNEA_EFEC_9, PSI_BARRERA_IGNEA_EFEC_10]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    PSI_PODER_AUMENTAR_TEMPERATURA,
    2,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_6,FATIGA_4,FATIGA_2,FATIGA_1,"+5??C / 1 kil??metro de radio","+10??C / 5 kil??metros de radio","+15??C / 10 kil??metros de radio","+20??C / 25 kil??metros de radio","+30??C / 50 kil??metros de radio","+40??C / 100 kil??metros de radio"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    PSI_PODER_CONSUMIR,
    3,
    ACCION_ACTIVA,
    false,
    "",
    [FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_6,FATIGA_4,"120 RF / Da??o autom??tico de 80","140 RF / Da??o autom??tico de 120","160 RF / Da??o autom??tico de 160","180 RF / Da??o autom??tico de 200","220 RF / Da??o autom??tico de 250"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    PSI_PODER_NOVA,
    3,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_16,FATIGA_12,FATIGA_8,"10 puntos de vida","20 puntos de vida","30 puntos de vida","40 puntos de vida","60 puntos de vida","80 puntos de vida","120 puntos de vida"]
));
discPiroquinesis.addPoder(new PoderPsiquico(
    PSI_PODER_FUEGO_MAYOR,
    3,
    ACCION_ACTIVA,
    true,
    "",
    [FATIGA_20,FATIGA_16,FATIGA_12,FATIGA_8,FATIGA_6,FATIGA_4,INTENSIDAD_30,INTENSIDAD_40,INTENSIDAD_50,INTENSIDAD_60]
));

disciplinasPsiquicas_set.push(discPiroquinesis);
