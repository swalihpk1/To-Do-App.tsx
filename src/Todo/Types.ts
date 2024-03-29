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
    completedTasks: ITask[]
}

export enum ActionEnum {
    Add,
    Delete,
    ToggleFav,
    Update
}

export type IReducerAction = IAddAction | IDeleteAction | IToggleFavAction | IUpdateAction;

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

export interface IUpdateAction {
    type: ActionEnum.Update,
    data: ITask;
}

