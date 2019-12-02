import API from "./api";

export default class AutorService {
  static async getAll(params) {
    return await API.get(`/autor`, { params });
  }

  static async get(id) {
    return await API.get(`/autor/${id}`);
  }

  static async create(data) {
    return await API.post(`/autor`, data);
  }

  static async update(id, data) {
    return await API.put(`/autor/${id}`, data);
  }

  static async delete(id) {
    return await API.delete(`/autor/${id}`);
  }

  // identifica se precisa de uptade ou create
  static async save(data, idAttribute = "id") {
    const id = data[idAttribute];

    let url = "/autor";
    let method = "post";

    if (id) {
      url += `/${id}`;
      method = "put";
    }

    return await API[method](url, data);
  }
}
