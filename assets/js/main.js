const user = {
   skills: [
      {
         nome: 'Html 5',
         linkImage: 'assets/img/icons/html.png',
         alt: 'html-icon',
      },
      {
         nome: 'CSS',
         linkImage: 'assets/img/icons/css.png',
         alt: 'css-icon',
      },
      {
         nome: 'Javascript',
         linkImage: 'assets/img/icons/javascript.png',
         alt: 'javascript-icon',
      },
      {
         nome: 'Sass',
         linkImage: 'assets/img/icons/sass.png',
         alt: 'sass-icon',
      },
      {
         nome: 'Git',
         linkImage: 'assets/img/icons/git.png',
         alt: 'git-icon',
      },
   ],
   hobbies: [
      {
         nome: 'Tocar trombone',
         linkImage: 'assets/img/icons/trombone.png',
         alt: 'trombone-icon',
      },
      {
         nome: 'Jogos',
         linkImage: 'assets/img/icons/controle.png',
         alt: 'controle-icon',
      },
      {
         nome: 'Assistir séries',
         linkImage: 'assets/img/icons/tela.png',
         alt: 'tv-icon',
      },
      {
         nome: 'Tocar teclado',
         linkImage: 'assets/img/icons/teclado.png',
         alt: 'teclado-musical-icon',
      },
      {
         nome: 'Tocar bateria',
         linkImage: 'assets/img/icons/bateria.png',
         alt: 'bateria-icon',
      },
   ],
   formacao: [
      {
         nome: 'Análise e desenvolvimento de sistemas',
         data: 'Em andamento - Uninter',
         linkImage: 'assets/img/logo-uninter.png',
         alt: 'logo-uninter',
      },
      {
         nome: 'Desenvolvedor frontend',
         data: 'Em andamento - Alura',
         linkImage: 'assets/img/logo-alura.png',
         alt: 'logo-alura',
      },
   ],
   experiencia: [
      {
         titulo: 'Codificador de texto',
         subtitulo: 'Challenge Alura Codificador',
         repositorio:
            'https://github.com/isacwesley/Codificador-decodificador.git',
         demo: 'https://isacwesley.github.io/Codificador-decodificador/',
         image: 'assets/img/codificador.png',
         alt: 'codificador e decodificador',
      },
      {
         titulo: 'Jogo da forca',
         subtitulo: 'Challenge Alura Jogo da Forca',
         repositorio: 'https://github.com/isacwesley/jogo-da-forca.git',
         demo: 'https://isacwesley.github.io/jogo-da-forca/',
         image: 'assets/img/forca.png',
         alt: 'jogo da foca',
      },
   ],
};

const { skills, hobbies, formacao, experiencia } = user;

// section habilidades
const containerCards = document.querySelectorAll('div.container-cards');
const card = document.querySelectorAll('div.card');
function addCards(obj, container, card) {
   obj.map((item) => {
      const cardClone = card.cloneNode(true);
      cardClone.querySelector('img').src = item.linkImage;
      cardClone.querySelector('img').alt = item.alt;
      cardClone.querySelector('span').innerHTML = item.nome;
      container.appendChild(cardClone);
   });
   card.remove();
}
addCards(skills, containerCards[0], card[0]);
addCards(hobbies, containerCards[1], card[1]);

//section formação
const containerFormacao = document.querySelector('.container-cards-formacao');
const cardFormacao = document.querySelector('.card-formacao');
formacao.map((item) => {
   const cardClone = cardFormacao.cloneNode(true);
   cardClone.querySelector('div.logo img').src = item.linkImage;
   cardClone.querySelector('div.logo img').alt = item.alt;
   cardClone.querySelector('h4').innerHTML = item.nome;
   cardClone.querySelector('span').innerHTML = item.data;
   containerFormacao.appendChild(cardClone);
});
cardFormacao.remove();

// section experience
const cardsExperiencia = document.querySelector(
   'div.container-cards-experiencia'
);
const cardExperiencia = document.querySelector('div.card-experiencia');
experiencia.map((item) => {
   const cardClone = cardExperiencia.cloneNode(true);
   cardClone.querySelector('img').src = item.image;
   cardClone.querySelector('img').alt = item.alt;
   cardClone.querySelector('h4').innerHTML = item.titulo;
   cardClone.querySelector('span').innerHTML = item.subtitulo;
   cardClone.querySelector('div.btns .repo').href = item.repositorio;
   cardClone.querySelector('div.btns .demo').href = item.demo;
   cardsExperiencia.appendChild(cardClone);
});
cardExperiencia.remove();

const form = document.querySelector('form');

form.addEventListener('submit', () => {
   setInterval(() => {
      form.reset();
   }, 0100);
});

// atualiza ano atual
const dataSpan = document.querySelector('.data');
function atualizaHora() {
   const data = new Date();
   return data.toLocaleDateString('pt-br', {
      year: 'numeric',
   });
}
dataSpan.innerHTML = atualizaHora();
