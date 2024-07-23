import { TaskItem } from './TaskItem';
import { InputField } from './InputField';
import { Button } from './button';
import { useState } from 'react';



interface Task {
  id: number;
  text: string;
}

interface Project {
  id: number;
  title: string;
  tasks: Task[];
}

interface ProjectCardProps {
  project: Project;
  onDeleteProject: (projectId: number) => void;
  onAddTask: (projectId: number, taskText: string) => void;
  onDeleteTask: (projectId: number, taskId: number) => void;
}

export function ProjectCard({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
}: ProjectCardProps) {
  const [taskInput, setTaskInput] = useState<string>('');
  const handleAddTask = () => {
    if (taskInput.trim() === '') return; 
    onAddTask(project.id, taskInput);
    setTaskInput(''); 
  };


  return (
    <div className="bg-white p-5 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onDeleteProject(project.id)}
          className="text-red-500"
        >
          Delete Project
        </Button>
      </div>
      <InputField
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={handleAddTask} className="w-full mb-4">
        Add Task
      </Button>
      <ul className="mt-5">
        {project.tasks.map((task) => (
          <TaskItem
            key={task.id}
            projectId={project.id}
            task={task}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

