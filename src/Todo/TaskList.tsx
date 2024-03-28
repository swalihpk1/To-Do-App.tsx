import React, { useContext } from 'react';
import HomeStyle from './Home.style';
import { Checkbox, Stack } from '@fluentui/react';
import * as Types from './Types';
import { TodoContext } from './TodoProvider';

const TaskList = () => {

    const { activeTasks } = useContext(TodoContext)

    const onRenderCell = (task: Types.ITask) => {
        return <div className={`${HomeStyle.tasks} row`} key={task.id}>
            <div className="col-md-6 d-flex align-items-center ">
                <Checkbox className={`${HomeStyle.checkbox}`} />
                <h4 className={`${HomeStyle.taskName}`}>{task.title}</h4>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end ">
                <button className={`${HomeStyle.actionBtn}`}><i className={`${HomeStyle.icons} fi-rr-comment-info `}></i></button>
                <button className={`${HomeStyle.actionBtn}`}><i className={`${HomeStyle.icons} fi fi-rr-edit`}></i></button>
                <button className={`${HomeStyle.actionBtn}`}><i className={`${HomeStyle.icons} fi fi-rr-trash `}></i></button>
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
