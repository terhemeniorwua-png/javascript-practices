### *Problem: Find the "Lucky Number"*

Write a function called `findLuckyNumber(arr)` that takes an array of positive integers and returns the smallest number that appears exactly as many times as its value.

*Rules:*
1. If the number `x` appears in the array exactly `x` times, it’s a lucky number.
2. If there are multiple lucky numbers, return the smallest one.
3. If there are no lucky numbers, return `-1`.

*Examples:*
findLuckyNumber([2, 2, 3, 4]) 
// 2 appears 2 times → return 2

findLuckyNumber([1, 2, 2, 3, 3, 3]) 
// 1 appears 1 time, 3 appears 3 times → return 1 because 1 < 3

findLuckyNumber([5, 5, 5, 5]) 
// 5 appears 4 times, not 5 times → return -1
*Constraints to make it interesting:*
- Use a function
- Use at least one loop. Don’t use built-in methods like `filter`, `reduce`, or `Object.groupBy`
- Try to do it in O(n) time

Give it a shot and send me your code when you’re done. I’ll check it and explain where it works or breaks. 

Want me to give a harder follow-up if you get this one fast?



=====================================================================================================



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