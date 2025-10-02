-- Schéma de base de données pour le Musée des Civilisations Noires
-- Ce schéma crée la structure complète pour gérer les œuvres d'art du musée 
-- avec support multilingue complet (Français, Anglais, Wolof)

-- Table principale des œuvres d'art
CREATE TABLE IF NOT EXISTS artworks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_fr text NOT NULL,
  title_en text NOT NULL,
  title_wo text NOT NULL,
  category text NOT NULL,
  period text NOT NULL,
  image_url text NOT NULL,
  qr_code_data text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Table des descriptions multilingues
CREATE TABLE IF NOT EXISTS artwork_descriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artwork_id uuid NOT NULL REFERENCES artworks(id) ON DELETE CASCADE,
  language text NOT NULL CHECK (language IN ('fr', 'en', 'wo')),
  description text NOT NULL,
  history text,
  audio_url text,
  video_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(artwork_id, language)
);

-- Index pour optimiser les requêtes
CREATE INDEX IF NOT EXISTS idx_artwork_descriptions_artwork_id ON artwork_descriptions(artwork_id);
CREATE INDEX IF NOT EXISTS idx_artwork_descriptions_language ON artwork_descriptions(language);
CREATE INDEX IF NOT EXISTS idx_artworks_category ON artworks(category);

-- Enable RLS
ALTER TABLE artworks ENABLE ROW LEVEL SECURITY;
ALTER TABLE artwork_descriptions ENABLE ROW LEVEL SECURITY;

-- Politiques de lecture publiques (tout le monde peut voir les œuvres)
CREATE POLICY "Public can view artworks"
  ON artworks FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can view descriptions"
  ON artwork_descriptions FOR SELECT
  TO public
  USING (true);

-- Politiques d'écriture restreintes aux utilisateurs authentifiés
CREATE POLICY "Authenticated users can insert artworks"
  ON artworks FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update artworks"
  ON artworks FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete artworks"
  ON artworks FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert descriptions"
  ON artwork_descriptions FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update descriptions"
  ON artwork_descriptions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete descriptions"
  ON artwork_descriptions FOR DELETE
  TO authenticated
  USING (true);

-- Insertion de données d'exemple
INSERT INTO artworks (id, title_fr, title_en, title_wo, category, period, image_url, qr_code_data) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'Masque Cérémonial', 'Ceremonial Mask', 'Masque Seremoñ', 'Sculpture', 'XIXe siècle', 'https://images.unsplash.com/photo-1566417898929-52af8d8cdab7', '550e8400-e29b-41d4-a716-446655440001'),
  ('550e8400-e29b-41d4-a716-446655440002', 'Sculpture Ancestrale', 'Ancestral Sculpture', 'Nataal bu Njëkk', 'Sculpture', 'XVIIIe siècle', 'https://images.unsplash.com/photo-1682668701024-b6508708a764', '550e8400-e29b-41d4-a716-446655440002'),
  ('550e8400-e29b-41d4-a716-446655440003', 'Textile Traditionnel', 'Traditional Textile', 'Dara bu Njëkk', 'Textile', 'XXe siècle', 'https://images.unsplash.com/photo-1758633854855-3059c5b48674', '550e8400-e29b-41d4-a716-446655440003'),
  ('550e8400-e29b-41d4-a716-446655440004', 'Sculpture en Bois', 'Wooden Sculpture', 'Nataal bu Garab', 'Sculpture', 'XVIIe siècle', 'https://images.unsplash.com/photo-1700985958097-c75dea592121', '550e8400-e29b-41d4-a716-446655440004'),
  ('550e8400-e29b-41d4-a716-446655440005', 'Parure Royale', 'Royal Jewelry', 'Jëkk bu Buur', 'Bijoux', 'XIXe siècle', 'https://images.unsplash.com/photo-1757140448241-ba7511316754', '550e8400-e29b-41d4-a716-446655440005'),
  ('550e8400-e29b-41d4-a716-446655440006', 'Poterie Ancestrale', 'Ancestral Pottery', 'Mbotay bu Njëkk', 'Céramique', 'XVIIIe siècle', 'https://images.unsplash.com/photo-1682668701024-b6508708a764', '550e8400-e29b-41d4-a716-446655440006')
