function factorialIter(n) {
  if (n < 0) 
    return null; 


  if (n === 0 || n === 1) return 1;

  let result = 1;

  for (let z = n; z > 1; z--) {
    result *= z;
  }

  return result;
}


// Tests
console.log(factorialIter(5)); 
console.log(factorialRec(5));   
console.log(factorialIter(0));  
console.log(factorialRec(0));   

console.log(factorialIter(-1)); 
console.log(factorialRec(-1));  













const factorialRec = function rec(n) {
  if (n < 0) return null; 
  if (n === 0 || n === 1) return 1;

  return n * rec(n - 1);
};

// Tests
console.log(factorialIter(5)); 
console.log(factorialRec(5));   
console.log(factorialIter(0));  
console.log(factorialRec(0));   

console.log(factorialIter(-1)); 
console.log(factorialRec(-1));  

// IIFE example
(function() {
  console.log(factorialIter(6));
})();