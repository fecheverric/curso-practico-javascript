//FUNCIONES DE AYUDA (HELPERS)
//función para saber si un número es par
function esPar(numero) {
    return (numero % 2 === 0);
}

// Función para calcular la media aritmética en una lista
function calcularMediaArit(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}



//De la lista, solo sacar el salario de las personas
const salariosCol = Colombia.map(
    function(persona) {
        return persona.salario;
    }
);

//Ordenar las cifras de menor a mayor
const salariosColOrdenados = salariosCol.sort(
    function(salarioA, salarioB) {
        return salarioA - salarioB;
    }
);


// Función para sacar la mediand
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2); // Encontrar la mitad de la lista

    if (esPar(lista.length)) { // Si la lista es par
        const personaMitad1 = lista [mitad - 1];
        const personaMitad2 = lista [mitad];

        const mediana = calcularMediaArit([personaMitad1, personaMitad2]); // la mediana sería la media entre los dos números de la mitad
        return mediana;
    } else {  // si la lista es impar
        const personaMitad = lista [mitad];
        return personaMitad; // la mediana sería el valor de la mitad
    }
}

const medianaGeneralCol = (medianaSalarios(salariosColOrdenados));

//Mediana del top 10

const spliceStart = (salariosColOrdenados.length * 90) / 100; // Desde donde empieza a cortar la función splice, queremos que empiece en el 90%
const spliceCount = salariosColOrdenados.length - spliceStart; // Cuantos elementos queremos que corte la función splice, le restamos el 90% para que corte el 10%

//la función splice recibe dos parámetros, el punto desde donde queremos que empiece a contar y el número de elementos que queremos que corte
const salariosColTop10 = salariosColOrdenados.splice(spliceStart, spliceCount);

const medianaTop10Col = (medianaSalarios(salariosColTop10));

console.log({
    medianaGeneralCol,
    medianaTop10Col,
}); // le damos la lista de salarios ordenados de menor a mayor a la función medianaSalarios