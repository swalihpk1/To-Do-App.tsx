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
    completedTasks: ITask[]
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
    Update,
    Completed,
    DeleteCompletedTask
}

export type IReducerAction = IAddAction | IDeleteAction | IToggleFavAction | IUpdateAction | ICompletedAction

export interface IAddAction {
    type: ActionEnum.Add,
    data: ITask;
}

export interface IDeleteAction {
    type: ActionEnum.Delete | ActionEnum.DeleteCompletedTask;
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

export interface ICompletedAction{
    type: ActionEnum.Completed,
    data:{id:string}
}

