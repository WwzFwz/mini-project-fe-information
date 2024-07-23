import { Checkbox } from './checkbox';
import { Button } from './button';


interface Task {
  id: number;
  text: string;
//   completed: boolean;   feature unavailable
}

interface TaskItemProps {
  projectId: number;
  task: Task;
  onDeleteTask: (projectId: number, taskId: number) => void;
}

export function TaskItem({
  projectId,
  task,
  onDeleteTask,
}: TaskItemProps) {
  return (
    <li className={`bg-white p-4 mb-3 rounded shadow-sm flex items-center border border-gray-200 $`}>
      <Checkbox
        className="mr-3"
      />
      <span className= "flex-1" >{task.text}</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onDeleteTask(projectId, task.id)}
        className="ml-3 text-red-500"
      >
        Delete
      </Button>
    </li>
  );
}

