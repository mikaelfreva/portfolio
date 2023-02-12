export interface IUrl {
  url: string;
}
export interface IColor {
  hex: string;
}
export interface IText {
  text: string;
  name: string;
}
export interface IStacks {
  id:string;
  color:IColor;
  name: string;
  url: string;
  image: IUrl;
}

export interface ISkills {
  id: string;
  skill: string;
  url: string;
  type: string | null;
  image: IUrl;
}
export interface IServices {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: IUrl;
  urlBrut: string;
}
/* export interface IJobs {
  id: string;
  company: string;
  designation: string;
  companyLinkedin: string;
  companyUrl: string;
  from: string;
  to: string;
  logo: IUrl;
} */
export interface IRealisations {
  id: string;
  name: string;
  description: string;
  demoLink: string;
  githubLink: string;
  realisationTypes: Array<IText>;
  image: IUrl;
}
export interface IProjects {
  id: string;
  title: string;
  description: string;
  demo: string;
  sourceCode: string;
  slug: string;
  projectTypes: Array<IText>;
  image: IUrl;
}

export interface IProjectTypes {
  name: string;
}
export type ThemeToggle = "light" | "dark";

export enum Months {
  Jan = 1,
  Feb = 2,
  Mar = 3,
  Apr = 4,
  May = 5,
  Jun = 6,
  Jul = 7,
  Aug = 8,
  Sep = 9,
  Oct = 10,
  Nov = 11,
  Dec = 12,
}
