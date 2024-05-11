import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entity/task.entity';
import { CreateTaskDto, UpdateTaskDto } from '../dto/task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({
      where: { id_task: id },
    });

    if (!task) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return task;
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      return await this.taskRepository.save(
        this.taskRepository.create(createTaskDto),
      );
    } catch (error) {
      throw new HttpException(
        'Erro ao criar o registro. Tente novamente mais tarde.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<void> {
    const result = await this.taskRepository.update(id, updateTaskDto);
    if (result.affected === 0) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }
}
