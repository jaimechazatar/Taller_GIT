function convertirTemperatura() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("resultado").innerHTML = celsius + " grados Celsius son equivalentes a " + fahrenheit + " grados Fahrenheit.";
}
