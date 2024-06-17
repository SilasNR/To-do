import {
  BadRequestException,
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
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('tag')
@ApiTags('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  @ApiOperation({ summary: 'Retorna todas as tags' })
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  @ApiResponse({ status: 404, description: 'Não encontrado.' })
  async findAll(): Promise<any[]> {
    return this.tagService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna uma tag pelo id' })
  @ApiResponse({ status: 200, description: 'Success.' })
  async findOne(@Param('id') id: number): Promise<any> {
    return this.tagService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria uma nova tag ' })
  @ApiResponse({ status: 201, description: 'Criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  async create(@Body() createTagDto: CreateTagDto): Promise<any> {
    if (!createTagDto || Object.keys(createTagDto).length === 0) {
      throw new BadRequestException(
        'O corpo da requisição não pode estar vazio.',
      );
    }
    return this.tagService.create(createTagDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Altera tag selecionada por id' })
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  @ApiResponse({ status: 404, description: 'Não encontrado.' })
  async update(
    @Param('id') id: number,
    @Body() updateTagDto: UpdateTagDto,
  ): Promise<any> {
    if (!updateTagDto || Object.keys(updateTagDto).length === 0) {
      throw new BadRequestException(
        'O corpo da requisição não pode estar vazio.',
      );
    }
    return this.tagService.update(id, updateTagDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta tag selecionada por id' })
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  @ApiResponse({ status: 404, description: 'Não encontrado.' })
  async delete(@Param('id') id: number): Promise<void> {
    return this.tagService.delete(id);
  }
}
