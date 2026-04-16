const formulario = document.querySelector(`#meu-formulario`);

function validarformulario(event){
    event.preventDefault();


    const nome = document.querySelector(`#nome`).value;
    const email = document.querySelector(`#email`).value;
    const msg = document.querySelector(`#msg`).value;
if (nome === "" || email ==="" || msg ==="") {
    alert("por favar, preencha todos os campos antes de enviar.");
} else {
    alert(`obrigado, ${nome}! sua mensagem foi enviada com sucesso.`);
    formulario.reset();
}
}
formulario.addEventListener(`submit`,validarformulario); 
 
const btnTema = document.querySelector(`#btn-tema`);
const body = document.body;


function alternarTema(){
    body.classList.toggle(`dark-theme`);

if (body.classList.contains(`dark-theme`)) {
    btnTema.innerText = "claro";
} else {
    btnTema.innerText = "Escuro";
}

}
btnTema.addEventListener(`click`,alternarTema);

const meusprojetos = [
    {
     titulo:"projeto 01 - E-commerce",
     discrição: "uma loja virtual feita com html,css e javascript.",
     link: "https://github.com/Raysousa/ecommerce "   
    },
    {
        titulo: " projeto 02 - portifólio",
        discrição: " meu portifólio de apresentação feito com tecnologias modernas.",
        link:"https://github.com/Raysousa/portifólio"
    },
     {
        titulo: "projeto 03 - Registro de ponto",
        discrição: "sistema web para registar o ponto dos funcionários das empresas.",
        link: "https://github.com/Raysousa/registrodeponto"
     }  
       
];

function renderizarprojetos(){
    const container = document.querySelector(`.projetos-container`);
    container.innerHTML = "";


meusprojetos.forEach(projeto=>{
    const cardHTML = `
    <article class= "card-projeto">
    <h3>${projeto.titulo}</h3>
<p>${projeto.discrição}</p>
<a href="${projeto.link}" target"_blank>ver no github</a>
</article>
     `;
   container.innerHTML += cardHTML;
     
});


}
   
 renderizarprojetos();           
        
    
 
    




