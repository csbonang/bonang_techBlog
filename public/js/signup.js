// used to sign up 
const signupFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name,username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      console.log()
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
 // signup
 document
 .querySelector('.signup-form')
 .addEventListener('submit', signupFormHandler);
