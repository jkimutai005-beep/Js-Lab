function createLoginTracker(userInfo, maxAttempts) {
    let attemptCount = 0;
    
    return (passwordAttempt) => {
        attemptCount++;
        
        if (attemptCount > maxAttempts) {
            return "Account is restricted due to too many failed attempts";
        }

        if (passwordAttempt === userInfo.password) {
            return "Login Successful";
        } else {
            return "Incorrect password. Attempts remaining: " + (maxAttempts - attemptCount);
        }
    };
}

const userInfo = {
    "username": "user1",
    "password": "password123"
};

const login = createLoginTracker(userInfo, 3);

console.log(login("password123"))
console.log(login("wrongpass"));
console.log(login("wrongpass"));
console.log(login("wrongpass"));
console.log(login("wrongpass"));
console.log(login("wrongpass"));