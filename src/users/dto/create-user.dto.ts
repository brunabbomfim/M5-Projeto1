import { ApiProperty } from '@nestjs/swagger';
import { 
        Length,
        IsString, 
        IsNotEmpty, 
        IsBoolean, 
        IsEmail
    } from 'class-validator';

export class CreateUserDto {
    
    id:string;
    @ApiProperty({
        description: 'User`s name',
        example: "Bruna",
      })
    @IsString()
    @IsNotEmpty()
        name: string;

    @ApiProperty({
        description: 'User`s Email',
        example: "bruna@gmail.com",
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
    @Length(13,14)
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
        
        createdAt: Date;
        updatedAt: Date;
    
}
