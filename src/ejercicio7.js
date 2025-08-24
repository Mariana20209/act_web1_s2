let precioUnitario = 25;
let cantidad = 60;
let precioFinal;

if (cantidad < 10) {
  precioFinal = precioUnitario * cantidad;
} else if (cantidad >= 10 && cantidad < 50) {
  precioFinal = (precioUnitario * cantidad) * 0.9;
} else {
  precioFinal = (precioUnitario * cantidad) * 0.8;
}

console.log(precioFinal.toFixed(2));