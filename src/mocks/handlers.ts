import { rest } from "msw";
import tagsHandler from "./handlers/tags.handler";
import skillsHandler from "./handlers/skills.handler";
import levelsHandler from "./handlers/levels.handler";
import { itemsHandler } from "./handlers/items.handler";

export const handlers = [
  ...tagsHandler,
  ...levelsHandler,
  ...skillsHandler,
  ...itemsHandler
];
