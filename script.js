function convertirTemperatura() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("resultado").innerHTML = celsius + " grados Celsius son equivalentes a " + fahrenheit + " grados Fahrenheit.";
}

function convertirPresion() {
    var valorPascal = document.getElementById("valorPascal").value;
    var valorBar = valorPascal / 100000;
    document.getElementById("resultado2").innerHTML = valorPascal + " pascales son equivalentes a " + valorBar + " Bar.";
}

function convertirMasa() {
    var kilogramos = parseFloat(document.getElementById('kilogramos').value);
    var gramos = kilogramos * 1000;
    document.getElementById('resultado3').innerHTML = kilogramos + " kilogramos equivale a " + gramos + " gramos.";
}

function convertirLongitud() {
    var metros = document.getElementById("metros").value;
    var centimetros = metros * 100;
    document.getElementById("resultado4").innerHTML = metros + " metros son " + centimetros + " centímetros.";
}
