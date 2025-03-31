function take_inputs_LCM(){
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    LCM(a, b);
}

function gcd(a, b) 
{ 
if (b == 0) 
    return a; 
return gcd(b, a % b); 
} 

// Function to return LCM of two numbers 
function LCM(a, b) 
{ 
    document.getElementById("output").innerText = "LCM of " + a + " and " + b + " is " + (a*b)/gcd(a, b);
} 




function take_input_year(){
    let year = document.getElementById("input_year").value;
    check_leap_year(year);
}

function check_leap_year(n) {
    let result = ""; // Store result before updating the output

    if (n % 4 === 0) {
        if (n % 100 === 0) {
            if (n % 400 === 0) {
                result = n + " is a leap year";
            } else {
                result = n + " is not a leap year";
            }
        } else {
            result = n + " is a leap year";
        }
    } else {
        result = n + " is not a leap year";
    }

    // Update the output once at the end
    document.getElementById("output_year").innerText = result;
}

function take_input_anagram(){
    let str1 = document.getElementById("input1_anagram").value;
    let str2 = document.getElementById("input2_anagram").value;
    isAnagram(str1, str2);
}

function isAnagram(str1, str2) {
    // Convert to lowercase and remove spaces
    str1 = str1.toLowerCase().replace(/\s/g, '');
    str2 = str2.toLowerCase().replace(/\s/g, '');

    let result = ""; // Store result before updating the output

    // Check if lengths match (early return)
    if (str1.length !== str2.length) {
        result = "Not anagrams";
        document.getElementById("output_anagram").innerText = result;
        return; // Stop execution here
    }

    // Sort the characters and compare
    if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
        result = "Anagrams";
    } else {
        result = "Not anagrams";
    }

    // Update the output
    document.getElementById("output_anagram").innerText = result;
}