ON CONFLICT (id) DO NOTHING;

-- Descriptions en Français
INSERT INTO artwork_descriptions (artwork_id, language, description, history) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'fr', 'Ce masque cérémonial était utilisé lors des rituels sacrés. Sculpté dans du bois d''ébène, il représente les ancêtres et sert de lien entre le monde des vivants et celui des esprits. Les motifs géométriques symbolisent l''harmonie cosmique.', 'Utilisé dans les cérémonies traditionnelles d''initiation et de passage à l''âge adulte, ce masque incarne la sagesse ancestrale et la continuité culturelle des peuples d''Afrique de l''Ouest.'),
  ('550e8400-e29b-41d4-a716-446655440002', 'fr', 'Figure ancestrale en terre cuite représentant un chef de tribu. Cette œuvre témoigne de l''excellence technique des artisans de l''époque et de l''importance accordée à la mémoire des leaders communautaires.', 'Les sculptures ancestrales jouaient un rôle central dans la préservation de la mémoire collective et le maintien des valeurs communautaires.'),
  ('550e8400-e29b-41d4-a716-446655440003', 'fr', 'Tissu Kente tissé à la main avec des fils de coton et de soie. Chaque couleur et motif raconte une histoire spécifique et transmet des messages de sagesse, de richesse et de statut social.', 'Le textile traditionnel africain est un art narratif où chaque motif encode des proverbes, des histoires et des valeurs culturelles transmises de génération en génération.'),
  ('550e8400-e29b-41d4-a716-446655440004', 'fr', 'Sculpture traditionnelle en bois noble représentant une divinité protectrice. L''artiste a capturé l''essence spirituelle à travers des lignes épurées et une expression sereine.', 'Les sculptures en bois servaient d''objets de culte et de protection pour les familles et les communautés.'),
  ('550e8400-e29b-41d4-a716-446655440005', 'fr', 'Collier cérémonial porté par les membres de la royauté. Composé de perles de verre colorées et d''or, il symbolise le pouvoir, la richesse et la connexion divine.', 'Les parures royales étaient des symboles de pouvoir et de légitimité, transmises lors des cérémonies d''intronisation.'),
  ('550e8400-e29b-41d4-a716-446655440006', 'fr', 'Vase en terre cuite orné de motifs géométriques complexes. Utilisé pour stocker l''eau et les denrées alimentaires, il témoigne du savoir-faire technique des potiers africains.', 'La poterie africaine combine fonctionnalité et esthétique, chaque pièce étant unique et porteuse d''identité culturelle.')
ON CONFLICT (artwork_id, language) DO NOTHING;

-- Descriptions en Anglais
INSERT INTO artwork_descriptions (artwork_id, language, description, history) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'en', 'This ceremonial mask was used during sacred rituals. Carved from ebony wood, it represents ancestors and serves as a link between the world of the living and that of spirits. The geometric patterns symbolize cosmic harmony.', 'Used in traditional initiation ceremonies and coming-of-age rituals, this mask embodies ancestral wisdom and the cultural continuity of West African peoples.'),
  ('550e8400-e29b-41d4-a716-446655440002', 'en', 'Ancestral terracotta figure representing a tribal chief. This work demonstrates the technical excellence of craftsmen of the time and the importance given to the memory of community leaders.', 'Ancestral sculptures played a central role in preserving collective memory and maintaining community values.'),
  ('550e8400-e29b-41d4-a716-446655440003', 'en', 'Hand-woven Kente cloth made with cotton and silk threads. Each color and pattern tells a specific story and conveys messages of wisdom, wealth, and social status.', 'Traditional African textiles are a narrative art where each pattern encodes proverbs, stories, and cultural values passed down through generations.'),
  ('550e8400-e29b-41d4-a716-446655440004', 'en', 'Traditional sculpture in noble wood representing a protective deity. The artist captured the spiritual essence through clean lines and a serene expression.', 'Wooden sculptures served as objects of worship and protection for families and communities.'),
  ('550e8400-e29b-41d4-a716-446655440005', 'en', 'Ceremonial necklace worn by members of royalty. Made of colored glass beads and gold, it symbolizes power, wealth, and divine connection.', 'Royal regalia were symbols of power and legitimacy, passed on during enthronement ceremonies.'),
  ('550e8400-e29b-41d4-a716-446655440006', 'en', 'Terracotta vase decorated with complex geometric patterns. Used to store water and food, it demonstrates the technical expertise of African potters.', 'African pottery combines functionality and aesthetics, each piece being unique and carrying cultural identity.')
