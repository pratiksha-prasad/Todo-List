import {useState} from "react";

export default function TaskForm({onAdd}) {
  const [taskName,setTaskName] = useState('');
  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" padding-5px
             value={taskName}
             onChange={ev => setTaskName(ev.target.value)}
             placeholder="Today's task..."/>
      <button>+</button>
    </form>
  );
}