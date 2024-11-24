import { UUID } from "../types";

export const extractJsonValues = <T>(jsonObject: { [key: UUID]: T }): T[] => {
  return Object.values(jsonObject);
};
