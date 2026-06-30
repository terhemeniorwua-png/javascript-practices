function luckyNum(arr) {
    let ocur = 0;
    let luckyNumbers = [];
   for(let i = 0; i<arr.length; i++){
     if (arr[i] != arr[i++]) {
        luckyNumbers.push(arr[i]);

    }
   }
   console.log(luckyNumbers)
}
// luckyNum([2,2,7,1,4,5,4,4,6,4])





// function facto(num){
//     if(n < 1){
//         return false;
//     }
//         return (n & (n-1)) ===0
// }
//  facto(8);
// console.log(loggi)



// function booWho(arr){
    
//         if(arr === true || arr === false){
//             return true;
//         } else{
//             return false
//         }
//     }


// let output = booWho()
// console.log(output)

// function aga(age){
//     if(age >= 18){
//         return 'Yes'
//     } else{
//         return 'No'
//     }
// }

// let res = aga(27)
// console.log(res)


function checkNumer(num){
    if(num > 100 || num < 0){
        return 'Invalid score';
    } else if(59 >= num){
        return 'F';
    } else if(69 >= num){
        return 'D';
    } else if(79 >= num){
        return 'C';
    } else if(89 >= num){
        return 'B';
    } else{
        return 'A';
    }
}

let out = checkNumer(80);
// console.log(out)


// function ticketPurchase(age){
//     if(age < 0){
//         return 'Invalid age';
//     } else if(5 >= age){
//         return 'Free';=
//     } else if(17 >= age){
//         return 'N500';
//     } else if(59 >= age){
//         return 'N1500';
//     } else{
//         return 'N8000'
//     }
// }
// let outing = ticketPurchase(-14);
// console.log(outing)


function vaidatePin(pin){
    let changeTOString = String(pin)
    for(i=0; i<changeTOString.length; i++){
        if(changeTOString.length === 4 || changeTOString.length === 6){
            if(changeTOString[i] != NaN){
                return true;
            }

        }  
        else{
                return false
            } 
    }
}
let outt = vaidatePin('44r444')
// console.log(outt)


function triangleTYpe(a, b, c){
     if(a ==0 || b == 0 || c == 0){
        return 'Not a triangle'
    }else if(a == b && b == c){
        return 'Equilateral'
    } else if(a == b || b == c || a == c){
        return 'Isosceles'
    } else{
        return 'Scalene'
    }
}
// let retrurn = triangleTYpe(1, 1, 1)
// console.log(retrurn)



function validatePin(pinText) {
    // Check length first
    if (pinText.length !== 4 && pinText.length !== 6) {
        return false;
    }

    // Check that every character is a digit
    for (let i = 0; i < pinText.length; i++) {
        const char = pinText[i];

        if (pinText[i] == NaN) {
            return false;
        }
    }

    return true;
}

// let ty = validatePin('747j');
// console.log(ty)





function calcTotal(cart, memStatus){
    let subTotal = 0
    for(let i = 0; i < cart.length; i++){
        subTotal += cart[i].price * cart[i].qty
    }
    if(subTotal >= 50000 && memStatus === 'gold'){
        subTotal *= 0.8
    } else if(subTotal >= 30000){
        if(memStatus === 'gold' || memStatus === 'silver')
        subTotal *= 0.85
    } else if(subTotal >= 20000){
        subTotal *= 0.9
    }
    // VAT
    subTotal *= 1.075;

    // shipping fee

    if(subTotal < 25000){
        subTotal += 1500
    }
    console.log(subTotal)
}
// calcTotal([{price: 10000, qty: 3}, {price: 5000, qty: 2}], 'gold')
// calcTotal([{price: 8000, qty: 1}])

/*
Given a string, write an algorithm that returns a new string with the characters in reverse order.
*/

let name = 'Amaka';
let splitted = name.split('').reverse().join('');
// console.log(splitted)

// console.log(Math.PI)

const radius = [2];

function area(radius){
    return Math.PI * radius * radius;
}

// const diameter = function(radius){
    // return 2 * radius;
// }

const calculate = function(radius, logic){ 
    // const output = [];
    // for(let i = 0; i < radius.length; i++){
    return logic(radius)
    
}


// console.log(calculate(radius, area));
// console.log(calculate(radius, diameter));

const arr = [1, 2, 3, 4, 5];
const output = arr.filter((num) => !(num % 2)) // filter out odd numbers
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(output)


let us = 'Philip';
const higherOrderFunc = function (fuc){
    return us;
    fuc()
}

const callbck = function (){
    
    return 'Hello'
}

// console.log(higherOrderFunc(callbck));
const arar = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
];
let addNum = arar.map(name => `${name.firstName}: ${name.age}`);
let smallAge = arar.filter(({age}) => age > 30);
// console.log(addNum);
// console.log(smallAge)

let users = []
for(i = 0; i<arar.length; i++){
    users.push(`${arar[i].firstName}: ${arar[i].age}`)
}
// console.log(users)

let int = [3,55,6,7,8,2,4]

