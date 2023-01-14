import { renderDashboardProject } from './dashboardProject.js';

export function openDeleteProjectModal(e) {
  axios
    .get('/api/projects')
    .then((response) => {
      const allProjects = response.data.projects;
      const id = allProjects.find(
        (proj) => proj.projectid == e.target.dataset.projectId
      );
      return id;
    })
    .then((response) => {
      const modal = document.querySelector('.modal');
      const modalContent = document.querySelector('.modal-content');
      modal.classList.remove('hidden');
      modalContent.innerHTML = `
    <h4>Completed?</h4>
      <p>Mark the project as 'Done' will permanently remove the project. Are you sure?</p>
      <form action='/:id' method="POST" id="delete-project-form">
        <label  class="hidden" for="projectid">Name*: 
          <input type="text" name="projectid" id="projectid" value="${response.projectid}">
        </label>
      <div>
      <button type="button" id="close-modal">Close</button>
      <button type="submit" id="submit-delete">Submit</button>
      </div>
      </form>
      `;
    });
}

export function deleteProject(e) {
  e.preventDefault()
  const data = document.querySelector('#projectid').value;
  axios.delete(`api/tasks/projects/${data}`).then(() => {
    axios.delete(`/api/projects/${data}`).then(() => {
      document.querySelector('.modal').classList.add('hidden');
      renderDashboardProject();
    });
  })

}
