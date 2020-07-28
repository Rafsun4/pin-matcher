// Hide Notification Section
const matchNotify                 = document.getElementById('match');
const noMatchNotify               = document.getElementById('noMatch');
      matchNotify.style.display   = 'none';
      noMatchNotify.style.display = 'none';

// This Generates Random Numbers of Four Digits
const generatedPin   = document.getElementById('generatedPin');
const generatePinBtn = document.getElementById('generatePinBtn');
generatePinBtn.addEventListener('click', function () {
    const generatePin        = Math.floor(1000 + Math.random() * 9000);  //This generates 4 digits
          generatedPin.value = generatePin;
})

// This  is User Input Section
const userInput    = document.getElementById('userInput');
const userInputBtn = document.getElementsByClassName('button');
for (let i = 0; i < userInputBtn.length; i++) {
    const btn = userInputBtn[i];
    btn.addEventListener('click', function (event) {
        const btnClicked = event.target;
        if (btnClicked.innerText === 'C') {
            userInput.value = "";  //This is "All Clear" button
        }
        else if (btnClicked.innerText === '<') {
            const newClearAll       = userInput.value.slice(0, -1);  //This is "Clear(removes last number )" button
                  userInput.value   = newClearAll;
        }
        else {
            userInput.value += btnClicked.innerText;
        }
    })
}

//Submit Section To Check IF The 4 Digit Number Matches the User Input

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function () {
    if (userInput.value === "") {
        alert("Give A Pin To See If It Matches Or Not");        //Empty numbers can't be input
    }
    else if (generatedPin.value === "") {
        alert("Generate A Pin First");                         //Pin Must Generate a Number of 4 Digits
    }
    else {
        if (generatedPin.value == userInput.value) {
            matchNotify.style.display   = 'block';              //Pin Matched Notification
            noMatchNotify.style.display = 'none';
        }
        else {
            noMatchNotify.style.display = 'block';
            matchNotify.style.display   = 'none';            //Pin didn't Match Notification
            leftTry();
        }
    }
})

//You Can Only Try 3 Times
const tryLeft   = document.getElementById('tryLeft');
function leftTry() {
    tryLeft.innerText -= 1;
    if (tryLeft.innerText === '0') {
        submitBtn.style.display = 'none';
    }
}