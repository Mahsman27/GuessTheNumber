//generate number between 1 - 10
generateRandomNum = () => {
    return Math.floor((Math.random() * 10) + 1);     
}

//get all of the buttons in the html
let buttons = document.querySelectorAll('button');

//simple for loop that uses the generateRandomNum function to insert a number into the confines of the button
for (i of buttons) {
  i.innerText = generateRandomNum();
}

//need each value in the buttons to be unique
//one easy way would be to change math random from 10 to 100 or 1000.. still a chance they will be the same.. but less of one :)

// 2. add event listener for click of the buttons
// 3. determine 'correct' number
// 4. check user input versus 'correct' number
// 5. add to the score at the bottom, if correct