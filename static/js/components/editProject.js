import { renderDashboardProject } from './dashboardProject.js';

export function openEditModal(e) {
  axios
    .get('/api/projects')
    .then((response) => {
      const allProjects = response.data.projects;
      return allProjects.find(
        (proj) => proj.projectid == e.target.dataset.projectId
      );
    })
    .then((response) => {
      const modal = document.querySelector('.modal');
      const modalContent = document.querySelector('.modal-content');
      modal.classList.remove('hidden');
      modalContent.innerHTML = `
    <h4>Edit Project</h4>
      <form id="edit-project-form">
      <label  class="hidden" for="projectid">Name*: 
      <input type="text" name="projectid" id="projectid" value="${response.projectid}">
    </label>
            <label for="project_name">Name*: 
              <input type="text" name="project_name" id="project_name" value="${response.project_name}" required>
            </label>
            <label for="priority">Priority*: 
              <select id="priority" name="priority">
                <option value="high">High</option>
                <option value="Normal">Normal</option>
                <option value="low">Low</option>
              </select>
            </label>
            <label for="members">Assign members*: 
                <input type="text" name="members" id="members" placeholder="Separate by comma...">
            </label>
            <div class="control-buttons">
            <button type="button" id="close-modal">Close</button>
            <button id="submit-edit" type="submit">Submit</button>
            </div>
          </form> 
      `;
    });
}

export function editProject() {
  const editForm = document.querySelector('#edit-project-form');
  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(editForm);
    const data = {
      project_name: form.get('project_name'),
      priority: form.get('priority'),
      projectid: form.get('projectid'),
      // members: form.get("project_members"), // hidden temporary because need to change in data
    };
    axios.patch('/api/projects', data).then(() => {
      document.querySelector('.modal').classList.add('hidden');
      renderDashboardProject();
      console.log(data)
    });
  });
}
