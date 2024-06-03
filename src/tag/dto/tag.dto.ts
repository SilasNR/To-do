import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';


export class CreateTagDto {
  @ApiProperty({ description: 'Nome da tag' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Cor da tag' })
  @IsNumber()
  color: number;
}

export class UpdateTagDto extends PartialType(CreateTagDto) {}
