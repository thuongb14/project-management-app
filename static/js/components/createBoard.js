import { renderDashboardProject } from './dashboardProject.js';

export function openProjectModal(e) {

      const modal = document.querySelector('.modal');
      const modalContent = document.querySelector('.modal-content');
      modal.classList.remove('hidden');
      modalContent.innerHTML = `
    <h4>Add Project Board</h4>
      <form id="add-project-form">
            <label for="project_name">Name*: 
              <input type="text" name="project_name" id="project_name" required>
            </label>
            <label for="priority">Priority*: 
              <select id="priority" name="priority">
                <option value="high">High</option>
                <option value="Normal">Normal</option>
                <option value="low">Low</option>
              </select>
            </label>
            <div class="control-buttons">
            <button type="button" id="close-modal">Close</button>
            <button id="submit-project" type="submit">Submit</button>
            </div>
          </form> 
      `;
    ;
}

export function addProjectBoard(e) {
    const addProject = document.querySelector('#add-project-form');
    // const sessionUserId = response.data.session[0].sess.user.id;
    addProject.addEventListener('submit',(e) =>{
        e.preventDefault();
        
        axios.get(`/api/session`).then((response) => {
          const sessionUserId = response.data.session[0].sess.user.id;
          // console.log(sessionUserId)
          const form = new FormData(addProject);
          const data = {
          project_name: form.get('project_name'),
          priority: form.get('priority'),
          userId: sessionUserId
          // members: form.get("project_members"), // hidden temporary because need to change in data
          };
          // console.log(data)
          axios.post('/api/projects', data).then((response) => {
            document.querySelector('.modal').classList.add('hidden');
            renderDashboardProject();
          });
        })
  ;
    })
    
}