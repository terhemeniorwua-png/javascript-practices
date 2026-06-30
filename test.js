
const addNum = function(num){
 console.log(num +3)
  
}
// addNum(7)

const addNUm = num => {
    return num + 3;
} 

// let add = 
// console.log(addNUm(34));




let user = {
    name:'Mabas',
    age: 34,
    saySomething: function(){
        return `I am ${this.age } years old.`
    }}
// console.log(user.saySomething())

let newObj = undefined;
newObj = 'true';
newObj = new Object({
    name: ' Mabas',
    age:34
});
// console.log(newObj);

// function addN(name){
//     this.name = 'Maboo';
// }
// let filo = new addN('Ziggy');
// console.log(filo.name)



// console.log(rest)
// console.log(user1)
// let user2 ={

// }

// function giveName(name1 = 'Moses', name2= 'Mabas'){
//     console.log(name1);
//     console.log(name2);

// }
// // giveName('Osas')

// function myFun(a, b, ...theRest) {
// // let num = Number(theRest)
// return a + b + Number(theRest);
// }

// console.log(myFun(1,2,3,4,5,6,7));

let user1 = {
    name: 'Mabas',
    age:34,
    city: 'Jos'
};
let {name, ...rest} = user1

let greetings = () => 'Hello ' + name 
// greetings();
// console.log(greetings())

// let value = 1;

// doSomething(() => {
//   value = 2;
// });

// console.log(value); // 1 or 2?


// function doSomething(){



// }

// doSomething()

/*
Got it — here’s a more standard one you’ll see a lot in interviews:

### *Problem: Leap Year Checker*

Write a function called `isLeapYear(year)` that returns `true` if the year is a leap year, and `false` if it’s not.

*Leap year rules:*
1. If the year is divisible by 4, it’s a leap year...
2. ...unless it’s divisible by 100
3. ...but if it’s divisible by 400, it _is_ a leap year anyway

*Examples:*
isLeapYear(2000)  // true   - divisible by 400
isLeapYear(1900)  // false  - divisible by 100 but not 400
isLeapYear(2024)  // true   - divisible by 4
isLeapYear(2023)  // false  - not divisible by 4
*Hint*: Use the `%` operator to check divisibility. The order of your `if` conditions matters here.

This one tests if you can translate rules into clean logic. Want to try it?

*/


function leapYearChecker(year){
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return true;
    } else{
        return false
    }
}
// console.log(leapYearChecker(2000))


function passwordStrenghtChecker(pass){
    let passwrd = String(pass);
     if(passwrd.length < 6){
            return 'Weak'
        }
    for(let i =0; i<passwrd.length; i++){
        if(passwrd.length <= 11 && (passwrd[i] >= 0 && passwrd[i] <= 9)){
            return 'Good'
        } else if(passwrd.length >= 12){
            let chars = ['!', '#', '$', '&'];
            for(const chr of passwrd){
                if(chars.includes(chr)){
                    return 'Strong'
                }}}}
}
// console.log(passwordStrenghtChecker('kddedd'))




/*
## JavaScript Problem: Counting Positives and Negatives

**Problem:** Write a function `countPosNeg(numbers)` that takes an array of integers. The function should count how many numbers in the array are positive and how many are negative (ignore any zeros). It should return an object with two properties: `positive` (the count of positive numbers) and `negative` (the count of negative numbers).

**Example Usage:**
```js
countPosNeg([1, -2, 3, 0, -5]);   // returns { positive: 2, negative: 2 }
countPosNeg([10, 20, 30]);        // returns { positive: 3, negative: 0 }
countPosNeg([-1, -4, -7, 0, 5]);  // returns { positive: 1, negative: 3 }
```

**Notes:** Use a loop to inspect each element of the array, and an `if...else` statement to check if a number is positive (`> 0`) or negative (`< 0`). Ignore zeros (do not count them).

**Sample Solution (JavaScript):**
```js
function countPosNeg(numbers) {
  // Initialize counters for positives and negatives
  const result = { positive: 0, negative: 0 };
  
  // Loop through each number in the array
  for (let num of numbers) {
    if (num > 0) {
      result.positive++;   // Increment positive count
    } else if (num < 0) {
      result.negative++;   // Increment negative count
    }
    // If num is 0, do nothing (ignore it)
  }
  
  return result;
}

// Example calls:
console.log(countPosNeg([1, -2, 3, 0, -5]));   // { positive: 2, negative: 2 }
console.log(countPosNeg([10, 20, 30]));        // { positive: 3, negative: 0 }
console.log(countPosNeg([-1, -4, -7, 0, 5]));  // { positive: 1, negative: 3 }
```

**Explanation:** This question tests knowledge of defining functions in JavaScript and using control flow (`for` loop with `if...else` statements). It ensures students can iterate over an array and conditionally update counters.

*/

