// exemplo para uso do console
console.log("oi, eu estou no console");

// exemplo de tamplate string `` crase ivertida é possivel inserir variaveis ${variavel}
const idade= 20;
const mystring = `meu texto junto com variavel ${idade}`;
// teste
console.log(mystring);

// exemplo de OBJETOS
const meuObjeto={
    nome:"emerson",
    idade:10,
    // posso colocar outro objeto dentro
    endereco:{
        rua:"manaus das flores",
        cidade:"manaus"
    }
}
// Acessando a propriedade
    console.log(meuObjeto); //aqui traz todas as propriedades do objeto
    console.log(meuObjeto.nome); // aqui traz somente uma propriedade
    console.log(meuObjeto.endereco.cidade); // acessa o objeto dentro do outro objeto

    //alterar valor
    meuObjeto.endereco.cidade= "itacoatiara";
    console.log(meuObjeto);

    