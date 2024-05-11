import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTeamDto, UpdateTeamDto } from '../dto/team.dto';
import { TeamService } from '../service/team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.teamService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return this.teamService.findOne(id);
  }

  @Post()
  async create(@Body() createTeamDto: CreateTeamDto): Promise<any> {
    return this.teamService.create(createTeamDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<any> {
    return this.teamService.update(id, updateTeamDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.teamService.delete(id);
  }
}
