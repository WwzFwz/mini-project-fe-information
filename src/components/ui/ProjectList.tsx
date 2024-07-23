import { useState } from 'react';
import { ProjectCard } from '~/components/ui/ProjectCard';
import { InputField } from '~/components/ui/InputField';
import { Button } from './button';

interface Task {
  id: number;
  text: string;
//   completed: boolean;
}

interface Project {
  id: number;
  title: string;
  tasks: Task[];
}

export default function ProjectList() {
  const [projectTitle, setProjectTitle] = useState<string>('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [taskId, setTaskId] = useState<number>(0);

  const handleAddProject = () => {
    if (projectTitle.trim()) {
      const newProject: Project = { id: projects.length, title: projectTitle, tasks: [] };
      setProjects([...projects, newProject]);
      setProjectTitle('');
    }
  };

  const handleDeleteProject = (projectId: number) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  const handleAddTask = (projectId: number, taskText: string) => {
    if (taskText) {
      setProjects(
        projects.map((project) =>
          project.id === projectId
            ? {
                ...project,
                tasks: [...project.tasks, { id: taskId, text: taskText, completed: false }],
              }
            : project
        )
      );
      setTaskId(taskId + 1);
    }
  };

  const handleDeleteTask = (projectId: number, taskId: number) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? { ...project, tasks: project.tasks.filter((task) => task.id !== taskId) }
          : project
      )
    );
  };

  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-5">To-Do Lists</h1>
      <div className="w-full max-w-md mb-5">
        <InputField
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          placeholder="Add a new project"
        />
        <Button onClick={handleAddProject} className="w-full">
          Add Project
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDeleteProject={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}
