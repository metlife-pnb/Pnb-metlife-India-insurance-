document.addEventListener('DOMContentLoaded', () => {
    const amount = sessionStorage.getItem('paymentAmount');
    const transactionId = `PNB-${Date.now()}`;
    
    if(!amount) window.location.href = 'payment.html';
    
    document.getElementById('confirmedAmount').innerHTML = `₹<span class="font-mono">${amount}</span>`;
    document.getElementById('transactionId').textContent = transactionId;

    // Store transaction
    const transaction = {
        id: transactionId,
        amount: amount,
        method: sessionStorage.getItem('paymentMethod') || 'Card',
        status: 'Success',
        timestamp: Date.now()
    };
    
    let transactions = JSON.parse(sessionStorage.getItem('transactions') || '[]');
    transactions.push(transaction);
    sessionStorage.setItem('transactions', JSON.stringify(transactions));
    
    sessionStorage.removeItem('paymentAmount');
}); 