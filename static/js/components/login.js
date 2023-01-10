export function renderLogin() {
    const loginPage = document.getElementById("content")
    loginPage.innerHTML = `
    <h4>Log In</h4>
        <p style="color: red" class="alert"></p>
        <form id="logInForm" method="POST">
          <label for="email">Email*: 
            <input type="email" name="email" id="email" required>
          </label>
          <label for="password">Password*: 
            <input type="password" name="password" id="password" required>
          </label>
          <button id="logIn" type="submit">Log In</button>
        </form>
        <form id="guestLogInForm" method="POST">
        <button id="logInGuest" type="submit">Log In as Guest</button>
        </form>
        `;
        login()
}

function login() {
    const form = document.querySelector('#logInForm');
    const alert = document.querySelector('.alert');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = {
        email: formData.get('email'),
        password: formData.get('password'),
      };
      axios
        .post('/api/session', data)
        .then((response) => {
          alert.textContent = `${response.data.user.name} has logged in`;
          location.reload()
        })
        .catch((err) => {
          alert.textContent = err.response.data.message
        })
        ;
    });

    const guestForm = document.querySelector('#guestLogInForm')
    guestForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        email: 'guest@example.com',
        password: 'guest123'
      };
      axios
        .post('/api/session', data)
        .then((response) => {
          alert.textContent = `${response.data.user.name} has logged in`;
          location.reload()
        })
        .catch((err) => {
          alert.textContent = err.response.data.message
        })
        ;
    })
  }