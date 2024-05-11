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

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.projectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return this.projectService.findOne(id);
  }

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto): Promise<any> {
    return this.projectService.create(createProjectDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProjectDto: UpdateProjectDto,
  ): Promise<any> {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.projectService.delete(id);
  }
}
