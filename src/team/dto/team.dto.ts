import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';

export class CreateTeamDto {
  @IsInt()
  userId: number;

  @IsInt()
  projectId: number;
}

export class UpdateTeamDto extends PartialType(CreateTeamDto) {}
