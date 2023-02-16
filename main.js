let char='abcdefghijklmnopqrstuvwxyz'.split('')
let lettersContainer= document.querySelector(".letters")



char.forEach(c => {
    let textnode = document.createTextNode(c), span=document.createElement('span')

    span.appendChild(textnode)
    span.className='letter-box'
lettersContainer.appendChild(span)
});


const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
  }


let button=document.querySelector('.b')


let allKeys=Object.keys(words)

let randomNumber =Math.floor(Math.random()*allKeys.length)

let randomPropName = allKeys[randomNumber]

let randomPropValue=words[randomPropName]

let randomValueNumber=Math.floor(Math.random()*randomPropValue.length)

let randomValueValue=randomPropValue[randomValueNumber]






document.querySelector(".game-info .category span").innerHTML = randomPropName;


let lettersGuessContainer= document.querySelector(".letters-guess")

let lettersAndSpace=Array.from(randomValueValue)

lettersAndSpace.forEach(letter=>{
  let emptySpan=document.createElement('span')

  if(letter===' '){
    emptySpan.className='with-space'
  }
lettersGuessContainer.appendChild(emptySpan)
})

let guessSpans=document.querySelectorAll('.letters-guess span')

let theDraw=document.querySelector('.hangman-draw')

let wrongAttempts=0

document.addEventListener('click',(e)=>{

  let TheStatus=false

if(e.target.className==='letter-box'){

e.target.classList.add('clicked')


let theClickedLetter = e.target.innerHTML.toLowerCase();

let theChosenWord=Array.from(randomValueValue.toLowerCase())

theChosenWord.forEach((wordLetter,WordIndex)=>{
  

if(theClickedLetter == wordLetter){

  TheStatus = true

      guessSpans.forEach((span,SpanIndex)=>{
        
        if(WordIndex===SpanIndex){
          
          span.innerHTML=theClickedLetter
        }
      })

      }

    })

    if(TheStatus!==true){
      wrongAttempts++

      theDraw.classList.add(`wrong-${wrongAttempts}`)
    } // Play Fail Sound
    // document.getElementById("fail").play();

    if (wrongAttempts === 8) {

      endGame();

      lettersContainer.classList.add("finished");

    }

  } else {

    // Play Success Sound
    // document.getElementById("success").play();

  }



});

// End Game Function
function endGame() {

// Create Popup Div
let div = document.createElement("div");

// Create Text
let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

// Append Text To Div
div.appendChild(divText);

// Add Class On Div
div.className = 'popup';

// Append To The Body
document.body.appendChild(div);

}









