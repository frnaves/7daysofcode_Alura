console.log( false == '0' ); /* True */
console.log( null == undefined ); /* True */
console.log( " \t\r\n" == 0 ); /* True */
console.log( ' ' == 0 ); /* True */


let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}




//Formatação

document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelectorAll('.code').forEach((block) => {
        // Obtém o texto original sem elementos HTML
        let code = block.innerText
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Aplica substituições com expressões regulares para estilização
        code = code
            .replace(/(\/\/.*?$)/gm, '<span class="comment">$&</span>') // Comentários
            .replace(/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, '<span class="string">$&</span>') // Strings
            .replace(/\b(function|var|const|let|return|if|else|true|false)\b/g, '<span class="keyword">$&</span>') // Palavras-chave
            .replace(/(\b\w+\b)(?=\s*=)/g, '<span class="variable">$&</span>') // Variáveis
            .replace(/([(){}[\]])/g, '<span class="parentheses">$&</span>') // Parênteses e colchetes
            .replace(/\b(console|log)\b/g, '<span class="function">$&</span>'); // Funções

        // Define o HTML do bloco formatado de volta
        block.innerHTML = code;
    });
});


















