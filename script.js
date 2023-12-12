function multi(limite) { //Função para somar os múltiplos de 3 ou 5.
    let mulTres = 0;
    let mulCinco = 0;

    for (let i = 1; i < limite; i++) {
        if (i % 3 === 0) {
            mulTres += i;
        }

        if (i % 5 === 0) {
            mulCinco += i;
        }
    }

    return {
        mulTres,
        mulCinco,
        total: mulTres + mulCinco
    };
}

function calcularMultiplos() {
    const limiteInput = document.getElementById('limiteInput');
    const resultadoDiv = document.getElementById('resultado');

    // Retira o valor do limite do input
    const limite = parseInt(limiteInput.value);

    // Confirmação se o valor é válido
    if (!isNaN(limite) && limite >=0) {
        // Chama a função multi com o limite
        const resultado = multi(limite);

        // Exibe os resultados na div de resultado
        resultadoDiv.innerHTML = `
            <p>Soma total: ${resultado.total}</p>
        `;
    } else {
        // Se o valor não for válido, exibe uma mensagem de erro
        resultadoDiv.innerHTML = '<p>Por favor, insira um limite válido.</p>';
    }
}
