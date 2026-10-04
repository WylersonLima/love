 const wrapper =  document.querySelector(".wrapper")
 const pergunta = document.querySelector(".pergunta")
 const gif = document.querySelector(".gif")
 const btnSim = document.querySelector(".btn-sim")
 const btnNao = document.querySelector(".btn-nao")

 btnSim.addEventListener("click", () =>{
    pergunta.innerHTML = "Assim que estiver livre da faculdade, me avise que irei buscar você! Te amo! hehehe ❤️";
  <div class="tenor-gif-embed" data-postid="677945992119586440" data-share-method="host" data-aspect-ratio="1" data-width="30%"><a href="https://tenor.com/view/hozier-gigglatafuneral-hoztwt-hoziheart-summerfest-gif-677945992119586440">Hozier Gigglatafuneral GIF</a>from <a href="https://tenor.com/search/hozier-gifs">Hozier GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                         
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
