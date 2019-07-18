// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;

}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return `${word}s`;
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	const newData = [];
 	for (let i = 0;i < array.length; i++ ) {
    newData.push(callback(array[i])) 
   }
  return newData;
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
const forEachData = [];
function forEach(array, callback) {
  
 	for (let i = 0;i < array.length; i++ ) {
    callback(array[i]) 
 	};
}



// see for yourself if your forEach works!
forEach([3, 6, 9], (val) => {
 forEachData.push(addTwo(val));
})
console.log(forEachData)

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const newData = [];
	forEach(array, (val) => {
    newData.push(callback(val))
  })
  return newData;
}
console.log(mapWith([10, 20, 30], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
	let acc = initialValue;
  for(let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  
  return acc;
}

const reducedVal = reduce([5, 2, 3], (a, b) => a + b, 0)
console.log(reducedVal);

const reducedVal2 = reduce(
  [{ a: 1 }, { b: 2 }, { c: 3 }],
  (acc, newval) => Object.assign({}, acc, newval),
  {}
)
console.log(reducedVal2);

//Extension 3
function intersection(...arrays) {
	return reduce(
    arrays,
    (acc, newVal) => {
      const newAcc = [];
      for (let i=0; i<acc.length; i++){
        for (let j=0; j<newVal.length; j++){	
          if (acc[i] === newVal[j]){
            newAcc.push(acc[i]);				
          }		
        }
      }
      if(!acc.length) {
        return newVal;
      }
      return newAcc
    },
    []
  );
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
	return reduce(
    arrays,
    (acc, newVal) => {
      const newAcc = [];
      for (let i=0; i<acc.length; i++){
        if(newAcc.indexOf(acc[i]) < 0) {
          newAcc.push(acc[i])
        }
      }
      for (let i=0; i<newVal.length; i++){	
        if(newAcc.indexOf(newVal[i]) < 0) {
          newAcc.push(newVal[i])
        }
      }
      
      if(!acc.length) {
        return newVal;
      }
      return newAcc
    },
    []
  );
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  const newData = {};
	for(let i = 0; i < array1.length; i++) {
    if(array2[i] === callback(array1[i])) {
      newData[array1[i]] = array2[i];
    }
  }
  return newData;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
	const newData = {};
  for(let i = 0; i < arrVals.length; i++) {
    let newChild = [];
    for(let j = 0;j < arrCallbacks.length; j++) {
    	newChild.push(arrCallbacks[j](arrVals[i]))
    }
    newData[arrVals[i]] = newChild;
  }
  return newData;
}

console.log(multiMap(
  ['catfood', 'glue', 'beer'],
  [
    function(str) { return str.toUpperCase(); },
    function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); },
    function(str) { return str + str; }
  ]
));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


function createFunction() {
	return () => {
    console.log('hello')
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var function1 = createFunction();
function1();



function createFunctionPrinter(input) {
	return () => {
    console.log(input)
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var printSample = createFunctionPrinter('sample');
printSample();
var printHello = createFunctionPrinter('hello');
printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++ ;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();



function addByX(x) {
	return (num) => {
    return num + x
  }
}

var addByTwo = addByX(2);
console.log(addByTwo(1)); //should return 3
console.log(addByTwo(2)); //should return 4
console.log(addByTwo(3)); //should return 5

var addByThree = addByX(3);
console.log(addByThree(1)); //should return 4
console.log(addByThree(2)); //should return 5

var addByFour = addByX(4);
console.log(addByFour(4)); //should return 8
console.log(addByFour(10)); //should return 14



//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let count = 0;
  let result;
	return (num) => {
    count ++;
    if (count > 1) {
      return result;
    }
    result = func(num);
    return result;
  }
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6


function after(count, func) {
	let innerCounter = 0;
  return () => {
    innerCounter ++;
    if (count === innerCounter) {
      func();
    }
  }
}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
	return () => {
    setTimeout(() => {
      func()
    }, wait)
  }
}

const delayConsole = delay(() => {console.log('waited')}, 5000)
delayConsole()
