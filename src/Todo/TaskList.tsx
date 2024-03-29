import React, { useContext } from 'react';
import HomeStyle from './Home.style';
import { FontIcon, Stack } from '@fluentui/react';
import * as Types from './Types';
import { TodoContext } from './TodoProvider';
import TodoString from './String.json'

type Props = {
    setEditTask: (taskId: string) => void
}

const TaskList = ({ setEditTask }: Props) => {

    const { activeTasks, dispatch } = useContext(TodoContext)

    const onTaskDelete = (id: string) => {
        if (window.confirm(TodoString.deleteConfirm)) {
            dispatch({ type: Types.ActionEnum.Delete, data: { id } })
        }
    }

    const onFavorite = (id: string) => {
        dispatch({ type: Types.ActionEnum.ToggleFav, data: { id } })
    }

    // const onEditTaskClick = (id: string) => {
    //     dispatch({ type: Types.ActionEnum.editTask, data: { id } })
    // }

    const onRenderCell = (task: Types.ITask) => {
        return <div className={`${HomeStyle.tasks} row`} key={task.id}>
            <div className="col-md-6 d-flex align-items-center ">
                <input type="checkbox" className={`${HomeStyle.checkbox}`} />
                <h4 className={`${HomeStyle.taskName}`}>{task.task}</h4>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end ">
                <button title='Favourite' onClick={() => onFavorite(task.id)} className={`${HomeStyle.actionBtn}`}><FontIcon className={`${HomeStyle.icons}`} iconName={task.isFav ? "FavoriteStarFill" : "FavoriteStar"} /></button>
                <button title='Edit' onClick={() => setEditTask(task.id)} className={`${HomeStyle.actionBtn}`}><i className={`${HomeStyle.icons} fi fi-rr-edit`}></i></button>
                <button title='Delete' onClick={() => onTaskDelete(task.id)} className={`${HomeStyle.actionBtn}`}><i className={`${HomeStyle.icons} fi fi-rr-trash `}></i></button>
            </div>
        </div>
    }

    return (
        <Stack className={`${HomeStyle.main3} mt-5`} >
            {activeTasks.map(onRenderCell)}
        </Stack>
    );
};

export default TaskList;
