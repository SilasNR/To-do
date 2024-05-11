import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTagDto, UpdateTagDto } from '../dto/tag.dto';
import { TagService } from '../service/tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.tagService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return this.tagService.findOne(id);
  }

  @Post()
  async create(@Body() createTagDto: CreateTagDto): Promise<any> {
    return this.tagService.create(createTagDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTagDto: UpdateTagDto,
  ): Promise<any> {
    return this.tagService.update(id, updateTagDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.tagService.delete(id);
  }
}
