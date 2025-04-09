   

   const botones = document.querySelectorAll("button")
   let humanScore = 0;
   let computerScore = 0;
   let count = 0;
   const mensajeRonda = document.getElementById("mensajeRonda");
   const scoreHumano = document.getElementById("humanoScore");
   const scoreMaquina = document.getElementById("maquinaScore");
   const resultadoFinal = document.getElementById("resultadoFinal");

  botones.forEach((buttton) => {
    
    buttton.addEventListener("click",()=> {
        // eliminar el resultado final luego de que se reinicia el juego
        if (count === 0) {
            resultadoFinal.textContent = "";
          }
         // Se obtiene la eleccion del usuario
        const humanChoice = buttton.id;

        // funcion para obtener la opcion de la maquina
        function getComputerChoice(){
            randomNumber = Math.floor(Math.random()*3)+ 1
            if (randomNumber === 1){
                return "PIEDRA";
        
            }else if (randomNumber === 2){
                return "PAPEL";
            } else {
                return "TIJERA";
            }
        }; 

          // almacenamiento de la opcion de la maquina
        const computerChoice = getComputerChoice();

        const mensaje = playRound(humanChoice,computerChoice);

        // contador de rondas jugadas
        count++;

        function playRound(humanChoice,computerChoice){
            let mensaje = "";
            if (computerChoice === "PIEDRA"){
                switch (humanChoice){
                    case "PIEDRA" :
                        mensaje = "Empate, nadie gana punto"; 
                        break;
                    case "PAPEL" :
                        mensaje = "GANASTE !! El papel le gana a la piedra";
                        humanScore += 1;
                        break;
                    case "TIJERA":
                        mensaje = "PERDISTE !! La piedra gana contra la tijera";
                        computerScore += 1;
                        break;
                     default : 
                       mensaje =("Debes Ingresar una opcion valida");
                       computerScore += 1;
                       
                }
            } else if (computerChoice === "PAPEL"){
                switch (humanChoice){
                    case "PIEDRA" :
                        mensaje = "PERDISTE !! El papel le gana a la piedra";
                        computerScore += 1;
                        break;
                    case "PAPEL" :
                        mensaje = "Empate, nadie gana punto";
                        break;
                    case "TIJERA":
                        mensaje = "GANASTE !! La tijera gana contra el papel";
                        humanScore += 1;
                        break;
                     default : 
                       mensaje = "Debes Ingresar una opcion valida";
                       computerScore += 1;
                }
            } else if (computerChoice === "TIJERA") {
                switch (humanChoice){
                    case "PIEDRA" :
                        mensaje = "GANASTE !! La piedra gana contra la tijera";
                        humanScore += 1;
                        break;
                    case "PAPEL" :
                        mensaje = "PERDISTE !! La tijera gana contra el papel";
                        computerScore += 1;
                        break;
                    case "TIJERA":
                        mensaje = "Empate, nadie gana punto" ;
                        break;
                     default : 
                       mensaje = "Debes Ingresar una opcion valida" ;
                       computerScore += 1;
                                }
                 }
                 return mensaje

        }

        mensajeRonda.textContent = `Ronda ${count}: Tú elegiste ${humanChoice}, la máquina eligió ${computerChoice}. ${mensaje}`;

        // Actualizar puntajes en pantalla
           scoreHumano.textContent = humanScore;
           scoreMaquina.textContent = computerScore;

      // Verificar si alguien llegó a 5 puntos
       
       if (humanScore === 5 || computerScore === 5) {
       if (humanScore > computerScore) {
        resultadoFinal.textContent = `¡Ganaste el juego! Puntaje final: ${humanScore} - ${computerScore}`;
      } else {
        resultadoFinal.textContent = `¡Perdiste el juego! Puntaje final: ${humanScore} - ${computerScore}`;
      }

      // Reiniciar juego
      humanScore = 0;
      computerScore = 0;
      count = 0;
      
    }



    });
    
    
  });


