var EquipoA = {
    punto: 0
};
var EquipoB = {
    punto: 0
};
var Handball_EquipoA = document.getElementById('handball-a');
var Ajedrez_EquipoA = document.getElementById('ajedrez-a');
var Resistencia_EquipoA = document.getElementById('resistencia-a');
var Handball_EquipoB = document.getElementById('handbal-b');
var Ajedrez_EquipoB = document.getElementById('ajedrez-b');
var Resistencia_EquipoB = document.getElementById('resistencia-b');
var OutputPuntosA = document.getElementById('resultados');
var OutputPuntosB = document.getElementById('resultados');
var EquipoGanador = document.getElementById('resultados');
function contar() {
    var valor_handball_A = parseInt(Handball_EquipoA.value, 10);
    var valor_ajedrez_A = parseInt(Ajedrez_EquipoA.value, 10);
    var valor_resistencia_A = parseInt(Resistencia_EquipoA.value, 10);
    var valor_handball_B = parseInt(Handball_EquipoB.value, 10);
    var valor_ajedrez_B = parseInt(Ajedrez_EquipoB.value, 10);
    var valor_resistencia_B = parseInt(Resistencia_EquipoB.value, 10);
    EquipoA.punto += valor_ajedrez_A + valor_handball_A + valor_resistencia_A;
    EquipoB.punto += valor_ajedrez_B + valor_handball_B + valor_resistencia_B;
    OutputPuntosA.innerText += EquipoA.punto.toString();
    OutputPuntosB.innerText += EquipoB.punto.toString();
    if (EquipoA.punto > EquipoB.punto) {
        EquipoGanador.innerText += 'Equipo A';
    }
    if (EquipoA.punto < EquipoB.punto) {
        EquipoGanador.innerText += 'Equipo B';
    }
}
