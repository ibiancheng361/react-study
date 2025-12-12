import { useState,useRef  } from 'react'
import './assets/todolist.scss'
import Hello from './components/demo'
import {TodoList,TodoItem} from './components/todolist'

// import {uuid} from './common/utils';
function App() {
  const tid=useRef(0);
  const taskRef=useRef();
  const [taskList, setTaskList] = useState([])
  const [taskId,setTaskId]=useState(1);
  const handleClick = () => {
    const task = taskRef.current.value;
    if(tid.current>0){
      setTaskList(taskList=>taskList.map(item=>item.id===tid.current ? {...item,task}:item))
      tid.current=0;
    }else{
      //增加taskid,并使用新值
      setTaskId(taskId=>taskId+1);
       // setTaskList(taskList=>taskList.set(taskId, {id:taskId, task, state:0}));
      setTaskList(taskList=>[...taskList, {id:taskId, task, state:0}])
    }
    taskRef.current.value='';
  }



  //如何修改组件的属性?
  const handleEditTask = (task) => {
    tid.current=task.id;
    console.log('handleEditTask,tid:',tid.current,task);
    taskRef.current.value = task.task;
  }

  const handleDeleteTask = (task) => {
    setTaskList(taskList=>taskList.filter(item=>item.id!==task.id));
  }

  const handleCompleteTask = (task) => {
    setTaskList(taskList=>taskList.map(item=> item.id===task.id ? {...item,state:1} : item))
  }

  //<Hello className="one" msg={task} />
      
  return (
    <>
      <div className="page">
        <TodoList taskList={taskList} onEditTask={handleEditTask} onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask} />

        <div className='todolist-container'>
          <div className="todo-footer-section"> 
            <div className="task-detail">
              <input type="text" className="task" defaultValue='' ref={taskRef}  />  
            </div>
            <div className="task-action">
            <button type="button" className="add-btn" onClick={handleClick}>{tid.current>0?'更新':'添加'}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
