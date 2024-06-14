import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateProjectDto, UpdateProjectDto } from '../dto/project.dto';
import { ProjectService } from '../service/project.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard.strategy';

@Controller('project')
@ApiTags('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @ApiOperation({ summary: 'Retorna todos os projetos' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async findAll(): Promise<any[]> {
    return this.projectService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  async getUserProjects(@Req() req) {
    const userId = req.user.userId; // Pegando o ID do usuário autenticado
    return this.projectService.findByUserId(userId);
  }
  
  @Get('user/:iduser')
  @ApiOperation({ summary: 'Retorna todos os projetos do usuario' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async findAllUserProject(@Param('iduser') iduser: number): Promise<any[]> {
    return this.projectService.findAllUserProject(iduser);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um projeto pelo id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async findOne(@Param('id') id: number): Promise<any> {
    return this.projectService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo projeto' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async create(@Body() createProjectDto: CreateProjectDto): Promise<any> {
    return this.projectService.create(createProjectDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Altera projeto selecionado por id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async update(
    @Param('id') id: number,
    @Body() updateProjectDto: UpdateProjectDto,
  ): Promise<any> {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta projeto selecionado por id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.projectService.delete(id);
  }
}
