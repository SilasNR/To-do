import { IsEmail, IsString, Length, Matches} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Usuário do usuário' })
  @IsString()
  @Length(8, 40, { message: 'o tamanho minimo do usuario é 8 caracteres' })
  username: string;

  @ApiProperty({ description: 'Email do usuário' })
  @IsEmail()
  @Length(8, 40, { message: 'o tamanho minimo do e-mail é 8 caracteres' })
  email: string;

  @ApiProperty({ description: 'Senha do usuário' })
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
    message:
      'a senha deve ter pelo menos 8 caracteres, incluindo uma pelo menos: uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
  })
  password: string;

  @ApiProperty({ description: 'Resposta da pergunta secreta para recuperar a senha' })
  @IsString()
  secret_question: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
