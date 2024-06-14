import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProjectService } from './project.service';
import { Repository } from 'typeorm';
import { Project } from '../entity/project.entity';
import { CreateProjectDto } from '../dto/project.dto';

describe('ProjectService', () => {
  let service: ProjectService;
  let repository: Repository<Project>;

  const mockProjectRepository = {
    find: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockImplementation((project) => project),
    save: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue({ affected: 1 }),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectService,
        {
          provide: getRepositoryToken(Project),
          useValue: mockProjectRepository,
        },
      ],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
    repository = module.get<Repository<Project>>(getRepositoryToken(Project));
  });

  it('deve estar definida', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar um array of projects', async () => {
    const projects = await service.findAll();
    expect(projects).toEqual([]);
  });

  it('deve retornar uma unica project', async () => {
    const project = {
      id: 1,
      name_project: 'testProject',
      status_project: 'status',
      resume_project: 'resume',
      userIdUser: 1,
    };
    mockProjectRepository.findOne.mockResolvedValue(project);
    expect(await service.findOne(1)).toEqual(project);
  });

  it('deve criar uma nova project', async () => {
    const createProjectDto: CreateProjectDto = {
      name_project: 'testProject',
      status_project: 'status',
      resume_project: 'resume',
      userIdUser: 1,
    };

    mockProjectRepository.save.mockResolvedValueOnce({
      id: 1,
      ...createProjectDto,
    });

    const result = await service.create(createProjectDto);

    expect(result).toEqual({
      id: 1,
      ...createProjectDto,
    });
  });

  it('deve atualizar uma project', async () => {
    const updateProjectDto = {
      name_project: 'updatedTestProject',
      status_project: 'status',
      resume_project: 'resume',
      userIdUser: 1,
    };

    mockProjectRepository.update.mockResolvedValue({ affected: 1 });

    await service.update(1, updateProjectDto);
    expect(mockProjectRepository.update).toHaveBeenCalledWith(
      1,
      updateProjectDto,
    );
  });

  it('deve deletar uma project', async () => {
    expect(await service.delete(1)).toEqual(undefined);
  });
});
