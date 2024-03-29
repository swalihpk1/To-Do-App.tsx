import { Dispatch } from "react";

export enum PivotKeyEnum {
    Tasks = "Tasks",
    Completed = "Completed",
}

export interface ITask {
    id: string,
    task: string,
}

export interface ITodoContexts {
    activeTasks: ITask[]
    dispatch: Dispatch<any>
}

export interface ITodoState {
    activeTasks: ITask[]
}

export enum ActionEnum {
    Add,
    Delete
}

export type IReducerAction = IAddAction | IDeleteAction

export interface IAddAction {
    type: ActionEnum.Add,
    data: ITask
}

export interface IDeleteAction {
    type: ActionEnum.Delete,
    data:{id : string}
}
