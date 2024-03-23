import projects, { Project } from "./projects";
import tags, { Tag } from "./tags";

export enum PriorityEnum {
  high = "High Priority",
  medium = "Medium Priority",
  low = "Low Priority",
  none = "No Priority",
}

export interface Task {
  title: string;
  estimatedPomodoros: number;
  dueDate: number;
  priority: PriorityEnum;
  colorCode: string;
  tags: Tag[];
  project: Project;
}

export default [
  {
    id: "1",
    title: "Work on Home Screen",
    estimatedPomodoros: 6,
    dueDate: Date.now(),
    priority: PriorityEnum.high,
    colorCode: "darkslateblue",
    tags: [tags[2], tags[1], tags[0]],
    project: projects[0],
  },
  {
    id: "2",
    title: "Build Admin",
    estimatedPomodoros: 5,
    dueDate: Date.now(),
    priority: PriorityEnum.high,
    colorCode: "brown",
    tags: [tags[0], tags[1], tags[2]],
    project: projects[0],
  },
  {
    id: "3",
    title: "Create Custom Modal",
    estimatedPomodoros: 3,
    dueDate: Date.now(),
    priority: PriorityEnum.high,
    colorCode: "orange",
    tags: [tags[1], tags[2], tags[0]],
    project: projects[0],
  },
  {
    id: "4",
    title: "Create Custom Modal",
    estimatedPomodoros: 3,
    dueDate: Date.now(),
    priority: PriorityEnum.high,
    colorCode: "green",
    tags: [tags[1], tags[2], tags[0]],
    project: projects[0],
  },
];
