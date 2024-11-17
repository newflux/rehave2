// signin.js

// Function to simulate Google Sign-In
function signInWithGoogle() {
    // In a real application, you would use the Google Sign-In API here
    const email = prompt("Please enter your Google email address:");
    if (email) {
        // Store the email in localStorage
        let emails = JSON.parse(localStorage.getItem('userEmails')) || [];
        if (!emails.includes(email)) {
            emails.push(email);
            localStorage.setItem('userEmails', JSON.stringify(emails));
        }
        
        alert(`Signed in successfully with: ${email}`);
        // Redirect to dashboard.html after successful sign-in
        window.location.href = 'dashboard.html';
    }
}

// Add click event listener to the sign-in button
document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.getElementById('google-signin');
    if (signInButton) {
        signInButton.addEventListener('click', signInWithGoogle);
    }
});

// Function to display all stored emails (for demonstration purposes)
function displayStoredEmails() {
    const emails = JSON.parse(localStorage.getItem('userEmails')) || [];
    console.log('Stored emails:', emails);
}

// You can call displayStoredEmails() in the browser console to see the stored emails