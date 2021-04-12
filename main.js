const ol = document.querySelector("ol");
const body = document.querySelector("body")

const secretKey = 5;


const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);
 const keyPressed = alphabet[Math.floor(Math.random() * 6)];
   console.log(keyPressed);
       console.log(alphabet);

       function keyboardResponse() {
           const h3Tag = document.createElement('h3')
           h3Tag.textContent = 'SECRET KEY PRESSED';
           body.aappendchild(h3Tag);
        }
       
let keyGuess = ''
for(let i = 0; i < alphabet.length; i ++) {
   // keyGuess += 'SECRET KEY PRESSED'
   keyGuess += '_'
}
const keyResultEl = document.querySelector('#keyspressed');
    keyResultEl.textContent = keyGuess;


document.body.addEventListener('keyup', function(event) {
    const letterResult = alphabet.indexOf(event.Key);
    console.log(letterResult);
    ol.innerHTML= letterResult.join('');
    if(letterResult === -1) {
        keyGuessEl.textContent = 'SECRET KEY PRESSED:' + letterResult;
    } else {
        let wordArray = keyGuess.split('')
       for(let i=0; i < keyGuess.length; i++) {
            if(alphabet[i] === event.key) {
                wordArray[i] = alphabet[i];

            }
    }
}
});


