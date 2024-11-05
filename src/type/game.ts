export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic?: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: unknown; // Replace with specific type if available
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: PlatformDetails[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: Store[];
  clip?: unknown; // Replace with specific type if available
  tags: Tag[];
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface PlatformDetails {
  platform: Platform;
  released_at: string;
  requirements_en?: Requirements;
  requirements_ru?: unknown; // Replace with specific type if available
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  year_end?: number | null;
  year_start?: number | null;
  games_count: number;
  image_background: string;
}

export interface Requirements {
  minimum: string;
  recommended?: string;
}

export interface ParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Store {
  id: number;
  store: StoreDetails;
}

export interface StoreDetails {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}
