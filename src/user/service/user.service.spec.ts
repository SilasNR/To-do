import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from './user.service';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/user.dto';

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

  afterEach(() => {
    jest.clearAllMocks();
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
    const createUserDto: CreateUserDto = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'Password123@',
      secret_question: 'favorite color?',
    };

    mockUserRepository.findOne.mockResolvedValue(null); // Simulate no user found
    mockUserRepository.save.mockResolvedValue({ id: 1, ...createUserDto }); // Simulate successful save

    const result = await service.create(createUserDto);

    expect(result).toEqual({ id: 1, ...createUserDto });
    expect(mockUserRepository.findOne).toHaveBeenCalledWith({
      where: { email: 'test@example.com' },
    });
    expect(mockUserRepository.save).toHaveBeenCalledWith(
      expect.objectContaining(createUserDto),
    );
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