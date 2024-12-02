function calculateAge() {
    const birthyear = document.getElementById('birthyear').value;
    const currentYear = new Date().getFullYear();
    const resultElement = document.getElementById('result');
    
    if (birthyear === "") {
        resultElement.textContent = "Please enter your BirthYear!";
        resultElement.className = ""; 
        return;
    }

    const age = currentYear - birthyear;

    if (age >= 18) {
        resultElement.textContent = `You are an Adult! 
        You can drive,
        you can vote,and the world is yours to explore. Make the most of your opportunities!`;
        resultElement.className = "result-adult";
    } else if (age > 0) {
        resultElement.textContent = `You are a Teen! 
        Enjoy your youth, dream big, and remember that your potential is limitless!`;
        resultElement.className = "result-teen";
    } else {
        resultElement.textContent = "Please enter a valid birth year!";
        resultElement.className = "";
    }
}