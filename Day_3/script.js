function responder(){
    let carreira = prompt("Quer seguir por qual carreira? Responda 1 para Front-end e 2 para Back-End");

    
    while (carreira != 1 && carreira != 2) {
        alert("Responde uma valor válido")
        carreira = prompt("Quer seguir por qual carreira? Responda 1 para Front-end e 2 para Back-End");
    }

    if (carreira == 1) {
        let ling = prompt("Bacana que escolheu Front-End, agora me responda qual framework gostaria de aprender. Responda 1 para React ou 2 para Vue.")
        
        while(ling != 1 && ling != 2){
            alert("Responde uma valor válido")
            ling = prompt("Responda 1 para React ou 2 para Vue.")            
        }  
        
        alert(`Show, de fato aprender o framework ${ling} fará toda diferença em sua carreira! Sucesso! 🚀`)
                
    } else { 

        let ling = prompt("Bacana que escolheu Back-End, agora me responda qual linguagem gostaria de aprender. Responda 1 para C# ou 2 para Java.")
        
        while(ling != 1 && ling != 2){
            alert("Responde uma valor válido")
            ling = prompt("Responda 1 para C# ou 2 para Java.")            
        } 

        alert(`Show, de fato aprender a linguagem ${ling} fará toda diferença em sua carreira! Sucesso! 🚀`)   
    }

    let fullstack = prompt("Sabemos que aprender tanto front quanto back-end são essenciais no desenvolvimento de aplicações, tanto que existem profissionais que aprendem ambas abordagens, se tornando então um profissional Full-Stack. Você deseja se tornar um? Clique em OK SIM e Cancelar para NÃO.")

    if (fullstack == ""){
        let techs = prompt("Isso!! Seguir uma carreira Full-stack com certeza te tornará um profissional adaptavel as tecnologias e podendo trabalhar em diversas frentes. Agora, me responda qual tecnologia deseja seguir?")

        while(techs != null && techs != ""){
            techs = prompt(`Bacana, a tecnologia ${techs} fará toda diferença. Me gostaria de aprender mais uma? Clique em ok ou cancelar para finalizar`)
        }

        alert("É isso ai, contínue no desenvolvimentos dessas tecnologias e sucesso!")   

    } else {
        alert("Focar em um segmento é essencial para se especializar em algumas tecnologias. Siga firme em seu desenvolvimento. Mas nunca pare de estudar e se atualizar. Sucesso!")
    }

} 



