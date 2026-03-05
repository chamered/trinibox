import { supabase } from '$lib/supabaseClient.js';

/**
 * SvelteKit Server Actions for the root page.
 * These actions handle form submissions from the client.
 */
export const actions = {
    /**
     * The default action handles the submission of new questions.
     * It extracts the form data, validates the input, and saves the data to Supabase.
     */
    default: async ({ request }) => {
        // Extract form data from the incoming request
        const formData = await request.formData();
        const name = formData.get('name');
        const question = formData.get('question');

        // Basic validation: the question field must not be empty
        if (!question) return { success: false, message: 'Compila tutti i campi!' };

        try {
            // Attempt to insert the question into the 'questions' table in Supabase
            const { error } = await supabase
                .from('questions')
                .insert([
                    { 
                        // If name is provided and not empty, capitalize it; otherwise, default to 'Utente Anonimo'
                        name: name && name.trim() !== '' ? capitalizeFirstChar(name) : 'Utente Anonimo', 
                        question: question 
                    }
                ]);
            
            // If Supabase returns an error, catch and handle it
            if (error) throw error; 

            // Return success state to the client
            return { success: true, message: 'question salvata!' };
        } catch (error) {
            // Log any unexpected errors and return failure state
            console.error(error);
            return { success: false, message: 'Errore nel salvataggio.' };
        }
    }
}

/**
 * Capitalizes the first character of every word in the given string.
 * @param {string} string - The input string to capitalize.
 * @returns {string} - The capitalized string (note: currently adds a trailing space).
 */
function capitalizeFirstChar(string) {
    const STRINGS = string.split(" ");
    let result = "";

    STRINGS.forEach(element => {
        const firstChar = element.charAt(0).toUpperCase();
        result += firstChar + element.slice(1) + " ";
    });

    return result;
}