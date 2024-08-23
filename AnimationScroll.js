window.addEventListener("scroll",function(){

    let Introducaotext = this.document.querySelector('#Introducao-text')
    Introducaotext.classList.toggle('rolagem',window.scrollY > 0)

    let Text = this.document.querySelector('#SobreMim')
    Text.classList.toggle('rolagem',window.scrollY > 300)

    let Conhecintos = this.document.querySelector('#Conhecimentos')
    Conhecintos.classList.toggle('rolagem',window.scrollY > 1000)

    let Formulario = this.document.querySelector('#Formulario')
    Formulario.classList.toggle('rolagem',window.scrollY > 3500)

    let Projetos = this.document.querySelector('#Projetos')
    Projetos.classList.toggle('rolagem',window.scrollY > 2000)
})