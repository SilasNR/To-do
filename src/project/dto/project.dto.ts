import { IsDate, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ description: 'Nome do projeto' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Data de criaçâo do projeto' })
  @IsDate()
  creation_date: Date;

  @ApiProperty({ description: 'Status do projeto' })
  @IsString()
  status: string;
}

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
