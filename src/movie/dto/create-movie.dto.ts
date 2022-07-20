import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({
    description: 'Movie`s name',
    example: 'Harry Potter',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Synopsis of the film',
    example:
      'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos.',
  })
  @IsString()
  @IsNotEmpty()
  sinopse: string;

  @ApiProperty({
    description: 'Movie time',
    example: '50 minutos',
  })
  @IsString()
  @IsNotEmpty()
  time: string;

  @ApiProperty({
    description: 'Film cover',
    example:
      'https://canaltech.com.br/entretenimento/harry-potter-qual-o-melhor-filme/',
  })
  @IsUrl()
  @IsString()
  @IsNotEmpty()
  imageURL: string;

  @ApiProperty({
    description: 'Movie video',
    example:
      'https://canaltech.com.br/entretenimento/harry-potter-qual-o-melhor-filme/',
  })
  @IsUrl()
  @IsString()
  @IsNotEmpty()
  video: string;

  @ApiProperty({
    description: 'Name of genre of movie',
    example: 'Action',
  })
  genreName: string;
}
