import http from "../http-common";
const getAll = () => {
  return http.get("/tipo_mocion");
};
const get = (id) => {
  return http.get(`/tipo_mocion/${id}`);
};
const create = (data) => {
  return http.post("/tipo_mocion", data);
};
const update = (id, data) => {
  return http.put(`/tipo_mocion`, data);
};
const remove = (id) => {
  return http.delete(`/tipo_mocion/${id}`);
};

const PersonaService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default PersonaService;