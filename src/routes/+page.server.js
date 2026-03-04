import { supabase } from '$lib/supabaseClient.js';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const question = formData.get('question');

        if (!question) return { success: false, message: 'Compila tutti i campi!' };

        try {
            const { error } = await supabase
                .from('questions')
                .insert([
                    { name: name && name.trim() !== '' ? capitalizeFirstChar(name) : 'Utente Anonimo', question: question }
                ]);
            
            if (error) throw error; 

            return { success: true, message: 'question salvata!' };
        } catch (error) {
            console.error(error);
            return { success: false, message: 'Errore nel salvataggio.' };
        }
    }
}

function capitalizeFirstChar(string) {
    const STRINGS = string.split(" ");
    let result = "";

    STRINGS.forEach(element => {
        const firstChar = element.charAt(0).toUpperCase();
        result += firstChar + element.slice(1) + " ";
    });

    return result;
}