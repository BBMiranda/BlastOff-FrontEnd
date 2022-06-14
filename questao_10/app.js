/* QUESTÃO 10) Desenvolva via JavaScript a seguinte estrutura de código levando em consideração as seguintes regras: */

//a) Uma variável deve ter o nome de sorvete de chocolate;
var sorvete = "Sorvete de Chocolate"
var sabor = "chocolate"
//b) Se o seu valor for igual a chocolate, deve ser exibido no alerta do navegador a mensagem: Amo sorvete de chocolate;
let saborSorvete = prompt("Insira o seu sabor de Sorvete favorito?");
//c) Se o seu valor for outro, deve exibir a mensagem: Prefiro outros sabores.
var resposta = "";
if (saborSorvete.toLowerCase() == sorvete.toLowerCase() || saborSorvete.toLowerCase() == sabor.toLowerCase())  {
  resposta = "Amo sorvete de Chocolate!"
}
else {
  resposta = "Prefiro outros sabores!"
}

alert(resposta);