import fs from 'node:fs/promises';
import path from 'node:path';

const DB_PATH = path.resolve('db.json');

export const load = async () => {
    try {
        const fileData = await fs.readFile(DB_PATH, 'utf-8');
        const domande = JSON.parse(fileData);

        return { domande: domande.reverse() };
    } catch (error) {
        console.error('Errore lettura DB:', error);
        return { domande: [] };
    }
};