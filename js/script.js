function submitQuiz() {
    const correctAnswers = {
        question1: "3",
        question2: "4",
        question3: "blue whale"
    };

    let score = 0;

    document.querySelectorAll('input[name="question1"], input[name="question2"]').forEach(input => {
        const label = input.nextElementSibling;
        label.classList.remove('correct', 'incorrect');
    });
    
    const q1Buttons = document.querySelectorAll('input[name="question1"]');
    q1Buttons.forEach(button => {
        if (button.checked) {
            if (button.value === correctAnswers.question1) {
                button.nextElementSibling.classList.add('correct');
                score++;
            } else {
                button.nextElementSibling.classList.add('incorrect');
            }
        }
    });

    const q2Buttons = document.querySelectorAll('input[name="question2"]');
    q2Buttons.forEach(button => {
        if (button.checked) {
            if (button.value === correctAnswers.question2) {
                button.nextElementSibling.classList.add('correct');
                score++;
            } else {
                button.nextElementSibling.classList.add('incorrect');
            }
        }
    });

    const q3Input = document.getElementById('question3');
    const q3Answer = q3Input.value.trim().toLowerCase();
    if (q3Answer === correctAnswers.question3.toLowerCase()) {
        q3Input.classList.add('correct');
        score++;
    } else if (q3Answer) {
        q3Input.classList.add('incorrect');
    }

    alert(`Your score is ${score}/3`);
}

function retryQuiz() {
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.checked = false;
        input.nextElementSibling.classList.remove('correct', 'incorrect');
    });
    
    const q3Input = document.getElementById('question3');
    q3Input.value = '';
    q3Input.classList.remove('correct', 'incorrect');
}

document.querySelector('.retry').addEventListener('click', retryQuiz);