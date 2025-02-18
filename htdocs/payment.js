document.addEventListener('DOMContentLoaded', function() {
    // Get stored data from sessionStorage
    const name = sessionStorage.getItem('userName');
    const policyNo = sessionStorage.getItem('policyNo');

    // Display the data
    document.getElementById('displayName').textContent = name || 'Not Available';
    document.getElementById('displayPolicyNo').textContent = policyNo || 'Not Available';

    // Handle proceed button click
    const proceedBtn = document.getElementById('proceedBtn');
    proceedBtn.addEventListener('click', function() {
        const amount = document.getElementById('amount').value
            .replace(/[^0-9.]/g, '') // Remove non-numeric except dots
            .replace(/\.+/g, '.');   // Prevent multiple dots
        const mobile = document.getElementById('mobile').value;

        // Validate inputs
        if (!amount || !mobile) {
            alert('Please fill in all fields');
            return;
        }

        if (amount <= 0) {
            alert('Please enter a valid amount');
            return;
        }

        sessionStorage.setItem('paymentAmount', amount);
        window.location.href = 'payment-options.html';
    });
}); 