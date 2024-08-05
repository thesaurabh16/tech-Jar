// src/services/authService.js
export const login = (email, password) => {
    const validEmail = "user@example.com";
    const validPassword = "Password123!";
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === validEmail && password === validPassword) {
          resolve({ message: "Login successful!" });
        } else {
          reject({ message: "Invalid email or password" });
        }
      }, 1000);
    });
  };
  