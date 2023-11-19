const links = document.querySelectorAll('.link')
//Passo 1 - pegar os botões no JS pra poder verificar quando o usuario clicar em cima de um deles 
const personagens = document.querySelectorAll('.modal')
//passo 4 - pegar os personagens no JS pra poder moatrar ou esconder ele

links.forEach((link, indice) => {
    link.addEventListener("click",  () => {
         //Passo 3 - verificar se já existe um botão 'selecionado', se sim, remover a seleção dele
        desselecionarLink();


         //passo 6 - verificar se já existe um personagem 'selecionado', se sim, remover a seleção dele
         desselecionarPersonagem();

          //Passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
          link.classList.add("selecionado")

           //passo 5 -add a classe selecionado no personagem que o usuário selecionou
        personagens[indice].classList.add("selecionado")
    })
})

function desselecionarLink() {
    const linkSelecionado = document.querySelector(".link.selecionado")
    linkSelecionado.classList.remove("selecionado")
}

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".modal.selecionado")
    personagemSelecionado.classList.remove("selecionado")
}

//Esconder o modal

const hidden = document.querySelectorAll(".modal")
const modal = document.querySelector(".modal.selecionado")
const closeButton = document.querySelector(".closeB.selecionado")
console.log(closeButton);

function esconder() {
    
}