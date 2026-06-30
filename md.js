function checkPasswordStrength(password){
  let uppercount = 0;
  let lowerCount = 0;
  let digitCount = 0;
  let hasSpecial = false

if(password.length === 0){
  return "invalid"
}
 
for( let i = 0; i < password.length; i++){
let code = password.charCodeAt(i);

  if(code >= 65 && code <= 90){

    uppercount++;
    
  } 
  
  if ( code >= 97 && code <= 122 ){
    lowerCount++;
  }

  if ( code >= 48  && code <= 57 ){

    digitCount++;

  }
   if(!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)&& !(code >= 48 && code <= 57)){
      hasSpecial = true;
   }
  }
 if( lowerCount && !uppercount && !digitCount || password.length < 8){
    return "weak"
  
  }
  if(uppercount >= 2 && lowerCount >= 2 && digitCount >= 2 && !hasSpecial && password.length > 8){

    return "medium"

  }
if(uppercount >=1 && lowerCount >=1  && digitCount >=1  && hasSpecial && password.length > 8){

    return "strong"

  }
  
  return "needs review"
}

// console.log(checkPasswordStrength("   "))


let cities =[
  {name:'Jos', population:25000},
  {name:'Makurdi', population:4000000},
  {name:'Calabar', population:9600000},
  {name:'Abuja', population:2500000},
  {name:'Oyo', population:5500000},
  {name:'Rivers', population:4999000},
];
let newCities = cities.filter(({population}) => population >= 5000000)
// console.log(newCities)

// const givenArray = [1, 2, 3, 4, 5];
// const sum = givenArray.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);


// const average = givenArray.reduce((acc, cur) => acc + cur)/givenArray.length
// console.log(average)

// const givenArray1 = [1, 2, 3, 5, 8];
// const givenArray2 = [6, 6, 6, 6, 7];
// const testArray1 = givenArray1.every(n => n > 5);
// const testArray2 = givenArray2.every(n => n > 5);
// console.log(`givenArray1: ${testArray1}; givenArray2: ${testArray2}`); // console: givenArray1: true; givenArray2: false


// const givenArray = [
//   [1, 2, 3, 4, 5, 6],
//   [10, 20, 30, 40, 50, 60],
//   [100, 200, 300, 400, 500, 600]
// ];
// const sum = 
//   givenArray
//     .flat() // flattens the array
//     .reduce((acc, curr) => acc + curr); // finds the sum
// console.log(sum)



// const users = [
//   [
//     { "firstName": "Lorem", "lastName": "Ipsum" },
//     { "firstName": "Dolor", "lastName": "Sit" },
//     { "firstName": "Amet", "lastName": "Consectetur" }
//   ],
//   [
//     { "firstName": "Adipiscing", "lastName": "Elit" },
//     { "firstName": "Etiam", "lastName": "Lobortis" },
//     { "firstName": "Lorem", "lastName": "Elit" }
//   ],
//   [
//     { "firstName": "Lorem", "lastName": "Ipsum" },
//     { "firstName": "Dolor", "lastName": "Sit" },
//     { "firstName": "Amet", "lastName": "Consectetur" }
//   ],
//   [
//     { "firstName": "Adipiscing", "lastName": "Elit" },
//     { "firstName": "Etiam", "lastName": "Lobortis" },
//     { "firstName": "Lorem", "lastName": "Elit" }
//   ]
// ];

// const usersFirstNames = users.flatMap(usersGroup => usersGroup.map(u => u.firstName));

// console.log(usersFirstNames); 


// const fruits = [
//   3,6,4,20,1001,8,18,2,9
// ];

// const fruit = fruits.sort();
// console.log(fruit);

// const givenArray = [
//   {"name": "Yosha Gamuda", "phone": 1234567890},
//   {"name": "Portia Umeng", "phone": 4894759371},
//   {"name": "Yosha Gamuda", "phone": 1234567890},
//   {"name": "Portia Umeng", "phone": 4894759371}
// ];

// let sortedArray = givenArray.sort((a,b) => a.)
// console.log(sortedArray)

