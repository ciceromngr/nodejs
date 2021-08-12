// O osmódulo fornece métodos e propriedades de utilitários relacionados ao sistema operacional. Ele pode ser acessado usando:
const os = require('os');

// Retorna a arquitetura da CPU do sistema operacional para a qual o binário Node.js foi compilado. Os valores possíveis são 'arm',
const arch = os.arch();

// Retorna uma matriz de objetos contendo informações sobre cada núcleo lógico da CPU.
const cpus = os.cpus();
// const result__ = []
// for(const index in cpus) {
//     result__.push(cpus[index].model)
//     result__.push(cpus[index].speed)
//     // result__.push(cpus[index].times)
// }
// console.log(cpus)

// memoria livre , total de memoria em consumo
const { freemem, totalmem } = os;
const total = parseInt(totalmem() / 1024 / 1024)
const mem = parseInt(freemem() / 1024 / 1024)
const percents = parseInt((mem / total) * 100)

const stats = {
    arq: arch,
    model: `${cpus.map((e) => e.model).length} ---> ${cpus.map((e) => e.model)[0]}`,
    speed: `${cpus.map((e) => e.speed).length} ---> ${cpus.map((e) => e.speed)[0]}`,
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${percents}%`
}


console.log(stats)