// function countPosNeg(numArray){
//     let result = {};
//     let num1 = 0;
//     let num2 = 0;
//     for(let i = 0; i<numArray.length; i++){
//         if(numArray[i] % 2 === 0 && numArray[i] !== 0){
//             num1++
//         } else if(numArray[i] !== 0 && numArray[i] < 0){
        
//         }
//     }
//     return result;
// }


function findMissingNu(numb){
    let index =numb.length-1;
    for(i=0; i<=index; i++){
        let res = numb[i+1]-numb[i];
        if(res > 1){
            console.log(true) ;
        }
        console.log( numb[i])
    }
}
// findMissingNu([1,2,3,5])


function checkTemp(arr){
    for(let i = 0; i<arr.length; i++){
        console.log(`...${arr[i]} 0C in ${[i+1]} days`)
    }
}
// checkTemp([17, 21, 23]);
// checkTemp([12, 5, -5, 0, 4])

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀
*/

const bmi = function(H1, W1, H2, W2){
    let markH = 0;
    let johnH = 0;
    markH += W1/H1**2;
    johnH += W2/H2**2;
    let markHigherBMI = `Mark's BMI is greater than John's BMI: ${markH > johnH}`;
    console.log(markHigherBMI)
}
// bmi(78, 1.69, 92, 1.95)
// bmi(95, 1.88, 85, 1.76)





/*
Here’s a question that mixes functions + nested control flow:

### *Problem: Shopping Cart Discount Calculator*

Write a function `calculateTotal(cart, memberStatus)` that calculates the final price after applying discounts and fees.

*Input:*
- `cart`: array of objects like `[{name: "Shirt", price: 5000, qty: 2}, {name: "Shoes", price: 12000, qty: 1}]`
- `memberStatus`: `"regular"`, `"silver"`, or `"gold"`

*Rules:*

1. *Subtotal*: Sum up `price * qty` for all items
2. *Discounts* - apply only the highest one that qualifies:

   - If subtotal ≥ 50000 AND memberStatus is `"gold"`: 20% off
   - If subtotal ≥ 30000 AND memberStatus is `"silver"` or `"gold"`: 15% off  
   - If subtotal ≥ 20000: 10% off
   - Else: 0% off
3. *Shipping fee*:

   - Free if subtotal after discount ≥ 25000
   - ₦1500 otherwise
4. *Tax*: Add 7.5% VAT on the amount after discount, before shipping

*Return*: A rounded integer of the final total

*Examples:*
const cart1 = [{price: 10000, qty: 3}, {price: 5000, qty: 2}]
calculateTotal(cart1, "gold") 
// Subtotal 40000, 15% off = 34000, VAT 2550 = 36550, shipping free = 36550

const cart2 = [{price: 8000, qty: 1}]
calculateTotal(cart2, "regular")
// Subtotal 8000, no discount, VAT 600 = 8600, shipping 1500 = 10100
*Hint*: 
1. Use a `for...of` loop to get subtotal
2. Use `if/else if` chain for discounts - order matters
3. Break it into steps: subtotal → discount → tax → shipping

This tests loops, conditionals, function composition, and order of operations. Give it a shot.
*/

const calculateTotal = function(cart){
    let sum = 0;
    let discount = 0;
    let fee = 0;
    let tax = 0;
    
    for(let i = 0; i<cart.length; i++){
        let search =cart[i];
         sum += search.price * search.qty;
         } 
        let search =cart[i];
         if(search.name == cart){
            if(sum >= 50000 && search === 'gold'){
            discount += sum * (20/100);
            if(discount < 25000){
                 fee = 15000;
                    tax += fee +(75/1000)
         } else if(sum >= 30000 && search === 'silver' || sum >= 30000 && search === 'gold'){
             discount += sum * (15/100);
            if(discount < 25000){
                fee = 15000;
                    tax += fee +(75/1000)
              
            }
             
                    
                
         } else if(sum >= 20000){
             discount += sum * (10/100);
         } else{
            discount += sum
            if(discount < 25000){
                fee = 15000;
                    tax += fee +(75/1000)
                
            }
            
         }
}
         }

return tax
}
let cartSh = [
    {name: "Shirt", price: 5000, qty: 2, memberStatus:'silver'}, 
    {name: "Shoes", price: 1200, qty: 1, memberStatus:'gold'}
]
console.log(calculateTotal(cartSh))