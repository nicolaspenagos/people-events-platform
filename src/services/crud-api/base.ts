import axios from "axios";

const crudDataClient = axios.create({
  baseURL: import.meta.env.VITE_CRUD_DB_BASE_URL,
});

crudDataClient.interceptors.request.use((config) => {
  if (!config.url?.endsWith(".json")) config.url += ".json";
  return config;
});

export const { get, post, put, delete: remove, patch } = crudDataClient;
