window.onload = StartGame();

//get all of the buttons in the html
let buttons = document.querySelectorAll('button');

//gets one of the buttons at random for the answer
let answer = document.querySelector('button');



function StartGame() {

  //generate number between 1 - 10
  generateRandomNum = () => {
    return Math.floor((Math.random() * 10) + 1);
  }

  let checkForDuplicates = () => {
    let duplicate = false;
    for (i of buttons) {
      for (j of buttons) {
        if (i.innerText === j.innerText && i !== j) {
          duplicate = true;
        }
      }
    }
    return duplicate;
  }

  while (checkForDuplicates()) {
    for (i of buttons) {
      i.innerText = generateRandomNum();
    }
  }
}



 
//when a button is clicked, store that variable as input
for (i of buttons) {
  i.addEventListener('click', function() {
     input = this.innerText;
      console.log(input);
     let score = document.querySelector('#scoreNum').innerText;
      //check if the input is the same as the answer
  if (input == answer) {
    //if it is, add 1 to the score
    score++;
  }

  });
}  




//need each value in the buttons to be unique
//one easy way would be to change math random from 10 to 100 or 1000.. still a chance they will be the same.. but less of one :)

// 2. add event listener for click of the buttons
// 3. determine 'correct' number
// 4. check user input versus 'correct' number
// 5. add to the score at the bottom, if correct