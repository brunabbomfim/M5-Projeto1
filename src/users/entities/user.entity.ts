import { Movie } from 'src/movie/entities/movie.entity';

export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  CPF: string;
  isAdmin: boolean;
  favoriteMovies?: Movie[];
}
