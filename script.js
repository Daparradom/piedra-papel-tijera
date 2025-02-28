console.log('Hello World')

// console.log(getComputerChoice())

function getComputerChoice(){
    randomNumber = Math.floor(Math.random()*3)+ 1
    if (randomNumber === 1){
        return "PIEDRA";

    }else if (randomNumber === 2){
        return "PAPEL";
    } else {
        return "TIJERA";
    }
}
// let personChoice = String(window.prompt("Elije piedra, papel o tijera",""));
function getHumanChoice (){
    let personChoice = String(window.prompt("Elije piedra, papel o tijera",""));
    personChoice = personChoice.toUpperCase();
    return personChoice
}


// console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    if (computerChoice === "PIEDRA"){
        switch (humanChoice){
            case "PIEDRA" :
                window.alert("Empate, nadie gana punto");
                break;
            case "PAPEL" :
                window.alert("GANASTE !! El papel le gana a la piedra");
                humanScore += 1;
                break;
            case "TIJERA":
                window.alert("PERDISTE !! La piedra gana contra la tijera");
                computerScore += 1;
                break;
             default : 
               window.alert("Debes Ingresar una opcion valida");
               computerScore += 1;
               
        }
    } else if (computerChoice === "PAPEL"){
        switch (humanChoice){
            case "PIEDRA" :
                window.alert("PERDISTE !! El papel le gana a la piedra")
                computerScore += 1;
                break;
            case "PAPEL" :
                window.alert("Empate, nadie gana punto");
                break;
            case "TIJERA":
                window.alert("GANASTE !! La tijera gana contra el papel");
                humanScore += 1;
                break;
             default : 
               window.alert("Debes Ingresar una opcion valida");
               computerScore += 1;
        }
    } else if (computerChoice === "TIJERA") {
        switch (humanChoice){
            case "PIEDRA" :
                window.alert("GANASTE !! La piedra gana contra la tijera")
                humanScore += 1;
                break;
            case "PAPEL" :
                window.alert("PERDISTE !! La tijera gana contra el papel");
                computerScore += 1;
                break;
            case "TIJERA":
                window.alert("Empate, nadie gana punto");
                humanScore += 1;
                break;
             default : 
               window.alert("Debes Ingresar una opcion valida");
               computerScore += 1;
                        }
         }
         return computerScore,humanScore
}

// const humanSelection = getHumanChoice()
// const computerSelection = getComputerChoice()

// playRound(humanSelection, computerSelection);

function playGame () {
    // let humanScore = 0;
    // let computerScore = 0;
    // const humanSelection = getHumanChoice()
    // const computerSelection = getComputerChoice()
    let count = 1; 

    while (count <= 5 ) {
        window.alert("Ronda: " + count)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        // window.alert("Ronda: " + count) 
        playRound(humanSelection, computerSelection);
        console.log("Ronda :" + count);
        console.log("Humano :" + humanSelection);
        console.log("Maquina :" + computerSelection);
        console.log("Score Humano :" + humanScore);
        console.log("Score computer :" + computerScore);
        count += 1;
    } 
     if (humanScore > computerScore){
        window.alert ("Humano gana con: "+ humanScore + " Puntos contra: "+computerScore+" de la maquina")
     } else if (humanScore < computerScore){
        window.alert ("Humano pierde con: "+ humanScore + " Puntos contra: "+computerScore+" de la maquina")
     } else {
        window.alert ("Empate a: " + humanScore + " Puntos")
     }

}

playGame();