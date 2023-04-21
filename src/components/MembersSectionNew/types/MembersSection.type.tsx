export type MemberProps = {
  data: user[],
  isLoading: boolean
};

export type user = {
  id: number;
  image: string;
  name: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
};