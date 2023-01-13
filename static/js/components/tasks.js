export function renderTasks(e) {
  const main = document.querySelector('#content');
  axios
    .get('/api/projects')
    .then((response) => {
      const allProjects = response.data.projects;
      const id = allProjects.find((proj) => proj.projectid == e.target.id);
      return id;
    })
    .then((response) => {
      main.innerHTML = `
        <div class="tasks-heading-background-img">
        <h3>${response.project_name}</h3>
      </div>
      <button id=${response.projectid} class="add-task">Add a Task</button>
      <div id="all-tasks">
      <div class="todo">
      <h4>To Do</h4>
       
      </div>
      <div class="doing">
      <h4>Doing</h4>
      </div>
      <div class="done">
      <h4>Done</h4>
      </div>

      </div>
        `;
      axios.get(`/api/tasks`).then((res) => {
        const todo = document.querySelector('.todo');
        const doing = document.querySelector('.doing');
        const done = document.querySelector('.done');
        const allTasks = [];
        res.data.tasks.forEach((task) => {
          if (task.project_id == response.projectid) {
            allTasks.push(task);
          }
        });
        allTasks.forEach((t) => {
          if (t.status === 'To Do') {
            todo.insertAdjacentHTML(
              'beforeend',
              `
            <li>
            <div class="task-name">${t.task}</div>
            <div class="task-control">
              <i id=${t.tasksid} class="edit-task fa-solid fa-edit"></i>
              <i data-tasks-id=${t.tasksid}  action='/:id' id=${t.project_id} class="remove-task fa-solid fa-xmark"></i>
            </div>
          </li>
            `
            );
          }
          if (t.status === 'Doing') {
            doing.insertAdjacentHTML(
              'beforeend',
              `
            <li>
            <div class="task-name">${t.task}</div>
            <div class="task-control">
            <i id=${t.tasksid} class="edit-task fa-solid fa-edit"></i>
            <i data-tasks-id=${t.tasksid}  action='/:id' id=${t.project_id} class="remove-task fa-solid fa-xmark"></i>
            </div>
          </li>
            `
            );
          }
          if (t.status === 'Done') {
            done.insertAdjacentHTML(
              'beforeend',
              `
            <li>
            <div class="task-name">${t.task}</div>
            <div class="task-control">
            <i id=${t.tasksid} class="edit-task fa-solid fa-edit"></i>
            <i data-tasks-id=${t.tasksid}  action='/:id' id=${t.project_id} class="remove-task fa-solid fa-xmark"></i>
            </div>
          </li>
            `
            );
          }
        });
      });
    });
}
