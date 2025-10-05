import { createClient } from '@supabase/supabase-js';

// Log des variables d'environnement pour le débogage
console.log('🔍 Variables d\'environnement:', {
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL ? 'Défini' : 'Non défini',
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Défini' : 'Non défini'
});

// Types pour la réponse de l'API
export interface ArtworkDescription {
  id?: string;
  artwork_id?: string;
  description: string;
  history: string;
  language: string;
  audio_url?: string;
  video_url?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Artwork {
  id: string;
  title_fr: string;
  title_en: string;
  title_wo: string;
  category: string;
  period: string;
  image_url: string;
  qr_code_data?: string;
  created_at?: string;
  updated_at?: string;
  artwork_descriptions: ArtworkDescription[];
}

// Configuration directe de Supabase (remplacez par vos propres valeurs)
const supabaseUrl = 'https://votre-projet.supabase.co'; // Remplacez par votre URL
const supabaseKey = 'votre_cle_anonyme_tres_longue'; // Remplacez par votre clé

// Vérification de la configuration
if (!supabaseUrl || !supabaseKey) {
  const errorMsg = '❌ Configuration manquante pour Supabase. Vérifiez vos variables d\'environnement.';
  console.error(errorMsg);
  throw new Error(errorMsg);
}

// Initialisation du client Supabase
console.log('🔄 Initialisation de Supabase avec l\'URL:', supabaseUrl.substring(0, 20) + '...');
const supabase = createClient(supabaseUrl, supabaseKey);
console.log('✅ Supabase initialisé avec succès');

/**
 * Récupère une œuvre d'art par son code QR
 * @param qrCode Le code QR scanné
 * @param lang La langue pour la description (par défaut: 'fr')
 * @returns L'œuvre correspondante ou null si non trouvée
 * @throws Error en cas d'erreur de requête
 */
export async function getArtworkByQr(
  qrCode: string,
  lang: string = 'fr'
): Promise<Artwork | null> {
  try {
    const { data, error } = await supabase
      .from('artworks')
      .select(`
        id,
        title_fr,
        title_en,
        title_wo,
        category,
        period,
        image_url,
        artwork_descriptions!inner(description, history, language)
      `)
      .eq('qr_code_data', qrCode)
      .eq('artwork_descriptions.language', lang)
      .single();

    if (error) {
      if (error.code === 'PGRST116') { // Aucun résultat trouvé
        return null;
      }
      throw error;
    }

    return data as Artwork;
  } catch (error) {
    console.error('Error fetching artwork by QR code:', error);
    throw error;
  }
}
