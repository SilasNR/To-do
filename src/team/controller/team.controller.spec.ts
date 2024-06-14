import { Test, TestingModule } from '@nestjs/testing';
import { TeamController } from './team.controller';
import { TeamService } from '../service/team.service';
import { CreateTeamDto } from '../dto/team.dto';

describe('TeamController', () => {
  let controller: TeamController;
  let service: TeamService;

  const mockTeamService = {
    findAll: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue(undefined),
    delete: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamController],
      providers: [
        {
          provide: TeamService,
          useValue: mockTeamService,
        },
      ],
    }).compile();

    controller = module.get<TeamController>(TeamController);
    service = module.get<TeamService>(TeamService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of teams', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should return a single team', async () => {
    const team = {
      userId: 1,
      projectId: 1,
    };
    mockTeamService.findOne.mockResolvedValue(team);
    expect(await controller.findOne(1, 1)).toEqual(team);
  });

  it('should create a new team', async () => {
    const createTeamDto: CreateTeamDto = {
      userId: 1,
      projectId: 1,
    };
    const team = { ...createTeamDto };

    mockTeamService.create.mockResolvedValue(team);
    expect(await controller.create(createTeamDto)).toEqual(team);
  });

  it('should delete a team', async () => {
    expect(await controller.delete(1, 1)).toEqual(undefined);
  });
});
