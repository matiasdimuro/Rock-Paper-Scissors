const userName = document.querySelector('#userName');
const userScore = document.querySelector('#userScore');
const IAScore = document.querySelector('#IAScore');
const userChoose = document.querySelector('#userChoose');
const IAChoose = document.querySelector('#IAChoose');
const footer = document.querySelector('footer');

let name = prompt("Please enter your name", "Thomas");

let userPoints = 0, IAPoints = 0;

while (name == null || name == "") {
    alert("Input a valid name");
    name = prompt("Please enter your name", "Thomas");
}

userName.innerHTML = `${name}`;

// =======================================================
// Piedra, Papel o Tijera
// =======================================================
function choose(el) {
    
    let chooseIA;
    let rand = Math.round((Math.random() * 2) + 1);

    // Eleccion de la IA
    switch (rand) {
        case 1:
            chooseIA = 'rock'
            break;
        
        case 2:
            chooseIA = 'paper'
            break;
        
        case 3:
            chooseIA = 'scissors'
            break;
    }

    // Debugging
    console.log("IA " + chooseIA + " " + rand);
    console.log(userName.textContent + " " + el);
    console.log("");

    // Muestro eleccion del Usuario
    switch (el) {
        case 'rock':
            userChoose.setAttribute("src", "./drawables/piedra.png");
            userChoose.style.display = "block"
            break;
    
        case 'paper':
            userChoose.setAttribute("src", "./drawables/papel.png");
            userChoose.style.display = "block"
            break;
        
        case 'scissors':
            userChoose.setAttribute("src", "./drawables/tijera.png");
            userChoose.style.display = "block"
            break;
    }

    // Muestro eleccion de la IA
    switch (chooseIA) {
        case 'rock':
            IAChoose.setAttribute("src", "./drawables/piedra.png");
            IAChoose.style.display = "block"
            break;

        case 'paper':
            IAChoose.setAttribute("src", "./drawables/papel.png");
            IAChoose.style.display = "block"
            break;
        
        case 'scissors':
            IAChoose.setAttribute("src", "./drawables/tijera.png");
            IAChoose.style.display = "block"
            break;
    }

    footer.style.display = "block";

    // Comparo y averiguo el Ganador!
    if (
        el == 'rock' && chooseIA == 'scissors' ||
        el == 'paper' && chooseIA == 'rock' ||
        el == 'scissors' && chooseIA == 'paper'
    ) {
        // alert("Ganó " + userName.textContent);
        userPoints += 1;
        userScore.innerHTML = userPoints;
        footer.innerHTML = `${userName.textContent} won the round!`
    }
    else if (
        chooseIA == 'rock' && el == 'scissors' ||
        chooseIA == 'paper' && el == 'rock' ||
        chooseIA == 'scissors' && el == 'paper'
    ) {
        // alert("Ganó la IA")
        IAPoints += 1;
        IAScore.innerHTML = IAPoints;

        footer.innerHTML = `IA won the round!`
    }
    else {
        // alert("Empate")
        footer.innerHTML = `Draw`;
    }

    // Me fijo si termino el juego!
    if (userPoints == 10) {

        footer.innerHTML = `${userName.textContent} is the winner!`;

        setTimeout(() => {
            reiniciar();
        }, 2000);

    } else if (IAPoints == 10) {

        footer.innerHTML = `IA is the winner!`;

        setTimeout(() => {
            reiniciar();
        }, 2000);

    }
}

function reiniciar() {
    userPoints = 0;
    IAPoints = 0;

    footer.innerHTML = "";
    userScore.innerHTML = "";
    IAScore.innerHTML = "";

    userChoose.style.display = "none";
    IAChoose.style.display = "none";
    footer.style.display = "none"
}