import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTagDto {
  @IsString()
  name: string;

  @IsNumber()
  color: number;
}

export class UpdateTagDto extends PartialType(CreateTagDto) {}