const givenAray = [
  {"name": "Yosha Gamuda", "phone": 1234567890},
  {"name": "Portia Umeng", "phone": 4894759371},
  {"name": "Yosha Gamuda", "phone": 1234567890},
  {"name": "Portia Umeng", "phone": 4894759371}
];
// givenArray.sort(({name1}, {name2}) => {
//   name1 = name1.toUpperCase();
//   name2 = name2.toUpperCase();
//   return (name1 < name2) ? -1 : (name1 > name2) ? 1 : 0;
// });
// console.log(givenArray);

// givenArray.sort((a, b) =>
//   a.name.localeCompare(b.name)
// );
// console.log(givenArray)

const givenArray = [
  [1, 2, 3, 4, 5, 6],
  [10, 20, 30, 40, 50, 60],
  [100, 200, 300, 400, 500, 600]
];

let students = [
  { name: "John", score: 75 },
  { name: "Mary", score: 92 },
  { name: "Peter", score: 68 },
  { name: "Grace", score: 85 }
]

// let sorted = student => ({student.sort((a,b) => b.score - a.score)});

// console.log(sorted)

// let modified = givenAry => {
// return  givenAry.flat().map(num => num *2)
// }
// console.log(modified([477, 8914, 40461, 599148]))


// const pluralNouns = arr => {
//   return arr.map(n => n + 's')
// }
// console.log(pluralNouns(['him', 'Me', 'orange']))





// const sortedScores = (performance, callback) =>{
//   let sorted = performance.forEach(n =>callback(n))
//   return sorted
// }

let studentsPerf =[
  { name: "John", score: 75 },
  { name: "Mary", score: 92 },
  { name: "Peter", score: 68 },
  { name: "Grace", score: 85 }
]

let sorting = s => {
  let sort = s.sort((a,b) => b.score -a.score);

  return sort.flatMap((student, indx) => `${indx +1}. ${student.name} - ${student.score}`);

}

// console.log(sorting(studentsPerf))

// let words = ['running', 'walk', 'swimming', 'fkfingldkmf', 'jump', 'coding', 'read'];
// let filtered = words.filter((word, indx) => {
//   // return word.includes('ing') = indx[-1] 
// })

// console.log(filtered)

let arra = [[1,2, 4,5,3], [4,6, 2, 5,], [7,2,5,2,6], [2,7,10]];
let filteredNums = arra.flat().filter((num, indx) => {
  return num %2 ==0
})
// console.log(filteredNums)
















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

const stocked = prdd =>{
  let fitering = prdd.filter(({inStock}) => {
    return inStock === true})
  return fitering
}
// console.log(stocked(products))



let wordsLength = arr =>{
  let word = words.filter(word => {
  return word.length > 5});
return word
}
// console.log(wordsLength(words))


// const customersSpending = arr => {
//   let calTotalAmount = arr.reduce((total, cur) => total + cur)
// }

let customers =[
  { name: "John", spent: 45000 },
  { name: "Mary", spent: 82000 },
  { name: "Peter", spent: 35000 },
  { name: "Grace", spent: 92000 }
]

let customersTotalAmount = customers.reduce((total, cur) => total += cur.spent, 0)
let sortin= customers.sort((a,b) => b.spent - a.spent)
let mostSpendingCust = customers.reduce((total, cur) => {
  return total.spent >cur.spent? total: cur
})
// console.log(customersTotalAmount, sortin, mostSpendingCust)


let production = [
  { product: "Book", price: 2000, qty: 5 },
  { product: "Pen", price: 500, qty: 10 },
  { product: "Bag", price: 8000, qty: 2 }
];
let pddRevenue = production.map(n => {
 return  n.price * n.qty
});
let overall = pddRevenue.reduce((total, cur) => total += cur)
// console.log(pddRevenue, overall)


let skill = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node"
]

let wordOrder = skill.sort((a,b) => a.length - b.length)
// wordOrder.forEach(n => console.log(`${n} - ${n.length}`))
// console.log(wordOrder)


