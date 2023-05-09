
let btns = document.getElementsByClassName('btn');
const displayed = document.getElementById('displayed')

function assignValue(strValue){
  //assigns a value to either current or second number based on isSecondReading state;
  console.log(strValue);
  if (isSecondReading){
    secondNumber += strValue;
  } else {
    currentNumber+= strValue;
  }
}

function assignOperation(element, strValue){
  if (isSecondReading === false){
    console.log(strValue)
    element.classList.add('btnSelected')
    isSecondReading = true;
    operationType = strValue;
  } else {
    console.log('one operator only')
  }
}

for (let i = 0; i < btns.length; i++) {
  // have a second reading mode toggled to false initially
  // if operations if clicked, reading mode will be turned on and we will store the operation type
  btns[i].addEventListener('mouseover', () => {
    btns[i].classList.add('btnHover');
  });

  btns[i].addEventListener('mouseout', () => {
    btns[i].classList.remove('btnHover');
  });

  btns[i].addEventListener('click', ()=>{
    if (currentNumber === '0'){
      currentNumber = ''
    }

    //numbers
    if (btns[i].id === 'zero'){
      if (currentNumber !== ''){
        assignValue('0')
      }
    }
    if (btns[i].id === 'one'){
      assignValue('1');
    }
    if (btns[i].id === 'two'){
      assignValue('2')
    }
    if (btns[i].id === 'three'){
      assignValue('3')
    }
    if (btns[i].id === 'four'){
      assignValue('4')
    }
    if (btns[i].id === 'five'){
      assignValue('5')
    }
    if (btns[i].id === 'six'){
      assignValue('6')
    }
    if (btns[i].id === 'seven'){
      assignValue('7')
    }
    if (btns[i].id === 'eight'){
      assignValue('8')
    }
    if (btns[i].id === 'nine'){
      assignValue('9')
    }

    //operations
    if (btns[i].id === 'plus'){
      assignOperation(btns[i], 'plus');
    }

    if (btns[i].id === 'minus'){
      assignOperation(btns[i], 'minus');
    }

    if (btns[i].id === 'multiply'){
      assignOperation(btns[i], 'multiply');
    }

    if (btns[i].id === 'divide'){
      assignOperation(btns[i], 'divide');
    }

    //operate
    if (btns[i].id === 'enter'){
      console.log('entered')
      isSecondReading = false;
      operationType = ''
    }

    //shifts displayed mode
    if (isSecondReading && secondNumber !== ''){
      displayed.textContent = secondNumber;
    } else {
      displayed.textContent = currentNumber;
    }

  });
}


// const displayedContent = document.createElement('div');
// displayedContent.textContent = currentNumber;
// displayed.appendChild(displayedContent);


function resetCurrent() {
  currentNumber = '';
}

let isSecondReading = false;
let currentNumber = '0';
let secondNumber = ''
let operationType = ''

displayed.textContent = currentNumber;
