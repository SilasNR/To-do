import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { TaggedService } from '../service/tagged.service';
import { CreateTaggedDto } from '../dto/tagged.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('tagged')
@ApiTags('tagged')
export class TaggedController {
  constructor(private readonly taggedService: TaggedService) {}

  @Get()
  @ApiOperation({ summary: 'Retorna todos os relacionamentos' })
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  async findAll(): Promise<any[]> {
    return this.taggedService.findAll();
  }

  @Get(':tagId/:taskId')
  @ApiOperation({
    summary: 'Retorna um relacionamento pelo ID da tag e ID da tarefa',
  })
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  @ApiResponse({ status: 404, description: 'Não encontrado.' })
  async findOne(
    @Param('tagId') tagId: number,
    @Param('taskId') taskId: number,
  ): Promise<any> {
    return this.taggedService.findOne(tagId, taskId);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo relacionamento' })
  @ApiResponse({ status: 201, description: 'Criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  async create(@Body() createTaggedDto: CreateTaggedDto): Promise<any> {
    if (!createTaggedDto || Object.keys(createTaggedDto).length === 0) {
      throw new BadRequestException(
        'O corpo da requisição não pode estar vazio.',
      );
    }
    return this.taggedService.create(createTaggedDto);
  }

  @Delete(':tagId/:taskId')
  @ApiOperation({
    summary: 'Deleta um relacionamento pelo ID da tag e ID da tarefa',
  })
  @ApiResponse({ status: 200, description: 'Operação bem sucedida.' })
  @ApiResponse({ status: 400, description: 'Erro.' })
  @ApiResponse({ status: 404, description: 'Não encontrado.' })
  async delete(
    @Param('tagId') tagId: number,
    @Param('taskId') taskId: number,
  ): Promise<void> {
    return this.taggedService.delete(tagId, taskId);
  }
}
