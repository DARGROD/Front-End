import http from "../http-common";
const getAll = () => {
  return http.get("/mociones");
};
const get = (id) => {
  return http.get(`/mociones/${id}`);
};
const create = (data, id) => {
  return http.post("/mociones", data);
};
const update = (id, data) => {
  return http.put(`/mociones`, data);
};
const remove = (id) => {
  return http.delete(`/mociones/${id}`);
};

const PersonaService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default PersonaService;