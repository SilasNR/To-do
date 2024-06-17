import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TeamService } from './team.service';
import { Repository } from 'typeorm';
import { Team } from '../entity/team.entity';
import { CreateTeamDto } from '../dto/team.dto';

describe('TeamService', () => {
  let service: TeamService;
  let repository: Repository<Team>;

  const mockTeamRepository = {
    find: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockImplementation((team) => team),
    save: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue({ affected: 1 }),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeamService,
        {
          provide: getRepositoryToken(Team),
          useValue: mockTeamRepository,
        },
      ],
    }).compile();

    service = module.get<TeamService>(TeamService);
    repository = module.get<Repository<Team>>(getRepositoryToken(Team));
  });

  it('deve estar definida', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar um array of teams', async () => {
    const teams = await service.findAll();
    expect(teams).toEqual([]);
  });

  it('deve retornar uma unica team', async () => {
    const team = { userId: 1, projectId: 1 };
    mockTeamRepository.findOne.mockResolvedValue(team);
    expect(await service.findOne(1, 1)).toEqual(team);
  });

  it('deve criar uma nova team', async () => {
    const createTeamDto: CreateTeamDto = {
      userId: 1,
      projectId: 1,
    };

    mockTeamRepository.save.mockResolvedValueOnce({
      ...createTeamDto,
    });

    const result = await service.create(createTeamDto);

    expect(result).toEqual({
      ...createTeamDto,
    });
  });

  it('deve deletar uma team', async () => {
    expect(await service.delete(1, 1)).toEqual(undefined);
  });
});
