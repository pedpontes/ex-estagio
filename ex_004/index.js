class Corrida {
    constructor(vel, pauseTemp, pausas, distancia) {
        this.vel = vel;
        this.pauseTemp = pauseTemp;
        this.qtdPausas = pausas;
        this.distanciaCity = distancia;
    }
}
const car = new Corrida(110, 5, 0, 0)
const cam = new Corrida(80, 5, 2, 100)

// Sabemos que o tempo do caminho de ambos é igual, portanto igualaremos a eq. do tempo em função da velocidade;
// dt1 = dt2 => dS1/110 = dS2/80 , em que d é 'delta' (diferença);
// Podemos dizer que, dS2 = (distanciaCity - dS1), já que a distancia que o carro percorreu, o caminhão nao percorreu ainda;
// Manipulando a expressão chegaremos em dS1 = (110/80)*(100-dS1);
// => dS1 = (110/80)*100 - (110/80)*dS1 => dS1 + (110/80)*dS1 = (110/80)*100 => dS1 = ((110/80)*100)/(1+(110/80));

const operacao = car.vel / cam.vel;
let dS1 = (operacao * cam.distanciaCity) / (1 + operacao);

// Podemos agora encontrar o tempo que o carro demorou para percorrer dS1, dt1 = dS1/velCar e passaremos o valor para minutos;

let dt1 = (dS1 / car.vel) * 60;

// Somaremos agora o tempo de pausa ao tempo do carro para saber quanto ele ainda andaria antes de encontrar com o caminhão;

dt1 += (cam.pauseTemp * cam.qtdPausas);

// Passaremos agora o dt de minutos para horas

dt1 /= 60;

// Encontraremos qual a distancia percorrida pelo carro com a pausa do caminhão;

dS1 = dt1 * car.vel;

// Calcularemos a distancia de ribeirão preto ao carro e ao caminhão,
// já que eles estão em um mesmo ponto da estrada, a distancia de ambos entre a cidade de Ribeirão são idênticas; 

const dRibeirao = {
    dCar: dS1 - car.distanciaCity,
    dCam: dS1
};



if (dRibeirao.dCar < dRibeirao.dCam) console.log("O carro esta mais proximo de Ribeirão.");
else if (dRibeirao.dCar > dRibeirao.dCam) console.log("O caminhão esta mais proximo de Ribeirão.");
else console.log("Os dois estão a mesma distancia de Ribeirão.");

