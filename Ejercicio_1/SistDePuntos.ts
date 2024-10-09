interface puntos{
    punto: number;
}

let EquipoA : puntos = {
    punto: 0
}

let EquipoB : puntos = {
    punto: 0
}

const Handball_EquipoA = document.getElementById('handball-a') as HTMLInputElement;
const Ajedrez_EquipoA = document.getElementById('ajedrez-a') as HTMLInputElement;
const Resistencia_EquipoA = document.getElementById('resistencia-a') as HTMLInputElement;

const Handball_EquipoB = document.getElementById('handbal-b') as HTMLInputElement;
const Ajedrez_EquipoB = document.getElementById('ajedrez-b') as HTMLInputElement;
const Resistencia_EquipoB = document.getElementById('resistencia-b') as HTMLInputElement;

const OutputPuntosA = document.getElementById('resultados') as HTMLInputElement;
const OutputPuntosB = document.getElementById('resultados') as HTMLInputElement;

const EquipoGanador = document.getElementById('resultados') as HTMLInputElement;

function contar(): void{
    let valor_handball_A : number = parseInt(Handball_EquipoA.value, 10);
    let valor_ajedrez_A : number = parseInt(Ajedrez_EquipoA.value, 10);
    let valor_resistencia_A : number = parseInt(Resistencia_EquipoA.value, 10);

    let valor_handball_B : number = parseInt(Handball_EquipoB.value, 10);
    let valor_ajedrez_B : number = parseInt(Ajedrez_EquipoB.value, 10);
    let valor_resistencia_B : number = parseInt(Resistencia_EquipoB.value, 10);

    EquipoA.punto += valor_ajedrez_A + valor_handball_A + valor_resistencia_A;
    EquipoB.punto += valor_ajedrez_B + valor_handball_B + valor_resistencia_B;

    OutputPuntosA.innerText+= EquipoA.punto.toString();
    OutputPuntosB.innerText+= EquipoB.punto.toString();

    if (EquipoA.punto > EquipoB.punto){
        EquipoGanador.innerText += 'Equipo A';
    }

    if (EquipoA.punto < EquipoB.punto){
        EquipoGanador.innerText += 'Equipo B';
    }


}