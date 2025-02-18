// Indian banks list for net banking
const banks = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "Punjab National Bank",
    "Bank of Baroda",
    "Canara Bank",
    "Union Bank of India",
    "Indian Bank"
];

function showPaymentForm(type) {
    document.getElementById('paymentForms').classList.remove('hidden');
    document.querySelectorAll('#paymentForms form').forEach(form => form.classList.add('hidden'));
    document.getElementById(`${type}Form`).classList.remove('hidden');
    
    // Populate net banking dropdown
    if(type === 'netbanking') {
        const select = document.querySelector('#netbankingForm select');
        select.innerHTML = '<option value="">Choose your bank</option>' + 
            banks.map(bank => `<option value="${bank}">${bank}</option>`).join('');
    }
}

function processPayment(type) {
    const amount = sessionStorage.getItem('paymentAmount');
    
    switch(type) {
        case 'card':
            if(document.getElementById('cardForm').checkValidity()) {
                // Simulate payment processing
                setTimeout(() => {
                    window.location.href = 'confirmation.html';
                }, 1000);
            }
            break;
            
        case 'netbanking':
            const bank = document.querySelector('#netbankingForm select').value;
            if(bank) {
                setTimeout(() => {
                    window.location.href = 'confirmation.html';
                }, 1000);
            }
            break;
            
        case 'upi':
            const upiId = document.querySelector('#upiForm input').value;
            if(upiId && upiId.includes('@')) {
                setTimeout(() => {
                    window.location.href = 'confirmation.html';
                }, 1000);
            }
            break;
    }
}

// Initialize payment options
document.addEventListener('DOMContentLoaded', () => {
    const storedAmount = sessionStorage.getItem('paymentAmount');
    if(!storedAmount) window.location.href = 'payment.html';
    
    // Display amount in payment options page
    document.getElementById('paymentAmountDisplay').textContent = storedAmount;
});

// Card Type Selection
document.querySelectorAll('.card-type-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.card-type-btn').forEach(b => 
            b.classList.remove('border-blue-500', 'bg-blue-50'));
        this.classList.add('border-blue-500', 'bg-blue-50');
        document.getElementById('cardIcon').innerHTML = this.querySelector('img').outerHTML;
    });
});

// Card Number Formatting
document.getElementById('cardNumber').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formatted = value.match(/.{1,4}/g)?.join(' ') || '';
    e.target.value = formatted;
    validateCardNumber(value);
});

// CVV Visibility Toggle
document.getElementById('toggleCVV').addEventListener('click', function() {
    const cvvInput = document.getElementById('cvv');
    cvvInput.type = cvvInput.type === 'password' ? 'text' : 'password';
});

// Card Validation
function validateCardNumber(number) {
    const cardError = document.getElementById('cardError');
    const isValid = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(number);
    cardError.classList.toggle('hidden', isValid);
}

// Expiry Date Validation
document.getElementById('expiryDate').addEventListener('change', function() {
    const selectedDate = new Date(this.value);
    const currentDate = new Date();
    this.setCustomValidity(selectedDate < currentDate ? 'Expiry date must be in the future' : '');
}); 