import {
  CommentPage,
  Container,
  LoginPage,
  HomePage,
  PersonalInfoPage,
  ProjectsPage,
  VideoPage,
} from "../components";
import { LinkProps } from "../components/types";

export default function Manager() {
  let LinkItems: Array<LinkProps> = [
    {
      id: "home",
      name: "Home",
      render: <HomePage />,
      active: true,
      mode: "link",
    },
    {
      id: "leave_a_comment",
      name: "Comment",
      render: <CommentPage />,
      active: true,
      mode: "link",
    },
    {
      id: "projects",
      name: "Projects",
      render: <ProjectsPage />,
      active: true,
      mode: "link",
    },
    // {
    //   id: "about_me",
    //   name: "About Me",
    //   render: <PersonalInfoPage />,
    //   active: true,
    //   mode: "link",
    // },
    {
      id: "login",
      name: "Login",
      render: <LoginPage />,
      active: true,
      mode: "link",
    },
  ];
  return <Container linkItems={LinkItems} />;
}
