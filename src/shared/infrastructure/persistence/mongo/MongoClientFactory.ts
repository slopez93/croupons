import { MongoClient } from 'mongodb';
import MongoConfig from './MongoConfig';

export class MongoClientFactory {
  static async createClient(config: MongoConfig): Promise<MongoClient> {
    const client = await MongoClientFactory.createAndConnectClient(config);

    return client;
  }

  private static async createAndConnectClient(config: MongoConfig): Promise<MongoClient> {
    const client = new MongoClient(config.url, { useUnifiedTopology: true, ignoreUndefined: true });

    await client.connect();

    return client;
  }
}
