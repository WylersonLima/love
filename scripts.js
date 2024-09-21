 const wrapper =  document.querySelector(".wrapper")
 const pergunta = document.querySelector(".pergunta")
 const gif = document.querySelector(".gif")
 const btnSim = document.querySelector(".btn-sim")
 const btnNao = document.querySelector(".btn-nao")

 btnSim.addEventListener("click", () =>{
    pergunta.innerHTML = "Também te gosto! ❤️";
    gif.src = "https://gifman.net/wp-content/uploads/2019/06/ursinhos-fofos-coracoes.gif"
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