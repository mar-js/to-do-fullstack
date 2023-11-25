export interface IToDo {
  id: number;
  toDo: string;
}

export interface IToDoModel {
  youWillDo: IToDo[];
  handleAddToDo: (toDo: IToDo) => void;
}
