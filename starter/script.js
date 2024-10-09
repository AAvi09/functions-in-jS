'use strict';

const bookings = [];

const flightBookings = function (
  flightNumber,
  numberOfPassengers = 1,
  price = 900
) {
  const booking = {
    flightNumber,
    numberOfPassengers,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
};

flightBookings('LH123', 70, 1100);
flightBookings('MHJ456', 120);

const flight = 'GJH678';
const avi = {
  name: 'Avi',
  passport: 2564789789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'KLM876';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 2564789789) {
    alert('you re chcked in');
  } else {
    alert('wrong passport');
  }
};

checkIn('GJH678', avi);
console.log(flight, avi);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//HIGHER-ORDER FUNCTIONS
const transformer = function (str, fn) {
  console.log(`originl string is : ${str}`);
  console.log(`transformed string is : ${fn(str)}`);
  console.log(`string is transformed by : ${fn.name}`);
};

transformer('javascript is the best', upperFirstWord);
transformer('javascript is the best', oneWord);

const greet = greeting => {
  return name => console.log(`${greeting}, ${name}`);
};
greet('hello')('avi');

// const karoNamaskar = function (namaskar) {
//   return function (naam) {
//     console.log(`${namaskar},${naam}`);
//   };
// };

// const karliyaNamaskar = karoNamaskar('ram ram');
// karliyaNamaskar('bodhpal');

const karoNamaskar = namskar => naam => console.log(`${namskar},${naam}`);

karoNamaskar('radhey radhey')('bodhpal');

const AirIndia = {
  airline: 'AirIndia',
  iataCode: 'AI',
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
  },
};
const Indigo = {
  airline: 'INDIGO',
  iataCode: 'WA',
  bookings: [],
};
const chetak = {
  airline: 'CHETAK',
  iataCode: 'CH',
  bookings: [],
};

//call method
const book = AirIndia.book;
book.call(AirIndia, 108, 'sitaram');
book.call(Indigo, 456, 'karan');

//Apply method
const flightData = [589, 'raghav'];
book.apply(chetak, flightData);

AirIndia.planes = 300;
AirIndia.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

AirIndia.buyPlanes();

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerAnswer: function () {
    const answer = Number(
      prompt(`${this.question} \n${this.options.join(`\n`)}\nwrite your option`)
    );
    console.log(answer);

    typeof answer === Number &&
      answer < this.answers.length &&
      this.answers[answer]++;
  },

  displayResult(type = 'array') {
    if ((type = 'array')) {
      console.log(`${this.answers}`);
    } else if ((type = 'string')) {
      console.log(`poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3] }, 'string');

(function () {
  console.log('this will run just once immediately');
})();
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
