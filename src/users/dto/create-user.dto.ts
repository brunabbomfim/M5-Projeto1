import { ApiProperty } from '@nestjs/swagger';
import {
  Length,
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsEmail,
  IsUUID,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User`s name',
    example: 'Bruna',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User`s Email',
    example: 'bruna@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User`s senha',
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'User`s CPF number',
    example: '123.123.123-44',
  })
  @Length(13, 14)
  @IsString()
  @IsNotEmpty()
  CPF: string;

  @ApiProperty({
    description: 'If user is Admin of server',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  isAdmin: boolean;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'List with IDs of movies',
    example:
      '["04f66779-bcfa-4c5c-a140-f234138890f3", "adb96fd7-cdcf-43dc-9e1b-0c0a262111f9"]',
  })
  favoriteMovies: string[];
}
