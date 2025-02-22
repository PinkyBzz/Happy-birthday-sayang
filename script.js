const correctAnswers = ["7", "zelika", "17"]; // Example correct answers

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('input');
    let allCorrect = true;

    inputs.forEach((input, index) => {
        if (input.value.trim().toLowerCase() !== correctAnswers[index].toLowerCase()) {
            allCorrect = false;
        }
    });

    if (allCorrect) {
        document.getElementById('next-button').style.display = 'block';
        document.getElementById('next-button').onclick = function() {
            window.location.href = 'page2.html'; // Navigate to Page 2
        };
    } else {
        alert("Some answers are incorrect. Please try again.");
    }
});

const greetingText = "Happy Birthday! I love you!";
let index = 0;

function typeGreeting() {
    if (index < greetingText.length) {
        document.getElementById('greeting').innerHTML += greetingText.charAt(index);
        index++;
        setTimeout(typeGreeting, 100); // Adjust typing speed here
    }
}

window.onload = function() {
    typeGreeting();
};
