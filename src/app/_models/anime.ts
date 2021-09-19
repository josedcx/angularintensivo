export interface Anime {
  mal_id: number;
  url: string;
  title: string;
  image_url: string;
  synopsis: string;
  type: string;
  airing_start: Date;
  episodes: number;
  members: number;
  genres: IGenres[];
  source: string;
  producers: IProducer[];
  score: number;
  licensors: [];
  r18: boolean;
  kids: boolean;
  continuing: boolean;
}

export interface IGenres {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface IProducer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}


export interface ITopanime {
  mal_id: number;
  name: string;
  url: string;
  image_url: string;
  title: string;
  type: string;
  episodes: string;
  score: number;
  rank: number;
  pu: string

}
