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
FWC: 2, 4, 7, 8
CC: 1, 2, 3, 4, 5, 8, 9, 10, 12, 13, 14
MEX: 1, 5
CZE: 3, 13
CAN: 4
BIH: 13, 20
SUI: 20
BRA: 4, 14
MAR: 1
HAI: 14, 17
USA: 1, 5, 14
PAR: 6
TUR: 2, 4, 6, 13
CUW: 13, 15
NED: 7, 13
SWE: 9, 14, 19, 20
TUN: 5, 18, 19
BEL: 4, 13, 19
EGY: 2, 7, 13
IRN: 6, 11
NZL: 1, 13
CPV: 4, 5, 8
URU: 11
FRA: 15
IRQ: 1, 4, 6, 7, 11, 16
ARG: 3
ALG: 8
AUT: 3, 10, 12
JOR: 3, 6
POR: 4, 6
COD: 1, 7, 16
UZB: 5, 16
COL: 13, 18
ENG: 18
GHA: 5, 17
`;

// Total de figurinhas do álbum completo (barra de progresso).
const TOTAL_FIGURINHAS = 994;

// Preenchido automaticamente pelo index.html
const MEU_ALBUM = { repetidas: {}, faltantes: [] };
