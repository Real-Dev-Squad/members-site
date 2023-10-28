import { UserType } from "../../src/components/MembersSectionNew/types/MembersSection.type";

type PictureType = {
  publicId: string;
  url: string;
};

type RolesType = {
  archived: boolean;
  member: boolean;
};

type UsersResponseType = {
  message: string;
  users: UserType[];
};