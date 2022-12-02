/*---------------------------------------------------------------
                        VARIABLES Y TIPOS DE DATOS
----------------------------------------------------------------*/

//-----------------------DECLARACIONES DE VARIABLES Y OPERADOR DE ASIGNACION-----------------

// 1. Declaraciones ("var, let, const")
// 2. Asignacion de atributos (" = ") <-operador de asignacion)
/*
Las variables se utilizan como contenedores en los cuales podremos almacenar diversos tipos de datos o informacion y hacer uso del mismo en nuestro codigo, con solo llamar a nuestras variables por su nombre asignado, en escencia sirven para almacenar informacion o datos que vayamos a necesitar o manipular, mediante los contenedores llamados "VARIABLES"

El operador " = " nos indica el valor que contendra o el equivalente en dato de una variable al utilizar la sintaxis " = " asignaremos los valores o atributos que la conforman  
*/

/*---------------------------USOS DE LOS METODOS EN VARIABLES--------------------------------

-----METODO 1------- 
let age;   // declaracion sin atributos de la variable "age"
age = 30;  // declaracion del atributo o valor de la variable "age"

SE UTILIZA CUANDO HAGAMOS USO Y MANIPULACION DE DATOS PARA MAS TARDE EN EL CODIGO COMO: INPUTS, OUTPUTS O INFORMACION QUE VAYA A SER MODIFICADA DESPUES DE HABER DECLARADO LA VARIABLE

-------METODO 2------- 
let age = 30; // se declara en conjunto el nombre de la variable y su atributo o valor

SE UTILIZA CUANDO LA VARIABLE VAYA A TENER DESDE EL INICIO UN VALOR O ATRIBUTO DETERMINADO 
--------------------------------------------------------------------------------------------*/

//---------------------EJEMPLOS DE VARIABLES "LET" CON ATRIBUTOS PREDEFINIDOS----------------

let edad = 30;
let altura = 1.70;
let peso = 60;

console.log("variable edad:", edad, "variable altura:", altura, "variable peso:", peso); 

// se despliega en consola las variables "EDAD", "ALTURA" y "PESO" con sus atributos o valores predefinidos en este caso ("30, 1.70 y 60")


//-------------------EJEMPLOS DE TIPOS DE VARIABLES Y MUESTRA EN CONSOLA----------------------

let firstName = "Adrian"; // STRINGS = cuando asignamos valores de tipo texto
let age = 30;            // NUMEROS = cuando asignamos valores numericos
let student = true;     // BOOLEANOS = cuando asignamos un valor positivo o negativo

console.log("Hola", firstName);                 // Se añaden mensajes adicionales en consola
console.log("Tu tienes", age, "años de edad");  // para darle presentacion al usuario
console.log("Estudiante", student);             // mediante las "" y la "," 


//----------------------MOSTRAR EN EL DOM (DOCUMENTO WEB) NUESTRAS VARIABLES----------------

// Debemos crear algun elemento de texto (parrafos, h, seccion, etc) en nuestro HTML para asi llamarlo mediante su ID (#) en nuestro codigo JS y hacer uso del mismo mediante su ID 

//-------------------------------------EJEMPLOS---------------------------------------------

document.getElementById("p1").innerHTML = "Hola " + firstName;
document.getElementById("p2").innerHTML = "Tu tienes " + age + " años de edad";
document.getElementById("p3").innerHTML = "Estudiante: " + student;

// Se mostrara en el DOM, mediante parrafos , la misma informacion que en el ejemplo pasado solo que , en esta ocacion, no se mostraran en consola los mensajes, se mostraran en el DOM