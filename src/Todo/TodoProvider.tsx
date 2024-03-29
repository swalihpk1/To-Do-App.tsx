import React, { useReducer } from 'react';
import { ActionEnum, IAddAction, ICompletedAction, IDeleteAction, IReducerAction, ITask, ITodoContexts, ITodoState, IToggleFavAction, IUpdateAction } from './Types';
import { clone } from './utility';


export const TodoContext = React.createContext<ITodoContexts>({ activeTasks: [], completedTasks: [], dispatch: () => { } });


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

const deleteCompletedTaskAction = (state: ITodoState, action: IDeleteAction) => {
    const completedTasks :ITask[] = clone(state.completedTasks);
    const filteredData = completedTasks.filter(task => task.id !== action.data.id);
    return filteredData;
}

const toggleFavAction = (state: ITodoState, action: IToggleFavAction) => {
    const cloneActiveTasks: ITask[] = clone(state.activeTasks);
    const index = cloneActiveTasks.findIndex(task => task.id === action.data.id)

    if (index >= 0) {
        cloneActiveTasks[index].isFav = !cloneActiveTasks[index].isFav
    }
    return cloneActiveTasks
}

const UpdateTaskAction = (state: ITodoState, action: IUpdateAction) => {
    const cloneActiveTasks: ITask[] = clone(state.activeTasks);
    const index = cloneActiveTasks.findIndex(task => task.id === action.data.id)
    if (index >= 0) {
        cloneActiveTasks[index] = action.data

    }
    return cloneActiveTasks
}


const CompleteTaskAction = (state: ITodoState, action: ICompletedAction) => {
    const activeTasks: ITask[] = clone(state.activeTasks);
    const completedTaskData = activeTasks.find(task => task.id == action.data.id);
    const filteredData = activeTasks.filter((task) => task.id !== action.data.id);
    const completedTask = completedTaskData ? [completedTaskData, ...state.completedTasks] : [...state.completedTasks]
    return {
        activeTasks: filteredData,
        completedTask:completedTask
    };
}


const reducer = (state: ITodoState, action: IReducerAction) => {

    switch (action.type) {
        case ActionEnum.Add:
            return { ...state, activeTasks: addTaskAction(state, action) };

        case ActionEnum.Delete:
            return { ...state, activeTasks: deleteTaskAction(state, action) };
        
        case ActionEnum.DeleteCompletedTask:
            return { ...state, CompleteTaskAction: deleteCompletedTaskAction(state, action) };

        case ActionEnum.ToggleFav:
            return { ...state, activeTasks: toggleFavAction(state, action) }

        case ActionEnum.Update:
            return { ...state, activeTasks: UpdateTaskAction(state, action) }

        case ActionEnum.Completed:
            const data = CompleteTaskAction(state, action)
            console.log("22",data.completedTask)
            return { ...state, activeTasks: data.activeTasks, completedTasks: data.completedTask }
    }
    return { ...state };
}

const TodoProvider = (props: Props) => {

    const tasks: ITask[] = [
        {
            id: "1",
            task: "Task 1",
            isFav: false
        },
        {
            id: "2",
            task: "Task 2",
            isFav: true
        },
    ];
    const data: ITodoState = { activeTasks: tasks, completedTasks: [] }
    const [state, dispatch] = useReducer(reducer, data)

    return (
        <TodoContext.Provider value={{ activeTasks: state.activeTasks, completedTasks: state.completedTasks, dispatch }}>
            {props.children}
        </TodoContext.Provider >
    );
};

export default TodoProvider;