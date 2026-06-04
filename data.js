// ─────────────────────────────────────────────────────────
//  MINHAS FIGURINHAS — Copa 2026
//  Para atualizar: copie a mensagem do app Moovtech e cole
//  dentro das crases abaixo (pode colar a mensagem inteira —
//  saudação e link são ignorados automaticamente).
// ─────────────────────────────────────────────────────────

const REPETIDAS_TEXT = `
MEX: 7(1x), 19(1x)
RSA: 2(2x), 4(3x), 5(1x), 9(1x), 14(1x), 19(1x), 20(2x)
KOR: 4(1x), 5(1x), 7(1x), 8(1x), 10(1x), 12(1x), 20(1x)
CZE: 8(1x)
CAN: 6(1x), 17(1x), 18(1x)
BIH: 8(1x), 11(1x)
QAT: 7(1x), 12(1x), 14(3x), 15(2x), 16(3x), 20(2x)
SUI: 3(1x), 5(1x), 6(1x), 7(2x), 8(1x), 10(2x), 12(1x)
BRA: 3(1x), 5(1x), 6(1x), 7(1x), 12(1x), 15(1x)
MAR: 4(1x), 14(1x)
HAI: 4(1x), 10(1x), 15(3x), 19(1x), 20(1x)
SCO: 3(1x), 5(1x), 11(1x)
USA: 15(1x), 16(1x)
PAR: 18(1x), 19(1x)
AUS: 3(1x), 4(1x), 8(2x), 10(1x), 11(1x), 12(1x), 15(1x), 16(1x), 17(1x)
TUR: 6(1x), 10(1x), 12(3x), 13(2x), 15(1x), 17(2x), 20(1x)
GER: 12(1x)
CUW: 1(1x), 4(1x), 18(1x)
CIV: 2(1x), 3(1x), 7(1x), 9(1x), 14(1x), 19(1x), 20(1x)
ECU: 3(1x), 13(1x), 16(2x)
NED: 8(2x), 18(2x)
JPN: 2(1x), 4(1x), 6(1x), 10(1x), 15(1x), 19(1x)
SWE: 2(1x), 3(2x), 4(4x), 6(2x), 10(2x), 15(1x)
TUN: 1(1x), 6(2x), 10(1x), 12(1x), 13(2x)
BEL: 1(1x), 8(1x), 11(1x), 14(2x), 16(1x), 17(1x), 18(1x), 20(2x)
EGY: 4(1x), 9(1x), 11(1x), 15(1x), 16(1x), 17(1x)
IRN: 1(1x)
NZL: 4(2x)
ESP: 5(1x), 11(2x), 15(3x), 19(1x)
CPV: 7(1x), 17(1x)
KSA: 2(1x), 6(1x), 9(1x), 10(1x), 11(1x)
URU: 10(1x), 13(1x), 15(1x)
FRA: 3(1x), 7(1x), 8(1x), 9(1x), 10(1x), 16(1x), 20(2x)
SEN: 3(1x), 4(1x), 12(1x), 16(1x), 18(1x), 20(1x)
IRQ: 19(3x)
NOR: 5(1x), 8(1x), 11(1x), 15(1x), 19(1x)
ARG: 9(1x)
ALG: 9(1x), 13(2x), 14(1x), 18(1x), 19(1x)
AUT: 2(2x), 4(1x), 5(1x), 11(1x), 13(1x), 16(1x), 17(1x), 20(1x)
JOR: 4(1x), 8(1x)
POR: 20(1x)
COD: 6(1x), 8(1x), 9(1x)
UZB: 15(1x), 19(1x)
COL: 4(1x), 11(1x), 16(1x)
ENG: 5(2x), 9(1x), 11(1x)
CRO: 5(1x), 7(2x), 9(1x), 11(1x), 14(1x)
GHA: 14(1x), 19(1x)
`;

const FALTANTES_TEXT = `
FWC: 2, 4, 7, 8, 9, 13, 19
CC: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
MEX: 1, 5, 18
RSA: 8, 10, 12
KOR: 1, 9, 11, 13
CZE: 3, 5, 6, 9, 10, 11, 13
CAN: 4, 19
BIH: 9, 13, 15, 16, 18, 20
QAT: 3, 5, 6, 8
SUI: 4, 9, 16, 20
BRA: 1, 4, 10, 14, 18, 19
MAR: 1, 5, 13
HAI: 14, 17
SCO: 9, 12, 17
USA: 1, 3, 5, 9, 11, 14
PAR: 6
AUS: 7
TUR: 2, 4, 6, 13
GER: 17
CUW: 8, 10, 11, 13, 15, 17, 20
CIV: 16
ECU: 1, 7, 9, 14, 18
NED: 2, 4, 7, 13
JPN: 5, 8, 13
SWE: 5, 9, 14, 19, 20
TUN: 5, 9, 11, 15, 16, 18, 19
BEL: 4, 13, 19
EGY: 2, 3, 7, 8, 10, 12, 13
IRN: 2, 6, 10, 11
NZL: 1, 3, 13, 15
ESP: 7, 9
CPV: 1, 2, 4, 5, 8, 10, 15, 18
KSA: 17
URU: 11
FRA: 5, 15, 17
SEN: 5
IRQ: 1, 4, 6, 7, 9, 10, 11, 15, 16, 20
NOR: 13, 17, 20
ARG: 1, 3
ALG: 8
AUT: 1, 3, 10, 12, 15, 18, 19
JOR: 3, 6
POR: 4, 6, 7, 13, 14, 16, 18
COD: 1, 3, 7, 11, 16, 20
UZB: 5, 8, 9, 14, 16, 18, 20
COL: 13, 18, 19
ENG: 13, 14, 17, 18
CRO: 8, 20
GHA: 5, 6, 10, 17, 18
`;

// Total de figurinhas do álbum completo (barra de progresso).
const TOTAL_FIGURINHAS = 994;

// Preenchido automaticamente pelo index.html
const MEU_ALBUM = { repetidas: {}, faltantes: [] };
