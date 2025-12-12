

function TodoList({taskList,...params}){
    const todoItems = taskList.map(item=><TodoItem key={item.id} item={item} {...params}/>);

    return (
        <div className='todolist-container'>
            <div className="todo-header-section"> 
                <div className="task-num">任务序号</div>
                <div className="task-detail">任务信息</div>
                <div className="task-action">操作</div>
            </div>
            <div className="todo-body-section"> 
                {todoItems}
            </div>
      </div>
    );
}


function TodoItem(params){
    const item = params.item;

    const handleDeleteTask = ()=>{
        params.onDeleteTask?.(item);
    }

    const handleEditTask = ()=>{
        params.onEditTask?.(item);
    }

    const handleCompleteTask = ()=>{
        params.onCompleteTask?.(item);
    }

    return (
        <div className="task-row" > 
            <div className="task-num">{item.id}</div>
            <div className='task-detail'>{item.task}</div>
            <div className={`task-state state${item.state}`}>{item.state==0?'进行中':'已完成'}</div>
            <div className='task-action'>
            <button type="button" className="add-btn" disabled={item.state==1} onClick={handleEditTask}>编辑</button>
            <button type="button" className="add-btn" disabled={item.state==1} onClick={handleCompleteTask}>完成</button>
            <button type="button" className="add-btn" onClick={handleDeleteTask}>删除</button>
            </div>
        </div>
    )
}
/*
 <div className="task-row" > 
            <div className='task-detail'>

            </div>
            <div className='task-action'>
            <button type="button" className="add-btn" onClick={handleClick}>编辑</button>
            <button type="button" className="add-btn" onClick={handleUpdateTaskState}>完成</button>
            <button type="button" className="add-btn" onClick={handleUpdateTaskState}>删除</button>
            </div>
        </div>
*/
export {TodoList,TodoItem}