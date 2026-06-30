
STUDENT MNGT
simulate a student db to

add a student
remove a student
suspend a student
expel a student
graduate a student
check if schoolfees is paid

a function that accepts two arrays of numbers return the array that when you add the elements has the higher value

find the missing number in an array containing numbers from 1 to n

[1, 2, 3, 4, 6, 8] return 5 and 7

write a function that accepts a word and return the number of vowels

elephant = 3


=======================================================

Build a Simple Banking System

Create an object that represents a bank account with the following methods:

deposit(amount)
withdraw(amount)
checkBalance()

Rules:
You cannot withdraw more than the available balance.
Display appropriate messages for successful and failed transactions.


schema 

{
    name : string
    account n0 : number
    bvn : number 
    account balance : number
    email : string
    dob : struing
    pin : number
}





Say less — here are 3 JS puzzles with increasing difficulty. Try them without looking at solutions first 👇

### *Puzzle 1: FizzBuzz Twist*
Write `fizzBuzzTwist(n)` that returns an array from 1 to n.
- Divisible by 3 → `"Fizz"`
- Divisible by 5 → `"Buzz"`
- Divisible by both → `"FizzBuzz"`
- Else → the number itself
- *Twist*: If the number contains digit 3, add `"Fizz"`. If contains 5, add `"Buzz"`

`fizzBuzzTwist(15)` → `[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", "Fizz", 14, "FizzBuzz"]`
Note: 13 has a 3 → "Fizz", even though 13%3 ≠ 0

### *Puzzle 2: Palindrome Pairs*
Write `findPalindromePairs(words)` that returns all pairs of indices `[i][j]` where `words[i] + words[j]` forms a palindrome.
findPalindromePairs(["bat", "tab", "cat"])
// [[0,1], [1,0]] because "battab" and "tabbat" are palindromes

findPalindromePairs(["abcd", "dcba", "lls", "s", "sssll"])
// [[0,1], [1,0], [3,2], [2,4]]
*Hint*: Loop with nested `for`, use `split('').reverse().join('')` to check palindrome

### *Puzzle 3: Coin Change Count*
Write `coinChangeCount(amount, coins)` that returns how many ways you can make `amount` using coins. Order doesn’t matter.
coinChangeCount(5, [1, 2, 5]) // 4
// 5 = 5
// 5 = 2+2+1
// 5 = 2+1+1+1
// 5 = 1+1+1+1+1

coinChangeCount(3, [2]) // 0 - can't make 3 with only 2s
*Hint*: Use nested loops + dynamic programming. This one’s spicy.

---

Pick one, code it, send it back. I’ll debug it and show you the clean solution + time complexity.

Which one you tackling first?





Given an array of numbers, find the average of them, and log it to the console

Given an array of contacts, sort them in alphabetical order by name, and log the sorted array.



[
  { name: "John", score: 75 },
  { name: "Mary", score: 92 },
  { name: "Peter", score: 68 },
  { name: "Grace", score: 85 }
]
Arrange the students from highest score to lowest.
Create a new array containing:
[
  "1. Mary - 92",
  "2. Grace - 85",
  ...
]



Given an array of singular nouns, create a new array that stores the plural noun of each of the words in the first array, and log it to the console (assume that the singular nouns can be made plural by adding a 's')



const products = [
  { name: "Phone", price: 500, inStock: true },
  { name: "Laptop", price: 1200, inStock: false },
  { name: "Mouse", price: 50, inStock: true },
  { name: "Keyboard", price: 100, inStock: true }
];


const words = [
  "apple",
  "banana",
  "kiwi",
  "grape",
  "orange"
];


12. Highest Spending Customer

Given:

[
  { name: "John", spent: 45000 },
  { name: "Mary", spent: 82000 },
  { name: "Peter", spent: 35000 },
  { name: "Grace", spent: 92000 }
]
Find the total amount spent by all customers.
Arrange customers from highest spender to lowest.
Determine the customer who spent the most.





13. Sales Report

Given:

[
  { product: "Book", price: 2000, qty: 5 },
  { product: "Pen", price: 500, qty: 10 },
  { product: "Bag", price: 8000, qty: 2 }
]
Create a new array showing each product's total revenue.
Find the overall revenue generated from all products




14. Price Adjustment

Given:

[
  3000,
  1500,
  7000,
  2500,
  5000
]
Arrange the prices from lowest to highest.
Add 7.5% VAT to each price.
Return the resulting array




[
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node"
]
Arrange the words from shortest to longest.
Display each word together with its length.

Example:

CSS - 3
Node - 4
React - 5


17. Student Grade Report

Given:

[
  { name: "John", score: 55 },
  { name: "Mary", score: 91 },
  { name: "Peter", score: 78 },
  { name: "Grace", score: 65 }
]
Assign grades using:
90 and above → A
70–89 → B
50–69 → C
Below 50 → F
Arrange students from highest score to lowest.
Display each student's name, score, and grade.



shopping cart

product section

fashion
electronics
beauty and selfcare
groceries

functionalities

create a feature for adding a product
display all products
calculate the total price of all products and product across each section
find the most expensive item across all the product and under each section
apply a 10 percent discount to all product accross a section