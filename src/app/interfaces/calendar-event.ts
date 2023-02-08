export interface CalendarEvent {
  id: string;
  start?: string | null;
  end?: string | null;
  title?: string | null;
  actions?: string | null;
  allDay?: boolean | null;
  resizable?: string | null;
  draggable?: boolean | null;
  colour?: string | null;
}