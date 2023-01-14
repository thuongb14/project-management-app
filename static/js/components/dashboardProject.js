export function renderDashboardProject() {
  const main = document.querySelector('#content');
  main.innerHTML = `
    <div class="heading-background-img">
    <h3>Current Projects</h3>
        
    </div>
    <div class="search-bar">
    <button id="add-project">Add new project</button>
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
            <div id=${proj.projectid} class="heading">${proj.project_name}</div>
            <div class="priority">Priority: <span class="${proj.priority}">${proj.priority}</span></div>
            <div class="control-buttons">
            <i data-project-id="${proj.projectid}" id="edit-project" class="fa fa-edit"><span class="tooltipEdit">Edit Project</span></i>
            <i data-project-id="${proj.projectid}" id="delete-project" class="fa fa-check"><span class="tooltipDelete">Delete Project</span></i>
            </div>
          </div>
            `
          );
        }
      });
    });
  });
}

export function searchBar(e) {
  const search = document.querySelector('.search');
  search.addEventListener('submit', (e) => {
    const allCards = document.querySelectorAll('.card');
    let input = document.querySelector('.search-box').value.toLowerCase();
    console.log(input);
    allCards.forEach((card) => {
      if (card.firstElementChild.textContent.toLowerCase().includes(input)) {
        card.style = 'display: ';
      } else if (input == '') {
        card.style = 'display: ';
      } else {
        card.style = 'display: none';
      }
      e.preventDefault();
    });
  });
}
