// ─────────────────────────────────────────────────────────
//  MINHAS FIGURINHAS — Copa 2026
//  Para atualizar: copie a mensagem do app Moovtech e cole
//  dentro das crases abaixo (pode colar a mensagem inteira —
//  saudação e link são ignorados automaticamente).
// ─────────────────────────────────────────────────────────

const REPETIDAS_TEXT = `
MEX: 7(1x)
RSA: 2(2x), 4(2x), 5(1x), 9(1x), 19(1x), 20(1x)
BIH: 8(1x)
QAT: 12(1x), 13(1x), 14(1x), 15(2x), 16(2x), 19(1x)
SUI: 3(1x), 6(1x), 7(2x), 12(1x)
HAI: 10(1x), 15(2x)
SCO: 3(2x)
USA: 19(1x)
AUS: 10(1x), 11(1x)
CUW: 2(1x)
CIV: 7(1x), 9(1x), 20(1x)
ECU: 3(1x)
NED: 8(1x)
JPN: 3(1x)
SWE: 3(1x), 4(1x)
TUN: 18(1x)
BEL: 11(1x), 14(2x)
NZL: 4(1x)
CPV: 7(1x), 17(1x)
FRA: 8(1x), 9(1x), 14(1x)
SEN: 3(1x), 18(1x), 20(1x)
IRQ: 19(3x)
ARG: 9(1x)
ALG: 9(1x), 13(2x), 18(1x)
UZB: 17(1x)
CRO: 7(2x), 8(1x), 11(1x), 14(1x)
GHA: 14(1x)
PAN: 15(1x)
`;

const FALTANTES_TEXT = `
FWC: 4, 7, 8
CC: 1, 2, 3, 4, 8, 9, 10, 12, 13, 14
MEX: 1
CZE: 3, 13
CAN: 4
BIH: 13
SUI: 20
BRA: 4, 14
MAR: 1
USA: 1, 5, 14
PAR: 6
TUR: 2, 4, 6, 13
CUW: 13, 15
NED: 13
SWE: 9, 19, 20
TUN: 5, 19
BEL: 4, 13, 19
EGY: 2, 7
IRN: 6, 11
NZL: 1, 13
CPV: 4, 5, 8
IRQ: 1, 4, 6, 7, 11, 16
ALG: 8
AUT: 10, 12
JOR: 3
POR: 4, 6
COD: 1, 16
UZB: 5, 16
COL: 18
GHA: 17
`;

// Total de figurinhas do álbum completo (barra de progresso).
const TOTAL_FIGURINHAS = 994;

// Preenchido automaticamente pelo index.html
const MEU_ALBUM = { repetidas: {}, faltantes: [] };
