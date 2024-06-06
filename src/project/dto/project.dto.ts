import { IsDate, IsIn, IsInt, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({ description: 'Nome do projeto' })
  @IsString()
  name_project: string;

  @ApiProperty({ description: 'Breve resumo do projeto' })
  @IsString()
  resume_project: string;

  @ApiProperty({ description: 'Status do projeto' })
  @IsString()
  status_project: string;

  @IsInt()
  projectIdProject: number;
}

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
