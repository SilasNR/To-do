import { IsBoolean, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';


export class CreateTeamDto {
  @ApiProperty({ description: 'Usuario participa do projeto' })
  @IsBoolean()
  is_active: boolean;

  @ApiProperty({ description: 'Data que o usuario entrou no projeto' })
  @IsDate()
  joined_at: Date;
}

export class UpdateTeamDto extends PartialType(CreateTeamDto) {}
