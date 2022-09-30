/* let miNombre;

miNombre = "Mauro";

console.log(miNombre);

let miApellido;

miApellido = "Harretche";

console.log(miApellido);

let miEdad;

miEdad = 30;

console.log(miEdad);

let miMascota;

miMascota = "Polly";

console.log(miMascota);

let edadMascota;

edadMascota = 4;

console.log(edadMascota);

let nombreCompleto = miNombre + " " + miApellido

console.log(nombreCompleto);

let textoPresentacion = "Mi nombre es " + miNombre + " " + miApellido;

console.log(textoPresentacion);

let sumaEdades = miEdad + edadMascota;

console.log(sumaEdades);

let restaEdades = miEdad - edadMascota;

console.log(restaEdades);

let productoEdades = miEdad * edadMascota;

console.log(productoEdades);

let divisionEdades = miEdad / edadMascota;

console.log(divisionEdades); 

miNombre = prompt(" Ingrese su nombre")
miApellido = prompt("Ingrese su apellido")
miEdad = prompt("Ingrese su edad")
miMascota = prompt("Ingrese nombre de su mascota")
edadMascota = prompt("Ingrese la edad de su mascota")

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota); */


const alumno = {
    nombre : 'mauro',
    edad : 70,
    pelo: 'castaño',
    altura: 1.73,
    peso: 66
}

console.table(alumno)


const mascota = {
    nombre : 'polly',
    edad : 4,
    pelo: 'rubio',
    altura: 45,
    peso: 7
}

console.table(mascota)

let frutas = [ "banana", "pera" , "frutilla" , "naranja" ,"mango"]
   /*  {
        tipo : "banana",
        color : "amarillo"
    },
    {
        tipo : "naranja",
        color : "naranja"
    },
    {
        tipo : "frutilla",
        color : "rojo"
    },
    {
        tipo: "anana",
        color : "marron"
    },
    {
        tipo : "mango",
        color : "anaranjado"
    } */


console.log(frutas)

console.log( frutas[0])
console.log( frutas[1])
console.log( frutas[2])
console.log( frutas[3])
console.log( frutas[4])



let numeros = [ 0 , 1 , 2 , 3, 4]
    /* {
        numero : 0,
    },
    {
        numero : 1,
    },
    {
        numero : 2,
    },
    {
        numero : 3,
    },
    {
        numero : 4,
    } */


console.log(numeros)

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let familia = [ "nico" , "jose" , "pablo" , "mariel" , "mauro"]
    /* {
        nombre : 'nico',
    },
    {
        nombre : 'jose',
    },
    {
        nombre : 'pablo',
    },
    {
        nombre : 'mariel',
    },
    {
        nombre : 'mauro',
    } */

console.log(familia)

console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])



/* Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15. */

let textoAleatorio = "hola como muchas" + " " + frutas[2] + "una cantidad de" +  " " + numeros[3] + familia[4]

console.log(textoAleatorio)
