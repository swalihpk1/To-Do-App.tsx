import { Dispatch } from "react";

export enum PivotKeyEnum {
    Tasks = "Tasks",
    Completed = "Completed",
}

export interface ITask {
    id: string,
    task: string,
    isFav: boolean
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
    Delete,
    ToggleFav
}

export type IReducerAction = IAddAction | IDeleteAction | IToggleFavAction; 

export interface IAddAction {
    type: ActionEnum.Add,
    data: ITask;
}

export interface IDeleteAction {
    type: ActionEnum.Delete,
    data: { id: string }
}

export interface IToggleFavAction {
    type: ActionEnum.ToggleFav,
    data: { id: string }
} 