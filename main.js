function calcular() {

    let carro = Number(document.getElementById("carro").value);
    let energia = Number(document.getElementById("energia").value);

    if (carro <= 0 && energia <= 0) {
        alert("Preencha pelo menos um campo!");
        return;
    }

      /*estimativa simples do cálculo*/
    
    let co2Carro = carro * 0.192;
    let co2Energia = energia * 0.084;

    let totalCO2 = co2Carro + co2Energia;

    /*Aproximação: 1 árvore absorve ~22kg CO₂ por ano*/
   
    let arvores = Math.ceil(totalCO2 / 22);

    document.getElementById("co2").innerHTML =
        `CO₂ emitido: ${totalCO2.toFixed(2)} kg`;

    document.getElementById("arvores").innerHTML =
        `Árvores necessárias: ${arvores}`;
}
