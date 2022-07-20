import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movie/movie.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, MovieModule, GenreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
