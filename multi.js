// let schoolReg = [];

// // A FUNCTION TO ADD STUDENTS

// function addStudent(Name, level, Gender, Email, RegNum){
//     let student = {name: Name,
//         classLevel: level,
//         isStudent: true,
//         schoolFeePaid: false,
//         gender:Gender,
//         admissionNumber:RegNum,
//         graduate: false,
//         email:Email
//     }
//     schoolReg.push(student)
// }

// // A FUNCTION TO REMOVE STUDENTS

// function removeStudent(RegNum){
//     for(let i = 0; i<schoolReg.length; i++){
//         let search = schoolReg[i];
//         if(search.admissionNumber === RegNum){
//             schoolReg.splice(i, '1')
//         }
//     }
// }

// // A FUNCTION TO SUSPEND A STUDENT

// function suspendStudent(RegNum){
//     for(let i = 0; i < schoolReg.length; i++){
//         let search = schoolReg[i];
//         if(search.admissionNumber === RegNum){
//             search.isSuspended =true;
//             schoolReg[i].info = 'You are on suspension'
//         }
//     }
// }

// // A FUNCTION TO EXPEL A STUDENT

// function expelStudent(RegNum){
//      for(let i = 0; i < schoolReg.length; i++){
//         let search = schoolReg[i];
//         if(search.admissionNumber === RegNum && search.isStudent === true){
//             delete schoolReg[i].schoolFeePaid;
//             schoolReg[i].isStudent = false;
//             schoolReg[i].admissionNumber = 'Student expelled!'
//         }
//      }
// }


// // A FUNCTION TO GRADUATE STUDENT

// function graduateStudent(RegNum){
//      for(let i = 0; i < schoolReg.length; i++){
//         let search = schoolReg[i];
//         if(search.admissionNumber === RegNum && search.classLevel === 'SSS 3' && search.isStudent === true && search.schoolFeePaid === true){
//             search.graduate = true;
//            delete search.isStudent;
//            delete search.classLevel;
//            delete search.schoolFeePaid
//         }
//      }
// }

// // A FUNCTION TO CHECK IF SCHOOL FEE IS PAID

// function checkFeePayment(RegNum, feeAmount){
//      for(let i = 0; i < schoolReg.length; i++){
//          let search = schoolReg[i];
//         if(search.admissionNumber === RegNum){
//             schoolReg[i].amount = feeAmount
//         }
//          if(feeAmount >= 12000){
//         schoolReg[i].schoolFeePaid = true
//      }
//      }
// }



// addStudent('Peter', 'SSS 3', 'Male', 'peter@gmail.com', '4533-3444')
// addStudent('Joy', 'SSS 2', 'Female', 'joy@gmail.com', '4573-3444')
// addStudent('Susan', 'SSS 3', 'Female', 'susan@gmail.com', '4553-3444')
// addStudent('Andrew', 'JSS 2', 'Male', 'andrew@gmail.com', '4513-3444')
// addStudent('Peter', 'JSS 2', 'Male', 'pete@gmail.com', '4523-3444')
// addStudent('Gilbert', 'JSS 2', 'Male', 'gilbert@mail.com', '4503-3444')


// // removeStudent('4503-3444')

// // suspendStudent('4523-3444')

// // expelStudent('4553-3444')

// // graduateStudent('4553-3444')

// // checkFeePayment('4503-3444', 12000)



// // console.log(schoolReg)


// // A FUNCTION TO ADD AND RETURN THE ARRAY WITH THE GREATEST SUM
// function greaterSumedArray(arry1, arry2){
//     let sum1 = 0;
//     let sum2 = 0;

//     for(i = 0; i<arry1.length; i++){
//         sum1 += arry1[i];
//     }
//      for(i = 0; i<arry2.length; i++){
//         sum2 += arry2[i];
//     }
//     if(sum1 > sum2){
//         return `Array: [${arry1}]
//             Sum: ${sum1}`
//     } else if(sum1<sum2){
//           return `Array: [${arry2}]
//             Sum: ${sum2}`
//     } else{
//         return 'Both sums are equal'
//     }
// }
// array1 = [2,5,2,4];
// array2 = [4,4,3,5];
// const result = greaterSumedArray(array1, array2);
// // console.log(result)

// // A FUNCTION TO FIND A MISSING NUMBER

// function findMissingNum(arryNum){
//         let missingInts = [];
//         for(let i = 1; i<arryNum.length-1; i++){
//             if (arryNum[i] + 1 !== arryNum[i+1]) {
//                 missingInts.push(arryNum[i] + 1)
//             }
// }
//  console.log(missingInts)
// }
// // findMissingNum([1,3,4,6,8])

// // A FUNCTION THAT FINDS VOWEL ALPHABETS IN A WORD

// function findVowels(word){
//     let toString = String(word).toLowerCase();
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let numOfVowels = 0;

//     for(let i = 0; i<toString.length; i++){
//         if(vowels.includes(toString[i])){
//             numOfVowels++;
//         }}
//     console.log(numOfVowels);
// }

// // findVowels();

//     let vowels = ['a', 'e', 'i', 'o', 'u'];
// for(i=0; i<vowels.length-1; i++){
//     console.log(vowels[++i])
// }


// function reverse(word){
//     let reversed = '';
//     for(let i=word.length-1; i>=0; i--){
//         reversed += word[i];
//     }
//     console.log(reversed)
// }
// reverse('therapy')

// let person = {
//     firstName: "GeeksforGeeks",
//     lastName: "A Computer Science Portal for Geeks",
//     rank: 43
// };
// let userId = "";
// // let i;
// for (let i in person) {
//     userId += person[i];
//     console.log(userId);
// }

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}