function verificarTemperatura (temperatura){
    let soma = 0;

    for (let i = 0; i < temperaturas.lenght; i++){


    }
    
    let media = soma / temperatura.lenght;
    
    if (media > 70){
        return {
            media,
            resfriamento: "LIGAR RESFRIAMENTO"

        };
    } else{
        return {
            media,
        resfriamento: "Temperatura Normal"
        }
    }
}
