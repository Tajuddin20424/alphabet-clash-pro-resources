// function hideElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('hidden');
// }

// function showElementById(element){
//     const element = document.getElementById(elementId);
//     element.classList.remove('hidden');

// }

// function setBackgroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-orange-400');
// }

// function removeBackgroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('bg-orange-400');
// }


// function getARandomAlphabet(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets =alphabetString.split('');

//     const randomNumber = math.random()*25;
//     const index = math.round(randomNumber);

//     const alphabet = alphabets[index];
//     return alphabet;
// }




// function getARandomAlphabet(){
//     //get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     // get a random index between 0 -25
//     const randomNumber = Math.random() * 25;
//     const index = math.round(randomNumber);
//     // console.log(index);

//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;

// }




function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function getTexElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}


function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return Text;
}



function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

// function getARandomAlphabet() {
//     // get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     // get a random index between 0 -25
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
    
//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;
// }



