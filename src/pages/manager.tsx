import {
  CommentPage,
  Container,
  GitPage,
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
      id: "git",
      name: "GitHub",
      render: <GitPage />,
      active: true,
      mode: "link",
    },
    {
      id: "projects",
      name: "Projects",
      render: <></>,
      active: true,
      mode: "link",
      subItems: [
        {
          id: "video_player",
          name: "Video Player",
          render: <VideoPage />,
          active: true,
          mode: "link",
        },
      ],
    },
    {
      id: "about_me",
      name: "About Me",
      render: <PersonalInfoPage />,
      active: true,
      mode: "link",
    },
    {
      id: "leave_a_comment",
      name: "Leave a Comment",
      render: <CommentPage />,
      active: true,
      mode: "link",
    },
  ];
  return <Container linkItems={LinkItems} />;
}
