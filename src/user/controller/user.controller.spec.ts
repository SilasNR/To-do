import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/user.dto';
import { UpdateUserDto } from '../dto/user.dto';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  const mockUserService = {
    findAll: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue(undefined),
    delete: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of users', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should return a single user', async () => {
    const user = {
      id: 1,
      name: 'Test User',
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      secret_question: 'What is your favorite color?',
    };
    mockUserService.findOne.mockResolvedValue(user);
    expect(await controller.findOne(1)).toEqual(user);
  });

  it('should create a new user', async () => {
    const createUserDto: CreateUserDto = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      secret_question: 'What is your favorite color?',
    };
    const user = { id: 1, ...createUserDto };

    mockUserService.create.mockResolvedValue(user);
    expect(await controller.create(createUserDto)).toEqual(user);
  });

  it('should update a user', async () => {
    const updateUserDto: UpdateUserDto = {
      username: 'updateduser',
      email: 'updated@example.com',
      password: 'newpassword123',
      secret_question: 'What is your favorite food?',
    };

    mockUserService.update.mockResolvedValue(undefined);

    expect(await controller.update(1, updateUserDto)).toEqual(undefined);
  });

  it('should delete a user', async () => {
    expect(await controller.delete(1)).toEqual(undefined);
  });
});