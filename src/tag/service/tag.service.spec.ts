import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TagService } from './tag.service';
import { Repository } from 'typeorm';
import { Tag } from '../entity/tag.entity';
import { CreateTagDto } from '../dto/tag.dto';

describe('TagService', () => {
  let service: TagService;
  let repository: Repository<Tag>;

  const mockTagRepository = {
    find: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockImplementation((tag) => tag),
    save: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue({ affected: 1 }),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TagService,
        {
          provide: getRepositoryToken(Tag),
          useValue: mockTagRepository,
        },
      ],
    }).compile();

    service = module.get<TagService>(TagService);
    repository = module.get<Repository<Tag>>(getRepositoryToken(Tag));
  });

  it('deve estar definida', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar um array of tags', async () => {
    const tags = await service.findAll();
    expect(tags).toEqual([]);
  });

  it('deve retornar uma unica tag', async () => {
    const tag = { id: 1, name: 'Test Tag' };
    mockTagRepository.findOne.mockResolvedValue(tag);
    expect(await service.findOne(1)).toEqual(tag);
  });

  it('deve criar uma nova tag', async () => {
    const createTagDto: CreateTagDto = {
      name: 'testTag',
      color: 1,
    };

    mockTagRepository.save.mockResolvedValueOnce({
      id: 1,
      ...createTagDto,
    });

    const result = await service.create(createTagDto);

    expect(result).toEqual({
      id: 1,
      ...createTagDto,
    });
  });

  it('deve atualizar uma tag', async () => {
    const updateTagDto = {
      name: 'testTag',
      color: 1,
    };

    mockTagRepository.update.mockResolvedValue({ affected: 1 });

    await service.update(1, updateTagDto);
    expect(mockTagRepository.update).toHaveBeenCalledWith(1, updateTagDto);
  });

  it('deve deletar uma tag', async () => {
    expect(await service.delete(1)).toEqual(undefined);
  });
});