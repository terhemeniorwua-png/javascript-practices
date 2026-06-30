// // let numb =3;
// // let sum = 0;
// // for(i = 0; i <= numb; i++){
// //     sum += i
// // }
// // console.log(sum)


//     // let range = 30;
//     //     for(i = 2; i<=range; i++){
//     //         let isPrime = true;
//     //         let j=2;
//     //         for(let j = 2; j < i; j++){
//     //             if(i % j === 0){
//     //                 isPrime = false;
//     //             }
//     //         }
//     //             if(i % j !== 0 && isPrime){
//     //                 console.log(i)
//     //             }
//     //     }
   
//         // let rows = 10;
//         //     let structure = '';
//         //     for(i=1; i<= rows; i++){
//         //         structure += '*';
//         //         console.log(structure)
//         //     }
       


// //             let fruits =['apple', 'orange', 'apple', 'orange', 'mango']
// //            let fruitDB = {}
// //  for(i=0; i<=fruits.length-1; i++){
// //     let fruit = fruits[i]
// //     if(fruitDB[fruit] == undefined){
// //         fruitDB[fruit] =1;
// //     } else{
// //         fruitDB[fruit]++
// //     }
// // }
// //     console.log(fruitDB)


// let numbers = [3, 6, 11, 8, 1, 9];
// /*
// loop through the array
// check if the value preceeding is greater
// retain  bigger values
// print the last decision
// */
// function maxNumber(arr){
//     let maxNum = arr[0]
// for(i=1; i<arr.length; i++){
//     if( maxNum > arr[i]){
//         maxNum = arr[i]
//     }  
// }
// console.log(maxNum)
// }
// // maxNumber(numbers)

// function checkNum(ary){
//     let max = 0;
//     for(i=1; i<ary.length; i++){
//         if(ary[i]>max){
//             console.log(true)
//         } else{
//             console.log(false)
//         }
//     }
// }
// // checkNum(numbers)

// // Number 2...
// let num =10;
// function calcFactoria(n){
//     let initial = 1;
// for(let i=1; i<=n; i++){
//     initial *=i;
// }
// console.log(initial)
// }
// // calcFactoria(num)


// // Number 3...

// let arrayNums = [];
// for(i=1; i<= 50; i++){
//     arrayNums.push(i)};

// function numType(arry){
// let evenArray = [];
//     let oddArray = [];

//     for(i=1; i<arry.length; i++){
//           if(arry[i] % 2 === 0){
//         evenArray.push(arry[i])
//     } else{
//         oddArray.push(arry[i])
//     }}
//     console.log(arrayNums, evenArray, oddArray)
// }
// // numType(arrayNums)

// // Number 4..
// let students =[
//     {name:'John', score:91},
//     {name:'John', score:84},
//     {name:'John', score:90},
//     {name:'John', score:78},
//     {name:'John', score:88},
//     {name:'John', score:97},
//     {name:'John', score:87},
//     {name:'John', score:98},
//     {name:'John', score:100},
//     {name:'John', score:65}
// ];
// /*
// loop through the array to get the objects
// loop through the object scores and add them together
// divide the total sum by the number of iterations
// */ 
// function calcAvrg(avra){
//     if(avra.length !== 0){
// let sum =0;
// for(i=0; i<avra.length; i++){
//     let score = avra[i].score
//         sum += score;
//     }
//     let average = sum / i;
//         console.log(average)
// }
// }
// // calcAvrg(students)


// // Number 5...
// let users = [
//     {name: 'Peter', isActive: true},
//     {name: 'Peter',  isActive: true},
//     {name: 'Peter', isActive: true},
//     {name: 'Peter', isActive: true},
//     {name: 'Peter', isActive: false},
//     {name: 'Peter', isActive: false},
//     {name: 'Peter', isActive: true},
//     {name: 'Peter', isActive: false}
// ];
   
// /*
// loop through the array to get the objects
// for each, get the property isActive
// loop through isActive checking the condition
// create a key value pair of objects
// calculate the users active and increment accordingly
// */

// function activeUsers(user){
//     let usersStatues = {};
// for(i=0; i<user.length; i++){
//    let userStatues = user[i].isActive;
// //    usersStatues[userStatues] = undefined;
//    if(usersStatues[userStatues] == undefined){
//     usersStatues[userStatues] = 1;
//    } else{
//     usersStatues[userStatues]++
//    }
// }
//    console.log(usersStatues)
// }
// // activeUsers(users)



// function calcAveg(num){
//     let totalScore = 0;
//     for(let i =num.length-1; i >= 0; i--){
//         let score = num[i].secore;
//         totalScore += score;
//     }
//  return totalScore / num.length;
// }
// let students = [
//     {name:'Peter', secore:6},
//     {name:'Peter', secore:40},
//     {name:'Peter', secore:28},
//     {name:'Peter', secore:28},
//     {name:'Peter', secore:20},
//     {name:'Peter', secore:46}
// ]
// const result = calcAveg(students);
// console.log(result)






//  let totalScore = 0;
//     for(let i =0; i < students.length; i++){
//         let score = students[i].secore;
//         totalScore += score;

//     }
//     let average = totalScore / students.length;
//     console.log(average)



// function calcFactoria(num){
//     let initial = 1;
//     for(let i = num; i >0; i--){
//         console.log(` ${initial} x ${i} = ${initial * i}`)
//         initial *= i;
//     }
// }
// calcFactoria(10)

// function firstLuckyNumber(arr){
//     let res = -1;
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] == i){
//             res = arr[i]
//         } 
//     }
//     console.log(res)
// }
// let nums = [5, 3, 9, 3, 9, 3, 5, 5, 5, 5];
// firstLuckyNumber(nums)

// function twoSum(numbers, n, n1) {
//     let res = []
//     let rees = []

//     for(let i = 0; i < numbers.length; i++) {
//         if (numbers[i] + numbers[i + 1] == n) {
//               if(res.length >1){
//             continue
//         }
//             res.push(i),
//             res.push(i + 1)
//             // console.log(i, i + 1)
//             // break
//         }
      
//         if (numbers[i] + numbers[i + 1] == n1) {
//               if(rees.length >1){
//             continue
//         }
//             rees.push(i),
//             rees.push(i + 1)
//             // console.log(i, i + 1)
//             // break
//         }
//     }
//     let result = [];
//     result.push(res, rees)

//     console.log(result)
// }



// twoSum([0, 2, 8, 3, 5, 3, 9, 10], 8, 12)










// function twoSum(arrayNum, n){
//     let ind = []
//     let occurences = 0


//     for(let i = 0; i < arrayNum.length; i++){
//         if(arrayNum[i] + arrayNum[i + 1] === n){
//             occurences += 1  
//             if(ind.length >= 2){
//                 continue
//             }
//             ind.push([i, i+1])
//             // ind.push(i + 1)
            
//         }
        
//     }
//     if (occurences > 1){
//         ind.push(true)
//     } else {
//         ind.push(false)
//     }
//     console.log(ind[3])
//     console.log(occurences)
// }
addNumber(9)

// twoSum([10, 2, 9, 3, 9, 10, 1, 6, 11, 1, 13, 12, 0, 9, 3], 12)

// let arry = [[0,1], [2.3], [3,4]]

// const addNum = function(){

// }
// addNum()

function addNumber(name){
return name++
}



// new user('Philip', 45)
// console.log(user)