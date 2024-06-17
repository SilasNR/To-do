import { Test, TestingModule } from '@nestjs/testing';
import { TagController } from './tag.controller';
import { TagService } from '../service/tag.service';
import { CreateTagDto } from '../dto/tag.dto';
import { UpdateTagDto } from '../dto/tag.dto';

describe('TagController', () => {
  let controller: TagController;
  let service: TagService;

  const mockTagService = {
    findAll: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue(undefined),
    delete: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagController],
      providers: [
        {
          provide: TagService,
          useValue: mockTagService,
        },
      ],
    }).compile();

    controller = module.get<TagController>(TagController);
    service = module.get<TagService>(TagService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of tags', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should return a single tag', async () => {
    const tag = {
      id: 1,
      name: 'Test Tag',
      color: 1,
    };
    mockTagService.findOne.mockResolvedValue(tag);
    expect(await controller.findOne(1)).toEqual(tag);
  });

  it('should create a new tag', async () => {
    const createTagDto: CreateTagDto = {
      name: 'testtag',
      color: 1,
    };
    const tag = { id: 1, ...createTagDto };

    mockTagService.create.mockResolvedValue(tag);
    expect(await controller.create(createTagDto)).toEqual(tag);
  });

  it('should update a tag', async () => {
    const updateTagDto: UpdateTagDto = {
      name: 'updatedtag',
      color: 1,
    };

    mockTagService.update.mockResolvedValue(undefined);

    expect(await controller.update(1, updateTagDto)).toEqual(undefined);
  });

  it('should delete a tag', async () => {
    expect(await controller.delete(1)).toEqual(undefined);
  });
});