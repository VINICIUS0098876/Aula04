'use strict'
// Fizemos um criador de blocos de numeros automatico.
const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosTriplo = document.getElementById('botao-mostrar-numeros-triplo')
const botaoMostrarNumerosImpar = document.getElementById('botao-mostrar-numeros-impar')
const botaoMostrarNumerosMultiplos = document.getElementById('botao-mostrar-numeros-multiplos')
const botaoMostrarNumerosMultiplos3Ou5 = document.getElementById('botao-mostrar-numeros-multiplos3-5')
const botaoMostrarNumerosPrimo = document.getElementById('botao-mostrar-numeros-primo')





function mostrarNumeros() {
    const numeros = document.getElementById('numeros').value.split(',') //Criou uma array, ou seja, um vetor ou matriz.
    const container = document.getElementById('container-mostrar-numeros')

    container.replaceChildren('') //Criou o reaplaceChildren para zerarmos a lista.

    const ultimoIndice = numeros.length //Criou uma variavel para pode usar no for.

    for (let contador = 0; contador < ultimoIndice; contador++) { //Criou o for para poder fazer a repetição.

        const novoSpan = document.createElement('span') //Criou um novo Span para os números poderem aparecer.

        novoSpan.textContent = numeros[contador]

        container.appendChild(novoSpan) //Criou o appendChild para adicionar o Span que foi criado na memoria no container que esta no HTML.
    }
}
botaoMostrarNumeros.addEventListener('click', mostrarNumeros)


function mostrarNumerosPares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-pares')

    container.replaceChildren('')

    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)

function mostrarNumerosTriplo() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-triplo')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador] * 3
        container.appendChild(novoSpan)

    }
}
botaoMostrarNumerosTriplo.addEventListener('click', mostrarNumerosTriplo)

function mostrarNumerosImpares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-impar')

    container.replaceChildren('')

    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador] * 1 + 1
            container.appendChild(novoSpan)
        } else if (numeros[contador] % 2 == 1) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador] * 1 + 2
            container.appendChild(novoSpan)
        }
    }
}
botaoMostrarNumerosImpar.addEventListener('click', mostrarNumerosImpares)

function mostrarNumerosMultiplos() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-multiplos')
    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 3 == 0 && numeros[contador] % 5 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}
botaoMostrarNumerosMultiplos.addEventListener('click', mostrarNumerosMultiplos)

function mostrarNumerosMultiplos3() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-multiplos3-5')
    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 3 == 0 || numeros[contador] % 5 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}
botaoMostrarNumerosMultiplos3Ou5.addEventListener('click', mostrarNumerosMultiplos3)

function mostrarNumerosPrimo() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-primo')
    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % numeros[contador] == 0 || numeros[contador] % 1 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}


botaoMostrarNumerosPrimo.addEventListener('click', mostrarNumerosPrimo)