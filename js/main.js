// Definindo visão de elementos.
let nav = document.getElementById('calMaluca').style.display = "none"
let regPoint = document.getElementById('registroPontos').style.display = "none"


// Conjunto de evento ouvintes, por click.
document.getElementById('btnCalculadoraMaluca').addEventListener('click',mudarCalculadora)
document.getElementById('btnVoltar').addEventListener('click',mudarCalculadora)
document.getElementById('respondendo').addEventListener('click',responder)


//Função que monta a operação matemática na aplicação.
function teclando(tecla){
    let operacao = document.getElementById('contaMath')
    operacao.value += tecla
}

//Função que troca de calculadora comum, para calculadora maluca.
function mudarCalculadora(){
    if(nav == "none"){
        document.getElementById('calNormal').style.display = "none"
        nav = document.getElementById('calMaluca').style.display = "block"
        ativarTimer()
    }
    else{
        nav = document.getElementById('calMaluca').style.display = "none"
        document.getElementById('calNormal').style.display = "block"
    }
}


// Função que resolve a operação informada.
function resolverOP(){
    const opAlvo = document.getElementById('contaMath').value

    const AD = opAlvo.includes("+")
    const SB = opAlvo.includes("-")
    const MU = opAlvo.includes("*")
    const DV = opAlvo.includes("/")

    if(AD == true){
        const opAlvoF = opAlvo.split("+")
        const resultado = parseInt(opAlvoF[0]) + parseInt(opAlvoF[1])
        document.getElementById('contaMath').value = resultado
        setTimeout(function(){
            document.getElementById('contaMath').value = ""
        },3000)
    }
    if(SB == true){
        const opAlvoF = opAlvo.split("-")
        const resultado = parseInt(opAlvoF[0]) - parseInt(opAlvoF[1])
        document.getElementById('contaMath').value = resultado
        setTimeout(function(){
            document.getElementById('contaMath').value = ""
        },3000)
    }
    if(MU == true){
        const opAlvoF = opAlvo.split("*")
        const resultado = parseInt(opAlvoF[0]) * parseInt(opAlvoF[1])
        document.getElementById('contaMath').value = resultado
        setTimeout(function(){
            document.getElementById('contaMath').value = ""
        },3000)
    }
    if(DV == true){
        const opAlvoF = opAlvo.split("/")
        const resultado = parseInt(opAlvoF[0]) / parseInt(opAlvoF[1])
        document.getElementById('contaMath').value = resultado
        setTimeout(function(){
            document.getElementById('contaMath').value = ""
        },3000)
    }
}


let numeroDeQuestoes = 20

//Ativar o timer e faz o texto de operação supresa ser atualizado, toda vez que o timer chegar a 0.
function ativarTimer(){
    criarOP()
    var count = 180
    function start(){
        if ((count - 1) >= 0) {
            count -= 1
            console.log(count)
            document.getElementById('mostraTimer').innerHTML = count
            setTimeout(start, 1000)

            if(count == 0){
                if(numeroDeQuestoes !=0){
                    numeroDeQuestoes -= 1
                    criarOP()
                    ativarTimer()
                }else{
                    regPoint = document.getElementById('registroPontos').innerHTML = "Acertos: " + pontos
                    regPoint = document.getElementById('registroPontos').style.display = "block"
                    return
                }
                
            }
        }

    }
    start()

}

//Função que cria a operação de forma randômica.
function criarOP(){
    const ops = ['+','-','*','/']
    const valor1 = Math.floor(Math.random() * 9)
    const valor2 = Math.floor(Math.random() * 9)
    const op = ops[Math.floor(Math.random() * 4)]

    const opResult = (valor1+op+valor2)

    document.getElementById('questao').innerHTML = opResult
}

// Função de checagem de resultado e operador de pontos.
let pontos = 0
function responder(){
    let questaoAlvo = document.getElementById('questao').innerHTML
    var resposta = document.getElementById('respostinha').value
    let resultado = eval(questaoAlvo)

    if(resultado == resposta){
        pontos += 1
    }
}
