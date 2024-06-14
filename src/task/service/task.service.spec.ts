import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TaskService } from './task.service';
import { Repository } from 'typeorm';
import { Task } from '../entity/task.entity';
import { CreateTaskDto } from '../dto/task.dto';

describe('TaskService', () => {
  let service: TaskService;
  let repository: Repository<Task>;

  const mockTaskRepository = {
    find: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockImplementation((task) => task),
    save: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue({ affected: 1 }),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        {
          provide: getRepositoryToken(Task),
          useValue: mockTaskRepository,
        },
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
    repository = module.get<Repository<Task>>(getRepositoryToken(Task));
  });

  it('deve estar definida', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar um array of tasks', async () => {
    const tasks = await service.findAll();
    expect(tasks).toEqual([]);
  });

  it('deve retornar uma unica task', async () => {
    const task = { id: 1, name: 'Test Task' };
    mockTaskRepository.findOne.mockResolvedValue(task);
    expect(await service.findOne(1)).toEqual(task);
  });

  it('deve criar uma nova task', async () => {
    const createTaskDto: CreateTaskDto = {
      name: 'testTask',
      description: 'descricao',
      projetoId: 1,
    };

    mockTaskRepository.save.mockResolvedValueOnce({
      id: 1,
      ...createTaskDto,
    });

    const result = await service.create(createTaskDto);

    expect(result).toEqual({
      id: 1,
      ...createTaskDto,
    });
  });

  it('deve atualizar uma task', async () => {
    const updateTaskDto = {
      name: 'testTask',
      description: 'descricao',
      projetoId: 1,
    };

    mockTaskRepository.update.mockResolvedValue({ affected: 1 });

    await service.update(1, updateTaskDto);
    expect(mockTaskRepository.update).toHaveBeenCalledWith(1, updateTaskDto);
  });

  it('deve deletar uma task', async () => {
    expect(await service.delete(1)).toEqual(undefined);
  });
});
