import HttpClient from "../infra/HttpClient";
import TodoGateway from "./TodoGateway";

export default class TodoHttpGateway implements TodoGateway {
  constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {

  }

  async getTodos(): Promise<any> {
    return await this.httpClient.get(`${this.baseUrl}/tasks`);
  }

  async addItem(item: any): Promise<any> {
    return await this.httpClient.post(`${this.baseUrl}/tasks`, item)
  }

  async updateItem(item: any, id: any): Promise<any> {
    return await this.httpClient.put(`${this.baseUrl}/tasks/${id}`, item)
  }

  async removeItem(id: string): Promise<any> {
    return  await this.httpClient.delete(`${this.baseUrl}/tasks/${id}`)
  }
}