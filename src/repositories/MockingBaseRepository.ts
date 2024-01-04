class MockingBaseRepository<T> {
  protected model: any;

  constructor(model) {
    this.model = model;
  }

  protected async create(data: T): Promise<T> {
    return data;
  }

  protected async update(id: string | number, data: T): Promise<T> {
    return data;
  }

  protected async delete(id: string | number): Promise<string | number> {
    return id;
  }

  protected async findAll(): Promise<[T]|[]> {
    return [];
  }

  protected async findById(id: string | number): Promise<T|{}> {
    return {}
  }
}

export default MockingBaseRepository;
