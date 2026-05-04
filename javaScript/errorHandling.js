// ERROR EXAMPLE
// console.log(x); // Reference Error

// TRY CATCH
try {
    let result = x + 10;
} catch (e) {
    console.log("Error caught:", e.message);
} finally {
    console.log("Always runs");
}


// THROW CUSTOM ERROR
function checkAge(age){
    if(age < 18){
        throw new Error("Age must be 18+");
    }
    return "Access granted";
}

try {
    console.log(checkAge(15));
} catch (e) {
    console.log("Handled:", e.message);
}

// TYPES OF ERRORS
// 1. Syntax Error
// if(x > 10 { }

// 2. Reference Error
// console.log(a);

// 3. Type Error
// null.toUpperCase();

// 4. Range Error
// new Array(-1);

// 5. Logical Error
let total = 10 + "5"; // wrong output

