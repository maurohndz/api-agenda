class BaseRepository<T> {
  protected model: any;

  constructor(model) {
    this.model = model;
  }

  protected async create(data: T): Promise<T> {
    return this.model.create(data);
  }

  protected async update(id: string | number, data): Promise<T> {
    return this.model.update(data, { where: { id } });
  }

  protected async delete(id: string | number): Promise<string | number> {
    return this.model.destroy({ where: { id } });
  }

  protected async findAll(): Promise<[T]> {
    return this.model.findAll();
  }

  protected async findById(id: string | number): Promise<T> {
    return this.model.findByPk(id);
  }
}

export default BaseRepository;
