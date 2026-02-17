import fs from 'node:fs/promises';
import path from 'node:path';

const DB_PATH = path.resolve('db.json');

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const nome = formData.get('nome');
        const domanda = formData.get('domanda');

        if (!nome || !domanda) return { success: false, message: 'Compila tutti i campi!' };

        try {
            const fileData = await fs.readFile(DB_PATH, 'utf-8');
            const domande = JSON.parse(fileData);
            const nuovaDomanda = {
                id: crypto.randomUUID(),
                nome,
                domanda,
                data: new Date().toISOString()
            };

            domande.push(nuovaDomanda);

            await fs.writeFile(DB_PATH, JSON.stringify(domande, null, 2));

            return { success: true, message: 'Domanda salvata!' };
        } catch (error) {
            console.error(error);
            return { success: false, message: 'Errore nel salvataggio.' };
        }
    }
}