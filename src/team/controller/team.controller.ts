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

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um time pelo id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async findOne(@Param('id') id: number): Promise<any> {
    return this.teamService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo time' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async create(@Body() createTeamDto: CreateTeamDto): Promise<any> {
    return this.teamService.create(createTeamDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Altera time selecionado por id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async update(
    @Param('id') id: number,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<any> {
    return this.teamService.update(id, updateTeamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta time selecionado por id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.teamService.delete(id);
  }
}
