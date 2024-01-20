import { type } from 'os';
export interface tagsAndLevels {
  id: string;
  date: {
    __seconds: number;
    __nanoseconds: number;
  };
  createdBy: string;
  name: string;
}
export interface tags extends tagsAndLevels {
  reason: string;
  type: string;
}
export interface levels extends tagsAndLevels {
  value: number;
}

export type tagsWithLevelType = {
  name: string;
  tagId: string;
  levelId: string;
  tagName: string;
  levelName: string;
  levelValue: number;
  tagType: string;
};

export type tagPayload = {
  itemId: string;
  itemType: string;
  tagPayload: { tagId: string; levelId: string }[];
};
export interface updateSkills {
  itemId: string;
  itemType: string;
  tagId: string;
  levelId: string;
  tagType: string;
  tagName: string;
  levelName: string;
  levelValue: number;
}
export interface skills extends updateSkills {
  id: string;
}
