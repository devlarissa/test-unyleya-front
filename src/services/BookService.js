import API from "./api";

export default class BookService {
  static async getAll(params) {
    return await API.get(`/book`, { params });
  }

  static async get(id) {
    return await API.get(`/book/${id}`);
  }

  static async create(data) {
    return await API.post(`/book`, data);
  }

  static async update(id, data) {
    return await API.put(`/book/${id}`, data);
  }

  static async delete(id) {
    return await API.delete(`/book/${id}`);
  }

  // identifica se precisa de uptade ou create
  static async save(data, idAttribute = "id") {
    const id = data[idAttribute];

    let url = "/book";
    let method = "post";

    if (id) {
      url += `/${id}`;
      method = "put";
    }

    return await API[method](url, data);
  }
}
