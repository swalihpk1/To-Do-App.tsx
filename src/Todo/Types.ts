import { Dispatch } from "react";

export enum PivotKeyEnum{
    Tasks = "Tasks",
    Completed = "Completed",
}

export interface ITask {
    id: string,
    title: string,
}

export interface ITodoContexts {
    activeTasks: ITask[]
    dispatch:Dispatch<any>
}

export interface ITodoState {
    activeTasks: ITask[]
}
