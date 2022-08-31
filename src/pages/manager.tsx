import { CommentPage, Container, GitPage, HomePage, PersonalInfoPage, ProjectsPage, VideoPage } from "../components";
import { ILinkProps } from "../components/types";

interface Props {}
export default function Manager({}: Props) {
  let LinkItems: Array<ILinkProps> = [
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
      render: <ProjectsPage />,
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
      id: "personal_info",
      name: "Personal Info",
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
