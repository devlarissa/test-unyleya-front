import API from "./api";

export default class PublisherService {
  static async getAll(params) {
    return await API.get(`/publisher`, { params });
  }

  static async get(id) {
    return await API.get(`/publisher/${id}`);
  }

  static async create(data) {
    return await API.post(`/publisher`, data);
  }

  static async update(id, data) {
    return await API.put(`/publisher/${id}`, data);
  }

  static async delete(id) {
    return await API.delete(`/publisher/${id}`);
  }

  // identifica se precisa de uptade ou create
  static async save(data, idAttribute = "id") {
    const id = data[idAttribute];

    let url = "/publisher";
    let method = "post";

    if (id) {
      url += `/${id}`;
      method = "put";
    }

    return await API[method](url, data);
  }
}
