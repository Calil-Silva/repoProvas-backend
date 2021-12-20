import { getConnection, getRepository } from 'typeorm';
import { init } from '../../src/app';
import Tests from '../../src/entities/Tests';

async function startConnection() {
    await init();
}

async function endConnection() {
    await getConnection().close();
}

async function cleanDataBase() {
    await getRepository(Tests).delete({});
}

export { startConnection, endConnection, cleanDataBase };
