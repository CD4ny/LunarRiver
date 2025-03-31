export interface ITask {
  id: string;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  dueDate: string | null; // Puede ser null si no hay fecha límite
}
