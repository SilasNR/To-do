import { Test, TestingModule } from '@nestjs/testing';
import { TaggedController } from './tagged.controller';
import { TaggedService } from '../service/tagged.service';
import { CreateTaggedDto } from '../dto/tagged.dto';

describe('TaggedController', () => {
  let controller: TaggedController;
  let service: TaggedService;

  const mockTaggedService = {
    findAll: jest.fn().mockResolvedValue([]),
    findOne: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockResolvedValue(null),
    update: jest.fn().mockResolvedValue(undefined),
    delete: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaggedController],
      providers: [
        {
          provide: TaggedService,
          useValue: mockTaggedService,
        },
      ],
    }).compile();

    controller = module.get<TaggedController>(TaggedController);
    service = module.get<TaggedService>(TaggedService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of taggeds', async () => {
    expect(await controller.findAll()).toEqual([]);
  });

  it('should return a single tagged', async () => {
    const tagged = {
      tagId: 1,
      taskId: 1,
    };
    mockTaggedService.findOne.mockResolvedValue(tagged);
    expect(await controller.findOne(1, 1)).toEqual(tagged);
  });

  it('should create a new tagged', async () => {
    const createTaggedDto: CreateTaggedDto = {
      tagId: 1,
      taskId: 1,
    };
    const tagged = { ...createTaggedDto };

    mockTaggedService.create.mockResolvedValue(tagged);
    expect(await controller.create(createTaggedDto)).toEqual(tagged);
  });

  it('should delete a tagged', async () => {
    expect(await controller.delete(1, 1)).toEqual(undefined);
  });
});
