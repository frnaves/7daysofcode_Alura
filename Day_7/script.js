


function soma(){
    var op1 = document.getElementById('op1').value
    var op2 = document.getElementById('op2').value
    alert(parseInt(op1)+parseInt(op2))
}

function subtracao(){
    var op1 = document.getElementById('op1').value
    var op2 = document.getElementById('op2').value
    alert(parseInt(op1)-parseInt(op2))
}

function multi(){
    var op1 = document.getElementById('op1').value
    var op2 = document.getElementById('op2').value
    alert(parseInt(op1)*parseInt(op2))
}

function divide(){
    var op1 = document.getElementById('op1').value
    var op2 = document.getElementById('op2').value
    alert(parseInt(op1)/parseInt(op2))
}

function sair(){
    alert('Obrigado por usar. Até a próxima')

    document.getElementById('op1').value = ''
    document.getElementById('op2').value = ''
}

