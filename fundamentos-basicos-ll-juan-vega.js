//              Fundamentos Basicos II            //



//  1.-Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
/*


function numPositivo(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        }
    }
    return arr;
}
console.log(numPositivo([-1, 3, 5, -5]));


*/
//  2.Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor.
/*


function menorMayor(arr) {
    var min = 0;
    var may = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            min = arr[i];
        }
        if (arr[i] > arr[i - 1]) {
            may = arr[i];
        }
    }
    console.log(min)
    return may;
}
console.log(menorMayor([8, 3, 45, 7]));


*/
//  3.-Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
/*


function penultimoValorPrimerImpar(arr) {

    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 == 1) {
            impar = arr[i];
        }
    }
    console.log(arr[arr.length - 2]);
    return impar;
}
console.log(penultimoValorPrimerImpar([2, 4, 3, 6, 8, 10, 4, 40, 19, 6]));


*/
//  4.-Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original.
/*


function doble(arr){
    var nuevoValor =[];
    for(var i= 0;i< arr.length;i++){

        nuevoValor.push(arr[i]*2);
    }
    return nuevoValor;
}
console.log(doble([7,8,9]));


*/
//  5.-Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
/*


function contarPositivos(arr) {
    var contar = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            contar = contar + 1;
        }
    }
    arr[arr.length - 1] = contar;
    return arr;
}
console.log(contarPositivos([-1, 1, 1, 1]));


*/
//  6.-Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
/*


function paresImpares(array){
    var numpares = 0;
    var numimpares = 0;
    for (var i=0; i<array.length; i++){
        if (array[i] % 2 !== 0){
            numimpares = numimpares + 1;
            numpares = numpares * 0;

            if(numimpares % 3 === 0){

                console.log("Que imparcial!");
            }
        }
        if (array[i]%2 !==1){
            numpares = numpares + 2;
            numimpares = numimpares * 0;
            if(numpares % 3 === 0){

                console.log("Es para Bien!");
            }
        }
    }
}
console.log(paresImpares([1,2,3,5,7,6,18,10,15]));


    */
//  7.-Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr.
/*


function incrementarAimpar(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 !== 1) {
            arr[i] = arr[i] + 1;
        }
        // console.log(arr[i]);
    }
    return arr;
}
console.log(incrementarAimpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


*/
//  8.-Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
/*


function LongitudesPrevias(arr) {
    var z = [];
    for (var i = 0; i < arr.length; i++) {
        z.push(arr[i].length);
    }
    for (var j = 1; j < arr.length; j++) {
        arr[j] = z[j - 1];
    }
    return arr;
}
console.log(LongitudesPrevias(['programar', 'dojo', 'genial']));


*/
//  9.-Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array.
/*


function sumarSiete(arr) {
    var arrnew = [];
    for (var i = 0; i < arr.length; i++) {
        arrnew.push(arr[i] + 7);
    }
    return arrnew;
}
console.log(sumarSiete([1, 2, 3, 4, 5]));


*/
//  10.-Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
/*


function invertir(arr) {
    var nueva_posicion = 0;
    for (var i = arr.length - 1; i > nueva_posicion; i--) {
        inicio = arr[i];
        final = arr[nueva_posicion];
        arr[i] = final;
        arr[nueva_posicion] = inicio;
        nueva_posicion++;
    }
    return arr;
}
console.log(invertir([1, 2, 3, 4, 5]))


*/
//  11.-Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
/*


function cambiarNegativo(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = -arr[i];
        }
    }
    return arr;
}
console.log(cambiarNegativo([1, 3, 5, 7, 9, 11]));


*/
//  12.-Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez.
/*


function print(arr) {
    contador = 0;
    for (var i = 0 ; i<arr.length ; i++) {
        if (arr[i] === "comida") {
            contador++;
            console.log("Yummy");
        }
    }
    if (contador == 0 ) {
        console.log("Tengo hambre");
    }
}
console.log(print(["gato","perro","pajaro"]))


*/
//  13.-Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez.
/*


function cambiarExtremosyAntepenultimo(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        if (i % 2 == 0) {
            [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
        }
    }
    return arr;
}
console.log(cambiarExtremosyAntepenultimo(['inicio', 2, 'izq.', 'der.', 5, 'fin']));


*/
//  14.-Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3) debería devolver [3,6,9].
/*


function multiplicar(arr,y){
    y=3;
	for(var i=0;i<arr.length;i++){
		arr[i]=arr[i]*y;
	}
	return arr;
}
console.log(multiplicar([1,2,3,4,5],2));


*/