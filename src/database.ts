import { getConnectionManager } from 'typeorm';
import './setup';

export default async function connection() {
  const connectionManager = await getConnectionManager();
  const connectionData = connectionManager.create({
    name: 'default',
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: ['src/entities/*.ts'],
  });

  await connectionData.connect();
  return connectionData;
}
