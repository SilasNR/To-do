import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTeamDto } from '../dto/team.dto';
import { TeamService } from '../service/team.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('team')
@ApiTags('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  @ApiOperation({
    summary: 'Retorna todos "times", registros de usuarios em projetos',
  })
  @ApiResponse({ status: 200, description: 'Success.' })
  async findAll(): Promise<any[]> {
    return this.teamService.findAll();
  }

  @Get(':userId/:projectId')
  @ApiOperation({ summary: 'Retorna um time pelo id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async findOne(
    @Param('userId') userId: number,
    @Param('projectId') projectId: number,
  ): Promise<any> {
    return this.teamService.findOne(userId, projectId);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo time' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async create(@Body() createTeamDto: CreateTeamDto): Promise<any> {
    return this.teamService.create(createTeamDto);
  }

  @Delete(':userId/:projectId')
  @ApiOperation({ summary: 'Deleta time selecionado por id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async delete(
    @Param('userId') userId: number,
    @Param('projectId') projectId: number,
  ): Promise<void> {
    return this.teamService.delete(userId, projectId);
  }
}