let sum = int.reduce((max, currenValue) =>{
    return currenValue < max? max = currenValue: max;
}) 
// console.log(sum)

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => {
    return { ...acc, ...curr };
}, {});
// console.log(mergedObj);

function serverRequest(query, callback){
  setTimeout(function(){
    var response = query + "full!";
    callback(response);
  }, 7000);
}

function getResults(results){
  console.log("Response from the server: " + results);
}

// serverRequest("The glass is half ", getResults);



/*
Here’s a JS challenge that forces you to use functions + control flow together:

### *Challenge: Password Strength Checker*

Write a function `checkPasswordStrength(password)` that returns a rating based on the rules below.

*Rules:*
1. *Weak*: Less than 8 characters, OR only lowercase letters
2. *Medium*: 8+ characters AND has at least 2 of these: uppercase, lowercase, digits
3. *Strong*: 8+ characters AND has uppercase, lowercase, digits, AND a special character `!@#$%^&*`
4. *Invalid*: Empty string or only whitespace → return `"Invalid"`

*Control flow requirements:*
- Use early returns to handle the `"Invalid"` case first
- Use `if/else if/else` to decide between Weak, Medium, Strong
- Use loops or built-in methods to check for uppercase, lowercase, digits, special chars

*Examples:*
checkPasswordStrength("")           // "Invalid"
checkPasswordStrength("   ")        // "Invalid"
checkPasswordStrength("abc")        // "Weak"
checkPasswordStrength("password")   // "Weak"
checkPasswordStrength("Pass123")    // "Medium"
checkPasswordStrength("Pass123!")   // "Strong"
*Hint*: `charCodeAt()` or regex like `/[A-Z]/` helps check character types. Check length and emptiness before doing the heavy logic.

Try it and drop your code. I’ll review it and break down where the logic can be tighter.
*/

function checkPasswordStrength(password){
    let modified = String(password);
    let specialChar = '!@#$%^&*';
    let specialCharCount = 0;
    let uppercaseCount = 0;
    let lowercaseCount = 0;
    let digitCount = 0;

     if(modified.trim() === ''){
        return 'Invalid'
    } 
    // if(/\s/.test){
    //     return 'Invalid'
    // }
    for(let char of modified){
        let inst = char.charCodeAt(0)
         if(inst >= 65 && inst <= 90){
            uppercaseCount++
        } else if(inst >= 97 && inst <= 122){
            lowercaseCount++
        } else if(inst >= 48 && inst <= 57){
            digitCount++
        } else if(specialChar.includes(char)){
            specialCharCount++
        }}
    if(modified.length >= 8 && uppercaseCount >= 1 && lowercaseCount >= 1 && digitCount >= 1 && specialCharCount >= 1){
        return 'Strong'
    } else if(modified.length >= 8 && (uppercaseCount >= 2 && lowercaseCount >= 2 || lowercaseCount >= 2 && digitCount >= 2 || uppercaseCount >= 2 && digitCount >= 2)){
        return 'Medium'
    } else if(modified.length < 8 || modified.toLowerCase()){
        return 'Weak'
    } }
let result = checkPasswordStrength('')
// console.log(result)




function firstMissingPositive(num){
    let sorted = num.sort((a,b) => (a-b));
        for(let i = 0; i<sorted.length; i++){
            if(sorted[i]>=0 && sorted[i]+1 != sorted[i+1]){
                return sorted[i]+1
                break
            }
        }
}

let results = firstMissingPositive([3,-1,5,1,9, 7,4,2,9,-2,0])
// console.log(results)

/*
Got you. Here’s the next one — this one hits functions, control flow, and string manipulation:

### *Challenge: Longest Word with Unique Letters*

Write a function `longestUniqueWord(sentence)` that returns the longest word in a sentence where all letters are unique. If there’s a tie, return the first one. If none exist, return an empty string.

*Rules:*
1. Words are separated by spaces. Ignore punctuation.
2. Case doesn’t matter: `"Apple"` and `"apple"` are the same for uniqueness checking.
3. Only letters a-z count. Ignore numbers and symbols.

*Examples:*
longestUniqueWord("hello world") 
// "world" → h,e,l,o repeat in "hello"

longestUniqueWord("The quick brown fox jumps") 
// "brown" → all letters unique and longest

longestUniqueWord("a aa aaa aaaa") 
// "a" → only word with unique letters

longestUniqueWord("test123 hi!!") 
// "hi" → strip numbers and punctuation first

longestUniqueWord("aa bb cc") 
// "" → no word has all unique letters
*Control flow hints:*
1. Use `toLowerCase()` and a regex `/[a-z]+/g` to extract words
2. Loop through words with `for...of`
3. Use a `Set` to check if a word has duplicate letters. If `set.size === word.length`, it’s unique
4. Track `maxLength` and `maxWord`. Update only if you find a longer unique word
5. Use `break`/`continue` to skip invalid words

Try it out and send your code. After you submit, I’ll show you a 1-liner version using `reduce` and explain the tradeoffs.
*/