ON CONFLICT (artwork_id, language) DO NOTHING;

-- Descriptions en Wolof
INSERT INTO artwork_descriptions (artwork_id, language, description, history) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'wo', 'Masque seremoñ bii dañu ko jëfandikoo ci yoonu jëfandikoo yu njëkk. Dañu ko nataale ci garab ebène, dafa melokaan say njëkk yi ñuy dëkk ak say njëkk yi dem. Motif yu géométrique yi dañu sànkale harmonie cosmique.', 'Dañu ko jëfandikoo ci yoonu initiation ak passage ci mag, masque bii dafa melokaan xam-xam bu njëkk ak continuité culturelle bu réew yi Afrique de l''Ouest.'),
  ('550e8400-e29b-41d4-a716-446655440002', 'wo', 'Nataal bu njëkk ci terre cuite dafa melokaan benn boroom réew. Liggéey bii dafa wone excellence technique bu artisan yi ci waxtu boobu ak importance bu ñu jox ci xam-xam yi boroom réew.', 'Nataal yi bu njëkk dañu am benn rôle bu mag ci wër xam-xam bu askan yi ak xët-xët bu askan bi.'),
  ('550e8400-e29b-41d4-a716-446655440003', 'wo', 'Dara Kente bu dañu ras ci loxo ak fil yu coton ak soie. Kenn melokaani ak motif dafay xalaat benn istoire bu am solo te dafa yónne ay message yu xam-xam, alal ak statut social.', 'Dara bu njëkk bu Afrique dafa am benn art narratif fii kenn motif dafa encode ay proverbe, ay istoire ak ay valeur culturelle yu ñu yónne ci mbokk ci mbokk.'),
  ('550e8400-e29b-41d4-a716-446655440004', 'wo', 'Nataal bu njëkk ci garab bu baax dafa melokaan benn divinité protectrice. Artiste bi dafa taxaw essence spirituelle ci ligne yu set ak expression bu naxee.', 'Nataal yi ci garab dañu ko jëfandikoo nga objet yu culte ak protection ci mbokk ak askan yi.'),
  ('550e8400-e29b-41d4-a716-446655440005', 'wo', 'Collier seremoñ bu buur bi ko tokk. Dañu ko defar ak perles yu verre yu melokaani ak wór, dafa sànkale doole, alal ak lëndëm ak Yàlla.', 'Jëkk bu buur dañu am benn sànkale bu doole ak légitimité, dañu ko yónne ci yoonu intronisation.'),
  ('550e8400-e29b-41d4-a716-446655440006', 'wo', 'Vase ci terre cuite dañu ko jëm ak motif géométrique yu àgg. Dañu ko jëfandikoo ngir wër ndox ak lekk, dafa wone xam-xam bu mbotaykat yi Afrique.', 'Mbotay bu Afrique dafa melokaan fonctionnalité ak esthétique, kenn pièce dafa am solo te am benn identité culturelle.')
ON CONFLICT (artwork_id, language) DO NOTHING;