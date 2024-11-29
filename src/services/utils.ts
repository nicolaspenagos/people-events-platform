import { UUID } from "../types";

export const extractJsonValues = <T>(jsonObject: { [key: UUID]: T }): T[] => {
  return jsonObject ? Object.values(jsonObject) : [];
};
