import axios from "axios";

const crudDataClient = axios.create({
  baseURL: import.meta.env.VITE_CRUD_DB_BASE_URL,
});

export const { get, post, put, delete: remove, patch } = crudDataClient;
