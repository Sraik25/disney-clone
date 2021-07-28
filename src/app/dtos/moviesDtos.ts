export interface Movie {
  backgroundImg: string;
  cardImg: string;
  description: string;
  id: string;
  subTitle: string;
  title: string;
  titleImg: string;
  type: string;
}

export interface MovieInitialState {
  movies: Movie[];
  movie: Movie | null;
}
