let EquipoA = { punto: 0 };
let EquipoB = { punto: 0 };

const Handball_EquipoA = document.getElementById('handball-a') as HTMLInputElement;
const Ajedrez_EquipoA = document.getElementById('ajedrez-a') as HTMLInputElement;
const Resistencia_EquipoA = document.getElementById('resistencia-a') as HTMLInputElement;

const Handball_EquipoB = document.getElementById('handball-b') as HTMLInputElement;
const Ajedrez_EquipoB = document.getElementById('ajedrez-b') as HTMLInputElement;
const Resistencia_EquipoB = document.getElementById('resistencia-b') as HTMLInputElement;

const OutputResultado = document.getElementById('resultado') as HTMLParagraphElement;

function agregarPuntos(equipo: string) {
    if (equipo === "Equipo A") {
        const puntosHandball = parseInt(Handball_EquipoA.value, 10) || 0;
        const puntosAjedrez = parseInt(Ajedrez_EquipoA.value, 10) || 0;
        const puntosResistencia = parseInt(Resistencia_EquipoA.value, 10) || 0;

        EquipoA.punto += puntosHandball + puntosAjedrez + puntosResistencia;
    } else if (equipo === "Equipo B") {
        const puntosHandball = parseInt(Handball_EquipoB.value, 10) || 0;
        const puntosAjedrez = parseInt(Ajedrez_EquipoB.value, 10) || 0;
        const puntosResistencia = parseInt(Resistencia_EquipoB.value, 10) || 0;

        EquipoB.punto += puntosHandball + puntosAjedrez + puntosResistencia;
    }

}

function mostrarResultados() {
    if (OutputResultado) {
        OutputResultado.innerHTML = `
            Puntos Totales:<br>
            Equipo A: ${EquipoA.punto} <br>
            Equipo B: ${EquipoB.punto} <br>
        `;

        if (EquipoA.punto > EquipoB.punto) {
            OutputResultado.innerHTML += "¡Equipo A está ganando!";
        } else if (EquipoA.punto < EquipoB.punto) {
            OutputResultado.innerHTML += "¡Equipo B está ganando!";
        } else {
            OutputResultado.innerHTML += "¡Es un empate!";
        }
    }
}