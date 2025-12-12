import { useState,useRef  } from 'react'
import './assets/todolist.scss'
import Hello from './components/demo'
import {TodoList,TodoItem} from './components/todolist'

// import {uuid} from './common/utils';
function App() {
  const tid = useRef(0);
  const taskRef = useRef();
  const [taskList, setTaskList] = useState([]);
  const [taskId, setTaskId] = useState(1);
  const [editId, setEditId] = useState(0);

  const handleClick = () => {
    const value = taskRef.current?.value.trim();
    if (!value) return;
    console.log();
    if (editId>0) {
      setTaskList(prev =>
        prev.map(item =>
          item.id === editId ? { ...item, task: value } : item
        )
      );
      setEditId(0);
    } else {
      setTaskList(prev => [...prev, { id: taskId, task: value, state: 0 }]);
      setTaskId(prev => prev + 1);
    }

    taskRef.current.value = ''; // 清空输入框
  };

  const handleEditTask = (task) => {
    setEditId(task.id);
    taskRef.current.value = task.task;
    taskRef.current.focus();
  };

  const handleDeleteTask = (task) => {
    setTaskList(prev => prev.filter(item => item.id !== task.id));
  };

  const handleCompleteTask = (task) => {
    setTaskList(prev =>
      prev.map(item =>
        item.id === task.id ? { ...item, state: 1 } : item
      )
    );
  };

  return (
    <>
      <div className="page">
        <TodoList 
          taskList={taskList} 
          onEditTask={handleEditTask} 
          onCompleteTask={handleCompleteTask} 
          onDeleteTask={handleDeleteTask} 
        />

        <div className='todolist-container'>
          <div className="todo-footer-section"> 
            <div className="task-detail">
              <input 
                type="text" 
                className="task" 
                ref={taskRef} 
                // 非受控，无需 value/onBlur
              />  
            </div>
            <div className="task-action">
              <button 
                type="button" 
                className="add-btn" 
                onClick={handleClick}
              >
                {editId > 0 ? '更新' : '添加'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
