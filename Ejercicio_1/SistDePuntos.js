var EquipoA = { punto: 0 };
var EquipoB = { punto: 0 };
var Handball_EquipoA = document.getElementById('handball-a');
var Ajedrez_EquipoA = document.getElementById('ajedrez-a');
var Resistencia_EquipoA = document.getElementById('resistencia-a');
var Handball_EquipoB = document.getElementById('handball-b');
var Ajedrez_EquipoB = document.getElementById('ajedrez-b');
var Resistencia_EquipoB = document.getElementById('resistencia-b');
var OutputResultado = document.getElementById('resultado');
function agregarPuntos(equipo) {
    if (equipo === "Equipo A") {
        var puntosHandball = parseInt(Handball_EquipoA.value, 10) || 0;
        var puntosAjedrez = parseInt(Ajedrez_EquipoA.value, 10) || 0;
        var puntosResistencia = parseInt(Resistencia_EquipoA.value, 10) || 0;
        EquipoA.punto += puntosHandball + puntosAjedrez + puntosResistencia;
    }
    else if (equipo === "Equipo B") {
        var puntosHandball = parseInt(Handball_EquipoB.value, 10) || 0;
        var puntosAjedrez = parseInt(Ajedrez_EquipoB.value, 10) || 0;
        var puntosResistencia = parseInt(Resistencia_EquipoB.value, 10) || 0;
        EquipoB.punto += puntosHandball + puntosAjedrez + puntosResistencia;
    }
}
function mostrarResultados() {
    if (OutputResultado) {
        OutputResultado.innerHTML = "\n            Puntos Totales:<br>\n            Equipo A: ".concat(EquipoA.punto, " <br>\n            Equipo B: ").concat(EquipoB.punto, " <br>\n        ");
        if (EquipoA.punto > EquipoB.punto) {
            OutputResultado.innerHTML += "¡Equipo A está ganando!";
        }
        else if (EquipoA.punto < EquipoB.punto) {
            OutputResultado.innerHTML += "¡Equipo B está ganando!";
        }
        else {
            OutputResultado.innerHTML += "¡Es un empate!";
        }
    }
}
