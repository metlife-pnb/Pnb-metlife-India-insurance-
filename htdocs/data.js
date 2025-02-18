// Simulated user database
const USERS = [
    {
        name: 'John Doe',
        policyNo: 'PNB123456',
        dob: '1990-01-01',
        email: 'john@example.com'
    },
    {
        name: 'Jane Smith',
        policyNo: 'PNB789012',
        dob: '1985-05-15',
        email: 'jane@example.com'
    }
];

// API endpoints configuration
const CONFIG = {
    API_ENDPOINT: 'https://api.example.com',
    ROUTES: {
        LOGIN: '/auth/login',
        SIGNUP: '/auth/signup',
        RESET_PASSWORD: '/auth/reset-password',
        UPDATE_PROFILE: '/user/profile',
        PAYMENT_HISTORY: '/user/payments'
    }
}; 