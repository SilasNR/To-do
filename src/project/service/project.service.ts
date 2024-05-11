import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from '../entity/project.entity';
import { CreateProjectDto, UpdateProjectDto } from '../dto/project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async findOne(id: number): Promise<Project> {
    const project = await this.projectRepository.findOne({
      where: { id_project: id },
    });

    if (!project) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return project;
  }

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    try {
      return await this.projectRepository.save(
        this.projectRepository.create(createProjectDto),
      );
    } catch (error) {
      throw new HttpException(
        'Erro ao criar o registro. Tente novamente mais tarde.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateProjectDto: UpdateProjectDto): Promise<void> {
    const result = await this.projectRepository.update(id, updateProjectDto);
    if (result.affected === 0) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.projectRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }
}
