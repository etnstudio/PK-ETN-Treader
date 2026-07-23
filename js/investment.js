let selectedPlan = null;

function selectPlan(btn) {
    const card = btn.parentElement;
    const min = parseFloat(card.dataset.min);
    if (investBalance >= min) {
        selectedPlan = { min, name: card.querySelector('h4').textContent };
        if (confirm(`Activate ${selectedPlan.name} plan for $${min}?`)) {
            investBalance -= min;
            // Add profit logic here
            alert('✅ Plan activated successfully!');
            updateUI();
        }
    } else {
        alert(`❌ Need at least $${min} in investment wallet.`);
    }
}

function activatePlan() {
    if (selectedPlan) {
        // Process investment
        alert(`Plan ${selectedPlan.name} is active!`);
    } else {
        alert('Please select a plan first.');
    }
}
