let a = 10;
let b = 3;
let operador = '*';   // puede ser + - * /
let resultado;

switch (operador) {
  case '+':
    resultado = a + b;
    console.log(`El resultado de ${a} + ${b} es: ${resultado}`);
    break;
  case '-':
    resultado = a - b;
    console.log(`El resultado de ${a} - ${b} es: ${resultado}`);
    break;  
    case '*':
    resultado = a * b;
    console.log(`El resultado de ${a} * ${b} es: ${resultado}`);
    break;  
    case '/':
    if (b !== 0) {
      resultado = a / b;
      console.log(`El resultado de ${a} / ${b} es: ${resultado}`);
    }   else {
      console.log("Error: División por cero no permitida.");
    }
    break;
  default:
    console.log("Operador no válido. Por favor, usa +, -, * o /.");
}