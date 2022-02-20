
//Media

function calcularMediaArit(lista) {

    //alternativa 1
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }


    //Alternativa 2
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Mediana

const lista1 = [100,200,500,400000];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElementos = calcularMediaArit([elemento1, elemento2]);

    mediana = promedioElementos;
} else {
    mediana = lista1[mitadLista1];
}

//Moda

const lista2 = [1,2,3,2,4,2,3,1,3,2,4,2,3,4,2,2,3,4,5,3,2,5,2];

const lista2Count = {};

lista2.map(
    function (elemento) {
        if (lista2Count[elemento]) {
            lista2Count[elemento] += 1;
        } else {
            lista2Count[elemento] = 1;
        }
    }
);

const lista2Array = Object.entries(lista2Count).sort(
    function (elementoA, elementoB) {
        elementoA[1] - elementoB[1];
    }
);

const moda = lista2Array[lista2Array.length - 1];

//promedio ponderado

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;