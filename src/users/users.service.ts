import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      name: dto.name,
      email: dto.email,
      password: await bcrypt.hash(dto.password, 10),
      CPF: dto.CPF,
      isAdmin: dto.isAdmin,
      favoriteMovies: {
        connect: dto.favoriteMovies.map((movieId) => ({
          id: movieId,
        })),
      },
    };
    return await this.prisma.user.create({
      data,
      select: {
        name: true,
        email: true,
        password: false,
        CPF: true,
        isAdmin: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        name: true,
        email: true,
        password: true,
        CPF: false,
        isAdmin: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, dto: UpdateUserDto) {
    const data: Prisma.UserUpdateInput = {
      name: dto.name,
      email: dto.email,
      password: await bcrypt.hash(dto.password, 10),
      CPF: dto.CPF,
      isAdmin: dto.isAdmin,
      favoriteMovies: {
        connect: dto.favoriteMovies.map((movieId) => ({
          id: movieId,
        })),
      },
    };
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.prisma.user.delete({ where: { id } });
    return { message: 'Usuário deletado com sucesso!' };
  }
}
