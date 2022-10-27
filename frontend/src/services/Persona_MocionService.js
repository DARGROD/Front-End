import http from "../http-common";
const getAll = () => {
  return http.get("/mociones_persona");
};
const get = (id) => {
  return http.get(`/mociones_persona/${id}`);
};
const create = (data, id) => {
  return http.post("/mociones_persona", data);
};
const update = (id, data) => {
  return http.put(`/mociones_persona`, data);
};
const remove = (id) => {
  return http.delete(`/mociones_persona/${id}`);
};

const PersonaService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default PersonaService;