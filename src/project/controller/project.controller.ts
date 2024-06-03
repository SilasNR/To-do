import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProjectDto, UpdateProjectDto } from '../dto/project.dto';
import { ProjectService } from '../service/project.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

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
