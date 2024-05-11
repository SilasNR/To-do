import { IsString, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTaskDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDate()
  deadline: Date;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
