function verificarMotor(velocidadeAtual, aceleracao){
    let velocidadeFinal = velocidadeAtual + aceleracao
        if (velocidadeFinal <= 100){
         return {
            velocidadeFinal,
            status: "Sistema Seguro";
         };
        }
        else{
            return{
                velocidadeFinal,
                status: "Sistema Inseguro";
            };
        }
}

module.exports = verificarMotor;
