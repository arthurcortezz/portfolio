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
export interface ILinkProps {
  id: string;
  name: string;
  mode: "link" | "render";
  render?: JSX.Element;
  active: boolean;
  subItems?: ILinkProps[];
}