let pupils = [
  { name: "John", score: 55 },
  { name: "Mary", score: 91 },
  { name: "Peter", score: 78 },
  { name: "Peter", score: 78 },
  { name: "Peter", score: 44 },
  { name: "Peter", score: 78 },
  { name: "Peter", score: 12 },
  { name: "Peter", score: 65 },
  { name: "Peter", score: 78 },
  { name: "Grace", score: 65 }
];
let grade = pupils.map(n =>{
  let grade;
  if(n.score < 50){
    grade = 'F'
  } else if(n.score > 70){
    grade = 'C'
  } else if(n.score > 90){
    grade = 'B'
  } else{
    grade = 'A'
  }
  return {
    ...n,
    grade
  }
})
// console.log(grade)


// var isPalindrome = function(x) {
//     let covert = String(x);
//     let rev = ''
//     for(i=covert.length-1; i>=0; i--){
//         rev += covert[i]
//     }
//     return covert === rev
// };

// console.log(isPalindrome(121))


// var romanToInt = function(s) {
//     let romanValues = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
//     let numeric = [1, 5, 10, 50, 100, 500, 1000];
//     for(let i =0; i<romanValues.length; i++){
//         for(let j=0; j<numeric.length; j++){
//             romanValues[i] = numeric[j]
//             console.log(romanValues[0])
//         }
//     }
// };



// var longestCommonPrefix = function(strs) {

//     let res = '';
    
//     for(i=0; i<strs.length; i++){
//       for(j=0; j<strs[i]; j++){
//           if(strs[i][j] != strs[0][j]){
//           break
//         } else{
//           return res += strs[i][j]
//         }
//       }
//     }
//     return res
// };
// console.log(longestCommonPrefix(["flower","flow","flight"]))

//  if(strs[0][j] === strs[i][j])



let cart = {}
function addProduct(category,product,price){

}

addProduct('food','corn',50)
addProduct('food','rice',500)
addProduct('beauty', 'comb', '$100')
console.log(cart);

function displayProduct(cat){
  for(i=0; i<cart.length; i++){
    if(cat === cart[category]){
        console.log(cart[category])
    }
  }
}
// displayProduct('beauty')



let user ={
    name: 'Crystal',
    age:45,
    email:'terhemeniorwua@gmail.come',
    locatio:'Berlin',
    blogs:[
        { title: 'Why mac and cheese rules', likes:53 },
        { title: '10 things to do in the morning', likes: 24 }
    ],
    loggin(){
        console.log('the user logged in')
    },
    loggout(){
        console.log('the user logged out')
    },
    blogsPrint(){
      this.blogs.forEach(blog => `console.log(blog.title, "=>", blog.likes)`)
    }
}
// user.blogsPrint()
// let users = ['Mario', 'Jay']
// users.forEach((user, indx) => {
//     console.log(indx+1, user)
// })


let student = {

    //object properties

    name:'Philip',
    age:12,
    gender:'M',
    profession:'Student',
    country:'Nigeria',
    hobbie:['Music', 'coding', 'instrumentation'],

    // Object Action Methods

    inValidAge(){
        if(typeof this.age !== 'number' || this.age < 0){
            return 'Invalide age'
        }
    },
    isValidAge(){
        if(!this.inValidAge()){
            return this.age
        }
    },
    getBirthYear(){
        let age = this.age;
        let year = new Date().getFullYear();
        return (year - age);
    },
    greet(){
        return (
            `Hello! My name is ${this.name}, I am ${ this.isValidAge() } years old born in ${ this.getBirthYear() }. I am working as a ${ this.profession }. My hobbies are ${this.hobbie}`
        )
    }
} 
student.age = 56;
console.log(student.greet())


let developer = {
  //Personal info

  name: 'Philip',
  state: 'Benue',
  marritalStatue: ' Single',
  skills: [],

  //Dev dynamic info
  age(){
    return (new Date().getFullYear() - 1967)
  },
  yearsOfExperience(){
    return (new Date().getFullYear() - 2023)
  },
  skill(arr){
    arr.forEach(n => {
      this.skills.push(n)
    });
    // return this.skills
  }
}
let res = developer.skill(['java', 'python']);
console.log(developer.skills)