import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from '../service/task.service';
import { CreateTaskDto } from '../dto/task.dto';
import { UpdateTaskDto } from '../dto/task.dto';

describe('TaskController', () => {
  let controller: TaskController;
  let service: TaskService;

  const mockTaskService = {
    findAll: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue(undefined),
    delete: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        {
          provide: TaskService,
          useValue: mockTaskService,
        },
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of tasks', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should return a single task', async () => {
    const task = {
      id: 1,
      name: 'testTask',
      description: 'descricao',
      projetoId: 1,
    };
    mockTaskService.findOne.mockResolvedValue(task);
    expect(await controller.findOne(1)).toEqual(task);
  });

  it('should create a new task', async () => {
    const createTaskDto: CreateTaskDto = {
      name: 'testTask',
      description: 'descricao',
      projetoId: 1,
    };
    const task = { id: 1, ...createTaskDto };

    mockTaskService.create.mockResolvedValue(task);
    expect(await controller.create(createTaskDto)).toEqual(task);
  });

  it('should update a task', async () => {
    const updateTaskDto: UpdateTaskDto = {
      name: 'testTask',
      description: 'descricao',
      projetoId: 1,
    };

    mockTaskService.update.mockResolvedValue(undefined);

    expect(await controller.update(1, updateTaskDto)).toEqual(undefined);
  });

  it('should delete a task', async () => {
    expect(await controller.delete(1)).toEqual(undefined);
  });
});
