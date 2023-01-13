export function addTaskModal(e) {
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');
  modal.classList.remove('hidden');
  modalContent.innerHTML = `
    <h4>Add a task</h4>
      <form id="add-task-form">
      <label  class="hidden" for="project_id">project_id*: 
      <input type="text" name="project_id" id="project_id" value="${e.target.id}">
    </label>
            <label for="task">Task Description*: 
              <textarea name="task" id="task" cols="40" 
              rows="5"  required></textarea>
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
            <button id="${e.target.id}" class="submit-add-task" type="submit">Submit</button>
            </div>
          </form> 
      `;
}

export function addTask() {
  const addTask = document.querySelector('#add-task-form');
  addTask.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(addTask);
    const data = {
      project_id: form.get('project_id'),
      task: form.get('task'),
      status: form.get('status'),
    };
    axios.post('/api/tasks', data).then((e) => {
      document.querySelector('.modal').classList.add('hidden');
    });
  });
}
