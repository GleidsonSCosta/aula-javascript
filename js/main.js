
var nome = "Gleidson de Souza Costa";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert (idade + idade2);// javascript entende sozinho o tipo das variaveis
console.log (nome);
console.log (idade + idade2);
console.log (frase);
console.log (frase.replace ("Japão", "Brasil"));// posso ussar o replace tb no alert

//Trabalhando array

var lista = ["banana", "maça", "uva"];

console.log(lista);
console.log(lista[1]);
lista.push("melancia");//inclui item na lista
console.log(lista);
lista.pop();//remove ultimo item da lista
console.log(lista);
console.log(lista.length);//mostra o tamanho do array
console.log(lista.reverse());//inverte a ordem dos itens do array
console.log(lista.toString());//mostra o array com texto
console.log(lista.join(" - ")); //trasnforma em string e muda a separação entre os itens da lista

var fruta = { nome:"maça", cor:"vermelho"}//criação de dicionário
console.log (fruta.nome); //acessa apenas o campo informado
//alert(fruta.cor);//cria um alerta apenas com o item escolhido
//lista de dicionário
var carros = [{velocidade:"Ferrari", cor:"Vermelho"},{estilo:"Camaro", cor:"Amarelo"}]
console.log(carros);
console.log(carros[1].estilo);

//CONDICIONAIS

var idade = 18;
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}


var idade = prompt("Qual sua idade?") // comando (prompt) exibe uma caixa para o usuario digitar
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}


//Laços de Repetição;

var count = 0;
while (count <= 5){
    console.log(count);
    count++;
    
};

var contador;
for(contador=0;contador <= 5; contador++){
    alert(contador);
};


//Trabalhando com datas
var d = new Date();
console.log(d);
console.log(d.getDay());//retona o dia da semana onde domingo é 0
console.log(d.getDate());//retorna o dia do mês de 1 - 31
console.log(d.getMonth());//retona o mês do ano começando em Janeiro por 0
console.log(d.getFullYear());//retona o ano 
console.log("Hoje é dia " + d.getDate() + " do mês " + d.getMonth() + " de " + d.getFullYear());

//Funcões

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

}
function redirecionar(){
    window.open("https://google.com");
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML = "Passe  mouse aqui";
}
function load(){
    alert("Página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}
