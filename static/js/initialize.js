import { renderHeader } from './components/header.js';
import { getstartedButton } from './components/getStarted.js';
import { featuresLink, whyUsLink } from './components/navLinks.js';
import { renderLandingPage } from './components/landingPage.js';
//initial rendering
renderHeader();
renderLandingPage();

//header on click
whyUsLink()
featuresLink()

//other element on click
window.addEventListener('click', (e) => {
  if (e.target.id === 'pLogo') {
    renderLandingPage();
  }
  if (e.target.id === 'sign-up') {
    getstartedButton();
  }
});