function longestUniqueWord(sentence){
    let modified = String(sentence).toLowerCase();
let unique = '';
let count = 0;
let maxCount = 0;
for(i=0; i<modified.length; i++){
    if( modified){
        unique += modified[i];
        count++
        if(modified.trim() == ' '){
            
        }
    }
}
return unique
}

// console.log(longestUniqueWord('Ter ka or kuran mo'))


let word = 'Ter ka or kuran mo';
let retur = ''
for(i=0; i<word.length; i++){
    // if(word[i] == ' '){
        retur += word[i]
        if(word[i] == ' '){
            break;
        }
    
    // }
}
// console.log(retur)

// const duplicateNum = arr => {
//     let duoNums = [];
//     let count = 0;
//     let sorted = arr.sort((a,b) => (a-b))
//     for( let i =0; i<sorted.length; i++){
//         if(sorted[i+1] - sorted[i] == 0){
//             duoNums.push(sorted[i])
//             count++
            
//         }
//     }
//     console.log(duoNums)
// }

const duplicateNum = arr =>{
    let duplicateNum = [];
    for( let i =0; i<arr.length-1; i++){
    let count = 0;
        for(const num of arr){
            if(arr[i] - num == 0){
                count++
            }}
        if(count >=2 && !duplicateNum.includes(arr[i])){
            duplicateNum.push(arr[i])
        }}
    console.log(duplicateNum)
}


// duplicateNum([3,2,5,4,6,7,5,5,5,2,2,2,2,2,2,2,1,8,1,3,4])


// const func1 = () => 1;

// const func2 = (callback, num) =>{
//     let call= callback()
//     console.log(call + num)
// }
// func2(func1, 10)

let nums = [5,3,2,8,6];
nums.splice('0', '0', 'Orange', 'bananna', 'kiwi');
// console.log(nums)

let namse = 'Philip';
let gt = namse.slice('1', '4')
// console.log(gt)


let areaa = radius => Math.PI * radius**2;
let calVol = (radius, heigth, area) => {
    let cal = areaa(radius + heigth);
    console.log(cal)
}

// calVol(2, 5, areaa)


const fizzBuzzTwist = n => {
    let modified = [];
    for(let i = 1; i<=n; i++){
        let iConverted = String(i).split('');
        if(i % 3 == 0 && i % 5 == 0 || iConverted.includes('3') || iConverted.includes('5')){
            modified.push('Fizz Buzz')
        } else if(i % 3 == 0){
            modified.push('Fizz')
        } else if(i % 5 == 0){
            modified.push('Buzz')
        } else{
            modified.push(i)
        }
    }
     console.log(modified)
}

fizzBuzzTwist(155)

console.log(findPalindromePairs(["bat", "tab", "cat"]))

let performance = [
  { name: "John", score: 75 },
  { name: "Mary", score: 92 },
  { name: "Peter", score: 68 },
  { name: "Grace", score: 85 }
]

let sorting = arr => {
   return arr.sort((a,b) => a.score - b.score);
}
let smallest = performance.find((val, indx, arr) => {
    return val.score > 80
})
console.log(sorting(performance))
console.log(smallest)


let scores = [[3,2], [5,9], [10, 11], [9,5]];

let filteredNums = scores.filter(num => {

        
});
console.log(filteredNums)


const findPalindromePairs = word =>{
    let res = [];
    for(i=0; i<word.length; i++){
        for(j=0; j<word.length; j++){
            if(i === j){continue}
            let preserved = (word[i] + word[j]).split('').reverse().join('');
            if(word[i].concat(word[j]) == preserved){
                res.push([i,j]);
            }
        }
    }
    return res
}
// let res = findPalindromePairs(["bat", "rer", "rer"])
// console.log(res)

// setTimeout(findPalindromePairs, 5000)

const coinChangeCount = (amount, coins) => {
    for(let i=0; i<amount; i++){
        let count = 0;
        console.log(amount[i])

    }
}

// coinChangeCount(5, [1, 2, 5])


var romanToInt = function(s) {
    let romanValues = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let numeric = [1, 5, 10, 50, 100, 500, 1000];
    for(let i =0; i<romanValues.length; i++){
        for(let j=0; j<numeric.length; j++){
            romanValues[i] = numeric[j]
            // s.find(value, indexe, arr){

            // }
        }
    }
};
// romanToInt()

// var mergeTwoLists = function(list1, list2) {
//     let masterList = [list1, list2];
//     return masterList.flat().sort()
  
// }
// console.log(mergeTwoLists([1,3,5], [1,1,4,8]))

// const givenArray = [477, 8914, 40461, 599148];
// const newArray = givenArray.map((n, r, arr) => ({n, r, arr}));
// console.log(newArray);

// const givenArray = [390, 190, 311.85, 67, 19048, 5000, 670];
// const newArray = givenArray.filter((c, indx) => (c <= 350, indx));
// console.log(newArray) 