import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tagged } from '../entity/tagged.entity';
import { CreateTaggedDto } from '../dto/tagged.dto';

@Injectable()
export class TaggedService {
  constructor(
    @InjectRepository(Tagged)
    private taggedRepository: Repository<Tagged>,
  ) {}

  async findAll(): Promise<Tagged[]> {
    return await this.taggedRepository.find({ relations: ['tag', 'task'] });
  }

  async findOne(tagId: number, taskId: number): Promise<Tagged> {
    const tagged = await this.taggedRepository.findOne({
      where: { tagId, taskId },
      relations: ['tag', 'task'],
    });

    if (!tagged) {
      throw new HttpException('Não encontrado.', HttpStatus.NOT_FOUND);
    }
    return tagged;
  }

  async create(createTaggedDto: CreateTaggedDto): Promise<Tagged> {
    const tagged = this.taggedRepository.create(createTaggedDto);
    try {
      return await this.taggedRepository.save(tagged);
    } catch (error) {
      throw new HttpException(
        'Erro ao criar o registro. Tente novamente mais tarde.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(tagId: number, taskId: number): Promise<void> {
    const result = await this.taggedRepository.delete({ tagId, taskId });
    if (result.affected === 0) {
      throw new HttpException('Não encontrado.', HttpStatus.NOT_FOUND);
    }
  }
}
