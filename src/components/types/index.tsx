export interface IVideos {
  nome: string;
  titulo: string;
  link: string;
  categoria: string;
}
export interface ICategoria {
  nome: string;
  titulo: string;
}
export interface LinkProps {
  id: string;
  name: string;
  mode: "link" | "render";
  render?: JSX.Element;
  active: boolean;
  subItems?: LinkProps[];
}
export interface MyProjects {
  src: string;
  text: string;
  url: string;
}
