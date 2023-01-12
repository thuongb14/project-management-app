import { renderHeader } from './components/header.js';
import { getstartedButton } from './components/getStarted.js';
import { featuresLink, whyUsLink, loginPageLink } from './components/navLinks.js';
import { renderLandingPage } from './components/landingPage.js';
import { logOut } from "./components/logout.js"
import { renderDashboardProject } from "./components/dashboardProject.js"
import { editProject, openEditModal } from './components/editProject.js';
import {addProjectBoard, openProjectModal } from "./components/createBoard.js"

import { deleteProject, openDeleteProjectModal } from './components/deleteProject.js';
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
  if (e.target.id === 'edit-project') {
    openEditModal(e)
  }
  if (e.target.id === 'close-modal') {
    document.querySelector('.modal').classList.add('hidden')
  }
  if (e.target.id === 'submit-edit') {
    editProject()
  }
  if (e.target.id === "add-project"){
    openProjectModal(e)
  }
  if (e.target.id === "submit-project"){
    addProjectBoard(e)
  }

  if (e.target.id === 'delete-project') {
    openDeleteProjectModal(e)
  }
  if (e.target.id === 'submit-delete') {
    deleteProject(e)
  }
});
