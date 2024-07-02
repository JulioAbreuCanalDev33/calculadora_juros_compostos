function calcularJuros() {
    const principal = parseFloat(document.getElementById('principal').value);
    const mensal = parseFloat(document.getElementById('mensal').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const tempo = parseInt(document.getElementById('tempo').value);
    const n = parseInt(document.getElementById('n').value);

    if (isNaN(principal) || isNaN(mensal) || isNaN(taxa) || isNaN(tempo) || isNaN(n)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const taxaDecimal = taxa / 100;
    const base = 1 + taxaDecimal / n;
    const exponent = n * tempo;

    const montantePrincipal = principal * Math.pow(base, exponent);
    const montanteMensal = mensal * ((Math.pow(base, exponent) - 1) / (taxaDecimal / n));

    const montanteTotal = montantePrincipal + montanteMensal;
    const juros = montanteTotal - (principal + mensal * tempo * 12);

    document.getElementById('resultado').innerText = `Montante: R$ ${montanteTotal.toFixed(2)}\nJuros: R$ ${juros.toFixed(2)}`;
}

