import { IsDate, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsDate()
  creation_date: Date;

  @IsString()
  status: string;
}

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
