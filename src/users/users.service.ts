import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';


@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
      return await this.prisma.user.create({ data: dto });
    }

    async findAll() {
      return await this.prisma.user.findMany();
    }

    async findOne(id: string) {
      return await this.prisma.user.findFirst({ where: { id } });
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
