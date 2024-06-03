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
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('tagged')
@ApiTags('tagged')
export class TaggedController {
  constructor(private readonly taggedService: TaggedService) {}

  @Get()
  @ApiOperation({
    summary:
      'Retorna todos registros de tagged (tabela união entre tarefa e tag)',
  })
  @ApiResponse({ status: 200, description: 'Success.' })
  async findAll(): Promise<any[]> {
    return this.taggedService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um registro de tagged pelo id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async findOne(@Param('id') id: number): Promise<any> {
    return this.taggedService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo registro de tagged' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async create(@Body() createTaggedDto: CreateTaggedDto): Promise<any> {
    return this.taggedService.create(createTaggedDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Altera registro de tagged selecionado por id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async update(
    @Param('id') id: number,
    @Body() updateTaggedDto: UpdateTaggedDto,
  ): Promise<any> {
    return this.taggedService.update(id, updateTaggedDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta registro de tagged selecionado por id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.taggedService.delete(id);
  }
}
