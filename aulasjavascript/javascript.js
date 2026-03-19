// execute o codigo aqui com ctrl+alt+N, mas somente vai funcionar para os codigos java script
// exemplo para uso do console
console.log("oi, eu estou no console");

// exemplo de tamplate string `` crase ivertida é possivel inserir variaveis ${variavel}
const idade = 20;
const mystring = `meu texto junto com variavel ${idade}`;
// teste
console.log(mystring);

// exemplo de OBJETOS
const meuObjeto = {
    nome: "emerson",
    idade: 10,
    // posso colocar outro objeto dentro
    endereco: {
        rua: "manaus das flores",
        cidade: "manaus"
    }
}
// Acessando a propriedade
console.log(meuObjeto); //aqui traz todas as propriedades do objeto
console.log(meuObjeto.nome); // aqui traz somente uma propriedade
console.log(meuObjeto.endereco.cidade); // acessa o objeto dentro do outro objeto

//alterar valor
meuObjeto.endereco.cidade = "itacoatiara";
console.log(meuObjeto);


// vamos trabalha aqui o DOM com javasript
// Document Object Model
// exemplo getElementById
// OBS: a partir dequi o codigo para manipular a dom so funciona no navegador
const input = document.getElementById("input-nome");
console.log(input);

const inputclasse = document.getElementsByClassName("inputclass");
console.log(inputclasse);

const paragrafos = document.getElementsByTagName("p");
console.log(paragrafos);

const pegueName = document.getElementsByName("endereco");
console.log(pegueName);

// o queryselector pega o primero elemento somente.
const elementos = document.querySelector("#input-nome");
console.log(elementos);

//aqui vai trazer todos os elementos
const elements = document.querySelectorAll("form");
console.log(elements);

// AGORA VEJA O SE PODDE FAZER COM ISSO

// ja consigo manipular a DOM
elementos.value = "mudei o emerson";
elementos.placeholder = "digite seu nome aqui";
console.log(elementos.value);

pegueName.placeholder = " pegue o nome";
console.log(pegueName.placeholder);

const paragrafo = document.querySelector(".paragra");

// paragrafo.textContent= "novo texto";
// paragrafo.innerText= "novo texto";
paragrafo.innerHTML = "novo text <b> ola </b>.";

console.log(paragrafo.textContent); //SO HTML
console.log(paragrafo.innerText);   //LEVA EM CONTA O CSS
console.log(paragrafo.innerHTML);   //TRAZ TUDO - permite adicionar HTML

// AGORA VAMOS ALTERAR O CSS COM JAVASCRIPT

const botao= document.querySelector(".botao");

botao.style.backgroundColor="gray";

// EVENTOS

function botaocliquei(){
    alert(elementos.value);
}
    //  FAZER REQUISICAO, CONSUMIR API
//url de teste: https://jsonplaceholder.typicode.com/users

const fetchData = async () => {
    const url="https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro HTTP! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data[1].name);
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};

fetchData();