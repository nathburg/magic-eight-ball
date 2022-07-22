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

  const questionInput = document.getElementById("question-input");
  const enterButton = document.getElementById("enter-button");
  const repeatQuestion = document.getElementById("repeat-question");
  const answer = document.getElementById("answer")

  enterButton.addEventListener('click', () => {
    const value = questionInput.value;
    repeatQuestion.textContent = value;
    const card = cardArray[Math.floor(Math.random() * cardArray.length)]
    answer.src= card
    console.log(card);
    console.log(answer.src);
  })

  console.log(cardArray[Math.floor(Math.random() * cardArray.length)])


