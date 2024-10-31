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
    if (equipo === "EquipoA") {
        const puntosHandball = parseInt(Handball_EquipoA.value, 10) || 0;
        const puntosAjedrez = parseInt(Ajedrez_EquipoA.value, 10) || 0;
        const puntosResistencia = parseInt(Resistencia_EquipoA.value, 10) || 0;

        EquipoA.punto += puntosHandball + puntosAjedrez + puntosResistencia;
    } else if (equipo === "EquipoB") {
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
            EquipoA: ${EquipoA.punto} <br>
            EquipoB: ${EquipoB.punto} <br>
        `;

        if (EquipoA.punto > EquipoB.punto) {
            OutputResultado.innerHTML += "¡El Equipo A es el ganador :)!";
        } else if (EquipoA.punto < EquipoB.punto) {
            OutputResultado.innerHTML += "¡El Equipo B es el ganador :)!";
        } else {
            OutputResultado.innerHTML += "¡Es un empate! ;(";
        }
    }
}