import { createClient } from '@supabase/supabase-js';

// Log des variables d'environnement pour le débogage
console.log('🔍 Vérification des variables d\'environnement:');
console.log('- VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL ? 'Défini' : 'Non défini');
console.log('- VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Défini' : 'Non défini');
console.log('- Mode:', import.meta.env.MODE);
console.log('- Base URL:', import.meta.env.BASE_URL);

// Vérification des variables d'environnement
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Erreur: Variables d\'environnement manquantes pour Supabase');
  console.error('- VITE_SUPABASE_URL:', supabaseUrl);
  console.error('- VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? '***' + supabaseAnonKey.slice(-4) : 'Non défini');
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
console.log('✅ Client Supabase initialisé avec succès');

export interface Artwork {
  id: string;
  title_fr: string;
  title_en: string;
  title_wo: string;
  category: string;
  period: string;
  image_url: string;
  qr_code_data: string;
  created_at: string;
  updated_at: string;
}

export interface ArtworkDescription {
  id: string;
  artwork_id: string;
  language: 'fr' | 'en' | 'wo';
  description: string;
  history: string | null;
  audio_url: string | null;
  video_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface ArtworkWithDescription extends Artwork {
  description?: ArtworkDescription;
}
