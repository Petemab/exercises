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
  const p = (a + b + c)/2;

  const areaOfTriangle = Math.sqrt(p * (p - a) * (p - b ) * (p - c));
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

// 6. Write a JavaScript program to determine whether a given year is a leap year 
// in the Gregorian calendar.


});
