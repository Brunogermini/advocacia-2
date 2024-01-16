let btn = document.querySelector("#contato");
let formulario1 = document.querySelector("#formulario-contato");

btn.addEventListener("click", function () {
  if (formulario1.style.display === "block") {
    formulario1.style.display = "none";
  } else {
    formulario1.style.display = "block";
  }
  formulario1.className = "desaparecer";
});

let hamburguer = document.querySelector(".menu-mobile");


console.log(hamburguer)

function abrirMenu(event) {

  if(event.type === "touchstart")event.preventDefault()
    const nav = document.querySelector(".nav-bar");
    nav.classList.toggle('ativo')
   const ativo = nav.classList.contains("ativo")
   event.currentTarget.setAttribute('aria-expanded', ativo)
    if(ativo){
      event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    }
    else{
      event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}


hamburguer.addEventListener("click", abrirMenu);
hamburguer.addEventListener("touchstart", abrirMenu);
AOS.init();
