document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('JSON FILES/login.json')
    .then(response => response.json())
    .then(data => {
      const user = data.Users.find(user => user.username === username && user.Password === password);
      if (user.role === 'admin') {
       // Save user role to localStorage
       localStorage.setItem('userRole',JSON.stringify('admin'));
       // Redirect to admin dashboard
       window.location.href = 'admin-dashboard.html';
     } else if (user.role ==='site_user') {
       // Redirect to home page
       localStorage.setItem('userRole', JSON.stringify('user'));
       window.location.href = 'index.html';
     }
    else {
     alert('Invalid username or password');
   }
    })
    .catch(error => console.error('Error:', error));
});

  
 