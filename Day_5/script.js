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

