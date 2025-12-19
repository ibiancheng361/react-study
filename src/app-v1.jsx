import { useState,useRef  } from 'react'
import './assets/todolist.scss'
import './app.scss'

//import Hello from './components/demo'
import {TodoList} from '@/components/todolist'
// App11.js
import { toast,ToastContainer } from 'react-toastify';

// import {uuid} from './common/utils';
function App() {
  const tid = useRef(0);
  const taskRef = useRef();
  const [taskList, setTaskList] = useState([]);
  const [taskId, setTaskId] = useState(1);
  const [editId, setEditId] = useState(0);


  const handleClick = () => {
    const task = taskRef.current?.value.trim();
    if (task.length==0){
      toast.warning('任务内容不可为空！');
      return;
    }

    if (editId>0) {
      setTaskList(taskList =>
        taskList.map(item =>
          item.id === editId ? { ...item, task } : item
        )
      );
      setEditId(0);
    } else {
      setTaskList(taskList => [...taskList, { id: taskId, task, state: 0 }]);
      setTaskId(taskId => taskId + 1);
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
      <ToastContainer position="top-center" theme="dark" autoClose={3500} newestOnTop={false} closeButton ={false} closeOnClick={false} hideProgressBar={true} pauseOnFocusLoss draggable={false}/>
    </>
  );
}

export default App
