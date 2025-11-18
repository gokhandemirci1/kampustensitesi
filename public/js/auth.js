// Authentication utilities
const API_BASE = 'http://localhost:3000/api';

// Get token from localStorage
function getToken() {
    return localStorage.getItem('token');
}

// Get user from localStorage
function getUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

// Set token and user
function setAuth(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
}

// Clear auth
function clearAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

// Check if user is authenticated
function isAuthenticated() {
    return !!getToken();
}

// Get auth headers
function getAuthHeaders() {
    const token = getToken();
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
}

// Redirect based on role
function redirectByRole() {
    const user = getUser();
    if (!user) {
        window.location.href = 'index.html';
        return;
    }
    
    switch(user.role) {
        case 'student':
            window.location.href = 'student-dashboard.html';
            break;
        case 'teacher':
            window.location.href = 'teacher-dashboard.html';
            break;
        case 'admin':
            window.location.href = 'admin-dashboard.html';
            break;
        default:
            window.location.href = 'index.html';
    }
}

// Show alert message
function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    const container = document.querySelector('.form-container') || document.querySelector('.dashboard') || document.body;
    container.insertBefore(alertDiv, container.firstChild);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// Make API request
async function apiRequest(url, options = {}) {
    try {
        const response = await fetch(`${API_BASE}${url}`, {
            ...options,
            headers: {
                ...getAuthHeaders(),
                ...options.headers
            }
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'An error occurred');
        }
        
        return data;
    } catch (error) {
        throw error;
    }
}





