import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
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
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  async findAll(): Promise<any[]> {
    return this.teamService.findAll();
  }

  @Get(':userId/:projectId')
  @ApiOperation({ summary: 'Retorna um time pelo id' })
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  @ApiResponse({ status: 404, description: 'Não encontrado.' })
  async findOne(
    @Param('userId') userId: number,
    @Param('projectId') projectId: number,
  ): Promise<any> {
    return this.teamService.findOne(userId, projectId);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo time' })
  @ApiResponse({ status: 201, description: 'Criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  async create(@Body() createTeamDto: CreateTeamDto): Promise<any> {
    if (!createTeamDto || Object.keys(createTeamDto).length === 0) {
      throw new BadRequestException(
        'O corpo da requisição não pode estar vazio.',
      );
    }
    return this.teamService.create(createTeamDto);
  }

  @Delete(':userId/:projectId')
  @ApiOperation({ summary: 'Deleta time selecionado por id' })
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  @ApiResponse({ status: 404, description: 'Não encontrado.' })
  async delete(
    @Param('userId') userId: number,
    @Param('projectId') projectId: number,
  ): Promise<void> {
    return this.teamService.delete(userId, projectId);
  }
}
