import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaggedDto, UpdateTaggedDto } from '../dto/tagged.dto';
import { TaggedService } from '../service/tagged.service';

@Controller('tagged')
export class TaggedController {
  constructor(private readonly taggedService: TaggedService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.taggedService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return this.taggedService.findOne(id);
  }

  @Post()
  async create(@Body() createTaggedDto: CreateTaggedDto): Promise<any> {
    return this.taggedService.create(createTaggedDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTaggedDto: UpdateTaggedDto,
  ): Promise<any> {
    return this.taggedService.update(id, updateTaggedDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.taggedService.delete(id);
  }
}
