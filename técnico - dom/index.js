// exercício 1
// função que alterna a cor entre duas cores definidas
// function alterColor(element, color1, color2) {
// element.style.backgroundColor = element.style.backgroundColor === color1 ? color2 : color1;
// }
  
// adiciona o evento de clique a cada quadrado e define as cores alternadas
// document.getElementById('square1').addEventListener('click', function() {
// alterColor(this, 'red', 'green');
// });

// document.getElementById('square2').addEventListener('click', function() {
// alterColor(this, 'blue', 'yellow');
// });
  
// document.getElementById('square3').addEventListener('click', function() {
// alterColor(this, 'orange', 'purple');
// });


// exercício 2
// variável para armazenar o valor do contador
// let contador = 0;

// elementos de contador e botões
// const counterElement = document.getElementById('counter');
// const countButton = document.getElementById('countButton');
// const resetButton = document.getElementById('resetButton');

// função para adicionar o contador e atualizar o display
// countButton.addEventListener('click', function() {
//   contador++;
//   counterElement.innerText = contador;
// });

// função para resetar o contador e atualizar o display
// resetButton.addEventListener('click', function() {
//   contador = 0;
//   counterElement.innerText = contador;
// });


// exercício 3
// variável para armazenar o estado de visibilidade
// let isVisible = false;

// elementos do botão e do texto
// const toggleButton = document.getElementById('toggleButton');
// const hiddenText = document.getElementById('hiddenText');

// função para trocar a visibilidade e o texto do botão
// toggleButton.addEventListener('click', function() {
//   isVisible = !isVisible;
// hiddenText.style.display = isVisible ? 'block' : 'none';
// const button = isVisible ? 'block' : 'none';
// });


// exercício 4
// elemento de texto e botão
// const textElement = document.getElementById('text');
// const changeTextButton = document.getElementById('changeTextButton');

// função para mudar o texto com o valor inserido pelo usuário
// changeTextButton.addEventListener('click', function() {
//   const newText = prompt('Digite um novo texto:') || 'Aqui águia vira passarinho';
//   textElement.innerText = newText;
// });


// exercício 5
// elemento da mensagem
// const messageElement = document.getElementById('message');

// função para detectar o pressionamento de uma tecla e atualizar a mensagem
// document.addEventListener('keydown', function(event) {
//   messageElement.innerText = `Você pressionou: ${event.key}`;
// });


// exercício 6
// dados dos candidatos
// const candidates = {
//     '22': { name: 'Heliomar', photo: 'https://www.tribunapr.com.br/eleicoes/2024/candidatos/_next/image/?url=https:%2F%2Fwww.tribunapr.com.br%2Fhermes-media%2Feleicoes%2F2024%2Fcandidatos%2Frs%2F210002293944.jpg&w=96&q=100' },
//     '22500': { name: 'Daniel Daudt', photo: 'https://berlinda.com.br/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-23-at-10.57.50-1-e1677162517712.jpeg' },
//     '13': { name: 'Vanazzi', photo: 'https://s2-g1.glbimg.com/oCFvpHd37-v8affPzDsCCexzjeU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/z/p/7CvmjfTu2Cyww2y7mZAQ/img-0943perfil41483454164116-foto.jpg' }
//   };
  
// contador de votos
//   const votes = { '10': 0, '20': 0, '30': 0, 'nulo': 0 };
  
// elementos DOM
//   const candidateNameElement = document.getElementById('candidateName');
//   const candidatePhotoElement = document.getElementById('candidatePhoto');
//   const confirmMessageElement = document.getElementById('confirmMessage');
//   const voteButton = document.getElementById('voteButton');
  
// função para exibir os dados do candidato e confirmar o voto
//   voteButton.addEventListener('click', function() {
//     const candidateNumber = prompt('Digite o número do candidato:');
    
// verifica se o candidato existe
//     if (candidates[candidateNumber]) {
//       const candidate = candidates[candidateNumber];
//       candidateNameElement.innerText = candidate.name;
//       candidatePhotoElement.src = candidate.photo;
//       candidatePhotoElement.style.display = 'block';
//       confirmMessageElement.style.display = 'block';
      
// confirma o voto
//       if (confirm('Confirmar seu voto para ' + candidate.name + '?')) {
//         votes[candidateNumber]++;
//       }
//     } else {
// exibe "Voto Nulo" se o candidato não existir
//       candidateNameElement.innerText = 'Voto Nulo';
//       candidatePhotoElement.style.display = 'none';
//       confirmMessageElement.style.display = 'none';
      
// adiciona o contador de votos nulos
//       votes['nulo']++;
//     }
  
// exibe contagem de votos no console
//     console.log('Contagem de votos:', votes);
//   });


// desafio
// document.getElementById("add-item-button").addEventListener("click", function() {
//   const item = prompt("Digite o item a ser adicionado:");
//   if (item) {
//     const listItem = document.createElement("li");
//     listItem.textContent = item;
//     document.getElementById("item-list").appendChild(listItem);
//   }
// });