import { supabase } from '$lib/supabaseClient';

export const load = async () => {
    // Get all questions from the database
    const { data, error } = await supabase
        .from('questions')
        .select('*')
        .order('created_at', { ascending: false });

    // If there is an error, return an empty array
    if (error) {
        console.error("Errore caricamento:", error);
        return { questions: [] };
    }

    // Return the questions
    return {
        questions: data ?? []
    };
};