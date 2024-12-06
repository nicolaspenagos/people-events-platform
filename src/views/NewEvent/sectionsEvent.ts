import fieldsEvent  from "./fieldsEvent"

const sectionsEvent = [
  {
    title: "Event Information",
    columns: 2,
    fields: fieldsEvent.slice(0, 4),
    background: false, // Sin background
  },
  {
    title: "Datos Generales",
    columns: 2,
    fields: fieldsEvent.slice(4, 8),
    background: true, // Con background
  },
  {
    title: "Owner",
    columns: 2,
    fields: fieldsEvent.slice(8, 12),
    background: false,
  },
  {
    title: "Stats",
    columns: 3,
    fields: fieldsEvent.slice(12, 17),
    background: true,
  },
];

export default sectionsEvent;
