window.addEventListener('DOMContentLoaded', function() {

  // Write a JavaScript program to display the current day and time in the following format.  Go to the editor
  // Sample Output : Today is : Tuesday.
  // Current time is : 10 PM : 30 : 38

  const now = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  document.querySelector('#today').innerHTML = days[now.getDay()];
  document.querySelector('#time').innerHTML = now.toLocaleTimeString();

  // Write a JavaScript program to print the contents of the current window.
  // console.log(window.print());

  //   3. Write a JavaScript program to get the current date.  Go to the editor
  // Expected Output :
  // mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

  document.querySelector('#date').innerHTML = now.toLocaleDateString();

  // 4. Write a JavaScript program to find the area of a triangle where lengths of
  // the three of its sides are 5, 6, 7.

  const a = 5;
  const b = 6;
  const c = 7;
  const p = (a + b + c) / 2;

  const areaOfTriangle = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  document.querySelector('#area').innerHTML = areaOfTriangle;
  //
  // 5. Write a JavaScript program to rotate the string 'w3resource' in right direction
  // by periodically removing one letter from the end of the string and attaching it to the front.

  const theString = 'w3resource';

  document.querySelector('#string').innerHTML = theString;

  document.querySelector('.stringButton').addEventListener('click', manipulateString);

  function manipulateString() {
    let mnpString = theString.slice(0, -1);
    document.querySelector('#string').innerHTML = mnpString;
    console.log(mnpString);
  }
  //this one doesn;t seem to work and it's the solution, so, you know
  document.querySelector('#target').addEventListener('onload', animate_string);
  function animate_string(id) {
    const element = document.getElementById(id);
    const textNode = element.childNodes[0]; // assuming no other children
    let text = textNode.data;

    setInterval(() => {
      text = text[text.length - 1] + text.substring(0, text.length - 1);
      textNode.data = text;
    }, 100);
  }

  // 6. Write a JavaScript program to determine whether a given year is a leap year
  // in the Gregorian calendar.

  // function isLeap(year){
  //   if(!year % 100 === 0){
  //     console.log('it is not a leap year');
  //   } else if(!year % 400 === 0){
  //     console.log('it is not a leap year');
  //   }else if(!year % 4 === 0){
  //     console.log('it is not a leap year');
  //   } else {
  //     console.log('it is a leap year');
  //   }
  //
  // }

  function isLeap(year) {
    if (year % 100 === 0 && year % 100 === 0 && year % 4 === 0) {
      console.log('this is a leap year');
    } else {
      console.log('this is not a leap year');
    }
  }

  isLeap(2004);
  // isLeap(2004);
  // isLeap(2000);

  // year = window.prompt("Input a Year : ");
  // x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  // console.log(x);

  // 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

  function findSundays() {
    for (let year = 2014; year <= 2050; year++) {
      const janFirst = new Date(year, 0, 1);
      if (janFirst.getDay() === 0) {
        console.log(`1st of January is a Sunday in ${year}`);
      }
    }
  }

  findSundays();

  // 8. Write a JavaScript program where the program takes a random integer between
  // 1 to 10, the user is then prompted to input a guess number. If the user input
  // matches with guess number, the program will display a message "Good Work" otherwise
  // display a message "Not matched".

  // userNum =

  const answerField = document.querySelector('.answer');
  document.querySelector('.guessButton').addEventListener('click', guessNumber);

  function guessNumber() {
    const userNum = parseInt(document.querySelector('.guess').value);
    console.log(userNum);
    const myGuess = Math.floor((Math.random() * 10) + 1);
    console.log(myGuess);
    if (userNum === myGuess) {
      return answerField.innerHTML = `You guessed correctly. The computer also selected ${userNum}`;
    } else {
      return answerField.innerHTML = `You guessed wrong. The computer selected ${myGuess}`;
    }

  }

  // 9. Write a JavaScript program to calculate days left until next Christmas.

  const christmas = new Date(now.getFullYear(), 11, 25);
  const daysTilXmas = document.querySelector('.daysTilXmas');

  function daysUntilXmas() {
    const totalTime = (christmas.getTime() - now.getTime());
    return daysTilXmas.innerHTML = (Math.ceil(totalTime / 24 / 60 / 60 / 1000));

  }

  daysUntilXmas();

  // 10. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
  // Test Data :
  // console.log(is_array('w3resource'));
  // console.log(is_array([1, 2, 4, 0]));
  // false
  // true

  // const findArray = document.querySelector('#isAnArray');
  // findArray.addEventListener('click', isAnArray);
  //
  //
  // function isAnArray(e){
  //   e.preventDefault();
  //   const inputValue = findArray.querySelector('input[type="text"]').value;
  //   console.log(inputValue);
  //   if(Array.isArray(inputValue)){
  //     return console.log(true);
  //   } else {
  //     return console.log(false);
  //   }
  // }

  const isArray = input => {
    if (toString.call(input) === '[object Array]')
      return true;
    return false;
  };
  console.log(isArray('w3resource'));
  console.log(isArray([1, 2, 4, 0]));

  // isAnArray();

  // isAnArray('w3resource');
  // isAnArray([1, 2, 4, 0]);

  //   3. Write a JavaScript function to get the first element of an array.
  // Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
  // Test Data :
  // console.log(first([7, 9, 0, -2]));
  // console.log(first([],3));
  // console.log(first([7, 9, 0, -2],3));
  // console.log(first([7, 9, 0, -2],6));
  // console.log(first([7, 9, 0, -2],-3));
  // Expected Output :
  // 7
  // []
  // [7, 9, 0]
  // [7, 9, 0, -2]
  // []

  function findFirst(a,n) {
    if(n === undefined){
      console.log(a[0]);
    } else {
      console.log(a.slice(0,n));
    }
  }

  findFirst([7, 9, 0, -2]);
  findFirst([7, 9, 0, -2],3);
  findFirst([7, 9, 0],-3);








});
