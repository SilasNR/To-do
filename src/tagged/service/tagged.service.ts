import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tagged } from '../entity/tagged.entity';
import { CreateTaggedDto, UpdateTaggedDto } from '../dto/tagged.dto';

@Injectable()
export class TaggedService {
  constructor(
    @InjectRepository(Tagged)
    private taggedRepository: Repository<Tagged>,
  ) {}

  async findAll(): Promise<Tagged[]> {
    return await this.taggedRepository.find();
  }

  async findOne(id: number): Promise<Tagged> {
    const tagged = await this.taggedRepository.findOne({
      where: { id_tagged: id },
    });

    if (!tagged) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return tagged;
  }

  async create(createTaggedDto: CreateTaggedDto): Promise<Tagged> {
    try {
      return await this.taggedRepository.save(
        this.taggedRepository.create(createTaggedDto),
      );
    } catch (error) {
      throw new HttpException(
        'Erro ao criar o registro. Tente novamente mais tarde.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateTaggedDto: UpdateTaggedDto): Promise<void> {
    const result = await this.taggedRepository.update(id, updateTaggedDto);
    if (result.affected === 0) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.taggedRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }
}
