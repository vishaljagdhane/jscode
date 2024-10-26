document.getElementById('emailButton').addEventListener('click', function() {
    const email = 'support@support.com'; // Your support email
    const subject = 'service';
    const body = ''; // Leave blank for a new email

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink; // Open the email client
});
