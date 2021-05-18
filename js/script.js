var inputA = document.getElementById("inputA")
var inputB = document.getElementById("inputB")
var inputR = document.getElementById("inputR")
//var borrar = document.getElementById("borrar")
//var div = document.getElementById("div")
var sum = document.getElementById("sum")
var sub = document.getElementById("sub")
//var mul = document.getElementById("mul")
//var igual = document.getElementById("igual")
//var uno = document.getElementById(1)
//var dos = document.getElementById(2)
//var tres = document.getElementById(3)
//var cuatro = document.getElementById(4)
//var cinco = document.getElementById(5)
//var seis = document.getElementById(6)
//var siete = document.getElementById(7)
//var ocho = document.getElementById(8)
//var nueve = document.getElementById(9)
//var cero = document.getElementById(0)


function calculadora(action)
{
	if (action == "borrar") {
		calcInputR.value = "";
		calcInputA.value = "";
		calcInputB.value = "";

		return;
	}

//	if (isNaN(calcInputA.value) || isNaN(calcInputB.value)) {
		// Muestro mje
//		return;
//	}

switch (calculadora) {
		case "sum":action
			calcInputR.value = Number(calcInputA.value) + Number(calcInputB.value);
			break;

		case "sub":
			calcInputR.value = Number(calcInputA.value) - Number(calcInputB.value);
			break;

		case "mul":
			calcInputR.value = Number(calcInputA.value) * Number(calcInputB.value);
			break;

		case "div":
			if (Number(calcInputB.value) != 0) {
				calcInputR.value = Number(calcInputA.value) / Number(calcInputB.value);
			}
			else {
				calcInputR.value = "";
			}

			break;
}