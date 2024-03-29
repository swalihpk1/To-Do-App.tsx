import { ActionButton, Checkbox, FontIcon, Stack } from '@fluentui/react';
import React, { useContext } from 'react';
import HomeStyle from './Home.style';
import { TodoContext } from './TodoProvider';
import { ActionEnum, ITask } from './Types';
import TodoString from './String.json'

const CompletedTaskList = () => {

    const { completedTasks, dispatch } = useContext(TodoContext)

    const onTaskDelete = (id: string) => {
        if(window.confirm(TodoString.deleteConfirm))
        dispatch({ type: ActionEnum.DeleteCompletedTask,data : {id}})
    }

    const onRenderCell = (task: ITask) => {
        return <div className={`${HomeStyle.tasks} row`} key={task.id}>
            <div className="col-md-6 d-flex align-items-center ">
                <Checkbox disabled />
                <h4 className={`${HomeStyle.taskName}`}><s>{task.task}</s></h4>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end ">
                <button title='Favourite' className={`${HomeStyle.actionBtn}`}><FontIcon className={`${HomeStyle.icons}`} iconName={task.isFav ? "FavoriteStarFill" : "FavoriteStar"} /></button>
                <button title='Delete' onClick={() => onTaskDelete(task.id)} className={`${HomeStyle.actionBtn}`}><i className={`${HomeStyle.icons} fi fi-rr-trash `}></i></button>
            </div>
        </div>
    }
    return (
        <Stack className={`${HomeStyle.main3} mt-5`} >
            {completedTasks.length ? completedTasks.map(onRenderCell) : <h6 className='text-secondary'>No Completed tasks to show</h6>}
        </Stack>
    );
};

export default CompletedTaskList;