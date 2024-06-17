import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';

export class CreateTaggedDto {
  @IsInt()
  tagId: number;

  @IsInt()
  taskId: number;
}

export class UpdateTaggedDto extends PartialType(CreateTaggedDto) {}
