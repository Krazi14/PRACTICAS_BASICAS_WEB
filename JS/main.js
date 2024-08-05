//COMO ESCRIBIR EN LA PANTALLA Y LAS ALERTAS A USAR//

//document.write("Bienvenido usuario");
//document.write(8+9+10);
//alert('Esto es "importante"');
//alert("Vamos a sumar:");
//["8+9+10"].forEach(alert);

//USAR VARIABLES: //IF ELSE
/*let EC, EP, EF, final;
    EC = prompt("Ingrese su nota del Examen Conceptual:");
    EP = prompt("Ingrese su nota del Examen Parcial");
    EF = prompt("Ingrese su nota del Examen Final");

    final = (EC * 0.10) + (EP * 0.40) + (EF * 0.50);

    if(final >= 10.5){
        document.write(`<h1> APROBASTE con: ${final} </h1>`);
        
    }else{
        document.write(`<h1> DESAPROBASTE con: ${final} </h1>`);
    }*/

//OPERADORES LOGICOS
/*console.log(96 + 2);
console.log(94 - 2);
console.log(12 * 6);
console.log(12 / 6);
console.log(75 % 4);
console.log(16 ** 3);
let x = 4;
let y = x++
console.log(x);

/* COMPARACION */
/*console.log(5 < 6);
console.log(5 > 6);
console.log(5 <= 6);
console.log(5 >= 6);
console.log(5 == "5");

//LOGICOS
let v = true;
let s = false;

console.log(v && s);
console.log(v || s)

//Ternario
/*let valor = (30 === 30) ? 'Si es igual':'No es igual';
console.log(valor);

//SWICTH
/*let diasemana =  prompt("Ingrese un dia de la semana en numero del 1 al 7");

switch(diasemana){
    case '1':
        document.write("<h1> ES LUNES </h1>");
        break;

    case '2':
        document.write("<h1> ES MARTES </h1>");
        break;

    case '3':
        document.write("<h1> ES MIERCOLES </h1>");
        break;

    case '4':
        document.write("<h1> ES JUEVES </h1>");
        break;

    case '5':
        document.write("<h1> ES VIERNES </h1>");
        break;

    case '6':
        document.write("<h1> ES SABADO </h1>");
        break;
    
    case '7':
        document.write("<h1> ES DOMINGO </h1>");
        break;

    default:
        document.write("<h1> DIA INGRESADO INCORRECTO </h1>");
}*/

//WHILE
/*let contador = 0;
while(contador <=100){
    document.write(contador + " ");
    contador++
}*/

//FOR

/*for(let contador = 0; contador <= 100; contador++){
    if(contador == 70){
        continue;
    }
    document.write(contador + " ");
}*/

//ARREGLOS
/*let cursos = ['Porgramacion Avanzada', 'Base de datos', 'Matemarica II'];

console.log(cursos);
console.log(cursos[0]);
console.log(cursos[1]);
console.log(cursos[2]);

cursos[2] = 'Fisica II';
console.log(cursos);

cursos[3] = 'Ciudadania';

console.log(cursos.length)

//Metodos POP/ PUSH / SHIFT/ UNSHIFT
let numero = [
    1,
    2,
    3
]
console.log(numero)
numero.push(4);
console.log(numero);
numero.pop();
console.log(numero)
numero.unshift(0)
console.log(numero);
numero.shift();
console.log(numero)

let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(matriz[2][0])*/

//FUNCION
function minombre(name){
    document.write(`Hola, holita mi nombre es: ${name} <br>`);
}
minombre("Renzo");
minombre("Martín");
minombre();

let c = 8;

function sumnumeros(a, b){
    let c = 9;
    let suma = a + b + c;
    return(suma);
}

let resultado = sumnumeros(7, 9);
document.write(resultado);