import { IDescription } from "./description.interface";

export interface IExperience {
  company: string;
  description: IDescription;
  period: string;
  position: number;
  role: string;
  technologies: string[];
}
