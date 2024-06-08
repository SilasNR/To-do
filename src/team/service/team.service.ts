import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../entity/team.entity';
import { CreateTeamDto } from '../dto/team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async findAll(): Promise<Team[]> {
    return await this.teamRepository.find({ relations: ['user', 'project'] });
  }

  async findOne(userId: number, projectId: number): Promise<Team> {
    const team = await this.teamRepository.findOne({
      where: { userId, projectId },
      relations: ['user', 'project'],
    });

    if (!team) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return team;
  }

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    try {
      return await this.teamRepository.save(
        this.teamRepository.create(createTeamDto),
      );
    } catch (error) {
      throw new HttpException(
        'Erro ao criar o registro. Tente novamente mais tarde.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(userId: number, projectId: number): Promise<void> {
    const result = await this.teamRepository.delete({ userId, projectId });
    if (result.affected === 0) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }
}
