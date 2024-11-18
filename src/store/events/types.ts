export interface EventsState {
  upcoming: Event[];
  past: Event[];
}

export interface Event {
  name: string;
  timestamp: string;
  location: string;
}
