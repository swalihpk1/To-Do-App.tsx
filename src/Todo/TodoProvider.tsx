import React, { useReducer } from 'react';
import { ActionEnum, IAddAction, IDeleteAction, IReducerAction, ITask, ITodoContexts, ITodoState } from './Types';
import { clone } from './utility';


export const TodoContext = React.createContext<ITodoContexts>({ activeTasks: [], dispatch: () => { } });


type Props = {
    children: React.ReactNode
}

const addTaskAction = (state: ITodoState, action: IAddAction) => {
    const { data } = action;
    data.id = new Date().toJSON();
    return [data, ...state.activeTasks]
}

const deleteTaskAction = (state: ITodoState, action: IDeleteAction) => {
    const activeTasks: ITask[] = clone(state.activeTasks);
    const filteredData = activeTasks.filter(task => task.id !== action.data.id);
    return filteredData;
}


const reducer = (state: ITodoState, action: IReducerAction) => {

    switch (action.type) {
        case ActionEnum.Add:
            const newData = { ...action.data, id: new Date().toJSON() };
            return { ...state, activeTasks:addTaskAction(state,action)};

        case ActionEnum.Delete:
            return { ...state, activeTasks: deleteTaskAction(state,action) };
    }
    return { ...state };
}

const TodoProvider = (props: Props) => {

    const tasks: ITask[] = [
        {
            id: "1",
            task: "Task 1"
        },
        {
            id: "2",
            task: "Task 2"
        },
        {
            id: "3",
            task: "Task 3"
        }
    ];
    const data = { activeTasks: tasks }
    const [state, dispatch] = useReducer(reducer, data)

    return (
        <TodoContext.Provider value={{ activeTasks: state.activeTasks, dispatch }}>
            {props.children}
        </TodoContext.Provider >
    );
};

export default TodoProvider;