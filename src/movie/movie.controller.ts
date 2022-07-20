import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('movie')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  @ApiOperation({ summary: 'Create movie' })
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all movies' })
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one movie for ID' })
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update movie for ID' })
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete movie for ID' })
  remove(@Param('id') id: string) {
    return this.movieService.remove(id);
  }
}
