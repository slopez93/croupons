import MongoConfig from '../../../../shared/infrastructure/persistence/mongo/MongoConfig';

export class MongoConfigFactory {
  static createConfig(): MongoConfig {
    return {
      url: 'mongodb://127.0.0.1:27017/croupons',
    };
  }
}
