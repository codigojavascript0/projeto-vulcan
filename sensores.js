function verificarTemperatura(temperaturas) {
    let soma = 0;

    for (let i = 0; i < temperaturas.length; i++) {
        soma += temperaturas[i];
    }

    let media = soma / temperaturas.length;

    if (media > 70) {
        return {
            media,
            resfriamento: "LIGAR RESFRIAMENTO"
        };
    } else {
        return {
            media,
            resfriamento: "Temperatura Normal"
        };
    }
}

module.exports = verificarTemperatura;
