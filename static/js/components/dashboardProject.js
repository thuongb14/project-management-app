export function renderDashboardProject() {
  const main = document.querySelector('#content');
  main.innerHTML = `
    <h3>Current Projects</h3>
    <div class="all-projects">
    </div>
    `;
  axios.get(`/api/session`).then((response) => {
    const sessionUserId = response.data.session[0].sess.user.id;
    axios.get('/api/projects').then((response) => {
      const allProjects = response.data.projects;
      allProjects.forEach((proj) => {
        if (proj.user_id == sessionUserId) {
          console.log(proj);
          console.log(sessionUserId);
          document.querySelector('.all-projects').insertAdjacentHTML(
            'beforeend',
            `
            <div class="card">
            <div class="heading">${proj.project_name}</div>
            <div class="priority">Priority: ${proj.priority}h</div>
            <div class="control-buttons">
              <button class="edit-project">Edit</button>
              <button class="delete-project">Delete</button>
            </div>
          </div>
            `
          );
        }
      });
    });
  });
}
