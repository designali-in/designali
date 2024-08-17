export interface Views {
  views: number;
}

export interface Likes {
  likes: number;
  currentUserLikes: number;
}

export interface Message {
  id: number;
  body: string;
  image: string;
  created_by: string;
  updated_at: Date;
}

export interface Artist {
  id: string;
  name: string;
  type: string;
  href: string;
}

export interface NowPlayingSong {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

export type Song =
  | {
      isPlaying: true;
      name: string;
      artist: string;
      album: string;
      albumImage: string;
      songUrl: string;
    }
  | {
      isPlaying: false;
    };

export interface YouTube {
  subscribers: number;
  views: number;
}

export interface Github {
  stars: number;
  followers: number;
}

export interface Wakatime {
  seconds: number;
}

export interface Analytics {
  visitors: number;
}
