import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
import { ProjectService } from '../service/project.service';
import { CreateProjectDto } from '../dto/project.dto';
import { UpdateProjectDto } from '../dto/project.dto';

describe('ProjectController', () => {
  let controller: ProjectController;
  let service: ProjectService;

  const mockProjectService = {
    findAll: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue(undefined),
    delete: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [
        {
          provide: ProjectService,
          useValue: mockProjectService,
        },
      ],
    }).compile();

    controller = module.get<ProjectController>(ProjectController);
    service = module.get<ProjectService>(ProjectService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of projects', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should return a single project', async () => {
    const project = {
      id: 1,
      name: 'Test Project',
      color: 1,
    };
    mockProjectService.findOne.mockResolvedValue(project);
    expect(await controller.findOne(1)).toEqual(project);
  });

  it('should create a new project', async () => {
    const createProjectDto: CreateProjectDto = {
      name_project: 'testproject',
      resume_project: 'descricao',
      status_project: `ativo`,
      userIdUser: 1,
    };
    const project = { id: 1, ...createProjectDto };

    mockProjectService.create.mockResolvedValue(project);
    expect(await controller.create(createProjectDto)).toEqual(project);
  });

  it('should update a project', async () => {
    const updateProjectDto: UpdateProjectDto = {
      name_project: 'testproject',
      resume_project: 'descricao',
      status_project: `ativo`,
      userIdUser: 1,
    };

    mockProjectService.update.mockResolvedValue(undefined);

    expect(await controller.update(1, updateProjectDto)).toEqual(undefined);
  });

  it('should delete a project', async () => {
    expect(await controller.delete(1)).toEqual(undefined);
  });
});
