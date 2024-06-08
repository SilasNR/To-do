import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from './user.service';
import { User } from '../entity/user.entity';

describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>;

  const mockUserRepository = {
    find: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    save: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue({ affected: 1 }),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of users', async () => {
    const users = await service.findAll();
    expect(users).toEqual([]);
  });

  it('should return a single user', async () => {
    const user = { id: 1, name: 'Test User' };
    mockUserRepository.findOne.mockResolvedValue(user);
    expect(await service.findOne(1)).toEqual(user);
  });

  it('should create a new user', async () => {
    const createUserDto = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'P@ssword123',
      secret_question: 'What is your favorite color?',
    };

    const user = { id: 1, ...createUserDto };

    mockUserRepository.save.mockResolvedValue(user);
    expect(await service.create(createUserDto)).toEqual(user);
  });

  it('should update a user', async () => {
    const updateUserDto = {
      username: 'updateduser',
      email: 'updated@example.com',
      password: 'NewP@ssword123',
      secret_question: 'What is your favorite food?',
    };

    mockUserRepository.update.mockResolvedValue({ affected: 1 });

    await service.update(1, updateUserDto);
    expect(mockUserRepository.update).toHaveBeenCalledWith(1, updateUserDto);
  });

  it('should delete a user', async () => {
    expect(await service.delete(1)).toEqual(undefined);
  });
});
