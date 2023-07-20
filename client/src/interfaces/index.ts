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
}

export interface IDeleteFull {
  handleDeleteFull: () => void;
}
