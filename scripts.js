 const wrapper =  document.querySelector(".wrapper")
 const pergunta = document.querySelector(".pergunta")
 const gif = document.querySelector(".gif")
 const btnSim = document.querySelector(".btn-sim")
 const btnNao = document.querySelector(".btn-nao")

 btnSim.addEventListener("click", () =>{
    pergunta.innerHTML = "Assim que estiver livre da faculdade, me avise que irei buscar você! Te amo! hehehe ❤️";
    gif.src = data-width="60%" "https://media1.tenor.com/m/_nz04mDOaTcAAAAd/andrew-john-hozier-byrne-hozier.gif" 
 })

 btnNao.addEventListener("mouseover", () =>{
    const btnNaoRect = btnNao.getBoundingClientRect();
    const maxX = window.innerWidth - btnNaoRect.width;
    const maxY = window.innerHeight - btnNaoRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNao.style.left = randomX + 'px';
    btnNao.style.top = randomY + 'px';
    
 })
