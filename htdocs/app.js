document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    // Signup form handling
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const policyNo = document.getElementById('policyNo').value;
        const dob = document.getElementById('dob').value;

        if (!name || !policyNo || !dob) {
            alert('Please fill in all fields');
            return;
        }

        const user = {
            id: Date.now(),
            name: name,
            policyNo: policyNo,
            dob: dob,
            registrationDate: new Date().toISOString(),
            lastLogin: new Date().toISOString()
        };

        // Store user in localStorage
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Proceed to payment
        sessionStorage.setItem('userName', user.name);
        sessionStorage.setItem('policyNo', user.policyNo);
        sessionStorage.setItem('userDob', user.dob);
        sessionStorage.setItem('registrationDate', user.registrationDate);
        sessionStorage.setItem('lastLogin', user.lastLogin);

        // Redirect to payment page
        window.location.href = 'payment.html';
    });
}); 