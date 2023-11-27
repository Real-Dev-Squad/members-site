export type MemberProps = {
  data: UserType[] | undefined,
  isLoading: boolean
};

type PictureType = {
  publicId: string;
  url: string;
};

export type RolesType = {
  archived: boolean;
  member: boolean;
  super_user?: boolean
  in_discord?:boolean
};

export type UserType = {
  id: string;
  yoe: number;
  picture: PictureType;
  github_id: string;
  linkedin_id: string;
  instagram_id: string;
  twitter_id: string;
  roles: RolesType;
  last_name: string;
  profileURL: string;
  designation: string;
  github_display_name: null;
  company: string;
  username: string;
  first_name: string;
  profileStatus: string;
  status: string;
  incompleteUserDetails: boolean;
  discordId: string;
  chaincode: string;
};
