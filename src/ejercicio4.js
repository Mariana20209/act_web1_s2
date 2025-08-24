let a = 10;
let b = 3;
let operador = '*';   // puede ser + - * /

switch (operador) {
  case '+':
    console.log= (a + b);
    break;
  case '-':
    console.log=(a - b);
    break;  
    case '*':
    console.log=(a * b);
    break;  
    case '/':
    if (b === 0) {
      console.log=(a / b);
    }   else {
      console.log("Indeterminado");
    }
    break;
  default:
    console.log("Operador no válido.");
}