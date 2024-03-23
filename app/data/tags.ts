export interface Tag {
  id: string;
  title: string;
  colorCode: string;
}

const tags: Tag[] = [
  { id: "1", title: "Research", colorCode: "green" },
  { id: "2", title: "Work", colorCode: "brown" },
  { id: "3", title: "Productivity", colorCode: "darkslateblue" },
  { id: "4", title: "Design", colorCode: "rebeccapurple" },
];

export default tags;
