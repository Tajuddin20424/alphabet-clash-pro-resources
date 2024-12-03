// // function play(){
// //     // step-1: hide the home screen. To hide the screen add the class hidden to the home screen

// //     // console.log("play start now");

// //     const homeSection = document.getElementById('home-screen');
// //     // console.log(homeSection.classList);
// //     homeSection.classList.add('hidden');

// //     // show the playground
// //     const playgroundSection = document.getElementById('play-ground');
// //     // console.log(playgroundSection.classList);

// //     playgroundSection.classList.remove('hidden');
// // }


// function continueGame(){
//     // step -1: generate a random  alphabet
//     const alphabet = getARandomAlphabet();
//     console.log('your random alphabet',  alphabet);

//     // srt randomly generated alphabet to the screen (show it)

//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     currentAlphabetElement.innerText = alphabet;

//     // set background color
//     setBackgroundColorById(alphabet);

// }



// function play(){
//     hideElementById('home-screen');
//     showElementById('play-ground');
//     continueGame();
// }





// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }

function handleKeyboardButtonPress(){
    console.log('button pressed');

}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function handleKeyboardKeyUpEvent(){
    console.log('button pressed. i am impressed!!!');

}

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player presses', playerPressed);

    // get the expected to press
    const continueGame = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, currentAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
    }
    else{
        console.log('you missed. you lost a life');
    }
}


function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you got a point');
        console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else{
        console.log('dhurr vaiya va apu...right key press koro');
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    // document.getElementById('play-ground').classList.remove('hidden');
    continueGame();
}