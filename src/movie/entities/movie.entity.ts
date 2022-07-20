import { Genre } from "@prisma/client";

export class Movie {
  id?:string;
  name: string;
  sinopse: string;
  time: string;
  imageURL: string;
  video: string;
  genre?: Genre;
}
