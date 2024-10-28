function verifyPassword() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const message = document.getElementById('message');
  
    // Clear any previous messages
    message.textContent = '';
  
    // Check if the password is at least 8 characters long
    if (password1.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
  
    // Check if both passwords match
    if (password1 !== password2) {
      alert('Passwords do not match. Please try again.');
      return;
    }
  
    // If both conditions are satisfied
    message.textContent = 'Passwords match!';
    message.style.color = 'green';
  }
  