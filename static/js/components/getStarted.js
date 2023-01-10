export function getstartedButton() {
  const sectionContent = document.getElementById("content");
  sectionContent.innerHTML = `
        <h4>Sign Up</h4>
        <p style="color: red" class="alert"></p>
        <form id="signUpForm" method="PUT">
          <label for="name">Name*: 
            <input type="text" name="name" id="name" required>
          </label>
          <label for="email">Email*: 
            <input type="email" name="email" id="email" required>
          </label>
          <label for="password">Password*: 
            <input type="password" name="password" id="password" required>
          </label>
          <button id="signUp" type="submit">Submit</button>
        </form>
        `;
  signUp()
}

function signUp() {
  const signUpForm = document.querySelector('#signUpForm')
  const alert = document.querySelector('.alert')
  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const form = new FormData(signUpForm);
    const info = {
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
      };  
      axios.get('/api/users').then((response) => {
        let users = response.data.users;
        if (users.find((user) => user.email === info.email)) {
          alert.textContent = 'Email has been used';
        } 
        else {
          axios.put('/api/users', info).then(()=>{
            alert.textContent = 'Sign up successfully!'
            
          })
          signUpForm.reset()
        }
        setTimeout(() => {
          alert.textContent = '';
        }, 2000);
      })
  })
}
