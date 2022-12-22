export function getstartedButton() {
  const sectionContent = document.getElementById("content");
  sectionContent.innerHTML = `
        <h4>Sign Up</h4>
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
}

window.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id === "signUp") {
    const form = new FormData(document.getElementById("signUpForm"));
    const info = {
      name: form.get("name"),
      email: form.get("email"),
      password: form.get("password"),
    };
    console.log(info);
    axios
    .put(`/sign-up`, info)
    .then((response) => {
      console.log(response)
      console.log("test")
      getstartedButton();
    })
  }
});
