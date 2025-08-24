let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;
let tarifaFinal = tarifaBase

if (edad < 18) {
    tarifaFinal=tarifaBase * 0.8; // 20% de descuento
}else if (edad >= 65) {
    tarifaFinal= tarifaBase *0.6; // 40% de descuento
} console.log(tarifaFinal.toFixed(2));                                  
