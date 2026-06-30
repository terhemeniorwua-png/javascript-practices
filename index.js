// 'use strict'

// let num = "10";
// console.log(~-num)


// Ternery operator
// let age = 14;
// let test = age >= 20? 'You are of age': 'You are not of age' ;
// console.log(test)

// ASSIGNMENT

// let voter = {
//     name: 'John',
//     age: -8000,
//     isRegistered: true
// }
// if(voter.age >= 18 && voter.isRegistered === true){
//     console.log('You are eligible to vote!')
// } else if(voter.age >= 18 && voter.isRegistered === false){
//     console.log('You are not registered!')
// } else if(voter.age < 0 && voter.isRegistered === true){
//     console.log('Invalid age!')
// } else{
//     console.log('You are not eligible to vote!')
// }


// let customer = {
//     age: 83,
//     isStudent: true,
//     isPromoActive: true,
//     name: 'John'
// }
// if(customer.age >= 65 && customer.isPromoActive === true){
//         console.log(`Application profile:
//             Name: ${customer.name}
//             Age: ${customer.age}
            
//             "Discount applied"`)
   
// } else if(customer.isStudent === true && customer.isPromoActive === true){
//     console.log(`Application profile:
//             Name: ${customer.name}
//             Student: ${customer.isStudent}
            
//             "Discount applied"`)
// } else{
//     console.log('Discount denied')
// }

// let boy = '';
// let boys = boy.toUpperCase().indexOf('');
// console.log(typeof boy)

// let user = {
//     name:'Joy',
//     age: 13,
//     gender: 'female'
// }
// let includes = Object.hasOwn(user, 'name')




// const person = {
//   name: 'Alice',
//   age: 30,
//   contact: {
//     email: "alice@example.com",
//     phone: {
//       home: "123-456-7890",
//       work: "098-765-4321"
//     }
//   }
// };
// if(person.name){
//     console.log('this is true')
// }











// let theme = null ?? 'default';
// console.log(theme)

// let userSetting = {
//     theme: null,
//     volumn: 0,
//     notification: false
// } 
// let mode = userSetting.theme ?? 'dark';
// console.log(mode)

// let numm = Math.random();
// console.log(numm)

// let randomSelect = Math.floor(Math.random()*43) + 1;
// console.log(randomSelect)





// let blockfuseMembers = [
//     {department:'Staff', name:'John', role:'Intern', room:'Foundry'},
//     {department:'Staff', name:'Doris', role:'senior Dev', room:'Polkdot'},
//     {department:'Staff', name:'Mabas', role:'Maintainer', room:'Polkdot'},
//     {department:'Staff', name:'Phil', role:'Admin', room:'Polkdot'},
//     {department:'Staff', name:'John', role:'Head of Hr', room:'Uniswap'},
//     {department:'Staff', name:'Timothy', role:'Junior Hr', room:'Meta mask'},
//     {department:'Staff', name:'Junior', role:'senior Hr', room:'Meta mask'},
//     {department:'Student', name:'Pet', role:'Beginner', room:'Vitalik'},
//     {department:'Student', name:'Pt', role:'Advance', room:'Gavin'},
//     {department:'Student', name:'Pt', role:'Web3', room:'War Room'}
// ]

// // let member = blockfuseMembers[5];

// if(member.department === 'Staff'){
//     if(member.role === 'Dev'){
//         if(member)
//     } else if(member.role === 'Hr'){
//         console.log(member)
//     }
//          else{
//         console.log('Not recognised')
//     }
// } else if(member.department === 'Student'){
//     if(member.role === 'senior Dev'){
//         console.log(member)
//     } else{
//         console.log('Not recognised')
//     }
// } else{
//     console.log('You are not recognised at blockfuse')
// }



// let numb = 4;
// let num = numb > 4? 'True': 'False'
// // console.log(num)


// let named = 'Philip';
// let includ =  named.includes('P')? named.includes('P')? 'True': 'partial': 'false';
// console.log(includ)

// console.log(includ)

// let i = 10;
// for(i = 1; i <= 10; i++){
//     if(+i){
//         console.log('Fizz:',+i)
//         co
//     }
//

