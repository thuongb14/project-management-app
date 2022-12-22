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

