import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TaggedService } from './tagged.service';
import { Repository } from 'typeorm';
import { Tagged } from '../entity/tagged.entity';
import { CreateTaggedDto } from '../dto/tagged.dto';

describe('TaggedService', () => {
  let service: TaggedService;
  let repository: Repository<Tagged>;

  const mockTaggedRepository = {
    find: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockImplementation((tagged) => tagged),
    save: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue({ affected: 1 }),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaggedService,
        {
          provide: getRepositoryToken(Tagged),
          useValue: mockTaggedRepository,
        },
      ],
    }).compile();

    service = module.get<TaggedService>(TaggedService);
    repository = module.get<Repository<Tagged>>(getRepositoryToken(Tagged));
  });

  it('deve estar definida', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar um array of taggeds', async () => {
    const taggeds = await service.findAll();
    expect(taggeds).toEqual([]);
  });

  it('deve retornar uma unica tagged', async () => {
    const tagged = { tagId: 1, taskId: 1 };
    mockTaggedRepository.findOne.mockResolvedValue(tagged);
    expect(await service.findOne(1, 1)).toEqual(tagged);
  });

  it('deve criar uma nova tagged', async () => {
    const createTaggedDto: CreateTaggedDto = {
      tagId: 1,
      taskId: 1,
    };

    mockTaggedRepository.save.mockResolvedValueOnce({
      ...createTaggedDto,
    });

    const result = await service.create(createTaggedDto);

    expect(result).toEqual({
      ...createTaggedDto,
    });
  });

  it('deve deletar uma tagged', async () => {
    expect(await service.delete(1, 1)).toEqual(undefined);
  });
});
