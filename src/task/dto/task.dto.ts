import { IsString, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'Nome da tarefa' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Descrição da tarefa' })
  @IsString()
  description: string;

}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
