/*
Un array es el conjunto de datos ( numeros, caracteres, objetos, strings, condicionales etc), que forman una lista o listado de elementos que la conforman. 
Ejemplo strings [Pedro, Pablo, Luz]
Ejemplo number [1, 2, 3]
Ejemplo condicionales [online: false]
Ejemplo object [usuario = nombre, ciudad, estado, edad, etc]

Array es un metodo en javascript para contener en un listado diversos elementos para despues poder hacer uso de los mismos de forma conjunta o individual, como ejemplo podriamos tomar a "usuario", y si debíeramos tomar solo un elemento que lo forman, deberiamos recorrer un listado (array) para buscar dicha informacion, en este caso pudiese ser su "cuidad natal", o ´tomar un elemento de su lista de amigos ejemplo, "Pedro" y "Luz".
Es un método muy usado y a su vez práctico para cuando deseamos agrupar elementos y tener facil acceso a la informacion que contienen.
*/

// EJEMPLO DE ARRAY NUMBER 

let array1 = [1, 2, 3];
console.log(array1);


// EJEMPLO DE ARRAY STRING

let array2 = ["Pedro", "Pablo", "Luz"];
console.log(array2);


// EJEMPLO DE ARRAY CONDICIONAL 

let array3 = [false, true, false];
console.log(array3);


// EJEMPLO DE ARRAY OBJECT

const students = [
    {
        name: "V",
        lastName: "W",
        age: 35,
        course: "Marketing",

    },
    {   
    name: "J",
        lastName: "D",
        age: 22,
        course: "Animation",
    },
    {   
        name: "J",
        lastName: "U",
        age:25,
        course: "Design",
    },
    {   
        name: "R",
        lastName: "R",
        age: 30,
        course:"Web Development",
    },
    {   
        name: "J",
        lastName: "D",
        age:40,
        course: "Financial Managment",
    },
];

console.log(students);