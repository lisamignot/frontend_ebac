const form = document.getElementById('form-dados')
const valor1 = document.getElementById('ano1')
const valor2 = document.getElementById('ano2')

addEventListener('submit', function (e) {
    e.preventDefault()
    const anoNascimento = Number(valor1.value)
    const anoAtual = Number(valor2.value)
    const calculo = anoAtual - anoNascimento

    const mensagem = document.querySelector('#message')
    const resultado = document.querySelector('#result')

    valor1.value = ''
    valor2.value = ''

    if(anoAtual >= anoNascimento){
        resultado.innerHTML = `Tudo certo! A idade do usuário é <strong>${calculo}</strong> anos.`
        resultado.style.color = "blue"          
        } else {
        mensagem.innerHTML = `<p>O <strong>ano atual</strong> deve ser <strong>maior</strong> que o ano de nascimento!</p>`
        valor2.style.border = '1px solid red'
        resultado.style.display = 'none'    
    }
}) 