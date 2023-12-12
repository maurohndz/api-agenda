import { Model, FindOptions, CreateOptions } from 'sequelize';

interface BaseAttributes {
  // Define los atributos comunes aquí
}

interface BaseCreationAttributes {
  // Define los atributos de creación comunes aquí
}

class BaseRepository<T extends Model<BaseAttributes, BaseCreationAttributes>> {
  private model: T;

  constructor(model: T) {
    this.model = model;
  }

  async findAll(options?: FindOptions): Promise<T[]> {
    return await this.model.findAll(options);
  }

  async create(values: BaseCreationAttributes, options?: CreateOptions): Promise<T> {
    return await this.model.create(values, options);
  }

  // Otros métodos de repositorio comunes...
}

export default BaseRepository;