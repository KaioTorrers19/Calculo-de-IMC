const altura = document.getElementById("Altura");
const peso = document.getElementById("Peso");
const submit = document.getElementById("submit");

submit.addEventListener("click", function() {

    let alturaValue = parseFloat(altura.value);
    let pesoValue = parseFloat(peso.value);


    console.log( `altura ${alturaValue}`)
    console.log(`peso: ${peso}`)


    let imcCount = pesoValue / (alturaValue * alturaValue);

    let pElement = document.createElement("p");
    let pElement2 = document.createElement("p");

    pElement.style.fontSize = "40px";
    pElement.style.fontWeight = "800";
    pElement2.style.marginTop = '10px';
    pElement2.style.fontSize = "20px";
    pElement2.style.fontWeight = "300";
    pElement.innerHTML = `${imcCount.toFixed(2)}`;


    const result = document.getElementById('Result');
    let pesoDescription = "";
    result.innerHTML = '';
    altura.style.border = "";
    peso.style.border = "";

    
    if (isNaN(alturaValue) || isNaN(pesoValue)) {
        
        if (isNaN(alturaValue)) {
            altura.style.border = "2px solid red";
        }
        if (isNaN(pesoValue)) {
            peso.style.border = "2px solid red";
        }
        return; 
    }


    if (imcCount < 18.5) {
        pElement.style.color = "blue";
        pesoDescription = 'Abaixo do peso';
    } else if (imcCount >= 18.5 && imcCount < 24.99) {
        pElement.style.color = "green";
        pesoDescription = 'Peso ideal';
    } else if (imcCount >= 24.99 && imcCount <= 29.99) {
        pElement.style.color = "yellow";
        pesoDescription = 'Sobrepeso';
    } else if (imcCount >= 30.00) {
        pElement.style.color = "red";
        pesoDescription = 'Obesidade';
    }

    pElement2.innerHTML = `Nível do IMC: <strong>${pesoDescription}</strong>`;
    result.appendChild(pElement);
    result.appendChild(pElement2);
});
