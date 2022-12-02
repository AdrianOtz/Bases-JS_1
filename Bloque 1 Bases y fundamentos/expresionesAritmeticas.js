/*---------------------------------------------------------------
                     EXPRESIONES ARITMETICAS
----------------------------------------------------------------*/

/* 
Las expresiones aritmeticas en java script son la combinacion de 
    - "un OPERANDO" (valor, variables, etc.)
    - "OPERADOR" (+ , - , / , * , %)
Que evaluan el valor total requerido  

--------------------------------------------------------------------------------------------------------- METODO 1 PARA DECLARACION DE VARIABLES CON OPERADORES-----------------------------*/

let alumnos = 20;       // declaramos la variable alumnos con valor de 20
console.log(alumnos);   // la consola mostrara el valor establecido de 20

/*  EJEMPLOS DEL METODO 1 PARA DECLARACION DE VARIABLES CON OPERADORES

    alumnos = alumnos + 1; Usamos el operador + para sumar un elemento a nuestra variable 
    alumnos = alumnos - 1; Usamos el operador - para restar un elemento a nuestra variable
    alumnos = alumnos / 2; Usamos el operador / para dividir un elemento a nuestra variable
    alumnos = alumnos * 2; Usamos el operador * para multiplicar un elemento a nuestra variable
    
    alumnos = alumnos ** 2;
Usamos un operador doble para acrecentar el valor de la variable por el numero requerido, en este caso ("2" = al cuadrado), puede hacerse uso de el duplicado en operadores para diversas funciones (**, ++ ), pero siempre para acrecentar un valor ya establecido
   
OPERADOR DE PORCENTAJE

Creamos una variable mas , ya que no podemos sacar un porcentaje entero con el valor (20) y usamos el operador % para obtener el porcentaje de la variable ALUMNOS

let alumnoExtra = alumnos % 2;
   
-----------------------------------------------------------------------------------------------
---------METODO 2 PARA DECLARACION DE VARIABLES CON OPERADORES---------------------------------

EJEMPLOS DEL METODO 2 PARA DECLARACION DE VARIABLES CON OPERADORES (SHORT CUT)
     
    alumnos += 1;
    alumnos -= 1;
    alumnos /= 2;
    alumnos *= 2;

-----------PRECEDENTES DE OPERADORES-------------
Siempre se leeran de derecha a izquierda en el siguiente orden:
    1. Parentesis ()
    2. Exponentes
    3. Multiplicacion y division
    4. Adicion y sustraccion
    
------------EJEMPLO 1------------------------------- 
    
    let resultado = 1 + 2 * (3 + 4); = 15
    
    Esto arrojara 15 como resultado siguiendo las normas de operadores, ya que la operacion se leera de derecha a izquierda tomando el parentesis como primer elemento: 
    ("3 + 4 = 7", "7 x 2 =14" y por ultimo "14 + 1 = 15"), dandonos el resultado de 15

------------EJEMPLO 2-------------------------------

let resultado = (1 + 2) * (3 + 4); = 21 

    Tomando en cuenta las normas de operadores, podemos deducir que el resultado es 21 ("3 + 4 = 7", "1 + 2 = 3" y por ultimo "7 x 3 = 21"), siguiendo los "Precedentes de Operadores" entendemos la operacion antes realizada

*/ 