// let movies = [
//     {name: 'hekilis', year: 2002},
//     {name: 'merlin', year: 2002},
//     {name: 'guy', year: 2002},
//     {name: 'hekilis', year: 2002},
//     {name: 'hekilis', year: 2002},
//     {name: 'hekilis', year: 2002},
//     {name: 'hekilis', year: 2002},
//     {name: 'hekilis', year: 2002},
//     {name: 'hekilis', year: 2002},
//     {name: 'hekilis', year: 2002}
// ]
// for(i = 0; i <= movies.length-1; i++){
//     console.log(`Name:${movies[i].name}, Year:${movies[i].year}`)
// }






// let blockfuseMembers = [
//     {department:'Staff', name:'John', role:'Intern', room:'Foundry'},
//     {department:'Staff', name:'Doris', role:'senior Dev', room:'Polkdot'},
//     {department:'Staff', name:'Mabas', role:'Maintainer', room:'Polkdot'},
//     {department:'Staff', name:'Phil', role:'Admin', room:'Polkdot'},
//     {department:'Staff', name:'John', role:'Head of Hr', room:'Uniswap'},
//     {department:'Staff', name:'Timothy', role:'Junior Hr', room:'Meta mask'},
//     {department:'Staff', name:'Junior', role:'senior Hr', room:'Meta mask'},
//     {department:'Student', name:'Pet', role:'Beginner', room:'Vitalik'},
//     {department:'Student', name:'Pt', role:'Advance', room:'Gavin'},
//     {department:'Student', name:'Pt', role:'Web3', room:'War Room'}
// ]

// let member = blockfuseMembers[1];

// if(member.department === 'Staff'){
//     if(member.role === 'Intern'){
//         console.log(member.room)
//     } else if(member.role === 'senior Dev'){
//         console.log(member.room)
//     } else if(member.role === 'Maintainer'){
//         console.log(member.room)
//     } else if(member.role === 'Admin'){
//         console.log(member.room)
//     } else if(member.role === 'Head of Hr'){
//         console.log(member.room)
//     } else if(member.role === 'Junior Hr'){
//         console.log(member.room)
//     } else if(member.role === 'senior Hr'){
//         console.log(member.room)
//     } else{
//         console.log('You are not a staff')
//     }

// } else if(member.department === 'Student'){
//     if(member.role === 'Beginner'){
//          console.log(member.room)
//     } else if(member.role === 'Advance'){
//          console.log(member.room)
//     }  else if(member.role === 'Web3'){
//          console.log(member.room)
//     } else{
//         console.log('You are not a student')
//     }
// } else{
//     console.log('You seem to be a guest')
// }



// answer 1

let movies = [
    {name:'Hekilis', duration:'2:30min', pgRating:25},
    {name:'The guy', duration:'1:15min', pgRating:18},
    {name:'Merlin', duration:'2:30min', pgRating:18},
    {name:'Akilis', duration:'2:30min', pgRating:25},
    {name:'Game of thrones', duration:'2:30min', pgRating:25},
    {name:'Adventures', duration:'2:30min', pgRating:10},
    {name:'Spatacus', duration:'2:30min', pgRating:25},
    {name:'Back in time', duration:'2:30min', pgRating:20},
    {name:'THe shannara chronicles', duration:'2:30min', pgRating:18},
    {name:'Night of Doom', duration:'2:30min', pgRating:25}
]

let age = 22;

// if(age > 0){
//     for(i = 0; i <= movies.length-1; i++){
//          if(movies[i].pgRating <= age && age > 0){
//     console.log(movies[i].name, movies[i].duration);
//             } ;
//     };
// } else if(age < 0){
//     console.log('Invlid age!');
// } else{
//     console.log('Sorry, there is no movie for your age limit!');
// } 

// answer 2

let num = [2, 7, 5, 6, 3, 1, 0, 8, 4, 9, 10];

// for(i = 0; i <= num.length-1; i++){
//     let output = num.sort((a, b) => (a - b));
// console.log(output[i])
// }



// let grade = 'a';
// grade.toUpperCase();

// switch(grade){
//     case 'A':
//         console.log('You got an A')
//         break;
//     case 'B':
//         console.log('You got a B')
//         break;
//     case 'C':
//         console.log('You got a C')
//         break;
//     case 'D':
//         console.log('You got a D')    
//         break;
//      default:
//         console.log('not a valid grade')
// }

// let first = 'hello mabas';




let nums;
for()