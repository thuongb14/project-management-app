import { renderHeader } from './components/header.js';
import { getstartedButton } from './components/getStarted.js';
import { featuresLink, whyUsLink, loginPageLink } from './components/navLinks.js';
import { renderLandingPage } from './components/landingPage.js';
import { logOut } from "./components/logout.js"
import { renderDashboardProject } from "./components/dashboardProject.js"
//initial rendering
renderHeader();
renderLandingPage();


//other element on click
window.addEventListener('click', (e) => {
  if (e.target.id === 'pLogo') {
    renderLandingPage();
  }
  if (e.target.id === 'sign-up') {
    getstartedButton();
  }
  if (e.target.id === 'whyUs') {
    whyUsLink()
  }
  if (e.target.id === 'features') {
    featuresLink()
  }
  if(e.target.id === 'log-in') {
    loginPageLink()
  }
  if (e.target.id === 'log-out') {
    logOut()
  }
  if (e.target.id === 'dashboard'){
    renderDashboardProject()
  }
});
