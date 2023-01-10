import { renderLogin } from "./login.js";
import { renderLandingPage } from "./landingPage.js";

export function whyUsLink() {
    renderLandingPage()
    setTimeout(() => {
      location.hash = "#third-row-section"
    }, 40)
    location.hash = "/"
}

export function featuresLink() {
    renderLandingPage()
    setTimeout(() => {
      location.hash = "#second-row-section"
    }, 40)
    location.hash = "/"
}


export function loginPageLink(){
      renderLogin()
}

