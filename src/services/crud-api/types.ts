import { UUID } from "../../types";
import { Event } from "../../store/events/types";

export interface EventDatabaseReponse {
  [key: UUID]: Event;
}
