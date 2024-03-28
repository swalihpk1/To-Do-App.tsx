import React, { useReducer } from 'react';
import { ITask, ITodoContexts, ITodoState } from './Types';


export const TodoContext = React.createContext<ITodoContexts>({ activeTasks: [], dispatch:()=>{} });


type Props = {
    children: React.ReactNode
}

const reducer = (state: ITodoState, action: any) => {
    return { ...state };
}

const TodoProvider = (props: Props) => {

    const tasks: ITask[] = [
        {
            id: "1",
            title: "Task 1"
        },
        {
            id: "2",
            title: "Task 2"
        },
        {
            id: "3",
            title: "Task 3"
        }
    ];
    const data = {activeTasks: tasks}
    const [state,dispatch] = useReducer(reducer,data)

    return (
        <TodoContext.Provider value={{ activeTasks: state.activeTasks,dispatch }}>
            {props.children}
        </TodoContext.Provider >
    );
};

export default TodoProvider;