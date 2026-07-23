let enteredPin = '';
const correctPin = '1234'; // Default PIN (user can change)

document.querySelectorAll('.pin-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const num = this.dataset.num;
        if (num === 'clear') {
            enteredPin = enteredPin.slice(0, -1);
        } else if (num === 'enter') {
            if (enteredPin === correctPin) {
                document.getElementById('lockScreen').style.display = 'none';
                document.getElementById('mainApp').style.display = 'block';
            } else {
                alert('Wrong PIN!');
                enteredPin = '';
            }
        } else {
            if (enteredPin.length < 4) enteredPin += num;
        }
        updateDots();
    });
});

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('filled', i < enteredPin.length);
    });
}
