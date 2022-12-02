/* 
    USER INPUT MEDIANTE 2 METODOS: JS Y HTML

    METODO 1 JS WINDOW PROMPT


El input del usuario no es mas que elementos ya sean html o js, que contiene una serie de caracteres (letras, palabras, simbolos, números, etc) que se ejecutan mediante una caja de texto donde contendrá , un boton 
*/

// let userName = window.prompt("what's your name?");
// console.log(userName);

// METODO 2 HTML INPUT TEXT 

let userName;

document.getElementById("myBtm").onclick = function(){
  userName = document.getElementById("myTxt").value;
  console.log(userName);
  document.getElementById("myLbl").innerHTML = "Hello "+ userName;
};