//Código cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

//Código triangulo
console.group("Triangulos")


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (lado1,lado2,base){
    const sP = (lado1 + lado2 + base) / 2;
    return Math.sqrt(sP * (sP - lado1) * (sP - lado2) * (sP - base));
}
console.groupEnd();

//Código círculo
console.group("Circulos")

function diametroCirculo(radio) {
    return radio * 2;
}

const Pi = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Pi;
}

function areaCirculo(radio) {
    return (radio * radio) * Pi;
}

console.groupEnd();

//interaccion con HTML
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetroC = perimetroCuadrado(value);
    const resultadoC = document.getElementById("resultadoC");
    resultadoC.innerText = "El perímetro del cuadrado es: " + perimetroC;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const areaC = areaCuadrado(value);
    const resultadoC = document.getElementById("resultadoC");
    resultadoC.innerText = "El área del cuadrado es: " + areaC;
}

//Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("inputTriangulo3");
    const value3 = Number(input3.value);
    const perimetroT = perimetroTriangulo(value1, value2, value3);
    const resultadoT = document.getElementById("resultadoT");
    resultadoT.innerText = "El perímetro del triángulo es: " + perimetroT;
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("inputTriangulo3");
    const value3 = Number(base.value);
    const areaT = areaTriangulo(value1,value2,value3);
    const resultadoT = document.getElementById("resultadoT");
    resultadoT.innerText = "El área del triángulo es: " + areaT;
}

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetroO = perimetroCirculo(value);
    const resultadoO = document.getElementById("resultadoO");
    resultadoO.innerText = "El perímetro del círculo es: " + perimetroO;
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const areaO = areaCirculo(value);
    const resultadoO = document.getElementById("resultadoO");
    resultadoO.innerText = "El área del círculo es: " + areaO;
}