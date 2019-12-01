import API from './api';

export default class BookService {

  async getAll(params) {
    return await API.get(`/books`, {params});
  }

  async get(id) {
    return await API.get(`/books/${id}`);
  }

  async create(data) {
    return await API.post(`/books`, data);
  }

  async update(id, data) {
    return await API.put(`/books/${id}`, data);
  }

  async delete(id) {
    return await API.delete(`/books/${id}`);
  }

}
