

// print even numbers from 10 to 40 using named functions,arrow function and variable function

// Q1-1 named function

function evenNumbers(){
    console.log("named function")
    for (i=10;i<=40;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
evenNumbers();

// Q1-2 arrow function

const Numbers = () => {
    console.log("arrow function")
    for (i=10;i<=40;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
Numbers();


//  Q1-3 variable function

const Even = function(){
    console.log("variable or anonymous function")
    for (i=10;i<=40;i++){
        if(i%2==0){
            
           console.log(i)
        }
    }
}
Even();

// check whther input is odd or not using named functions,arrow function and variable function

// Q2-1 named function

function oddOrEven(i){
    console.log("named fucntion")
    let check = (i%2 != 0)? ` ${i} is odd number` : ` ${i} is not a odd number`;
    return check;
}
console.log(oddOrEven(21));


// Q2-2 variable function

const oddCheck = function(i){
    console.log("variable fucntion");
    let check = (i%2 != 0)? ` ${i} is odd number` : ` ${i} is not odd a number`;
    console.log(check);
}
oddCheck(5);

// Q2-3 arrow fucntion 

const oddNumberCheck = (i) => {
        console.log("arrow fucntion")
        let check = (i%2 != 0)? ` ${i} is odd number` : ` ${i} is not odd a number`;
        return check;
}
console.log(oddNumberCheck(12));

// check input string is palindrome or not using named functions,arrow function and variable function.

// Q3-1 palindrome program using named function
function palindrome(str){
    // length of the string and -1 is for whlie using loops it takes from 1 but string indcies start from 0
    let len = str.length-1;
    // Variable holds reverse string 
    let rev =""; 
    for (i=len; i>=0;i--){
        rev = rev+str[i];
    }
    // checks palindromecheck or not
    let palindromeCheck = (str === rev) ? `${str} is a palindrome` : `${str} is not a palindrome`;
    console.log(palindromeCheck);
}
palindrome("wow");


// Q3-2 using arrow function palindrome 
const strReverse = (str)=>{
    let reverseStr = "";
    for (i=str.length-1; i>=0;i--){
        reverseStr= reverseStr + str[i];
    }
    let palindromeCheck = (str === reverseStr) ? `${str} is a palindrome` : `${str} is not a palindrome`;
    console.log(palindromeCheck);
}
strReverse("hello");