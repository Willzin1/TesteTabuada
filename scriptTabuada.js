var numero = document.getElementById('num1')
var botao = document.getElementById('btn')
var resul = document.getElementById('resultado')

botao.addEventListener('click', tabuada)

function tabuada() {
    let number = Number(numero.value);
    let i;
    let opcao;

    // let soma;  Não preciso necessáriamente criar essa váriavel para soma, posso fazer dentro do template string ${number*i}

    if (number == '' ){
        alert('Por favor digite um número!')
    }    

    resul.innerHTML = '' // Usei dessa forma para limpar cada vez que digitarmos o número da tabuada
    for (i = 1; i <= 10; i++){
        opcao = document.createElement('option')
        opcao.text = `${number} X ${i} = ${number*i}`
        resul.appendChild(opcao) // Isso adcionará um elemento filho que será a variavel opcao


        /* soma = (number * i)
         *    resul.innerHTML += `${number} X ${i} = ${soma}<br> `
         */
    }
}


