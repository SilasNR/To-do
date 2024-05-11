import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../entity/team.entity';
import { CreateTeamDto, UpdateTeamDto } from '../dto/team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async findAll(): Promise<Team[]> {
    return await this.teamRepository.find();
  }

  async findOne(id: number): Promise<Team> {
    const team = await this.teamRepository.findOne({
      where: { id_team: id },
    });

    if (!team) {
      throw new HttpException(`Equipe não encontrada.`, HttpStatus.NOT_FOUND);
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

  async update(id: number, updateTeamDto: UpdateTeamDto): Promise<void> {
    const result = await this.teamRepository.update(id, updateTeamDto);
    if (result.affected === 0) {
      throw new HttpException(`Equipe não encontrada.`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.teamRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Equipe não encontrada.`, HttpStatus.NOT_FOUND);
    }
  }
}
