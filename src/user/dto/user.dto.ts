import { IsEmail, IsString, Length, Matches, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @Length(8, 40, { message: 'o tamanho minimo do usuario é 8 caracteres' })
  username: string;

  @IsEmail()
  @Length(8, 40, { message: 'o tamanho minimo do e-mail é 8 caracteres' })
  email: string;

  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
    message:
      'a senha deve ter pelo menos 8 caracteres, incluindo uma pelo menos: uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
  })
  password: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  secret_question: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
