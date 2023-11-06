 		
function mypalindrome(str) {

    // total length of the string
    const len = string.length;

    //using loop to divide the word into half
    for (let i = 0; i < len / 2; i++) {

        // to check first and last character if they are same
        if (string[i] !== string[len - 1 - i]) {
            alert( 'It is not a palindrome');
        }
    }
    alert( 'It is a palindrome');
}

// accept input from user
const string = prompt('Enter a string or number: ');

const value = mypalindrome(string);

console.log(value);
 
