
class ObjFormulario{
    constructor(nomeAluno, materia, notaP1, notaP2, notaTexte, notaTb, media){
        this.nomeAluno = nomeAluno
        this.materia = materia
        this.notaP1 = notaP1
        this.notaP2 = notaP2
        this.notaTexte = notaTexte
        this.notaTb =notaTb
       // this.media = media
    }

}

class SD{

    constructor(){
        let id = localStorage.getItem('id')

        if (id === null){
            localStorage.setItem('id', 0)
        }
    }
    // gerador de id
    getProximoId(){
        let proximoId = localStorage.getItem('id')// getItem recupera um dado
        return parseInt(proximoId) + 1
    }

    // para slvar
    salve(desp){
               
        let id = this.getProximoId()// obj do gerador de id

        localStorage.setItem(id, JSON.stringify(desp))// setItem inseri um dado
       
        localStorage.setItem('id', id)
    }
}

let salvarDados = new SD()// instanciamento do Obj SD


function inscFormulario() {
    
    let nomeAluno = document.querySelector('#nomeAluno')    
    let materia = document.querySelector('#materia')
    let notaP1 = document.querySelector('#notaP1')
    let notaP2 = document.querySelector('#notaP2')
    let notaTexte = document.querySelector('#notaTexte')
    let notaTb = document.querySelector('#notaTb')
   // let media = document.querySelector('#media')

    let formulario = new ObjFormulario(
        nomeAluno.value,
        materia.value,
        notaP1.value,
        notaP2.value,
        notaTexte.value,
        notaTb.value,
       // media.value
    )
    
    // chama o Obj salvarDados junto com a intancia do SD salve e o parametro formulario
    salvarDados.salve(formulario)

}

