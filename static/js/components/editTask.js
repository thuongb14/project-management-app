export function openEditTaskModal(e) {
  axios
    .get('/api/tasks')
    .then((response) => {
      const allTasks = response.data.tasks;
      return allTasks.find(
        (task) => task.tasksid == e.target.id
      );
    })
    .then((response) => {
        console.log(response)
      const modal = document.querySelector('.modal');
      const modalContent = document.querySelector('.modal-content');
      modal.classList.remove('hidden');
      modalContent.innerHTML = `
      <h4>Edit task</h4>
      <form id="edit-task-form">
      <label  class="hidden" for="tasksid">taskid*: 
            <input type="text" name="tasksid" id="tasksid" value="${response.tasksid}">
        </label>
            <label for="task">Task Description*: 
              <textarea name="task" id="task" cols="40" 
              rows="5" required>${response.task}</textarea>
            </label>
            <label for="status">Status*: 
              <select id="status" name="status">
                <option value="To Do">To Do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
            </label>
            <div class="control-buttons">
            <button type="button" id="close-modal">Close</button>
            <button id="${response.project_id}" class="submit-edit-task" type="submit">Submit</button>
            </div>
          </form> 
      `;
    });
}

export function editTask() {
  const editTaskForm = document.querySelector('#edit-task-form');
  editTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(editTaskForm);
    const data = {
    tasksid: form.get('tasksid'),
      task: form.get('task'),
      status: form.get('status')
    };
    axios.patch('/api/tasks', data).then(() => {
      document.querySelector('.modal').classList.add('hidden');
    });
  });
}
