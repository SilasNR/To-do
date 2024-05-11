import { IsBoolean, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTeamDto {
  @IsBoolean()
  is_active: boolean;

  @IsDate()
  joined_at: Date;
}

export class UpdateTeamDto extends PartialType(CreateTeamDto) {}
