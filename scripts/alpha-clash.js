// // step-1: hide the home screen. to hide the screen add the class hidden to the home section
// function play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList); 
//     // show the playground

//     const playGroundSection = document.getElementById('play-ground'); 
//     playGroundSection.classList.remove('hidden'); 
//     console.log(playGroundSection.classList);  
// }

function handleKeyboardButtonPress(event){
    // console.log('button pressed'); 
    const playerPressed = event.key; 
    console.log('player pressed', playerPressed);
    
    // get the expected to press: 
    const currentAlphabetElement = document.getElementById('current-alphabet'); 
    const currentAlphabet = currentAlphabetElement.innerText; 
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase(); 
    console.log(playerPressed, expectedAlphabet);
    
    // check matched or not:
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        // update score: 
        // 1. get the current score 
        // 2. increase the score by 1
        // 3. show the updated score


        // start a new round 
        console.log('you have pressed correctly', expectedAlphabet); 
        removeBackgroundColorById(expectedAlphabet); 
        continueGame(); 
    }else{
        console.log('you missed. you lost a life'); 
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress); 

function continueGame(){
// step-1: generate a random alphabet
const alphabet = getARandomAlphabet(); 
console.log('your random alphabet', alphabet); 

// set randomly generated alphabet to the screen (show it)
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet; 

// set background color: 
setBackgroundColorById(alphabet); 
}



function play(){
    hideElementById('home-screen'); 
    showElementById('play-ground'); 
    continueGame(); 
}