/*for (let y = 1; y <= 10; y++) {
    for (let z = 1; z <= 9; z++) {
        document.getElementById("m" + String(y)).innerHTML += "<p>" + y + " * " + z + " = " + (y * z) + "</p>"
    }
}*/
for (let y = 1; y <= 2000; y++) {
    document.getElementById("tabm").innerHTML += '<div id="m' + y + '" class="tablica" > <h2>Mnożenie przez ' + y + ':</h2 ></div > '
    for (let z = 1; z <= 9; z++) {
        document.getElementById("m" + String(y)).innerHTML += "<p>" + y + " * " + z + " = " + (y * z) + "</p>"
    }
}