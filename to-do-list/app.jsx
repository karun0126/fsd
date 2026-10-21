const { useState } = React;

function App() {
  const [tasks, setTasks] = useState([{ id: 1, text: 'task1' }]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState('');

  function addTask(event) {
    event.preventDefault();
    const text = newTask.trim();
    if (!text) return;
    setTasks((currentTasks) => [...currentTasks, { id: Date.now(), text }]);
    setNewTask('');
  }

  function saveTask(event, id) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, text } : task))
    );
    setEditingId(null);
  }

  return (
    <>
      <form onSubmit={addTask}>
        <input
          aria-label="New task"
          placeholder="Enter a task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingId === task.id ? (
              <form onSubmit={(event) => saveTask(event, task.id)}>
              <input
                aria-label="Edit task"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                autoFocus
              />
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditingId(null)}>Cancel</button>
            </form>
            ) : (
              <>
                <span>{task.text}</span>{' '}
                <button
                  type="button"
                  onClick={() => {
                    setDraft(task.text);
                    setEditingId(task.id);
                  }}
                >
                  Edit
                </button>{' '}
                <button
                  type="button"
                  onClick={() =>
                    setTasks((currentTasks) =>
                      currentTasks.filter((currentTask) => currentTask.id !== task.id)
                    )
                  }
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
