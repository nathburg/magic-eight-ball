// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


  
  let cardArray = []
  
  for (let i = 0; i < 78; i++) {
    cardArray.push('assets\\cards\\' + i + '.jpg')
  }

  function alternate(changeString) {
    var charArray = changeString.toLowerCase().split("");
    for (var i = 1; i < charArray.length; i += 2) {
        charArray[i] = charArray[i].toUpperCase();
    }
    return charArray.join("");
  };

  const questionInput = document.getElementById("question-input");
  const enterButton = document.getElementById("enter-button");
  const repeatQuestion = document.getElementById("repeat-question");
  const answer = document.getElementById("answer");
  const firstPart = document.getElementById("first-part");
  const secondPart = document.getElementById("second-part");

  enterButton.addEventListener('click', () => {
    const value = questionInput.value;
    repeatQuestion.textContent = alternate(value) + "?";
    const card = cardArray[Math.floor(Math.random() * cardArray.length)]
    answer.src= card
    firstPart.classList.add('hidden');
    secondPart.classList.remove('hidden');
    
  })



