export default interface TodoGateway {
  getTodos (): Promise<any>
  addItem (item: any): Promise<any>
  updateItem (item: any, id: string): Promise<any>
  removeItem (id: string): Promise<any>
}