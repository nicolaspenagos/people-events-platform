import { FieldConfig } from "./NewEventTypes"; 
import { createValidator } from "./createValidator"; 

const fieldsEvent: FieldConfig[] = [
  {
    name: "activityName",
    label: "Activity Name",
    type: "text",
    validate: createValidator({
      required: "Activity name is required",
      maxLength: 100, 
    }),
  },
  {
    name: "date",
    label: "Date",
    type: "date",
    validate: createValidator({
      required: "Date is required",
    }),
  },
  {
    name: "city",
    label: "City",
    type: "select",
    options: [
      { value: "cali", label: "Cali" },
      { value: "medellin", label: "Medellin" },
      { value: "bogota", label: "Bogota" },
      { value: "barranquilla", label: "Barranquilla" },
      { value: "anywhere", label: "Anywhere" },
      { value: "nola", label: "Nola" },
    ],
    validate: createValidator({
      required: "City is required",
    }),
  },
  {
    name: "mode",
    label: "Mode",
    type: "select",
    options: [
      { value: "remote", label: "Remote" },
      { value: "in_person", label: "In Person" },
      { value: "mixed", label: "Mixed" },
    ],
    validate: createValidator({
      required: "Mode is required",
    }),
  },
  {
    name: "site",
    label: "Site",
    type: "select",
    options: [
      { value: "virtual", label: "Virtual" },
      { value: "conecta", label: "Conecta" },
      { value: "chico", label: "Chico" },
      { value: "one_plaza", label: "One Plaza" },
      { value: "cortezza", label: "Cortezza" },
      { value: "cali", label: "Cali" },
      { value: "barranquilla", label: "Barranquilla" },
      { value: "outside_office", label: "Outside the Office" },
      { value: "colombia", label: "Colombia" },
    ],
    validate: createValidator({
      required: "Site is required",
    }),
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { value: "done", label: "Done" },
      { value: "pending", label: "Pending" },
      { value: "cancelled", label: "Cancelled" },
      { value: "no_assistance", label: "No Assistance" },
    ],
    validate: createValidator({
      required: "Status is required",
    }),
  },
  {
    name: "type",
    label: "Type",
    type: "select",
    options: [
      { value: "back_to_hubs", label: "Back to the Hubs" },
      { value: "global_event", label: "Global Event" },
      { value: "people_connect", label: "People Connect" },
      { value: "all_hands", label: "All Hands" },
      { value: "dei", label: "DEI" },
      { value: "bkty", label: "BKTY" },
      { value: "benefits", label: "Benefits" },
      { value: "engagement", label: "Engagement" },
      { value: "leadership_connect", label: "Leadership Connect" },
      { value: "special_dates", label: "Special Dates" },
    ],
    validate: createValidator({
      required: "Type is required",
    }),
  },
  {
    name: "area",
    label: "Area",
    type: "select",
    options: [
      { value: "pj", label: "PJ" },
      { value: "sst", label: "SST" },
      { value: "tcbp", label: "TCBP" },
      { value: "tcbp_pj", label: "TCBP-PJ" },
      { value: "tcbp_sst", label: "TCBP-SST" },
      { value: "pj_sst", label: "PJ-SST" },
      { value: "tcbp_pj_sst", label: "TCBP-PJ-SST" },
    ],
    validate: createValidator({
      required: "Area is required",
    }),
  },
  {
    name: "ownerTCBP",
    label: "Owner TCBP",
    type: "email",
    validate: createValidator({
      email: true,
      required: false, // Can be null
    }),
  },
  {
    name: "ownerPJ",
    label: "Owner PJ",
    type: "email",
    validate: createValidator({
      email: true,
      required: false, // Can be null
    }),
  },
  {
    name: "ownerSST",
    label: "Owner SST",
    type: "email",
    validate: createValidator({
      email: true,
      required: false, // Can be null
    }),
  },
  {
    name: "beKindAssociate",
    label: "Be Kind Associate - Well Being",
    type: "select",
    options: [
      { value: "mental", label: "Mental" },
      { value: "physical", label: "Physical" },
      { value: "social", label: "Social" },
      { value: "be_kind", label: "Be Kind" },
    ],
    validate: createValidator({
      required: "Be Kind Associate is required",
    }),
  },
  {
    name: "globersInvited",
    label: "Globers Invited",
    type: "number",
    validate: createValidator({
      required: "Globers invited is required",
      numeric: true,
    }),
  },
  {
    name: "globersAttended",
    label: "Globers Attended",
    type: "number",
    validate: createValidator({
      required: false, // Can be null
      numeric: true,
    }),
  },
  {
    name: "satisfaction",
    label: "Satisfaction",
    type: "number",
    validate: createValidator({
      required: false, // Can be null
      numeric: true,
    }),
  },
  {
    name: "costCOP",
    label: "Cost COP",
    type: "number",
    validate: createValidator({
      required: false, // Can be null
      numeric: true,
    }),
  },
  {
    name: "costUSD",
    label: "Cost USD",
    type: "number",
    validate: createValidator({
      required: false, // Can be null
      numeric: true,
    }),
  },
];

export default fieldsEvent;
