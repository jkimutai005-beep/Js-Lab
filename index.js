function loginManager(maxAttempts) {
    let attempts = 0;

    
    return (password) => {
    if (attempts >= maxAttempts) {
              return "Account locked. Too many wrong attempts.";
        }

        if (password === "correctPassword") {
            attempts = 0; // reset attempts if correct password is given
            return "Login successful!";
        } else {
            attempts++;
            return `Incorrect password. Attempts remaining: ${maxAttempts - attempts}`; // logic for how the maximum login tries will be reached
        }
    };
}


const login = loginManager(3); // 3 is the maximum limit of attempts the user can make before being blocked out

console.log(login("wrongPass")); // Incorrect password. Attempts remaining: 2
console.log(login("wrongPass")); // Incorrect password. Attempts remaining: 1
console.log(login("wrongPass")); // Account locked