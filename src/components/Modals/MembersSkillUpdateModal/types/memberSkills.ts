import { type } from "os";

export type tagsType = {
    id: string;
    date: {
        __seconds: number;
        __nanoseconds: number
    };
    reason: string;
    createdBy: string;
    name: string;
    type: string;
}


export type tagsResponseType = {
    message: string;
    tags: tagsType[]
}

export type levelsType = {
    id: string;
    date: {
        __seconds: number;
        __nanoseconds: number;
    };
    createdBy: string;
    name: string;
    value: number
}

export type levelsResponseType = {
    message: string;
    levels: levelsType[];
}

export type skillsType = {
    id: string;
    itemId: string;
    itemType: string;
    tagId: string;
    levelId: string;
    tagType: string;
    levelName: string;
    tagName: string;
    levelValue: number
}

export type skillsResponseType = {
    message: string;
    levels: skillsType[];
}

export type tagsWithLevelType = {
    name: string;
    tagId: string;
    levelId: string;
    tagName: string;
    levelName: string;
    levelValue: number;
    tagType: string;
}

export type tagPayload = {
    itemId: string;
    itemType: string;
    tagPayload: { tagId: string; levelId: string}[];
}

export type updateSkillType = {
    itemId: string;
    itemType: string;
    tagId: string;
    levelId: string;
    tagType: string;
    tagName: string;
    levelName: string;
    levelValue: number;
}