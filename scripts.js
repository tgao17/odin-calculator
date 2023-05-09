
let btns = document.getElementsByClassName('btn');
const displayed = document.getElementById('displayed')

function add(first, second){
  return first + second;
}

function minus(first, second){
  return first - second;
}

function multiply(first, second){
  return first * second;
}

function divide(first,second){
  return first/second;
}

function assignValue(strValue){
  //assigns a value to either current or second number based on isSecondReading state;
  if (isCalculated && isSecondReading){
    console.log('second: ' + strValue);
    secondNumber += strValue;
  } else if (isCalculated){
    reset();
    console.log('reset')
    currentNumber = '';
    currentNumber+= strValue;
  } else if (isSecondReading){
    console.log('second: ' + strValue);
    secondNumber += strValue;
  } else { // we hsould only see this case ONCE
    currentNumber+= strValue;
    console.log('current: '+strValue);
  }
}

function assignOperation(element, strValue){
  if (currentNumber === ''){
    currentNumber = '0';
    return 'no values added yet';
  } else if (isSecondReading === false){
    console.log(strValue)
    element.classList.add('btnSelected')
    isSecondReading = true;
    operationType = strValue;
    // console.log('isSecondReading now true');
  } else {
    console.log('one operator only')
  }
}

for (let i = 0; i < btns.length; i++) {
  // have a second reading mode toggled to false initially
  // if operations if clicked, reading mode will be turned on and we will store the operation type
  btns[i].addEventListener('mouseover', () => {
    if (btns[i].id !== 'displayed' && btns[i].id !== 'blank' ){
      btns[i].classList.add('btnHover');
    }
  });

  btns[i].addEventListener('mouseout', () => {
    btns[i].classList.remove('btnHover');
  });

  btns[i].addEventListener('click', ()=>{
    if (currentNumber === '0' && btns[i].id !== 'displayed' && btns[i].id !== 'blank'  ){
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
    if (isSecondReading && btns[i].id === 'enter'){
      console.log('operate')
      //wipe operation's btnSelected state
      for (let j = 0 ; j<btns.length; j++){
        btns[j].classList.remove('btnSelected');
      }
      //execute operation
      let a = parseInt(currentNumber);
      let b = parseInt(secondNumber);
      if (operationType === 'plus'){
        currentNumber = add(a,b).toString();
      } else if (operationType === 'minus'){
        currentNumber = minus(a,b).toString();
      } else if (operationType === 'multiply'){
        currentNumber = multiply(a,b).toString();
      } else {
        currentNumber = divide(a,b).toString();
      }
      secondNumber = '';
      isSecondReading = false;
      console.log('answer: '+currentNumber)
      // console.log('isSecondReading now false');
      isCalculated = true;
    }

    //clear
    if (btns[i].id === 'clear'){
      for (let j = 0 ; j<btns.length; j++){
        btns[j].classList.remove('btnSelected');
      }
      reset();
      currentNumber = '0';
    }

    //delete
    if (btns[i].id === 'delete'){
      if (isSecondReading){
        if (secondNumber === '0'){
          secondNumber = '0'
        } else if (secondNumber.length === 1){
          secondNumber = '0'
        } else {
          secondNumber = secondNumber.slice(0,secondNumber.length - 1);
        }
      } else {
        if (currentNumber === '0'){
          currentNumber = '0'
        } else if (currentNumber.length === 1){
          currentNumber = '0'
        } else {
          currentNumber = currentNumber.slice(0,currentNumber.length - 1);
        }
      }
    }
    //shifts displayed mode when new number is pressed for second reading
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


function reset() {
  isSecondReading = false;
  secondNumber = '';
  operationType = '';
  isCalculated = false;
}

reset();
currentNumber = '0';

displayed.textContent = currentNumber;
