import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from '../dto/task.dto';
import { TaskService } from '../service/task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return this.taskService.findOne(id);
  }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<any> {
    return this.taskService.create(createTaskDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<any> {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.taskService.delete(id);
  }
}
