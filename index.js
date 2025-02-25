
let input_year_element = document.getElementById('input_year');
let output_element = document.getElementById('output_box');


// disable the Check if input is not entered



function checkLeap() {
    let year = input_year_element.value;
    let output_text = "";

    // if year is not equal to zero and divisible by 4
    if (year > 0 && year % 4 == 0) {

        output_text = "Leap Year : year " + year + " is divisible by 4."
    
    //if year is divisible by 100
        if (year % 100 == 0) {
            
            //if year is divisible by 400
            if (year % 400 == 0) {
                output_text = "Leap Year : year " + year + " is divisible by 4, 100 and 400."
            } else {
                output_text = "Not a Leap Year : year " + year + " is divisible by 4,100 but not divisible by 400."
            }
        }
    }
    else {
        output_text = "Not a Leap Year"
    }
    output_element.innerHTML = output_text;
}

function clearOutputText() {
    output_element.innerHTML = "";

}