import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) {}

    create(dto: CreateUserDto) {
      return this.prisma.user.create({ data: dto });
    }

    findAll() {
      return `This action returns all users`;
    }

    findOne(id: string) {
      return `This action returns a #${id} user`;
    }

    update(id: string, updateUserDto: UpdateUserDto) {
      return `This action updates a #${id} user`;
    }

    remove(id: string) {
      return `This action removes a #${id} user`;
    }
  }
