import type { IconType } from "react-icons";

export type Button = {
  icon: IconType;
  link: string;
};

export type Tool = {
  icon: string;
  alt: string;
};

export type Projects = {
  image: string;
  title: string;
  description: string;
  button: Button[];
  tools: Tool[];
};
