AOS.init();

const dataEvento = new Date("Apr 23, 2025 19:00:00");
const timeStampDoEvento = dataEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMs= 1000 * 60 * 60;
    const minutoEmMs= 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMS);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMS) / horaEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if(distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "Evento realizado!";
    }

}, 1000);