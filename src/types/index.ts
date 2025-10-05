export interface Artwork {
  id: string;
  title: string;
  title_fr?: string;
  title_en?: string;
  title_wo?: string;
  category: string;
  period: string;
  image_url: string;
  qr_code_data?: string;
  [key: string]: any;
}

export interface ArtworkDescription {
  id: string;
  artwork_id: string;
  language: string;
  description: string;
  history?: string;
  audio_url?: string;
  video_url?: string;
  [key: string]: any;
}
