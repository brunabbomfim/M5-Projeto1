import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const data: User = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    };
      return await this.prisma.user.create({ 
        data, 
        select: {
          name: true,
          email: true,
          password: false,
          CPF: true,
          isAdmin: true,
        }
      });
    }

    async findAll() {
      return await this.prisma.user.findMany({
        select: {
          name: true,
          email: true,
          password: false,
          CPF: false,
          isAdmin: true,
        }
      });
    }

    async findOne(id: string) {
      return await this.prisma.user.findUnique({ where: { id } });
    }

    async update(id: string, dto: UpdateUserDto) {
      const data: Partial<User> = { ...dto };
      return this.prisma.user.update({ 
        where: { id },
        data,
       });
    }

    async remove(id: string) {
      await this.prisma.user.delete({ where: { id } });
      return {message: 'Usuário deletado com sucesso!'};
    }
  }
