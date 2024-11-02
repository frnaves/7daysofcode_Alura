function showData(){
    // Declaração e obtenção de Variáveis
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const prog = document.getElementById('prog').value;

    const cidade = prompt("Digite a sua cidade:");

    // Verificação de validade antes de exibir os dados
    if (nome && prog && idade) { 
        document.getElementById('output').innerHTML =
        `<h4>Dados Enviados:</h4> <br>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Linguagem:</strong> ${prog}</p>`;

        // Pergunta de confirmação
        const likesProg = confirm(`Você gosta de ${prog}?`);
        if (likesProg) {
            alert(`Muito bom! Continue estudando ${prog} e você terá muito sucesso.`);
        } else {
            alert(`Ahh que pena... Já tentou aprender outras linguagens?`);
        }

    } else {
        alert("Preencha todos os campos corretamente.");
    }


}

