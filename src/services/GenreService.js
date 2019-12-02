import API from "./api";

export default class GenreService {
  static async getAll(params) {
    return await API.get(`/genre`, { params });
  }

  static async get(id) {
    return await API.get(`/genre/${id}`);
  }

  static async create(data) {
    return await API.post(`/genre`, data);
  }

  static async update(id, data) {
    return await API.put(`/genre/${id}`, data);
  }

  static async delete(id) {
    return await API.delete(`/genre/${id}`);
  }

  // identifica se precisa de uptade ou create
  static async save(data, idAttribute = "id") {
    const id = data[idAttribute];

    let url = "/genre";
    let method = "post";

    if (id) {
      url += `/${id}`;
      method = "put";
    }

    return await API[method](url, data);
  }
}
