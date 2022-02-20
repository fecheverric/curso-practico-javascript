
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const calcularPrecioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return calcularPrecioConDescuento;
}

function buttonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio con descuento es: $" + precioConDescuento;
}






