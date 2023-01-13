export function deleteTask(e) {
    e.preventDefault()
    const data = e.target.dataset.tasksId;
    axios.delete(`/api/tasks/${data}`).then(() => {
      document.querySelector('.modal').classList.add('hidden');
    });
  }
  