// ELEMENTOS HTML CREADOS EN JS Y WINDOW ALERT
document.getElementById("h1").innerHTML = 'Condicionales Basicas en JavaScript';
document.getElementById("p").innerHTML = "Presiona F12 para inspeccionar la consola del navegador y ver el resultado del codigo JS";
window.alert("Bienvenid@s...");

/*
Las condicionales son el metodo con el cual recibiremos solo dos parametros "True" o "False"
lo cuál nos dictamina solo dos rutas posibles positívo o negatívo, si la acción que queremos dictaminar es positívo debemos usar la sintaxis "if", con la cuál encadenarémos la acción que aprobará o denegará si la acción se ejecuta o por lo contrario se niega.
*/

// CONDICIONALES BASICAS EN EJEMPLOS PRACTICOS DE JAVASCRIPT 

// Ejemplo de condicionales con "strings" (caracteres)
let names = "Maria";
let lastName = "Grey";

let result = names > lastName;
console.log(result);


// Ejemplo de condicionales con operador "=="
let number1 = 100;
let number2 = 500;

let totalResult = number1 == number2;
console.log(totalResult);

// Ejemplo 1 de condicionales con operadores "=" y ">, <"
let numbers1 = 222;
let numbers2 = 333;

let results = numbers1 >= numbers2;
console.log(results);

// Ejemplo 2 
numbers1 = 333;
numbers2 = 333;

let resultados = numbers1 <= numbers2;
console.log(resultados);


// EJEMPLO DE CONDICIONALES "IF" "ELSE" (TRUE)

let inputs = "abc123";
let pasword = "abc123";

let resultado = inputs == pasword;     //ARROJARA EN CONSOLA TRUE
                                    //YA QUE LOS CARACTERES COINCIDEN
if (resultado == true) {          //EN LAS VARIABLES "input" Y "pasword"
    console.log("Pasword Correct");
} else {
    console.log("Pasword Incorrect");
};

// EJEMPLO (FALSE)

inputs = "abc12322";
pasword = "abc123";

resultado = inputs == pasword;     //ARROJARA EN CONSOLA FALSE
                                //YA QUE LOS CARACTERES NO COINCIDEN
if (resultado == true) {      //EN LAS VARIABLES "input" Y "pasword"
    console.log("Pasword Correct");
} else {
    console.log("Pasword Incorrect");
};

// EJEMPLOS BASICOS DE CONDICIONALES "IF", "ELSE IF" Y "ELSE"

let score = 70;

if (score > 30) {
    console.log('You are good');
} else if (score > 15) {
    console.log('You need to practice more');
}
    else {
        console.log('You need to follow this tutorial...') ;
};

//---------------------------------------------------------------------

let value = 10;

if (value < 100) {
    console.log('Its diferent');
} else if (value <= 10) {
    console.log('Its same');
} 
    else {
        console.log('no value');
};
/*---------------------------------------------------------------------



SENTENCIA SWITCH

1) "Case" 
Es una declaración que evalúa una expresión o dato, comparando el valor con una instancia "Case" y ejecuta las declaraciones asociadas, en orden de asignacion, a dichos casos "Cases".
 
 2) "Break".
 Para romper dicha declaración debemos usar la palabra clave o sintaxis "Break", ya que de esta forma estamos declarando mediante la sintaxis "break" romper el flujo de datos de nuestros "casos" y seguir ejecutando nuestro codigo.
 
 3) "Default"
 Es la asignacion que se le da cuando queremos dejar un valor predefinido el cual mostrar en caso de que no queramos reflejar ninguno de los valores (cases) creados, de esta forma se mostrara el valor atribuido a "default".
*/

//  EJEMPLO CON SENTENCIA SWITCH 
let typeCard = "Credit Card"; // Si la variable "typeCard" cambia su valor
                          // al inspeccionar la consola verémos reflejado
switch(typeCard) {       // el valor alterado.
    case 'Debid Card': // 1)
        console.log('This is a debid card.');
            break;     // 2)
    case 'Credit Card':
        console.log('This is a credit card.');
            break;
    default:           // 3)
        console.log('No card');
};

