function clicar(){
var txtNome = document.querySelector ('#txtNome')
var nome = String(txtNome.value)
var txtEmail = document.querySelector ('#txtEmail')
var email = String(txtEmail.value)

var txtObservacao = document.querySelector ('#txtObservacao')
var observacao = String(txtObservacao.value)

var retorna = document.querySelector ('#retorna')

if(nome.length<1 || email.length<1){
    retorna.style.background="red"
    retorna.innerHTML = "Espaços obrigatórios não preenchidos!"

}else{
retorna.style.background="#4d68ff"
retorna.innerHTML = "Mensagem enviada com sucesso!"
}

}
