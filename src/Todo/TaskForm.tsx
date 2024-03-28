import { MessageBar, MessageBarType, Stack } from '@fluentui/react';
import React, { useEffect, useState } from 'react';
import HomeStyle from './Home.style';
import useInputs from './useInputs';

const TaskForm = () => {
    const [inputFocused, setInputFocused] = useState(true);
    const [showMessage, setShowMessage] = useState<{ type: MessageBarType, message: string }>({ type: MessageBarType.success, message: "" })

    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };

    const task = useInputs("");

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setShowMessage({ type: MessageBarType.success, message: "Task Added" });
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
                <MessageBar messageBarType={MessageBarType.success} className={`${HomeStyle.messageBar}`}>Task Added</MessageBar>
            )}
        </form>
    );
};

export default TaskForm;