function calculate() {
    // Get the user inputs and convert them to numbers
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Please enter valid numbers!";
        return; // Stop further execution
    }

    // Perform calculation based on the operator
    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 * num2;
            break;
        case 'divi':
            if (num2 === 0) {
                document.getElementById("result").textContent = "Can't be divided by 0!";
                return; // Stop further execution
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById("result").textContent = "Invalid operator!";
            return; // Stop further execution
    }

    // Display the result
    document.getElementById("result").textContent = `Result: ${result}`;
}
