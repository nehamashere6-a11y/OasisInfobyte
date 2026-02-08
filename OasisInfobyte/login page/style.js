// Function to show only one section at a time
    function showSection(section) {
      document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
      document.getElementById(section + 'Section').style.display = 'block';
    }

    // Register
    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = document.getElementById("regUsername").value;
      const password = document.getElementById("regPassword").value;
      localStorage.setItem("user_" + username, password);
      alert("Registered successfully!");
      showSection('login');
    });

    // Login
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;
      const stored = localStorage.getItem("user_" + username);
      if(stored && stored === password){
        localStorage.setItem("loggedInUser", username);
        showDashboard();
      } else {
        alert("Invalid username or password");
      }
    });

    // Dashboard
    function showDashboard() {
      document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
      document.getElementById("dashboardSection").style.display = 'block';
      const user = localStorage.getItem("loggedInUser");
      document.getElementById("welcome").innerText = "Welcome " + user + "!";
    }

    // Logout
    function logout() {
      localStorage.removeItem("loggedInUser");
      showSection('login');
    }

    // If user already logged in
    if(localStorage.getItem("loggedInUser")){
      showDashboard();
    } else {
      showSection('register');
    }