// function play(){
//     // step-1: hide the home screen. To hide the screen add the class hidden to the home screen

//     // console.log("play start now");

//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     // console.log(playgroundSection.classList);

//     playgroundSection.classList.remove('hidden');
// }


function continueGame(){
    // step -1: generate a random  alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet',  alphabet);

    // srt randomly generated alphabet to the screen (show it)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}



function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}