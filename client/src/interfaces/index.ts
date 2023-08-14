import { PropsWithChildren } from 'react'

export interface IToDo {
  id: number;
  toDo: string;
  handleDeleteToDo: (id: IToDo['id']) => void;
}

export interface IToDoModel {
  youWillDo: IToDo[];
  handleAddToDo: (toDo: IToDo) => void;
  handleDeleteToDo: (id: IToDo['id']) => void;
  handleDeleteFull: () => void;
  getToDo: (id: IToDo['id']) => IToDo | undefined;
  getTitleToDo: (id: IToDo['id']) => string;
}

export interface IDeleteFull {
  handleDeleteFull: () => void;
}

export interface IToDoDescription {
  title: string;
}

export interface IToDoButton extends PropsWithChildren {
  url?: string;
  classN: string;
}
