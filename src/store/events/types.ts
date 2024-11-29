import { UUID } from "../../types";

export interface EventsState {
  upcoming: Event[];
  past: Event[];
}

export interface Event {
  id: UUID; 
  activityName: string; 
  date: string; 
  city: string; 
  mode: string; 
  site: string; 
  status: string; 
  type: string; 
  area: string; 
  ownerTCBP?: string; 
  ownerPJ?: string;
  ownerSST?: string; 
  beKindAssociate: string; 
  globersInvited: number; 
  globersAttended?: number; 
  satisfaction?: number; 
  costCOP?: number; 
  costUSD?: number; 
}

