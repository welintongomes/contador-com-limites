/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */
/*define uma funçao para usar como valor do h1*/
let valor = 0
/*busca o elemento com seletor de pesquisa onde vamos apresentar a variavel valor */
const h1_valor = document.querySelector("#valor");
/*adiciona um evento de escuta nos botões*/
/*busca pela id o botão de decremento 
depois adiciona um evento de click 
quando clicado dispará uma arow function 
que vai verificar se pode ou não incrementar mais valores*/
document.querySelector("#btn_decremento").addEventListener('click', ()=>{
    /*se o valor for igual a -10 interrompe o if com um return senão continua decrementando*/
    if(valor == -10)return;
    /*continua a decrementar o conteudo de h1_valor caso o valor seja superior a -10*/
    h1_valor.textContent = --valor;
})
document.querySelector("#btn_incremento").addEventListener('click', ()=>{
    /*se o valor for igual a -10 interrompe o if com um return senão continua incrementando*/
    if(valor == 10)return;
    /*continua a incrementar o conteudo de h1_valor caso o valor seja inferior a 10*/
    h1_valor.textContent = ++valor;
})



