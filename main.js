const form = document.getElementById('form-validador');

form.addEventListener('submit', function(e) {

    e.preventDefault();

    //Obtem os valores A e B
    const numeroA = parseFloat(document.getElementById('numero-a').value);
    const numeroB = parseFloat(document.getElementById('numero-b').value);

    // Verifica se o número B é maior que o número A
    if (numeroB > numeroA) {
        document.getElementById("success-message").innerHTML = `Formulário válido! O número ${numeroB} é maior que o número ${numeroA}`;
            document.getElementById("success-message").style.color = "green"
        } else {
            document.getElementById("success-message").innerHTML = `Formulário inválido. O número ${numeroB} é menor que o número ${numeroA}`;
            document.getElementById("success-message").style.color = "red";
    }

})