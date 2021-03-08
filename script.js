const res = document.querySelector('#result');

function computerPlay(){
  let opts=["Rock", "Paper", "Scissors"];
  let rand = Math.floor(Math.random() * 3);
  // console.log("rand: " + rand);
  return opts[rand];
} 


function playRound(playerSelection, computerSelection){
  let player = playerSelection.toLowerCase();
  let comp = computerSelection.toLowerCase();

  // console.log("player: " + player);
  // console.log("comp: " + comp);

  res.textContent = "";

  const p = document.createElement('p');
  p.textContent = "player: " + player;
  res.appendChild(p);
  const c = document.createElement('p');
  c.textContent = "comp: " + comp;
  res.appendChild(c);

  // return 0 if comp wins
  // 1 if player wins
  // 2 if draw
  // 3 if error

  const resultText = document.createElement('p');
  resultText.textContent = "Result: ";
  if ( player == comp){
    resultText.textContent += "Draw!";
    res.appendChild(resultText);
    // console.log("Draw!");
    return 2;
  } else if (player == "scissors"){
    switch(comp){
      case "paper":
        resultText.textContent += "You win! Scissors beats Paper";
        res.appendChild(resultText);
        // console.log("You win! Scissors beats Paper");
        return 1;
      case "rock":
        resultText.textContent += "You lose! Rock beats Scissors";
        res.appendChild(resultText);
        // console.log("You lose! Rock beats Scissors");
        return 0;
    }
  } else if (player == "paper"){
    switch(comp){
      case "scissors":
        resultText.textContent += "You lose! Scissors beats Paper";
        res.appendChild(resultText);
        // console.log("You lose! Scissors beats Paper");
        return 0;
      case "rock":
        resultText.textContent += "You win! Rock beats Scissors";
        res.appendChild(resultText);
        // console.log("You win! Rock beats Scissors");
        return 1;
    }
  } else if (player == "rock"){
    switch(comp){
      case "scissors":
        resultText.textContent += "You win! Rock beats Scissors";
        res.appendChild(resultText);
        // console.log("You win! Rock beats Scissors");
        return 1;
      case "paper":
        resultText.textContent += "You lose! Paper beats Rock";
        res.appendChild(resultText);
        // console.log("You lose! Paper beats Rock");
        return 1;
    }
  } else {
    resultText.textContent += "What?!";
    res.appendChild(resultText);
    // console.log("What?!");
    return 3;
  }
}

// function gameRounds(){
//   let comp = 0;
//   let human = 0;
//
//   for(let j=0; j<6; j++ ){
//     let p = prompt("Rock, Paper, or Scissors?"); 
//     let g = playRound(p, computerPlay());
//     switch(g){
//       case 0:
//         comp++;
//         break;
//       case 1:
//         human++;
//         break;
//       case 2:
//         break;
//       default:
//         console.log("I didn't understand that...");
//         j--;
//     }
//   }
//
//   // console.log("Results: Human: " + human + " Computer: " + comp + ".");
// }

// game();

// playRound("rock", "scissors");
// playRound("rock", computerPlay());

function scoreCount(score){
  // let comp = 0;
  // let human = 0;
  let c = document.getElementById('compScore');
  let p = document.getElementById('playerScore');


  switch(score){
    case 0:
      c.value++; 
      break;
    case 1:
      p.value++;
      break;
    case 2:
      break;
    default:
      console.log("I didn't understand that...");
      j--;
  }

  if (c.value === "5") {
    alert("Computer Wins!");
    c.value = 0;
    p.value = 0;
  }
  if (p.value === "5") {
    alert("Human Wins!");
    c.value = 0;
    p.value = 0;
  }

}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // console.log(button.id);
    let score = playRound(button.id, computerPlay()); 
    scoreCount(score);
  })
})


