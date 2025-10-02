import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
