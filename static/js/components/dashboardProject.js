export function renderDashboardProject() {
  const main = document.querySelector('#content');
  main.innerHTML = `
    <div class="heading-background-img">
    <h3>Current Projects</h3>
    </div>
    <div class="search-bar">
    <form action="#" class="search">
      <input
        type="text"
        class="search-box"
        placeholder='Search a project...' />
      <button type="submit" class="search-button">
        <i class="fa fa-search"></i>
      </button>
    </form>
  </div>
    <div class="all-projects">
    </div>
    <button class="add-project">Add new project</button>
    `;
  axios.get(`/api/session`).then((response) => {
    const sessionUserId = response.data.session[0].sess.user.id;
    axios.get('/api/projects').then((response) => {
      const allProjects = response.data.projects;
      allProjects.forEach((proj) => {
        if (proj.user_id == sessionUserId) {
          document.querySelector('.all-projects').insertAdjacentHTML(
            'beforeend',
            `
            <div class="card">
            <div class="heading">${proj.project_name}</div>
            <div class="priority">Priority: <span class="${proj.priority}">${proj.priority}</span></div>
            <div class="control-buttons">
            <i data-project-id="${proj.projectid}" id="edit-project" class="fa fa-edit"></i>
            <i data-project-id="${proj.projectid}" id="delete-project" class="fa fa-check"></i>
            </div>
          </div>
            `
          );
        }
      });
    });
  });
}
