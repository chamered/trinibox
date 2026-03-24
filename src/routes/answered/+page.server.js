// src/routes/answered/+page.server.js
import { supabase } from '$lib/supabaseClient';

export const load = async () => {
    const { data, error } = await supabase
        .from('questions')
        .select('*')
        .not('episode_url', 'is', null)
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Errore caricamento archivio:", error);
        return { answeredQuestions: [] };
    }

    return {
        answeredQuestions: data ?? []
    };
};