import { getConnectionManager } from 'typeorm';
import './setup';

export default async function connection() {
    const connectionManager = await getConnectionManager();
    const connectionData = connectionManager.create({
        name: 'default',
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [
            `${
                process.env.NODE_ENV === 'prod' ? 'dist/src' : 'src'
            }/entities/*.*`,
        ],
        ssl: process.env.NODE_ENV === 'prod',
    });

    await connectionData.connect();
    return connectionData;
}
