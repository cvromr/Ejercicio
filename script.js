let numeros = [];

for (let i = 0; i < 3; i++) {
    let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    if (!isNaN(numero)) {
        numeros.push(numero); 
    } else {
        console.log("Por favor, ingrese un número válido.");
        break; 
    }
}
if (numeros.length === 3) {
    numeros.sort(function(a, b) {
        return a - b;
    });

    console.log("De menor a mayor:", numeros.join(", "));

    if (numeros[0] === numeros[2]) {
        console.log("Los números son iguales.");
    } else {
    
        console.log("De mayor a menor:", numeros.slice().reverse().join(", "));
    }
}