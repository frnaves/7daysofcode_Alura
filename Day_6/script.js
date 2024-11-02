let frutas = []
let lat = []
let cong = []
let doces = []



function registrar(){
    let item = document.getElementById('item').value
    let tipo = document.getElementById('tipo').value

    switch (tipo){
        case 'frutas':
            frutas.push(item)   
            break 
        case 'laticinios':
            lat.push(item)      
            break     
        case 'congelados':
            cong.push(item)    
            break 
        case 'doces':
            doces.push(item)   
            break   
    }

    document.getElementById('item').value =''
    document.getElementById('tipo').value =''
    
    document.getElementById('lista').innerHTML =             
    `<ul>
    <li>Frutas: ${frutas} </li>
    <li>Laticínios: ${lat}</li>
    <li>Congelados: ${cong}</li>
    <li>Doces: ${doces}</li>
    </ul>`

}


function remover(){

    let item2 = document.getElementById('item2').value
    let tipo2 = document.getElementById('tipo2').value

    switch (tipo2){
        case 'frutas':
            if (frutas.includes(item2)){
                alert(`Ok, ${item2} será removido`)
                frutas.splice(frutas.indexOf(item2))
            } else {
                alert('item não encontrado')
            }
            break 
        case 'laticinios':
            if (lat.includes(item2)){
                alert(`Ok, ${item2} será removido`)
                lat.splice(lat.indexOf(item2))
            } else {
                alert('item não encontrado')
            }
            
            break     
        case 'congelados':
            if (cong.includes(item2)){
                alert(`Ok, ${item2} será removido`)
                cong.splice(cong.indexOf(item2))
            } else {
                alert('item não encontrado')
            }
                
            break 
        case 'doces':
            if (doces.includes(item2)){
                alert(`Ok, ${item2} será removido`)
                doces.splice(doces.indexOf(item2))
            } else {
                alert('item não encontrado')
            }

            break   
    }

    document.getElementById('item2').value =''
    document.getElementById('tipo2').value =''


    document.getElementById('lista').innerHTML =             
    `<ul>
    <li>Frutas: ${frutas} </li>
    <li>Laticínios: ${lat}</li>
    <li>Congelados: ${cong}</li>
    <li>Doces: ${doces}</li>
    </ul>`

}

