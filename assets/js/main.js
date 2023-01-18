// Images

const controls = document.querySelectorAll('.control'); // botões para passar as imagens pra esquerda e direita
let currentItem = 0; // item que está selecionado atualmente
const items = document.querySelectorAll('.item'); // pegando todas as imagens
const maxItems = items.length;// pegando o total de itens para facilitar em algumas contas

// Texts
let currentTxt = 0;
const texts = document.querySelectorAll('.zindex');
const maxText = texts.length
const txtCurrent = document.querySelector('.current-item-txt')

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
                behavior: "smooth"
            })                                              
                
            texts[currentItem].classList.add('current-item-txt')
            //     console.log(currentTxt);
    });
});
