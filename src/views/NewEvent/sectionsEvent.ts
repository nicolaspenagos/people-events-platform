import fieldsEvent  from "./fieldsEvent"

const sectionsEvent = [
    {
      title: "Event Information",
      columns: 2,
      fields: fieldsEvent.slice(0, 4),
    },
    {
      title: "Datos Generales",
      columns: 2,
      fields: fieldsEvent.slice(4, 8),
    },
    {
      title: 'Owner',
      columns: 2,
      fields: fieldsEvent.slice(8, 12),
    },
    {
      title: 'Stats',
      columns: 3,
      fields: fieldsEvent.slice(12, 17),
    }
  ];

export default sectionsEvent;