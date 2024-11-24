import { Event } from "../../store/events/types";
import { UUID } from "../../types";
import { put, get } from "./base";
import { EventDatabaseReponse } from "./types";

export const EVENTS_ENDPOINT = "events";

export const crudAPI = {
  putEvent: (event: Event) =>
    put<Event>(`${EVENTS_ENDPOINT}/${event.id}.json`, event),
  getEventById: (id: UUID) =>
    get<EventDatabaseReponse>(`${EVENTS_ENDPOINT}/${id}.json`),
  getEvents: () => get<EventDatabaseReponse>(`${EVENTS_ENDPOINT}.json`),
};
