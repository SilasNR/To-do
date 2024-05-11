import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from '../entity/tag.entity';
import { CreateTagDto, UpdateTagDto } from '../dto/tag.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async findAll(): Promise<Tag[]> {
    return await this.tagRepository.find();
  }

  async findOne(id: number): Promise<Tag> {
    const tag = await this.tagRepository.findOne({
      where: { id_tag: id },
    });

    if (!tag) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
    return tag;
  }

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    try {
      return await this.tagRepository.save(
        this.tagRepository.create(createTagDto),
      );
    } catch (error) {
      throw new HttpException(
        'Erro ao criar o registro. Tente novamente mais tarde.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateTagDto: UpdateTagDto): Promise<void> {
    const result = await this.tagRepository.update(id, updateTagDto);
    if (result.affected === 0) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.tagRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException(`Não encontrado.`, HttpStatus.NOT_FOUND);
    }
  }
}
