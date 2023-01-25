// Slider arrows
const controls = document.querySelectorAll('.control'); // botões para passar as imagens pra esquerda e direita
let currentItem = 0; // item que está selecionado atualmente
const items = document.querySelectorAll('.item'); // pegando todas as imagens
const maxItems = items.length;// pegando o total de itens para facilitar em algumas contas
// Texts
const texts = document.querySelectorAll('.zindex');

// Slider pointers (Team)
const pointersTeam = document.querySelectorAll('.section-team-area button');
const sliderPointerTeam = document.querySelectorAll('.section-team .sliders');
// Reviews
const pointersReview = document.querySelectorAll('.section-rev button');
const sliderPointerReview = document.querySelectorAll('.section-reviews-global .sliders');
// console.log(pointersReview);
// console.log(sliderPointerReview);

// Toda vez que o botão direito ou esquerdo for pressionado...
controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left'); // Verificar se o botão esquerdo foi apertado
        // Se foi o botão da direita incrementar, ou seja, passar para a próxima imagem da direita
        isLeft ? currentItem -= 1 : currentItem +=1;

        if(currentItem >= maxItems) currentItem = 0; // Se passar do número máximo de imagens, voltar para a primeira
        // como não existe imagens em uma posição positiva, qnd tiver na primeira imagem e apertar o "left" ir para a última
        if(currentItem < 0 ) currentItem = maxItems - 1;

        // Percorrendo todas as imagens
        items.forEach(item => item.classList.remove('current-item'));
        texts.forEach(txt => txt.classList.remove('current-item-txt'));

            items[currentItem].scrollIntoView( {
                inline: "nearest",
                behavior: "auto"
            });
            items[currentItem].classList.add('current-item'); 

            texts[currentItem].scrollIntoView({
                inline: "nearest",
                behavior: "auto"
            })                                              
            texts[currentItem].classList.add('current-item-txt')
    });
});

pointersTeam.forEach((p, index) => {
    p.addEventListener('click', () => {
        // console.log('first', index);
        pointersTeam.forEach(p => p.classList.remove('active-pointer'));
        sliderPointerTeam.forEach(img => img.classList.remove('current-item-team'));
        exec(index);

        pointersTeam[index].classList.add('active-pointer');
        sliderPointerTeam[index].classList.add('current-item-team');
        // console.log('second', index);
    });
    function exec(indice){
        sliderPointerTeam[indice].scrollIntoView( {
            inline: "center",
            behavior: "auto",
            block:"nearest"
        });
    };
});

pointersReview.forEach((p,index) => {
    console.log(index);
    p.addEventListener('click', () => {
        pointersReview.forEach(p => p.classList.remove('active-pointer'));
        sliderPointerReview.forEach(img => img.classList.remove('current-item-review'));
        exec(index);

        pointersReview[index].classList.add('active-pointer');
        sliderPointerReview[index].classList.add('current-item-review');
    });

    function exec(indice){
        sliderPointerReview[indice].scrollIntoView( {
            inline: "center",
            behavior: "auto",
            block:"nearest"
        });
    };
})