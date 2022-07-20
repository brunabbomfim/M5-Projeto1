import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const data: Genre = { ...createGenreDto };
    return await this.prisma.genre.create({ data });
  }

  async findAll(): Promise<Genre[]> {
    return await this.prisma.genre.findMany();
  }

  async findById(id: string): Promise<Genre> {
    const genre = await this.prisma.genre.findUnique({ where: { id } });
    if (!genre) {
      throw new NotFoundException('Gênero com ID não encontrado');
    }
    return genre;
  }

  async findOne(id: string): Promise<Genre> {
    return await this.findById(id);
  }

  async update(id: string, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    await this.findById(id);
    const data: Partial<Genre> = { ...updateGenreDto };
    return await this.prisma.genre.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findById(id);
    await this.prisma.genre.delete({ where: { id } });
  }
}
