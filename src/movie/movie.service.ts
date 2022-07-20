import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMovieDto: CreateMovieDto) {
    const data: Prisma.MovieCreateInput = {
      name: createMovieDto.name,
      sinopse:createMovieDto.sinopse,
      time: createMovieDto.time,
      imageURL:createMovieDto.imageURL,
      video: createMovieDto.video,
      genre: {
        connect: {
          name: createMovieDto.genreName,
        },
      },
    };
    return await this.prisma.movie.create({ data });
  }

  async findAll(): Promise<Movie[]> {
    return await this.prisma.movie.findMany();
  }

  async findById(id: string): Promise<Movie> {
    const movie = await this.prisma.movie.findUnique({ where: { id } });
    if (!movie) {
      throw new NotFoundException('Filme com ID não encontrado');
    }
    return movie;
  }

  async findOne(id: string): Promise<Movie> {
    return await this.findById(id);
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    await this.findById(id);
    const data: Prisma.MovieUpdateInput = {
      name: updateMovieDto.name,
      sinopse: updateMovieDto.sinopse,
      time: updateMovieDto.time,
      imageURL: updateMovieDto.imageURL,
      video: updateMovieDto.video,
      genre: {
        connect: {
          name: updateMovieDto.genreName,
        },
      },
    };
    return await this.prisma.movie.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findById(id);
    await this.prisma.movie.delete({ where: { id } });
  }
}
