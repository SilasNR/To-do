import { IsString, IsInt } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'Nome da tarefa' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Descrição da tarefa' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Id do projeto a qual a tag pertence' })
  @IsInt()
  projetoId: number;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
