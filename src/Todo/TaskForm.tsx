import { FontIcon, MessageBarType } from '@fluentui/react';
import React, { useContext, useEffect, useState } from 'react';
import HomeStyle from './Home.style';
import useInputs from './useInputs';
import { TodoContext } from './TodoProvider';
import { ActionEnum, ITask } from './Types';

type Props = {
    editTaskId: string | null
}

const TaskForm = ({ editTaskId }: Props) => {

    const { activeTasks, dispatch } = useContext(TodoContext)

    const task = useInputs("");

    useEffect(() => {
        if (editTaskId) {
            const taskData = activeTasks.find((task => task.id === editTaskId));
            task.set(taskData?.task || "");
        }
    }, [editTaskId])

    const [inputFocused, setInputFocused] = useState(false);
    const [showMessage, setShowMessage] = useState<{ type: MessageBarType, message: string }>({ type: MessageBarType.success, message: "" })

    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };

    const addTaskAction = () => {
        const data: ITask = { id: "", task: task.value, isFav: false }
        dispatch({ type: ActionEnum.Add, data })
        setShowMessage({ type: MessageBarType.success, message: "Task Added" });
    };

    const updateTaskAction = () => {
        const taskData = activeTasks.find(task => task.id === editTaskId);
        if (taskData) {
            const data: ITask = { id: taskData.id, task: task.value, isFav: taskData.isFav }
            dispatch({ type: ActionEnum.Update, data })
            setShowMessage({ type: MessageBarType.success, message: "Task Updated" });
            task.set("")
        } else {
            setShowMessage({ type: MessageBarType.success, message: "Erroe while updating" });
        }
    }


    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        editTaskId ? updateTaskAction() : addTaskAction();

    }

    useEffect(() => {
        if (showMessage.message) {
            setTimeout(() => {
                setShowMessage({ type: MessageBarType.success, message: "" });
            }, 1400);
        }
    }, [showMessage.message])


    return (
        <form onSubmit={onFormSubmit} className={`${HomeStyle.main2} row mt-3`}>
            <div className={`col-md-10`}>
                <input
                    type="text"
                    placeholder="Write your next task"
                    className={`${HomeStyle.inputTask} ${inputFocused ? HomeStyle.inputFocused : ""}`}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    {...task}
                    required
                />
            </div>
            <div className={`col-md-2 `}>
                <button className={`${HomeStyle.addBtn}`} title="Add Task" type='submit'>

                    <b className={`${HomeStyle.btnIcon}`}>+</b>
                </button>
            </div>
            {showMessage.message && (
                <p className={`${HomeStyle.messageBar}`}><i>{showMessage.message} <FontIcon className={`${HomeStyle.messageIcon}`} iconName="BoxCheckmarkSolid" /></i></p>
            )}
        </form>
    );
};

export default TaskForm;