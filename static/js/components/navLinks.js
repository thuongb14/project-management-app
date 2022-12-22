import { renderLogin } from "./login.js";
import { renderLandingPage } from "./landingPage.js";

export function whyUsLink() {
  const why = document.getElementById('whyUs')
  why.addEventListener('click', () => {
    renderLandingPage()
    setTimeout(() => {
      location.hash = "#third-row-section"
    }, 40)
    location.hash = "/"
  })
}

export function featuresLink() {
  const features = document.getElementById('features')
  features.addEventListener('click', () => {
    renderLandingPage()
    setTimeout(() => {
      location.hash = "#second-row-section"
    }, 40)
    location.hash = "/"
  })
}


export function loginPageLink(){
  const loginBtn = document.getElementById("log-in")
  loginBtn.addEventListener("click", ()=>{
      renderLogin()
    })

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
        console.log(response);
        console.log("test");
        getstartedButton();
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
});
