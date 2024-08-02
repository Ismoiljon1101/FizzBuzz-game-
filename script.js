let userName;
let array; 
document.getElementsByClassName("mySubmit")[0].onclick = function() {
    // Get the value of the first input element with the class "userNumber"
   userName = document.getElementsByClassName("userNumber")[0].value;
    array = [];
   let count = 0;

    while (count < userName) {
        count++;
        if (count % 5 === 0 && count % 3 === 0) {
            array.push("FizzBuzz");
        } else if (count % 5 === 0) {
            array.push("Buzz");
        } else if (count % 3 === 0) {
            array.push("Fizz");
        } else {
            array.push(count);
        }
    }

    console.log(array);

document.getElementById("demo").innerHTML = array.join(", "); // Correct method


};
