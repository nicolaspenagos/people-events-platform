import { UUID } from "../../types";

export interface EventsState {
  upcoming: Event[];
  past: Event[];
}

export interface Event {
  id: UUID;
  name: string;
  timestamp: string;
  location: string;
}

