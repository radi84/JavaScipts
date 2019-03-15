class ObjFomulario{
        
    constructor(marca, modelo, ano, alimentacao, peso, motor, versao, transmicao, direcao, freios){

        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.alimentacao = alimentacao
        this.peso = peso
        this.motor = motor
        this.versao = versao
        this.transmicao = transmicao
        this.direcao = direcao
        this.freios = freios
        

    }

}

class SalvaLocalStorage{

    //gerador de id
    constructor(){
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', 0)
        }
    }

    getprxId(){// neste caso o get se faz necassario pois ele atualizara o id
        let prxId = localStorage.getItem('id')
        return parseInt(prxId) + 1 
    }

    salve(cadastro){

        let id = this.getprxId()

        localStorage.setItem(id, JSON.stringify(cadastro))

        localStorage.setItem('id', id)
    }

   

}

let salveDados = new SalvaLocalStorage()

    // recupera os valores dos dades
function dadosForm(){

    let marca = document.querySelector('#marca')
    let modelo = document.querySelector('#modelo')
    let ano = document.querySelector('#ano')
    let alimentacao = document.querySelector('#alimentacao')
    let peso = document.querySelector('#peso')
    let motor = document.querySelector('#motor')
    let versao = document.querySelector('#versao')
    let transmicao = document.querySelector('#transmicao')
    let direcao = document.querySelector('#direcao')
    let freios = document.querySelector('#freios')

    let dados = new ObjFomulario(

        marca.value,
        modelo.value,
        ano.value,
        alimentacao.value,
        peso.value,
        motor.value,
        versao.value,
        transmicao.value,
        direcao.value,
        freios.value,
    )

    salveDados.salve(dados)
}

