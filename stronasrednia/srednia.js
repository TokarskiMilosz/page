let n = parseInt(prompt("Podaj ile ma być liczb"));
let suma = 0;
let sumablad = 0;

if (isNaN(n)) {
    document.getElementById("blad").innerHTML = "Podana przez Ciebie wartość to <b>wyraz!</b><br>Odśwież stronę aby spróbować ponownie";
} else {
    for (let i = 1; i <= n; i++) {
        let w = parseFloat(prompt("Podaj wartość " + i + " liczby"));
        if (isNaN(w)) {
            document.getElementById("glowna").innerHTML += "<p id='blad1'>" + "Twoja " + "<b>" + i + "</b>" + " wartość zawiera coś innego niż liczbę!"
            sumablad += 1
            continue;
        } else {
            document.getElementById("glowna").innerHTML += "<p>" + "Wartość twojej " + "<b>" + i + "</b>" + " liczby wynosi: " + "<b>" + w + "</b>" + "</p>"
            suma += w;
        }

    }
}

document.getElementById("srednia").innerHTML = (suma / (n - sumablad));