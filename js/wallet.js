let mainBalance = 0;
let investBalance = 0;

function addBalance() {
    let amt = prompt('Enter amount to add:');
    if (amt && !isNaN(amt) && parseFloat(amt) > 0) {
        mainBalance += parseFloat(amt);
        updateUI();
    }
}

function recharge() {
    let amt = prompt('Recharge from main wallet to investment:');
    if (amt && !isNaN(amt) && parseFloat(amt) > 0) {
        amt = parseFloat(amt);
        if (mainBalance >= amt) {
            mainBalance -= amt;
            investBalance += amt;
            updateUI();
        } else {
            alert('Insufficient main balance!');
        }
    }
}

function updateUI() {
    document.getElementById('mainBalance').textContent = '$' + mainBalance.toFixed(2);
    document.getElementById('investBalance').textContent = '$' + investBalance.toFixed(2);
    localStorage.setItem('mainBalance', mainBalance);
    localStorage.setItem('investBalance', investBalance);
}

// Load saved data
window.onload = function() {
    if (localStorage.getItem('mainBalance')) {
        mainBalance = parseFloat(localStorage.getItem('mainBalance'));
        investBalance = parseFloat(localStorage.getItem('investBalance'));
        updateUI();
    }
}
